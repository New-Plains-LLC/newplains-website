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

// A two-tab ask box. The audit tab opens a pre-filled email in the visitor's
// own mail app; nothing is sent from the page.
function AskBox() {
  const [tab, setTab] = useState<"audit" | "workshop">("audit");
  const [text, setText] = useState("");
  const send = (e: FormEvent) => {
    e.preventDefault();
    location.href = mailto(
      "AI Audit: $999",
      `What slows us down:\n${text.trim()}\n\nBusiness name:\nTeam size:\nTools you use:\n`,
    );
  };
  return (
    <div className={s.ask}>
      <div className={s.tabs} role="tablist" aria-label="Ways to start">
        <button type="button" role="tab" id="tab-audit" aria-controls="panel-audit" aria-selected={tab === "audit"} onClick={() => setTab("audit")}>
          The $999 audit
        </button>
        <button type="button" role="tab" id="tab-workshop" aria-controls="panel-workshop" aria-selected={tab === "workshop"} onClick={() => setTab("workshop")}>
          Leadership workshop
        </button>
      </div>
      {tab === "audit" ? (
        <form id="panel-audit" role="tabpanel" aria-labelledby="tab-audit" className={s.askPanel} onSubmit={send}>
          <label htmlFor="ask-text" className={s.srOnly}>What busywork slows your team down?</label>
          <input
            id="ask-text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What busywork slows your team down?"
            autoComplete="off"
          />
          <button type="submit" aria-label="Write to us about the $999 audit">↵</button>
        </form>
      ) : (
        <div id="panel-workshop" role="tabpanel" aria-labelledby="tab-workshop" className={s.askPanel}>
          <p>Align the team, prioritize opportunities, build capability.</p>
          <Link href="/a/ai/workshop" aria-label="See the leadership workshop">→</Link>
        </div>
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
          AI with a purpose for established businesses. We help leadership teams choose the right
          opportunities, equip their people, and build systems that fit the work.
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
