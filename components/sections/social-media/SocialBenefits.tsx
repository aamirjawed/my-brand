"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Users, Eye, Heart, Calendar, Target } from "lucide-react";

export default function SocialBenefits() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const benefits = [
    {
      icon: Sparkles,
      title: "Consistent branding",
      description: "Establishing a unified visual style that makes your business immediately recognizable across all platform feeds."
    },
    {
      icon: Users,
      title: "Better audience engagement",
      description: "Prompt responses, visual dialogue, and direct comments that foster a highly active brand community."
    },
    {
      icon: Eye,
      title: "Improved online visibility",
      description: "Active, optimized profiles rank in Google search results and attract thousands of organic profile views."
    },
    {
      icon: Heart,
      title: "Higher customer trust",
      description: "Polished templates and educational updates show you run an active, reliable, and professional business."
    },
    {
      icon: Calendar,
      title: "Content consistency",
      description: "Calculated content planners keep updates steady, preventing follower drop-offs and low impression weeks."
    },
    {
      icon: Target,
      title: "Growth-focused marketing",
      description: "Direct lead funnels, product launch promos, and target conversions built directly into your profile links."
    }
  ];

  return (
    <section className="py-28 bg-white text-slate-900 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.01] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        
        {/* Header */}
        <div className="w-full mb-20 border-l-4 border-slate-900 pl-6 text-left">
          <span className="font-extrabold text-xs text-slate-500 uppercase tracking-widest block mb-2">
            Value Returns
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide max-w-4xl leading-[1.1] text-slate-955">
            Benefits of Professional Social Media Management
          </h2>
        </div>

        {/* Cardless grid with top borders & animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {benefits.map((feat, idx) => {
            const Icon = feat.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="relative group cursor-default pt-6 border-t border-slate-200 hover:border-orange-500/30 transition-colors duration-300 text-left"
              >
                {/* Micro-animated line indicator */}
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
                    <div className="p-3 bg-slate-950 text-orange-400 rounded-2xl group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Benefit 0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-black uppercase tracking-wide text-slate-900 group-hover:text-orange-600 transition-colors duration-300">
                    {feat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-650 text-sm sm:text-base leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                    {feat.description}
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
