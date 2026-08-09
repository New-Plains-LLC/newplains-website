import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "delivery-stack — newplains.dev",
  description:
    "An AI consulting + GovCon delivery stack. Spec: every component below is real and runs in production.",
};

const SCOPE_MAILTO = "mailto:dsskaggs@gmail.com?subject=Scope";

const heroTerminal = `$ ./newplains --status
An AI consulting + GovCon delivery stack.
Spec: every component below is real and runs in production.
v0.18.2 · last deploy: today

STATUS ......... OPERATIONAL
PIPELINES ...... 3
FAILURES ....... 0
UPTIME ......... 99.9%`;

const systemDiagram = `┌─────────────┐   ┌──────────────┐   ┌───────────┐   ┌──────────────┐
│   GMAIL     │──▶│  VISION OCR  │──▶│    n8n    │──▶│  QUICKBOOKS  │
│ auto-label  │   │ + classify   │   │  routing  │   │  write-back  │
└─────────────┘   └──────────────┘   └───────────┘   └──────────────┘

┌─────────────┐   ┌──────────────┐   ┌───────────┐   ┌──────────────┐
│   INBOX     │──▶│  AI SCORING  │──▶│    CRM    │──▶│  TELEGRAM    │
│  inbound    │   │  ~$0.003/ea  │   │  field    │   │  alert owner │
└─────────────┘   └──────────────┘   └───────────┘   └──────────────┘

┌─────────────┐   ┌──────────────┐   ┌───────────┐
│ n8n webhook │──▶│  HERMES      │──▶│  ALERT    │   human-in-the-loop
│  inbox      │   │  review      │   │  chatId   │   agent NEVER writes
└─────────────┘   └──────────────┘   └───────────┘   to CRM directly`;

const pipelines = [
  {
    id: "PIP-01",
    title: "Receipt Pipeline",
    route: "Gmail → Vision → n8n → QuickBooks",
    stages: [
      "Stage 1: Gmail auto-label driver (5s runtime, 60 labels/run, 0 failures after week 2)",
      "Stage 2: Vision OCR + classification (OpenAI Vision)",
      "Stage 3: QuickBooks write-back",
    ],
    metrics: ["throughput: 60 emails in 5s", "failure rate: 0% after stabilization"],
  },
  {
    id: "PIP-02",
    title: "Lead Triage",
    route: "n8n → AI scoring → CRM → Telegram",
    stages: [
      "Inbound → scored → CRM field updated → Telegram alert to assigned owner",
    ],
    metrics: ["latency p95: 90s end-to-end", "cost per lead: ~$0.003 (mostly model inference)"],
  },
  {
    id: "PIP-03",
    title: "Deal Flow Routing",
    route: "inbox → AI agent → alert",
    stages: [
      "n8n webhook → Hermes review → Telegram alert (chatId 8555469436)",
      "human-in-the-loop; agent NEVER writes to CRM directly",
    ],
    metrics: ["state: production", "guardrail: read-only on CRM"],
  },
];

const naicsRows = [
  { code: "561210", description: "Facilities Support Services", status: "Active", vehicle: "SAM.gov, OASIS+" },
  { code: "722310", description: "Food Service Contractors", status: "Active", vehicle: "SAM.gov" },
  { code: "561720", description: "Janitorial Services", status: "Active", vehicle: "SAM.gov" },
  { code: "561730", description: "Landscaping Services", status: "Active", vehicle: "SAM.gov" },
  { code: "541512", description: "Custom Computer Programming", status: "Active", vehicle: "SAM.gov" },
  { code: "541511", description: "Custom Computer Programming (legacy)", status: "Inactive", vehicle: "—" },
];

const entityRows = [
  { key: "HUBZone status", value: "Eligible" },
  { key: "UEI", value: "On file" },
  { key: "CAGE", value: "Assigned" },
  { key: "Set-asides", value: "8(a)-eligibility under review" },
  { key: "Bonding capacity", value: "TBD" },
  { key: "Subcontractors", value: "8(a) / SDVOSB / WOSB partners" },
];

const metrics = [
  { label: "receipt throughput", value: "60 emails / 5s" },
  { label: "failure rate", value: "0% (post week 2)" },
  { label: "lead latency p95", value: "90s end-to-end" },
  { label: "cost per lead", value: "~$0.003" },
];

