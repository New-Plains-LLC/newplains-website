"use client";

import Image from "next/image";
import { useEffect, useRef, type ReactNode } from "react";
import HorizonWindmill from "./HorizonWindmill";
import styles from "./walk.module.css";

// The /a/ai road walk. Scroll moves a camera forward along a prairie road.
// Each [data-stop] child is a roadside board. It rises from the vanishing
// point, holds at reading distance, then grows past your shoulder.
//
// Everything is gated on (prefers-reduced-motion: no-preference) and
// (scripting: enabled), the same query the CSS uses. Without it the boards
// render as an ordinary stacked page.
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

export type Mark = { id: string; label: string };

type Seg = { u0: number; u1: number; c0: number; c1: number; ease: boolean };
type Board = { el: HTMLElement; z: number; uA: number; uB: number; peak: boolean };

const clamp = (v: number, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, v));
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const smooth = (a: number, b: number, t: number) => {
  const x = clamp((t - a) / (b - a));
  return x * x * (3 - 2 * x);
};

export default function RoadWalk({ children, marks }: { children: ReactNode; marks: Mark[] }) {
  const track = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const world = useRef<HTMLDivElement>(null);
  const road = useRef<HTMLDivElement>(null);
  const posts = useRef<HTMLDivElement>(null);
  const mill = useRef<HTMLDivElement>(null);
  const rail = useRef<HTMLOListElement>(null);

  useEffect(() => {
    if (!matchMedia(WALK_QUERY).matches) return;
    const trackEl = track.current!, stageEl = stage.current!, worldEl = world.current!;
    const roadEl = road.current!, postsEl = posts.current!, millEl = mill.current!;
    const boardEls = [...worldEl.querySelectorAll<HTMLElement>("[data-stop]")];
    const railBtns = [...(rail.current?.querySelectorAll<HTMLButtonElement>("button") ?? [])];

    let boards: Board[] = [];
    let segs: Seg[] = [];
    let total = 1;
    let vh = 1;
    let us = 0; // smoothed scroll position, in screens
    let last = 0;
    let raf = 0;
    let millZ = 0;

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
      vh = stageEl.clientHeight;
      const vw = stageEl.clientWidth;
      const narrow = vw < 760;
      const ground = narrow ? 0.8 : 0.75;
      stageEl.style.setProperty("--ground", `${ground * 100}%`);
      let z = CREEP, u = 0, cam = 0;
      segs = [];
      boards = boardEls.map((el, i) => {
        const gap = Number(el.dataset.gap ?? 1400);
        const hold = Number(el.dataset.hold ?? 0.6) * HOLD;
        const pace = Number(el.dataset.pace ?? 0.8);
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
        el.dataset.u = ((uA + u) / 2).toFixed(3); // hold midpoint, for tests
        // Keep the board's foot above the ground line so its posts can stand.
        const h = el.offsetHeight;
        const xf = Number(el.dataset.x ?? 0);
        const x = xf * vw * (narrow ? 0.12 : 1);
        const room = (ground - 0.5) * vh - h / 2 - 28;
        const y = Math.max(Math.min(Number(el.dataset.y ?? 0) * vh, room), -(0.5 * vh - h / 2 - 12));
        el.style.setProperty("--post", `${Math.max(0, (ground - 0.5) * vh - y - h / 2)}px`);
        el.style.transform = `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), ${-z}px)`;
        return { el, z, uA, uB: u, peak: el.hasAttribute("data-peak") };
      });
      total = u;
      trackEl.style.height = `${(total + 1) * vh}px`;

      // Fence posts ride a treadmill: fixed slots, shifted by cam mod gap.
      const side = narrow ? vw * 0.62 : vw * 0.34;
      [...postsEl.children].forEach((p, i) => {
        const k = Math.floor(i / 2);
        const s = i % 2 ? 1 : -1;
        (p as HTMLElement).style.transform = `translate3d(${s * side}px, -100%, ${-k * POST_GAP + 400}px)`;
      });

      // The windmill stands well off the road, between two approach markers.
      const at = boards.find((b) => b.el.id === "approach");
      millZ = (at?.z ?? 20000) + 2600;
      millEl.style.transform = `translate3d(${vw * (narrow ? 0.9 : 0.62)}px, -100%, ${-millZ}px)`;
    };

    const draw = (u: number) => {
      const cam = camAt(u);
      worldEl.style.transform = `translate3d(0,0,${cam}px)`;
      roadEl.style.transform = `translateZ(700px) rotateX(-90deg) translateY(${-(cam % DASH)}px)`;
      postsEl.style.transform = `translate3d(0,0,${cam % POST_GAP}px)`;
      const md = cam - millZ;
      millEl.style.visibility = md > 700 ? "hidden" : "visible";

      let clear = 0;
      boards.forEach((b) => {
        const d = cam - b.z;
        const o = d < 0 ? clamp((2800 + d) / 1600) : clamp(1 - d / 420);
        // Opacity only, never visibility: hidden boards would drop out of the
        // tab order, and focusing a far board is how keyboard users walk.
        b.el.style.opacity = o.toFixed(3);
        b.el.style.pointerEvents = Math.abs(d) < 260 ? "auto" : "none";
        if (b.peak) {
          const local = (u - b.uA) / (b.uB - b.uA);
          const k = smooth(0.12, 0.72, local);
          b.el.style.setProperty("--k", k.toFixed(4));
          clear = smooth(0.3, 0.9, local);
        }
      });
      stageEl.style.setProperty("--clear", clear.toFixed(4));

      // Rail: the last marker whose board we have reached.
      let current = 0;
      railBtns.forEach((btn, i) => {
        const b = boards.find((x) => x.el.id === btn.dataset.target);
        if (b && u >= b.uA - 0.15) current = i;
      });
      railBtns.forEach((btn, i) => btn.setAttribute("aria-current", i === current ? "step" : "false"));
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
    const onFocus = (e: FocusEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>("[data-stop]");
      // Defer: the browser's own scroll-focused-element-into-view runs after
      // focusin and would otherwise overwrite this.
      if (el) requestAnimationFrame(() => scrollToBoard(el));
    };
    const onHash = () => {
      const id = decodeURIComponent(location.hash.slice(1));
      if (id) scrollToBoard(id);
    };
    const onRail = (e: MouseEvent) => {
      const btn = (e.target as HTMLElement).closest<HTMLButtonElement>("button[data-target]");
      if (btn) scrollToBoard(btn.dataset.target!);
    };

    measure();
    us = target();
    draw(us);
    stageEl.dataset.ready = "";
    addEventListener("scroll", wake, { passive: true });
    addEventListener("resize", onResize);
    addEventListener("hashchange", onHash);
    worldEl.addEventListener("focusin", onFocus);
    const railEl = rail.current;
    railEl?.addEventListener("click", onRail);
    // Fonts and images change board heights, and board heights set the posts.
    document.fonts?.ready.then(onResize);
    addEventListener("load", onResize);
    onHash();

    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("scroll", wake);
      removeEventListener("resize", onResize);
      removeEventListener("hashchange", onHash);
      removeEventListener("load", onResize);
      worldEl.removeEventListener("focusin", onFocus);
      railEl?.removeEventListener("click", onRail);
    };
  }, []);

  return (
    <div ref={track} className={styles.track}>
      <div ref={stage} className={styles.stage}>
        <div className={styles.storm} aria-hidden="true">
          <div className={styles.stormSky}>
            <div>
            <Image
              src="https://images.unsplash.com/photo-1702432665495-38902d6e5633"
              alt=""
              fill
              priority
              sizes="100vw"
            />
            </div>
          </div>
        </div>
        <div className={styles.sun} aria-hidden="true" />
        <svg className={styles.rows} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <line x1="-400" y1="0" x2="500" y2="0" />
          {Array.from({ length: 23 }, (_, i) => -230 + i * 20.9).map((x) => (
            <line key={x} x1="50" y1="0" x2={x} y2="100" />
          ))}
        </svg>
        <div ref={road} className={styles.road} aria-hidden="true" />
        <div ref={posts} className={styles.posts} aria-hidden="true">
          {Array.from({ length: POSTS * 2 }, (_, i) => (
            <span key={i} className={styles.post} />
          ))}
        </div>
        <a className={styles.credit} href="https://unsplash.com/photos/nqu5L_xc6bc">
          Photo: Raychel Sanner / Unsplash
        </a>
        <nav className={styles.rail} aria-label="Along the road">
          <ol ref={rail}>
            {marks.map((m) => (
              <li key={m.id}>
                <button type="button" data-target={m.id}>
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
