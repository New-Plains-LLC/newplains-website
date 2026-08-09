import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Consulting — New Plains LLC",
  description:
    "The $999 1-hour AI audit call, production automations running today, a hosted agent team, and AI training — on-site or on the web. info@newplains.dev",
  robots: { index: false },
};

const AUDIT_MAILTO =
  "mailto:info@newplains.dev?subject=AI%20Audit&body=Hi%20New%20Plains%2C%20I%27d%20like%20to%20book%20a%201-hour%20AI%20audit%20call%20(%24999).%20Here%27s%20a%20bit%20about%20my%20business%3A";
const AGENT_TEAM_MAILTO =
  "mailto:info@newplains.dev?subject=Agent%20Team%20Inquiry";
const TRAINING_MAILTO = "mailto:info@newplains.dev?subject=AI%20Training";

const auditDeliverables = [
  {
    title: "The three biggest leaks, named",
    body: "We map the 3 biggest time/money leaks in your business — inbox triage, expense coding, lead routing, rekeying — and put a dollar figure on each.",
  },
  {
    title: "A written short-list, not a deck",
    body: "A plain-English fix list you can act on: what to automate first, what it saves, and what it costs to ship. Yours to keep either way.",
  },
  {
    title: "A fixed quote for the build",
    body: "Anything after the call gets bid out as a separate engagement — fixed scope, fixed price, no open-ended retainers pushed on you.",
  },
  {
    title: "A team that already runs this",
    body: "The audit is led by people running production automations every day — not consultants reading from a slide template.",
  },
];

const cronAutomations = [
  {
    profile: "ops",
    items: [
      "Daily Briefing — 6:30 AM CT",
      "Inbox Triage — 4×/day",
      "Gmail Auto-Label — every 15 min",
      "Inbox Auto-Sort to Folders — every 15 min",
      "Sunday AM Revenue Check",
    ],
  },
  {
    profile: "personal",
    items: [
      "Daily Decision Log",
      "Weekly Decision Summary",
      "Nightly Dream Vault maintenance",
      "Morning Money Mindset",
      "Evening Money Repattern",
      "Bronco Rig Watch — daily",
    ],
  },
  {
    profile: "marketing",
    items: [
      "FirstHomeFix weekly blog draft",
      "LakeTees monthly draft review",
      "Ad performance check-in",
    ],
  },
  {
    profile: "build",
    items: ["MiniMax token quota monitoring (target: stay under 5.1B/mo)"],
  },
];

const n8nWorkflows = [
  { name: "Hermes Gmail auto-label driver", detail: "60 emails/run, ~5 sec, 0 failures" },
  { name: "FirstHomeFix lead intake webhook", detail: "Web → lead pipeline, no human rekeying" },
  { name: "Claude email-to-folder routing", detail: "AI classifies, files, and flags" },
  { name: "Daily Morning Briefing voice delivery", detail: "Reads the brief out loud" },
  { name: "Meeting Prep Agent", detail: "Agenda + context before every call" },
  { name: "OpenClaw calendar sync", detail: "Two-way, no conflicts" },
  { name: "Weekly NPS survey summary", detail: "Scores rolled up every week" },
  { name: "Teams channel reader", detail: "Threads summarized, action items pulled" },
];

const agentTeam = [
  {
    name: "Elon",
    role: "Building",
    detail: "Turns instructions into shipped work — code, configs, and builds.",
  },
  {
    name: "Marcus",
    role: "Executive reasoning",
    detail: "Stress-tests decisions, plays devil's advocate, thinks in systems.",
  },
  {
    name: "JD",
    role: "Ops",
    detail: "Keeps the day moving — schedules, follow-ups, and logistics.",
  },
  {
    name: "Alex",
    role: "Marketing",
    detail: "Drafts, campaigns, and channel work.",
  },
];

const trainingOffers = [
  {
    title: "On-site · 4-hour executive workshop",
    location: "Oklahoma + surrounding states",
    body: "“How to run your business with an AI team instead of a chatbot.” Hands-on: you build your first 3 automations live.",
  },
  {
    title: "On the web · 60-minute Zoom",
    location: "For distributed teams",
    body: "Same content, smaller cohort, screen-share driven. Bring your team, leave with automations running.",
  },
];

