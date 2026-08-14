"use client";

import { useEffect, useRef, useState } from "react";

const SLIDE_COUNT = 3;
const INTERVAL = 4200;

function BarsSlide() {
  const bars = [34, 48, 40, 58, 52, 70, 64, 88];
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Blended ROAS · Live
          </p>
          <p className="mt-1.5 font-display text-4xl font-bold tracking-tight text-cream">
            6.2<span className="text-volt">x</span>
          </p>
        </div>
        <span className="rounded-full border border-volt/25 bg-volt/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-volt">
          +38% MoM
        </span>
      </div>
      <div className="mt-auto flex h-36 gap-2.5 sm:h-44">
        {bars.map((h, i) => (
          <div key={i} className="flex h-full flex-1 items-end">
            <div
              className={`animate-bar-rise w-full rounded-t-md ${
                i === bars.length - 1
                  ? "bg-gradient-to-t from-volt-dim to-volt shadow-[0_0_24px_rgba(201,247,58,0.35)]"
                  : "bg-white/10"
              }`}
              style={{ height: `${h}%`, animationDelay: `${i * 70}ms` }}
            />
          </div>
        ))}
      </div>
      <div className="mt-3 flex justify-between font-mono text-[9px] uppercase tracking-widest text-muted/60">
        <span>Q1</span><span>Q2</span><span>Q3</span><span>Now</span>
      </div>
    </div>
  );
}

function AnomalySlide() {
  const rows = [
    { time: "02:14", text: "Feed disapproval — 214 SKUs auto-flagged", tone: "alert" },
    { time: "02:15", text: "Budget rerouted to Search & Microsoft", tone: "ok" },
    { time: "07:00", text: "Strategist briefed with fix applied", tone: "ok" },
  ];
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
          AI Anomaly Watch · 24/7
        </p>
        <span className="flex items-center gap-2 rounded-full border border-line bg-white/[0.04] px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-cream">
          <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-volt" />
          Monitoring
        </span>
      </div>
      <div className="mt-6 flex flex-1 flex-col justify-center gap-3">
        {rows.map((row) => (
          <div
            key={row.time}
            className="flex items-start gap-3 rounded-xl border border-line bg-white/[0.03] p-3.5"
          >
            <span className="font-mono text-[10px] text-muted">{row.time}</span>
            <span className="flex-1 text-xs leading-relaxed text-cream/85">{row.text}</span>
            <span
              className={`mt-0.5 h-2 w-2 shrink-0 rounded-full ${
                row.tone === "alert" ? "bg-red-400" : "bg-volt"
              }`}
            />
          </div>
        ))}
      </div>
      <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-widest text-volt">
        Resolved before breakfast.
      </p>
    </div>
  );
}

function MarginSlide() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Contribution Margin · Tracked
          </p>
          <p className="mt-1.5 font-display text-4xl font-bold tracking-tight text-cream">
            $1.5<span className="text-volt">M</span>
          </p>
        </div>
        <span className="rounded-full border border-volt/25 bg-volt/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-volt">
          21 months
        </span>
      </div>
      <div className="mt-auto">
        <svg viewBox="0 0 320 130" className="w-full" aria-hidden="true">
          <defs>
            <linearGradient id="mg-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(201,247,58,0.28)" />
              <stop offset="100%" stopColor="rgba(201,247,58,0)" />
            </linearGradient>
            <linearGradient id="mg-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#9fc42e" />
              <stop offset="100%" stopColor="#eaff8a" />
            </linearGradient>
          </defs>
          <path
            d="M0 108 C40 104, 60 96, 90 92 C120 88, 140 78, 170 66 C200 54, 230 48, 260 34 C285 22, 305 16, 320 10 L320 130 L0 130 Z"
            fill="url(#mg-fill)"
          />
          <path
            d="M0 108 C40 104, 60 96, 90 92 C120 88, 140 78, 170 66 C200 54, 230 48, 260 34 C285 22, 305 16, 320 10"
            fill="none"
            stroke="url(#mg-line)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="320" cy="10" r="5" fill="#c9f73a" />
          <circle cx="320" cy="10" r="10" fill="rgba(201,247,58,0.25)" />
        </svg>
        <div className="mt-3 flex justify-between font-mono text-[9px] uppercase tracking-widest text-muted/60">
          <span>Month 1</span><span>Month 11</span><span>Month 21</span>
        </div>
      </div>
    </div>
  );
}

export default function HeroShowcase() {
  const [active, setActive] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timer.current = setInterval(() => {
      setActive((a) => (a + 1) % SLIDE_COUNT);
    }, INTERVAL);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  function goTo(i: number) {
    setActive(i);
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = setInterval(() => {
        setActive((a) => (a + 1) % SLIDE_COUNT);
      }, INTERVAL);
    }
  }

  const slides = [<BarsSlide key="bars" />, <AnomalySlide key="anomaly" />, <MarginSlide key="margin" />];

  return (
    <div className="relative mx-auto w-full max-w-[480px]">
      {/* floating glass chips */}
      <div className="animate-float-slow glass absolute -top-5 -right-2 z-10 hidden rounded-2xl px-4 py-3 sm:block">
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted">Best return</p>
        <p className="mt-0.5 font-display text-lg font-bold text-volt">18.55x</p>
      </div>
      <div
        className="animate-float-slow glass absolute -bottom-6 -left-3 z-10 hidden rounded-2xl px-4 py-3 sm:block"
        style={{ animationDelay: "-3.5s" }}
      >
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted">Contracts</p>
        <p className="mt-0.5 font-display text-lg font-bold text-cream">Month-to-month</p>
      </div>

      {/* main glass panel */}
      <div className="glass-deep sheen rounded-3xl p-6 sm:p-8">
        <div className="mb-5 flex items-center justify-between border-b border-line pb-4">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted/70">
            anthonyecom · growth os
          </p>
        </div>
        <div className="slide-stack min-h-[280px] sm:min-h-[300px]">
          {slides.map((slide, i) => (
            <div key={i} className={i === active ? "slide-active" : "slide-hidden"} aria-hidden={i !== active}>
              {slide}
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: SLIDE_COUNT }, (_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Show slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                i === active ? "w-7 bg-volt" : "w-1.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
