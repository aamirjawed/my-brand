"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, CalendarCheck } from "lucide-react";

import CorporateEventHero from "@/components/sections/events/CorporateEventHero";
import CorporateEventShowcase from "@/components/sections/events/CorporateEventShowcase";
import CorporateEventStats from "@/components/sections/events/CorporateEventStats";
import CorporateEventFeatures from "@/components/sections/events/CorporateEventFeatures";
import CorporateEventProcess from "@/components/sections/events/CorporateEventProcess";
import CorporateEventFAQ from "@/components/sections/events/CorporateEventFAQ";

export default function CorporateEventPage() {
  return (
    <div className="relative bg-white min-h-screen">
      {/* 1. Hero — dynamic doodles & event typewriter */}
      <CorporateEventHero />

      {/* 2. Showcase — moodboard polaroids & run of show */}
      <CorporateEventShowcase />

      {/* 3. Stats Strip — 500+ events, 250k attendees */}
      <CorporateEventStats />

      {/* 4. Features Bento — Services: Venue, F&B, AV, Styling */}
      <CorporateEventFeatures />

      {/* 5. Process Timeline — Discovery to Post-Event Debrief */}
      <CorporateEventProcess />

      {/* 6. FAQ — Security, timelines, destination events */}
      <CorporateEventFAQ />

      {/* 7. CTA */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden text-center border-t border-slate-900">
        <div className="absolute right-0 top-0 w-80 h-80 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <CalendarCheck className="w-10 h-10 text-orange-500 mx-auto mb-6" />
          <h2
            className="text-3xl sm:text-4xl font-black text-white uppercase tracking-widest mb-4"
            style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.1)" }}
          >
            Ready to Plan Your Next Event?
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto mb-10">
            Reach out with your estimated dates, location preferences, and attendee count. Our production team will schedule a free initial scoping consultation.
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
