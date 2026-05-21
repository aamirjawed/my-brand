import React from "react";
import { Metadata } from "next";

import dynamic from "next/dynamic";

import Hero from "@/components/sections/events/league-management/Hero";
const Showcase = dynamic(() => import("@/components/sections/events/league-management/Showcase"));
const Stats = dynamic(() => import("@/components/sections/events/league-management/Stats"));
const Services = dynamic(() => import("@/components/sections/events/league-management/Services"));
const WhyMatters = dynamic(() => import("@/components/sections/events/league-management/WhyMatters"));
const LeagueFormats = dynamic(() => import("@/components/sections/events/league-management/LeagueFormats"));
const Process = dynamic(() => import("@/components/sections/events/league-management/Process"));
const WhyChooseUs = dynamic(() => import("@/components/sections/events/league-management/WhyChooseUs"));
const Gallery = dynamic(() => import("@/components/sections/events/league-management/Gallery"));
const FAQ = dynamic(() => import("@/components/sections/events/league-management/FAQ"));
const CTA = dynamic(() => import("@/components/sections/events/league-management/CTA"));

// SEO Target Metadata
export const metadata: Metadata = {
  title: "League Management Services | Professional Tournament & Event Coordination",
  description: "Professional league management services for sports tournaments and competitions including scheduling, registrations, coordination, operations, and event execution.",
  keywords: [
    "League Management Services",
    "sports league management",
    "tournament management services",
    "league event coordination",
    "competition management",
    "league scheduling services",
    "sports event planning",
    "team coordination",
    "event operations management",
    "league organization services",
    "sports tournament planning"
  ],
  openGraph: {
    title: "League Management Services | Professional Tournament & Event Coordination",
    description: "Professional league management services for sports tournaments and competitions including scheduling, registrations, coordination, operations, and event execution.",
    type: "website",
  }
};

export default function LeagueManagementPage() {
  return (
    <div className="relative bg-white min-h-screen">

      {/* SECTION 1 — HERO SECTION */}
      <Hero />

      {/* SECTION 1.5 — SHOWCASE */}
      <Showcase />

      {/* SECTION 1.7 — STATS */}
      <Stats />

      {/* SECTION 3 — SERVICES OVERVIEW */}
      <Services />

      {/* SECTION 2 — WHY LEAGUE MANAGEMENT MATTERS */}
      <WhyMatters />

      {/* SECTION 4 — EVENT CATEGORIES / FORMATS */}
      <LeagueFormats />

      {/* SECTION 5 — OUR TOURNAMENT PROCESS */}
      <Process />

      {/* SECTION 6 — WHY CHOOSE US */}
      <WhyChooseUs />

      {/* SECTION 7 — GALLERY / EVENT SHOWCASE */}
      <Gallery />

      {/* SECTION 9 — FAQ SECTION */}
      <FAQ />

      {/* SECTION 10 — CTA SECTION */}
      <CTA />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "League Management Services",
            "name": "League Management Services",
            "provider": {
              "@type": "Organization",
              "name": "DigitalDeveloper",
              "url": "https://digitaldeveloper.co"
            },
            "areaServed": "Worldwide",
            "description": "Professional league and tournament management services including scheduling, registrations, coordination, operations, and event execution."
          })
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What are league management services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "League management services help organize tournaments and competitions including scheduling, team coordination, operations, and event execution."
                }
              },
              {
                "@type": "Question",
                "name": "Do you handle tournament scheduling?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, tournament scheduling and fixture coordination are included as part of league management services."
                }
              },
              {
                "@type": "Question",
                "name": "Can you handle team registrations?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. We launch customized digital portals for roster registration, team captain onboarding, waiver collection, and bracket check-ins to streamline registration before the games begin."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide venue coordination?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we manage all venue setup aspects including court/field marking, scoreboard positioning, timing system configuration, spectator safety management, and referee operations."
                }
              },
              {
                "@type": "Question",
                "name": "Can you manage esports tournaments?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we coordinate esports tournaments with custom gaming server settings, observer desks, broadcast casting integrations, and live stats API feeds for platforms like Twitch and YouTube."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
