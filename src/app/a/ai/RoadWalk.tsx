"use client";

import Image, { getImageProps } from "next/image";
import { useEffect, useRef, type ReactNode } from "react";
import { preload } from "react-dom";
import { HORIZON_CREDIT, HORIZON_CREDIT_LABEL, HORIZON_PHOTO } from "./horizon";
import HorizonWindmill from "./HorizonWindmill";
import styles from "./walk.module.css";

// The /a/ai road walk. Scroll moves a camera forward along a prairie road.
// Each [data-stop] child is a roadside board. It rises from the vanishing
// point, holds at reading distance, then grows past your shoulder.
//
// The CSS decides whether the walk exists: under (prefers-reduced-motion:
// no-preference) and (scripting: enabled) the stage turns sticky and 3D,
// otherwise the boards render as an ordinary stacked page. The JS follows
// the CSS (it runs whenever the stage is sticky), so the two can't disagree.
// A reduced-motion change is the trigger to look again; WALK_QUERY only
// scopes the preload.
//
// Units: z is in CSS px at the stage perspective (1000px, horizon at 40%). Scroll is measured in "screens"
// (multiples of the stage height). A board at z = cam sits at scale 1.

const WALK_QUERY = "(prefers-reduced-motion: no-preference) and (scripting: enabled)";
const CREEP = 120; // how far the camera drifts while a board is held
const DASH = 180; // road dash period, must match .road background
const POST_GAP = 520; // fence post spacing
const POSTS = 28; // posts per side, on a treadmill
const SMOOTH = 7.7; // per-second damping, about 0.12 per 60 fps frame
const TRAVEL = 0.55; // global scale on travel scroll between boards
const HOLD = 0.8; // global scale on hold scroll at each board

// Field patches: [left edge, right edge, fill] at the bottom of the screen,
// each a wedge to the vanishing point. Mostly green (pasture, young wheat,
// a darker hay meadow) with a few gold wheat fields, so the clear side of
// the storm reads as plains, not desert. Brand greens and wheat only.
const FIELDS: [number, number, string][] = [
  [-420, -230, "#7A8B5C59"],
  [-230, -120, "#C4A26573"],
  [-120, -55, "#5E6E4461"],
  [-55, -8, "#9CAF8880"],
  [-8, 28, "#7A8B5C40"],
  [72, 104, "#9CAF8873"],
  [104, 160, "#C4A26566"],
  [160, 250, "#7A8B5C66"],
  [250, 400, "#9CAF8866"],
  [400, 560, "#C4A26559"],
];

// The storm sky is 1.5 x max(66.7vw, 60.6svh) wide (walk.module.css), so on
// screens narrower than 10:11 it is about 91vh wide, not 100vw.
const STORM_SIZES = "(max-aspect-ratio: 10/11) 91vh, 100vw";
const storm = getImageProps({ src: HORIZON_PHOTO, alt: "", fill: true, sizes: STORM_SIZES }).props;

export type Mark = { id: string; label: string };

type Seg = { u0: number; u1: number; c0: number; c1: number; ease: boolean };
// o, pe and k cache the last written opacity, pointer-events and --k, so frames
// only touch the DOM when a value changes.
type Board = { el: HTMLElement; z: number; uA: number; uB: number; peak: boolean; o?: string; pe?: string; k?: string };

const clamp = (v: number, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, v));
// A board's data-* number, or the fallback when it is missing, empty or not
// a number: one NaN would void every transform on the walk.
const num = (v: string | undefined, fallback: number) => {
  const n = v === undefined || v.trim() === "" ? NaN : Number(v);
  return Number.isFinite(n) ? n : fallback;
};
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const smooth = (a: number, b: number, t: number) => {
  const x = clamp((t - a) / (b - a));
  return x * x * (3 - 2 * x);
};

type Els = {
  track: HTMLElement;
  stage: HTMLElement;
  world: HTMLElement;
  road: HTMLElement;
  posts: HTMLElement;
  mill: HTMLElement;
  rail: HTMLElement | null;
};

