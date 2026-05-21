"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Building2, FileText, Globe, Smartphone, LayoutDashboard, ShoppingBag, Briefcase, Cpu, ArrowRight } from "lucide-react";

export default function UiUxSolutions() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const solutions = [
    {
      icon: Building2,
      title: "Business Websites",
      description: "Custom branding assets crafted to establish industry credibility, boost local inquiries, and direct leads to action grids."
    },
    {
      icon: FileText,
      title: "Landing Pages",
      description: "High-conversion promo landing designs optimizing advertising campaigns, email capture points, and event lists."
    },
    {
      icon: Globe,
      title: "Web Applications",
      description: "Interactive browser application interfaces engineered with seamless components, state managers, and filters."
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Sleek iOS & Android screens emphasizing thumb-zone placement, touch gestures, and light/dark theme toggles."
    },
    {
      icon: LayoutDashboard,
      title: "Dashboards",
      description: "Admin dashboards organizing telemetry charts, business analytics, logs, and database metrics cleanly."
    },
    {
      icon: ShoppingBag,
      title: "E-commerce Interfaces",
      description: "Visual catalog pages, filtering panels, cart drawers, and frictionless checkouts that double store conversions."
    },
    {
      icon: Briefcase,
      title: "Corporate Websites",
      description: "Enterprise identity sites with global language routers, secure talent databases, and integrated news blocks."
    },
    {
      icon: Cpu,
      title: "SaaS Platforms",
      description: "Modern software interface screens built to streamline dashboard features, sign-ups, and user settings."
    }
  ];

  return (
    <section className="py-28 bg-white text-slate-900 relative overflow-hidden">
      {/* Background wobbly lines */}
      <div className="absolute inset-0 opacity-[0.01] bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        
        {/* Header */}
        <div className="w-full mb-20 border-l-4 border-slate-900 pl-6 text-left">
          <span className="font-extrabold text-xs text-slate-500 uppercase tracking-widest block mb-2">
            Scope of Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide max-w-4xl leading-[1.1]">
            UI/UX Solutions We Design
          </h2>
        </div>

        {/* Cardless Interactive List - Zero container cards */}
        <div className="space-y-1 divide-y divide-slate-100 border-y border-slate-100">
          {solutions.map((sol, idx) => {
            const Icon = sol.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="py-8 transition-all duration-300 relative group text-left cursor-pointer"
              >
                {/* Active line indicator at the left */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-orange-650 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center pl-6">
                  
                  {/* Left Column: Icon and Title */}
                  <div className="lg:col-span-4 flex items-center gap-4">
                    <div className="p-2.5 bg-slate-950 text-orange-400 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 rounded-xl">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-black uppercase tracking-wide text-slate-800 group-hover:text-orange-600 transition-colors duration-300">
                      {sol.title}
                    </h3>
                  </div>

                  {/* Middle Column: Short Description */}
                  <div className="lg:col-span-7">
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                      {sol.description}
                    </p>
                  </div>

                  {/* Right Column: Arrow Indicator */}
                  <div className="lg:col-span-1 flex justify-end hidden lg:flex">
                    <ArrowRight className="w-5 h-5 text-slate-200 group-hover:text-orange-600 group-hover:translate-x-2 transition-all duration-300" />
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
