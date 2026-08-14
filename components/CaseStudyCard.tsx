import type { CaseStudy } from "@/lib/data";

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="card-hover sheen group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card p-6 sm:p-8">
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-volt/[0.06] blur-2xl transition-opacity duration-500 group-hover:opacity-100 sm:opacity-0" />
      <div className="flex items-center justify-between gap-4">
        <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
          {study.niche}
        </span>
        <span className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-muted">
          {study.region}
        </span>
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-cream sm:text-2xl">
        {study.client}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{study.summary}</p>
      <div className="mt-8 grid grid-cols-3 gap-4 border-t border-line pt-6">
        <div>
          <div className="font-display text-2xl font-bold tracking-tight text-volt">
            {study.roas}x
          </div>
          <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted">ROAS</div>
        </div>
        <div>
          <div className="font-display text-2xl font-bold tracking-tight text-cream">
            {study.revenue}
          </div>
          <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted">
            Revenue
          </div>
        </div>
        <div>
          <div className="font-display text-2xl font-bold tracking-tight text-cream">
            {study.period}
          </div>
          <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted">
            Timeline
          </div>
        </div>
      </div>
    </article>
  );
}
