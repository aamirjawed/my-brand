"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Globe, Code2, Heart, Gauge, Check } from "lucide-react";

export default function LandingTechnical() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const pillars = [
    {
      icon: Gauge,
      title: "Core Web Vitals Hook",
      description: "We optimize for Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and First Input Delay (FID) to guarantee a flawless page experience score.",
      metric: "LCP < 1.2s"
    },
    {
      icon: Globe,
      title: "Semantic HTML & Metadata",
      description: "Writing structural SEO wrappers with descriptive meta title tags, Open Graph previews, and structured JSON-LD schemas that search bots can index instantly.",
      metric: "SEO Index: 100/100"
    },
    {
      icon: Cpu,
      title: "Lightweight Image Formats",
      description: "Automatically convert asset files to next-generation formats like AVIF or WebP, utilizing lazy-loading attributes to avoid main-thread rendering blocks.",
      metric: "-70% Image Size"
    },
    {
      icon: Code2,
      title: "Clean Code & Bundle Shrinking",
      description: "Zero heavy JavaScript libraries. We compile custom interactive visual elements using pure React and clean styled classes, reducing payload overhead.",
      metric: "< 50kb CSS/JS"
    }
  ];

  return (
    <section className="py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background wobbly accents */}
      <div className="absolute right-0 bottom-0 w-[45rem] h-[45rem] bg-orange-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        
        {/* Header */}
        <div className="w-full mb-20 border-l-4 border-orange-500 pl-6">
          <span className="font-extrabold text-xs text-orange-500 uppercase tracking-widest block mb-2">
            Technical Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide max-w-2xl leading-none">
            SEO-Optimized & Performance-Focused Landing Pages
          </h2>
        </div>

        {/* Technical Dashboard Layout (Split Column, cardless) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive Pillars Grid */}
          <div className="lg:col-span-7 space-y-12">
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
              Driving conversions requires more than a pretty layout. Search engine crawlers and users demand lightning-fast page loading and total mobile responsiveness. We configure every line of code to conform with search-engine standards.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                const isHovered = hoveredIdx === idx;

                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className="relative group cursor-default"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-slate-950 text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-base uppercase tracking-wide text-white group-hover:text-orange-400 transition-colors">
                        {pillar.title}
                      </h3>
                    </div>

                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-3">
                      {pillar.description}
                    </p>

                    {/* Metric pill */}
                    <div className="inline-block px-2.5 py-1 bg-slate-950/80 border border-slate-800 rounded-full text-[10px] font-mono font-bold text-emerald-400">
                      {pillar.metric}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Lighthouse Metric Panel (Sleek custom border graphic) */}
          <div className="lg:col-span-5">
            <div className="relative p-8 bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl flex flex-col items-center justify-center text-center overflow-hidden">
              {/* Glow overlay */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-black mb-8 block">
                Production Lighthouse Report
              </span>

              {/* Huge circular speed dial */}
              <div className="relative w-44 h-44 flex items-center justify-center mb-8">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background track circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#1e293b"
                    strokeWidth="8"
                  />
                  {/* Glowing progress circle */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="8"
                    strokeDasharray="251.2"
                    initial={{ strokeDashoffset: 251.2 }}
                    whileInView={{ strokeDashoffset: 12.5 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-5xl font-black text-white font-mono leading-none">95+</span>
                  <span className="text-[9px] text-emerald-400 font-extrabold uppercase tracking-widest mt-1">Mobile Speed</span>
                </div>
              </div>

              {/* Checked specs lists */}
              <div className="w-full space-y-3 pt-6 border-t border-slate-900 text-left">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Lighthouse SEO Score</span>
                  </div>
                  <span className="font-bold text-emerald-400 font-mono">100/100</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Cumulative Layout Shift</span>
                  </div>
                  <span className="font-bold text-emerald-400 font-mono">0.00</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>First Contentful Paint</span>
                  </div>
                  <span className="font-bold text-emerald-400 font-mono">0.8s</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
