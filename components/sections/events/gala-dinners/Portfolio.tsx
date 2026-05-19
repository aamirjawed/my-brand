"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Portfolio() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const projects = [
    {
      title: "The Legacy Charity Ball",
      type: "Charity Fundraiser Ball",
      details: "Hosted 600 seated guests at the Grand Plaza, managing a live charity auction, table florals, and custom stage rigging that helped raise $2.4M for medical research.",
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Global Enterprise Awards Night",
      type: "Corporate Award Ceremony",
      details: "A black-tie event featuring multi-camera live feeds, custom award trophy pedestals, a gourmet 4-course banquet, and backstage MC talent coordination.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Centennial Diplomatic Dinner",
      type: "State Banquet",
      details: "A high-security VIP banquet hosting global diplomats. Conducted multi-lingual translation loops, precise security zoning, and historic tabletop designs.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">
        
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="font-extrabold text-xs text-orange-600 uppercase tracking-widest block mb-2">
            Selected Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight leading-none">
            Gala Formats We Produce
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4">
            From fundraising balls to high-security diplomatic banquets, we design and produce events tailored specifically for your target audience size.
          </p>
        </div>

        {/* Cardless Editorial Project List */}
        <div className="space-y-0 border-t border-slate-200">
          {projects.map((project, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="py-12 border-b border-slate-200 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 group cursor-default transition-all duration-300"
              >
                {/* Text Side */}
                <div className="flex-1 space-y-4 max-w-xl text-left">
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold text-xs text-orange-600 uppercase tracking-widest">
                      {project.type}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-wide group-hover:text-orange-600 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                    {project.details}
                  </p>
                </div>

                {/* Image Side (Cardless scale wrapper) */}
                <div className="w-full lg:w-[350px] aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden relative border border-slate-100 shrink-0">
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors duration-500 z-10" />
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                    animate={{ scale: isHovered ? 1.08 : 1 }}
                  />
                  
                  {/* Floating click indicator */}
                  <div className="absolute bottom-4 right-4 bg-white/90 text-slate-900 p-2.5 rounded-full z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                    <ArrowUpRight className="w-4 h-4 text-orange-600" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
