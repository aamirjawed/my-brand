import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ShieldAlert } from "lucide-react";

// Import modular sections
import CorporateHero from "@/components/sections/corporate-website/CorporateHero";
import CorporateShowcase from "@/components/sections/corporate-website/CorporateShowcase";
import CorporateFeatures from "@/components/sections/corporate-website/CorporateFeatures";
import CorporateSpecificFeatures from "@/components/sections/corporate-website/CorporateSpecificFeatures";
import CorporatePortfolio from "@/components/sections/corporate-website/CorporatePortfolio";
import CorporateIndustries from "@/components/sections/corporate-website/CorporateIndustries";
import CorporateProcessSteps from "@/components/sections/corporate-website/CorporateProcessSteps";
import CorporateWhyChooseUs from "@/components/sections/corporate-website/CorporateWhyChooseUs";
import CorporateInteractiveDemo from "@/components/sections/corporate-website/CorporateInteractiveDemo";
import CorporateFAQ from "@/components/sections/corporate-website/CorporateFAQ";

export const metadata: Metadata = {
  title: "Corporate Website Development Services | Professional Business Websites",
  description: "Professional corporate website development services focused on branding, user experience, performance, SEO, and business growth.",
  keywords: [
    "Corporate Website Development Services",
    "business website development",
    "professional company websites",
    "corporate web design services",
    "custom corporate websites",
    "SEO-friendly business websites",
    "responsive corporate websites",
    "enterprise website development",
    "modern business websites",
    "corporate web solutions",
    "company website design"
  ],
  openGraph: {
    title: "Corporate Website Development Services | Professional Business Websites",
    description: "Professional corporate website development services focused on branding, user experience, performance, SEO, and business growth.",
    type: "website"
  }
};

export default function CorporateWebsiteDevelopmentPage() {
  return (
    <div className="relative bg-white min-h-screen">
      {/* 1. Hero Section */}
      <CorporateHero />

      {/* 2. Concept Showcase */}
      <CorporateShowcase />

      {/* 3. Tech Features Grid */}
      <CorporateFeatures />

      {/* 3.2. Platform Features */}
      <CorporateSpecificFeatures />

      {/* 3.5. Case Studies Portfolio */}
      <CorporatePortfolio />

      {/* 3.8. Industries Served */}
      <CorporateIndustries />

      {/* 3.9. Development Process Steps */}
      <CorporateProcessSteps />

      {/* 3.95. Why Choose Us */}
      <CorporateWhyChooseUs />

      {/* 4. Interactive Configuration Sandbox */}
      <CorporateInteractiveDemo />

      {/* 5. Frequently Asked Questions */}
      <CorporateFAQ />

      {/* JSON-LD Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Corporate Website Development",
            "name": "Corporate Website Development Services",
            "provider": {
              "@type": "Organization",
              "name": "Your Agency Name",
              "url": "https://yourwebsite.com"
            },
            "areaServed": "Worldwide",
            "description": "Professional corporate website development services focused on branding, SEO, performance, and business growth."
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
                "name": "What is a corporate website?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A corporate website is a professional, enterprise-grade web application designed to serve as the official digital presence for a company. It conveys brand identity, communicates key corporate news, hosts secure user portals, and builds instant credibility."
                }
              },
              {
                "@type": "Question",
                "name": "Why are corporate websites important?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Corporate websites help businesses build credibility, improve online visibility, and generate leads through a professional digital presence."
                }
              },
              {
                "@type": "Question",
                "name": "Are corporate websites SEO-friendly?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, professionally developed corporate websites can be optimized for SEO, performance, and user experience."
                }
              },
              {
                "@type": "Question",
                "name": "How long does corporate website development take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Depending on the scope of custom system integrations, localization levels, and database setups, corporate website development timelines typically range between 4 to 8 weeks, ensuring complete security audits and launch readiness."
                }
              },
              {
                "@type": "Question",
                "name": "Can you redesign existing corporate websites?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. We specialize in refactoring and migration planning, transferring old monolithic frameworks to modern, fast Next.js architectures without losing search index authority or database records."
                }
              }
            ]
          })
        }}
      />

      {/* 6. CTA & Internal Linking Loop */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden text-center border-t border-slate-900">
        <div className="absolute right-0 top-0 w-80 h-80 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <ShieldAlert className="w-10 h-10 text-orange-500 mx-auto mb-6 animate-pulse" />
          <h2
            className="text-3xl sm:text-4xl font-black text-white uppercase tracking-widest mb-4"
            style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.1)" }}
          >
            Looking for a professional corporate website for your business?
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto mb-10 font-medium">
            Contact us for modern, scalable, and SEO-friendly web solutions.
          </p>

          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-white text-slate-950 hover:bg-slate-100 px-8 py-4 rounded-full font-bold text-xs tracking-wide transition-all shadow-lg hover:-translate-y-0.5"
          >
            Schedule Consultation
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          {/* Internal Linking Hub */}
          <div className="border-t border-slate-900 pt-10 mt-10">
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black mb-4">Explore More Services</p>
            <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400 font-semibold">
              <Link href="/single-page-application-development" className="hover:text-orange-500 transition-colors">Single Page Application</Link>
              <span className="text-slate-800">•</span>
              <Link href="/static-website-development" className="hover:text-orange-500 transition-colors">Static Website Development</Link>
              <span className="text-slate-800">•</span>
              <Link href="/landing-page-development" className="hover:text-orange-500 transition-colors">Landing Page Development</Link>
              <span className="text-slate-800">•</span>
              <Link href="/ai-seo-services" className="hover:text-orange-500 transition-colors">AI SEO Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
