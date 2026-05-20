"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, Database } from "lucide-react";
import Link from "next/link";

export default function CorporateHero() {
  const words = [
    "Enterprise Portals",
    "Global SaaS Architectures",
    "High-Security Platforms",
    "Scalable CMS Platforms",
    "Bespoke Digital Ecosystems"
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
          setTimeout(() => setIsDeleting(true), 2200);
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
    <section className="relative h-auto pt-44 pb-28 sm:py-36 md:py-40 flex flex-col overflow-hidden bg-slate-950">
      {/* Background Graphic Patterns & Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
          alt="Corporate Website Development"
          className="w-full h-full object-cover select-none filter grayscale opacity-40"
        />
        {/* Modern Mesh Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ea580c05_1px,transparent_1px),linear-gradient(to_bottom,#ea580c05_1px,transparent_1px)] bg-[size:3rem_3rem] z-20" />
        {/* Soft Radial Gradients */}
        <div className="absolute left-[10%] top-[20%] w-[40%] h-[40%] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none z-20" />
        <div className="absolute right-[10%] bottom-[10%] w-[30%] h-[30%] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none z-20" />
      </div>

      <div className="container mx-auto px-6 relative z-25 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-orange-500 text-xs font-bold uppercase tracking-widest mb-8"
          >
            <ShieldCheck className="w-3.5 h-3.5" /> ISO Compliant & Scalable Architecture
          </motion.div>

          {/* Exact H1 for SEO */}
          <h1 className="sr-only">Professional Corporate Website Development Services</h1>

          {/* Main Visual Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white leading-[1.1] tracking-wide mb-4 max-w-5xl mx-auto"
          >
            Modern Corporate Websites <br />
            Designed for Business Growth
          </motion.h2>

          {/* Typewriter Subheading */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-orange-500 font-extrabold text-sm sm:text-base md:text-lg uppercase tracking-widest mb-8 min-h-[1.5em] flex items-center justify-center gap-1.5"
          >
            <span>ENGINEERING FOR</span>
            <span className="inline-block relative whitespace-nowrap text-white">
              {displayText}
              <span className="inline-block w-[2.5px] h-[0.85em] bg-orange-500 ml-1.5 animate-pulse align-middle" />
            </span>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl mx-auto mb-12 font-medium"
          >
            We build professional corporate websites focused on branding, user experience, SEO, and long-term business performance.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <Link
              href="/contact-us"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:-translate-y-0.5"
            >
              Get Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact-us"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all hover:bg-slate-900/80"
            >
              <Database className="w-4 h-4 text-orange-500" /> Start Your Project
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
