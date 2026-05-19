"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative pt-44 pb-32 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950 z-10" />
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
          alt="Our Team"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center"
          >

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.15] tracking-tight mb-8">
              We are <span className="text-orange-500 relative inline-block">engineers</span>, <br className="hidden sm:block" />
              not just an agency.
            </h1>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
              We started this company because we were tired of the traditional agency model. We don't farm out work, we don't cut corners, and we don't ship code we wouldn't use ourselves.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
