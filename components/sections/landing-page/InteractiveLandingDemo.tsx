"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sliders, Eye, ToggleLeft, ToggleRight, Sparkles, CheckCircle2, Megaphone } from "lucide-react";

export default function InteractiveLandingDemo() {
  // Playground State Toggles
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(true);
  const [showTrustSignals, setShowTrustSignals] = useState(true);
  const [showBrandDoodle, setShowBrandDoodle] = useState(true);

  return (
    <section className="py-24 bg-slate-50 border-t border-b border-slate-100 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-[1400px]">

        {/* Playful Blueprint Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-4">
            <Sliders className="w-3.5 h-3.5" /> Interactive Blueprint
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-wide leading-tight mb-4">
            Sandbox Simulator
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl">
            Toggle our layout variables below to see how our architectural frameworks reshape in real-time to maximize conversions.
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
                  Interact with real design controls and watch the wireframe morph instantly.
                </p>
              </div>

              {/* Toggles */}
              <div className="space-y-6">
                {/* Theme Selector */}
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100/70 transition-colors">
                  <div className="flex flex-col">
                    <span className="font-bold text-xs sm:text-sm text-slate-800 uppercase tracking-wide">Dark Mode Theme</span>
                    <span className="text-[10px] text-slate-400">Reduce visual fatigue & pop copy</span>
                  </div>
                  <button onClick={() => setIsDarkTheme(!isDarkTheme)} className="text-slate-900 hover:text-orange-600 transition-colors">
                    {isDarkTheme ? <ToggleRight className="w-10 h-10 text-orange-600" /> : <ToggleLeft className="w-10 h-10" />}
                  </button>
                </div>

                {/* Lead Form Toggle */}
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100/70 transition-colors">
                  <div className="flex flex-col">
                    <span className="font-bold text-xs sm:text-sm text-slate-800 uppercase tracking-wide">Lead Capture Form</span>
                    <span className="text-[10px] text-slate-400">High-intent embedded entry form</span>
                  </div>
                  <button onClick={() => setShowLeadForm(!showLeadForm)} className="text-slate-900 hover:text-orange-600 transition-colors">
                    {showLeadForm ? <ToggleRight className="w-10 h-10 text-orange-600" /> : <ToggleLeft className="w-10 h-10" />}
                  </button>
                </div>

                {/* Trust Signals Toggle */}
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100/70 transition-colors">
                  <div className="flex flex-col">
                    <span className="font-bold text-xs sm:text-sm text-slate-800 uppercase tracking-wide">Trust Badge Grid</span>
                    <span className="text-[10px] text-slate-400">Social proof seals & metrics</span>
                  </div>
                  <button onClick={() => setShowTrustSignals(!showTrustSignals)} className="text-slate-900 hover:text-orange-600 transition-colors">
                    {showTrustSignals ? <ToggleRight className="w-10 h-10 text-orange-600" /> : <ToggleLeft className="w-10 h-10" />}
                  </button>
                </div>

                {/* Brand Doodle Toggle */}
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100/70 transition-colors">
                  <div className="flex flex-col">
                    <span className="font-bold text-xs sm:text-sm text-slate-800 uppercase tracking-wide">Wobbly Doodles</span>
                    <span className="text-[10px] text-slate-400">Custom quirky illustrative assets</span>
                  </div>
                  <button onClick={() => setShowBrandDoodle(!showBrandDoodle)} className="text-slate-900 hover:text-orange-600 transition-colors">
                    {showBrandDoodle ? <ToggleRight className="w-10 h-10 text-orange-600" /> : <ToggleLeft className="w-10 h-10" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Helpful Insight Tip */}
            <div className="mt-8 pt-6 border-t border-slate-100 text-[11px] text-gray-600 leading-relaxed italic">
              <strong>💡 Tip:</strong> Dynamic layout flexibility ensures your mobile experience feels as seamless and complete as desktop rendering!
            </div>
          </div>

          {/* 2. Interactive Wireframe Canvas (Right column - 8 cols) */}
          <div className="lg:col-span-8 flex flex-col justify-start relative">

            {/* Floating Live Indicator Badge */}
            <div className="absolute top-4 right-4 z-30 bg-rose-600 text-white font-black text-[10px] tracking-widest uppercase px-3 py-1 rounded-full animate-pulse shadow-md flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5" /> Live Sandbox Canvas
            </div>

            {/* Simulated browser window wrapper */}
            <div className={`flex-1 flex flex-col rounded-[2rem] border-2 border-slate-900 overflow-hidden shadow-2xl transition-colors duration-500 min-h-[450px] ${isDarkTheme ? "bg-slate-950 text-white" : "bg-white text-slate-900"
              }`}>

              {/* Browser navigation tab */}
              <div className={`px-4 py-3 flex items-center justify-between border-b ${isDarkTheme ? "bg-slate-900 border-slate-800" : "bg-slate-100 border-slate-200"
                }`}>
                {/* Browser dots */}
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                {/* Browser address url bar */}
                <div className={`w-1/2 rounded-full py-1 text-center text-[10px] font-bold tracking-wide uppercase ${isDarkTheme ? "bg-slate-950/50 text-slate-500" : "bg-white text-slate-400 shadow-inner"
                  }`}>
                  https://conversion-sandbox.brand
                </div>
                <div className="w-8"></div>
              </div>

              {/* Wireframe Mockup Page content */}
              <div className="flex-1 p-6 sm:p-10 flex flex-col justify-between overflow-visible relative">

                {/* Mockup Top Header */}
                <div className="flex items-center justify-between w-full mb-10">
                  <div className="font-extrabold text-sm tracking-wider uppercase flex items-center gap-1.5">
                    <Megaphone className="w-4 h-4 text-orange-600" /> CONVERT LAB
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-1.5 bg-slate-400/30 rounded-full"></div>
                    <div className="w-12 h-1.5 bg-slate-400/30 rounded-full"></div>
                  </div>
                </div>

                {/* Hero Core Content Grid inside Mockup */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center flex-1">

                  {/* Left Mockup Content (Headline & Copy) */}
                  <div className="space-y-4 text-left">
                    <div className="w-12 h-3 bg-orange-600/20 rounded-full inline-block"></div>
                    <h4 className="text-2xl sm:text-3xl font-black uppercase tracking-wide leading-tight">
                      Architecting High <span className="text-orange-500">Conversions</span>
                    </h4>
                    <p className={`text-[11px] leading-relaxed max-w-sm ${isDarkTheme ? "text-slate-400" : "text-slate-500"}`}>
                      This wireframe illustrates how elements dynamically adapt based on theme selectors and interactive layouts.
                    </p>

                    {/* Simulated Trust Signals */}
                    <AnimatePresence>
                      {showTrustSignals && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pt-4 border-t border-slate-500/20 space-y-2 overflow-hidden"
                        >
                          <div className="text-[9px] text-slate-450 font-bold uppercase tracking-wider">Trusted by 10k+ Creators</div>
                          <div className="flex gap-2">
                            <div className="w-8 h-3 bg-slate-400/30 rounded"></div>
                            <div className="w-12 h-3 bg-slate-400/30 rounded"></div>
                            <div className="w-10 h-3 bg-slate-400/30 rounded"></div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Right Mockup Content (Action Area / Lead Form / Brand Doodle) */}
                  <div className="relative flex items-center justify-center min-h-[160px] md:min-h-auto">

                    {/* Simulated Embedded Lead Form */}
                    <AnimatePresence mode="wait">
                      {showLeadForm ? (
                        <motion.div
                          key="lead-form"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className={`w-full max-w-[280px] p-5 rounded-[1.25rem] border-2 border-slate-900 shadow-[4px_4px_0px_rgba(15,23,42,1)] z-10 ${isDarkTheme ? "bg-slate-900" : "bg-slate-50"
                            }`}
                        >
                          <div className="text-[10px] font-extrabold uppercase tracking-widest text-orange-500 mb-2 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" /> Start Campaign
                          </div>
                          <div className="space-y-2 mb-3">
                            <div className="h-6 rounded bg-slate-400/20 border border-slate-400/30"></div>
                            <div className="h-6 rounded bg-slate-400/20 border border-slate-400/30"></div>
                          </div>
                          <div className="py-1.5 bg-slate-900 text-white border border-white/20 rounded font-bold text-[8px] uppercase tracking-wider text-center shadow-md">
                            Activate Offer
                          </div>
                        </motion.div>
                      ) : (
                        /* Simulated Doodle illustration when lead form is disabled */
                        showBrandDoodle && (
                          <motion.div
                            key="brand-doodle"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="relative w-full max-w-[220px] aspect-square flex items-center justify-center overflow-visible"
                          >
                            {/* Wobbly concentric radar/doodle paths */}
                            <svg viewBox="0 0 100 100" className="w-full h-full text-orange-600 overflow-visible">
                              <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 3" />
                              <circle cx="50" cy="50" r="22" fill="none" stroke="currentColor" strokeWidth="2" />
                              {/* Hand-drawn style rocket/pointing needle */}
                              <path d="M 50 15 L 60 40 L 50 35 L 40 40 Z" fill="currentColor" />
                              {/* Wobbly target center */}
                              <circle cx="50" cy="50" r="8" fill="currentColor" />
                            </svg>
                          </motion.div>
                        )
                      )}
                    </AnimatePresence>
                  </div>

                </div>

                {/* Brand Doodle overlapping standard items (Bottom detail) */}
                <AnimatePresence>
                  {showBrandDoodle && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      className="absolute bottom-6 left-6 z-20"
                    >
                      <span className="font-extrabold text-[9px] tracking-wider uppercase rotate-[-3deg] bg-[#fed7aa] text-slate-900 px-2 py-0.5 border-2 border-slate-900 shadow-[2px_2px_0px_rgba(0,0,0,1)] inline-block select-none">
                        Quirky Accent
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
