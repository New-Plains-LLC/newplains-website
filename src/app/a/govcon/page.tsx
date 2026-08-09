import type { Metadata } from "next";
import RfqForm from "./RfqForm";

export const metadata: Metadata = {
  title: "Government Contracting — New Plains LLC",
  description:
    "SAM.gov registered, UEI on file, CAGE assigned. Property services, catering, janitorial, and AI services for federal, state, and local agencies. Send an RFQ — info@newplains.dev",
  robots: { index: false },
};

const RFQ_MAILTO = "mailto:info@newplains.dev?subject=RFQ";

const offerings = [
  {
    naics: "561210",
    title: "Facilities Support",
    body: "Facility operations and administrative support for government and commercial sites.",
  },
  {
    naics: "722310",
    title: "Catering / Food Service",
    body: "Cafeteria and dining contract operations, staffing, and food-service management.",
  },
  {
    naics: "561720",
    title: "Janitorial",
    body: "Recurring custodial contracts — offices, industrial, and institutional facilities.",
  },
  {
    naics: "561730",
    title: "Landscaping",
    body: "Grounds maintenance, turf care, and exterior site management.",
  },
  {
    naics: "541512",
    title: "AI Services",
    body: "Automation pipelines, AI agents, and document processing for agency back offices.",
  },
  {
    naics: "541715",
    title: "AI Training",
    body: "Hands-on workshops that get agency teams building automations, not just watching demos.",
  },
];

const credentials = [
  {
    label: "SAM.gov",
    value: "Registered",
  },
  {
    label: "UEI / CAGE",
    value: "On file · Assigned",
  },
  {
    label: "Entity Status",
    value: "Active",
  },
];

export default function GovConPage() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-24 md:pt-32">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#1B2D45]">
          Government Contracting
        </p>
        <h1 className="font-heading max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-brand-charcoal sm:text-6xl">
          Government contracting, with receipts.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-brand-charcoal/70">
          Property services, catering, janitorial — and now AI services for federal, state, and
          local agencies. We keep the paperwork current so your acquisition team doesn&apos;t
          have to chase it.
        </p>
        <a
          href={RFQ_MAILTO}
          className="mt-10 inline-flex items-center justify-center rounded-full bg-[#1B2D45] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#1B2D45]/25 transition-colors hover:bg-[#243C5C]"
        >
          Send RFQ
        </a>
      </section>

      {/* CREDENTIAL STRIP */}
      <section className="border-y border-brand-copper/15 bg-white/60">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 sm:grid-cols-3">
          {credentials.map((c) => (
            <div key={c.label}>
              <p className="text-[11px] font-bold uppercase tracking-widest text-brand-charcoal/50">
                {c.label}
              </p>
              <p className="mt-2 text-lg font-semibold text-brand-charcoal">{c.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-copper">
            What We Bid
          </p>
          <h2 className="font-heading mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-brand-charcoal md:text-4xl">
            Six service lines, one accountable entity.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((o) => (
              <div
                key={o.naics}
                className="rounded-2xl border border-brand-charcoal/10 bg-white/60 p-7 transition-shadow hover:shadow-lg hover:shadow-brand-copper/10"
              >
                <span className="font-heading text-2xl font-semibold tracking-tight text-brand-copper">
                  {o.naics}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-brand-charcoal">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/70">{o.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#1B2D45] p-8 sm:flex-row sm:items-center">
            <p className="font-heading max-w-xl text-xl font-medium leading-snug text-white">
              “Bid us. We&apos;ll respond with a fixed-scope RFQ reply within 48 hrs.”
            </p>
            <a
              href={RFQ_MAILTO}
              className="shrink-0 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#1B2D45]"
            >
              Send RFQ
            </a>
          </div>
        </div>
      </section>

      {/* HOW WE BID */}
      <section className="border-y border-brand-copper/15 bg-white/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-copper">
            The Bid Process
          </p>
          <h2 className="font-heading mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-brand-charcoal md:text-4xl">
            From RFQ to fixed-scope reply in 48 hours.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-brand-charcoal/10 bg-brand-cream p-7">
              <span className="font-heading text-sm font-semibold tracking-wide text-brand-copper">
                01
              </span>
              <h3 className="mt-3 text-lg font-semibold text-brand-charcoal">You send the RFQ</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/70">
                Use the form below, or email it straight to info@newplains.dev with subject:
                RFQ. Include scope, location, and any NAICS you&apos;ve assigned.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-charcoal/10 bg-brand-cream p-7">
              <span className="font-heading text-sm font-semibold tracking-wide text-brand-copper">
                02
              </span>
              <h3 className="mt-3 text-lg font-semibold text-brand-charcoal">We reply fixed-scope</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/70">
                Within 48 hours you get a fixed-scope reply: what we&apos;d deliver, at what
                price, on what schedule. No vague &ldquo;let&apos;s talk&rdquo; responses.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-charcoal/10 bg-brand-cream p-7">
              <span className="font-heading text-sm font-semibold tracking-wide text-brand-copper">
                03
              </span>
              <h3 className="mt-3 text-lg font-semibold text-brand-charcoal">You decide</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/70">
                Award, negotiate, or walk away — the reply is yours either way. We only win the
                work we scope honestly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RFQ FORM */}
      <section id="rfq" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-copper">
            Submit an RFQ
          </p>
          <h2 className="font-heading mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-brand-charcoal md:text-4xl">
            Tell us the scope. We&apos;ll price it.
          </h2>
          <div className="mt-12 rounded-3xl border border-brand-charcoal/10 bg-brand-cream p-8 shadow-sm md:p-12">
            <RfqForm />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pb-24 text-center md:pb-28">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-brand-charcoal md:text-4xl">
            Prefer plain email?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-brand-charcoal/70">
            Send the RFQ straight to info@newplains.dev with subject: RFQ. We reply within one
            business day.
          </p>
          <a
            href={RFQ_MAILTO}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#1B2D45] px-10 py-5 text-lg font-semibold text-white shadow-xl shadow-[#1B2D45]/25 transition-colors hover:bg-[#243C5C]"
          >
            Send RFQ
          </a>
        </div>
      </section>
    </>
  );
}
