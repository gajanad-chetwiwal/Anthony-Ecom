"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { leadMagnet, site } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

export default function LeadMagnet() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${site.emails.info}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          _subject: "Profit Analysis Template Request — anthonyecom.com",
          _template: "table",
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="border-t border-line bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-card">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_85%_50%,rgba(201,247,58,0.08),transparent_60%)]" />
            <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:p-16">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-volt">
                  {leadMagnet.eyebrow}
                </p>
                <h2 className="mt-4 font-display text-3xl font-bold leading-[1.12] tracking-tight text-cream sm:text-4xl">
                  {leadMagnet.title}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted">{leadMagnet.body}</p>
                <ul className="mt-7 space-y-3">
                  {leadMagnet.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm text-cream/85">
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-volt/15 font-mono text-[10px] text-volt">
                        ✓
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col justify-center">
                {status === "sent" ? (
                  <div className="rounded-2xl border border-volt/30 bg-volt/[0.06] p-8 text-center">
                    <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-volt text-lg text-ink">
                      ✓
                    </div>
                    <h3 className="mt-4 font-display text-xl font-bold text-cream">
                      On its way.
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      Check your inbox — the template will arrive within one
                      business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-surface/60 p-6 backdrop-blur sm:p-8">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                      Get the template — free
                    </p>
                    <div className="mt-5 space-y-4">
                      <input
                        name="name"
                        required
                        placeholder="Your name"
                        aria-label="Your name"
                        className="w-full rounded-xl border border-line bg-card px-4 py-3.5 text-sm text-cream placeholder:text-muted/60 outline-none transition-colors duration-200 focus:border-volt/60"
                      />
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="you@brand.com"
                        aria-label="Work email"
                        className="w-full rounded-xl border border-line bg-card px-4 py-3.5 text-sm text-cream placeholder:text-muted/60 outline-none transition-colors duration-200 focus:border-volt/60"
                      />
                      <input type="hidden" name="request" value="Profit Analysis Template" />
                      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="w-full rounded-full bg-volt px-6 py-4 text-sm font-semibold text-ink transition-all duration-300 hover:shadow-[0_0_32px_rgba(201,247,58,0.4)] disabled:opacity-60"
                      >
                        {status === "sending" ? "Sending…" : leadMagnet.cta}
                      </button>
                      {status === "error" && (
                        <p className="text-xs text-red-400">
                          Something went wrong — email us at {site.emails.info} instead.
                        </p>
                      )}
                      <p className="text-center font-mono text-[10px] uppercase tracking-widest text-muted/60">
                        No spam. Just the sheet.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
