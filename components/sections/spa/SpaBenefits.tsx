"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Sparkles, Cpu, RefreshCw, BarChart, Smartphone, Activity, ArrowRight, Play, CheckCircle } from "lucide-react";

export default function SpaBenefits() {
  const [activeIdx, setActiveIdx] = useState(0);

  const benefits = [
    {
      icon: Zap,
      title: "Faster user interactions",
      description: "Immediate routing and modular rendering reduce user wait time to zero, ensuring instant responsiveness.",
      demoTitle: "Instant Response Simulator",
      demoContent: (
        <div className="flex flex-col gap-3 w-full">
          <div className="text-[10px] text-slate-500 font-mono">Traditional MPA vs Modern SPA:</div>
          <div className="space-y-2">
            <div className="p-2 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-between">
              <span className="text-[9px] font-mono text-red-400">MPA Reload:</span>
              <span className="text-[8px] bg-red-950 text-red-400 px-1.5 py-0.5 rounded font-mono">1.2s delay</span>
            </div>
            <div className="p-2 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-between">
              <span className="text-[9px] font-mono text-emerald-400">SPA Action:</span>
              <motion.span 
                animate={{ scale: [1, 1.1, 1] }} 
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-[8px] bg-emerald-950 text-emerald-400 px-1.5 py-0.5 rounded font-mono"
              >
                0ms (instant)
              </motion.span>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Sparkles,
      title: "Smooth user experience",
      description: "Dynamic client transitions remove white screen flashes, preserving interface context and state.",
      demoTitle: "Transition State Preview",
      demoContent: (
        <div className="flex items-center justify-center h-28 relative overflow-hidden w-full">
          <motion.div 
            animate={{ x: [-80, 80, -80] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 rounded-2xl bg-orange-600/10 border border-orange-500/20 flex items-center justify-center animate-none"
          >
            <Sparkles className="w-6 h-6 text-orange-500" />
          </motion.div>
          <div className="absolute inset-x-0 bottom-1 text-center text-[8px] font-mono text-slate-500">Fluid client transitions</div>
        </div>
      )
    },
    {
      icon: Cpu,
      title: "Better frontend performance",
      description: "Optimized virtual DOM execution minimizes script compilation cycles and hardware processing overhead.",
      demoTitle: "Virtual DOM Activity",
      demoContent: (
        <div className="grid grid-cols-4 gap-2 w-full">
          {[...Array(8)].map((_, i) => (
            <motion.div 
              key={i}
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 2, delay: i * 0.15, repeat: Infinity }}
              className="h-8 rounded bg-slate-900 border border-slate-800 flex items-center justify-center text-orange-500 text-[8px] font-mono animate-none"
            >
              Node {i}
            </motion.div>
          ))}
        </div>
      )
    },
    {
      icon: RefreshCw,
      title: "Real-time updates",
      description: "Seamless state syncing allows continuous background database updates without interrupting active workflows.",
      demoTitle: "Background Sync Thread",
      demoContent: (
        <div className="space-y-2 w-full">
          <div className="flex items-center justify-between text-[8px] text-slate-500 font-mono">
            <span>SOCKET SERVER</span>
            <span className="text-emerald-500 animate-pulse">● CONNECTED</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-2 rounded-lg flex items-center gap-3">
            <RefreshCw className="w-4 h-4 text-orange-500 animate-spin" />
            <div className="flex-1">
              <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ width: ["0%", "100%"] }} 
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="h-full bg-orange-600"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: BarChart,
      title: "Scalable architecture",
      description: "Decoupled logic separates presentation from database layers, simplifying system expansion.",
      demoTitle: "API Gateway Schema",
      demoContent: (
        <div className="flex items-center justify-between w-full h-24">
          <div className="px-2 py-1 bg-slate-900 border border-slate-800 rounded text-[7px] font-mono">Client UI</div>
          <ArrowRight className="w-4 h-4 text-orange-500" />
          <div className="px-2 py-1 bg-orange-600/10 border border-orange-500/20 rounded text-[7px] text-orange-400 font-mono">API Node</div>
          <ArrowRight className="w-4 h-4 text-orange-500" />
          <div className="px-2 py-1 bg-slate-900 border border-slate-800 rounded text-[7px] font-mono">Database</div>
        </div>
      )
    },
    {
      icon: Smartphone,
      title: "Mobile-like experience",
      description: "Persistent layout structures and gesture-friendly interactions feel identical to a native mobile application.",
      demoTitle: "App Frame Mockup",
      demoContent: (
        <div className="flex flex-col gap-2 w-full">
          <div className="h-4 bg-slate-900 rounded flex items-center justify-between px-2 text-[6px] text-slate-500">
            <span>● 5G Connection</span>
            <span>10:42 AM</span>
          </div>
          <div className="h-12 bg-slate-900/50 rounded border border-slate-800 flex items-center justify-center text-[8px] font-mono">
            Swipe left to view settings
          </div>
        </div>
      )
    },
    {
      icon: Activity,
      title: "Better application responsiveness",
      description: "Intelligent event listeners and asynchronous request queues maintain flawless, stutter-free performance.",
      demoTitle: "Event Queue Latency",
      demoContent: (
        <div className="flex items-center gap-4 w-full justify-around">
          <div className="text-center">
            <div className="text-xs font-mono font-bold text-emerald-400">1.8ms</div>
            <div className="text-[6px] text-slate-500 uppercase font-mono">Max Latency</div>
          </div>
          <div className="text-center">
            <div className="text-xs font-mono font-bold text-orange-500">0.02%</div>
            <div className="text-[6px] text-slate-500 uppercase font-mono">FPS Jitter</div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-[0.01] bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        
        <div className="w-full mb-16 border-l-4 border-orange-600 pl-4 sm:pl-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-orange-600 uppercase tracking-wider leading-[1.25]">
            Benefits of Single Page Applications
          </h2>
        </div>

        {/* Modular Playground Split (No boxy cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-12">
          
          {/* Left Column: Interactive benefits list (No cards) */}
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-center space-y-4">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              const isActive = activeIdx === i;
              return (
                <div
                  key={i}
                  onMouseEnter={() => setActiveIdx(i)}
                  onClick={() => setActiveIdx(i)}
                  className="cursor-pointer group flex flex-col p-4 rounded-2xl transition-all duration-300 relative select-none"
                >
                  <div className="flex items-start gap-4 w-full">
                    {/* Left accent bar on hover/active */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-full transition-all duration-300 ${
                      isActive ? "bg-orange-600" : "bg-transparent group-hover:bg-orange-600/30"
                    }`}></div>

                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                      isActive ? "bg-orange-600 text-white" : "bg-slate-50 text-slate-500 group-hover:bg-slate-100"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1">
                      <h3 className={`font-black text-sm uppercase tracking-wider transition-colors ${
                        isActive ? "text-orange-600" : "text-slate-900"
                      }`}>
                        {b.title}
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mt-1">
                        {b.description}
                      </p>
                    </div>
                  </div>

                  {/* Mobile Inline Simulation Panel (Only visible on screens smaller than lg) */}
                  <div className="w-full lg:hidden overflow-hidden">
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-full bg-slate-950 border border-slate-900 rounded-2xl p-4 flex flex-col gap-3"
                        >
                          <div className="flex items-center justify-between text-[7px] text-slate-500 font-mono pb-2 border-b border-slate-900">
                            <span className="uppercase text-orange-500 font-bold">{b.demoTitle}</span>
                            <span>INLINE SIMULATION</span>
                          </div>
                          
                          <div className="flex items-center justify-center min-h-[110px] text-white">
                            {b.demoContent}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Smartphone Screen Simulator (Premium desktop design, hidden on mobile) */}
          <div className="hidden lg:flex lg:col-span-5 items-center justify-center">
            <div className="w-full max-w-[340px] aspect-[9/18] bg-slate-950 rounded-[2.5rem] p-3 shadow-2xl border-[4px] border-slate-900 relative flex flex-col group overflow-hidden">
              
              {/* Dynamic Island Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-900 rounded-full z-20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-slate-800 ml-6"></div>
              </div>

              {/* Screen Content Wrapper */}
              <div className="flex-grow bg-slate-950 rounded-[2rem] overflow-hidden border border-slate-800/80 p-4 flex flex-col justify-between pt-6 text-white relative">
                
                {/* Header bar */}
                <div className="flex items-center justify-between text-[7px] text-slate-500 font-mono pb-3 border-b border-slate-900">
                  <span>SANDBOX PREVIEW</span>
                  <span>100% ONLINE</span>
                </div>

                {/* Simulated Screen Body with current state */}
                <div className="flex-grow flex flex-col justify-center py-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIdx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4 flex flex-col items-center text-center w-full"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-orange-600/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
                        {React.createElement(benefits[activeIdx].icon, { className: "w-6 h-6" })}
                      </div>
                      
                      <div className="space-y-1">
                        <span className="text-[9px] text-orange-500 font-bold uppercase tracking-widest">
                          {benefits[activeIdx].demoTitle}
                        </span>
                        <div className="text-[11px] font-black uppercase tracking-wide text-slate-200">
                          {benefits[activeIdx].title}
                        </div>
                      </div>

                      {/* Render custom visual for the selected benefit */}
                      <div className="w-full bg-slate-950 border border-slate-900 rounded-xl p-3 flex items-center justify-center min-h-[110px]">
                        {benefits[activeIdx].demoContent}
                      </div>

                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Footer bar */}
                <div className="text-[7px] text-center font-mono text-slate-600 border-t border-slate-900 pt-3 flex items-center justify-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> Precompiled Client Frame
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
