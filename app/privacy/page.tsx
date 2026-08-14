import type { Metadata } from "next";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Anthony Ecom Buy-Up LLC collects, uses and protects your information.",
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-8 sm:pt-44">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-volt">Legal</p>
      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-cream sm:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-4 font-mono text-xs uppercase tracking-widest text-muted">
        Last updated: August 2026
      </p>
      <div className="prose-invert mt-10 space-y-8 text-sm leading-relaxed text-muted sm:text-base">
        <div>
          <h2 className="font-display text-xl font-semibold text-cream">1. Who we are</h2>
          <p className="mt-3">
            {site.legalName} (&ldquo;Anthony Ecom&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a digital
            marketing agency located at {site.address}. This policy explains how we handle
            information collected through this website and in the course of providing our services.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-cream">2. Information we collect</h2>
          <p className="mt-3">
            When you submit our contact form we collect your name, email address, store URL,
            approximate monthly revenue and any message you choose to send. We may also collect
            standard technical data (browser type, pages visited) through privacy-respecting
            analytics to improve the site.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-cream">3. How we use it</h2>
          <p className="mt-3">
            We use the information you provide solely to respond to your inquiry, prepare your
            growth audit, and — if we work together — deliver our services. We do not sell,
            rent or trade your personal information to third parties.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-cream">4. Client account data</h2>
          <p className="mt-3">
            If you grant us access to advertising or analytics accounts, that data is used
            exclusively to manage and report on your campaigns. Case studies published on this
            site are anonymized and never disclose confidential client data without written consent.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-cream">5. Data retention &amp; security</h2>
          <p className="mt-3">
            We retain inquiry data only as long as needed to serve you and comply with legal
            obligations. Access to client data is limited to team members who need it to do
            their work.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-cream">6. Your rights</h2>
          <p className="mt-3">
            You may request access to, correction of, or deletion of your personal information at
            any time by emailing{" "}
            <a href={`mailto:${site.emails.info}`} className="text-volt">
              {site.emails.info}
            </a>
            .
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-cream">7. Contact</h2>
          <p className="mt-3">
            Questions about this policy: {site.emails.info} · {site.address}
          </p>
        </div>
      </div>
    </section>
  );
}
