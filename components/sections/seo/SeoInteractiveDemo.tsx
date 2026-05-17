"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sliders, Eye, ToggleLeft, ToggleRight, Sparkles, CheckCircle2, Search } from "lucide-react";

export default function SeoInteractiveDemo() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [showMetaTags, setShowMetaTags] = useState(true);
  const [showSchemaMarkup, setShowSchemaMarkup] = useState(true);
  const [showBacklinks, setShowBacklinks] = useState(true);

  return (
    <section className="py-24 bg-slate-50 border-t border-b border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="container mx-auto px-6 max-w-[1400px]">

        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-4">
            <Sliders className="w-3.5 h-3.5" /> SEO Audit Simulator
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-wide leading-tight mb-4">
            Live SEO Sandbox
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl">
            Toggle our on-page SEO variables below to see how each optimization signal directly impacts your search engine ranking potential in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

          {/* Control Panel */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-white border-2 border-slate-900 rounded-[2rem] p-6 sm:p-8 shadow-[8px_8px_0px_rgba(15,23,42,1)] relative z-10">
            <div className="space-y-8">
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-orange-600" /> SEO Variables
                </h3>
                <p className="text-slate-400 text-xs">Toggle real ranking signals and watch the score update instantly.</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100/70 transition-colors">
                  <div className="flex flex-col">
                    <span className="font-bold text-xs sm:text-sm text-slate-800 uppercase tracking-wide">Dark Mode Theme</span>
                    <span className="text-[10px] text-slate-400">Clean visual rendering for all audiences</span>
                  </div>
                  <button onClick={() => setIsDarkTheme(!isDarkTheme)} className="text-slate-900 hover:text-orange-600 transition-colors">
                    {isDarkTheme ? <ToggleRight className="w-10 h-10 text-orange-600" /> : <ToggleLeft className="w-10 h-10" />}
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100/70 transition-colors">
                  <div className="flex flex-col">
                    <span className="font-bold text-xs sm:text-sm text-slate-800 uppercase tracking-wide">Meta Tags & OG Data</span>
                    <span className="text-[10px] text-slate-400">Titles, descriptions & social previews</span>
                  </div>
                  <button onClick={() => setShowMetaTags(!showMetaTags)} className="text-slate-900 hover:text-orange-600 transition-colors">
                    {showMetaTags ? <ToggleRight className="w-10 h-10 text-orange-600" /> : <ToggleLeft className="w-10 h-10" />}
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100/70 transition-colors">
                  <div className="flex flex-col">
                    <span className="font-bold text-xs sm:text-sm text-slate-800 uppercase tracking-wide">Schema Markup</span>
                    <span className="text-[10px] text-slate-400">Rich results & structured data signals</span>
                  </div>
                  <button onClick={() => setShowSchemaMarkup(!showSchemaMarkup)} className="text-slate-900 hover:text-orange-600 transition-colors">
                    {showSchemaMarkup ? <ToggleRight className="w-10 h-10 text-orange-600" /> : <ToggleLeft className="w-10 h-10" />}
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100/70 transition-colors">
                  <div className="flex flex-col">
                    <span className="font-bold text-xs sm:text-sm text-slate-800 uppercase tracking-wide">Backlink Authority</span>
                    <span className="text-[10px] text-slate-400">High-DR domain referral link signals</span>
                  </div>
                  <button onClick={() => setShowBacklinks(!showBacklinks)} className="text-slate-900 hover:text-orange-600 transition-colors">
                    {showBacklinks ? <ToggleRight className="w-10 h-10 text-orange-600" /> : <ToggleLeft className="w-10 h-10" />}
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 text-[11px] text-gray-600 leading-relaxed italic">
              <strong>💡 Tip:</strong> Combining technical SEO signals with authoritative backlinks is the single most effective strategy for achieving permanent first-page dominance!
            </div>
          </div>

          {/* Live Canvas */}
          <div className="lg:col-span-8 flex flex-col justify-start relative">
            <div className="absolute top-4 right-4 z-30 bg-rose-600 text-white font-black text-[10px] tracking-widest uppercase px-3 py-1 rounded-full animate-pulse shadow-md flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5" /> Live Sandbox Canvas
            </div>

            <div className={`flex-1 flex flex-col rounded-[2rem] border-2 border-slate-900 overflow-hidden shadow-2xl transition-colors duration-500 min-h-[450px] ${isDarkTheme ? "bg-slate-950 text-white" : "bg-white text-slate-900"}`}>
              <div className={`px-4 py-3 flex items-center justify-between border-b ${isDarkTheme ? "bg-slate-900 border-slate-800" : "bg-slate-100 border-slate-200"}`}>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className={`w-1/2 rounded-full py-1 text-center text-[10px] font-bold tracking-wide uppercase ${isDarkTheme ? "bg-slate-950/50 text-slate-500" : "bg-white text-slate-400 shadow-inner"}`}>
                  https://seo-audit-sandbox.brand
                </div>
                <div className="w-8"></div>
              </div>

              <div className="flex-1 p-6 sm:p-10 flex flex-col justify-between overflow-visible relative">
                <div className="flex items-center justify-between w-full mb-10">
                  <div className="font-extrabold text-sm tracking-wider uppercase flex items-center gap-1.5">
                    <Search className="w-4 h-4 text-orange-600" /> SEO SCORE CARD
                  </div>
                  <div className={`text-xs font-bold px-3 py-1 rounded-full ${isDarkTheme ? "bg-slate-800 text-orange-400" : "bg-orange-50 text-orange-600 border border-orange-200"}`}>
                    {[showMetaTags, showSchemaMarkup, showBacklinks].filter(Boolean).length * 28 + 16}/100
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start flex-1">
                  <div className="space-y-4 text-left">
                    <div className="w-12 h-3 bg-orange-600/20 rounded-full inline-block"></div>
                    <h4 className="text-2xl sm:text-3xl font-black uppercase tracking-wide leading-tight">
                      AI <span className="text-orange-500">Audit</span> Engine
                    </h4>
                    <p className={`text-[11px] leading-relaxed max-w-sm ${isDarkTheme ? "text-slate-400" : "text-slate-500"}`}>
                      Toggle signals above to simulate how each SEO variable contributes to your overall search ranking authority score.
                    </p>

                    <AnimatePresence>
                      {showMetaTags && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pt-4 border-t border-slate-500/20 space-y-2 overflow-hidden"
                        >
                          <div className="text-[9px] font-bold uppercase tracking-wider text-orange-500">Meta Tags Active</div>
                          <div className="flex gap-2">
                            <div className="w-16 h-3 bg-orange-600/30 rounded"></div>
                            <div className="w-10 h-3 bg-slate-400/30 rounded"></div>
                            <div className="w-12 h-3 bg-slate-400/30 rounded"></div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="relative flex items-start justify-center min-h-[160px]">
                    <AnimatePresence mode="wait">
                      {showSchemaMarkup ? (
                        <motion.div
                          key="schema"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className={`w-full max-w-[280px] p-5 rounded-[1.25rem] border-2 border-slate-900 shadow-[4px_4px_0px_rgba(15,23,42,1)] z-10 ${isDarkTheme ? "bg-slate-900" : "bg-slate-50"}`}
                        >
                          <div className="text-[10px] font-extrabold uppercase tracking-widest text-orange-500 mb-2 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" /> Schema Markup
                          </div>
                          <div className="space-y-1.5 mb-3 font-mono text-[7px]">
                            <div className={`${isDarkTheme ? "text-slate-300" : "text-slate-700"}`}>{"{"}</div>
                            <div className="pl-3 text-blue-500">"@type": "LocalBusiness",</div>
                            <div className="pl-3 text-emerald-500">"name": "Brand Agency",</div>
                            <div className="pl-3 text-orange-400">"aggregateRating": 4.9</div>
                            <div className={`${isDarkTheme ? "text-slate-300" : "text-slate-700"}`}>{"}"}</div>
                          </div>
                          <div className="py-1.5 bg-slate-900 text-white rounded font-bold text-[8px] uppercase tracking-wider text-center">
                            Rich Results Enabled
                          </div>
                        </motion.div>
                      ) : (
                        showBacklinks && (
                          <motion.div
                            key="backlinks"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="relative w-full max-w-[220px] aspect-square flex items-center justify-center"
                          >
                            <svg viewBox="0 0 100 100" className="w-full h-full text-orange-600">
                              <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" />
                              <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2.5" />
                              <circle cx="50" cy="50" r="6" fill="currentColor" />
                              <circle cx="20" cy="30" r="4" fill="currentColor" opacity="0.5" />
                              <circle cx="80" cy="30" r="4" fill="currentColor" opacity="0.5" />
                              <circle cx="20" cy="70" r="4" fill="currentColor" opacity="0.5" />
                              <circle cx="80" cy="70" r="4" fill="currentColor" opacity="0.5" />
                              <line x1="50" y1="50" x2="20" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                              <line x1="50" y1="50" x2="80" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                              <line x1="50" y1="50" x2="20" y2="70" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                              <line x1="50" y1="50" x2="80" y2="70" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                            </svg>
                          </motion.div>
                        )
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
