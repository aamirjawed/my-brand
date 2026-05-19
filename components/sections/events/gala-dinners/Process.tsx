"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Clipboard, Compass, HardHat, CalendarCheck, BarChart3 } from "lucide-react";

export default function Process() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      icon: Compass,
      title: "Theme & Decor Ideation",
      description: "We brainstorm and outline the evening's primary theme, designing custom tablescapes, lighting schemes, and florist specifications."
    },
    {
      icon: Clipboard,
      title: "Catering Tastings & Sourcing",
      description: "We source custom caterers and coordinate direct food tasting sessions with chefs to secure high-quality dining menus and select pairing wines."
    },
    {
      icon: Sparkles,
      title: "Staging & Technical Plotting",
      description: "Constructing custom stage backdrops, plotting lighting trusses, securing wireless microphone channels, and mapping projection specs."
    },
    {
      icon: HardHat,
      title: "VIP Registry & Seating Charting",
      description: "Managing RSVP registries, verifying diplomatic or executive seating ranks, preparing credential badges, and setting up entrance check-in databases."
    },
    {
      icon: CalendarCheck,
      title: "The Gala Event Evening",
      description: "Our senior event coordinators manage load-in, floor hosting, kitchen plating times, and speaker cues in the background."
    },
    {
      icon: BarChart3,
      title: "Reconciliation & Tear-down",
      description: "Disassembling AV arrays, returning table assets, concluding catering accounting, and providing comprehensive feedback surveys."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">

        <div className="flex flex-col items-center justify-center text-center mb-20">
          <span className="font-extrabold text-xs text-orange-500 uppercase tracking-widest bg-orange-600/10 px-4 py-2 rounded-full border border-orange-500/20 mb-4">
            Masterful Execution
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide">
            Our Planning Process
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg mt-4">
            Flawless galas are the result of rigorous, methodical planning. Here is how we guide your dinner from initial concept to a standing ovation.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[30px] md:left-1/2 top-4 bottom-4 w-[4px] -translate-x-1/2 bg-slate-800 rounded-full hidden sm:block">
            <motion.div
              className="w-full bg-orange-500 rounded-full origin-top"
              initial={{ height: "0%" }}
              animate={{ height: hoveredStep !== null ? `${((hoveredStep + 1) / steps.length) * 100}%` : "0%" }}
              transition={{ duration: 0.4 }}
            />
          </div>

          <div className="space-y-12 sm:space-y-24 relative">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;
              const isHovered = hoveredStep === idx;

              return (
                <motion.div
                  key={idx}
                  onMouseEnter={() => setHoveredStep(idx)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className="flex flex-col sm:flex-row items-center gap-6 sm:gap-0 relative w-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                >
                  <div className="w-full sm:w-1/2 sm:pr-16 flex flex-col justify-center items-start sm:items-end text-left sm:text-right">
                    {isEven && (
                      <div className="space-y-3">
                        <div className="text-orange-500 font-extrabold text-sm tracking-widest uppercase">Phase 0{idx + 1}</div>
                        <h3 className={`text-2xl font-black uppercase transition-colors duration-300 ${isHovered ? "text-orange-500" : "text-white"}`}>{step.title}</h3>
                        <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md sm:ml-auto">{step.description}</p>
                      </div>
                    )}
                  </div>

                  <div className="absolute left-[30px] md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex items-center justify-center pointer-events-none hidden sm:flex">
                    <motion.div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all duration-300 ${isHovered ? "bg-orange-600 border-white text-white scale-110 shadow-[0_0_20px_rgba(234,88,12,0.5)]" : "bg-slate-950 border-slate-800 text-slate-400"}`}>
                      <Icon className="w-6 h-6" />
                    </motion.div>
                  </div>

                  <div className="w-full sm:w-1/2 sm:pl-16 flex flex-col justify-center items-start text-left">
                    {!isEven && (
                      <div className="space-y-3">
                        <div className="text-orange-500 font-extrabold text-sm tracking-widest uppercase">Phase 0{idx + 1}</div>
                        <h3 className={`text-2xl font-black uppercase transition-colors duration-300 ${isHovered ? "text-orange-500" : "text-white"}`}>{step.title}</h3>
                        <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md">{step.description}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
