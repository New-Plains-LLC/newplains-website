import Section from "./Section";

const engagements = [
  {
    n: "01",
    name: "Document Automation",
    body: "Excel / Word / PowerPoint / PDF generated from raw data.",
    baseline: "Internal baseline: 30 hrs/wk producing weekly reports across 4 entities.",
    value: "~$39K/yr",
    note: "Client outcome: scoped per audit.",
  },
  {
    n: "02",
    name: "Spreadsheet Automation",
    body: "Reconciliation, modeling, roll-ups that re-run themselves.",
    baseline: "Internal baseline: 30 hrs/wk manual reconciliation across 4 chart-of-accounts.",
    value: "~$39K/yr",
    note: "Client outcome: scoped per audit.",
  },
  {
    n: "03",
    name: "RAG over Proprietary Corpus",
    body: "Your internal knowledge base — manuals, deal jackets, contracts — queryable in plain English.",
    baseline: "Internal baseline: 30 hrs/wk research/lookup across internal docs.",
    value: "~$39K/yr",
    note: "Client outcome: scoped per audit.",
  },
  {
    n: "04",
    name: "Voice & Call Agents",
    body: "Inbound calls transcribed, summarized, routed. Outbound follow-ups drafted.",
    baseline: "Internal baseline: 30 hrs/wk call-summary + follow-up drafting.",
    value: "~$39K/yr",
    note: "Client outcome: scoped per audit.",
  },
  {
    n: "05",
    name: "Multi-Source Data Integration",
    body: "One source of truth across CRM, accounting, inventory, comms.",
    baseline: "Internal baseline: 30 hrs/wk cross-system reconciliation + reporting.",
    value: "~$39K/yr",
    note: "Client outcome: scoped per audit.",
  },
  {
    n: "06",
    name: "Speed-to-Lead Systems",
    body: "Inbound leads engaged within 60 seconds, 24/7 — by SMS, email, or voice.",
    baseline: "Internal baseline: 20 hrs/wk on first-touch outreach + qualification.",
    value: "~$26K/yr",
    note: "MIT / InsideSales.com: <5-min response = 21× more likely to qualify.",
  },
  {
    n: "07",
    name: "Lead Generation",
    body: "Outbound prospecting — list build, enrichment, sequence drafting, reply handling.",
    baseline: "Internal baseline: 20 hrs/wk pipeline-building + nurture.",
    value: "~$26K/yr",
    note: "Client outcome: scoped per audit.",
  },
  {
    n: "08",
    name: "Automated Competitor Research",
    body: "Weekly briefs on pricing, product, positioning — pulled from public sources.",
    baseline: "Internal baseline: 5 hrs/wk market-intel gathering.",
    value: "~$6.5K/yr",
    note: "Client outcome: scoped per audit.",
  },
  {
    n: "09",
    name: "Automated Meeting Agendas",
    body: "Agendas drafted from prior meeting notes, CRM context, and stated outcomes.",
    baseline: "Internal baseline: 30 hrs/wk agenda prep + recap drafting.",
    value: "~$39K/yr",
    note: "Client outcome: scoped per audit.",
  },
  {
    n: "10",
    name: "Automated Survey Reports",
    body: "Survey responses cleaned, themed, and turned into executive-ready reports.",
    baseline: "Internal baseline: 5 hrs/wk survey distribution + analysis.",
    value: "~$6.5K/yr",
    note: "Client outcome: scoped per audit.",
  },
  {
    n: "11",
    name: "Content Automations",
    body: "Video scripts + shorts + SEO posts drafted, scored, scheduled.",
    baseline: "Internal baseline: 20 hrs/wk video + SEO content production.",
    value: "~$26K/yr",
    note: "Client outcome: scoped per audit.",
  },
  {
    n: "12",
    name: "Automated Inbox Triage",
    body: "Inbox classified, prioritized, drafted replies queued — every morning.",
    baseline: "Internal baseline: 30 hrs/wk email triage + reply drafting.",
    value: "~$39K/yr",
    note: "Client outcome: scoped per audit.",
  },
  {
    n: "13",
    name: "Email Automation",
    body: "Drip sequences, lifecycle mailings, transactional sends — built + maintained.",
    baseline: "Internal baseline: 20 hrs/wk email sequence drafting + maintenance.",
    value: "~$26K/yr",
    note: "Client outcome: scoped per audit.",
  },
];

export default function CaseStudies() {
  return (
    <Section
      id="engagements"
      numeral="IV."
      label="Thirteen Engagements"
      variant="parchment"
    >
      <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16 items-end">
        <div className="col-span-12 lg:col-span-8">
          <h2 className="[font-family:var(--font-fraunces)] text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.01em] text-[#1A1814]">
            Twelve engagements.
            <br />
            <span className="italic text-[#B08A3E] text-3xl md:text-4xl lg:text-5xl">
              (and counting.)
            </span>
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <p className="text-base text-[#1A1814]/70 leading-relaxed">
            Built this for our own operations first. Then{" "}
            <span className="italic text-[#B08A3E]">
              productized it for clients.
            </span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(26,24,20,0.18)]">
        {engagements.map((e) => (
          <article
            key={e.n}
            className="bg-[#F6EFE1] p-8 md:p-10 flex flex-col"
          >
            <div className="flex items-start justify-between mb-10">
              <span className="[font-family:var(--font-geist-mono)] text-sm text-[#B08A3E] tabular tracking-widest">
                {e.n}
              </span>
              <span className="eyebrow text-[#5B6470] text-right">
                Internal baseline
              </span>
            </div>
            <h3 className="[font-family:var(--font-fraunces)] text-3xl md:text-[2rem] text-[#1A1814] leading-tight mb-5">
              {e.name}
            </h3>
            <p className="text-[#1A1814]/70 leading-relaxed mb-6">{e.body}</p>
            <p className="[font-family:var(--font-geist-mono)] text-xs text-[#5B6470] leading-relaxed mb-8">
              {e.baseline}
            </p>
            <div className="rule pt-5 mt-auto">
              <div className="flex items-baseline justify-between">
                <span className="[font-family:var(--font-fraunces)] text-3xl text-[#1A1814] tabular leading-none">
                  {e.value}
                </span>
                <span className="[font-family:var(--font-geist-mono)] text-xs text-[#5B6470]">
                  @ $25/hr
                </span>
              </div>
              <div className="[font-family:var(--font-geist-mono)] text-xs uppercase tracking-widest text-[#5B6470] mt-2">
                {e.note}
              </div>
            </div>
          </article>
        ))}

        {/* Σ cell */}
        <div className="bg-[#1A1814] p-8 md:p-10 flex flex-col justify-center">
          <div className="eyebrow text-[#C9A26B] mb-4">
            Σ · 13-engagement baseline
          </div>
          <div className="[font-family:var(--font-fraunces)] text-4xl md:text-5xl text-[#F6EFE1] leading-tight mb-3">
            280 hrs/wk returned
          </div>
          <div className="[font-family:var(--font-fraunces)] italic text-2xl text-[#C9A26B] mb-5">
            ~$364K/yr
          </div>
          <p className="text-[#F6EFE1]/75 leading-relaxed text-base">
            13 engagements × weighted hrs/wk × 52 wk × $25/hr. Pick the four
            that matter most at audit; the rest activate on retainer.
          </p>
        </div>
      </div>
    </Section>
  );
}