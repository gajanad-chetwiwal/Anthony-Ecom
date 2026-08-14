import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-5 pt-16">
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="relative text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-volt">404</p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-cream sm:text-6xl">
          This page didn&apos;t convert.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base text-muted">
          The page you&apos;re looking for doesn&apos;t exist — but your growth ceiling does.
          Let&apos;s go break it.
        </p>
        <Link
          href="/"
          className="mt-9 inline-block rounded-full bg-volt px-8 py-4 text-sm font-semibold text-ink transition-all duration-300 hover:shadow-[0_0_36px_rgba(201,247,58,0.45)]"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