export default function ConceptCPage() {
  return (
    <>
      {/* HERO — terminal window */}
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-14 md:pt-20">
        <h1 className="text-2xl font-bold leading-snug tracking-tight text-[#4ADE80] md:text-5xl md:leading-[1.1]">
          <span className="text-[#F59E0B]">$ </span>
          An AI consulting + GovCon delivery stack.
        </h1>
        <p className="mt-3 text-sm text-[#4ADE80]/60">
          Spec: every component below is real and runs in production.
        </p>
        <div className="mt-8 overflow-hidden rounded-lg border border-[#4ADE80]/30 bg-[#0F0F10] shadow-[0_0_60px_rgba(74,222,128,0.08)]">
          <div className="flex items-center gap-2 border-b border-[#4ADE80]/20 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#F59E0B]" />
            <span className="h-3 w-3 rounded-full bg-[#4ADE80]/50" />
            <span className="h-3 w-3 rounded-full bg-[#4ADE80]/20" />
            <span className="ml-3 text-xs text-[#4ADE80]/50">newplains@prod: ~/delivery-stack</span>
          </div>
          <pre className="overflow-x-auto p-6 text-[13px] leading-relaxed text-[#4ADE80] md:text-sm">
            {heroTerminal}
          </pre>
        </div>
        <p className="mt-6 text-center text-xs text-[#4ADE80]/50">
          If you’ve read this far, you know what we do.{" "}
          <a href={SCOPE_MAILTO} className="text-[#F59E0B] underline decoration-dotted underline-offset-4 hover:text-white">
            send scope
          </a>
        </p>
      </section>

      {/* SYSTEM DIAGRAM */}
      <section className="border-y border-[#4ADE80]/15 bg-[#0F0F10] py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
            {"// system diagram"}
          </h2>
          <pre className="mt-8 overflow-x-auto text-[12px] leading-relaxed text-[#4ADE80]/90 md:text-[13px]">
            {systemDiagram}
          </pre>
          <p className="mt-6 text-xs text-[#4ADE80]/50">
            Every box above is a running component. No mockups, no slides, no “concept art.”
          </p>
        </div>
      </section>

      {/* LIVE METRICS */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
          {"// live metrics (cached)"}
        </h2>
        <div className="mt-8 grid gap-px border border-[#4ADE80]/20 bg-[#4ADE80]/20 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="bg-[#0A0A0B] p-6">
              <p className="text-[11px] uppercase tracking-widest text-[#4ADE80]/50">{m.label}</p>
              <p className="mt-2 text-xl font-bold text-[#4ADE80]">{m.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PIPELINE SPECS */}
      <section className="border-y border-[#4ADE80]/15 bg-[#0F0F10] py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
            {"// pipelines"}
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {pipelines.map((p) => (
              <article key={p.id} className="border border-[#4ADE80]/20 bg-[#0A0A0B] p-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-widest text-[#F59E0B]">{p.id}</span>
                  <span className="h-2 w-2 rounded-full bg-[#4ADE80]" />
                </div>
                <h3 className="mt-3 text-base font-bold text-[#4ADE80]">{p.title}</h3>
                <p className="mt-1 text-xs text-[#4ADE80]/60">{p.route}</p>
                <ul className="mt-5 space-y-2.5 border-t border-[#4ADE80]/15 pt-5 text-xs leading-relaxed text-[#4ADE80]/85">
                  {p.stages.map((stage) => (
                    <li key={stage} className="flex gap-2">
                      <span className="text-[#F59E0B]">$</span>
                      {stage}
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 space-y-1.5 border-t border-[#4ADE80]/15 pt-4 text-xs text-[#4ADE80]/70">
                  {p.metrics.map((metric) => (
                    <li key={metric} className="flex gap-2">
                      <span className="text-[#4ADE80]">·</span>
                      {metric}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NAICS MATRIX — TABLE */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
          {"// govcon · capability matrix"}
        </h2>
        <div className="mt-8 overflow-x-auto border border-[#4ADE80]/25">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[#4ADE80]/25 bg-[#0F0F10] text-[11px] uppercase tracking-widest text-[#F59E0B]">
                <th className="px-5 py-3 font-bold">NAICS</th>
                <th className="px-5 py-3 font-bold">Description</th>
                <th className="px-5 py-3 font-bold">Status</th>
                <th className="px-5 py-3 font-bold">Vehicle</th>
              </tr>
            </thead>
            <tbody>
              {naicsRows.map((row) => (
                <tr key={row.code} className="border-b border-[#4ADE80]/10 last:border-0">
                  <td className="px-5 py-3 font-bold text-[#4ADE80]">{row.code}</td>
                  <td className="px-5 py-3 text-[#4ADE80]/85">{row.description}</td>
                  <td className="px-5 py-3">
                    <span
                      className={
                        row.status === "Active"
                          ? "text-[#4ADE80]"
                          : "text-[#F59E0B]"
                      }
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-[#4ADE80]/70">{row.vehicle}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ENTITY TABLE */}
        <div className="mt-6 overflow-x-auto border border-[#4ADE80]/25">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <tbody>
              {entityRows.map((row) => (
                <tr key={row.key} className="border-b border-[#4ADE80]/10 last:border-0">
                  <td className="w-1/2 bg-[#0F0F10] px-5 py-3 text-[11px] uppercase tracking-widest text-[#F59E0B]">
                    {row.key}
                  </td>
                  <td className="px-5 py-3 text-[#4ADE80]/85">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-[#4ADE80]/50">
          Entity: New Plains LLC — Oklahoma. SAM.gov registered · UEI on file · CAGE assigned.
        </p>
        <Link href="/c/govcon" className="mt-3 inline-block text-xs text-[#F59E0B] hover:text-white">
          view full matrix →
        </Link>
      </section>

      {/* CTA */}
      <section className="border-t border-[#4ADE80]/15 bg-[#0F0F10] py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <pre className="text-left text-[12px] leading-relaxed text-[#4ADE80]/70 md:text-sm">
{`$ newplains --engage
> no sales process. no deck. no discovery gauntlet.
> send the scope; you get a reply by next business day.`}
          </pre>
          <a
            href={SCOPE_MAILTO}
            className="mt-8 inline-flex items-center justify-center border-2 border-[#4ADE80] px-10 py-4 text-base font-bold uppercase tracking-[0.15em] text-[#4ADE80] transition-colors hover:bg-[#4ADE80] hover:text-[#0A0A0B]"
          >
            [ Send scope ]
          </a>
          <p className="mt-5 text-xs text-[#4ADE80]/50">
            dsskaggs@gmail.com · subject: Scope
          </p>
        </div>
      </section>
    </>
  );
}
