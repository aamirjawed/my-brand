import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

// Import modular sections from components/sections/static-website
import StaticHero from "@/components/sections/static-website/StaticHero";
import StaticShowcase from "@/components/sections/static-website/StaticShowcase";
import StaticStats from "@/components/sections/static-website/StaticStats";
import StaticInteractiveDemo from "@/components/sections/static-website/StaticInteractiveDemo";
import StaticComparison from "@/components/sections/static-website/StaticComparison";
import StaticProcessSteps from "@/components/sections/static-website/StaticProcessSteps";
import StaticFAQ from "@/components/sections/static-website/StaticFAQ";

// Define search intent metadata
export const metadata: Metadata = {
  title: "Static Website Development Services | Fast & SEO-Friendly Websites",
  description: "We build fast, secure, and SEO-friendly static websites optimized for performance, user experience, and business growth.",
  keywords: [
    "Static Website Development Services",
    "static website developer",
    "custom static websites",
    "SEO-friendly static websites",
    "fast-loading business websites",
    "responsive static website design",
    "static website development company",
    "lightweight business websites",
    "high-performance websites",
    "static web design services",
    "modern static websites"
  ],
  openGraph: {
    title: "Static Website Development Services | Fast & SEO-Friendly Websites",
    description: "We build fast, secure, and SEO-friendly static websites optimized for performance, user experience, and business growth.",
    type: "website",
  }
};

export default function StaticWebsiteDevelopmentPage() {
  return (
    <div className="relative bg-white min-h-screen">
      {/* 1. Hero Section */}
      <StaticHero />

      {/* 2. Device Showcase + Copywriting */}
      <StaticShowcase />

      {/* 3. Animated Stats Strip */}
      <StaticStats />

      {/* 4. Interactive Architecture Sandbox */}
      <StaticInteractiveDemo />

      {/* 4.5. Static vs Dynamic Comparison Block */}
      <StaticComparison />

      {/* 5. Vertical Zigzag Process Timeline */}
      <StaticProcessSteps />

      {/* 6. Accordion FAQ */}
      <StaticFAQ />

      {/* JSON-LD Structured Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Static Website Development",
            "name": "Static Website Development Services",
            "provider": {
              "@type": "Organization",
              "name": "DigitalDeveloper",
              "url": "https://digitaldeveloper.co"
            },
            "areaServed": "Worldwide",
            "description": "Fast, secure, and SEO-friendly static website development services designed for performance, scalability, and business growth.",
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
                "name": "What is a static website?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A static website is a lightweight business website made of pre-rendered HTML, CSS, and JavaScript files served directly from a global Content Delivery Network (CDN). Unlike traditional dynamic sites that query databases on every visit, static sites deliver instant page speed and require zero server-side calculations."
                }
              },
              {
                "@type": "Question",
                "name": "Are static websites faster?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, static websites are significantly faster because they bypass database processing and server-side rendering entirely. Since pages are already compiled and stored at the network edge, users receive files in milliseconds, resulting in perfect Core Web Vitals and stellar user experience."
                }
              },
              {
                "@type": "Question",
                "name": "Can static websites rank on Google?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, static websites are highly SEO-friendly because they load faster, improve Core Web Vitals, and provide cleaner performance for search engines. Their fast loading speed and lightweight structure make them ideal for modern technical SEO requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Are static websites secure?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, static websites are extremely secure because they completely eliminate traditional server-side databases, plugins, and PHP entry points. With no database to hack and no backend code running, there are no vulnerability points for SQL injection or dynamic server exploits."
                }
              },
              {
                "@type": "Question",
                "name": "Which businesses should use static websites?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Businesses needing fast-loading business websites, landing pages, documentation centers, and corporate sites should use static architectures. They are perfect for startups and enterprises seeking high-performance websites with low maintenance overhead and high security."
                }
              }
            ]
          })
        }}
      />

      {/* 7. CTA Section */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden text-center border-t border-slate-900">
        <div className="absolute right-0 top-0 w-80 h-80 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <ShieldCheck className="w-10 h-10 text-orange-500 mx-auto mb-6" />

          <h2
            className="text-3xl sm:text-4xl font-black text-white uppercase tracking-widest mb-4"
            style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.1)" }}
          >
            Ready to Go Unbreakably Fast?
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto mb-10 font-medium">
            Tell us about your project goals. Our engineering team will design a bespoke static architecture strategy using lightweight business websites and fast-loading business websites.
          </p>

          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-white text-slate-950 hover:bg-slate-100 px-8 py-4 rounded-full font-bold text-xs tracking-wide transition-all shadow-lg hover:-translate-y-0.5"
          >
            Claim Free Architecture Review
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
