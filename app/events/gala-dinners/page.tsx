import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

import Hero from "@/components/sections/events/gala-dinners/Hero";
import Showcase from "@/components/sections/events/gala-dinners/Showcase";
import Stats from "@/components/sections/events/gala-dinners/Stats";
import Features from "@/components/sections/events/gala-dinners/Features";
import Benefits from "@/components/sections/events/gala-dinners/Benefits";
import Portfolio from "@/components/sections/events/gala-dinners/Portfolio";
import Technical from "@/components/sections/events/gala-dinners/Technical";
import Process from "@/components/sections/events/gala-dinners/Process";
import FAQ from "@/components/sections/events/gala-dinners/FAQ";

// SEO Search Intent Metadata
export const metadata: Metadata = {
  title: "Luxury Gala Dinners & Award Ceremony Production | Event Coordinators",
  description: "We design and execute luxury gala dinners, charity fundraisers, award nights, and VIP state banquets with custom production and flawless hospitality.",
  keywords: [
    "gala dinner production services",
    "charity fundraiser ball event planners",
    "award ceremonies event management",
    "black tie gala decoration",
    "VIP state banquets hospitality",
    "corporate annual dinner seating charts"
  ],
  openGraph: {
    title: "Luxury Gala Dinners & Award Ceremony Production | Event Coordinators",
    description: "We design and execute luxury gala dinners, charity fundraisers, award nights, and VIP state banquets with custom production and flawless hospitality.",
    type: "website",
  }
};

export default function GalaDinnersPage() {
  return (
    <div className="relative bg-white min-h-screen">
      {/* 1. Hero banner with Typewriter */}
      <Hero />

      {/* 2. Polaroids & Program Showcase */}
      <Showcase />

      {/* 3. Stats Strip */}
      <Stats />

      {/* 4. Benefits Asymmetric Stack */}
      <Benefits />

      {/* 5. Editorial Features Grid */}
      <Features />

      {/* 6. Selected Work Portfolio */}
      <Portfolio />

      {/* 7. Technical Staging & Audio Calibration */}
      <Technical />

      {/* 8. Vertical timeline Process */}
      <Process />

      {/* 9. Accordion FAQ Section */}
      <FAQ />

      {/* JSON-LD Structured Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Gala Dinner Production",
            "name": "Luxury Gala Dinners & Award Ceremony Production",
            "provider": {
              "@type": "Organization",
              "name": "DigitalDeveloper",
              "url": "https://digitaldeveloper.co"
            },
            "areaServed": "Worldwide",
            "description": "Luxury gala dinner design, award night staging, and charity ball event coordination.",
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
                "name": "How do you handle late seat charting changes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We deploy real-time digital table mapping software. Our hosts carry synchronized tablet devices at registration, allowing table swaps or new seating additions to resolve instantly at the door."
                }
              },
              {
                "@type": "Question",
                "name": "Can you accommodate extreme dietary requirements?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. We require dietary profiles 10 days before the gala dinner. We work directly with caterers to label plate tracks, and our waiters are fully briefed on allergen distributions."
                }
              },
              {
                "@type": "Question",
                "name": "Do you coordinate celebrity speakers and entertainment acts?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We manage talent acquisition end-to-end. This includes negotiating rider contracts, arranging green room hospitality, setting rehearsal times, and overseeing live sound/teleprompter cues."
                }
              },
              {
                "@type": "Question",
                "name": "Are you capable of hosting gala dinners in destination venues?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We manage destination galas worldwide. We coordinate local premium vendors, arrange attendee lodging, secure permits, and manage customs clearance for custom stage structures."
                }
              }
            ]
          })
        }}
      />

      {/* 11. Call to Action */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden text-center border-t border-slate-900">
        <div className="absolute right-0 top-0 w-80 h-80 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Sparkles className="w-10 h-10 text-orange-500 mx-auto mb-6" />
          <h2
            className="text-3xl sm:text-4xl font-black text-white uppercase tracking-widest mb-4"
            style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.1)" }}
          >
            Ready to Plan Your Gala?
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto mb-10">
            Get in touch to discuss your table capacities, culinary needs, and stage specifications. Our production coordinators will build a refined experience.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-white text-slate-950 hover:bg-slate-100 px-8 py-4 rounded-full font-bold text-xs tracking-wide transition-all shadow-lg hover:-translate-y-0.5"
          >
            Schedule Consultation
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
