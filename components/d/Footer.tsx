export default function Footer() {
  return (
    <footer className="bg-[#1A1814] text-[#F6EFE1] px-6 md:px-12 lg:px-16 py-16">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 lg:col-span-6">
            <div className="[font-family:var(--font-fraunces)] text-4xl md:text-5xl text-[#F6EFE1] leading-none mb-3">
              Field<span className="italic text-[#C9A26B]">Notes</span>
            </div>
            <div className="eyebrow text-[#F6EFE1]/50">
              An imprint of New Plains LLC
            </div>
            <p className="mt-8 [font-family:var(--font-fraunces)] italic text-xl text-[#F6EFE1]/70 max-w-md leading-snug">
              “An operating manual for the AI era.”
            </p>
          </div>
          <div className="col-span-6 lg:col-span-3">
            <div className="eyebrow text-[#C9A26B] mb-4">Sections</div>
            <ul className="space-y-2 text-sm text-[#F6EFE1]/75">
              <li>
                <a href="#problem" className="hover:text-[#C9A26B] transition">
                  II. Problem
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#C9A26B] transition">
                  III. Calculator
                </a>
              </li>
              <li>
                <a href="#engagements" className="hover:text-[#C9A26B] transition">
                  IV. Engagements
                </a>
              </li>
              <li>
                <a href="#tiers" className="hover:text-[#C9A26B] transition">
                  VII. Tiers
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-6 lg:col-span-3">
            <div className="eyebrow text-[#C9A26B] mb-4">Direct</div>
            <ul className="space-y-2 text-sm text-[#F6EFE1]/75">
              <li>
                <a href="#claim" className="hover:text-[#C9A26B] transition">
                  Book the $999 Audit
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@newplains.dev"
                  className="hover:text-[#C9A26B] transition"
                >
                  info@newplains.dev
                </a>
              </li>
              <li>
                <a
                  href="https://newplains.dev"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#C9A26B] transition"
                >
                  newplains.dev ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-6 border-t border-[rgba(201,162,107,0.2)] flex flex-col md:flex-row justify-between gap-4 [font-family:var(--font-geist-mono)] text-xs text-[#F6EFE1]/55 uppercase tracking-widest">
          <span>© {new Date().getFullYear()} New Plains LLC · Field Notes № 01</span>
          <span>Edition I · Set in Fraunces &amp; Geist</span>
        </div>
      </div>
    </footer>
  );
}
