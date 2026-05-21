"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Palette, Calendar, Image, MessageSquare, TrendingUp } from "lucide-react";

export default function SocialContentStrategy() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const strategies = [
    {
      icon: Search,
      title: "Audience research",
      description: "We audit your followers, analyze active time slots, catalog customer queries, and define platform interest targets."
    },
    {
      icon: Palette,
      title: "Brand consistency",
      description: "We establish unified color tokens, visual formats, and customized post templates to reinforce brand recognition."
    },
    {
      icon: Calendar,
      title: "Content planning",
      description: "We map out content calendars in advance, ensuring balanced posting across info, engagement, and promotional topics."
    },
    {
      icon: Image,
      title: "Visual storytelling",
      description: "We design engaging layouts, Carousel sliders, and high-impact Reels clips that stop readers from scrolling past."
    },
    {
      icon: MessageSquare,
      title: "Engagement optimization",
      description: "We integrate visual hooks, question headers, and custom comment replies to maximize natural platform reach."
    },
    {
      icon: TrendingUp,
      title: "Trend analysis",
      description: "We monitor industry changes, audio tracks, and pop-culture references weekly to keep your brand highly relevant."
    }
  ];

  return (
    <section className="py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Background wobbly lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[35rem] h-[35rem] bg-orange-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Sticky Context */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 text-left space-y-6">
            <span className="font-extrabold text-xs text-orange-400 uppercase tracking-widest block">
              Execution Strategy
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide leading-[1.1]">
              Our Social Media Content Strategy
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md font-medium">
              We focus heavily on digital branding and audience engagement. We don't just dump generic stock images; we build actual visual stories that represent your authority.
            </p>
            <div className="pt-4 border-t border-slate-800 max-w-sm">
              <span className="text-[10px] font-black uppercase tracking-widest text-orange-450">EEAT Content Rule</span>
              <p className="text-xs text-slate-500 italic mt-1 leading-relaxed">
                "Google and social algorithms heavily favor accounts that produce unique, high-value visual graphics and sustain regular community engagement schedules."
              </p>
            </div>
          </div>

          {/* Right Column: Cardless row list with dividing lines */}
          <div className="lg:col-span-7 divide-y divide-slate-800 border-t border-slate-800">
            {strategies.map((strat, idx) => {
              const Icon = strat.icon;
              const isHovered = hoveredIdx === idx;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="py-8 transition-all duration-300 relative group text-left"
                >
                  <div className="flex gap-6 items-start relative z-10">
                    {/* Index Number */}
                    <span className="text-3xl font-black text-slate-800 select-none group-hover:text-orange-400 transition-colors duration-300">
                      0{idx + 1}
                    </span>

                    {/* Icon & Content */}
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-slate-900 border border-slate-800 text-orange-400 group-hover:bg-orange-650 group-hover:text-white transition-colors duration-300 rounded-xl">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="text-lg font-black uppercase tracking-wide text-white group-hover:text-orange-400 transition-colors duration-300">
                          {strat.title}
                        </h3>
                      </div>
                      <p className="text-slate-400 text-sm sm:text-base leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                        {strat.description}
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
