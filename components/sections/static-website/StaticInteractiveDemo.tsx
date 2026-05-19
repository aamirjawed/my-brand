"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sliders, Eye, ToggleLeft, ToggleRight, Sparkles, CheckCircle2, Terminal } from "lucide-react";

export default function StaticInteractiveDemo() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [showNavBar, setShowNavBar] = useState(true);
  const [showPerformanceBadge, setShowPerformanceBadge] = useState(true);
  const [showCDNNodes, setShowCDNNodes] = useState(true);

  return (
    <section className="py-24 bg-slate-50 border-t border-b border-slate-100 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-[1400px]">

        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-4">
            <Sliders className="w-3.5 h-3.5" /> Architecture Simulator
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-wide leading-tight mb-4">
            SEO-Friendly Website Development Sandbox
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl">
            Toggle our static site architecture variables below to see how pre-compiled components adapt in real-time for maximum performance.
          </p>
        </div>

        {/* Modular Playground Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

          {/* 1. Control Panel (Left column - 4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-white border-2 border-slate-900 rounded-[2rem] p-6 sm:p-8 shadow-[8px_8px_0px_rgba(15,23,42,1)] relative z-10">
            <div className="space-y-8">
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-orange-600" /> Toggle Variables
                </h3>
                <p className="text-slate-400 text-xs">
                  Interact with real architecture controls and watch the static wireframe morph instantly.
                </p>
              </div>

              {/* Toggles */}
              <div className="space-y-6">
                {/* Dark Mode */}
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100/70 transition-colors">
                  <div className="flex flex-col">
                    <span className="font-bold text-xs sm:text-sm text-slate-800 uppercase tracking-wide">Dark Mode Theme</span>
                    <span className="text-[10px] text-slate-400">Elegant low-light reading experience</span>
                  </div>
                  <button onClick={() => setIsDarkTheme(!isDarkTheme)} className="text-slate-900 hover:text-orange-600 transition-colors">
                    {isDarkTheme ? <ToggleRight className="w-10 h-10 text-orange-600" /> : <ToggleLeft className="w-10 h-10" />}
                  </button>
                </div>

                {/* Nav Bar */}
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100/70 transition-colors">
                  <div className="flex flex-col">
                    <span className="font-bold text-xs sm:text-sm text-slate-800 uppercase tracking-wide">Navigation Bar</span>
                    <span className="text-[10px] text-slate-400">Sticky header with smart scroll behaviour</span>
                  </div>
                  <button onClick={() => setShowNavBar(!showNavBar)} className="text-slate-900 hover:text-orange-600 transition-colors">
                    {showNavBar ? <ToggleRight className="w-10 h-10 text-orange-600" /> : <ToggleLeft className="w-10 h-10" />}
                  </button>
                </div>

                {/* Performance Badge */}
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100/70 transition-colors">
                  <div className="flex flex-col">
                    <span className="font-bold text-xs sm:text-sm text-slate-800 uppercase tracking-wide">Performance Badge</span>
                    <span className="text-[10px] text-slate-400">Lighthouse 100 score trust indicator</span>
                  </div>
                  <button onClick={() => setShowPerformanceBadge(!showPerformanceBadge)} className="text-slate-900 hover:text-orange-600 transition-colors">
                    {showPerformanceBadge ? <ToggleRight className="w-10 h-10 text-orange-600" /> : <ToggleLeft className="w-10 h-10" />}
                  </button>
                </div>

                {/* CDN Nodes */}
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100/70 transition-colors">
                  <div className="flex flex-col">
                    <span className="font-bold text-xs sm:text-sm text-slate-800 uppercase tracking-wide">CDN Edge Nodes</span>
                    <span className="text-[10px] text-slate-400">Global pre-compiled asset distribution</span>
                  </div>
                  <button onClick={() => setShowCDNNodes(!showCDNNodes)} className="text-slate-900 hover:text-orange-600 transition-colors">
                    {showCDNNodes ? <ToggleRight className="w-10 h-10 text-orange-600" /> : <ToggleLeft className="w-10 h-10" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Helpful Insight Tip */}
            <div className="mt-8 pt-6 border-t border-slate-100 text-[11px] text-gray-600 leading-relaxed italic">
              <strong>💡 Tip:</strong> Static sites pre-compile every page at build time — meaning your users receive instant HTML with zero server processing delay!
            </div>
          </div>

          {/* 2. Interactive Wireframe Canvas (Right column - 8 cols) */}
          <div className="lg:col-span-8 flex flex-col justify-start relative">

            {/* Floating Live Indicator Badge */}
            <div className="absolute top-4 right-4 z-30 bg-rose-600 text-white font-black text-[10px] tracking-widest uppercase px-3 py-1 rounded-full animate-pulse shadow-md flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5" /> Live Sandbox Canvas
            </div>

            {/* Simulated browser window wrapper */}
            <div className={`flex-1 flex flex-col rounded-[2rem] border-2 border-slate-900 overflow-hidden shadow-2xl transition-colors duration-500 min-h-[450px] ${isDarkTheme ? "bg-slate-950 text-white" : "bg-white text-slate-900"}`}>

              {/* Browser navigation tab */}
              <div className={`px-4 py-3 flex items-center justify-between border-b ${isDarkTheme ? "bg-slate-900 border-slate-800" : "bg-slate-100 border-slate-200"}`}>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className={`w-1/2 rounded-full py-1 text-center text-[10px] font-bold tracking-wide uppercase ${isDarkTheme ? "bg-slate-950/50 text-slate-500" : "bg-white text-slate-400 shadow-inner"}`}>
                  https://static-sandbox.brand
                </div>
                <div className="w-8"></div>
              </div>

              {/* Wireframe Page content */}
              <div className="flex-1 p-6 sm:p-10 flex flex-col justify-between overflow-visible relative">

                {/* Mockup Nav Bar */}
                <AnimatePresence>
                  {showNavBar && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex items-center justify-between w-full mb-8 overflow-hidden"
                    >
                      <div className="font-extrabold text-sm tracking-wider uppercase flex items-center gap-1.5">
                        <Terminal className="w-4 h-4 text-orange-600" /> STATIC LAB
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-1.5 bg-slate-400/30 rounded-full"></div>
                        <div className="w-12 h-1.5 bg-slate-400/30 rounded-full"></div>
                        <div className="w-8 h-1.5 bg-slate-400/30 rounded-full"></div>
                        <div className="px-3 py-1 rounded bg-orange-600 text-white text-[9px] font-bold uppercase tracking-wider">Get Started</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Hero Core Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center flex-1">

                  {/* Left: Headline */}
                  <div className="space-y-4 text-left">
                    <div className="w-12 h-3 bg-orange-600/20 rounded-full inline-block"></div>
                    <h4 className="text-2xl sm:text-3xl font-black uppercase tracking-wide leading-tight">
                      Built for <span className="text-orange-500">Instant</span> Speed
                    </h4>
                    <p className={`text-[11px] leading-relaxed max-w-sm ${isDarkTheme ? "text-slate-400" : "text-slate-500"}`}>
                      This wireframe illustrates how a static site's pre-compiled architecture delivers zero-latency experiences.
                    </p>

                    {/* Performance Badge */}
                    <AnimatePresence>
                      {showPerformanceBadge && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pt-4 border-t border-slate-500/20 space-y-2 overflow-hidden"
                        >
                          <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Performance Score</div>
                          <div className="flex gap-2 items-center">
                            <div className="w-8 h-8 rounded-full bg-orange-600/20 flex items-center justify-center text-orange-500 font-black text-[9px]">100</div>
                            <div className="flex gap-1">
                              <div className="w-8 h-2 bg-emerald-400/60 rounded-full"></div>
                              <div className="w-8 h-2 bg-emerald-400/60 rounded-full"></div>
                              <div className="w-8 h-2 bg-emerald-400/60 rounded-full"></div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Right: CDN Architecture or CTA Card */}
                  <div className="relative flex items-center justify-center min-h-[160px] md:min-h-auto">
                    <AnimatePresence mode="wait">
                      {showCDNNodes ? (
                        <motion.div
                          key="cdn-nodes"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className={`w-full max-w-[280px] p-5 rounded-[1.25rem] border-2 border-slate-900 shadow-[4px_4px_0px_rgba(15,23,42,1)] z-10 ${isDarkTheme ? "bg-slate-900" : "bg-slate-50"}`}
                        >
                          <div className="text-[10px] font-extrabold uppercase tracking-widest text-orange-500 mb-3 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" /> CDN Edge Nodes
                          </div>
                          <div className="grid grid-cols-3 gap-2 mb-3">
                            {["US", "EU", "APAC", "UK", "AU", "CA"].map((region) => (
                              <div key={region} className="h-6 rounded bg-orange-600/10 border border-orange-600/20 flex items-center justify-center text-[7px] font-bold text-orange-600 uppercase">
                                {region}
                              </div>
                            ))}
                          </div>
                          <div className="py-1.5 bg-slate-900 text-white border border-white/20 rounded font-bold text-[8px] uppercase tracking-wider text-center shadow-md">
                            Global Coverage Active
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="build-output"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="relative w-full max-w-[220px] aspect-square flex items-center justify-center overflow-visible"
                        >
                          <svg viewBox="0 0 100 100" className="w-full h-full text-orange-600 overflow-visible">
                            <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="4 3" rx="4" />
                            <rect x="30" y="30" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" rx="2" />
                            <circle cx="50" cy="50" r="8" fill="currentColor" />
                            <path d="M50 10 L50 20 M50 80 L50 90 M10 50 L20 50 M80 50 L90 50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                          </svg>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
