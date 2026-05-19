import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Rocket } from "lucide-react";

// Import modular sections from components/sections/landing-page
import LandingHero from "@/components/sections/landing-page/LandingHero";
import LandingShowcase from "@/components/sections/landing-page/LandingShowcase";
import InteractiveLandingDemo from "@/components/sections/landing-page/InteractiveLandingDemo";
import LandingBenefits from "@/components/sections/landing-page/LandingBenefits";
import LandingServices from "@/components/sections/landing-page/LandingServices";
import LandingPortfolio from "@/components/sections/landing-page/LandingPortfolio";
import LandingIndustries from "@/components/sections/landing-page/LandingIndustries";
import LandingProcessSteps from "@/components/sections/landing-page/LandingProcessSteps";
import LandingTechnical from "@/components/sections/landing-page/LandingTechnical";
import LandingFAQ from "@/components/sections/landing-page/LandingFAQ";

// Define search intent metadata
export const metadata: Metadata = {
  title: "Landing Page Development Services | High-Converting Pages",
  description: "We create high-converting landing pages designed for better leads, sales, performance, and user experience across all devices.",
  keywords: [
    "landing page development services",
    "high-converting landing pages",
    "landing page development startups",
    "conversion rate optimization",
    "ad landing pages",
    "fast-loading landing pages"
  ],
  openGraph: {
    title: "Landing Page Development Services | High-Converting Pages",
    description: "We create high-converting landing pages designed for better leads, sales, performance, and user experience across all devices.",
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
