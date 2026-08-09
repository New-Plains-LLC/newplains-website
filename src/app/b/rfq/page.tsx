import type { Metadata } from "next";
import RfqForm from "./RfqForm";

export const metadata: Metadata = {
  title: "RFQ — New Plains LLC",
  description:
    "Send your RFQ. We reply within 48 hours with a fixed-scope bid. Property services, catering, janitorial, landscaping, AI implementation.",
};

export default function RfqPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 md:pt-24">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F5C518]">
          Request for Quote
        </p>
        <h1 className="[font-family:var(--font-anton)] mt-5 max-w-3xl text-5xl leading-[0.95] tracking-wide text-white md:text-7xl">
          SEND THE SCOPE. GET A BID IN 48 HOURS.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-[#8FA1B7]">
          No account, no portal, no sales gauntlet. Fill out the RFQ and it lands directly in the
          inbox — we reply within 48 hours with a fixed-scope bid or a clear pass.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="border border-white/10 bg-[#0A1420] p-8 md:p-12">
          <RfqForm />
        </div>
        <p className="mt-6 text-center text-xs font-bold uppercase tracking-[0.2em] text-[#8FA1B7]">
          Prefer plain email? Send it to info@newplains.dev with subject: RFQ
        </p>
      </section>
    </>
  );
}
