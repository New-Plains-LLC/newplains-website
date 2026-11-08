import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Newsreader } from "next/font/google";
import { Fragment, type ReactNode } from "react";
import { consultingToolExamples } from "@/../lib/projects";
import Hero from "./Hero";
import InquiryForm from "./InquiryForm";
import s from "./b.module.css";

export const metadata: Metadata = {
  title: "AI Consulting for Mid-Sized Businesses | New Plains",
  description: "A leadership workshop that aligns your team on where AI belongs, then custom systems built around the way your business works. For mid-sized businesses.",
  robots: { index: false },
};

const serif = Newsreader({ subsets: ["latin"], weight: ["300", "400"], variable: "--font-serif", display: "swap" });

const featured = consultingToolExamples.find((e) => e.image);
const listed = consultingToolExamples.filter((e) => !e.image);

// Read as you scroll: each word darkens as it passes the middle of the screen.
// The last one carries a highlight.
const story = [
  "Every business has the work it exists to do, and the work that piles up around it.",
  "The same order, typed into three systems. A quote waiting four days in someone’s inbox. The Monday report, rebuilt by hand. Again.",
  "Every department picked its own AI tool. None of them talk to each other.",
  "When tools multiply but work still gets stuck between people, more software is not the answer.",
];
const storyMark = "The next step is a leadership decision.";

const steps = [
  ["Understand the work", "Map the people, systems, handoffs, and exceptions before choosing technology."],
  ["Define success", "Agree on a baseline, acceptance criteria, data access, and the decisions that require human approval."],
  ["Build a focused prototype", "Test one useful workflow with representative inputs. Make limitations visible early."],
  ["Integrate and test", "Connect the agreed systems. Test permissions, failure paths, and escalation to a person."],
  ["Train and hand over", "Document how it works, who owns it, and how your team operates it."],
  ["Support and improve", "Review real usage against the baseline and agree on the next improvements."],
];

function Words({ text, mark }: { text: string; mark?: boolean }) {
  return (
    <span className={mark ? s.mark : undefined}>
      {text.split(" ").map((w, i) => (
        <Fragment key={i}>
          {i > 0 && " "}
          <span className={s.word}>{w}</span>
        </Fragment>
      ))}
    </span>
  );
}

function Band({ id, tone, label, title, children, mock }: { id?: string; tone: string; label: string; title: ReactNode; children: ReactNode; mock: ReactNode }) {
  return (
    <section id={id} className={`${s.band} ${tone}`}>
      <div className={s.bandInner}>
        <div className={s.bandText}>
          <p className={s.label}>{label}</p>
          <h2>{title}</h2>
          {children}
        </div>
        <div className={s.bandMock} role="img" aria-label="Illustration of the workflow, with sample data">
          {mock}
        </div>
      </div>
    </section>
  );
}

