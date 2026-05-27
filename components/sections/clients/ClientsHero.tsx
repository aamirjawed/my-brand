"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

export default function ClientsHero() {
  return (
    <section className="relative pt-44 pb-32 overflow-hidden bg-slate-950 text-white">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950 z-10" />
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000&auto=format&fit=crop"
          alt="Partnership Background"
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
              <Users className="w-3.5 h-3.5" />
              OUR PARTNERSHIPS
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8 uppercase">
              POWERING DIGITAL <br />
              <span className="text-orange-500 relative inline-block">LEADERS</span>.
            </h1>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
              We collaborate with visionary companies and event organizers to architect products, websites, and custom tools that drive real, measurable business impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
