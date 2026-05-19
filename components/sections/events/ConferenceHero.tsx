"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ConferenceHero() {
  const words = ["Global Summits", "Industry Expos", "Tech Conferences", "Trade Shows", "Medical Congresses"];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    const typeSpeed = isDeleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.substring(0, displayText.length + 1));
        if (displayText.length === current.length) setTimeout(() => setIsDeleting(true), 2000);
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
    <section className="relative h-auto pt-36 pb-20 sm:py-28 md:py-32 flex flex-col overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-950/80 z-10" />
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop"
          alt="Conference & Summit Production"
          className="w-full h-full object-cover select-none"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center"
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 font-bold text-xs uppercase tracking-widest mb-8 border border-orange-500/20 shadow-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              Conference Production
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.15] tracking-tight mb-8">
              We Produce <br />
              <div className="h-[1.25em] relative flex items-center justify-center">
                <span className="text-orange-500 relative inline-block">
                  {displayText}
                  <span className="inline-block w-[3px] h-[0.8em] bg-orange-500 ml-2 animate-pulse" />
                </span>
              </div>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Conferences are massive logistical ecosystems. We engineer, design, and operate large-scale industry summits that unite thousands of attendees, exhibitors, and keynote speakers under one roof flawlessly.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
