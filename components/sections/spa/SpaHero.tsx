"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SpaHero() {
  const words = [
    "for React Applications",
    "for Vue.js Dashboards",
    "for SaaS Platforms",
    "for Customer Portals",
    "for Web Applications"
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
    <section className="relative h-auto pt-44 pb-28 sm:py-36 md:py-40 flex flex-col overflow-hidden bg-slate-900">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/75 z-10" />
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop"
          alt="Single Page Application Development"
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
            {/* Inline H1 Typewriter animation */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-white leading-[1.2] tracking-wide mb-8 max-w-5xl mx-auto">
              Single Page Application <br />
              Development Services <br />
              <span className="text-orange-500 inline-block min-h-[1.2em] relative whitespace-nowrap">
                {displayText}
                <span className="inline-block w-[3px] h-[0.85em] bg-orange-500 ml-1.5 animate-pulse align-middle" />
              </span>
            </h1>

            {/* Subtitle description */}
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
              Single Page Applications load once and never reload — delivering native-app speed, fluid transitions, and real-time interactivity that traditional multi-page websites simply cannot match. We engineer production-grade SPAs using React, Next.js, and Vue.js that handle thousands of concurrent users without breaking a sweat.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
