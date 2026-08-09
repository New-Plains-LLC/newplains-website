import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "AI Consulting — New Plains LLC",
  description:
    "The $999 1-hour AI audit call, workflow automation, AI team setup, custom agents, document & spreadsheet automation, and AI training — on-site or on the web. info@newplains.dev",
  robots: { index: false },
};

const AUDIT_MAILTO =
  "mailto:info@newplains.dev?subject=AI%20Audit&body=Hi%20New%20Plains%2C%20I%27d%20like%20to%20book%20a%201-hour%20AI%20audit%20call%20(%24999).%20Here%27s%20a%20bit%20about%20my%20business%3A";
const TRAINING_MAILTO = "mailto:info@newplains.dev?subject=AI%20Training";

const CAPABILITY_IMG =
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&h=900&fit=crop&q=80&auto=format";

const services = [
  {
    title: "$999 Audit Call",
    promise:
      "1-hour video call. We map the 3 biggest leaks in your business and put a dollar figure on each. Anything after that gets bid out as a separate engagement.",
    saves: null as string | null,
    cta: { label: "Book the call", href: AUDIT_MAILTO },
  },
  {
    title: "Workflow Automation",
    promise:
      "We replace the manual stuff — invoice coding, lead routing, data rekeying, weekly reports — with software that runs while you sleep.",
    saves: "~10–20 hrs/wk",
    cta: null,
  },
  {
    title: "AI Team Setup",
    promise:
      "A small group of specialized AI agents on a private server, each tuned to a different job (ops, finance, sales, admin). They share memory, learn your business, and act without prompting.",
    saves: "~one FTE of administrative time",
    cta: null,
  },
  {
    title: "Custom Agents",
    promise:
      "Built for one job. Sales-call summarizer. Contract red-liner. RFP drafter. Field-tech dispatcher. You name it, we build it.",
    saves: "~50% of one role's time",
    cta: null,
  },
  {
    title: "Document & Spreadsheet Automation",
    promise:
      "Your agents can read, analyze, and create Excel workbooks, Word docs, PowerPoint decks, and PDFs from raw data — on demand, in your formatting.",
    saves: "~6 hrs/wk of reporting",
    cta: null,
  },
  {
    title: "AI Training",
    promise:
      "4-hour on-site workshop (OK + surrounding) or 60-min Zoom cohort for distributed teams. “How to run your business with an AI team instead of a chatbot.” Hands-on: build your first 3 automations live.",
    saves: null,
    cta: { label: "Book training", href: TRAINING_MAILTO },
  },
];

export default function AiPage() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-24 md:pt-32">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-brand-copper">
          AI Consulting · Fixed Price
        </p>
        <h1 className="font-heading max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-brand-charcoal sm:text-6xl md:text-7xl">
          AI that pays for itself.
        </h1>
        <p className="mt-7 max-w-2xl text-xl font-medium text-brand-charcoal md:text-2xl">
          You don&apos;t need another chatbot. You need the manual work in your business to stop
          happening. We audit, design, and build the automation — and we hand you a team that
          keeps it running.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={AUDIT_MAILTO}
            className="inline-flex items-center justify-center rounded-full bg-brand-copper px-8 py-4 text-base font-semibold text-brand-cream shadow-lg shadow-brand-copper/25 transition-colors hover:bg-brand-copper-light"
          >
            Book a 1-hour audit call → $999
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-full border border-brand-charcoal/20 px-8 py-4 text-base font-semibold text-brand-charcoal transition-colors hover:border-brand-copper hover:text-brand-copper"
          >
            See the services
          </a>
        </div>
      </section>

      {/* CAPABILITY IMAGERY */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-brand-charcoal/10 shadow-sm">
          <Image
            src={CAPABILITY_IMG}
            alt="A team working together on laptops in a workshop"
            fill
            sizes="(max-width: 1280px) 100vw, 1152px"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1B2D45]/90 via-[#1B2D45]/50 to-transparent p-6 md:p-8">
            <p className="max-w-2xl text-sm font-medium leading-relaxed text-white/90 md:text-base">
              Your team of specialized AI agents on a private server — ops, finance, sales, and
              admin — sharing memory, learning your business, and acting without prompting.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-y border-brand-copper/15 bg-white/60 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-copper">
            Services · Fixed Scope
          </p>
          <h2 className="font-heading mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-brand-charcoal md:text-4xl">
            Six ways we take the manual out of your business.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="flex flex-col rounded-2xl border border-brand-charcoal/10 bg-brand-cream p-7"
              >
                <h3 className="font-heading text-xl font-semibold text-brand-charcoal">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-charcoal/70">
                  {s.promise}
                </p>
                {s.saves && (
                  <div className="mt-5">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-brand-copper">
                      What it saves you
                    </p>
                    <p className="mt-1 text-sm font-semibold text-brand-charcoal">{s.saves}</p>
                  </div>
                )}
                {s.cta && (
                  <a
                    href={s.cta.href}
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-copper px-6 py-3 text-sm font-semibold text-brand-cream shadow-md shadow-brand-copper/20 transition-colors hover:bg-brand-copper-light"
                  >
                    {s.cta.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-3xl bg-[#1B2D45] px-8 py-12 text-center shadow-xl shadow-[#1B2D45]/20 md:px-14 md:py-16">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Tell us what&apos;s manual. We&apos;ll tell you if we can automate it.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
              One email starts the audit. We reply within one business day with your call slot.
            </p>
            <a
              href={AUDIT_MAILTO}
              className="mt-10 inline-flex items-center justify-center rounded-full bg-brand-copper px-10 py-5 text-lg font-semibold text-brand-cream shadow-xl shadow-black/20 transition-colors hover:bg-brand-copper-light"
            >
              Book the $999 Audit
            </a>
            <p className="mt-5 text-sm text-white/50">
              info@newplains.dev · subject: AI Audit
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
