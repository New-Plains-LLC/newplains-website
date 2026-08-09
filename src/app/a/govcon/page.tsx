import type { Metadata } from "next";
import Image from "next/image";
import RfqForm from "./RfqForm";

export const metadata: Metadata = {
  title: "Government Contracting — New Plains LLC",
  description:
    "SAM.gov registered, UEI on file, CAGE assigned. Property services, catering, janitorial, and AI services for federal, state, and local agencies. Send an RFQ — info@newplains.dev",
  robots: { index: false },
};

const RFQ_MAILTO = "mailto:info@newplains.dev?subject=RFQ";

const img = (id: string) =>
  `https://images.unsplash.com/${id}?w=600&h=450&fit=crop&q=80&auto=format`;

const offerings = [
  {
    naics: "561210",
    title: "Property Services",
    body: "Facility maintenance, custodial oversight, landscaping, repair services for federal buildings and installations.",
    image: img("photo-1521791136064-7986c2920216"),
  },
  {
    naics: "722310 · 722320 · 722330",
    title: "Catering & Food Service",
    body: "Event catering, full-service kitchen operations, meal program delivery for government facilities and conferences.",
    image: img("photo-1687369595840-e96a912586f1"),
  },
  {
    naics: "561720 · 561740",
    title: "Janitorial",
    body: "Day and night janitorial services for federal offices, depots, and field sites. Bondable, insured, cleared staff.",
    image: img("photo-1581578731548-c64695cc6952"),
  },
  {
    naics: "561730",
    title: "Grounds & Landscaping",
    body: "Lawn care, irrigation, snow removal, and grounds maintenance for installations and federal parks.",
    image: img("photo-1689728222087-6984f72460c4"),
  },
  {
    naics: "541512",
    title: "AI Services for Government",
    body: "Workflow automation, document processing, AI agents, and Microsoft Office (Excel, Word, PowerPoint) generation for federal and state programs.",
    image: img("photo-1521737711867-e3b97375f902"),
  },
  {
    naics: "541715",
    title: "Training",
    body: "On-site or virtual AI literacy workshops for federal and state employees.",
    image: img("photo-1552664730-d307ca884978"),
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
          Built to deliver. Registered to bid.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-brand-charcoal/70">
          New Plains LLC is an Oklahoma small business. We hold the registrations needed to bid on federal, state, and local work across property services, food service, janitorial, grounds, and — as of this year — AI services and training for federal, state, and local agencies.
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

      {/* SERVICE LINE CARDS */}
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
                className="flex flex-col overflow-hidden rounded-2xl border border-brand-charcoal/10 bg-white shadow-sm transition-shadow hover:shadow-lg hover:shadow-brand-copper/10"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={o.image}
                    alt={o.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-xl font-semibold tracking-tight text-brand-charcoal">
                    {o.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-charcoal/70">
                    {o.body}
                  </p>
                  <span className="mt-4 inline-block self-start rounded-full bg-brand-cream px-3 py-1 font-mono text-[11px] font-semibold tracking-wide text-brand-charcoal/70">
                    NAICS {o.naics}
                  </span>
                </div>
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
