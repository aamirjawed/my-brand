"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Rocket } from "lucide-react";

// Import modular sections from components/sections/landing-page
import LandingHero from "@/components/sections/landing-page/LandingHero";
import LandingShowcase from "@/components/sections/landing-page/LandingShowcase";
import InteractiveLandingDemo from "@/components/sections/landing-page/InteractiveLandingDemo";
import LandingProcessSteps from "@/components/sections/landing-page/LandingProcessSteps";
import LandingFAQ from "@/components/sections/landing-page/LandingFAQ";

export default function LandingPageService() {
  return (
    <div className="relative bg-white min-h-screen">
      {/* 1. Modular Hero Section */}
      <LandingHero />

      {/* 2. Modular Overlapping Device Showcase Mockup Section (Right below Hero!) */}
      <LandingShowcase />

      {/* 3. Modular Interactive Blueprint Sandbox Playground */}
      <InteractiveLandingDemo />

      {/* 4. Modular Vertical Timeline Process Roadmap */}
      <LandingProcessSteps />

      {/* 5. Modular Strategy FAQ */}
      <LandingFAQ />

      {/* 6. Mid-Page Mini CTA (Full-bleed conversion trigger - NO CARDS) */}
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
            Ready to Accelerate Growth?
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto mb-10">
            Tell us about your campaign goals. Our custom design team will wireframe a bespoke landing page strategy tailored to your exact industry.
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
