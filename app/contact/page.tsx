import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site, faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free growth audit with Anthony Ecom. A senior strategist audits your account, tracking and unit economics — you keep the findings either way.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="hero-glow pointer-events-none absolute inset-0" />
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-44">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-volt">
                Book a Growth Audit
              </p>
              <h1 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-cream sm:text-5xl">
                Let&apos;s look at the <span className="text-volt">real numbers.</span>
              </h1>
              <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
                Fill in the form and a senior strategist — not a salesperson — will
                audit your account, your tracking and your unit economics. You keep
                the findings in writing, whether we work together or not.
              </p>
              <div className="mt-10 space-y-6">
                <div className="rounded-2xl border border-line bg-card p-6">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                    What happens next
                  </p>
                  <ol className="mt-4 space-y-3 text-sm leading-relaxed text-cream/85">
                    <li className="flex gap-3">
                      <span className="font-mono text-volt">01</span>
                      We reply within one business day to book a 30-minute call.
                    </li>
                    <li className="flex gap-3">
                      <span className="font-mono text-volt">02</span>
                      We audit your account, measurement stack and unit economics.
                    </li>
                    <li className="flex gap-3">
                      <span className="font-mono text-volt">03</span>
                      You get a written action plan — yours to keep either way.
                    </li>
                  </ol>
                </div>
                <div className="space-y-2.5 text-sm text-muted">
                  <p>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-muted/70">
                      CEO Mail&nbsp;&nbsp;
                    </span>
                    <a href={`mailto:${site.emails.ceo}`} className="text-cream transition-colors hover:text-volt">
                      {site.emails.ceo}
                    </a>
                  </p>
                  <p>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-muted/70">
                      General&nbsp;&nbsp;
                    </span>
                    <a href={`mailto:${site.emails.info}`} className="text-cream transition-colors hover:text-volt">
                      {site.emails.info}
                    </a>
                  </p>
                  <p>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-muted/70">
                      Support&nbsp;&nbsp;
                    </span>
                    <a href={`mailto:${site.emails.support}`} className="text-cream transition-colors hover:text-volt">
                      {site.emails.support}
                    </a>
                  </p>
                  <p className="pt-2 text-xs text-muted/70">{site.address}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="rounded-2xl border border-line bg-card/60 p-6 backdrop-blur sm:p-9">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-surface/40">
        <div className="mx-auto max-w-4xl px-5 py-24 sm:px-8 sm:py-32">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-volt">FAQ</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-cream sm:text-4xl">
              Questions we hear on every first call.
            </h2>
          </Reveal>
          <div className="mt-14 space-y-4">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={(i % 2) * 60}>
                <details className="group rounded-2xl border border-line bg-card p-6 transition-colors open:border-volt/30">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-cream [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <span className="shrink-0 font-mono text-lg text-volt transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{faq.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
