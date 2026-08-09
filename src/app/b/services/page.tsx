import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — Property, Catering, Janitorial, Landscaping",
  description:
    "Prime and subcontract services: property services, catering and food service, janitorial, landscaping. Federal, state, and commercial.",
};

const RFQ_MAILTO = "mailto:info@newplains.dev?subject=RFQ";

const services = [
  {
    code: "561210",
    title: "Property Services",
    body: "Facility operations and site support contracts. We staff, supervise, and report — you get one accountable crew instead of a vendor list.",
    scope: ["Facility operations & maintenance support", "Site administration and logistics", "Prime or subcontract — federal, state, commercial"],
  },
  {
    code: "722310",
    title: "Catering & Food Service",
    body: "Dining hall and cafeteria contract operations. Menu planning, staffing, sanitation compliance, and inventory control under one contract.",
    scope: ["Cafeteria & dining hall operations", "Staffing and food-service management", "ServSafe-aligned sanitation practices"],
  },
  {
    code: "561720",
    title: "Janitorial",
    body: "Recurring custodial contracts sized to the facility — daily, weekly, and project-based cleaning with documented quality inspections.",
    scope: ["Office, industrial & institutional cleaning", "Recurring schedules with QC checklists", "Supplies and equipment included in scope"],
  },
  {
    code: "561730",
    title: "Landscaping",
    body: "Grounds maintenance and exterior site care. Turf, beds, and hardscape kept to the standard the contract specifies.",
    scope: ["Grounds maintenance & turf care", "Exterior site management", "Seasonal and recurring schedules"],
  },
  {
    code: "561790",
    title: "Other Services to Buildings",
    body: "Catch-all building-services scope beyond the core classifications — the odd jobs that keep a site running between contracts.",
    scope: ["Specialized building services", "Scoped per facility", "Bid as add-on or standalone"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 md:pt-24">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F5C518]">
          Services
        </p>
        <h1 className="[font-family:var(--font-anton)] mt-5 max-w-3xl text-5xl leading-[0.95] tracking-wide text-white md:text-7xl">
          PROPERTY SERVICES. CATERING. JANITORIAL. LANDSCAPING.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-[#8FA1B7]">
          We operate as subcontractor or prime contractor on property-services scope. You bring the
          solicitation; we bring the crew, the truck, and the paperwork.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((s) => (
            <article key={s.code} className="border border-white/10 bg-[#0A1420] p-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black uppercase tracking-wide text-white">
                  {s.title}
                </h2>
                <span className="bg-[#F5C518] px-2.5 py-1 text-xs font-black tracking-widest text-[#0E1B2C]">
                  {s.code}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#8FA1B7]">{s.body}</p>
              <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6">
                {s.scope.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-white/85">
                    <span className="mt-0.5 text-[#F5C518]">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
          <article className="flex flex-col justify-center border-2 border-dashed border-[#F5C518]/40 bg-[#0E1B2C] p-8">
            <h2 className="[font-family:var(--font-anton)] text-3xl tracking-wide text-white">
              DON’T SEE YOUR SCOPE?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#8FA1B7]">
              Bid-first, like a real GC. Send the solicitation or scope description and we reply
              within 48 hours with a fixed-scope bid — or a clear pass.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/b/rfq"
                className="inline-flex items-center justify-center bg-[#F5C518] px-6 py-3 text-xs font-black uppercase tracking-[0.15em] text-[#0E1B2C] transition-colors hover:bg-white"
              >
                Submit RFQ
              </Link>
              <a
                href={RFQ_MAILTO}
                className="inline-flex items-center justify-center border-2 border-[#8FA1B7]/60 px-6 py-3 text-xs font-black uppercase tracking-[0.15em] text-[#8FA1B7] transition-colors hover:border-[#F5C518] hover:text-[#F5C518]"
              >
                Email RFQ
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
