import Link from "next/link";

const RFQ_MAILTO = "mailto:dsskaggs@gmail.com?subject=RFQ";

const capabilities = [
  {
    title: "Property Services",
    body: "Facility operations, site support, and building-services contracts — prime or sub.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-8 w-8">
        <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Catering & Food Service",
    body: "Dining hall and cafeteria contract operations, staffing, and food-service management.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-8 w-8">
        <path d="M7 2v7a3 3 0 0 0 6 0V2M10 2v20M17 2c0 5-3 6-3 10M17 12v10" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Janitorial",
    body: "Recurring custodial contracts for offices, industrial, and institutional facilities.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-8 w-8">
        <path d="M14 2 6 14l4 2L8 22M14 2l4 8-6 6 4 2-2 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Landscaping",
    body: "Grounds maintenance, turf care, and exterior site management for government and commercial.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-8 w-8">
        <path d="M12 21v-9M12 12c0-4 2-7 7-9 0 5-2 9-7 9ZM12 12c0-4-2-7-7-9 0 5 2 9 7 9Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "AI Implementation",
    body: "Scoping, integration, and training — AI systems that ship and stick in production.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-8 w-8">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M8 9h8M8 13h5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Government Contracting",
    body: "SAM.gov active, NAICS on file, set-aside posture maintained. We bring the paperwork.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-8 w-8">
        <path d="M4 21V9l8-6 8 6v12M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const projectFiles = [
  {
    file: "PF-2026-001",
    title: "Receipt Automation Rollout",
    quarter: "Q1 2026",
    rows: [
      { label: "Scope", value: "2 sites, 3 staff, full pipeline deployment." },
      { label: "Duration", value: "14 days from kickoff to production." },
      { label: "Value", value: "$22K/yr run-rate savings." },
      { label: "Reference", value: "Available on request (NDA permitting)." },
    ],
  },
  {
    file: "PF-2026-002",
    title: "Lead Triage + CRM Wiring",
    quarter: "Q2 2026",
    rows: [
      { label: "Scope", value: "Multi-channel email → CRM auto-labeling." },
      { label: "Duration", value: "21 days." },
      { label: "Value", value: "18 hrs/wk recovered." },
      { label: "Reference", value: "Available on request (NDA permitting)." },
    ],
  },
  {
    file: "PF-2026-003",
    title: "Deal Flow Pipeline",
    quarter: "Q3 2026",
    rows: [
      { label: "Scope", value: "Inbound scoring → SMS/Telegram alerts → human-in-the-loop." },
      { label: "Duration", value: "30 days." },
      { label: "Value", value: "First-responder capture rate tripled." },
      { label: "Reference", value: "Available on request (NDA permitting)." },
    ],
  },
];

const naicsCodes = ["561210", "722310", "561720", "561730", "561790", "541512", "541511"];

export default function ConceptBPage() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F5C518]">
          General Contractor · AI &amp; Property Services
        </p>
        <h1 className="[font-family:var(--font-anton)] mt-6 text-6xl leading-[0.95] tracking-wide text-white sm:text-7xl md:text-8xl lg:text-9xl">
          WE DELIVER.
        </h1>
        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xl font-semibold leading-snug text-white md:text-2xl">
              Property services. Catering. Janitorial. Landscaping.
            </p>
            <p className="mt-3 text-xl font-semibold leading-snug text-[#F5C518] md:text-2xl">
              AI systems that ship and stick.
            </p>
            <p className="mt-6 max-w-md text-sm font-medium uppercase leading-relaxed tracking-[0.12em] text-[#8FA1B7]">
              Federal, state, and commercial. Every base. Every state. Every contract size.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={RFQ_MAILTO}
                className="inline-flex items-center justify-center bg-[#F5C518] px-8 py-4 text-sm font-black uppercase tracking-[0.15em] text-[#0E1B2C] transition-colors hover:bg-white"
              >
                Send RFQ
              </a>
              <a
                href="#project-files"
                className="inline-flex items-center justify-center border-2 border-[#8FA1B7]/60 px-8 py-4 text-sm font-black uppercase tracking-[0.15em] text-[#8FA1B7] transition-colors hover:border-[#F5C518] hover:text-[#F5C518]"
              >
                View project files
              </a>
            </div>
          </div>
          {/* Photo placeholder */}
          <div className="relative overflow-hidden border border-white/10 bg-[linear-gradient(135deg,#1B2C44_0%,#0E1B2C_45%,#243A57_100%)] shadow-2xl">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(245,197,24,0.06)_0,rgba(245,197,24,0.06)_2px,transparent_2px,transparent_14px)]" />
            <div className="absolute left-0 top-0 h-1 w-full bg-[#F5C518]/70" />
            <div className="relative flex aspect-[4/3] flex-col justify-end p-6">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F5C518]">
                Site Photo
              </p>
              <p className="mt-1 text-sm font-bold uppercase tracking-[0.15em] text-white/90">
                Field Operations — Oklahoma
              </p>
              <p className="mt-1 text-xs text-[#8FA1B7]">
                Grain elevator · dining hall · server room — we work where the work is.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS STRIP */}
      <section className="border-y border-white/10 bg-[#0A1420]">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#8FA1B7]">
            <span className="text-[#F5C518]">SAM.gov Active</span>
            <span>HUBZone-Eligible</span>
            <span>OASIS+ Ready</span>
            <span>GSA Schedule — In Progress</span>
            <span>8(a) · SDVOSB · WOSB Partnerships</span>
          </div>
        </div>
      </section>

      {/* CAPABILITIES GRID */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F5C518]">
            Capabilities
          </p>
          <h2 className="[font-family:var(--font-anton)] mt-4 text-4xl tracking-wide text-white md:text-6xl">
            ONE CREW. EVERY SCOPE.
          </h2>
          <div className="mt-14 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="group bg-[#0E1B2C] p-8 transition-colors hover:bg-[#132338]"
              >
                <div className="text-[#8FA1B7] transition-colors group-hover:text-[#F5C518]">
                  {cap.icon}
                </div>
                <h3 className="mt-5 text-lg font-black uppercase tracking-wide text-white">
                  {cap.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#8FA1B7]">{cap.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT FILES */}
      <section id="project-files" className="border-y border-white/10 bg-[#0A1420] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F5C518]">
            Project Files
          </p>
          <h2 className="[font-family:var(--font-anton)] mt-4 text-4xl tracking-wide text-white md:text-6xl">
            AI JOBS WE CLOSED OUT.
          </h2>
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {projectFiles.map((p) => (
              <article
                key={p.file}
                className="flex flex-col border border-white/10 bg-[#0E1B2C] transition-colors hover:border-[#F5C518]/60"
              >
                <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#F5C518]">
                    {p.file}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8FA1B7]">
                    {p.quarter}
                  </span>
                </div>
                <div className="flex flex-1 flex-col px-6 py-6">
                  <h3 className="text-xl font-black uppercase tracking-wide text-white">
                    {p.title}
                  </h3>
                  <dl className="mt-6 flex flex-1 flex-col gap-4">
                    {p.rows.map((row) => (
                      <div key={row.label} className="border-l-2 border-[#F5C518]/50 pl-3">
                        <dt className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8FA1B7]">
                          {row.label}
                        </dt>
                        <dd className="mt-1 text-sm text-white/90">{row.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NAICS CREDENTIALS STRIP */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F5C518]">
            NAICS · On File
          </p>
          <h2 className="[font-family:var(--font-anton)] mt-4 text-4xl tracking-wide text-white md:text-5xl">
            PAPERWORK IS PART OF THE JOB.
          </h2>
          <div className="mt-10 border-2 border-[#F5C518]/50 bg-[#0A1420] p-8 md:p-10">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {naicsCodes.map((code) => (
                <span
                  key={code}
                  className="bg-[#F5C518] px-3 py-1.5 text-sm font-black tracking-widest text-[#0E1B2C]"
                >
                  {code}
                </span>
              ))}
            </div>
            <div className="mt-8 grid gap-6 border-t border-white/10 pt-8 text-sm md:grid-cols-3">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8FA1B7]">
                  Entity
                </p>
                <p className="mt-2 font-bold text-white">
                  New Plains LLC — Oklahoma, HUBZone-eligible, SAM.gov active
                </p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8FA1B7]">
                  Contract Vehicles
                </p>
                <p className="mt-2 font-bold text-white">
                  GSA Schedule application in progress · OASIS+ ready
                </p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8FA1B7]">
                  Subcontractor Partners
                </p>
                <p className="mt-2 font-bold text-white">
                  Existing relationships with 8(a), SDVOSB, and WOSB primes
                </p>
              </div>
            </div>
            <p className="mt-8 border-t border-white/10 pt-6 text-xs leading-relaxed text-[#8FA1B7]">
              Past performance (private, NDA): multi-state property services engagements via
              partnership network (Brilliant Harvest, etc.). Capabilities statement available on
              request — see the Capabilities page.
            </p>
          </div>
          <div className="mt-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <p className="[font-family:var(--font-anton)] max-w-xl text-2xl tracking-wide text-white">
              SEND US YOUR RFQ. WE REPLY WITHIN 48 HOURS WITH A FIXED-SCOPE BID.
            </p>
            <Link
              href="/b/rfq"
              className="shrink-0 border-2 border-[#F5C518] px-6 py-3 text-xs font-black uppercase tracking-[0.2em] text-[#F5C518] transition-colors hover:bg-[#F5C518] hover:text-[#0E1B2C]"
            >
              Submit RFQ
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-white/10 bg-[#0A1420] py-24 text-center md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="[font-family:var(--font-anton)] text-5xl tracking-wide text-white md:text-7xl">
            BRING THE SCOPE.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-[#8FA1B7]">
            We bring the crew, the truck, and the paperwork. Bid lands in your inbox within 48
            hours.
          </p>
          <a
            href={RFQ_MAILTO}
            className="mt-10 inline-flex items-center justify-center bg-[#F5C518] px-12 py-5 text-base font-black uppercase tracking-[0.15em] text-[#0E1B2C] shadow-[0_0_40px_rgba(245,197,24,0.25)] transition-colors hover:bg-white"
          >
            Send RFQ
          </a>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#8FA1B7]">
            dsskaggs@gmail.com · subject: RFQ
          </p>
        </div>
      </section>
    </>
  );
}
