import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "New Plains LLC — The $999 AI Audit",
  description:
    "We find the money your business is already losing to manual work — and we ship the fix in 7 days. Or you don't pay.",
  robots: { index: false },
};

export default function ConceptALayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal antialiased">
      <header className="border-b border-brand-copper/15 bg-brand-cream/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
          <Link href="/a" className="flex items-baseline gap-3">
            <span className="font-heading text-xl font-semibold tracking-tight text-brand-charcoal">
              New Plains <span className="text-brand-copper">LLC</span>
            </span>
            <span className="hidden text-[11px] font-medium uppercase tracking-[0.2em] text-brand-charcoal/50 sm:inline">
              Concept A · The Audit
            </span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <Link href="/a" className="transition-colors hover:text-brand-copper">
              The Audit
            </Link>
            <Link href="/a/audit" className="transition-colors hover:text-brand-copper">
              How It Works
            </Link>
            <Link href="/a/govcon" className="transition-colors hover:text-brand-copper">
              GovCon
            </Link>
            <Link
              href="/compare"
              className="text-brand-copper transition-colors hover:text-brand-copper-light"
            >
              Concept Index
            </Link>
          </nav>
          <Link
            href="mailto:dsskaggs@gmail.com?subject=AI%20Audit"
            className="rounded-full bg-brand-copper px-5 py-2.5 text-sm font-semibold text-brand-cream shadow-sm transition-colors hover:bg-brand-copper-light"
          >
            Book the Audit
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-brand-copper/15 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-brand-charcoal/60 sm:flex-row">
          <p>© {new Date().getFullYear()} New Plains LLC · Oklahoma</p>
          <div className="flex items-center gap-6">
            <Link href="/compare" className="transition-colors hover:text-brand-copper">
              Compare concepts
            </Link>
            <Link href="/" className="transition-colors hover:text-brand-copper">
              Main site
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
