"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-ink/10 bg-cream/80 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="group flex flex-col leading-none focus-visible:outline-none">
          <span className="font-display text-2xl tracking-tight">
            Taniaja <span className="text-accent">Turner</span>
          </span>
          <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted">
            {site.brokerage}
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-ink/70 transition-colors hover:text-ink focus-visible:text-accent focus-visible:outline-none"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-primary hidden !px-5 !py-2.5 text-sm md:inline-flex">
          Talk to Taniaja
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="rounded-full p-2 transition-colors hover:bg-ink/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      <div className={`grid transition-all duration-300 ease-out md:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <ul className="flex flex-col gap-1 px-6 pb-6">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-2 py-3 text-lg hover:bg-ink/5">
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">
                Talk to Taniaja
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
