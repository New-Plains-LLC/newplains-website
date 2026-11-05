import type { Metadata } from "next";
import Link from "next/link";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "AI Business Consulting for Established Businesses — New Plains",
  description: "Align your leadership team, choose practical AI opportunities, and build systems around the way your business works. Workshops, custom implementation, and the $999 AI Audit.",
  robots: { index: false },
};
const inquiry = (subject: string) => `mailto:info@newplains.dev?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Business name:\nTeam size:\nWorkflow or challenge:\nTools you use:\nWhat a better outcome would look like:\n")}`;
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
    <section className={styles.hero}>
      <p className={styles.eyebrow}>New Plains / AI business consulting</p>
      <h1>Better business.<br />Less busywork.<br /><em>AI with a purpose.</em></h1>
      <div className={styles.heroBottom}><p>For established businesses ready to put AI to work on the processes that slow them down. We help leadership teams choose the right opportunities, equip their people, and build systems that fit the work.</p><span>Oklahoma roots.<br />An operator’s perspective.</span></div>
      <div className={styles.paths}>
        <Link href="/a/ai/workshop"><small>01 / Find your direction</small><strong>Start with a leadership workshop <span>↗</span></strong><p>Align the team. Prioritize opportunities. Build practical AI capability.</p></Link>
        <a href={inquiry("Custom AI system inquiry")}><small>02 / Put a defined workflow to work</small><strong>Build a custom AI system <span>↗</span></strong><p>Bring us the process, the bottleneck, and the outcome you need.</p></a>
      </div>
    </section>
    <section className={styles.statement}><p className={styles.eyebrow}>The business comes first</p><h2>A promising experiment is only the beginning.</h2><p>When tools multiply but work still gets stuck between people, the next step is an operating decision. What should change? Who approves it? How will the team know it is working?</p><p>Shawn brings more than 20 years of business and operational experience across dealership operations, finance, and B2B sales. That perspective shapes the questions we ask before we build.</p></section>
    <section className={styles.section}><p className={styles.eyebrow}>Three outcomes worth building for</p><h2>Start with the work.<br />Measure what changes.</h2><p>Representative workflows to explore together—not promised results.</p><div className={styles.rows}>{outcomes.map(([n,label,title,body])=><article key={n}><small>{n} / {label}</small><h3>{title}</h3><p>{body}</p></article>)}</div></section>
    <section id="approach" className={styles.dark}><div className={styles.section}><p className={styles.eyebrow}>From first question to everyday use</p><h2>Built with your people.<br />Designed for the real world.</h2><div className={styles.steps}>{steps.map(([title,body],i)=><article key={title}><small>0{i+1}</small><h3>{title}</h3><p>{body}</p></article>)}</div><p className={styles.trust}>Clear scope. Human approval. Deliberate data access. A person to handle the exceptions.</p></div></section>
    <section className={styles.section}><p className={styles.eyebrow}>Work you can inspect</p><h2>Practical systems.<br />Visible thinking.</h2><div className={styles.proof}><div><small>New Plains project / Folio</small><h3>Make scattered knowledge usable.</h3><p>Folio brings meeting notes and archives into a searchable, self-hosted workspace with a Notion integration. It demonstrates the kind of focused integration we build around everyday work.</p><p>This is a New Plains portfolio project, not a client ROI case study. No quantified business outcome is claimed here.</p><a href="https://github.com/dsskaggs-ai/folio">Inspect the project ↗</a></div><div className={styles.diagram} aria-label="Illustrative knowledge workflow"><span>Meeting notes + archives</span><b>↓</b><span>Sync · organize · search</span><b>↓</b><span>Knowledge your team can find</span><small>Illustrative workflow</small></div></div></section>
    <section className={styles.audit}><div><p className={styles.eyebrow}>A distinct starting point</p><h2>The $999 AI Audit.</h2><p>A paid, standalone one-hour conversation to examine your workflow and scope a useful next step. Separate from the workshop, with no obligation to commission a build.</p></div><a className={styles.button} href={inquiry("AI Audit — $999")}>Ask about the $999 audit ↗</a></section>
    <section className={styles.section}><p className={styles.eyebrow}>Your next move</p><h2>Bring a business problem.<br />Let’s make it concrete.</h2><p>Email your team size, current tools, the workflow that needs attention, and what a better outcome would look like. We’ll review the fit and discuss scope and next steps before an engagement is agreed.</p><div className={styles.actions}><Link className={styles.button} href="/a/ai/workshop">Explore the workshop ↗</Link><a className={styles.button} href={inquiry("Custom AI system inquiry")}>Discuss a custom project ↗</a></div></section>
  </div>;
}
