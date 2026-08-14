import Link from "next/link";

export default function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} className="group flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-volt font-display text-base font-bold text-ink transition-transform duration-300 group-hover:rotate-6">
        A
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-cream">
        Anthony<span className="text-volt">Ecom</span>
      </span>
    </Link>
  );
}
