"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Utensils, Compass, Users, DollarSign, Mic } from "lucide-react";

export default function Features() {
  const capabilities = [
    {
      num: "01",
      icon: Compass,
      title: "Tabletop Styling & Florals",
      description: "Custom table linens, premium glassware curation, and breathtaking floral centerpieces designed to match your event's theme and colour palette."
    },
    {
      num: "02",
      icon: Utensils,
      title: "Gourmet Menu Curation",
      description: "Liaising with award-winning chefs to draft bespoke multi-course menus, managing wine pairings, and accommodating complex dietary requests with ease."
    },
    {
      num: "03",
      icon: Sparkles,
      title: "Atmospheric Lighting & Staging",
      description: "Custom stage backdrops, spot lighting arrays, and crystal-clear acoustic systems to ensure keynotes, presenters, and entertainers sound incredible."
    },
    {
      num: "04",
      icon: Users,
      title: "VIP Seating Chart Logistics",
      description: "Advanced table mapping systems to handle complex diplomat and corporate hierarchy seating charts, ensuring frictionless entry for VIP guests."
    },
    {
      num: "05",
      icon: DollarSign,
      title: "Live Auction & Pledge Operations",
      description: "Integrating modern pledging systems, digital auction displays, and coordinating professional auctioneers to maximize charity fund outcomes."
    },
    {
      num: "06",
      icon: Mic,
      title: "MC & Talent Management",
      description: "Securing and managing high-profile Masters of Ceremonies, celebrity performers, live bands, and hosting green room hospitality."
    }
  ];

  return (
    <section id="features" className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">

        {/* Section Header */}
        <div className="max-w-3xl mb-20 text-left border-l-4 border-orange-600 pl-4 sm:pl-6">
          <span className="font-extrabold text-xs text-orange-600 uppercase tracking-widest block mb-2">
            Gala Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight leading-none">
            Curating Refined Hospitality
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4">
            A premium gala requires coordinating dozens of hospitality, design, and audio-visual details simultaneously. We orchestrate the entire production so you can focus on hosting.
          </p>
        </div>

        {/* Cardless Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="flex flex-col items-start pt-6 border-t border-slate-200/80 relative group"
              >
                {/* Header elements */}
                <div className="flex items-center justify-between w-full mb-6">
                  <div className="w-10 h-10 rounded-lg bg-orange-600/10 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono font-black text-slate-300 text-sm group-hover:text-orange-500 transition-colors duration-300">
                    {item.num}
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-black text-slate-900 uppercase tracking-wide mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
