"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const words = [
    "Tournament Execution",
    "Esports Play",
    "Corporate Cups",
    "Bracket Scheduling",
    "Event Operations"
  ];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    const typeSpeed = isDeleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.substring(0, displayText.length + 1));
        if (displayText.length === current.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(current.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setIndex((p) => (p + 1) % words.length);
        }
      }
    }, typeSpeed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <section className="relative h-auto pt-44 pb-28 sm:py-36 md:py-40 flex flex-col overflow-hidden bg-slate-900 text-white">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/80 z-10" />
        <img
          src="https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=2000&auto=format&fit=crop"
          alt="League Management Arena"
          className="w-full h-full object-cover select-none"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center"
          >
            {/* Primary SEO Tag */}
            <h1 className="font-extrabold text-xs sm:text-sm text-orange-500 uppercase tracking-widest block mb-4">
              Professional League Management Services
            </h1>

            {/* Title with typewriter */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-white leading-[1.15] tracking-wide mb-8 max-w-4xl mx-auto">
              Complete League Management Solutions <br />
              <span className="text-slate-400">for Smooth</span> <br />
              <span className="text-orange-500 inline-block min-h-[1.2em] relative whitespace-nowrap">
                {displayText}
                <span className="inline-block w-[3px] h-[0.85em] bg-orange-500 ml-1.5 animate-pulse align-middle" />
              </span>
            </h2>

            {/* Paragraph copy */}
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
              We help organize and manage leagues, tournaments, and competitions with scheduling, registrations, coordination, and operational support.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact-us"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-xs tracking-wider uppercase transition-all"
              >
                Plan Your League
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact-us"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-xs tracking-wider uppercase transition-all"
              >
                Get Consultation
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
