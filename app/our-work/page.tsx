import React from "react";
import { Metadata } from "next";
import OurWorkClient from "./OurWorkClient";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Work | DigitalDeveloper Portfolio & Case Studies",
  description: "Explore our collection of high-performance custom websites, web applications, UI/UX designs, and enterprise SEO solutions engineered by DigitalDeveloper.",
  keywords: [
    "DigitalDeveloper portfolio",
    "our work web development",
    "custom website case studies",
    "UI UX design examples",
    "SEO results portfolio",
    "next.js developer work",
    "responsive interface portfolio"
  ],
  alternates: {
    canonical: "/our-work",
  },
  openGraph: {
    title: "Our Work | DigitalDeveloper Portfolio & Case Studies",
    description: "Explore our collection of high-performance custom websites, web applications, UI/UX designs, and enterprise SEO solutions engineered by DigitalDeveloper.",
    type: "website",
    url: "/our-work"
  }
};

const PROJECTS_SCHEMA = [
  {
    title: "Dynamic Event Ticket Booking & Gateway Platform",
    description: "A secure, modern ticket booking platform featuring automated Razorpay payment gateway integration and automatic transactional email dispatch to buyers.",
    liveLink: "https://fashlyner.live",
    categoryLabel: "Web Development",
    imageSrc: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "EventFlow - Guest Check-in & QR Dashboard",
    description: "A comprehensive event attendee management platform supporting pre-registration, real-time check-ins, custom QR code passes, and an administrative dashboard.",
    liveLink: "https://eventflow-iiio.vercel.app/",
    categoryLabel: "Event Management",
    imageSrc: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function OurWorkPage() {
  return (
    <main className="flex-grow">
      <OurWorkClient />
      
      {/* JSON-LD Structured Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "DigitalDeveloper Portfolio",
            "description": "A collection of high-performance websites, UI/UX designs, and SEO solutions engineered by DigitalDeveloper.",
            "itemListElement": PROJECTS_SCHEMA.map((proj, idx) => ({
              "@type": "ListItem",
              "position": idx + 1,
              "item": {
                "@type": "CreativeWork",
                "name": proj.title,
                "headline": proj.title,
                "description": proj.description,
                "image": proj.imageSrc,
                "genre": proj.categoryLabel,
                "url": proj.liveLink,
                "creator": {
                  "@type": "Organization",
                  "name": "DigitalDeveloper",
                  "url": SITE_URL
                }
              }
            }))
          })
        }}
      />
    </main>
  );
}
