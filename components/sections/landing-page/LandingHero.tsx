"use client";

"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Award, ShieldCheck, CheckCircle } from "lucide-react";

export default function LandingHero() {
  const words = ["Conversions", "Leads & Sales", "ROI Boost", "Product Growth"];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];
    const typeSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <section className="relative min-h-[90vh] pt-40 pb-24 sm:pt-30 sm:pb-32 flex flex-col justify-center overflow-hidden bg-slate-950 text-white">
      {/* Background Subtle Flares */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-orange-600/10 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-orange-950/25 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* Minimal Tagline */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
              High-Converting Page Engineering
            </div>

            {/* H1 Heading Hierarchy */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6 uppercase max-w-5xl">
              Landing Page <br className="hidden sm:inline" />
              Development Services <br />

            </h1>

            {/* Subheadline Description */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10 font-medium">
              Hire expert landing page developers for conversion-focused custom pages (SaaS, eCommerce, B2B). Integrated with CRO, A/B testing, and sub-2.5s load times. Over 10+ years and 200+ projects delivered.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-14 w-full sm:w-auto">
              <motion.a
                href="/contact-us"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-extrabold px-8 py-4 rounded-xl text-xs tracking-widest uppercase transition-all shadow-lg"
              >
                Get Free Quote
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.a>
              <motion.a
                href="/our-work"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-bold px-8 py-4 rounded-xl text-xs tracking-widest uppercase transition-all"
              >
                View Portfolio
              </motion.a>
            </div>



          </motion.div>
        </div>
      </div>
    </section>
  );
}

