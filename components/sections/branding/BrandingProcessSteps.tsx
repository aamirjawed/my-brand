"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Layers, Palette, FileText, Package } from "lucide-react";

export default function BrandingProcessSteps() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      icon: Search,
      title: "Brand Discovery & Research",
      description: "We run deep discovery sessions to understand your business vision, target customer psychology, competitive landscape, and the unique positioning your brand needs to own — before a single design concept is ever touched."
    },
    {
      icon: PenTool,
      title: "Concept Sketching & Ideation",
      description: "Our designers produce multiple distinct logo directions rooted in your brand strategy — exploring wordmarks, lettermarks, pictorial marks, and abstract symbols — with clear rationale for every creative decision."
    },
    {
      icon: Layers,
      title: "Logo Refinement & Variants",
      description: "We refine your chosen concept to pixel perfection across all required variations — primary, stacked, reversed, and monogram — ensuring visual harmony and technical correctness at every scale from favicon to billboard."
    },
    {
      icon: Palette,
      title: "Color & Typography System",
      description: "We architect your complete visual language — primary and secondary color palettes with full print/digital specifications, curated typeface pairings, and hierarchy rules that create instant brand recognition."
    },
    {
      icon: FileText,
      title: "Brand Guidelines Production",
      description: "We compile everything into a comprehensive Brand Bible document — covering all usage rules, logo spacing, color codes, font stacks, and photographic style — giving your team an ironclad guide to maintain perfect consistency forever."
    },
    {
      icon: Package,
      title: "Final File Delivery & Handoff",
      description: "We deliver every asset as production-ready files in all formats — SVG, PNG, PDF, EPS, WEBP — organized into a clean folder structure, ready for your web team, printer, and marketing team to use immediately."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">

        <div className="flex flex-col items-center justify-center text-center mb-20">
          <span className="font-extrabold text-xs text-orange-500 uppercase tracking-widest bg-orange-600/10 px-4 py-2 rounded-full border border-orange-500/20 mb-4">
            Our Design Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide">
            How We Build Your Brand
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg mt-4">
            Every iconic brand starts with a deliberate, structured process. Here is our end-to-end system from discovery to fully packaged delivery.
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
      </div>
    </section>
  );
}
