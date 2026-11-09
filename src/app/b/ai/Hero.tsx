"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { MAX } from "@/../lib/inquiry";
import { openInquiry } from "./InquiryForm";
import { WORKSHOP_HREF } from "./links";
import s from "./b.module.css";

const WORDS = ["busywork.", "retyping.", "chasing.", "copy-paste."];

// The last word of the headline cycles. Screen readers get the first word
// only; the rotation is decoration and stops whenever reduced motion is on,
// including when the setting changes mid-visit.
function CycleWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const mq = matchMedia("(prefers-reduced-motion: reduce)");
    let t: ReturnType<typeof setInterval> | undefined;
    const sync = () => {
      clearInterval(t);
      t = undefined;
      if (mq.matches) setI(0);
      else t = setInterval(() => setI((n) => (n + 1) % WORDS.length), 2600);
    };
    sync();
    mq.addEventListener("change", sync);
    return () => { clearInterval(t); mq.removeEventListener("change", sync); };
  }, []);
  return (
    <>
      <span className={s.srOnly}>{WORDS[0]}</span>
      <span className={s.cycle} aria-hidden="true">
        <span key={i} className={s.cycleWord}>{WORDS[i]}</span>
      </span>
    </>
  );
}

// A two-tab ask box, workshop first. Submitting carries the answer down to
// the inquiry form at the end of the page, which does the sending.
const OFFERS = {
  workshop: { tab: "Leadership workshop", prompt: "What should leaders decide?" },
  audit: { tab: "The $999 audit", prompt: "Which workflow slows you?" },
} as const;
type Offer = keyof typeof OFFERS;
const KEYS = Object.keys(OFFERS) as Offer[];

function AskBox() {
  const [tab, setTab] = useState<Offer>("workshop");
  // Each tab keeps its own answer, so text typed under one offer is never
  // sent as the other.
  const [texts, setTexts] = useState<Record<Offer, string>>({ workshop: "", audit: "" });
  const text = texts[tab];
  const o = OFFERS[tab];
  // Text typed before hydration lives only in the DOM (React doesn't read
  // input values back when it hydrates), so send falls back to it.
  const input = useRef<HTMLInputElement>(null);
  const send = (e: FormEvent) => {
    e.preventDefault();
    // The note moves to the form and leaves the box, so a later submit here
    // can't refill the form with a note that was already sent. An empty box
    // sends no message: the form keeps its text for the same interest.
    const note = (text || input.current?.value || "").trim();
    openInquiry({ interest: tab, message: note || undefined });
    setTexts((t) => ({ ...t, [tab]: "" }));
    if (input.current) input.current.value = ""; // early text never reached state
  };
  // Tabs pattern: only the selected tab is in the Tab order; arrow keys,
  // Home and End move between tabs and select them.
  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const at = KEYS.indexOf(tab);
    const moves: Record<string, number> = { ArrowRight: at + 1, ArrowLeft: at - 1, Home: 0, End: KEYS.length - 1 };
    const next = Object.prototype.hasOwnProperty.call(moves, e.key) ? moves[e.key] : undefined;
    if (next === undefined) return;
    e.preventDefault();
    const k = KEYS[(next + KEYS.length) % KEYS.length];
    setTab(k);
    document.getElementById(`tab-${k}`)?.focus();
  };
  return (
    <div className={s.ask}>
      <div className={s.tabs} role="tablist" aria-label="Ways to start">
        {KEYS.map((k) => (
          <button key={k} type="button" role="tab" id={`tab-${k}`} aria-controls="ask-panel" aria-selected={tab === k} tabIndex={tab === k ? 0 : -1} onClick={() => setTab(k)} onKeyDown={onKey}>
            {OFFERS[k].tab}
          </button>
        ))}
      </div>
      {/* method="dialog" outside a <dialog> makes a native submit a no-op, so
          pressing Enter before hydration can't reload the page and lose the
          text; once hydrated, send() handles the submit. */}
      <form id="ask-panel" role="tabpanel" aria-labelledby={`tab-${tab}`} className={s.askPanel} method="dialog" onSubmit={send}>
        <label htmlFor="ask-text" className={s.srOnly}>{o.prompt}</label>
        <input ref={input} id="ask-text" value={text} onChange={(e) => setTexts((t) => ({ ...t, [tab]: e.target.value }))} placeholder={o.prompt} autoComplete="off" maxLength={MAX.message} />
        <button type="submit" aria-label="Continue to the inquiry form">↵</button>
      </form>
      {tab === "workshop" && (
        <Link href={WORKSHOP_HREF} className={s.askMore}>What the workshop covers →</Link>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section className={s.hero}>
      <div>
        <h1>
          Better business.
          <br />
          Less <CycleWord />
        </h1>
        <p className={s.heroLede}>
          AI with a purpose for mid-sized businesses. It starts with your leadership team: agree
          where AI belongs, equip your people, then build systems that fit the work.
        </p>
        <AskBox />
      </div>
      <GlassWindmill />
    </section>
  );
}

// The logo's windmill as a frosted-glass object, turning slowly.
function GlassWindmill() {
  const blades = Array.from({ length: 8 }, (_, i) => i * 45);
  return (
    <div className={s.glass} aria-hidden="true">
      <div className={s.glassGlow} />
      <svg viewBox="-200 -200 400 400" className={s.glassWheel}>
        <defs>
          <linearGradient id="np-glass-blade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FAF8F5" stopOpacity="0.95" />
            <stop offset="0.55" stopColor="#9CAF88" stopOpacity="0.35" />
            <stop offset="1" stopColor="#7A8B5C" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="np-glass-edge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FAF8F5" />
            <stop offset="1" stopColor="#9CAF88" stopOpacity="0.4" />
          </linearGradient>
          <radialGradient id="np-glass-hub">
            <stop offset="0" stopColor="#FAF8F5" />
            <stop offset="1" stopColor="#C4A265" stopOpacity="0.7" />
          </radialGradient>
        </defs>
        {blades.map((a) => (
          <g key={a} transform={`rotate(${a})`}>
            <rect x="-17" y="-188" width="34" height="138" rx="17" fill="url(#np-glass-blade)" stroke="url(#np-glass-edge)" strokeWidth="1.5" />
          </g>
        ))}
        <circle r="30" fill="url(#np-glass-hub)" stroke="#FAF8F5" strokeWidth="2" />
      </svg>
    </div>
  );
}
