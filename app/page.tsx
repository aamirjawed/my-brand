import type { Metadata } from "next";
import dynamic from "next/dynamic";

import Hero from "@/components/sections/Hero";
const AboutSection = dynamic(() => import("@/components/sections/About"));
const ServicesSection = dynamic(() => import("@/components/sections/Services"));
const WebDevelopmentSection = dynamic(() => import("@/components/sections/WebDevelopment"));
const SeoSection = dynamic(() => import("@/components/sections/SeoSection"));
const GraphicDesignSection = dynamic(() => import("@/components/sections/GraphicDesignSection"));
const ContentCreationSection = dynamic(() => import("@/components/sections/ContentCreationSection"));
const EventManagementSection = dynamic(() => import("@/components/sections/EventManagementSection"));
const TrustSection = dynamic(() => import("@/components/sections/TrustSection"));
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"));
const ContactBanner = dynamic(() => import("@/components/sections/ContactBanner"));

export const metadata: Metadata = {
  title: "DigitalDeveloper | Offshore Software Development & Custom Web Agency",
  description: "Offshore software development company serving USA, UK, Canada, Australia & UAE. We build custom software, web applications & enterprise products.",
  keywords: [
    "offshore software development company India",
    "outsource software development to India",
    "custom software development services",
    "offshore product engineering studio",
    "hire dedicated web developers India",
    "software outsourcing partner India",
    "AI software development agency",
    "hire Next.js developers India",
    "enterprise web app development company"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DigitalDeveloper | Offshore Software Development & Custom Web Agency",
    description: "Offshore software development company serving USA, UK, Canada, Australia & UAE. We build custom software, web applications & enterprise products.",
    url: "/",
    type: "website",
  }
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* JSON-LD Structured Schema Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://digitaldeveloper.com/#organization",
                "name": "DigitalDeveloper",
                "url": "https://digitaldeveloper.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://digitaldeveloper.com/favicon.png"
                },
                "email": "hello@digitaldeveloper.com",
                "areaServed": [
                  {
                    "@type": "AdministrativeArea",
                    "name": "United States"
                  },
                  {
                    "@type": "AdministrativeArea",
                    "name": "United Kingdom"
                  },
                  {
                    "@type": "AdministrativeArea",
                    "name": "Canada"
                  },
                  {
                    "@type": "AdministrativeArea",
                    "name": "Australia"
                  },
                  {
                    "@type": "AdministrativeArea",
                    "name": "United Arab Emirates"
                  },
                  {
                    "@type": "AdministrativeArea",
                    "name": "India"
                  }
                ],
                "sameAs": [
                  "https://www.linkedin.com/company/digitaldeveloper",
                  "https://twitter.com/digitaldeveloper"
                ]
              },
              {
                "@type": "WebSite",
                "@id": "https://digitaldeveloper.com/#website",
                "url": "https://digitaldeveloper.com",
                "name": "DigitalDeveloper",
                "publisher": {
                  "@id": "https://digitaldeveloper.com/#organization"
                }
              }
            ]
          })
        }}
      />

      <Hero />
      <AboutSection />
      <ServicesSection />
      <WebDevelopmentSection />
      <SeoSection />
      <GraphicDesignSection />
      <ContentCreationSection />
      <EventManagementSection />
      <TrustSection />
      <TestimonialsSection />
      <ContactBanner />
    </div>
  );
}