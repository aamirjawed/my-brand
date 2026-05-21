"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function SocialHero() {
  const benefits = ["Brand Visibility", "Audience Growth", "Engagement", "Content Strategy", "Consistency", "Lead Generation"];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentBenefit = benefits[index];
    const typeSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentBenefit.substring(0, displayText.length + 1));
        if (displayText.length === currentBenefit.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentBenefit.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % benefits.length);
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
          src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2000&auto=format&fit=crop"
          alt="Creative Content Creation & Branding Session"
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
            className="flex flex-col items-center justify-center animate-fade-in"
          >
            {/* Dynamic Headline with typewriter effect */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight mb-6 uppercase max-w-5xl mx-auto">
              Social Media Management <br />
              Services for Brand <br />
              <span className="text-orange-500 inline-block min-h-[1.2em] relative">
                {displayText}
                <span className="inline-block w-[3px] h-[0.85em] bg-orange-500 ml-1.5 animate-pulse align-middle" />
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
              We help businesses build a strong online presence through content creation, audience engagement, and data-driven social media strategies.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="bg-orange-600 text-white hover:bg-orange-500 px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-wide uppercase transition-all shadow-md hover:-translate-y-0.5"
              >
                Start Growing
              </Link>
              <Link
                href="/contact-us"
                className="bg-transparent text-white border border-white/30 hover:border-white px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-wide uppercase transition-all hover:bg-white/5"
              >
                Get Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
