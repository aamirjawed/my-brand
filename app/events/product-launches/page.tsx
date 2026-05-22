import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Rocket } from "lucide-react";

import Hero from "@/components/sections/events/product-launches/Hero";
import Showcase from "@/components/sections/events/product-launches/Showcase";
import Stats from "@/components/sections/events/product-launches/Stats";
import Process from "@/components/sections/events/product-launches/Process";
import Features from "@/components/sections/events/product-launches/Features";
import Benefits from "@/components/sections/events/product-launches/Benefits";
import FAQ from "@/components/sections/events/product-launches/FAQ";

export const metadata: Metadata = {
  title: "Product Launch Event Management & Production | DigitalDeveloper",
  description: "Expert product launch event management and production. We produce memorable, high-impact brand reveal and launch events globally.",
  alternates: {
    canonical: "/events/product-launches",
  },
};

export default function ProductLaunchesPage() {
  return (
    <div className="relative bg-white min-h-screen">
      {/* 1. Hero with Typewriter & Rocket Doodle */}
      <Hero />

      {/* 2. Live Control Room Simulator Showcase */}
      <Showcase />

      {/* 3. Metrics Stats Section */}
      <Stats />

      {/* 4. Editorial Features Checklist */}
      <Features />

      {/* 5. Benefits Asymmetric Grid */}
      <Benefits />

      {/* 6. Process Roadmap Timeline */}
      <Process />

      {/* 7. Accordion FAQ Section */}
      <FAQ />

      {/* 8. Call to Action */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden text-center border-t border-slate-900">
        <div className="absolute right-0 top-0 w-80 h-80 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Rocket className="w-10 h-10 text-orange-500 mx-auto mb-6" />
          <h2
            className="text-3xl sm:text-4xl font-black text-white uppercase tracking-widest mb-4"
            style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.1)" }}
          >
            Ready to Engineer Your Launch?
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto mb-10">
            Reach out with your launch timelines, embargo constraints, and attendance criteria. Our team of live producers will design a seamless reveal.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-white text-slate-950 hover:bg-slate-100 px-8 py-4 rounded-full font-bold text-xs tracking-wide transition-all shadow-lg hover:-translate-y-0.5"
          >
            Schedule Consultation
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
