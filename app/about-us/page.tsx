import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import AboutHero from "@/components/sections/about/AboutHero";
import AboutStory from "@/components/sections/about/AboutStory";
import AboutValues from "@/components/sections/about/AboutValues";
import AboutTeam from "@/components/sections/about/AboutTeam";

export const metadata: Metadata = {
  title: "About Us | DigitalDeveloper",
  description: "Learn more about DigitalDeveloper, our values, our team, and how we deliver high-performance web solutions.",
  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <AboutHero />

      {/* Origin Story */}
      <AboutStory />

      {/* Core Principles */}
      <AboutValues />

      {/* Team */}
      <AboutTeam />

      {/* CTA */}
      <section className="py-24 bg-orange-600 text-white relative overflow-hidden text-center">
        <div className="absolute right-0 top-0 w-96 h-96 bg-white/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-wide mb-6 text-white" style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.1)" }}>
            Let's build something <br className="hidden sm:block" /> actually good.
          </h2>
          <p className="text-orange-100 text-lg sm:text-xl leading-relaxed mb-10 font-medium">
            Tired of empty promises? Let's have a deeply technical conversation about your product architecture. No sales reps, just engineers.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-800 px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1"
          >
            Talk to an Engineer
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
