import Link from "next/link";
import { site } from "@/lib/data";
import Logo from "@/components/Logo";

const footerCols = [
  {
    heading: "Services",
    links: [
      { label: "Google Ads", href: "/services#google-ads" },
      { label: "Shopping Feed & PMax", href: "/services#shopping-feed-pmax" },
      { label: "Meta & Paid Social", href: "/services#meta-paid-social" },
      { label: "Microsoft Ads", href: "/services#microsoft-ads" },
      { label: "Email & Retention", href: "/services#email-retention" },
      { label: "CRO & Storefront", href: "/services#cro-storefront" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Our Process", href: "/#process" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              The AI-powered growth partner for eCommerce brands that refuse to
              plateau. Human strategy, machine precision, profit-first everything.
            </p>
            <div className="mt-6 space-y-2 text-sm text-muted">
              <p>
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted/70">
                  CEO Mail&nbsp;&nbsp;
                </span>
                <a href={`mailto:${site.emails.ceo}`} className="text-cream transition-colors hover:text-volt">
                  {site.emails.ceo}
                </a>
              </p>
              <p>
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted/70">
                  General&nbsp;&nbsp;
                </span>
                <a href={`mailto:${site.emails.info}`} className="text-cream transition-colors hover:text-volt">
                  {site.emails.info}
                </a>
              </p>
              <p>
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted/70">
                  Client support&nbsp;&nbsp;
                </span>
                <a href={`mailto:${site.emails.support}`} className="text-cream transition-colors hover:text-volt">
                  {site.emails.support}
                </a>
              </p>
              <p>
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted/70">
                  Phone&nbsp;&nbsp;
                </span>
                <a href={`tel:${site.phoneHref}`} className="text-cream transition-colors hover:text-volt">
                  {site.phone}
                </a>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {footerCols.map((col) => (
              <div key={col.heading}>
                <h3 className="font-mono text-[11px] uppercase tracking-widest text-muted/70">
                  {col.heading}
                </h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted transition-colors duration-200 hover:text-cream"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-relaxed text-muted/70">
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
            <br className="sm:hidden" />
            <span className="sm:ml-2">{site.address}</span>
          </p>
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted/50">
            Built to compound.
          </p>
        </div>
      </div>
    </footer>
  );
}
