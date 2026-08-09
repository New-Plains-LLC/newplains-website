import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "New Plains LLC — Two Ways We Work. One Promise.",
  description:
    "AI consulting — the $999 1-hour audit call, workflow automation, custom agents, and AI training. Or government contracting with an embedded RFQ form. info@newplains.dev",
  robots: { index: false },
};

export default function ConceptALayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal antialiased">
      <header className="border-b border-brand-copper/15 bg-brand-cream/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
          <Link href="/a" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="New Plains LLC"
              width={60}
              height={40}
              priority
              className="h-10 w-auto shrink-0"
            />
            <span className="flex flex-col leading-tight">
              <span className="font-heading text-xl font-semibold tracking-tight text-brand-charcoal">
                New Plains <span className="text-brand-copper">LLC</span>
              </span>
              <span className="hidden text-[11px] font-medium uppercase tracking-[0.2em] text-brand-charcoal/50 sm:inline">
                Concept A · Two Ways
              </span>
            </span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <Link href="/a/ai" className="transition-colors hover:text-brand-copper">
              AI Consulting
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
            href="mailto:info@newplains.dev?subject=AI%20Audit"
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
