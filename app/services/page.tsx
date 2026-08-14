import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { services, aiFeatures } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Google Ads, Shopping & PMax, Meta, Microsoft Ads, email retention and CRO — six disciplines rebuilt around contribution margin and powered by proprietary AI systems.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="hero-glow pointer-events-none absolute inset-0" />
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-44">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-volt">Services</p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-cream sm:text-6xl">
              Six disciplines. <span className="text-volt">One profit engine.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              We don&apos;t sell channels — we build a system. Every discipline below is
              rebuilt around contribution margin, monitored 24/7 by our AI layer, and
              run by a senior strategist who signs their name to the outcome.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="space-y-6">
          {services.map((service, i) => (
            <Reveal key={service.slug}>
              <div
                id={service.slug}
                className="card-hover scroll-mt-28 grid gap-8 rounded-2xl border border-line bg-card p-7 sm:p-10 lg:grid-cols-[1fr_1.2fr]"
              >
                <div>
                  <div className="flex items-center gap-4">
                    <span className="font-display text-4xl font-bold text-line">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="rounded-full border border-volt/25 bg-volt/[0.07] px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-volt">
                      {service.tag}
                    </span>
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-cream sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                    {service.description}
                  </p>
                </div>
                <div className="flex flex-col justify-center gap-4 lg:border-l lg:border-line lg:pl-10">
                  {service.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-volt" />
                      <span className="text-sm leading-relaxed text-cream/85">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* AI layer strip */}
        <Reveal>
          <div className="mt-20 rounded-2xl border border-line bg-surface/60 p-8 sm:p-12">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-volt">
              Running underneath everything
            </p>
            <h2 className="mt-4 max-w-xl font-display text-2xl font-bold tracking-tight text-cream sm:text-3xl">
              The AI layer that never sleeps.
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {aiFeatures.map((feature) => (
                <div key={feature.title}>
                  <h3 className="font-display text-base font-semibold text-cream">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{feature.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <div className="border-t border-line">
        <CTASection />
      </div>
    </>
  );
}
