import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { values, differentiators, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Anthony Ecom Buy-Up LLC — founded by Papa Anthony Thomas. Operators who scale their own eCommerce brands, now scaling yours with AI-powered, profit-first growth systems.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="hero-glow pointer-events-none absolute inset-0" />
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-44">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-volt">About Us</p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-cream sm:text-6xl">
              Operators first. <span className="text-volt">Agency second.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {site.legalName} doesn&apos;t just run ads for eCommerce brands — we buy,
              build and scale our own. Every strategy we sell was tested with our own
              money first. That&apos;s not a tagline; it&apos;s the business model.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Founder */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <Reveal>
          <div className="grid gap-10 rounded-2xl border border-line bg-card p-8 sm:p-12 lg:grid-cols-[auto_1fr] lg:gap-14">
            <div className="flex flex-col items-start gap-5">
              <div className="glass relative h-40 w-40 overflow-hidden rounded-2xl sm:h-52 sm:w-52">
                <Image
                  src="/founder.jpg"
                  alt="Papa Anthony Thomas, Founder & CEO of Anthony Ecom Buy-Up LLC"
                  fill
                  sizes="(min-width: 640px) 13rem, 10rem"
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold tracking-tight text-cream">
                  {site.founder}
                </h2>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-volt">
                  Founder &amp; CEO
                </p>
              </div>
            </div>
            <div className="space-y-5 text-sm leading-relaxed text-muted sm:text-base">
              <p>
                Anthony founded {site.legalName} on a simple frustration: agencies that
                report numbers no one can find in the P&amp;L. After years of building
                and acquiring eCommerce brands — spending his own money on his own ads —
                he built the operation he always wished he could hire.
              </p>
              <p>
                The &ldquo;Buy-Up&rdquo; in our name is literal. We operate a portfolio of
                our own eCommerce brands, which means every bidding strategy, creative
                framework and retention flow gets proven on our own revenue before it
                ever touches a client account. When the market shifts, we feel it in our
                own margins first — and adapt your account before it shows in yours.
              </p>
              <p>
                Today, that operator DNA is fused with a proprietary AI layer that
                watches every client account around the clock. The philosophy hasn&apos;t
                changed: <span className="text-cream">profit is the only metric that
                can&apos;t be faked.</span>
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Differentiators */}
      <section className="border-t border-line bg-surface/40">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <Reveal className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-volt">
              Why Brands Choose Us
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-cream sm:text-4xl">
              Five things you won&apos;t get anywhere else.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={(i % 3) * 90}>
                <div className="card-hover h-full rounded-2xl border border-line bg-card p-7">
                  <span className="font-mono text-xs text-volt">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-cream">
                    {d.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{d.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-volt">
              Operating Principles
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-cream sm:text-4xl">
              Six things we do not compromise on.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={(i % 3) * 90}>
                <div className="card-hover h-full rounded-2xl border border-line bg-card p-7">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-volt/25 bg-volt/[0.07] font-mono text-xs text-volt">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-cream">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{value.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-line">
        <CTASection />
      </div>
    </>
  );
}
