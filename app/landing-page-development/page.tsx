import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Rocket } from "lucide-react";
import { SITE_URL } from "@/lib/constants";

import dynamic from "next/dynamic";

// Import modular sections from components/sections/landing-page
import LandingHero from "@/components/sections/landing-page/LandingHero";
const LandingShowcase = dynamic(() => import("@/components/sections/landing-page/LandingShowcase"));
const InteractiveLandingDemo = dynamic(() => import("@/components/sections/landing-page/InteractiveLandingDemo"));
const LandingBenefits = dynamic(() => import("@/components/sections/landing-page/LandingBenefits"));
const LandingServices = dynamic(() => import("@/components/sections/landing-page/LandingServices"));
const LandingPortfolio = dynamic(() => import("@/components/sections/landing-page/LandingPortfolio"));
const LandingIndustries = dynamic(() => import("@/components/sections/landing-page/LandingIndustries"));
const LandingProcessSteps = dynamic(() => import("@/components/sections/landing-page/LandingProcessSteps"));
const LandingTechnical = dynamic(() => import("@/components/sections/landing-page/LandingTechnical"));
const LandingFAQ = dynamic(() => import("@/components/sections/landing-page/LandingFAQ"));

// Define search intent metadata
export const metadata: Metadata = {
  title: "Landing Page Development Services | USA, UK, Canada",
  description: "Hire expert landing page developers for high-converting custom pages (USA/UK/Canada). CRO, A/B testing & <2.5s speed. Offshore rates $25–50/hr.",
  keywords: [
    "landing page development services",
    "hire landing page developer",
    "custom landing page design",
    "high converting landing page",
    "landing page design agency",
    "CRO landing page",
    "Webflow landing page",
    "WordPress landing page",
    "USA landing page developer",
    "UK landing page designer"
  ],
  alternates: {
    canonical: "/landing-page-development",
  },
  openGraph: {
    title: "Landing Page Development Services | USA, UK, Canada",
    description: "Hire expert landing page developers for high-converting custom pages (USA/UK/Canada). CRO, A/B testing & <2.5s speed. Offshore rates $25–50/hr.",
    type: "website",
  }
};


