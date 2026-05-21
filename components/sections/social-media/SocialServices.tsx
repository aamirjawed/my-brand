"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PenTool, Calendar, Users, Compass, ShieldAlert, Hash, BarChart3, Palette } from "lucide-react";

export default function SocialServices() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const services = [
    {
      icon: PenTool,
      title: "Content Creation",
      description: "Custom graphic designs, video clip drafts, and copy headlines formatted specifically for social consumption."
    },
    {
      icon: Calendar,
      title: "Post Scheduling",
      description: "Pre-scheduling updates across active platforms during high-traffic view slots to maximize audience impressions."
    },
    {
      icon: Users,
      title: "Audience Engagement",
      description: "Monitoring comment lines, replying to direct inquiries, and stimulating discussion to build community trust."
    },
    {
      icon: Compass,
      title: "Social Media Strategy",
      description: "Building content pillars, planning brand campaigns, and setting profile benchmarks to scale visibility."
    },
    {
      icon: ShieldAlert,
      title: "Profile Optimization",
      description: "Refining account descriptions, styling avatar photos, and setting custom link-in-bio grids for lead capture."
    },
    {
      icon: Hash,
      title: "Hashtag Research",
      description: "Analyzing high-relevance tag groups, search terms, and trending keywords to expand discovery reaches."
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Bi-weekly growth reporting mapping follower fluctuations, click-through rates, and top-performing post models."
    },
    {
      icon: Palette,
      title: "Branding Support",
      description: "Standardizing color tones, layout styles, and type rules to establish a unified digital signature."
    }
  ];

  return (
    <section className="py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Background wobbly lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 w-[35rem] h-[35rem] bg-orange-650/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        
        {/* Header */}
        <div className="w-full mb-20 border-l-4 border-orange-500 pl-6 text-left">
          <span className="font-extrabold text-xs text-orange-400 uppercase tracking-widest block mb-2">
            Social Scope
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide max-w-4xl leading-[1.1]">
            What’s Included in Our Social Media Management Services
          </h2>
        </div>

        {/* Cardless Grid with top borders & animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="relative group cursor-default pt-6 border-t border-slate-800 hover:border-orange-500/30 transition-colors duration-300 text-left"
              >
                {/* Micro-animated top-line indicator */}
                <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden pointer-events-none">
                  <motion.div
                    className="h-full bg-gradient-to-r from-orange-500 to-amber-500"
                    initial={{ x: "-100%" }}
                    animate={isHovered ? { x: "0%" } : { x: "-100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                <div className="space-y-4">
                  {/* Icon & Index */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-slate-900 border border-slate-800 text-orange-450 rounded-2xl group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-black text-slate-700 select-none group-hover:text-orange-400 transition-colors duration-300">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-black uppercase tracking-wide text-white group-hover:text-orange-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {service.description}
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
