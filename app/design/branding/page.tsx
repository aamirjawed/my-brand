import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Palette } from "lucide-react";

import BrandingHero from "@/components/sections/branding/BrandingHero";
import BrandingShowcase from "@/components/sections/branding/BrandingShowcase";
import BrandingStats from "@/components/sections/branding/BrandingStats";
import BrandingInteractiveDemo from "@/components/sections/branding/BrandingInteractiveDemo";
import BrandingFeatures from "@/components/sections/branding/BrandingFeatures";
import BrandingProcessSteps from "@/components/sections/branding/BrandingProcessSteps";
import BrandingFAQ from "@/components/sections/branding/BrandingFAQ";

export const metadata: Metadata = {
  title: "Branding & Logo Design Services | Brand Identity Systems",
  description: "Bespoke branding and logo design services. We craft iconic visual identity systems, brand guidelines, color palettes, and assets for fast-growing companies.",
  alternates: {
    canonical: "/design/branding",
  },
};

export default function BrandingPage() {
  return (
    <div className="relative bg-white min-h-screen">
      {/* 1. Hero — typewriter: Brand Identity / Logo Systems / Visual Language */}
      <BrandingHero />

      {/* 2. Showcase — color palette + logo mark visual + brand narrative copy */}
      <BrandingShowcase />

      {/* 3. Stats Strip — 700+ identities, 94% retention, 3x revenue, 48hr delivery */}
      <BrandingStats />

      {/* 4. Interactive Logo Design Sandbox */}
      <BrandingInteractiveDemo />

      {/* 5. Features — complete brand identity deliverables bento grid */}
      <BrandingFeatures />

      {/* 6. Process Timeline — 6-step zigzag: Discovery → Concepts → Refinement → System → Guidelines → Delivery */}
      <BrandingProcessSteps />

      {/* 7. FAQ — 5 detailed answers on logos, revisions, files, startups, evolution */}
      <BrandingFAQ />

      {/* 8. CTA */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden text-center border-t border-slate-900">
        <div className="absolute right-0 top-0 w-80 h-80 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Palette className="w-10 h-10 text-orange-500 mx-auto mb-6" />
          <h2
            className="text-3xl sm:text-4xl font-black text-white uppercase tracking-widest mb-4"
            style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.1)" }}
          >
            Ready to Build an Iconic Brand?
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto mb-10">
            Tell us your vision, your industry, and your target audience. Our brand strategists will deliver a free consultation and custom identity roadmap within 24 hours.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-white text-slate-950 hover:bg-slate-100 px-8 py-4 rounded-full font-bold text-xs tracking-wide transition-all shadow-lg hover:-translate-y-0.5"
          >
            Claim Free Brand Consultation
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
