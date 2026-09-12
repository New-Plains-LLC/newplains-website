import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Concept Index — New Plains LLC",
  description: "Three landing-page redesign concepts for newplains.dev. Shawn's compare page.",
  robots: { index: false },
};

const concepts = [
  {
    slug: "/a",
    tag: "Concept A",
    name: "Two Ways",
    accent: "#B87333",
    bg: "#FAF8F5",
    fg: "#2D2A26",
    line:
      "Credibility-led double hero: AI for small business — the $999 1-hour audit call, workflow automation, custom agents, and AI training — or government contracting with an embedded RFQ form. Cream / copper / slate-navy, real-people photography.",
    routes: ["/a", "/a/ai", "/a/govcon"],
  },
  {
    slug: "/b",
    tag: "Concept B",
    name: "The Contractor",
    accent: "#F5C518",
    bg: "#0E1B2C",
    fg: "#FFFFFF",
    line:
      "Credibility-first, contractor-style. Bid on your scope — property services, catering, janitorial, landscaping, and AI.",
    routes: ["/b", "/b/services", "/b/ai", "/b/capabilities", "/b/rfq"],
  },
  {
    slug: "/c",
    tag: "Concept C",
    name: "The Operator",
    accent: "#4ADE80",
    bg: "#0A0A0B",
    fg: "#4ADE80",
    line:
      "Documentation-first terminal spec sheet for technical buyers. No marketing — just the stack, the metrics, and the matrix.",
    routes: ["/c", "/c/ai-stack", "/c/govcon"],
  },
  {
    slug: "/f",
    tag: "Concept F",
    name: "The Showroom",
    accent: "#d1ffca",
    bg: "#e5e5e5",
    fg: "#000000",
    line: "Brutalist editorial showroom on warm gray. Oversized condensed type, flat surfaces, mint + voltage accents, and a block-tower hero: 12 labeled tasks that stack themselves into a 2×2 tower.",
    routes: ["/f"],
  },
  {
    slug: "/g",
    tag: "Concept G",
    name: "The Editorial",
    accent: "#cccc25",
    bg: "#f0f7f6",
    fg: "#17150e",
    line: "Ink-on-cream magazine spread. Serif display at 144px, white/mint alternating bands, pill buttons, one rationed chartreuse CTA. GlossGenius-inspired.",
    routes: ["/g"],
  },
];

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-brand-cream text-brand-charcoal">
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-28">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-copper">
          Concept Index · Unlisted
        </p>
        <h1 className="font-heading mt-4 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
          Five redesigns. One business. Pick a direction.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-brand-charcoal/70">
          Each concept is a complete visual world with its own voice, routes, and CTA. Open each
          one, then decide what ships.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {concepts.map((c) => (
            <Link
              key={c.slug}
              href={c.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-brand-charcoal/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Color chip preview */}
              <div className="relative h-24" style={{ backgroundColor: c.bg }}>
                <span
                  className="absolute bottom-3 left-4 text-sm font-bold uppercase tracking-[0.2em]"
                  style={{ color: c.accent }}
                >
                  {c.tag}
                </span>
                <span
                  className="absolute bottom-3 right-4 text-2xl font-black"
                  style={{ color: c.accent }}
                >
                  Aa
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h2 className="font-heading text-2xl font-semibold tracking-tight text-brand-charcoal">
                  {c.name}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-charcoal/70">
                  {c.line}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {c.routes.map((route) => (
                    <span
                      key={route}
                      className="rounded-full bg-brand-cream px-2.5 py-1 text-[11px] font-semibold text-brand-charcoal/70"
                    >
                      {route}
                    </span>
                  ))}
                </div>
                <span
                  className="mt-7 inline-block text-sm font-semibold"
                  style={{ color: c.accent }}
                >
                  Open concept →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 rounded-2xl border border-brand-copper/25 bg-white/60 px-8 py-6 sm:flex-row">
          <p className="text-sm text-brand-charcoal/70">
            None of these routes are indexed. When one wins, promote it to the home page.
          </p>
          <Link
            href="/"
            className="shrink-0 rounded-full bg-brand-copper px-6 py-3 text-sm font-semibold text-brand-cream transition-colors hover:bg-brand-copper-light"
          >
            Back to main site
          </Link>
        </div>
      </section>
    </main>
  );
}
