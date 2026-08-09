import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GovCon Credibility — New Plains LLC",
  description:
    "SAM.gov registered, UEI on file, CAGE assigned. NAICS 561210, 722310, 561720, 561730, 561790.",
};

const RFQ_MAILTO = "mailto:dsskaggs@gmail.com?subject=RFQ";

const naics = [
  { code: "561210", title: "Facilities Support Services", body: "Facility operations and administrative support for government and commercial sites." },
  { code: "722310", title: "Food Service Contractors", body: "Cafeteria and dining contract operations, staffing and food-service management." },
  { code: "561720", title: "Janitorial Services", body: "Recurring custodial contracts — offices, industrial, and institutional facilities." },
  { code: "561730", title: "Landscaping Services", body: "Grounds maintenance, turf care, and exterior site management." },
  { code: "561790", title: "Other Services to Buildings", body: "Additional building-services scope beyond the core classifications." },
];

export default function GovConPage() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-24 md:pt-32">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-brand-copper">
          Government Contracting
        </p>
        <h1 className="font-heading max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-brand-charcoal sm:text-5xl md:text-6xl">
          Government contracting, with receipts.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-brand-charcoal/70">
          We keep the paperwork current so your acquisition team doesn’t have to chase it. Entity
          status, NAICS coverage, and set-aside posture — verified, on file, and maintained.
        </p>
      </section>

      {/* SAM STRIP */}
      <section className="border-y border-brand-copper/15 bg-white/60">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 sm:grid-cols-3">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-brand-charcoal/50">SAM.gov</p>
            <p className="mt-2 text-lg font-semibold text-brand-charcoal">Registered</p>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-brand-charcoal/50">UEI / CAGE</p>
            <p className="mt-2 text-lg font-semibold text-brand-charcoal">On file · Assigned</p>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-brand-charcoal/50">Entity Status</p>
            <p className="mt-2 text-lg font-semibold text-brand-green">Active</p>
          </div>
        </div>
      </section>

      {/* NAICS CARD GRID */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-copper">
            NAICS Coverage
          </p>
          <h2 className="font-heading mt-4 text-3xl font-semibold tracking-tight text-brand-charcoal md:text-4xl">
            Five classifications, one accountable entity.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {naics.map((n) => (
              <div
                key={n.code}
                className="rounded-2xl border border-brand-charcoal/10 bg-white/60 p-7 transition-shadow hover:shadow-lg hover:shadow-brand-copper/10"
              >
                <span className="font-heading text-2xl font-semibold tracking-tight text-brand-copper">
                  {n.code}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-brand-charcoal">{n.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/70">{n.body}</p>
              </div>
            ))}
            <div className="flex flex-col justify-center rounded-2xl bg-brand-green/15 p-7">
              <p className="text-sm font-semibold text-brand-charcoal">
                HUBZone-eligible (verify) · 8(a)-eligibility under review
              </p>
              <p className="mt-2 text-sm text-brand-charcoal/70">
                Set-aside posture is tracked on every bid we respond to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PAST PERFORMANCE */}
      <section className="bg-white/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-10 rounded-3xl border border-brand-copper/25 bg-brand-cream p-8 md:grid-cols-2 md:p-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-copper">
                Past Performance
              </p>
              <h2 className="font-heading mt-4 text-2xl font-semibold tracking-tight text-brand-charcoal md:text-3xl">
                Built on supply-chain operations at CoBank and AGCO.
              </h2>
            </div>
            <div>
              <p className="text-brand-charcoal/75">
                Our delivery team cut its teeth on enterprise supply-chain and operations work —
                confidential figures stay confidential. References and engagement summaries are
                available under NDA to prime contractors and COs evaluating a bid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-brand-charcoal md:text-4xl">
            Bid us.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-brand-charcoal/70">
            We’ll respond with a fixed-scope RFQ reply within 48 hrs.
          </p>
          <a
            href={RFQ_MAILTO}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-copper px-10 py-5 text-lg font-semibold text-brand-cream shadow-xl shadow-brand-copper/25 transition-colors hover:bg-brand-copper-light"
          >
            Send RFQ
          </a>
        </div>
      </section>
    </>
  );
}
