import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "govcon — newplains.dev",
  description:
    "Capability matrix: NAICS codes, status, and contract vehicles. Table-driven, no narrative.",
};

const SCOPE_MAILTO = "mailto:info@newplains.dev?subject=Scope";

const naicsRows = [
  { code: "561210", description: "Facilities Support Services", status: "Active", vehicle: "SAM.gov, OASIS+" },
  { code: "722310", description: "Food Service Contractors", status: "Active", vehicle: "SAM.gov" },
  { code: "561720", description: "Janitorial Services", status: "Active", vehicle: "SAM.gov" },
  { code: "561730", description: "Landscaping Services", status: "Active", vehicle: "SAM.gov" },
  { code: "541512", description: "Custom Computer Programming", status: "Active", vehicle: "SAM.gov" },
  { code: "541511", description: "Custom Computer Programming (legacy)", status: "Inactive", vehicle: "—" },
];

const entityRows = [
  { key: "Entity", value: "New Plains LLC — Oklahoma" },
  { key: "SAM.gov", value: "Registered" },
  { key: "UEI", value: "On file" },
    { key: "CAGE", value: "Assigned" },
    { key: "Bonding capacity", value: "TBD" },
    { key: "Subcontractors", value: "SBA-certified small business partners" },
  ];

  export default function GovConPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pb-14 pt-14 md:pt-20">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#F59E0B]">{"// govcon · capability matrix"}</p>
        <h1 className="mt-4 text-2xl font-bold leading-snug text-[#4ADE80] md:text-4xl">
          Entity status and NAICS coverage, table-driven.
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#4ADE80]/70">
          No narrative, no brochure copy. If it’s not in the table, we don’t claim it. If a field
          says TBD, ask — it’s tracked and updated as it changes.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
          {"// NAICS · capability matrix"}
        </h2>
        <div className="mt-6 overflow-x-auto border border-[#4ADE80]/25">
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
                  <td className="px-5 py-3.5 font-bold text-[#4ADE80]">{row.code}</td>
                  <td className="px-5 py-3.5 text-[#4ADE80]/85">{row.description}</td>
                  <td className="px-5 py-3.5">
                    <span
                      className={
                        row.status === "Active"
                          ? "font-bold text-[#4ADE80]"
                          : "font-bold text-[#F59E0B]"
                      }
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-[#4ADE80]/70">{row.vehicle}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-12 text-sm font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
          {"// entity"}
        </h2>
        <div className="mt-6 overflow-x-auto border border-[#4ADE80]/25">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <tbody>
              {entityRows.map((row) => (
                <tr key={row.key} className="border-b border-[#4ADE80]/10 last:border-0">
                  <td className="w-1/2 bg-[#0F0F10] px-5 py-3.5 text-[11px] uppercase tracking-widest text-[#F59E0B]">
                    {row.key}
                  </td>
                  <td className="px-5 py-3.5 text-[#4ADE80]/85">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-[#4ADE80]/50">
          Past performance summaries and engagement references are available under NDA to prime
          contractors and contracting officers. Confidential figures are never published.
        </p>
      </section>

      <section className="border-t border-[#4ADE80]/15 bg-[#0F0F10] py-16 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm text-[#4ADE80]/70">
            Need a specific vehicle, code, or bonding number on file? Send the requirement.
          </p>
          <a
            href={SCOPE_MAILTO}
            className="mt-6 inline-flex items-center justify-center border-2 border-[#4ADE80] px-10 py-4 text-base font-bold uppercase tracking-[0.15em] text-[#4ADE80] transition-colors hover:bg-[#4ADE80] hover:text-[#0A0A0B]"
          >
            [ Send scope ]
          </a>
        </div>
      </section>
    </>
  );
}
