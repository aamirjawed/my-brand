"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, AppWindow } from "lucide-react";

import SpaHero from "@/components/sections/spa/SpaHero";
import SpaShowcase from "@/components/sections/spa/SpaShowcase";
import SpaStats from "@/components/sections/spa/SpaStats";
import SpaComparison from "@/components/sections/spa/SpaComparison";
import SpaProcessSteps from "@/components/sections/spa/SpaProcessSteps";
import SpaFAQ from "@/components/sections/spa/SpaFAQ";

export default function SpaPage() {
  return (
    <div className="relative bg-white min-h-screen">
      {/* 1. Hero — typewriter: React / Vue / SaaS / Portals */}
      <SpaHero />

      {/* 2. Showcase — code splitting terminal + live dashboard UI + narrative */}
      <SpaShowcase />

      {/* 3. Stats Strip — 300+ SPAs, 1.4s TTI, 99.9% uptime, 60% less bounce */}
      <SpaStats />

      {/* 4. Comparison Table — SPA vs MPA vs SSR technical breakdown */}
      <SpaComparison />

      {/* 5. Process Timeline — 6-step zigzag: Architecture → API → Components → Routing → Perf → Deploy */}
      <SpaProcessSteps />

      {/* 6. FAQ — 5 detailed answers on architecture, SEO, stacks, performance */}
      <SpaFAQ />

      {/* 7. CTA */}
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
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto mb-10">
            Tell us about your product requirements. Our senior engineering team will architect a scalable SPA solution tailored to your exact business logic and user needs.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-white text-slate-950 hover:bg-slate-100 px-8 py-4 rounded-full font-bold text-xs tracking-wide transition-all shadow-lg hover:-translate-y-0.5"
          >
            Schedule Technical Scoping Call
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