export default function LandingPageDevelopment() {
  return (
    <div className="relative bg-white min-h-screen">
      {/* 1. Hero Section (Intent 1) */}
      <LandingHero />

      {/* 2. Overlapping Showcase (Core messaging context) */}
      <LandingShowcase />

      {/* Interactive Sandbox Simulator */}
      <InteractiveLandingDemo />

      {/* 3. Why Businesses Need High-Converting Landing Pages (Intent 2) */}
      <LandingBenefits />

      {/* 4. What's Included in Our Services (Intent 3) */}
      <LandingServices />

      {/* 5. Landing Pages We've Built (Intent 4) */}
      <LandingPortfolio />

      {/* 6. Landing Pages for Different Industries (Intent 5) */}
      <LandingIndustries />

      {/* 7. Our Process Roadmap (Intent 6) */}
      <LandingProcessSteps />

      {/* 8. Technical SEO & Speed (Intent 7) */}
      <LandingTechnical />

      {/* 9. Frequently Asked Questions (Intent 8) */}
      <LandingFAQ />

      {/* JSON-LD Structured Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Landing Page Development Services for USA, UK, Canada Clients",
            "serviceType": "Web Development - Landing Pages",
            "provider": {
              "@type": "Organization",
              "name": "DigitalDeveloper",
              "image": `${SITE_URL}/favicon.png`,
              "url": SITE_URL,
              "email": "hello@digitaldeveloper.com",
              "areaServed": ["USA", "UK", "Canada", "Australia", "UAE"]
            },
            "description": "High-converting landing page development for USA, UK, Canada, Australia, UAE clients. CRO, A/B testing, Webflow, WordPress, React. $25–50/hr offshore pricing.",
            "areaServed": ["USA", "UK", "Canada", "Australia", "UAE"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Landing Page Development Packages",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Starter Landing Page Package",
                    "description": "1 custom high-converting page, mobile-first design, basic CRO, 5–7 days delivery",
                    "price": "1500",
                    "priceCurrency": "USD"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Professional Landing Page Package",
                    "description": "1-2 conversion-optimized pages, full A/B testing setup, CRM integration (HubSpot/Salesforce), GA4/Meta Pixel integration, 10–14 days delivery",
                    "price": "3000",
                    "priceCurrency": "USD"
                  }
                }
              ]
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the cost of landing page development for USA/UK clients?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Landing page development costs $1,500–5,000 for a single high-converting page. Our offshore pricing is $25–50/hr vs $150–200/hr US agencies. Enterprise suites (3–5 pages) cost $6,000–12,000. We include CRO, A/B testing, and CRM integration in all packages."
                }
              },
              {
                "@type": "Question",
                "name": "Do you work with international clients (USA, UK, Canada, Australia, UAE)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, 60% of our clients are international (USA 35%, UK 15%, Canada/Australia/UAE 10%). We support US/UK timezones, use agile methodology, provide weekly updates, and have built 200+ pages for global clients."
                }
              },
              {
                "@type": "Question",
                "name": "What platforms do you use (Webflow, WordPress, React, HubSpot)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We specialize in Webflow (no-code, fast deployment), WordPress (custom themes), React (custom builds), and HubSpot (CRM-integrated). 70% of projects use Webflow for speed and flexibility. All pages are mobile-responsive with sub-2.5s load times."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to build a high-converting landing page?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A standard landing page takes 5–7 days (design 2–3 days, development 2–3 days, QA 1 day). Complex pages with A/B testing and CRM integration take 10–14 days. We offer rush delivery (3–4 days) for urgent campaigns."
                }
              },
              {
                "@type": "Question",
                "name": "Do you include CRO and A/B testing in your services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all our landing pages include CRO (conversion rate optimization) with A/B testing setup, analytics tracking, and behavior analysis. We achieve average 8–15% conversion rates (vs 2–5% industry average) through message match, friction reduction, and data-driven improvements."
                }
              },
              {
                "@type": "Question",
                "name": "What conversion rates can I expect from your landing pages?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our landing pages achieve 8–15% average conversion rates for SaaS lead gen, 6–10% for eCommerce, and 10–20% for B2B. Industry average is 2–5%. We optimize through CRO, A/B testing, speed (<2.5s), and social proof."
                }
              },
              {
                "@type": "Question",
                "name": "Why is your pricing lower than US/UK agencies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We are a remote offshore team with $25–50/hr pricing vs $150–200/hr US agencies like OuterBox and AdVenture Media. This provides 60–75% cost savings for the exact same high-end engineering quality. We work in US/UK timezones with full daily communication."
                }
              },
              {
                "@type": "Question",
                "name": "Do you integrate CRM and analytics (HubSpot, Salesforce, Google Analytics)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we integrate all landing pages with your existing marketing stack, including HubSpot, Salesforce, ActiveCampaign, Mailchimp, Google Analytics 4, and Meta Pixel."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide post-launch support and optimization?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide 30 days of free post-launch support to monitor analytics and fix any bugs. We also offer monthly optimization retainers for continuous A/B testing."
                }
              }
            ]
          })
        }}
      />

      {/* 10. Mid-Page Mini CTA */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden text-center border-t border-slate-900">
        <div className="absolute right-0 top-0 w-80 h-80 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Rocket className="w-10 h-10 text-orange-500 mx-auto mb-6" />

          <h2
            className="text-3xl sm:text-4xl font-black text-white uppercase tracking-widest mb-4"
            style={{
              textShadow: "2px 2px 0px rgba(0,0,0,0.1)"
            }}
          >
            Ready to Drive More Conversions?
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto mb-10">
            Tell us about your startup or campaign goals. Our custom design team will wireframe a bespoke landing page strategy tailored to your exact industry.
          </p>

          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-white text-slate-950 hover:bg-slate-100 px-8 py-4 rounded-full font-bold text-xs tracking-wide transition-all shadow-lg hover:-translate-y-0.5"
          >
            Claim Free Wireframe Proposal
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
