"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function OurWorkCTA() {
  return (
    <section className="py-24 bg-orange-600 text-white relative overflow-hidden text-center border-t border-orange-700">
      <div className="absolute right-0 top-0 w-96 h-96 bg-white/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-black/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-wide mb-6 text-white leading-tight" style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.1)" }}>
          Let's launch your <br className="hidden sm:block" /> digital flagship.
        </h2>
        <p className="text-orange-100 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto font-medium">
          Ready to scale your next web project, branding system, or custom search rankings? Collaborate directly with our designers and engineers.
        </p>
        <Link
          href="/contact-us"
          className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-900 text-white px-10 py-4.5 rounded-full font-black text-xs uppercase tracking-widest transition-all shadow-[0_12px_35px_rgba(0,0,0,0.35)] hover:-translate-y-1 active:translate-y-0"
        >
          Launch Free Architecture Proposal
          <ChevronRight className="w-4 h-4 text-orange-500" />
        </Link>
      </div>
    </section>
  );
}
