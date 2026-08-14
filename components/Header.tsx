"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";
import Logo from "@/components/Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-line bg-ink/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-[72px] sm:px-8">
        <Logo onClick={() => setOpen(false)} />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors duration-200 hover:text-cream"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="rounded-full bg-volt px-5 py-2.5 text-sm font-semibold text-ink transition-all duration-300 hover:shadow-[0_0_28px_rgba(201,247,58,0.4)]"
          >
            Book a Growth Audit
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line lg:hidden"
        >
          <div className="relative h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-full bg-cream transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-full bg-cream transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-full bg-cream transition-all duration-300 ${
                open ? "top-1.5 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 border-t border-line bg-ink/95 px-5 py-6 backdrop-blur-xl">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 font-display text-lg font-medium text-cream transition-colors hover:bg-card"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-full bg-volt px-5 py-3.5 text-center text-sm font-semibold text-ink"
          >
            Book a Growth Audit
          </Link>
        </nav>
      </div>
    </header>
  );
}
