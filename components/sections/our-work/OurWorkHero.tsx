"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function OurWorkHero() {
  const words = ["masterpieces", "platforms", "solutions", "campaigns"];
  const [index, setIndex] = React.useState(0);
  const [displayText, setDisplayText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentWord = words[index];
    const typeSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1500); // Hold before deleting
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
    <section className="relative pt-44 pb-32 overflow-hidden bg-slate-950 text-white">
      {/* Dynamic background accents */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950 z-10" />
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
          alt="Work Showcase Banner"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute right-0 top-0 w-96 h-96 bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-[40rem] h-[40rem] bg-slate-900/50 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="inline-flex items-center gap-2 bg-orange-600/15 border border-orange-500/30 text-orange-500 text-xs sm:text-sm font-bold tracking-widest uppercase py-2 px-5 rounded-full mb-6 relative">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              OUR PORTFOLIO
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8 uppercase min-h-[3.3em] sm:min-h-[2.2em]">
              We craft digital <br />
              <span className="text-orange-500 relative inline-block">
                {displayText}
                <span className="inline-block w-[3px] h-[0.8em] bg-orange-500 ml-1.5 animate-pulse align-middle" />
              </span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
              We don't build generic websites. We design and engineer immersive, high-performance web products, branding systems, and programmatic SEO solutions that scale with your business.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
