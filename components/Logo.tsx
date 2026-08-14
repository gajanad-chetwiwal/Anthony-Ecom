import Link from "next/link";

export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ae-stroke" x1="8" y1="42" x2="40" y2="6" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9fc42e" />
          <stop offset="0.55" stopColor="#c9f73a" />
          <stop offset="1" stopColor="#eaff8a" />
        </linearGradient>
        <linearGradient id="ae-bg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(255,255,255,0.10)" />
          <stop offset="1" stopColor="rgba(255,255,255,0.02)" />
        </linearGradient>
      </defs>
      {/* glass chip */}
      <rect x="1" y="1" width="46" height="46" rx="13" fill="url(#ae-bg)" />
      <rect x="1" y="1" width="46" height="46" rx="13" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
      <rect x="2.5" y="2.5" width="43" height="10" rx="8" fill="rgba(255,255,255,0.06)" />
      {/* A-arrow: legs */}
      <path
        d="M11 38 L24 11 L37 38"
        stroke="url(#ae-stroke)"
        strokeWidth="4.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* crossbar */}
      <path d="M17.5 28.5 H30.5" stroke="url(#ae-stroke)" strokeWidth="4.4" strokeLinecap="round" />
      {/* arrowhead wings at apex */}
      <path
        d="M17.5 14.5 L24 11 L30.5 14.5"
        stroke="url(#ae-stroke)"
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} className="group flex items-center gap-2.5">
      <span className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:rotate-3">
        <LogoMark />
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-cream">
        Anthony<span className="text-volt">Ecom</span>
      </span>
    </Link>
  );
}