export default function AiPageB() {
  return (
    <div className={`${s.page} ${serif.variable}`}>
      <header className={s.nav}>
        <Link href="/b/ai" className={s.brand} aria-label="New Plains home">
          <span className={s.logo}>
            <Image src="/logo.png" alt="" width={1264} height={848} priority />
          </span>
          New Plains
        </Link>
        <nav aria-label="Page">
          <a href="#outcomes">Outcomes</a>
          <a href="#tools">Tools</a>
          <a href="#approach">Approach</a>
          <a href="#audit">$999 audit</a>
        </nav>
        <a className={s.navCta} href="#contact" data-interest="workshop">Plan a workshop</a>
      </header>

      <Hero />

      <p className={s.creds}>
        <span>20+ years in operations</span>
        <span>Dealerships</span>
        <span>Finance</span>
        <span>B2B sales</span>
        <span>Oklahoma roots</span>
      </p>

      {/* The rounded panel: a staggered headline, then text that inks in as you read. */}
      <section className={s.panel}>
        <h2 className={s.stagger}>
          <span>The work isn’t</span>
          <span>the problem. The busywork</span>
          <span>around it is.</span>
        </h2>
        <div className={s.storyGrid}>
          <div className={s.notesPile} aria-hidden="true">
            <span>Re-enter in CRM</span>
            <span>Who has this?</span>
            <span>Rebuild Monday report</span>
            <span>Call back Friday</span>
          </div>
          <div className={s.story}>
            {story.map((p) => (
              <p key={p}><Words text={p} /></p>
            ))}
            <p><Words text={storyMark} mark /></p>
          </div>
        </div>
      </section>

      <div id="outcomes" className={s.outcomes}>
        <Band
          tone={s.sage}
          label="Revenue"
          title="Give good opportunities a clear next step."
          mock={
            <div className={s.stack}>
              <div className={`${s.card} ${s.cardOpen}`}>
                <div className={s.who}><span className={s.avatar}>HS</span><div><strong>Hendricks Supply</strong><small>Web form · 2 minutes ago</small></div></div>
                <p className={s.cardLabel}>Why now</p>
                <p>Asked for a quote on a repeat order. Last purchase 14 months ago. Routed to Dana, who handled the account.</p>
                <div className={s.cardRow}><span className={s.pillGreen}>Draft ready</span><span className={s.btnMini}>Review and send</span></div>
              </div>
              <div className={s.card}><div className={s.who}><span className={s.avatar}>RW</span><div><strong>Ridgeway Farms</strong><small>Phone lead · routed to Marcus</small></div></div><span className={s.pillGreen}>Replied</span></div>
              <div className={s.card}><div className={s.who}><span className={s.avatar}>OC</span><div><strong>Osage Contractors</strong><small>No reply in 5 days</small></div></div><span className={s.pillCopper}>Flagged to Dana</span></div>
            </div>
          }
        >
          <p>Route incoming leads, prepare follow-up drafts, and bring overdue opportunities to the right person. Measure response time and follow-through.</p>
        </Band>

        <Band
          tone={s.wheat}
          label="Customer experience"
          title="Keep the handoff from becoming the holdup."
          mock={
            <div className={s.stack}>
              <div className={`${s.card} ${s.cardOpen}`}>
                <div className={s.who}><span className={s.avatar}>CP</span><div><strong>Service request · Carla P.</strong><small>Opened this morning</small></div></div>
                <ul className={s.history}>
                  <li>Last visit March 12, same symptom</li>
                  <li>Part on order, arriving Thursday</li>
                  <li>Prefers text updates</li>
                </ul>
                <p className={s.cardLabel}>Draft update</p>
                <p className={s.draft}>Hi Carla, your unit is in bay 3. The part arrives Thursday and we will text you when it is ready.</p>
                <div className={s.cardRow}><span className={s.pillWheat}>Waiting on staff review</span><span className={s.btnMini}>Approve</span></div>
              </div>
            </div>
          }
        >
          <p>Organize service requests, surface relevant history, and draft consistent updates for staff review. Measure handoff delays and rework.</p>
        </Band>

        <Band
          tone={s.copper}
          label="Operating capacity"
          title="Get your people out of the copy-and-paste loop."
          mock={
            <div className={s.stack}>
              <div className={`${s.card} ${s.cardOpen}`}>
                <div className={s.who}><span className={s.avatar}>MR</span><div><strong>Monday operations report</strong><small>4 branches · built at 6:02 AM</small></div></div>
                <ul className={s.checks}>
                  <li><span>Orders, from three systems</span><em>Synced</em></li>
                  <li><span>Branch numbers, side by side</span><em>Reconciled</em></li>
                  <li><span>Invoices received</span><em>Filed</em></li>
                  <li><span>Meeting notes, last week</span><em>Summarized</em></li>
                  <li className={s.needs}><span>Exceptions</span><em>3 need a person</em></li>
                </ul>
              </div>
            </div>
          }
        >
          <p>Turn recurring reports, document intake, and scattered meeting notes into repeatable workflows. Measure processing time and exceptions.</p>
        </Band>
        <p className={s.footnote}>Representative workflows to explore together, not promised results. Names and data are illustrative.</p>
      </div>

      <section id="tools" className={s.tools}>
        <div className={s.toolsHead}>
          <p className={s.label}>Examples of what we can build</p>
          <h2>Practical tools, built around your work.</h2>
        </div>
        {featured && (
          <article className={s.feature}>
            <div className={s.featureShot}>
              <Image src={featured.image!} alt={featured.imageAlt ?? ""} width={2998} height={1592} sizes="(max-width: 860px) 92vw, 720px" />
            </div>
            <div>
              <p className={s.label}>{featured.label}</p>
              <h3>{featured.title}</h3>
              <p>{featured.description}</p>
            </div>
          </article>
        )}
        <div className={s.accordion}>
          {listed.map((e, i) => (
            <details key={e.title} name="tools" open={i === 0}>
              <summary>{e.title}</summary>
              <div>
                <p className={s.label}>{e.label}</p>
                <p>{e.description}</p>
                {e.upcoming && <p className={s.small}>{e.upcoming}</p>}
                {e.url && <a href={e.url}>{e.linkLabel} ↗</a>}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section id="approach" className={s.approach}>
        <div className={s.approachHead}>
          <p className={s.label}>From first question to everyday use</p>
          <h2>Built with your people. Designed for the real world.</h2>
          <p>Clear scope. Human approval. Deliberate data access. A person to handle the exceptions.</p>
        </div>
        <ol className={s.grid}>
          {steps.map(([title, body], i) => (
            <li key={title}>
              <span className={s.key}>{String(i + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={s.operator}>
        <div className={s.operatorPhoto}>
          <Image src="/a-ai/shawn-listening.jpg" alt="Shawn Skaggs listening across a table at a business dinner" width={1600} height={1067} sizes="(max-width: 860px) 92vw, 560px" />
        </div>
        <div>
          <p className={s.label}>Who you’ll work with</p>
          <p className={s.quote}>An operator’s perspective, before a line of code.</p>
          <p>Shawn brings more than 20 years of business and operational experience across dealership operations, finance, and B2B sales. That perspective shapes the questions we ask before we build.</p>
        </div>
      </section>

      <section className={s.ways}>
        <p className={s.label}>Three ways in</p>
        <Link href="/a/ai/workshop"><strong>Leadership workshop</strong><span>Align the team. Prioritize opportunities. Build practical AI capability.</span><i>→</i></Link>
        <a href="#contact" data-interest="custom"><strong>Custom AI system</strong><span>Bring us the process, the bottleneck, and the outcome you need.</span><i>↓</i></a>
        <a href="#contact" data-interest="concierge"><strong>AI concierge</strong><span>Ongoing support that ships the next improvement and trains the people who own it.</span><i>↓</i></a>
      </section>

      <section id="contact" className={s.close}>
        <div className={s.closeIntro}>
          <p className={s.label}>Where to start</p>
          <h2>The leadership workshop.</h2>
          <p>A working session for your leadership team. Agree where AI supports the business, choose the opportunities worth a closer look, and decide what your people need to use it well. We confirm the agenda, format, duration, and fee with you before you book.</p>
          <Link href="/a/ai/workshop" className={s.closeLink}>What the workshop covers →</Link>
          <div id="audit" className={s.closeAside}>
            <p><strong>Need a narrower start?</strong> The $999 AI Audit is a paid, standalone one-hour conversation about a single workflow, with no obligation to commission a build. <a href="#contact" data-interest="audit">Ask about the audit&nbsp;↓</a></p>
          </div>
        </div>
        <InquiryForm />
      </section>

      <p className={s.wordmark} aria-hidden="true">New Plains</p>
    </div>
  );
}
