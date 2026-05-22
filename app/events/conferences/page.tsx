import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MicVocal } from "lucide-react";

import Hero from "@/components/sections/events/conference/Hero";
import Showcase from "@/components/sections/events/conference/Showcase";
import Stats from "@/components/sections/events/conference/Stats";
import Speakers from "@/components/sections/events/conference/Speakers";
import Process from "@/components/sections/events/conference/Process";
import FAQ from "@/components/sections/events/conference/FAQ";

export const metadata: Metadata = {
  title: "Conference Planning & Management Services | DigitalDeveloper",
  description: "Professional conference planning and management services. We produce seamless, high-impact summits, tech conferences, and corporate events globally.",
  alternates: {
    canonical: "/events/conferences",
  },
};

export default function ConferencePage() {
  return (
    <div className="relative bg-white min-h-screen">
      {/* 1. Standard Hero */}
      <Hero />

      {/* 2. New Design: Dynamic Tabbed Image viewer for modules */}
      <Showcase />

      {/* 3. New Design: Bold Grid layout with huge orange background */}
      <Stats />

      {/* 4. New Section: Speaker/Talent card grid */}
      <Speakers />

      {/* 5. New Design: Horizontal animated timeline */}
      <Process />

      {/* 6. New Design: Split-pane fixed grid FAQ */}
      <FAQ />

      {/* 7. CTA */}
      <section className="py-24 bg-orange-600 text-white relative overflow-hidden text-center">
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-white/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <MicVocal className="w-12 h-12 text-white/80 mx-auto mb-6" />
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-widest mb-6"
            style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.1)" }}
          >
            Ready to Engineer Your Summit?
          </h2>
          <p className="text-orange-100 text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-10 font-medium">
            Contact our executive production team to request a comprehensive capabilities deck and schedule an initial venue feasibility call.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-800 px-8 py-4 rounded-full font-bold text-xs tracking-wide transition-all shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1"
          >
            Request Capabilities Deck
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
