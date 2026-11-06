import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2D2A26] text-[#FAF8F5] py-8 px-6 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} New Plains LLC. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 whitespace-nowrap">
          <Link
            href="/privacy"
            className="text-gray-400 hover:text-[#C4A265] transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-gray-400 hover:text-[#C4A265] transition-colors"
          >
            Terms &amp; Conditions
          </Link>
          <a
            href="https://morefromless.substack.com/"
            className="text-gray-400 hover:text-[#C4A265] transition-colors"
          >
            Substack ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
