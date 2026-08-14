"use client";

import { useState } from "react";
import { site } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

const revenueOptions = [
  "Under $20k / month",
  "$20k – $50k / month",
  "$50k – $250k / month",
  "$250k – $1M / month",
  "$1M+ / month",
];

export default function ContactForm() {
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
          _subject: "New Growth Audit Request — anthonyecom.com",
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

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-volt/30 bg-volt/[0.06] p-8 text-center sm:p-12">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-volt text-xl text-ink">
          ✓
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold text-cream">
          Request received.
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted">
          A senior strategist will reply within one business day. In the meantime,
          feel free to reach us directly at{" "}
          <a href={`mailto:${site.emails.ceo}`} className="text-volt">
            {site.emails.ceo}
          </a>
          .
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-line bg-card px-4 py-3.5 text-sm text-cream placeholder:text-muted/60 outline-none transition-colors duration-200 focus:border-volt/60";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-muted">
            Your name *
          </label>
          <input id="name" name="name" required placeholder="Jane Smith" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-muted">
            Work email *
          </label>
          <input id="email" name="email" type="email" required placeholder="jane@brand.com" className={inputClass} />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="website" className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-muted">
            Store URL *
          </label>
          <input id="website" name="website" required placeholder="https://yourbrand.com" className={inputClass} />
        </div>
        <div>
          <label htmlFor="revenue" className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-muted">
            Monthly revenue *
          </label>
          <select id="revenue" name="monthly_revenue" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select a range
            </option>
            {revenueOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-muted">
          What&apos;s the biggest thing holding growth back?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your brand, your channels, and where things feel stuck…"
          className={inputClass}
        />
      </div>
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-volt px-8 py-4 text-sm font-semibold text-ink transition-all duration-300 hover:shadow-[0_0_32px_rgba(201,247,58,0.4)] disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Request My Free Audit"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong. Please email us directly at{" "}
          <a href={`mailto:${site.emails.info}`} className="underline">
            {site.emails.info}
          </a>
          .
        </p>
      )}
    </form>
  );
}
