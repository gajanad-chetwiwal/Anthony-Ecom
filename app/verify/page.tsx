import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Business Verification",
  description:
    "Official registration and verification details for Anthony Ecom Buy-Up LLC — for banks, payment processors, and partners performing due diligence.",
  robots: { index: false, follow: false },
};

const entityRows = [
  { label: "Legal entity name", value: "Anthony Ecom Buy-Up LLC" },
  { label: "Entity type", value: "Limited Liability Company (LLC)" },
  { label: "State of formation", value: "Wyoming, United States" },
  { label: "Physical / principal office", value: site.address },
  { label: "Founder & CEO", value: site.founder },
  { label: "Website", value: "anthonyecom.com" },
  { label: "CEO Mail", value: site.emails.ceo },
  { label: "General inquiries", value: site.emails.info },
  { label: "Support", value: site.emails.support },
];

const verifySteps = [
  {
    title: "Wyoming Secretary of State — Business Search",
    body: "Anthony Ecom Buy-Up LLC is registered with the Wyoming Secretary of State, Business Division. Any bank, processor or partner can confirm our registration, status and registered agent directly on the official state registry — free, no account required.",
    linkLabel: "View our official Wyoming filing",
    href: "https://wyobiz.wyo.gov/Business/FilingDetails.aspx?eFNum=243112094070154192237169116251246249244108142233",
    note: "Direct link to our record on the Wyoming state registry.",
  },
  {
    title: "Certificate of Good Standing",
    body: "A Certificate of Good Standing issued by the Wyoming Secretary of State is available on request for institutions that require a state-issued document. Email us and we will provide a current copy, or it can be generated directly from the Wyoming state registry.",
    linkLabel: `Request via ${site.emails.ceo}`,
    href: `mailto:${site.emails.ceo}?subject=Certificate%20of%20Good%20Standing%20Request`,
    note: "Typically provided within one business day.",
  },
  {
    title: "EIN / IRS Documentation",
    body: "For banking and payment-processor onboarding, we provide our IRS EIN confirmation letter (CP 575) and W-9 directly to the requesting institution through a secure channel. We do not publish tax identifiers on the website for security reasons.",
    linkLabel: `Request via ${site.emails.ceo}`,
    href: `mailto:${site.emails.ceo}?subject=EIN%20%2F%20W-9%20Documentation%20Request`,
    note: "Sent bank-to-business only — never posted publicly.",
  },
  {
    title: "Registered Address & Contact Verification",
    body: "We are a Wyoming LLC operating from our physical office in Cartersville, Georgia — a standard structure for US eCommerce businesses. The entity name, physical address and contact emails listed here appear consistently across this website, our email domain (anthonyecom.com), and our business filings — the consistency banks look for during KYB checks.",
    linkLabel: site.address,
    href: "https://maps.google.com/?q=31+Herring+St,+Cartersville,+GA+30120",
    note: "Address shown on every page footer of this site.",
  },
];

export default function VerifyPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="hero-glow pointer-events-none absolute inset-0" />
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-44">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-volt">
              Business Verification
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-cream sm:text-6xl">
              Verify our LLC. <span className="text-volt">Officially.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              This page exists for banks, payment processors and partners performing
              due diligence on {site.legalName}. Everything below can be confirmed
              through official government sources — not just our word for it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-12">
          {/* Entity details */}
          <Reveal>
            <div className="glass-deep rounded-3xl p-7 sm:p-9">
              <p className="font-mono text-[11px] uppercase tracking-widest text-volt">
                Registered Entity Details
              </p>
              <dl className="mt-6 space-y-5">
                {entityRows.map((row) => (
                  <div key={row.label} className="border-b border-line pb-4 last:border-0 last:pb-0">
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-muted">
                      {row.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-cream">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          {/* How to verify */}
          <div className="space-y-5">
            {verifySteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 80}>
                <div className="card-hover sheen rounded-2xl border border-line bg-card p-7">
                  <div className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-volt/25 bg-volt/[0.07] font-mono text-xs text-volt">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h2 className="font-display text-lg font-semibold tracking-tight text-cream">
                        {step.title}
                      </h2>
                      <p className="mt-2.5 text-sm leading-relaxed text-muted">{step.body}</p>
                      <a
                        href={step.href}
                        target={step.href.startsWith("http") ? "_blank" : undefined}
                        rel={step.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-volt transition-opacity hover:opacity-70"
                      >
                        {step.linkLabel} →
                      </a>
                      <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted/60">
                        {step.note}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={150}>
          <div className="mt-12 rounded-2xl border border-line bg-surface/60 p-7 sm:p-9">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
              For verifying institutions
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-cream/85">
              If you are a bank, payment processor or platform verifying this business
              and need any document — Certificate of Good Standing, Articles of
              Organization, EIN confirmation, proof of address or a signed W-9 — email{" "}
              <a href={`mailto:${site.emails.ceo}`} className="text-volt">
                {site.emails.ceo}
              </a>{" "}
              from your institutional domain and we will respond within one business
              day. We are happy to complete verification calls during US business
              hours (Eastern Time).
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
