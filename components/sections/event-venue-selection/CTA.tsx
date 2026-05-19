"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden text-center border-t border-slate-900">
      {/* Glow overlay */}
      <div className="absolute right-0 top-0 w-80 h-80 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-amber-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <Sparkles className="w-10 h-10 text-orange-500 mx-auto mb-6" />
        
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-widest mb-6"
          style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.1)" }}
        >
          Need help finding the perfect venue for your event?
        </h2>
        
        <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-10">
          Contact our team for personalized venue selection and planning assistance.
        </p>

        <Link
          href="/contact-us"
          className="inline-flex items-center gap-2 bg-white text-slate-950 hover:bg-slate-100 px-8 py-4 rounded-full font-bold text-xs tracking-wider uppercase transition-all shadow-lg hover:-translate-y-0.5"
        >
          Get Free Consultation
          <ArrowUpRight className="w-4 h-4 text-orange-600" />
        </Link>
      </div>
    </section>
  );
}
