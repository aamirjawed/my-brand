"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

interface HeroData {
  h1: string;
  subheadline: string;
  cta1: { text: string; href: string };
  cta2: { text: string; href: string };
  badges: string[];
}

export default function LocationHero({ data }: { data: HeroData }) {
  const customBenefits = ["Custom Web Apps", "AI & ML Solutions", "Offshore Teams", "Agile Execution", "Premium Engineering"];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentBenefit = customBenefits[index];
    const typeSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentBenefit.substring(0, displayText.length + 1));
        if (displayText.length === currentBenefit.length) {
          setTimeout(() => setIsDeleting(true), 2000); // Hold before deleting
        }
      } else {
        setDisplayText(currentBenefit.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % customBenefits.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <section className="relative h-auto pt-44 pb-28 sm:py-36 md:py-26 flex flex-col overflow-hidden bg-slate-900">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/80 z-10" />
        <img
          src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2000&auto=format&fit=crop"
          alt="Software Development Infrastructure"
          className="w-full h-full object-cover select-none"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">

          {/* Micro Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 text-[10px] font-bold text-orange-500 uppercase tracking-widest mb-6 shadow-inner"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping" />
            Leading IT Partner
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center"
          >
            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight mb-6 uppercase max-w-5xl mx-auto">
              Best Software Developer in Noida <br />
              <span className="text-orange-500 inline-block min-h-[1.2em] relative">
                {displayText}
                <span className="inline-block w-[3px] h-[0.85em] bg-orange-500 ml-1.5 animate-pulse align-middle" />
              </span>
            </h1>

            {/* H1 Subtitle details for SEO */}
            <p className="hidden">Custom Web & App Development, India</p>

            {/* Pitch / Subheadline */}
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
              {data.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <Link
                href={data.cta1.href}
                className="bg-orange-600 text-white hover:bg-orange-700 px-8 py-4 rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all shadow-[0_10px_30px_rgba(234,88,12,0.3)] hover:-translate-y-1 flex items-center gap-2"
              >
                {data.cta1.text}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href={data.cta2.href}
                className="bg-slate-900 text-white hover:bg-slate-800 px-8 py-4 rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all border border-slate-800 hover:-translate-y-1"
              >
                {data.cta2.text}
              </Link>
            </div>

            {/* Badges / Trust markers */}
            <div className="pt-6 border-t border-white/10 w-full max-w-lg">
              <p className="text-[9px] text-slate-500 uppercase tracking-widest font-black mb-3">Recognized & Certified</p>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-slate-400 font-semibold text-xs">
                {data.badges.map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
