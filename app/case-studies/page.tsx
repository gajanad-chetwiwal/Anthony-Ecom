import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTASection from "@/components/CTASection";
import { caseStudies, resultsStats } from "@/lib/data";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Documented, audited results across electric mobility, jewelry, home decor, health, toys and automotive — from 3.13x to 18.55x ROAS.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="hero-glow pointer-events-none absolute inset-0" />
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-44">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-volt">
              Documented Results
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-cream sm:text-6xl">
              Numbers that survived <span className="text-volt">an audit.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Every figure below comes from a tracked, verified account — anonymized to
              protect client competitive data, never inflated to win yours. Ask us about
              any of them on the audit call.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
              {resultsStats.map((stat) => (
                <div key={stat.label} className="bg-surface/80 p-7 text-center">
                  <div className="font-display text-3xl font-bold tracking-tight text-volt">
                    <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                  </div>
                  <div className="mt-2 font-mono text-[11px] uppercase tracking-widest text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, i) => (
            <Reveal key={study.slug} delay={(i % 3) * 90}>
              <CaseStudyCard study={study} />
            </Reveal>
          ))}
        </div>
      </section>

      <div className="border-t border-line">
        <CTASection />
      </div>
    </>
  );
}
