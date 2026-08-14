import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/data";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Anthony Ecom — AI-Powered Growth Partner for eCommerce Brands",
    template: "%s — Anthony Ecom",
  },
  description:
    "Anthony Ecom pairs senior media buyers with proprietary AI systems to scale 6, 7 & 8-figure eCommerce brands profitably. Google Ads, Meta, Microsoft Ads, email & CRO — optimized to contribution margin, not vanity ROAS.",
  keywords: [
    "AI marketing agency",
    "eCommerce growth agency",
    "Google Ads agency",
    "DTC marketing",
    "performance marketing",
  ],
  openGraph: {
    title: "Anthony Ecom — AI-Powered Growth Partner for eCommerce Brands",
    description:
      "Senior strategists + proprietary AI systems. Profit-first growth for eCommerce brands that refuse to plateau.",
    url: site.domain,
    siteName: "Anthony Ecom",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anthony Ecom — AI-Powered Growth Partner for eCommerce Brands",
    description:
      "Senior strategists + proprietary AI systems. Profit-first growth for eCommerce brands that refuse to plateau.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: site.name,
              legalName: site.legalName,
              url: site.domain,
              logo: `${site.domain}/icon.svg`,
              founder: { "@type": "Person", name: site.founder, jobTitle: "Founder & CEO" },
              address: {
                "@type": "PostalAddress",
                streetAddress: "31 Herring St",
                addressLocality: "Cartersville",
                addressRegion: "GA",
                postalCode: "30120",
                addressCountry: "US",
              },
              contactPoint: [
                { "@type": "ContactPoint", email: site.emails.ceo, contactType: "CEO Mail" },
                { "@type": "ContactPoint", email: site.emails.info, contactType: "customer service" },
                { "@type": "ContactPoint", email: site.emails.support, contactType: "technical support" },
              ],
            }),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
