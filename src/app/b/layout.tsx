import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Anton } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

export const metadata: Metadata = {
  title: "New Plains LLC — We Deliver",
  description:
    "General contractor for AI and government property services. Property services. Catering. Janitorial. Landscaping. AI systems that ship and stick.",
  robots: { index: false },
};

export default function ConceptBLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`${anton.variable} min-h-screen bg-[#0E1B2C] text-white antialiased`}
    >
      {/* Hazard top strip */}
      <div className="h-1.5 bg-[repeating-linear-gradient(45deg,#F5C518_0,#F5C518_16px,#0E1B2C_16px,#0E1B2C_32px)]" />
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5">
          <Link href="/b" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="New Plains LLC"
              width={60}
              height={40}
              priority
              className="h-10 w-auto shrink-0"
            />
            <span className="flex flex-col leading-none">
              <span className="[font-family:var(--font-anton)] text-2xl tracking-wide text-white">
                NEW PLAINS
              </span>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8FA1B7]">
                General Contractor · AI &amp; Property Services
              </span>
            </span>
          </Link>
          <nav className="hidden items-center gap-7 text-xs font-bold uppercase tracking-[0.15em] lg:flex">
            <Link href="/b" className="text-[#8FA1B7] transition-colors hover:text-[#F5C518]">
              Home
            </Link>
            <Link href="/b/services" className="text-[#8FA1B7] transition-colors hover:text-[#F5C518]">
              Services
            </Link>
            <Link href="/b/ai" className="text-[#8FA1B7] transition-colors hover:text-[#F5C518]">
              AI
            </Link>
            <Link href="/b/capabilities" className="text-[#8FA1B7] transition-colors hover:text-[#F5C518]">
              Capabilities
            </Link>
            <Link href="/compare" className="text-[#F5C518] transition-colors hover:text-white">
              Concept Index
            </Link>
          </nav>
          <Link
            href="mailto:info@newplains.dev?subject=RFQ"
            className="bg-[#F5C518] px-5 py-2.5 text-xs font-black uppercase tracking-[0.15em] text-[#0E1B2C] transition-colors hover:bg-white"
          >
            Send RFQ
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t-2 border-[#F5C518]/40 bg-[#0A1420]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-[11px] font-bold uppercase tracking-[0.15em] text-[#8FA1B7] sm:flex-row">
          <p>New Plains LLC · Oklahoma · SAM.gov Active</p>
          <div className="flex items-center gap-6">
            <Link href="/compare" className="transition-colors hover:text-[#F5C518]">
              Concept Index
            </Link>
            <Link href="/" className="transition-colors hover:text-[#F5C518]">
              Main Site
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
