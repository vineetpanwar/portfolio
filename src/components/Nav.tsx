"use client";

import { useEffect, useState } from "react";
import { site, hireMailto } from "@/content/site";
import { MailIcon } from "@/components/ui/icons";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#judgment", label: "How I think" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-ink-950/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-content items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2 font-mono text-sm font-medium text-white">
          <span className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_2px_rgba(76,201,240,0.6)]" />
          vineet.panwar
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href={hireMailto}
          className="group inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5 accent-ring"
        >
          <MailIcon className="h-3.5 w-3.5" />
          Hire me
        </a>
      </nav>
    </header>
  );
}
