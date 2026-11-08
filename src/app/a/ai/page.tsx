import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { Newsreader } from "next/font/google";
import { consultingToolExamples } from "@/../lib/projects";
import DirectEmailNote, { mailto } from "./DirectEmailNote";
import RoadWalk, { type Mark } from "./RoadWalk";
import w from "./walk.module.css";

// Used across the page; change them here.
const WORKSHOP = "/a/ai/workshop";
const AUDIT_PRICE = "$999";

export const metadata: Metadata = {
  title: "AI Business Consulting for Established Businesses | New Plains",
  description: `Align your leadership team, choose practical AI opportunities, and build systems around the way your business works. Workshops, custom implementation, and the ${AUDIT_PRICE} AI Audit.`,
  robots: { index: false },
};

const serif = Newsreader({ subsets: ["latin"], variable: "--font-serif", display: "swap" });

const inquiry = (subject: string) => mailto(subject, "Business name:\nTeam size:\nWorkflow or challenge:\nTools you use:\nWhat a better outcome would look like:\n");
// flatMap narrows image to a string, so the render needs no assertion.
const featured = consultingToolExamples.flatMap((e) => (e.image ? [{ ...e, image: e.image }] : []));
const listed = consultingToolExamples.filter((e) => !e.image);

// Things a leadership team did by hand last week. Recognition, not claims.
const pains = [
  "The same order, typed into three systems.",
  "A quote waiting four days in someone’s inbox.",
  "The Monday report, rebuilt by hand. Again.",
  "One person knows how it works. They’re on vacation.",
];
const outcomes = [
  ["Revenue", "Give good opportunities a clear next step.", "Route incoming leads, prepare follow-up drafts, and bring overdue opportunities to the right person. Measure response time and follow-through.", w.tintGreen],
  ["Customer experience", "Keep the handoff from becoming the holdup.", "Organize service requests, surface relevant history, and draft consistent updates for staff review. Measure handoff delays and rework.", w.tintWheat],
  ["Operating capacity", "Get your people out of the copy-and-paste loop.", "Turn recurring reports, document intake, and scattered meeting notes into repeatable workflows. Measure processing time and exceptions.", w.tintCopper],
];
const steps = [
  ["Understand the work", "Map the people, systems, handoffs, and exceptions before choosing technology."],
  ["Define success", "Agree on a baseline, acceptance criteria, data access, and the decisions that require human approval."],
  ["Build a focused prototype", "Test one useful workflow with representative inputs. Make limitations visible early."],
  ["Integrate and test", "Connect the agreed systems. Test permissions, failure paths, and escalation to a person."],
  ["Train and hand over", "Document how it works, who owns it, and how your team operates it."],
  ["Support and improve", "Review real usage against the baseline and agree on the next improvements."],
];
// The peak board: six manual hand-offs. Four become the built flow; two vanish.
// sx/sy: scattered (cqw / px). o: slot in the built flow, or null to vanish.
const notes: { before: string; after?: string; sx: number; sy: number; r: number; o: number | null }[] = [
  { before: "Lead sits in the inbox", after: "Web form", sx: 2, sy: 18, r: -5, o: 0 },
  { before: "Copy it into the CRM", after: "Qualify", sx: 52, sy: 4, r: 4, o: 1 },
  { before: "Find the right rep", sx: 28, sy: 96, r: -2, o: null },
  { before: "Draft a reply from scratch", after: "Personal email", sx: 70, sy: 110, r: 6, o: 2 },
  { before: "Remind them Friday", sx: 6, sy: 168, r: 3, o: null },
  { before: "Who followed up?", after: "Team alert", sx: 46, sy: 176, r: -6, o: 3 },
];

const marks: Mark[] = [
  { id: "top", label: "The problem" },
  { id: "operator", label: "Who we are" },
  { id: "turn", label: "The turn" },
  { id: "build", label: "What we build" },
  { id: "approach", label: "How we work" },
  { id: "audit", label: "Where to start" },
];

