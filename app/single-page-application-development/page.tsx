import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, AppWindow } from "lucide-react";

import SpaHero from "@/components/sections/spa/SpaHero";
import SpaShowcase from "@/components/sections/spa/SpaShowcase";
import SpaBenefits from "@/components/sections/spa/SpaBenefits";
import SpaSeoSection from "@/components/sections/spa/SpaSeoSection";
import SpaInteractiveDemo from "@/components/sections/spa/SpaInteractiveDemo";
import SpaTechStack from "@/components/sections/spa/SpaTechStack";
import SpaStats from "@/components/sections/spa/SpaStats";
import SpaComparison from "@/components/sections/spa/SpaComparison";
import SpaProcessSteps from "@/components/sections/spa/SpaProcessSteps";
import SpaFAQ from "@/components/sections/spa/SpaFAQ";

export const metadata: Metadata = {
  title: "Single Page Application Development Services | Fast & Modern Web Apps",
  description: "We build fast, scalable, and SEO-friendly single page applications using modern technologies focused on performance, user experience, and business growth.",
  keywords: [
    "Single Page Application Development",
    "SPA development services",
    "React SPA development",
    "modern web application development",
    "fast single page applications",
    "SEO-friendly SPA development",
    "interactive web applications",
    "frontend application development",
    "high-performance web apps",
    "responsive SPA development",
    "custom single page applications",
    "Core Web Vitals",
    "server-side rendering",
    "hydration",
    "frontend architecture",
    "client-side rendering",
    "API integration",
    "performance optimization",
    "responsive design",
    "scalable applications",
    "user experience"
  ],
  openGraph: {
    title: "Single Page Application Development Services | Fast & Modern Web Apps",
    description: "We build fast, scalable, and SEO-friendly single page applications using modern technologies focused on performance, user experience, and business growth.",
    type: "website"
  }
};

export default function SinglePageApplicationDevelopmentPage() {
  return (
    <div className="relative bg-white min-h-screen">
      {/* 1. Hero — typewriter: React / Vue / SaaS / Portals */}
      <SpaHero />

      {/* 2. Showcase — What Is a Single Page Application? */}
      <SpaShowcase />

      {/* 3. Benefits of Single Page Applications */}
      <SpaBenefits />

      {/* 4. SEO-Friendly Single Page Application Development */}
      <SpaSeoSection />

      {/* Interactive Sandbox Simulator */}
      <SpaInteractiveDemo />

      {/* 5. Technologies We Use for SPA Development */}
      <SpaTechStack />

      {/* 6. Performance-Focused SPA Solutions */}
      <SpaStats />

      {/* 7. Technical Breakdown (Comparison) */}
      <SpaComparison />

      {/* 8. Process Timeline: Architecture → API → Components → Routing → Perf → Deploy */}
      <SpaProcessSteps />

      {/* 9. FAQ */}
      <SpaFAQ />

      {/* JSON-LD Structured Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Single Page Application Development",
            "name": "Single Page Application Development Services",
            "provider": {
              "@type": "Organization",
              "name": "DigitalDeveloper",
              "url": "https://digitaldeveloper.co"
            },
            "areaServed": "Worldwide",
            "description": "Modern single page application development services focused on performance, responsiveness, scalability, and SEO optimization."
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
                "name": "Are single page applications SEO-friendly?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, modern single page applications can be SEO-friendly when built using technologies like Next.js with server-side rendering and proper optimization."
                }
              },
              {
                "@type": "Question",
                "name": "What are the benefits of SPAs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Single page applications provide faster interactions, smoother user experience, and modern application-like performance."
                }
              },
              {
                "@type": "Question",
                "name": "Which framework is best for SPA development?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The best framework depends on your specific product requirements. React is the industry standard, Vue is lightweight, and Next.js is ideal for production-ready, SEO-friendly apps."
                }
              },
              {
                "@type": "Question",
                "name": "Are React SPAs fast?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, React SPAs are extremely fast when optimized with route-based code splitting, bundle minification, and caching."
                }
              },
              {
                "@type": "Question",
                "name": "What is the difference between SPA and traditional websites?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Traditional websites reload the whole page on every click, whereas SPAs load the page once and dynamically update content via APIs in the background."
                }
              }
            ]
          })
        }}
      />

      {/* 10. CTA & Internal Linking Loop */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden text-center border-t border-slate-900">
        <div className="absolute right-0 top-0 w-80 h-80 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <AppWindow className="w-10 h-10 text-orange-500 mx-auto mb-6" />
          <h2
            className="text-3xl sm:text-4xl font-black text-white uppercase tracking-widest mb-4"
            style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.1)" }}
          >
            Ready to Build a True Web Application?
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto mb-10 font-medium">
            Tell us about your product requirements. Our senior engineering team will architect a scalable SPA solution tailored to your exact business logic and user needs.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-white text-slate-950 hover:bg-slate-100 px-8 py-4 rounded-full font-bold text-xs tracking-wide transition-all shadow-lg hover:-translate-y-0.5"
            >
              Schedule Technical Scoping Call
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Internal Linking Hub */}
          <div className="border-t border-slate-900 pt-10 mt-10">
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black mb-4">Explore Our Development Services</p>
            <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400 font-semibold">
              <Link href="/custom-website-development" className="hover:text-orange-500 transition-colors">Custom Website Development</Link>
              <span className="text-slate-800">•</span>
              <Link href="/static-website-development" className="hover:text-orange-500 transition-colors">Static Website Development</Link>
              <span className="text-slate-800">•</span>
              <Link href="/landing-page-development" className="hover:text-orange-500 transition-colors">Landing Page Development</Link>
              <span className="text-slate-800">•</span>
              <Link href="/ai-seo-services" className="hover:text-orange-500 transition-colors">AI SEO Services</Link>
              <span className="text-slate-800">•</span>
              <Link href="/blog" className="hover:text-orange-500 transition-colors">Engineering & Speed Blogs</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
