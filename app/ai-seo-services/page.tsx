import React from "react";
import Link from "next/link";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import type { Metadata } from "next";

import SeoHero from "@/components/sections/seo/SeoHero";
import SeoShowcase from "@/components/sections/seo/SeoShowcase";
import SeoWhatIs from "@/components/sections/seo/SeoWhatIs";
import SeoStats from "@/components/sections/seo/SeoStats";
import SeoBenefits from "@/components/sections/seo/SeoBenefits";
import SeoInteractiveDemo from "@/components/sections/seo/SeoInteractiveDemo";
import SeoFeatures from "@/components/sections/seo/SeoFeatures";
import SeoProcessSteps from "@/components/sections/seo/SeoProcessSteps";
import SeoCaseStudies from "@/components/sections/seo/SeoCaseStudies";
import SeoFAQ from "@/components/sections/seo/SeoFAQ";

export const metadata: Metadata = {
  title: "AI SEO Services | Dominate Search Rankings",
  description: "Leverage our premium AI SEO services to scale your organic traffic, dominate search rankings, and maximize ROI with machine-precision intelligence.",
};

export default function AiSeoPage() {
  return (
    <div className="relative bg-white min-h-screen">
      {/* 1. Hero — typewriter with SEO-specific rotating words */}
      <SeoHero />

      {/* 2. Showcase — keyword rankings + traffic chart visual + narrative copy */}
      <SeoShowcase />

      {/* 3. What is AI SEO? - narrative definition */}
      <SeoWhatIs />

      {/* 4. Stats Strip — 312% traffic, 94% page 1, 500+ sites, 8x ROI */}
      <SeoStats />

      {/* 5. Benefits of AI SEO */}
      <SeoBenefits />

      {/* 6. Interactive SEO Audit Sandbox */}
      <SeoInteractiveDemo />

      {/* 7. Services (Features) — full bento-box grid of all AI SEO capabilities */}
      <SeoFeatures />

      {/* 8. Process Timeline — vertical zigzag 6-step SEO pipeline */}
      <SeoProcessSteps />

      {/* 9. Case Studies — Heavy content SEO friendly non-card layout */}
      <SeoCaseStudies />

      {/* 10. FAQ — 5 detailed answers about AI SEO, timelines, guarantees */}
      <SeoFAQ />

      {/* JSON-LD Structured Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "AI SEO Services",
            "name": "AI SEO Services",
            "provider": {
              "@type": "Organization",
              "name": "DigitalDeveloper",
              "url": "https://digitaldeveloper.co"
            },
            "areaServed": "Worldwide",
            "description": "AI-powered SEO services focused on technical optimization, keyword research, content strategy, and organic growth.",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock"
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
                "name": "How long does it take to see results from SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Genuine, algorithm-proof SEO results typically begin appearing between months 3 and 6, with significant compounding growth becoming highly visible between months 6 and 12. Timelines vary based on your domain's existing authority and the volume of technical issues we need to resolve first. As a specialized AI SEO agency, our clients typically see first measurable organic traffic increases within 60–90 days."
                }
              },
              {
                "@type": "Question",
                "name": "How is your AI SEO different from a traditional SEO agency?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Traditional SEO agencies rely on manual keyword research, generic content writing, and slow link outreach cycles that take months to produce any data. Our AI-powered SEO services process search intent signals, competitor content gaps, and real-time algorithm patterns simultaneously. This means we execute precise AI SEO optimization faster and at a fraction of the cost — while continuously learning as Google evolves."
                }
              },
              {
                "@type": "Question",
                "name": "Will my rankings drop if I stop your SEO service?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Unlike paid advertising that stops instantly the moment you end a campaign, SEO investments produce compounding, durable results. The high-quality content we publish and the technical foundations we build continue delivering organic traffic long after campaigns end. However, search is competitive — an ongoing partnership with a dedicated AI SEO company ensures you hold and grow your positions rather than ceding ground to competitors."
                }
              },
              {
                "@type": "Question",
                "name": "Do you guarantee first page rankings?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Any agency that guarantees specific Google rankings is either lying or using black-hat tactics that will eventually destroy your domain. What we guarantee is a rigorous, best-practice methodology. Our AI SEO experts deliver transparent monthly reporting on all ranking movements and possess a strong track record of delivering measurable first-page results across hundreds of competitive markets."
                }
              },
              {
                "@type": "Question",
                "name": "Can you optimize for AI search platforms like ChatGPT and Perplexity?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes — this is increasingly critical. We optimize your content for AI overview visibility using structured data markup, authoritative entity building, and E-E-A-T signal strengthening. Our SEO automation services cover both traditional search dominance and emerging AI search visibility simultaneously, ensuring your brand establishes strong topical authority everywhere."
                }
              }
            ]
          })
        }}
      />

      {/* 11. CTA */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden text-center border-t border-slate-900">
        <div className="absolute right-0 top-0 w-80 h-80 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <TrendingUp className="w-10 h-10 text-orange-500 mx-auto mb-6" />
          <h2
            className="text-3xl sm:text-4xl font-black text-white uppercase tracking-widest mb-4"
            style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.1)" }}
          >
            Ready to Dominate Page One?
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto mb-10">
            Tell us your target keywords and industry. Our AI SEO team will deliver a free audit and custom growth roadmap tailored to your exact competitive landscape.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-white text-slate-950 hover:bg-slate-100 px-8 py-4 rounded-full font-bold text-xs tracking-wide transition-all shadow-lg hover:-translate-y-0.5"
          >
            Claim Free SEO Audit
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
