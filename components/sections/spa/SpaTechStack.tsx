"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Terminal, Shield, Wind, Server, Zap } from "lucide-react";

export default function SpaTechStack() {
  const [activeTech, setActiveTech] = useState(0);

  const techs = [
    {
      icon: Cpu,
      name: "React",
      desc: "Our primary frontend library for building highly interactive user interfaces with reusable, state-driven components.",
      spec: "Virtual DOM diffing, fiber architecture rendering, and hooks-based state management cycles."
    },
    {
      icon: Server,
      name: "Next.js",
      desc: "We leverage Next.js for production-ready server rendering, routing, static pre-rendering, and metadata structure.",
      spec: "Server Actions, route handlers, dynamic pre-rendering compilation, and client hydration optimization."
    },
    {
      icon: Shield,
      name: "TypeScript",
      desc: "Adds strict typings to JavaScript, preventing production runtime errors and making long-term application scaling smooth.",
      spec: "Compile-time validation, interfaces definitions, strict null checks, and scalable component typings."
    },
    {
      icon: Wind,
      name: "Tailwind CSS",
      desc: "Allows us to write clean, utility-first CSS styling directly in layouts, ensuring rapid UI prototyping and zero style bloat.",
      spec: "JIT compilation, utility-first classes styling, layout responsiveness constraints, and custom theme systems."
    },
    {
      icon: Terminal,
      name: "REST & GraphQL APIs",
      desc: "We connect components to high-performance database microservices and web sockets to sync data instantly.",
      spec: "Optimistic UI rendering updates, real-time socket connections, data fetch caching, and secure token storage."
    },
    {
      icon: Zap,
      name: "Vite",
      desc: "Used for lightning-fast module bundler compilation and rapid hot-module updates during active client development.",
      spec: "ES Module compilation, lightning HMR rates, lightweight bundlers configuration, and fast cold startup times."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-extrabold text-xs text-orange-500 uppercase tracking-widest bg-orange-600/10 px-4 py-2 rounded-full border border-orange-500/20 mb-4 inline-block">
            Our Stack
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-wide mt-6 mb-6">
            Technologies We Use for SPA Development
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            We use a modern, standardized toolkit designed to secure excellent performance, maintainable code architectures, and fast feature additions.
          </p>
        </div>

        {/* Mobile Layout (Only visible on screens smaller than lg) */}
        <div className="lg:hidden flex flex-col gap-4">
          {techs.map((tech, idx) => {
            const Icon = tech.icon;
            const isActive = activeTech === idx;
            return (
              <div 
                key={idx}
                onClick={() => setActiveTech(idx)}
                className="cursor-pointer border border-slate-100 rounded-2xl p-4 transition-all duration-300 relative select-none flex flex-col"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                    isActive ? "bg-orange-600 text-white" : "bg-slate-50 text-slate-500"
                  }`}>
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <h3 className={`font-black text-sm uppercase tracking-wide transition-colors ${
                    isActive ? "text-orange-600" : "text-slate-900"
                  }`}>
                    {tech.name}
                  </h3>
                </div>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden space-y-3"
                    >
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                        {tech.desc}
                      </p>
                      <div className="border-t border-slate-100 pt-3">
                        <span className="text-[9px] text-orange-500 font-bold uppercase tracking-widest block mb-1">Technical Specs</span>
                        <p className="text-[10px] text-slate-400 font-mono leading-relaxed">
                          {tech.spec}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Desktop Interactive Node Layout (Only visible on lg screens and up) */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-center mt-12">
          
          {/* Left Column: Interactive Circle Node Graph */}
          <div className="col-span-7 flex justify-center items-center relative h-[450px]">
            
            {/* Center Core node */}
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-28 h-28 rounded-full bg-slate-950 border-[3px] border-orange-500 flex flex-col items-center justify-center shadow-xl z-20"
            >
              <div className="text-white text-[9px] font-black tracking-widest uppercase">SPA Core</div>
              <div className="w-6 h-0.5 bg-orange-500 mt-1"></div>
            </motion.div>

            {/* Orbiting Tech Nodes */}
            {techs.map((tech, idx) => {
              const Icon = tech.icon;
              const angle = (idx * 360) / techs.length;
              const radius = 130; // pixels
              const rad = (angle * Math.PI) / 180;
              const x = Math.round(Math.cos(rad) * radius);
              const y = Math.round(Math.sin(rad) * radius);

              const isActive = activeTech === idx;

              return (
                <div 
                  key={idx} 
                  className="absolute"
                  style={{
                    transform: `translate(${x}px, ${y}px)`
                  }}
                >
                  {/* Connection Line back to center */}
                  <div 
                    className="absolute top-1/2 left-1/2 w-[130px] h-[1.5px] origin-left bg-slate-200 pointer-events-none -z-10"
                    style={{
                      transform: `rotate(${angle + 180}deg) translateX(0px)`
                    }}
                  >
                    <motion.div 
                      className="h-full bg-orange-500"
                      initial={{ width: "0%" }}
                      animate={{ width: isActive ? "100%" : "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Node Button */}
                  <button
                    onClick={() => setActiveTech(idx)}
                    onMouseEnter={() => setActiveTech(idx)}
                    className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? "bg-orange-600 text-white scale-110 shadow-lg shadow-orange-600/30 border-2 border-orange-500" 
                        : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </button>
                </div>
              );
            })}

          </div>

          {/* Right Column: Detailed Specification Panel */}
          <div className="col-span-5">
            <div className="bg-slate-950 text-white border-2 border-slate-900 rounded-[2rem] p-8 shadow-2xl relative min-h-[320px] flex flex-col justify-between">
              
              <div className="absolute top-6 right-6 text-[10px] text-orange-500 font-bold uppercase tracking-widest bg-orange-600/10 px-2.5 py-1 rounded-md border border-orange-500/20">
                ACTIVE COMPONENT
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTech}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-600/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
                      {React.createElement(techs[activeTech].icon, { className: "w-5 h-5" })}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wide">
                      {techs[activeTech].name}
                    </h3>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {techs[activeTech].desc}
                  </p>

                  <div className="border-t border-slate-900 pt-4 mt-4">
                    <span className="text-[10px] text-orange-500 font-extrabold uppercase tracking-widest block mb-2">Technical Specifications</span>
                    <p className="text-xs text-slate-500 font-mono leading-relaxed">
                      {techs[activeTech].spec}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="text-[10px] text-slate-600 uppercase tracking-widest font-black pt-4 border-t border-slate-900/50 mt-6">
                Single Page Application Stack
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
