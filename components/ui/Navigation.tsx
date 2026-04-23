"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface NavigationProps {
  onContactClick: () => void;
}

export default function Navigation({ onContactClick }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-brand-cream/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="New Plains"
            width={1264}
            height={848}
            className="h-9 w-auto md:h-10"
          />
          <span className="font-heading font-bold text-brand-charcoal text-lg hidden sm:inline">
            New Plains
          </span>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <a
            href="/blog"
            className="text-sm font-semibold text-brand-charcoal/70 hover:text-brand-charcoal transition-colors"
          >
            Blog
          </a>
          <button
            onClick={onContactClick}
            className="px-5 py-2 bg-brand-copper text-brand-cream rounded-full text-sm font-semibold hover:bg-brand-copper-light transition-colors"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