export default function AiPage() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-24 md:pt-32">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-brand-copper">
          AI Consulting · Production-Proven
        </p>
        <h1 className="font-heading max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-brand-charcoal sm:text-6xl md:text-7xl">
          We run real AI automations every day. We&apos;ll run them for you.
        </h1>
        <p className="mt-7 max-w-2xl text-xl font-medium text-brand-charcoal md:text-2xl">
          Not a slide deck. A stack of automations that has been running in production —
          across inboxes, revenue checks, and lead pipelines — for months.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={AUDIT_MAILTO}
            className="inline-flex items-center justify-center rounded-full bg-brand-copper px-8 py-4 text-base font-semibold text-brand-cream shadow-lg shadow-brand-copper/25 transition-colors hover:bg-brand-copper-light"
          >
            Book a 1-hour audit call → $999
          </a>
          <a
            href="#running-today"
            className="inline-flex items-center justify-center rounded-full border border-brand-charcoal/20 px-8 py-4 text-base font-semibold text-brand-charcoal transition-colors hover:border-brand-copper hover:text-brand-copper"
          >
            See what&apos;s running
          </a>
        </div>
      </section>

      {/* THE $999 AUDIT */}
      <section className="border-y border-brand-copper/15 bg-white/60 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-copper">
            The Offer · Fixed Price
          </p>
          <h2 className="font-heading mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-brand-charcoal md:text-4xl">
            Book a 1-hour AI audit call. $999.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-brand-charcoal/70">
            We map the 3 biggest time/money leaks in your business and give you a written
            short-list of what to fix. Anything after that gets bid out as a separate
            engagement.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {auditDeliverables.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-brand-charcoal/10 bg-brand-cream p-7"
              >
                <h3 className="font-heading text-lg font-semibold text-brand-charcoal">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/70">{item.body}</p>
              </div>
            ))}
          </div>
          <a
            href={AUDIT_MAILTO}
            className="mt-10 inline-flex items-center justify-center rounded-full bg-brand-copper px-8 py-4 text-base font-semibold text-brand-cream shadow-lg shadow-brand-copper/25 transition-colors hover:bg-brand-copper-light"
          >
            Book the $999 Audit
          </a>
        </div>
      </section>

      {/* RUNNING TODAY — CRON + N8N */}
      <section id="running-today" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-copper">
            Running Today
          </p>
          <h2 className="font-heading mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-brand-charcoal md:text-4xl">
            These automations are live on our own stack right now.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-brand-charcoal/70">
            Every one of these is a client-ready playbook. If it runs for us, it can run for
            you.
          </p>

          <h3 className="mt-14 text-sm font-bold uppercase tracking-widest text-brand-charcoal/50">
            Hermes cron automations — across our own profiles
          </h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cronAutomations.map((group) => (
              <div
                key={group.profile}
                className="rounded-2xl border border-brand-charcoal/10 bg-brand-cream p-6"
              >
                <h4 className="text-xs font-bold uppercase tracking-widest text-brand-copper">
                  {group.profile}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm leading-snug text-brand-charcoal/80">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="mt-14 text-sm font-bold uppercase tracking-widest text-brand-charcoal/50">
            n8n workflows — live, in production
          </h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {n8nWorkflows.map((w) => (
              <div
                key={w.name}
                className="rounded-2xl border border-brand-charcoal/10 bg-white/60 p-6"
              >
                <h4 className="text-sm font-semibold text-brand-charcoal">{w.name}</h4>
                <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/70">{w.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOSTED AGENT TEAM */}
      <section className="border-y border-brand-copper/15 bg-white/60 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-copper">
            Hosted Agent Team
          </p>
          <h2 className="font-heading mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-brand-charcoal md:text-4xl">
            Five specialty personas instead of one chatbot.
          </h2>
          <p className="mt-5 max-w-3xl text-lg text-brand-charcoal/70">
            We host a team of personal-assistant AI agents on a private server, customized for
            your executive. Each agent has persistent memory (Honcho), access to your
            Notion/Drive/Gmail/Calendar, and runs on a dedicated profile. One Telegram chat.
            Phone-call voice interface. Five specialty personas instead of one chatbot.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {agentTeam.map((agent) => (
              <div
                key={agent.name}
                className="rounded-2xl border border-brand-charcoal/10 bg-brand-cream p-6"
              >
                <h3 className="font-heading text-xl font-semibold text-brand-charcoal">
                  {agent.name}
                </h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest text-brand-copper">
                  {agent.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/70">
                  {agent.detail}
                </p>
              </div>
            ))}
          </div>
          <a
            href={AGENT_TEAM_MAILTO}
            className="mt-10 inline-flex items-center justify-center rounded-full bg-brand-copper px-8 py-4 text-base font-semibold text-brand-cream shadow-lg shadow-brand-copper/25 transition-colors hover:bg-brand-copper-light"
          >
            Inquire about the hosted agent team
          </a>
        </div>
      </section>

      {/* AI TRAINING */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-copper">
            AI Training
          </p>
          <h2 className="font-heading mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-brand-charcoal md:text-4xl">
            Learn to run your business with an AI team — not a chatbot.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {trainingOffers.map((offer) => (
              <div
                key={offer.title}
                className="flex flex-col rounded-2xl border border-brand-charcoal/10 bg-brand-cream p-8"
              >
                <h3 className="font-heading text-xl font-semibold text-brand-charcoal">
                  {offer.title}
                </h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest text-brand-copper">
                  {offer.location}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-brand-charcoal/70">
                  {offer.body}
                </p>
              </div>
            ))}
          </div>
          <a
            href={TRAINING_MAILTO}
            className="mt-10 inline-flex items-center justify-center rounded-full border border-brand-copper px-8 py-4 text-base font-semibold text-brand-copper transition-colors hover:bg-brand-copper hover:text-brand-cream"
          >
            Book training
          </a>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pb-24 text-center md:pb-28">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-copper">
            Fixed price · Fixed scope · Written deliverable
          </p>
          <h2 className="font-heading mt-4 text-3xl font-semibold tracking-tight text-brand-charcoal md:text-5xl">
            One hour. Three leaks. A short-list you can act on.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-brand-charcoal/70">
            One email starts the audit. We reply within one business day with your call slot.
          </p>
          <a
            href={AUDIT_MAILTO}
            className="mt-10 inline-flex items-center justify-center rounded-full bg-brand-copper px-10 py-5 text-lg font-semibold text-brand-cream shadow-xl shadow-brand-copper/25 transition-colors hover:bg-brand-copper-light"
          >
            Book the $999 Audit
          </a>
          <p className="mt-5 text-sm text-brand-charcoal/50">
            info@newplains.dev · subject: AI Audit
          </p>
        </div>
      </section>
    </>
  );
}
