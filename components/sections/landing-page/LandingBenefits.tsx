"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Target, Smartphone, HeartHandshake, Eye, Sparkles } from "lucide-react";

export default function LandingBenefits() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const benefits = [
    {
      icon: Target,
      title: "Better Lead Generation",
      description: "Direct campaigns into singular, conversion-focused pathways. Removing distracting navigation loops captures up to 3x more qualified leads for your startup.",
      accent: "from-orange-500 to-amber-500",
    },
    {
      icon: Sparkles,
      title: "Higher Ad Conversion Rates",
      description: "Match your paid search or social media ad copy directly to the page headline. This tight search intent alignment keeps ad costs down and ROI high.",
      accent: "from-rose-500 to-orange-500",
    },
    {
      icon: Zap,
      title: "Faster Page Speed",
      description: "Built on a static React core that finishes rendering in milliseconds. Slow sites kill sales—our lightweight pages load instantly to retain visitors.",
      accent: "from-amber-500 to-yellow-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Optimization First",
      description: "Over 60% of paid ad traffic comes from mobile screens. We design mobile-first interfaces that scale, tap, and load seamlessly across all devices.",
      accent: "from-orange-600 to-rose-600",
    },
    {
      icon: Eye,
      title: "Better User Experience",
      description: "Guide eyes down a structured path with clear typographic hierarchy, psychological anchors, and smooth, responsive design elements.",
      accent: "from-rose-600 to-amber-600",
    },
    {
      icon: HeartHandshake,
      title: "Lower Bounce Rates",
      description: "Instant visual appeal combined with clear value propositions captures user interest in under 3 seconds, keeping them on page to act.",
      accent: "from-yellow-500 to-orange-600",
    },
  ];

  return (
    <section className="py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-[30rem] h-[30rem] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        
        {/* Header */}
        <div className="w-full mb-20 border-l-4 border-orange-500 pl-6">
          <span className="font-extrabold text-xs text-orange-500 uppercase tracking-widest block mb-2">
            The Conversion Difference
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide max-w-2xl leading-none">
            Why Businesses Need High-Converting Landing Pages
          </h2>
        </div>

        {/* Transparent Grid Layout - Cardless approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={idx}
                className="relative group cursor-default"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* SVG doodle path animated on hover */}
                <div className="absolute -top-4 -left-4 w-12 h-12 pointer-events-none opacity-30 group-hover:opacity-100 transition-opacity duration-300">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <motion.path
                      d="M2,24 C10,24 12,12 24,12 C36,12 38,24 46,24"
                      stroke="url(#doodle-gradient)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={isHovered ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                    <defs>
                      <linearGradient id="doodle-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f97316" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Content block with asymmetric spacing */}
                <div className="pt-6 relative z-10">
                  {/* Icon & Index Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-full bg-slate-900 border border-slate-800 text-orange-500 group-hover:text-white group-hover:bg-gradient-to-br ${benefit.accent} transition-all duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-4xl font-black text-slate-800 select-none group-hover:text-slate-700 transition-colors duration-300">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold uppercase tracking-wide mb-3 text-white group-hover:text-orange-400 transition-colors duration-300">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
