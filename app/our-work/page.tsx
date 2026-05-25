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
    title: "Luxury E-Commerce Headless Storefront",
    description: "A state-of-the-art headless storefront using Next.js and Shopify API. Features instant transitions, custom visual product customizers, and an ultra-lightweight check-out process.",
    liveLink: "https://zenith-apparel-demo.vercel.app",
    categoryLabel: "Web Development",
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "B2B Cloud Analytics Dashboard Design",
    description: "An intuitive data visualization workspace designed for cloud infrastructure administrators. Focused on high-density information layouts, customizable widgets, and sleek dark mode aesthetics.",
    liveLink: "https://nova-dashboard-demo.vercel.app",
    categoryLabel: "UI/UX & Design",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Enterprise AI SEO Optimization & Strategy",
    description: "Designed and executed a modern AI-driven search strategy for a competitive fintech workspace. Re-architected site hierarchy, deployed programmatic semantic schema markup.",
    liveLink: "https://ascend-fintech-demo.vercel.app",
    categoryLabel: "AI SEO & Growth",
    imageSrc: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Fintech Rebrand & Dynamic Asset System",
    description: "Developed a modern, trust-focused brand identity system for a leading investment firm. Created logos, tailored typography sets, a CSS-integrated color framework.",
    liveLink: "https://hyperion-branding-demo.vercel.app",
    categoryLabel: "UI/UX & Design",
    imageSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Real-Time DevOps Telemetry Dashboard",
    description: "A highly performant single page application for displaying real-time cluster workloads. Uses WebSocket endpoints, canvas-based memory layouts, and optimized React virtual list rendering.",
    liveLink: "https://veloce-telemetry-demo.vercel.app",
    categoryLabel: "Web Development",
    imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop"
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
