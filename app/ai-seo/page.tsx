"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, TrendingUp } from "lucide-react";

import SeoHero from "@/components/sections/seo/SeoHero";
import SeoShowcase from "@/components/sections/seo/SeoShowcase";
import SeoStats from "@/components/sections/seo/SeoStats";
import SeoInteractiveDemo from "@/components/sections/seo/SeoInteractiveDemo";
import SeoFeatures from "@/components/sections/seo/SeoFeatures";
import SeoProcessSteps from "@/components/sections/seo/SeoProcessSteps";
import SeoFAQ from "@/components/sections/seo/SeoFAQ";

export default function AiSeoPage() {
  return (
    <div className="relative bg-white min-h-screen">
      {/* 1. Hero — typewriter with SEO-specific rotating words */}
      <SeoHero />

      {/* 2. Showcase — keyword rankings + traffic chart visual + narrative copy */}
      <SeoShowcase />

      {/* 3. Stats Strip — 312% traffic, 94% page 1, 500+ sites, 8x ROI */}
      <SeoStats />

      {/* 4. Interactive SEO Audit Sandbox */}
      <SeoInteractiveDemo />

      {/* 5. Features — full bento-box grid of all AI SEO capabilities */}
      <SeoFeatures />

      {/* 6. Process Timeline — vertical zigzag 6-step SEO pipeline */}
      <SeoProcessSteps />

      {/* 7. FAQ — 5 detailed answers about AI SEO, timelines, guarantees */}
      <SeoFAQ />

      {/* 8. CTA */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden text-center border-t border-slate-900">
        <div className="absolute right-0 top-0 w-80 h-80 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <TrendingUp className="w-10 h-10 text-orange-500 mx-auto mb-6" />
          <h2
            className="text-3xl sm:text-4xl font-black text-white uppercase tracking-widest mb-4"
            style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.1)" }}
          >
            Ready to Dominate Page One?
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto mb-10">
            Tell us your target keywords and industry. Our AI SEO team will deliver a free audit and custom growth roadmap tailored to your exact competitive landscape.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-white text-slate-950 hover:bg-slate-100 px-8 py-4 rounded-full font-bold text-xs tracking-wide transition-all shadow-lg hover:-translate-y-0.5"
          >
            Claim Free SEO Audit
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
