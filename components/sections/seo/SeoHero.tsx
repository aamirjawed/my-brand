"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SeoHero() {
  const seoBenefits = ["Search Rankings", "Organic Traffic", "Domain Authority", "AI Visibility", "Click-Through Rate"];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = seoBenefits[index];
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
          setIndex((prev) => (prev + 1) % seoBenefits.length);
        }
      }
    }, typeSpeed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <section className="relative h-auto pt-44 pb-28 sm:py-36 md:py-40 flex flex-col overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/75 z-10" />
        <img
          src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2000&auto=format&fit=crop"
          alt="AI SEO Services"
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
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.15] tracking-tight mb-8">
              Dominate Your <br />
              <div className="h-[1.25em] relative flex items-center justify-center">
                <span className="text-orange-500">
                  {displayText}
                  <span className="inline-block w-[3px] h-[0.8em] bg-orange-500 ml-2 animate-pulse" />
                </span>
              </div>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
              Stop waiting for months of guesswork. Our AI-powered SEO systems analyze, optimize, and scale your rankings with machine-precision intelligence that outperforms any manual strategy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
