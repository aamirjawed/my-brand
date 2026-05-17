"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sliders, Eye, ToggleLeft, ToggleRight, Sparkles, Palette } from "lucide-react";

export default function BrandingInteractiveDemo() {
  const [isDarkBg, setIsDarkBg] = useState(false);
  const [showTagline, setShowTagline] = useState(true);
  const [showColorPalette, setShowColorPalette] = useState(true);
  const [showMonogram, setShowMonogram] = useState(true);

  const colors = showColorPalette
    ? ["#0f172a", "#ea580c", "#fed7aa", "#64748b", "#f8fafc"]
    : ["#d1d5db", "#d1d5db", "#d1d5db", "#d1d5db", "#d1d5db"];

  return (
    <section className="py-24 bg-slate-50 border-t border-b border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="container mx-auto px-6 max-w-[1400px]">

        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-4">
            <Sliders className="w-3.5 h-3.5" /> Brand Identity Simulator
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-wide leading-tight mb-4">
            Logo Design Sandbox
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl">
            Toggle brand system variables below to see how each identity element transforms the look, feel, and authority of a complete logo presentation in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

          {/* Control Panel */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-white border-2 border-slate-900 rounded-[2rem] p-6 sm:p-8 shadow-[8px_8px_0px_rgba(15,23,42,1)] relative z-10">
            <div className="space-y-8">
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-orange-600" /> Brand Variables
                </h3>
                <p className="text-slate-400 text-xs">Toggle identity elements to see how each layer builds your brand's complete visual authority.</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100/70 transition-colors">
                  <div className="flex flex-col">
                    <span className="font-bold text-xs sm:text-sm text-slate-800 uppercase tracking-wide">Dark Background</span>
                    <span className="text-[10px] text-slate-400">Premium reversed logo treatment</span>
                  </div>
                  <button onClick={() => setIsDarkBg(!isDarkBg)} className="text-slate-900 hover:text-orange-600 transition-colors">
                    {isDarkBg ? <ToggleRight className="w-10 h-10 text-orange-600" /> : <ToggleLeft className="w-10 h-10" />}
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100/70 transition-colors">
                  <div className="flex flex-col">
                    <span className="font-bold text-xs sm:text-sm text-slate-800 uppercase tracking-wide">Brand Tagline</span>
                    <span className="text-[10px] text-slate-400">Positioning statement below logo</span>
                  </div>
                  <button onClick={() => setShowTagline(!showTagline)} className="text-slate-900 hover:text-orange-600 transition-colors">
                    {showTagline ? <ToggleRight className="w-10 h-10 text-orange-600" /> : <ToggleLeft className="w-10 h-10" />}
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100/70 transition-colors">
                  <div className="flex flex-col">
                    <span className="font-bold text-xs sm:text-sm text-slate-800 uppercase tracking-wide">Color Palette</span>
                    <span className="text-[10px] text-slate-400">Primary brand color system</span>
                  </div>
                  <button onClick={() => setShowColorPalette(!showColorPalette)} className="text-slate-900 hover:text-orange-600 transition-colors">
                    {showColorPalette ? <ToggleRight className="w-10 h-10 text-orange-600" /> : <ToggleLeft className="w-10 h-10" />}
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100/70 transition-colors">
                  <div className="flex flex-col">
                    <span className="font-bold text-xs sm:text-sm text-slate-800 uppercase tracking-wide">Monogram Badge</span>
                    <span className="text-[10px] text-slate-400">Secondary compact logo variant</span>
                  </div>
                  <button onClick={() => setShowMonogram(!showMonogram)} className="text-slate-900 hover:text-orange-600 transition-colors">
                    {showMonogram ? <ToggleRight className="w-10 h-10 text-orange-600" /> : <ToggleLeft className="w-10 h-10" />}
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 text-[11px] text-gray-600 leading-relaxed italic">
              <strong>💡 Tip:</strong> A complete brand system includes primary logos, reversed variants, monograms, color palettes, and typography — all working as one unified visual language!
            </div>
          </div>

          {/* Live Canvas */}
          <div className="lg:col-span-8 flex flex-col justify-start relative">
            <div className="absolute top-4 right-4 z-30 bg-rose-600 text-white font-black text-[10px] tracking-widest uppercase px-3 py-1 rounded-full animate-pulse shadow-md flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5" /> Live Sandbox Canvas
            </div>

            <motion.div
              animate={{ background: isDarkBg ? "#0f172a" : "#ffffff" }}
              transition={{ duration: 0.5 }}
              className="flex-1 flex flex-col rounded-[2rem] border-2 border-slate-900 overflow-hidden shadow-2xl min-h-[450px]"
            >
              {/* Browser bar */}
              <div className={`px-4 py-3 flex items-center justify-between border-b ${isDarkBg ? "bg-slate-900 border-slate-800" : "bg-slate-100 border-slate-200"}`}>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className={`w-1/2 rounded-full py-1 text-center text-[10px] font-bold tracking-wide uppercase ${isDarkBg ? "bg-slate-950/50 text-slate-500" : "bg-white text-slate-400 shadow-inner"}`}>
                  https://brand-identity-sandbox.brand
                </div>
                <div className="w-8"></div>
              </div>

              {/* Logo presentation area */}
              <div className="flex-1 p-8 sm:p-12 flex flex-col items-center justify-center gap-8">

                {/* Main Logo */}
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center gap-4">
                    <svg viewBox="0 0 50 50" className="w-14 h-14">
                      <polygon points="25,4 46,16 46,34 25,46 4,34 4,16" fill="none" stroke="#ea580c" strokeWidth="3" />
                      <polygon points="25,12 38,20 38,30 25,38 12,30 12,20" fill="#ea580c" opacity="0.15" />
                      <circle cx="25" cy="25" r="6" fill="#ea580c" />
                    </svg>
                    <div>
                      <div className={`font-black text-2xl tracking-widest uppercase ${isDarkBg ? "text-white" : "text-slate-900"}`}>BRANDMARK</div>
                      <AnimatePresence>
                        {showTagline && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="text-orange-500 text-[10px] font-bold tracking-[0.3em] uppercase mt-0.5">
                              Identity That Speaks Volumes
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Color Palette */}
                <AnimatePresence>
                  {showColorPalette && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="flex gap-3"
                    >
                      {colors.map((c, i) => (
                        <div key={i} className="flex flex-col items-center gap-1.5">
                          <div className="w-10 h-10 rounded-xl border border-slate-200/30 shadow-sm transition-all duration-500" style={{ background: c }}></div>
                          <div className={`text-[6px] font-bold uppercase tracking-wider ${isDarkBg ? "text-slate-500" : "text-slate-400"}`}>{c}</div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Monogram badge */}
                <AnimatePresence>
                  {showMonogram && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-orange-600 flex items-center justify-center shadow-lg shadow-orange-600/30">
                        <span className="text-white font-black text-xl tracking-tight">B</span>
                      </div>
                      <div className="w-14 h-14 rounded-full border-2 border-orange-600 flex items-center justify-center">
                        <span className={`font-black text-xl tracking-tight ${isDarkBg ? "text-white" : "text-slate-900"}`}>B</span>
                      </div>
                      <div className={`text-[9px] font-bold uppercase tracking-widest ${isDarkBg ? "text-slate-500" : "text-slate-400"}`}>
                        Monogram<br />Variants
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
