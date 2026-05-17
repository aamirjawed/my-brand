"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";


export default function LandingHero() {
  const landingBenefits = ["Conversions", "Leads & Sales", "Customer Trust", "Product Value"];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentBenefit = landingBenefits[index];
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
          setIndex((prev) => (prev + 1) % landingBenefits.length);
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
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
          alt="Landing Page Optimization Setup"
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


            {/* Dynamic Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.15] tracking-tight mb-8">
              Multiply Your <br />
              <div className="h-[1.25em] relative flex items-center justify-center">
                <span className="text-orange-500">
                  {displayText}
                  <span className="inline-block w-[3px] h-[0.8em] bg-orange-500 ml-2 animate-pulse" />
                </span>
              </div>
            </h1>

            {/* Pitch */}
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
              Stop throwing traffic into generic websites. We design bespoke, lightning-fast landing pages engineered specifically to convert visitors into loyal clients.
            </p>


          </motion.div>
        </div>
      </div>
    </section>
  );
}
