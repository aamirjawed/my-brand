"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Map, Paintbrush, Code2, Gauge, Award } from "lucide-react";

export default function CustomProcessSteps() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      icon: Search,
      title: "Requirement Analysis",
      description: "We audit your business requirements, target audience, CRM configurations, and software sync parameters."
    },
    {
      icon: Map,
      title: "Strategy & Planning",
      description: "We design high-fidelity system maps, database structures, content schemas, and hosting paths."
    },
    {
      icon: Paintbrush,
      title: "UI/UX Design",
      description: "We design custom layout grids and visual token frameworks tailored precisely to your brand guidelines."
    },
    {
      icon: Code2,
      title: "Custom Development",
      description: "Our senior developers build lightweight, pre-rendered React page structures using Next.js core frameworks."
    },
    {
      icon: Gauge,
      title: "SEO & Performance Optimization",
      description: "We optimize Largest Contentful Paint (LCP) benchmarks, compress asset payloads, and build custom JSON-LD schemas."
    },
    {
      icon: Award,
      title: "Testing & Deployment",
      description: "We execute cross-browser responsiveness tests, run security audits, and deploy to edge networks."
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
            Proven Engineering Blueprint
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide">
            Our Custom Website Development Process
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg mt-4">
            We write clean, modular, and optimized code from scratch. Here is our state-of-the-art process from business strategy to live web launch.
          </p>
        </div>

        {/* Wobbly Thread Timeline - Cardless Row Layout */}
        <div className="relative">
          
          {/* Vertical Wobbly Connector Line */}
          <div className="absolute left-[30px] md:left-1/2 top-4 bottom-4 w-[4px] -translate-x-1/2 bg-slate-800 rounded-full hidden sm:block">
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
                  
                  {/* Left Column */}
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

                  {/* Right Column */}
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

        {/* EEAT Personal Experience Statement Box */}
        <div className="mt-20 p-8 border border-slate-800 rounded-3xl bg-slate-950/50 backdrop-blur-sm max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 text-left">
          <div className="w-16 h-16 rounded-full bg-orange-600/10 border border-orange-500/20 flex items-center justify-center shrink-0">
            <span className="text-orange-500 font-black text-xl">EEAT</span>
          </div>
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-orange-500 mb-1">
              Field Notes: Real-World Web Performance
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
              "In many enterprise web refactoring projects, decoupling database lookups from the layout layer and pre-rendering static assets to global CDNs reduced load latency by 80%. This technical optimization keeps user bounce rates low and improves core search engine visibility."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