type StopProps = {
  id?: string;
  gap?: number; // z distance from the previous board
  hold?: number; // screens of scroll spent at reading distance
  pace?: number; // screens of scroll per 1000 z of travel
  x?: -1 | 0 | 1; // which shoulder: -1 left, 1 right, 0 across the road (the gate)
  y?: number; // vertical offset, fraction of viewport height
  className?: string;
  peak?: boolean;
  landmark?: boolean; // the windmill stands just past this board
  label?: string;
  children: ReactNode;
};
function Stop({ id, gap, hold, pace, x, y, className = "", peak, landmark, label, children }: StopProps) {
  return (
    <article
      id={id}
      aria-label={label}
      className={`${w.stop} ${className}`}
      data-stop=""
      data-gap={gap}
      data-hold={hold}
      data-pace={pace}
      data-x={x}
      data-y={y}
      data-peak={peak ? "" : undefined}
      data-landmark={landmark ? "" : undefined}
    >
      {children}
    </article>
  );
}

export default function AiPage() {
  return (
    <div className={`${w.walk} ${serif.variable}`}>
      <RoadWalk marks={marks}>
        {/* The storm: fast, tight, close together. */}
        <Stop id="top" hold={0.55} x={-1} className={w.hero}>
          <p className={w.label}>New Plains / AI business consulting</p>
          <h1>Better business.<br />Less busywork.<br /><span>AI with a purpose.</span></h1>
          <p>For established businesses ready to put AI to work on the processes that slow them down. We help leadership teams choose the right opportunities, equip their people, and build systems that fit the work.</p>
          <p className={w.small}>Oklahoma roots. An operator’s perspective.</p>
        </Stop>
        {pains.map((line, i) => (
          <Stop key={line} gap={1150} hold={0.32} pace={0.5} x={i % 2 ? -1 : 1} y={0.03} className={w.sign}>
            <p className={w.signText}>{line}</p>
          </Stop>
        ))}
        <Stop gap={1500} hold={0.6} pace={0.6} x={1} className={w.panel}>
          <p className={w.label}>The business comes first</p>
          <h2>A promising experiment is only the beginning.</h2>
          <p>When tools multiply but work still gets stuck between people, the next step is an operating decision. What should change? Who approves it? How will the team know it is working?</p>
        </Stop>

        {/* An empty stretch of road, then the operator. Slower. */}
        <Stop id="operator" gap={2600} hold={0.85} pace={0.9} x={-1} className={`${w.panel} ${w.operator}`}>
          <Image src="/a-ai/shawn-listening.jpg" alt="Shawn Skaggs listening across a table at a business dinner" width={1600} height={1067} sizes="(max-width: 760px) 88vw, 520px" />
          <div>
            <p className={w.label}>Who you’ll work with</p>
            <p className={w.lede}>Shawn brings more than 20 years of business and operational experience across dealership operations, finance, and B2B sales.</p>
            <p>That perspective shapes the questions we ask before we build.</p>
          </div>
        </Stop>

        {/* The turn. The largest hold on the page; the storm clears here. */}
        <Stop id="turn" gap={1700} hold={2.2} pace={0.9} x={-1} peak className={`${w.panel} ${w.board}`} label="Lead follow-up, before and after">
          <p className={w.label}>Representative example: lead follow-up</p>
          <h2>The busywork goes.<br />The work stays.</h2>
          <div className={w.notes}>
            <span className={w.flow} />
            {notes.map((n) => (
              <span
                key={n.before}
                className={`${w.note} ${n.o === null ? w.gone : ""}`}
                style={{ "--sx": n.sx, "--sy": n.sy, "--r": n.r, "--o": n.o ?? 0 } as CSSProperties}
              >
                <span className={w.before}>{n.before}</span>
                {n.after && <span className={w.after}>{n.after}</span>}
              </span>
            ))}
          </div>
          <div className={w.captions}>
            <p className={w.before}>Six hand-offs. Two of them are reminders to yourself.</p>
            <p className={w.after}>Four steps, built once, running every time a lead comes in.</p>
          </div>
        </Stop>

        {/* Clear sky: slower, wider, even. */}
        <Stop id="build" gap={1500} hold={0.55} pace={1} x={-1} className={w.panel}>
          <p className={w.label}>Three outcomes worth building for</p>
          <h2>Start with the work.<br />Measure what changes.</h2>
          <p className={w.small}>Representative workflows to explore together, not promised results.</p>
        </Stop>
        {outcomes.map(([label, title, body, tint], i) => (
          <Stop key={label} gap={1250} hold={0.5} pace={1} x={i % 2 ? -1 : 1} className={`${w.panel} ${w.card} ${tint}`}>
            <p className={w.label}>{label}</p>
            <h3>{title}</h3>
            <p>{body}</p>
          </Stop>
        ))}
        {featured.map((e) => (
          <Stop key={e.title} gap={1500} hold={0.75} pace={1} x={1} className={`${w.panel} ${w.feature}`}>
            <Image src={e.image} alt={e.imageAlt ?? ""} width={2998} height={1592} sizes="(max-width: 760px) 88vw, 560px" />
            <div>
              <p className={w.label}>{e.label}</p>
              <h3>{e.title}</h3>
              <p>{e.description}</p>
            </div>
          </Stop>
        ))}
        {listed.map((e, i) => (
          <Stop key={e.title} gap={1250} hold={0.6} pace={1} x={i % 2 ? -1 : 1} className={w.panel}>
            <p className={w.label}>{e.label}</p>
            <h3>{e.title}</h3>
            <p>{e.description}</p>
            {e.upcoming && <p className={w.small}>{e.upcoming}</p>}
            {e.url && <a href={e.url}>{e.linkLabel} ↗</a>}
          </Stop>
        ))}

        <Stop id="approach" landmark gap={1500} hold={0.55} pace={1} x={1} className={w.panel}>
          <p className={w.label}>From first question to everyday use</p>
          <h2>Built with your people.<br />Designed for the real world.</h2>
          <p className={w.small}>Clear scope. Human approval. Deliberate data access. A person to handle the exceptions.</p>
        </Stop>
        {steps.map(([title, body], i) => (
          <Stop key={title} gap={950} hold={0.32} pace={0.95} x={i % 2 ? -1 : 1} y={0.04} className={w.marker}>
            <p className={w.mile}>{String(i + 1).padStart(2, "0")}</p>
            <h3>{title}</h3>
            <p>{body}</p>
          </Stop>
        ))}

        {/* The fork, then the gate. */}
        <Stop gap={1600} hold={0.85} pace={1} x={1} className={`${w.panel} ${w.fork}`} label="Three ways in">
          <p className={w.label}>Three ways in</p>
          <div className={w.arms}>
            <Link href={WORKSHOP}><small>Find your direction</small><strong>Leadership workshop →</strong><span>Align the team. Prioritize opportunities. Build practical AI capability.</span></Link>
            <a href={inquiry("Custom AI system inquiry")}><small>Put a defined workflow to work</small><strong>Custom AI system ↗</strong><span>Bring us the process, the bottleneck, and the outcome you need.</span></a>
            <a href={inquiry("AI Concierge inquiry")}><small>Keep the improvements coming</small><strong>AI concierge ↗</strong><span>Ongoing support that ships the next improvement and trains the people who own it.</span></a>
          </div>
        </Stop>
        <Stop id="audit" gap={1700} hold={1.2} pace={1} x={0} className={`${w.panel} ${w.gate}`}>
          <p className={w.label}>A distinct starting point</p>
          <h2>{`The ${AUDIT_PRICE} AI Audit.`}</h2>
          <p>A paid, standalone one-hour conversation to examine your workflow and scope a useful next step. Separate from the workshop, with no obligation to commission a build.</p>
          <div className={w.actions}>
            <a className={w.button} href={inquiry(`AI Audit: ${AUDIT_PRICE}`)}>{`Ask about the ${AUDIT_PRICE} audit ↗`}</a>
            <Link className={w.quiet} href={WORKSHOP}>Or start with the workshop →</Link>
          </div>
          <DirectEmailNote />
        </Stop>
      </RoadWalk>
    </div>
  );
}
