"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Target, Smartphone, HeartHandshake, Eye, Sparkles } from "lucide-react";

export default function LandingBenefits() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const benefits = [
    {
      icon: Target,
      title: "10+ Years Experience, 200+ Pages Delivered",
      description: "We are the best landing page development service because we combine a decade of technical execution with over 200 high-performing custom pages delivered globally.",
      accent: "from-orange-500 to-amber-500",
    },
    {
      icon: Sparkles,
      title: "CRO-Focused (Average 8–15% Conversion Rate)",
      description: "We design and build with conversion-rate optimization best practices to achieve average rates of 8–15%, compared to the standard 2–5% industry average.",
      accent: "from-rose-500 to-orange-500",
    },
    {
      icon: Zap,
      title: "Offshore Pricing: $25–50/hr (Save 60–75%)",
      description: "Get elite agency-level engineering quality at offshore rates ($25–50/hr), saving 60–75% compared to expensive US/UK agencies charging $150–200/hr.",
      accent: "from-amber-500 to-yellow-500",
    },
    {
      icon: Smartphone,
      title: "US/UK Timezone Support + Fast 5–7 Day Delivery",
      description: "We align with your local operational timezone for easy communication and offer standard 5–7 day rapid turnaround to sync with your ad campaigns.",
      accent: "from-orange-600 to-rose-600",
    },
    {
      icon: Eye,
      title: "5-Star Rated on Clutch & Google Reviews",
      description: "Backed by five-star corporate citations and verified reviews, proving our dedication to clean, compliant code and excellent client support.",
      accent: "from-rose-600 to-amber-600",
    },
    {
      icon: HeartHandshake,
      title: "Advanced Integrations & Tracking Setup",
      description: "All pages include custom CRM integrations (HubSpot, Salesforce) and tracking configurations (Google Analytics, Meta Pixel) with zero lead leak.",
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
            The Performance Difference
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide max-w-3xl leading-none">
            Why Choose Us for Your Landing Page Development?
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
