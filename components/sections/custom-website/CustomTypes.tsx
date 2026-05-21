"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Building, User, FileText, Cpu, LayoutDashboard, Wrench, Rocket, ArrowRight } from "lucide-react";

export default function CustomTypes() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const websiteTypes = [
    {
      icon: Briefcase,
      title: "Corporate Websites",
      description: "Custom digital platforms designed for enterprise presence, integrating multi-language setups, security guidelines, and internal database hubs."
    },
    {
      icon: Building,
      title: "Business Websites",
      description: "Tailored brand assets representing small to mid-sized firms, built with custom appointment systems, maps, and conversion elements."
    },
    {
      icon: User,
      title: "Portfolio Websites",
      description: "Aesthetically striking layouts for agencies, architects, and designers to showcase creative assets with smooth scroll actions."
    },
    {
      icon: FileText,
      title: "Landing Pages",
      description: "High-converting, single-path landing layouts optimized for ad campaigns, lead captures, and immediate action."
    },
    {
      icon: Cpu,
      title: "Single Page Applications",
      description: "Dynamic React frontends providing fluid app-like interactions with zero page reload delays for modern SaaS tools."
    },
    {
      icon: LayoutDashboard,
      title: "Custom Dashboards",
      description: "Secure, API-driven web portals displaying business analytics, cargo logs, or proprietary user data fields."
    },
    {
      icon: Wrench,
      title: "Service Websites",
      description: "Dedicated local and regional business platforms designed to list services, capture quote details, and book consultations."
    },
    {
      icon: Rocket,
      title: "Startup Websites",
      description: "High-impact launch frameworks featuring waitlist captures, interactive blueprint simulators, and investor slide links."
    }
  ];

  return (
    <section className="py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-[40rem] h-[40rem] bg-orange-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        
        {/* Header */}
        <div className="w-full mb-20 border-l-4 border-orange-500 pl-6 text-left">
          <span className="font-extrabold text-xs text-orange-500 uppercase tracking-widest block mb-2">
            Diverse Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide max-w-4xl leading-[1.1]">
            Types of Custom Websites We Build
          </h2>
        </div>

        {/* Cardless Interactive Vertical Rows - Zero container cards */}
        <div className="space-y-1 divide-y divide-slate-900 border-y border-slate-900">
          {websiteTypes.map((type, idx) => {
            const Icon = type.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="py-8 transition-all duration-300 relative group text-left cursor-pointer"
              >
                {/* Active line indicator at the left */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-orange-500 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center pl-6">
                  
                  {/* Left Column: Icon and Title */}
                  <div className="lg:col-span-4 flex items-center gap-4">
                    <div className="p-2.5 bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-white group-hover:bg-orange-600 group-hover:border-orange-600 transition-all duration-300 rounded-xl">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-slate-300 group-hover:text-white transition-colors duration-300">
                      {type.title}
                    </h3>
                  </div>

                  {/* Middle Column: Short Description */}
                  <div className="lg:col-span-7">
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                      {type.description}
                    </p>
                  </div>

                  {/* Right Column: Arrow Indicator */}
                  <div className="lg:col-span-1 flex justify-end hidden lg:flex">
                    <ArrowRight className="w-5 h-5 text-slate-700 group-hover:text-orange-500 group-hover:translate-x-2 transition-all duration-300" />
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
