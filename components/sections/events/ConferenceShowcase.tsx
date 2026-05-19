"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MicVocal, Users, Store, Coffee } from "lucide-react";

export default function ConferenceShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  const modules = [
    {
      title: "Keynote Stages",
      desc: "Massive LED arrays, line-array audio systems, and broadcast-quality multicam setups for speakers.",
      img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000&auto=format&fit=crop",
      icon: MicVocal
    },
    {
      title: "Breakout Rooms",
      desc: "Simultaneous sessions across 20+ rooms with localized AV, seating arrangements, and live Q&A tech.",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
      icon: Users
    },
    {
      title: "Exhibitor Halls",
      desc: "Custom booth fabrication, floor plan logistics, lead retrieval systems, and sponsor activation zones.",
      img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=1000&auto=format&fit=crop",
      icon: Store
    },
    {
      title: "Networking Hubs",
      desc: "Curated VIP lounges, coffee baristas, interactive sponsor games, and evening cocktail reception designs.",
      img: "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1000&auto=format&fit=crop",
      icon: Coffee
    }
  ];

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#ea580c_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        
        <div className="mb-16 max-w-2xl">
          <span className="font-extrabold text-xs text-orange-500 uppercase tracking-widest mb-4 inline-block">
            Modular Conference Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide leading-tight">
            We Manage Every <br/> Segment of Your Summit
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Interactive Menu (New Design replacing standard side-by-side) */}
          <div className="col-span-1 lg:col-span-5 flex flex-row lg:flex-col justify-start lg:justify-center overflow-x-auto lg:overflow-visible gap-4 lg:gap-0 lg:space-y-4 pb-6 lg:pb-0 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {modules.map((mod, idx) => {
              const isActive = activeTab === idx;
              const Icon = mod.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`shrink-0 w-36 sm:w-40 aspect-square lg:aspect-auto lg:w-full snap-center flex flex-col lg:block items-center justify-center text-center lg:text-left p-4 lg:p-6 rounded-2xl transition-all duration-300 border ${
                    isActive 
                    ? "bg-slate-900 border-orange-500/50 shadow-[0_0_30px_rgba(234,88,12,0.15)] lg:scale-105 z-10" 
                    : "bg-slate-900/40 lg:bg-transparent border-slate-800 hover:bg-slate-900/80 lg:opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className={`lg:hidden w-12 h-12 rounded-2xl flex items-center justify-center mb-3 shadow-inner transition-colors ${isActive ? "bg-orange-500/20 text-orange-500" : "bg-slate-800 text-slate-400"}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className={`text-xs sm:text-sm lg:text-xl font-black uppercase tracking-wide lg:mb-2 transition-colors ${isActive ? "text-white lg:text-orange-500" : "text-slate-400 lg:text-white"}`}>
                    {mod.title}
                  </h3>
                  <div className="hidden lg:block">
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-slate-400 text-sm leading-relaxed pt-2">
                            {mod.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Image Window (New Design) */}
          <div className="col-span-1 lg:col-span-7 relative min-h-[400px] lg:min-h-full rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeTab}
                src={modules[activeTab].img}
                alt={modules[activeTab].title}
                initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
            
            {/* Live Data Overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
               <div className="flex items-center gap-3">
                 <div className="w-3 h-3 rounded-full bg-orange-500 animate-pulse" />
                 <span className="text-xs font-bold uppercase tracking-widest text-white">Live Production View</span>
               </div>
               <span className="text-xs font-mono text-orange-400 border border-orange-500/30 px-3 py-1 rounded-full bg-slate-950/50 backdrop-blur">
                 CAM 0{activeTab + 1}
               </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
