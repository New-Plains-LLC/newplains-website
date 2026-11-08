"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import { mailto } from "../../a/ai/DirectEmailNote";
import s from "./b.module.css";

const WORDS = ["busywork.", "retyping.", "chasing.", "copy-paste."];

// The last word of the headline cycles. Screen readers get the first word
// only; the rotation is decoration and stops under reduced motion.
function CycleWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % WORDS.length), 2600);
    return () => clearInterval(t);
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

// A two-tab ask box, workshop first. Each tab opens a pre-filled email in the
// visitor's own mail app; nothing is sent from the page.
const OFFERS = {
  workshop: {
    tab: "Leadership workshop",
    prompt: "What should leadership decide?",
    submit: "Write to us about a leadership workshop",
    subject: "Leadership AI workshop inquiry",
    body: (t: string) => `What we want to decide:\n${t}\n\nBusiness name:\nTeam size:\nWho would attend:\n`,
  },
  audit: {
    tab: "The $999 audit",
    prompt: "Which workflow slows you down?",
    submit: "Write to us about the $999 audit",
    subject: "AI Audit: $999",
    body: (t: string) => `What slows us down:\n${t}\n\nBusiness name:\nTeam size:\nTools you use:\n`,
  },
} as const;
type Offer = keyof typeof OFFERS;

function AskBox() {
  const [tab, setTab] = useState<Offer>("workshop");
  const [text, setText] = useState("");
  const o = OFFERS[tab];
  const send = (e: FormEvent) => {
    e.preventDefault();
    location.href = mailto(o.subject, o.body(text.trim()));
  };
  return (
    <div className={s.ask}>
      <div className={s.tabs} role="tablist" aria-label="Ways to start">
        {(Object.keys(OFFERS) as Offer[]).map((k) => (
          <button key={k} type="button" role="tab" id={`tab-${k}`} aria-controls="ask-panel" aria-selected={tab === k} onClick={() => setTab(k)}>
            {OFFERS[k].tab}
          </button>
        ))}
      </div>
      <form id="ask-panel" role="tabpanel" aria-labelledby={`tab-${tab}`} className={s.askPanel} onSubmit={send}>
        <label htmlFor="ask-text" className={s.srOnly}>{o.prompt}</label>
        <input id="ask-text" value={text} onChange={(e) => setText(e.target.value)} placeholder={o.prompt} autoComplete="off" />
        <button type="submit" aria-label={o.submit}>↵</button>
      </form>
      {tab === "workshop" && (
        <Link href="/a/ai/workshop" className={s.askMore}>What the workshop covers →</Link>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section className={s.hero}>
      <div className={s.heroText}>
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
          <linearGradient id="blade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FAF8F5" stopOpacity="0.95" />
            <stop offset="0.55" stopColor="#9CAF88" stopOpacity="0.35" />
            <stop offset="1" stopColor="#7A8B5C" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FAF8F5" />
            <stop offset="1" stopColor="#9CAF88" stopOpacity="0.4" />
          </linearGradient>
          <radialGradient id="hub">
            <stop offset="0" stopColor="#FAF8F5" />
            <stop offset="1" stopColor="#C4A265" stopOpacity="0.7" />
          </radialGradient>
        </defs>
        {blades.map((a) => (
          <g key={a} transform={`rotate(${a})`}>
            <rect x="-17" y="-188" width="34" height="138" rx="17" fill="url(#blade)" stroke="url(#edge)" strokeWidth="1.5" />
          </g>
        ))}
        <circle r="30" fill="url(#hub)" stroke="#FAF8F5" strokeWidth="2" />
      </svg>
    </div>
  );
}
