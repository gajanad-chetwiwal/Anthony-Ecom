import Link from "next/link";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/data";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(201,247,58,0.1),transparent_65%)]" />
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-volt">
          Free Growth Audit
        </p>
        <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-cream sm:text-5xl">
          Let&apos;s find out what your account is actually worth.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          A senior strategist — not a salesperson — audits your account, your
          tracking and your unit economics. You keep the findings either way.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="w-full rounded-full bg-volt px-8 py-4 text-sm font-semibold text-ink transition-all duration-300 hover:shadow-[0_0_36px_rgba(201,247,58,0.45)] sm:w-auto"
          >
            Book a Growth Audit
          </Link>
          <a
            href={`mailto:${site.emails.ceo}`}
            className="w-full rounded-full border border-line px-8 py-4 text-sm font-semibold text-cream transition-colors duration-300 hover:border-volt/50 hover:text-volt sm:w-auto"
          >
            {site.emails.ceo}
          </a>
        </div>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-muted/70">
          Reply within one business day · No lock-in contracts
        </p>
      </Reveal>
    </section>
  );
}
