import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { SupplyLine } from "@/components/supply-line";
import { WhoWeAre } from "@/components/who-we-are";
import { GlobalSourcing } from "@/components/global-sourcing";
import { Products } from "@/components/products";
import { Industries } from "@/components/industries";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Logistics } from "@/components/logistics";
import { Contact } from "@/components/contact";
import { ADDRESS, PHONE, SITE } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// Organization structured data — carries the real name/address/phone so search
// engines can match this business to local and map results.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  telephone: [PHONE.landline.href, PHONE.mobile.href].map((h) =>
    h.replace("tel:", ""),
  ),
  address: {
    "@type": "PostalAddress",
    streetAddress: `${ADDRESS.street}, ${ADDRESS.locality}`,
    addressLocality: ADDRESS.city,
    postalCode: ADDRESS.postalCode,
    addressRegion: ADDRESS.region,
    addressCountry: ADDRESS.countryCode,
  },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "Sri Lanka" },
  ],
  knowsAbout: [
    "Imported paper",
    "C1S and C2S paper",
    "LWC paper",
    "Wet strength chromo",
    "Wood free paper",
    "Bleached kraft paper",
    "Virgin kraft paper",
    "SBS board",
    "FBB board",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // Content is a static literal defined above — no user input is interpolated.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <SupplyLine />
      <WhoWeAre />
      <GlobalSourcing />
      {/* Industries precedes Products: a buyer asks "do you serve someone like
          me?" before "what do you sell?" */}
      <Industries />
      <Products />
      <Logistics />
      <WhyChooseUs />
      <Contact />
    </>
  );
}
