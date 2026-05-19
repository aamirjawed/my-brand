"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Wifi, Zap, Volume2, ShieldCheck, Check } from "lucide-react";

export default function Technical() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const pillars = [
    {
      icon: Volume2,
      title: "Decibel Equalization & Limiters",
      description: "We tune acoustic frequencies to avoid microphone feedback and balance ambient levels so speech sounds clear while dinner music remains background-level.",
      metric: "Limit: < 85dB"
    },
    {
      icon: Wifi,
      title: "RF Wireless Spectrum Scan",
      description: "Scanning and securing dedicated wireless microphone frequencies in the local area to eliminate signal dropouts and corporate communications crossover.",
      metric: "Range: 470-608 MHz"
    },
    {
      icon: Zap,
      title: "Redundant Power Allocation",
      description: "Providing backup staging circuits, separated electrical loops for high-amperage kitchen equipment, and synchronized generator hookups.",
      metric: "Availability: 100%"
    },
    {
      icon: Cpu,
      title: "Unified Lighting Console Sync",
      description: "Synchronizing lighting arrays with audio cues, and utilizing automated scenic presets for smooth award presentation cues.",
      metric: "Latency: < 10ms"
    }
  ];

  return (
    <section className="py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background wobbly glow */}
      <div className="absolute right-0 bottom-0 w-[45rem] h-[45rem] bg-orange-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        
        {/* Header */}
        <div className="w-full mb-20 border-l-4 border-orange-500 pl-6">
          <span className="font-extrabold text-xs text-orange-500 uppercase tracking-widest block mb-2">
            Staging Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide max-w-2xl leading-none">
            Technical Production & Acoustic Calibration
          </h2>
        </div>

        {/* Technical Detail layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Pillars */}
          <div className="lg:col-span-7 space-y-12">
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
              An elegant gala dinner requires precise control of acoustics, light projection, and electrical infrastructure. We configure all staging rigs to rigorous audio-visual standards, ensuring flawless keynotes and a comfortable audio environment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                const isHovered = hoveredIdx === idx;

                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className="relative group cursor-default"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-slate-950 text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-base uppercase tracking-wide text-white group-hover:text-orange-400 transition-colors">
                        {pillar.title}
                      </h3>
                    </div>

                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-3">
                      {pillar.description}
                    </p>

                    <div className="inline-block px-2.5 py-1 bg-slate-950/80 border border-slate-800 rounded-full text-[10px] font-mono font-bold text-emerald-400">
                      {pillar.metric}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Circular Performance Report */}
          <div className="lg:col-span-5">
            <div className="relative p-8 bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl flex flex-col items-center justify-center text-center overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-black mb-8 block">
                Plating & Staging Reliability
              </span>

              {/* Huge circular dial */}
              <div className="relative w-44 h-44 flex items-center justify-center mb-8">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#1e293b"
                    strokeWidth="8"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="8"
                    strokeDasharray="251.2"
                    initial={{ strokeDashoffset: 251.2 }}
                    whileInView={{ strokeDashoffset: 5.0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-5xl font-black text-white font-mono leading-none">98%</span>
                  <span className="text-[9px] text-emerald-400 font-extrabold uppercase tracking-widest mt-1">On-Time Plating</span>
                </div>
              </div>

              {/* Verified checklist */}
              <div className="w-full space-y-3 pt-6 border-t border-slate-900 text-left">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Mic Interference Rate</span>
                  </div>
                  <span className="font-bold text-emerald-400 font-mono">0.0%</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Kitchen Amperage Load</span>
                  </div>
                  <span className="font-bold text-emerald-400 font-mono">Balanced</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Redundant AV Switchover</span>
                  </div>
                  <span className="font-bold text-emerald-400 font-mono">&lt; 0.2s</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
