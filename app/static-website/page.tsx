"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

import StaticHero from "@/components/sections/static-website/StaticHero";
import StaticShowcase from "@/components/sections/static-website/StaticShowcase";
import StaticStats from "@/components/sections/static-website/StaticStats";
import StaticInteractiveDemo from "@/components/sections/static-website/StaticInteractiveDemo";
import StaticProcessSteps from "@/components/sections/static-website/StaticProcessSteps";
import StaticFAQ from "@/components/sections/static-website/StaticFAQ";

export default function StaticWebsiteService() {
  return (
    <div className="relative bg-white min-h-screen">
      {/* 1. Hero */}
      <StaticHero />

      {/* 2. Device Showcase + Copywriting */}
      <StaticShowcase />

      {/* 3. Animated Stats Strip */}
      <StaticStats />

      {/* 4. Interactive Architecture Sandbox */}
      <StaticInteractiveDemo />

      {/* 5. Vertical Zigzag Process Timeline */}
      <StaticProcessSteps />

      {/* 6. Accordion FAQ */}
      <StaticFAQ />

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

          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto mb-10">
            Tell us about your project goals. Our engineering team will design a bespoke static architecture strategy tailored to your exact brand and audience.
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
