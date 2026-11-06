import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { consultingToolExamples } from "@/../lib/projects";
import styles from "./services.module.css";
import DirectEmailNote, { mailto } from "./DirectEmailNote";

export const metadata: Metadata = {
  title: "AI Business Consulting for Established Businesses | New Plains",
  description: "Align your leadership team, choose practical AI opportunities, and build systems around the way your business works. Workshops, custom implementation, and the $999 AI Audit.",
  robots: { index: false },
};
const inquiry = (subject: string) => mailto(subject, "Business name:\nTeam size:\nWorkflow or challenge:\nTools you use:\nWhat a better outcome would look like:\n");
// Raychel Sanner, "Severe thunderstorm over rural Oklahoma" (Unsplash License).
const HORIZON_PHOTO = "https://images.unsplash.com/photo-1702432665495-38902d6e5633";
// Tools with a shareable screenshot lead the section; the rest read as rows.
const featured = consultingToolExamples.filter((e) => e.image);
const listed = consultingToolExamples.filter((e) => !e.image);
const outcomes = [
  ["01", "Revenue", "Give good opportunities a clear next step.", "Route incoming leads, prepare follow-up drafts, and bring overdue opportunities to the right person. Measure response time and follow-through."],
  ["02", "Customer experience", "Keep the handoff from becoming the holdup.", "Organize service requests, surface relevant history, and draft consistent updates for staff review. Measure handoff delays and rework."],
  ["03", "Operating capacity", "Get your people out of the copy-and-paste loop.", "Turn recurring reports, document intake, and scattered meeting notes into repeatable workflows. Measure processing time and exceptions."],
];
const steps = [
  ["Understand the work", "Map the people, systems, handoffs, and exceptions before choosing technology."],
  ["Define success", "Agree on a baseline, acceptance criteria, data access, and the decisions that require human approval."],
  ["Build a focused prototype", "Test one useful workflow with representative inputs. Make limitations visible early."],
  ["Integrate and test", "Connect the agreed systems. Test permissions, failure paths, and escalation to a person."],
  ["Train and hand over", "Document how it works, who owns it, and how your team operates it. Agree on access and ownership in the scope."],
  ["Support and improve", "Review real usage against the baseline and agree on the next improvements and support scope."],
];
export default function AiPage() {
  return <div className={styles.page}>
    <section className={styles.horizon}>
      <div className={styles.horizonText}>
        <p className={styles.horizonEyebrow}>New Plains / AI business consulting</p>
        <h1>Better business.<br />Less busywork.<br /><span>AI with a purpose.</span></h1>
      </div>
      <div className={styles.horizonPhoto}>
        <Image src={HORIZON_PHOTO} alt="Storm clouds building over open Oklahoma prairie" fill priority sizes="100vw" />
        <a className={styles.photoCredit} href="https://unsplash.com/photos/nqu5L_xc6bc">Photo: Raychel Sanner / Unsplash</a>
      </div>
    </section>
    <section className={styles.hero}>
      <div className={styles.heroBottom}><p>For established businesses ready to put AI to work on the processes that slow them down. We help leadership teams choose the right opportunities, equip their people, and build systems that fit the work.</p><span>Oklahoma roots.<br /> An operator’s perspective.</span></div>
      <div className={styles.paths}>
        <Link href="/a/ai/workshop"><small>01 / Find your direction</small><strong>Start with a leadership workshop <span>→</span></strong><p>Align the team. Prioritize opportunities. Build practical AI capability.</p></Link>
        <a href={inquiry("Custom AI system inquiry")}><small>02 / Put a defined workflow to work</small><strong>Build a custom AI system <span>↗</span></strong><p>Bring us the process, the bottleneck, and the outcome you need.</p></a>
        <a href={inquiry("AI Concierge inquiry")}><small>03 / Keep the improvements coming</small><strong>Work with an AI concierge <span>↗</span></strong><p>Ongoing support that ships the next improvement, trains the people who own it, and keeps systems current as tools change.</p></a>
      </div>
    </section>
    <section className={styles.statement}><p className={styles.eyebrow}>The business comes first</p><h2>A promising experiment is only the beginning.</h2><p>When tools multiply but work still gets stuck between people, the next step is an operating decision. What should change? Who approves it? How will the team know it is working?</p><p>Shawn brings more than 20 years of business and operational experience across dealership operations, finance, and B2B sales. That perspective shapes the questions we ask before we build.</p></section>
    <section className={styles.section}><p className={styles.eyebrow}>Three outcomes worth building for</p><h2>Start with the work.<br />Measure what changes.</h2><p>Representative workflows to explore together, not promised results.</p><div className={styles.rows}>{outcomes.map(([n,label,title,body])=><article key={n}><small>{n} / {label}</small><h3>{title}</h3><p>{body}</p></article>)}</div></section>
    <section id="approach" className={styles.dark}><div className={styles.section}><p className={styles.eyebrow}>From first question to everyday use</p><h2>Built with your people.<br />Designed for the real world.</h2><div className={styles.steps}>{steps.map(([title,body],i)=><article key={title}><small>0{i+1}</small><h3>{title}</h3><p>{body}</p></article>)}</div><p className={styles.trust}>Clear scope. Human approval. Deliberate data access. A person to handle the exceptions.</p></div></section>
    <section className={styles.section}>
      <p className={styles.eyebrow}>Examples of what we can build</p>
      <h2>Practical tools.<br />Built around your work.</h2>
      <p>From following up with a prospect to finding a decision from last quarter, the right tool gives your team a clear next step.</p>
      {featured.map((example) => (
        <article key={example.title} className={styles.feature}>
          <div>
            <small>{example.label}</small>
            <h3>{example.title}</h3>
            <p>{example.description}</p>
          </div>
          <Image src={example.image!} alt={example.imageAlt ?? ""} width={2998} height={1592} sizes="(max-width: 700px) 100vw, 60vw" />
        </article>
      ))}
      <div className={styles.rows}>
        {listed.map((example) => (
          <article key={example.title}>
            <small>{example.label}</small>
            <h3>{example.title}</h3>
            <div className={styles.toolBody}>
              <p>{example.description}</p>
              {example.upcoming && <p>{example.upcoming}</p>}
              {example.url && <a href={example.url}>{example.linkLabel} ↗</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
    <section className={styles.audit}><div><p className={styles.eyebrow}>A distinct starting point</p><h2>The $999 AI Audit.</h2><p>A paid, standalone one-hour conversation to examine your workflow and scope a useful next step. Separate from the workshop, with no obligation to commission a build.</p><DirectEmailNote /></div><a className={styles.button} href={inquiry("AI Audit — $999")}>Ask about the $999 audit ↗</a></section>
    <section className={styles.section}><p className={styles.eyebrow}>Your next move</p><h2>Bring a business problem.<br />Let’s make it concrete.</h2><p>Email your team size, current tools, the workflow that needs attention, and what a better outcome would look like. We’ll review the fit and discuss scope and next steps before an engagement is agreed.</p><div className={styles.actions}><Link className={styles.button} href="/a/ai/workshop">Explore the workshop →</Link><a className={styles.button} href={inquiry("Custom AI system inquiry")}>Discuss a custom project ↗</a><a className={styles.button} href={inquiry("AI Concierge inquiry")}>Ask about AI concierge ↗</a></div><DirectEmailNote /></section>
  </div>;
}
