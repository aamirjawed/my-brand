"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Compass, Paintbrush, Code2, HeartHandshake, Rocket } from "lucide-react";

export default function CorporateProcessSteps() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      icon: Search,
      title: "Business Requirement Analysis",
      description: "We map stakeholders, core third-party system integrations, localization languages, and strict performance metrics to establish a solid roadmap."
    },
    {
      icon: Compass,
      title: "UI/UX Planning",
      description: "We design low-fidelity structural blueprint mockups to align page messaging, information flow, and CTA button placements."
    },
    {
      icon: Paintbrush,
      title: "Website Design",
      description: "We craft custom, premium visual assets, layout systems, and beautiful responsive wireframes aligned with your branding guidelines."
    },
    {
      icon: Code2,
      title: "Development & Optimization",
      description: "We write clean, modular Next.js components designed for rapid loading speeds, accessibility, and zero layout shift."
    },
    {
      icon: HeartHandshake,
      title: "SEO Setup",
      description: "We configure clean semantic trees, rich JSON-LD schema structures, and optimized server-side pre-rendering hooks to guarantee high search engine rankings."
    },
    {
      icon: Rocket,
      title: "Testing & Deployment",
      description: "We run end-to-end security audits, perform cross-device rendering tests, and deploy your site onto global edge CDN networks with uptime safeguards."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        
        {/* Process Header */}
        <div className="flex flex-col items-center justify-center text-center mb-20">
          <span className="font-extrabold text-xs text-orange-500 uppercase tracking-widest bg-orange-600/10 px-4 py-2 rounded-full border border-orange-500/20 mb-4">
            Development Lifecycle
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide">
            Our Corporate Website Development Process
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg mt-4">
            We follow a structured, audit-ready process to ensure your enterprise web application is delivered securely and on schedule.
          </p>
        </div>

        {/* Timeline Row Layout */}
        <div className="relative">
          
          {/* Vertical Connector Line (Only visible on medium/larger screens) */}
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
                  
                  {/* Left Column (Text for Even steps) */}
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

                  {/* Right Column (Text for Odd steps) */}
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
