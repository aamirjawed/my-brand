"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";


export default function StaticHero() {
  const staticBenefits = [
    "for Modern Businesses",
    "for Speed & Security",
    "for SEO Rankings",
    "for Global Scale",
    "for High Performance"
  ];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentBenefit = staticBenefits[index];
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
          setIndex((prev) => (prev + 1) % staticBenefits.length);
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
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop"
          alt="Static Website Development"
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


            {/* Static H1 with orange accent typewriter inline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-white leading-[1.2] tracking-wide mb-8 max-w-5xl mx-auto">
              Static Website <br />
              Development Services <br />
              <span className="text-orange-500 inline-block min-h-[1.2em] relative whitespace-nowrap">
                {displayText}
                <span className="inline-block w-[3px] h-[0.85em] bg-orange-500 ml-1.5 animate-pulse align-middle" />
              </span>
            </h1>

            {/* Pitch with keywords */}
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
              Ditch clunky databases and slow servers. As an expert <strong className="text-white">static website developer</strong>, we engineer <strong className="text-white">modern static websites</strong> that load instantly. Our <strong className="text-white">static web design services</strong> ensure your business dominates search results with ultra-secure, <strong className="text-white">high-performance websites</strong>.
            </p>


          </motion.div>
        </div>
      </div>
    </section>
  );
}
