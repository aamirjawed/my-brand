"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Layers, Code2, Zap, Rocket } from "lucide-react";

export default function SpaProcessSteps() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      icon: Search,
      title: "Requirement Analysis",
      description: "We dive deep into your business requirements, user persona workflows, and functional scopes to formulate a robust engineering plan."
    },
    {
      icon: PenTool,
      title: "UI/UX Planning",
      description: "We map out low-friction visual layouts, interactive wireframe components, and smooth design systems to guarantee an app-like feel."
    },
    {
      icon: Layers,
      title: "Frontend Architecture",
      description: "We design a scalable codebase using modern React components, client-side routing, and code-splitting structures."
    },
    {
      icon: Code2,
      title: "API Integration",
      description: "We build secure data fetchers linked to backend APIs, managing optimistic rendering updates and data cache layers."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "We optimize hydration, lazy load off-screen components, compress bundle sizes, and align key Core Web Vitals to pass search speed assessments."
    },
    {
      icon: Rocket,
      title: "Testing & Deployment",
      description: "We test code responsiveness under simulated user stress and deploy your SPA to global edge networks for sub-second delivery."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">

        <div className="flex flex-col items-center justify-center text-center mb-20">
          <span className="font-extrabold text-xs text-orange-500 uppercase tracking-widest bg-orange-600/10 px-4 py-2 rounded-full border border-orange-500/20 mb-4">
            Engineering Pipeline
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide">
            Our SPA Development Process
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg mt-4 font-medium">
            Building a true application in the browser requires strict engineering discipline. Here is our end-to-end technical process for shipping flawless SPAs.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[30px] md:left-1/2 top-4 bottom-4 w-[4px] -translate-x-1/2 bg-slate-800 rounded-full hidden sm:block">
            <motion.div
              className="w-full bg-orange-600 rounded-full origin-top"
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
                        <div className="text-orange-500 font-extrabold text-sm tracking-widest uppercase">Step 0{idx + 1}</div>
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
                        <div className="text-orange-500 font-extrabold text-sm tracking-widest uppercase">Step 0{idx + 1}</div>
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

        {/* EEAT Personal Experience Statement Box */}
        <div className="mt-20 p-8 border border-slate-800 rounded-3xl bg-slate-950/50 backdrop-blur-sm max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 text-left">
          <div className="w-16 h-16 rounded-full bg-orange-600/10 border border-orange-500/20 flex items-center justify-center shrink-0">
            <span className="text-orange-500 font-black text-xl">EEAT</span>
          </div>
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-orange-500 mb-1">
              Field Notes: Real-World SPA Architecture Experience
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
              "In many SPA projects, optimizing hydration, lazy loading, and bundle size significantly improved user experience and loading performance. By establishing tight API boundaries and memoizing rendering trees, we consistently achieve sub-second client transitions."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
