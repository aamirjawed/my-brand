import React from "react";
import { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

import Hero from "@/components/sections/event-venue-selection/Hero";
import Showcase from "@/components/sections/event-venue-selection/Showcase";
import Stats from "@/components/sections/event-venue-selection/Stats";
import Services from "@/components/sections/event-venue-selection/Services";
import WhyMatters from "@/components/sections/event-venue-selection/WhyMatters";
import VenueTypes from "@/components/sections/event-venue-selection/VenueTypes";
import Process from "@/components/sections/event-venue-selection/Process";
import WhyChooseUs from "@/components/sections/event-venue-selection/WhyChooseUs";
import FAQ from "@/components/sections/event-venue-selection/FAQ";
import CTA from "@/components/sections/event-venue-selection/CTA";

// SEO Search Intent Metadata
export const metadata: Metadata = {
  title: "Venue Selection Services | Find the Perfect Event Venue",
  description: "Professional venue selection services for weddings, corporate events, conferences, and private occasions with expert planning and venue coordination.",
  keywords: [
    "event venue selection",
    "venue booking assistance",
    "wedding venue selection",
    "corporate event venues",
    "venue planning services",
    "event venue consultation",
    "venue management services",
    "event location planning",
    "venue coordination",
    "professional venue selection"
  ],
  alternates: {
    canonical: "/event-venue-selection",
  },
  openGraph: {
    title: "Venue Selection Services | Find the Perfect Event Venue",
    description: "Professional venue selection services for weddings, corporate events, conferences, and private occasions with expert planning and venue coordination.",
    type: "website",
  }
};

export default function EventVenueSelectionPage() {
  return (
    <div className="relative bg-white min-h-screen">
      {/* Search Engine Crawler H1 Tag */}
      <h1 className="sr-only">Professional Venue Selection Services for Events</h1>

      {/* SECTION 1 — HERO SECTION */}
      <Hero />

      {/* SECTION 1.5 — SHOWCASE */}
      <Showcase />

      {/* SECTION 1.7 — STATS */}
      <Stats />

      {/* SECTION 3 — SERVICES OVERVIEW */}
      <Services />

      {/* SECTION 2 — WHY VENUE SELECTION MATTERS */}
      <WhyMatters />

      {/* SECTION 4 — EVENT CATEGORIES / VENUE TYPES */}
      <VenueTypes />

      {/* SECTION 5 — OUR VENUE SELECTION PROCESS */}
      <Process />

      {/* SECTION 6 — WHY CHOOSE US */}
      <WhyChooseUs />

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
            "serviceType": "Venue Selection Services",
            "name": "Venue Selection Services",
            "provider": {
              "@type": "Organization",
              "name": "DigitalDeveloper",
              "url": SITE_URL
            },
            "areaServed": "Worldwide",
            "description": "Professional venue selection services for weddings, corporate events, conferences, and private occasions."
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
                "name": "How do venue selection services work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Venue selection services help businesses and individuals choose suitable venues based on event size, budget, location, and event requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Can you help with venue booking?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, venue booking assistance and coordination are included as part of the venue selection process."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
