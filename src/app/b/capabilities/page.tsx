import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capabilities Statement — New Plains LLC",
  description:
    "Capabilities statement and credentials: New Plains LLC, Oklahoma, HUBZone-eligible, SAM.gov active. NAICS 561210, 722310, 561720, 561730, 561790, 541512, 541511.",
};

const CAPS_MAILTO = "mailto:dsskaggs@gmail.com?subject=Capabilities%20Statement";
const RFQ_MAILTO = "mailto:dsskaggs@gmail.com?subject=RFQ";

const naics = [
  { code: "561210", title: "Facilities Support Services" },
  { code: "722310", title: "Food Service Contractors" },
  { code: "561720", title: "Janitorial Services" },
  { code: "561730", title: "Landscaping Services" },
  { code: "561790", title: "Other Services to Buildings" },
  { code: "541512", title: "Computer Systems Design Services" },
  { code: "541511", title: "Custom Computer Programming" },
];

export default function CapabilitiesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 md:pt-24">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F5C518]">
          Capabilities Statement
        </p>
        <h1 className="[font-family:var(--font-anton)] mt-5 max-w-3xl text-5xl leading-[0.95] tracking-wide text-white md:text-7xl">
          THE PAPERWORK, ON THE TABLE.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-[#8FA1B7]">
          Every acquisition team asks the same six questions. Here are the answers, up front — and
          a capabilities statement on request.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href={CAPS_MAILTO}
            className="inline-flex items-center justify-center bg-[#F5C518] px-8 py-4 text-sm font-black uppercase tracking-[0.15em] text-[#0E1B2C] transition-colors hover:bg-white"
          >
            Request Capabilities Statement
          </a>
          <a
            href={RFQ_MAILTO}
            className="inline-flex items-center justify-center border-2 border-[#8FA1B7]/60 px-8 py-4 text-sm font-black uppercase tracking-[0.15em] text-[#8FA1B7] transition-colors hover:border-[#F5C518] hover:text-[#F5C518]"
          >
            Send RFQ
          </a>
        </div>
      </section>

      {/* ENTITY */}
      <section className="border-y border-white/10 bg-[#0A1420] py-14">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#8FA1B7]">
            Entity
          </p>
          <div className="mt-4 grid gap-8 md:grid-cols-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8FA1B7]">Name</p>
              <p className="mt-1 text-lg font-black text-white">New Plains LLC</p>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8FA1B7]">Location</p>
              <p className="mt-1 text-lg font-black text-white">Oklahoma</p>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8FA1B7]">Status</p>
              <p className="mt-1 text-lg font-black text-[#F5C518]">SAM.gov Active</p>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8FA1B7]">Set-Aside</p>
              <p className="mt-1 text-lg font-black text-white">HUBZone-Eligible</p>
            </div>
          </div>
        </div>
      </section>

      {/* NAICS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F5C518]">
            NAICS Codes · Primary
          </p>
          <h2 className="[font-family:var(--font-anton)] mt-4 text-4xl tracking-wide text-white md:text-5xl">
            SEVEN CODES, ONE ENTITY.
          </h2>
          <div className="mt-10 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {naics.map((n) => (
              <div key={n.code} className="flex items-center justify-between gap-4 bg-[#0E1B2C] p-6">
                <span className="bg-[#F5C518] px-2.5 py-1 text-sm font-black tracking-widest text-[#0E1B2C]">
                  {n.code}
                </span>
                <span className="text-right text-sm font-bold uppercase tracking-wide text-white">
                  {n.title}
                </span>
              </div>
            ))}
            <div className="flex flex-col justify-center bg-[#132338] p-6">
              <p className="text-sm font-bold text-white">
                Contract vehicles: GSA Schedule (application in progress) · OASIS+ ready
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PERFORMANCE + PARTNERSHIPS */}
      <section className="border-y border-white/10 bg-[#0A1420] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#8FA1B7]">
                Past Performance
              </p>
              <h2 className="[font-family:var(--font-anton)] mt-3 text-3xl tracking-wide text-white md:text-4xl">
                PRIVATE, BUT REAL.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-[#8FA1B7]">
                Multi-state property services engagements delivered through our partnership network
                (Brilliant Harvest, etc.). Engagement summaries and references are available under
                NDA to primes and contracting officers evaluating a bid — confidential figures stay
                confidential.
              </p>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#8FA1B7]">
                Subcontractor Partnerships
              </p>
              <h2 className="[font-family:var(--font-anton)] mt-3 text-3xl tracking-wide text-white md:text-4xl">
                WE TEAM WELL.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-[#8FA1B7]">
                Existing relationships with 8(a), SDVOSB, and WOSB primes — ready to plug into a
                teaming agreement on your next solicitation, whether we prime or sub.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="[font-family:var(--font-anton)] text-4xl tracking-wide text-white md:text-6xl">
            NEED THE FULL STATEMENT?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-[#8FA1B7]">
            We’ll send the capabilities statement PDF and, if you’re bidding, respond to your RFQ
            with a fixed-scope reply within 48 hours.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={CAPS_MAILTO}
              className="inline-flex items-center justify-center bg-[#F5C518] px-10 py-5 text-base font-black uppercase tracking-[0.15em] text-[#0E1B2C] transition-colors hover:bg-white"
            >
              Request Statement
            </a>
            <a
              href={RFQ_MAILTO}
              className="inline-flex items-center justify-center border-2 border-[#8FA1B7]/60 px-10 py-5 text-base font-black uppercase tracking-[0.15em] text-[#8FA1B7] transition-colors hover:border-[#F5C518] hover:text-[#F5C518]"
            >
              Send RFQ
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
