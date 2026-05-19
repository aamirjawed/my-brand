"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Layout, Code2, ShieldAlert, Award } from "lucide-react";

export default function LandingProcessSteps() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      icon: Search,
      title: "Research & Strategy",
      description: "We dive deep into your market niche, target audience, and ad campaigns to map out a clear conversion strategy."
    },
    {
      icon: PenTool,
      title: "Wireframing",
      description: "We design low-fidelity structural blueprint mockups to align page messaging, information flow, and CTA button placements."
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      description: "We craft custom, premium visual assets, organic vector doodles, and beautiful responsive layouts aligned with your branding."
    },
    {
      icon: Code2,
      title: "Development",
      description: "We write clean, modular Next.js components designed for rapid loading speeds, accessibility, and zero layout shift."
    },
    {
      icon: ShieldAlert,
      title: "Optimization",
      description: "We audit page performance, optimize images, verify form integrations, and align Core Web Vitals to guarantee speed."
    },
    {
      icon: Award,
      title: "Launch & Testing",
      description: "We deploy the page to production, set up analytics trackers, and prepare A/B test variations to continuously scale conversions."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background wobbly abstract grids */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        
        {/* Process Header */}
        <div className="flex flex-col items-center justify-center text-center mb-20">
          <span className="font-extrabold text-xs text-orange-500 uppercase tracking-widest bg-orange-600/10 px-4 py-2 rounded-full border border-orange-500/20 mb-4">
            Proven Conversion Blueprint
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide">
            Our Landing Page Development Process
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg mt-4">
            We bypass cookie-cutter layouts. Here is our modular, state-of-the-art process from initial campaign strategy to live landing execution.
          </p>
        </div>

        {/* Wobbly Thread Timeline - Cardless Row Layout */}
        <div className="relative">
          
          {/* Vertical Wobbly Connector Line (Only visible on medium/larger screens) */}
          <div className="absolute left-[30px] md:left-1/2 top-4 bottom-4 w-[4px] -translate-x-1/2 bg-slate-800 rounded-full hidden sm:block">
            {/* Animated filling effect based on hover */}
            <motion.div
              className="w-full bg-orange-600 rounded-full origin-top"
              initial={{ height: "0%" }}
              animate={{ height: hoveredStep !== null ? `${((hoveredStep + 1) / steps.length) * 100}%` : "0%" }}
              transition={{ duration: 0.4 }}
            />
          </div>

          {/* Process Timeline Steps list */}
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
                  
                  {/* Left Column (Text for Even steps: 01, 03, 05) */}
                  <div className="w-full sm:w-1/2 sm:pr-16 flex flex-col justify-center items-start sm:items-end text-left sm:text-right">
                    {isEven && (
                      <div className="space-y-3">
                        <div className="text-orange-500 font-extrabold text-sm tracking-widest uppercase">
                          Step 0{idx + 1}
                        </div>
                        <h3 className={`text-2xl font-black uppercase transition-colors duration-300 ${
                          isHovered ? "text-orange-500" : "text-white"
                        }`}>
                          {step.title}
                        </h3>
                        <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md sm:ml-auto">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Center Node Column */}
                  <div className="absolute left-[30px] md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex items-center justify-center pointer-events-none hidden sm:flex">
                    <motion.div
                      className={`w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all duration-300 ${
                        isHovered
                          ? "bg-orange-600 border-white text-white scale-110 shadow-[0_0_20px_rgba(234,88,12,0.5)]"
                          : "bg-slate-950 border-slate-800 text-slate-400"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                  </div>

                  {/* Right Column (Text for Odd steps: 02, 04, 06) */}
                  <div className="w-full sm:w-1/2 sm:pl-16 flex flex-col justify-center items-start text-left">
                    {!isEven && (
                      <div className="space-y-3">
                        <div className="text-orange-500 font-extrabold text-sm tracking-widest uppercase">
                          Step 0{idx + 1}
                        </div>
                        <h3 className={`text-2xl font-black uppercase transition-colors duration-300 ${
                          isHovered ? "text-orange-500" : "text-white"
                        }`}>
                          {step.title}
                        </h3>
                        <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md">
                          {step.description}
                        </p>
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
