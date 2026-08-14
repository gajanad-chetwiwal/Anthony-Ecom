import type { Metadata } from "next";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing the use of the Anthony Ecom website and services.",
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-8 sm:pt-44">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-volt">Legal</p>
      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-cream sm:text-5xl">
        Terms of Service
      </h1>
      <p className="mt-4 font-mono text-xs uppercase tracking-widest text-muted">
        Last updated: August 2026
      </p>
      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted sm:text-base">
        <div>
          <h2 className="font-display text-xl font-semibold text-cream">1. Agreement</h2>
          <p className="mt-3">
            By using this website, operated by {site.legalName} ({site.address}), you agree to
            these terms. Services engagements are governed by a separate written agreement signed
            by both parties.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-cream">2. Services</h2>
          <p className="mt-3">
            Anthony Ecom provides digital marketing services including paid media management,
            retention marketing and conversion optimization. Engagements run month-to-month
            unless otherwise agreed in writing.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-cream">3. No performance guarantee</h2>
          <p className="mt-3">
            Results shown on this site reflect specific historical engagements. Advertising
            performance depends on many factors outside any agency&apos;s control — market
            conditions, product economics, platform changes — and past results do not guarantee
            future outcomes.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-cream">4. Intellectual property</h2>
          <p className="mt-3">
            Site content, branding and methodology descriptions are the property of{" "}
            {site.legalName}. Deliverables created for clients under a services agreement belong
            to the client as specified in that agreement.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-cream">5. Limitation of liability</h2>
          <p className="mt-3">
            To the maximum extent permitted by law, {site.legalName} is not liable for indirect,
            incidental or consequential damages arising from use of this website.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-cream">6. Contact</h2>
          <p className="mt-3">
            Questions about these terms:{" "}
            <a href={`mailto:${site.emails.info}`} className="text-volt">
              {site.emails.info}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