// Runs the walk until the returned function is called. That removes every
// listener and inline style the walk set, so the flat page takes over.
function startWalk({ track: trackEl, stage: stageEl, world: worldEl, road: roadEl, posts: postsEl, mill: millEl, rail: railEl }: Els) {
  const boardEls = [...worldEl.querySelectorAll<HTMLElement>("[data-stop]")];
  const railBtns = [...(railEl?.querySelectorAll<HTMLButtonElement>("button") ?? [])];
  let disposed = false;

  let boards: Board[] = [];
  let segs: Seg[] = [];
  let total = 1;
  let vh = 1;
  let us = 0; // smoothed scroll position, in screens
  let last = 0;
  let raf = 0;
  let millZ = 0;
  let railCur = -1;
  let millVis = "";
  let railBoards: (Board | undefined)[] = [];
  let clearS = "";
  let resizeRaf = 0;

  const camAt = (u: number) => {
    for (const s of segs) {
      if (u <= s.u1) {
        const t = s.u1 > s.u0 ? clamp((u - s.u0) / (s.u1 - s.u0)) : 1;
        return s.c0 + (s.c1 - s.c0) * (s.ease ? easeInOut(t) : t);
      }
    }
    return segs.length ? segs[segs.length - 1].c1 : 0;
  };

  const measure = () => {
    vh = Math.max(1, stageEl.clientHeight);
    const vw = stageEl.clientWidth;
    const narrow = vw < 760;
    const ground = narrow ? 0.8 : 0.75;
    // Read every board's size before writing anything, so the writes below
    // can't force a reflow per board.
    const sizes = boardEls.map((el) => [el.offsetWidth, el.offsetHeight] as const);
    stageEl.style.setProperty("--ground", `${ground * 100}%`);
    let z = CREEP, u = 0, cam = 0;
    segs = [];
    boards = boardEls.map((el, i) => {
      const gap = num(el.dataset.gap, 1400);
      const hold = num(el.dataset.hold, 0.6) * HOLD;
      const pace = num(el.dataset.pace, 0.8);
      if (i > 0) {
        z += gap;
        const travel = (gap / 1000) * pace * TRAVEL;
        segs.push({ u0: u, u1: u + travel, c0: cam, c1: z - CREEP, ease: true });
        u += travel;
        cam = z - CREEP;
      }
      const uA = u;
      segs.push({ u0: u, u1: u + hold, c0: cam, c1: z, ease: false });
      u += hold;
      cam = z;
      // Keep the board's foot above the ground line so its posts can stand.
      const [w, h] = sizes[i];
      // Boards stand on the shoulders, inner edge clear of the road ahead,
      // angled to face the walker. data-x picks the side (sign only); 0 is
      // across the road (the gate). Phones have no room for a clear lane,
      // so boards only lean toward their side there.
      const xf = num(el.dataset.x, 0);
      const side = Math.sign(xf);
      const lane = Math.min(Math.max(170, vw * 0.11), Math.max(0, vw / 2 - 20 - w));
      const x = narrow ? side * Math.max(0, (vw - w) / 2 - 8) : side * (lane + w / 2);
      const turn = narrow ? 0 : side * 11;
      const room = (ground - 0.5) * vh - h / 2 - 28;
      const y = Math.max(Math.min(num(el.dataset.y, 0) * vh, room), -(0.5 * vh - h / 2 - 12));
      el.style.setProperty("--post", `${Math.max(0, (ground - 0.5) * vh - y - h / 2)}px`);
      el.style.transform = `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), ${-z}px) rotateY(${turn}deg)`;
      return { el, z, uA, uB: u, peak: el.hasAttribute("data-peak") };
    });
    total = u;
    railBoards = railBtns.map((btn) => boards.find((b) => b.el.id === btn.dataset.target));
    trackEl.style.height = `${(total + 1) * vh}px`;

    // Fence posts ride a treadmill: fixed slots, shifted by cam mod gap.
    const fence = narrow ? vw * 0.62 : vw * 0.56;
    [...postsEl.children].forEach((p, i) => {
      const k = Math.floor(i / 2);
      const s = i % 2 ? 1 : -1;
      (p as HTMLElement).style.transform = `translate3d(${s * fence}px, -100%, ${-k * POST_GAP + 400}px)`;
    });

    // The windmill stands well off the road, past the board marked
    // data-landmark (the start of the approach markers).
    const at = boards.find((b) => b.el.hasAttribute("data-landmark"));
    millZ = (at?.z ?? 20000) + 2600;
    millEl.style.transform = `translate3d(${vw * (narrow ? 0.9 : 0.95)}px, 0, ${-millZ}px)`;
  };

  const draw = (u: number) => {
    const cam = camAt(u);
    worldEl.style.transform = `translate3d(0,0,${cam}px)`;
    // The road is a treadmill too: it stays with the camera and only its
    // dashes slide, so its fixed length is draw distance, not walk length.
    roadEl.style.transform = `translateZ(700px) rotateX(-90deg) translateY(${-(cam % DASH)}px)`;
    postsEl.style.transform = `translate3d(0,0,${cam % POST_GAP}px)`;
    const md = cam - millZ;
    const mv = md > 700 ? "hidden" : "visible";
    if (mv !== millVis) millEl.style.visibility = millVis = mv;

    let clear = 0;
    boards.forEach((b) => {
      const d = cam - b.z;
      const o = d < 0 ? clamp((2800 + d) / 1600) : clamp(1 - d / 420);
      // Opacity only, never visibility: hidden boards would drop out of the
      // tab order, and focusing a far board is how keyboard users walk.
      const os = o.toFixed(3);
      const pe = Math.abs(d) < 260 ? "auto" : "none";
      if (b.o !== os) b.el.style.opacity = b.o = os;
      if (b.pe !== pe) b.el.style.pointerEvents = b.pe = pe;
      if (b.peak) {
        const span = b.uB - b.uA;
        const local = span > 0 ? (u - b.uA) / span : 1;
        const k = smooth(0.12, 0.72, local);
        const ks = k.toFixed(4);
        if (b.k !== ks) b.el.style.setProperty("--k", (b.k = ks));
        // The sky clears at the first peak and stays clear past any later one.
        clear = Math.max(clear, smooth(0.3, 0.9, local));
      }
    });
    const cs = clear.toFixed(4);
    if (cs !== clearS) stageEl.style.setProperty("--clear", (clearS = cs));

    // Rail: the last marker whose board we have reached.
    let current = 0;
    railBoards.forEach((b, i) => {
      if (b && u >= b.uA - 0.15) current = i;
    });
    if (current !== railCur) {
      railCur = current;
      railBtns.forEach((btn, i) => btn.setAttribute("aria-current", i === current ? "step" : "false"));
    }
  };

  const target = () => clamp(-trackEl.getBoundingClientRect().top / vh, 0, total);

  const tick = (now: number) => {
    const dt = last ? Math.min(0.05, (now - last) / 1000) : 1 / 60;
    last = now;
    const t = target();
    us += (t - us) * (1 - Math.exp(-dt * SMOOTH));
    if (Math.abs(t - us) < 0.0004) us = t;
    draw(us);
    raf = us === t ? 0 : requestAnimationFrame(tick);
    if (!raf) last = 0;
  };
  const wake = () => {
    if (!raf) raf = requestAnimationFrame(tick);
  };

  // Boards are matched by element, since most of them have no id.
  const scrollToBoard = (target: string | HTMLElement, at = 0.65) => {
    const b = boards.find((x) => (typeof target === "string" ? x.el.id === target : x.el === target));
    if (!b) return false;
    const top = trackEl.getBoundingClientRect().top + scrollY;
    scrollTo({ top: top + (b.uA + (b.uB - b.uA) * at) * vh, behavior: "auto" });
    return true;
  };

  const onResize = () => {
    const frac = total ? us / total : 0;
    measure();
    us = frac * total;
    draw(us);
    wake();
  };
  // Resize fires many times per drag; measure at most once a frame.
  const onResizeEvent = () => {
    if (!resizeRaf) resizeRaf = requestAnimationFrame(() => {
      resizeRaf = 0;
      onResize();
    });
  };
  const onFocus = (e: FocusEvent) => {
    const el = (e.target as HTMLElement).closest<HTMLElement>("[data-stop]");
    // Defer: the browser's own scroll-focused-element-into-view runs after
    // focusin and would otherwise overwrite this.
    if (el) requestAnimationFrame(() => !disposed && scrollToBoard(el));
  };
  const onHash = () => {
    // A malformed fragment (a bare "%") makes decodeURIComponent throw;
    // ignore it rather than break the walk.
    let id = "";
    try {
      id = decodeURIComponent(location.hash.slice(1));
    } catch {
      return;
    }
    if (id) scrollToBoard(id);
  };
  const onRail = (e: MouseEvent) => {
    const btn = (e.target as HTMLElement).closest<HTMLButtonElement>("button[data-target]");
    const id = btn?.dataset.target;
    if (id) scrollToBoard(id);
  };

  measure();
  us = target();
  draw(us);
  stageEl.dataset.ready = "";
  addEventListener("scroll", wake, { passive: true });
  addEventListener("resize", onResizeEvent);
  addEventListener("hashchange", onHash);
  worldEl.addEventListener("focusin", onFocus);
  railEl?.addEventListener("click", onRail);
  // Web fonts change board heights, and board heights set the posts. Images
  // don't: next/image reserves their box from width and height.
  document.fonts?.ready.then(() => !disposed && onResize());
  onHash();

  return () => {
    disposed = true;
    cancelAnimationFrame(raf);
    removeEventListener("scroll", wake);
    removeEventListener("resize", onResizeEvent);
    cancelAnimationFrame(resizeRaf);
    removeEventListener("hashchange", onHash);
    worldEl.removeEventListener("focusin", onFocus);
    railEl?.removeEventListener("click", onRail);
    // Hand back to the CSS fallback: none of these carry inline styles of
    // their own, so clearing them wholesale is safe.
    const posts = [...postsEl.children] as HTMLElement[];
    for (const el of [trackEl, stageEl, worldEl, roadEl, postsEl, millEl, ...boardEls, ...posts]) el.style.cssText = "";
    delete stageEl.dataset.ready;
    railBtns.forEach((btn) => btn.removeAttribute("aria-current"));
  };
}

