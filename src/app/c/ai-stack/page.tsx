import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ai-stack — newplains.dev",
  description:
    "Full AI delivery pipeline spec: receipt pipeline, lead triage, deal flow routing. Latency, cost, and guardrails.",
};

const SCOPE_MAILTO = "mailto:info@newplains.dev?subject=Scope";

const pipelines = [
  {
    id: "PIP-01",
    title: "Receipt Pipeline",
    route: "Gmail → Vision → n8n → QuickBooks",
    summary:
      "Expense receipts auto-label, OCR-classify, and write back to QuickBooks with a human review pass.",
    stages: [
      {
        stage: "Stage 1",
        component: "Gmail auto-label driver",
        note: "5s runtime · 60 labels/run · 0 failures after week 2",
      },
      {
        stage: "Stage 2",
        component: "Vision OCR + classification",
        note: "OpenAI Vision · vendor + category classification",
      },
      {
        stage: "Stage 3",
        component: "QuickBooks write-back",
        note: "Webhook-driven · human review queue before commit",
      },
    ],
    metrics: ["throughput: 60 emails in 5s", "failure rate: 0% after stabilization"],
  },
  {
    id: "PIP-02",
    title: "Lead Triage",
    route: "n8n → AI scoring → CRM → Telegram",
    summary:
      "Every inbound email is scored, labeled, written to the CRM, and alerted to the assigned owner.",
    stages: [
      {
        stage: "Stage 1",
        component: "Inbound capture",
        note: "n8n webhook · multi-channel email",
      },
      {
        stage: "Stage 2",
        component: "AI scoring",
        note: "priority + category model inference",
      },
      {
        stage: "Stage 3",
        component: "CRM + Telegram",
        note: "field updated · alert to assigned owner",
      },
    ],
    metrics: ["latency p95: 90s end-to-end", "cost per lead: ~$0.003 (mostly model inference)"],
  },
  {
    id: "PIP-03",
    title: "Deal Flow Routing",
    route: "inbox → AI agent → alert",
    summary:
      "Deal-relevant inbox traffic is reviewed by an AI agent, then routed to a human with full context.",
    stages: [
      {
        stage: "Stage 1",
        component: "n8n webhook",
        note: "inbox trigger → agent review queue",
      },
      {
        stage: "Stage 2",
        component: "Hermes review",
        note: "AI agent triages and drafts response context",
      },
      {
        stage: "Stage 3",
        component: "Telegram alert",
        note: "chatId 8555469436 · human-in-the-loop",
      },
    ],
    metrics: ["state: production", "guardrail: agent NEVER writes to CRM directly"],
  },
];

export default function AiStackPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pb-14 pt-14 md:pt-20">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#F59E0B]">{"// ai-stack · spec"}</p>
        <h1 className="mt-4 text-2xl font-bold leading-snug text-[#4ADE80] md:text-4xl">
          Every pipeline below is real and runs in production.
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#4ADE80]/70">
          Documentation-first: components, stages, latency, cost, and guardrails. If a number is
          missing, it means we don’t have it cached yet — ask and we’ll pull it.
        </p>
      </section>

      <section className="mx-auto max-w-5xl space-y-10 px-6 pb-20">
        {pipelines.map((p) => (
          <article key={p.id} className="border border-[#4ADE80]/25 bg-[#0F0F10]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#4ADE80]/20 px-6 py-4">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-[#F59E0B]">{p.id}</span>
                <h2 className="mt-1 text-lg font-bold text-[#4ADE80]">{p.title}</h2>
              </div>
              <code className="text-xs text-[#4ADE80]/60">{p.route}</code>
            </div>
            <div className="px-6 py-5">
              <p className="text-sm leading-relaxed text-[#4ADE80]/80">{p.summary}</p>
              <div className="mt-6 overflow-x-auto border border-[#4ADE80]/15">
                <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-[#4ADE80]/15 bg-[#0A0A0B] text-[11px] uppercase tracking-widest text-[#F59E0B]">
                      <th className="px-4 py-2.5 font-bold">Stage</th>
                      <th className="px-4 py-2.5 font-bold">Component</th>
                      <th className="px-4 py-2.5 font-bold">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {p.stages.map((s) => (
                      <tr key={s.stage} className="border-b border-[#4ADE80]/10 last:border-0">
                        <td className="px-4 py-3 text-[#4ADE80]/60">{s.stage}</td>
                        <td className="px-4 py-3 font-bold text-[#4ADE80]">{s.component}</td>
                        <td className="px-4 py-3 text-[#4ADE80]/75">{s.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <ul className="mt-5 space-y-1.5 text-xs text-[#4ADE80]/70">
                {p.metrics.map((m) => (
                  <li key={m} className="flex gap-2">
                    <span className="text-[#F59E0B]">$</span>
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}

        {/* GUARDRAILS */}
        <article className="border border-[#F59E0B]/40 bg-[#0F0F10] p-6">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
            {"// guardrails"}
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-[#4ADE80]/85">
            <li className="flex gap-2">
              <span className="text-[#F59E0B]">!&gt;</span>
              Every pipeline ends in a human review or alert. No agent writes to the CRM directly.
            </li>
            <li className="flex gap-2">
              <span className="text-[#F59E0B]">!&gt;</span>
              Failures are counted, not hidden — the metrics table on the landing page is a cached
              readout of real counters.
            </li>
            <li className="flex gap-2">
              <span className="text-[#F59E0B]">!&gt;</span>
              Secrets and credentials never live in workflow code; they’re injected at runtime.
            </li>
          </ul>
        </article>
      </section>

      <section className="border-t border-[#4ADE80]/15 bg-[#0F0F10] py-16 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm text-[#4ADE80]/70">
            Read the spec. Browse the stack. Then, if you want to ship:
          </p>
          <a
            href={SCOPE_MAILTO}
            className="mt-6 inline-flex items-center justify-center border-2 border-[#4ADE80] px-10 py-4 text-base font-bold uppercase tracking-[0.15em] text-[#4ADE80] transition-colors hover:bg-[#4ADE80] hover:text-[#0A0A0B]"
          >
            [ Send scope ]
          </a>
          <p className="mt-4 text-xs text-[#4ADE80]/50">reply by next business day</p>
        </div>
      </section>
    </>
  );
}
