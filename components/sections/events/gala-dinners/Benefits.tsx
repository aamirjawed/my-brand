"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, Compass, Gift, ShieldAlert } from "lucide-react";

export default function Benefits() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const list = [
    {
      icon: Award,
      title: "Elevated Brand Prestige",
      desc: "We coordinate elegant award stages, high-end guest lists, and red-carpet experiences that reinforce your corporate prestige and leave attendees talking for months."
    },
    {
      icon: Compass,
      title: "Bespoke Thematic Aesthetics",
      desc: "Our design team transforms standard ballrooms into custom-styled spaces, integrating exquisite centerpieces, ambient lighting, and bespoke tablescapes."
    },
    {
      icon: ShieldAlert,
      title: "Frictionless Guest Relations",
      desc: "We manage dietary allocations, VIP credentials, seat charting changes, and live hostess assistance to guarantee a smooth experience for every guest."
    },
    {
      icon: Gift,
      title: "Maximized Philanthropic Impact",
      desc: "By combining digital pledge setups with live auctioneer coordination and interactive donation gauges, we help you exceed your fundraising expectations."
    }
  ];

  return (
    <section className="py-28 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute right-0 bottom-0 w-[40rem] h-[40rem] bg-orange-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Bold Sticky Header */}
          <div className="col-span-1 lg:col-span-5 lg:sticky lg:top-32 text-left">
            <span className="font-extrabold text-xs text-orange-600 uppercase tracking-widest block mb-2">
              The Gala Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight leading-none mb-6">
              Why Prestigious Brands Choose Us
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-10 font-medium">
              We bypass generic formulas. We design completely custom, high-end gala experiences that reflect your brand's unique identity and hospitality criteria.
            </p>

            {/* Asymmetric SVG hand-drawn graphic element */}
            <div className="hidden lg:block w-48 h-24 text-orange-500/60 opacity-80">
              <svg viewBox="0 0 200 100" className="w-full h-full fill-none">
                <motion.path
                  d="M 10 90 C 40 40, 100 10, 190 20"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
                <circle cx="190" cy="20" r="5" fill="currentColor" />
                <path d="M 175 12 L 190 20 L 180 35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Right Column: Numbered cardless row entries */}
          <div className="col-span-1 lg:col-span-7 space-y-2">
            {list.map((item, idx) => {
              const Icon = item.icon;
              const isHovered = hoveredIndex === idx;

              return (
                <div
                  key={idx}
                  className="py-8 border-b border-slate-200/80 transition-all duration-300 relative group cursor-default"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex gap-6 sm:gap-8 items-start">
                    
                    {/* Index Counter & Icon */}
                    <div className="flex flex-col items-center shrink-0">
                      <span className={`font-mono font-black text-2xl mb-2 transition-colors duration-300 ${
                        isHovered ? "text-orange-600" : "text-slate-300"
                      }`}>
                        0{idx + 1}
                      </span>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                        isHovered 
                          ? "bg-orange-600 border-orange-600 text-white scale-110 shadow-lg shadow-orange-500/20" 
                          : "bg-white border-slate-200 text-slate-500"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-2 flex-1">
                      <h3 className={`text-xl font-black uppercase tracking-wide transition-colors duration-300 ${
                        isHovered ? "text-orange-600" : "text-slate-900"
                      }`}>
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