export default function RoadWalk({ children, marks }: { children: ReactNode; marks: Mark[] }) {
  const track = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const world = useRef<HTMLDivElement>(null);
  const road = useRef<HTMLDivElement>(null);
  const posts = useRef<HTMLDivElement>(null);
  const mill = useRef<HTMLDivElement>(null);
  const rail = useRef<HTMLOListElement>(null);

  // The storm is the walk's first screen, so preload it into <head>, but only
  // where the walk shows it: the flat page hides the sky, and the lazy image
  // never loads there.
  preload(storm.src, { as: "image", imageSrcSet: storm.srcSet, imageSizes: storm.sizes, fetchPriority: "high", media: WALK_QUERY });

  // Follows the media query live: turning on reduced motion mid-visit drops
  // the walk for the flat page, and turning it off brings the walk back.
  useEffect(() => {
    const [t, s, wo, ro, po, mi] = [track.current, stage.current, world.current, road.current, posts.current, mill.current];
    if (!t || !s || !wo || !ro || !po || !mi) return;
    const els = { track: t, stage: s, world: wo, road: ro, posts: po, mill: mi, rail: rail.current };
    const mq = matchMedia("(prefers-reduced-motion: reduce)");
    let stop: (() => void) | undefined;
    const sync = () => {
      if (getComputedStyle(s).position === "sticky") stop ??= startWalk(els);
      else {
        stop?.();
        stop = undefined;
      }
    };
    sync();
    mq.addEventListener("change", sync);
    return () => {
      mq.removeEventListener("change", sync);
      stop?.();
    };
  }, []);

  return (
    <div ref={track} className={styles.track}>
      <div ref={stage} className={styles.stage}>
        <div className={styles.storm} aria-hidden="true">
          <div className={styles.stormSky}>
            <div>
              <Image src={HORIZON_PHOTO} alt="" fill sizes={STORM_SIZES} />
            </div>
          </div>
        </div>
        <div className={styles.sun} aria-hidden="true" />
        {/* Fields seen from the road: soft patches running away to the horizon,
            not lines. Edges that run parallel to the road do not move as you
            walk, which is true to life; speed comes from posts and dashes. */}
        <svg className={styles.fields} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {FIELDS.map(([a, b, fill], i) => (
            <polygon key={i} points={`50,0 ${a},100 ${b},100`} fill={fill} />
          ))}
        </svg>
        <div className={styles.haze} aria-hidden="true" />
        <div ref={road} className={styles.road} aria-hidden="true" />
        <div ref={posts} className={styles.posts} aria-hidden="true">
          {Array.from({ length: POSTS * 2 }, (_, i) => (
            <span key={i} className={styles.post} />
          ))}
        </div>
        <a className={styles.credit} href={HORIZON_CREDIT}>
          {HORIZON_CREDIT_LABEL}
        </a>
        <nav className={styles.rail} aria-label="Along the road">
          <ol ref={rail}>
            {marks.map((m) => (
              <li key={m.id}>
                <button type="button" data-target={m.id} aria-label={m.label}>
                  <span>{m.label}</span>
                </button>
              </li>
            ))}
          </ol>
        </nav>
        <div ref={world} className={styles.world}>
          <div ref={mill} className={styles.mill} aria-hidden="true">
            <HorizonWindmill className={styles.millSvg} />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
