"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sliders, Eye, ToggleLeft, ToggleRight, Sparkles, Database, ShieldCheck, Zap, Activity } from "lucide-react";

export default function InteractiveCustomDemo() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isBackendConnected, setIsBackendConnected] = useState(true);
  const [isCdnOptimized, setIsCdnOptimized] = useState(true);
  const [hasAnalytics, setHasAnalytics] = useState(true);

  return (
    <section className="py-24 bg-slate-50 border-t border-b border-slate-100 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-[1400px]">

        {/* Playful blueprint header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-4">
            <Sliders className="w-3.5 h-3.5" /> Interactive Sandbox
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-wide leading-tight mb-4">
            Custom Architecture Simulator
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl">
            Toggle our backend integrations and speed caching rules to see how custom-coded architectures optimize performance and scale systems dynamically.
          </p>
        </div>

        {/* Modular Playground Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

          {/* 1. Control Panel (Left column - 4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-white border-2 border-slate-900 rounded-[2rem] p-6 sm:p-8 shadow-[8px_8px_0px_rgba(15,23,42,1)] relative z-10 text-left">
            <div className="space-y-8">
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-orange-600" /> System Variables
                </h3>
                <p className="text-slate-400 text-xs">
                  Interact with real custom developer parameters and watch the mockup compile live.
                </p>
              </div>

              {/* Toggles */}
              <div className="space-y-6">
                {/* Theme Selector */}
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100/70 transition-colors">
                  <div className="flex flex-col">
                    <span className="font-bold text-xs sm:text-sm text-slate-800 uppercase tracking-wide">Dark Mode Theme</span>
                    <span className="text-[10px] text-slate-400">Apply tailored branding style</span>
                  </div>
                  <button onClick={() => setIsDarkTheme(!isDarkTheme)} className="text-slate-900 hover:text-orange-600 transition-colors">
                    {isDarkTheme ? <ToggleRight className="w-10 h-10 text-orange-600" /> : <ToggleLeft className="w-10 h-10" />}
                  </button>
                </div>

                {/* Database Connectivity */}
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100/70 transition-colors">
                  <div className="flex flex-col">
                    <span className="font-bold text-xs sm:text-sm text-slate-800 uppercase tracking-wide">API Database Sync</span>
                    <span className="text-[10px] text-slate-400">Connect CRM, ERP, or SQL tables</span>
                  </div>
                  <button onClick={() => setIsBackendConnected(!isBackendConnected)} className="text-slate-900 hover:text-orange-600 transition-colors">
                    {isBackendConnected ? <ToggleRight className="w-10 h-10 text-orange-600" /> : <ToggleLeft className="w-10 h-10" />}
                  </button>
                </div>

                {/* CDN Caching */}
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100/70 transition-colors">
                  <div className="flex flex-col">
                    <span className="font-bold text-xs sm:text-sm text-slate-800 uppercase tracking-wide">Edge CDN Caching</span>
                    <span className="text-[10px] text-slate-400">Bypass server loads for raw speed</span>
                  </div>
                  <button onClick={() => setIsCdnOptimized(!isCdnOptimized)} className="text-slate-900 hover:text-orange-600 transition-colors">
                    {isCdnOptimized ? <ToggleRight className="w-10 h-10 text-orange-600" /> : <ToggleLeft className="w-10 h-10" />}
                  </button>
                </div>

                {/* Analytics */}
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100/70 transition-colors">
                  <div className="flex flex-col">
                    <span className="font-bold text-xs sm:text-sm text-slate-800 uppercase tracking-wide">Analytics Console</span>
                    <span className="text-[10px] text-slate-400">Embed tracking without heavy scripts</span>
                  </div>
                  <button onClick={() => setHasAnalytics(!hasAnalytics)} className="text-slate-900 hover:text-orange-600 transition-colors">
                    {hasAnalytics ? <ToggleRight className="w-10 h-10 text-orange-600" /> : <ToggleLeft className="w-10 h-10" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 text-[11px] text-gray-600 leading-relaxed italic">
              <strong>💡 Tip:</strong> Custom-coded API routes synchronize instantly, eliminating the security and speed limitations of standard templates.
            </div>
          </div>

          {/* 2. Interactive Wireframe Canvas (Right column - 8 cols) */}
          <div className="lg:col-span-8 flex flex-col justify-start relative">

            <div className="absolute top-4 right-4 z-30 bg-rose-600 text-white font-black text-[10px] tracking-widest uppercase px-3 py-1 rounded-full animate-pulse shadow-md flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5" /> Sandbox Compile Live
            </div>

            <div className={`flex-1 flex flex-col rounded-[2rem] border-2 border-slate-900 overflow-hidden shadow-2xl transition-colors duration-500 min-h-[450px] ${isDarkTheme ? "bg-slate-950 text-white" : "bg-white text-slate-900"
              }`}>

              {/* Browser navigation tab */}
              <div className={`px-4 py-3 flex items-center justify-between border-b ${isDarkTheme ? "bg-slate-900 border-slate-800" : "bg-slate-100 border-slate-200"
                }`}>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className={`w-1/2 rounded-full py-1 text-center text-[10px] font-bold tracking-wide uppercase ${isDarkTheme ? "bg-slate-950/50 text-slate-500" : "bg-white text-slate-400 shadow-inner"
                  }`}>
                  https://app.custom-solutions.dev
                </div>
                <div className="w-8"></div>
              </div>

              {/* Canvas Webpage Content */}
              <div className="flex-1 p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden">
                
                {/* Simulated Header */}
                <div className="flex items-center justify-between w-full mb-8">
                  <div className="font-extrabold text-sm tracking-wider uppercase flex items-center gap-1.5">
                    <Database className="w-4 h-4 text-orange-600" /> Enterprise Dashboard
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-1.5 bg-slate-400/30 rounded-full"></div>
                    <div className="w-12 h-1.5 bg-slate-400/30 rounded-full"></div>
                  </div>
                </div>

                {/* Dashboard Grid inside Mockup */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center flex-1">
                  
                  {/* Left Column: System Status */}
                  <div className="space-y-6 text-left">
                    <div className="space-y-2">
                      <span className="text-[10px] font-extrabold text-orange-500 uppercase tracking-widest">Live System Parameters</span>
                      <h4 className="text-2xl sm:text-3xl font-black uppercase tracking-wide leading-tight">
                        Scalable Cloud Node
                      </h4>
                    </div>

                    <div className="space-y-3">
                      {/* Metric 1: Load Speed */}
                      <div className="flex items-center justify-between border-b border-slate-500/10 pb-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Page Load Index</span>
                        <span className={`text-xs font-mono font-bold ${isCdnOptimized ? "text-green-500" : "text-yellow-500"}`}>
                          {isCdnOptimized ? "145ms (Optimal)" : "1250ms (Slow)"}
                        </span>
                      </div>

                      {/* Metric 2: Database Sync */}
                      <div className="flex items-center justify-between border-b border-slate-500/10 pb-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Database Pipeline</span>
                        <span className={`text-xs font-mono font-bold ${isBackendConnected ? "text-green-500 animate-pulse" : "text-slate-500"}`}>
                          {isBackendConnected ? "● Connected (Live Sync)" : "○ Offline (Front Only)"}
                        </span>
                      </div>

                      {/* Metric 3: Security Auditor */}
                      <div className="flex items-center justify-between border-b border-slate-500/10 pb-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">SSL Security Audit</span>
                        <span className="text-xs font-mono font-bold text-green-500 flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-green-500" /> SHA-256 Passed
                        </span>
                      </div>
                    </div>

                    {/* Lighthouse score */}
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center font-mono font-black text-xs transition-colors duration-500 ${isCdnOptimized ? "border-green-500 text-green-500 shadow-[0_0_15px_rgba(34,197,94,0.25)]" : "border-yellow-500 text-yellow-500"}`}>
                        {isCdnOptimized ? "100" : "65"}
                      </div>
                      <div className="text-left">
                        <div className="text-[10px] font-extrabold uppercase tracking-wide">Performance Score</div>
                        <div className="text-[9px] text-slate-400 font-semibold">Verified via Core Web Vitals</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Database Mockup or Analytics charts */}
                  <div className="relative w-full flex items-center justify-center min-h-[180px] md:min-h-auto">
                    <AnimatePresence mode="wait">
                      {isBackendConnected ? (
                        <motion.div
                          key="backend-gui"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className={`w-full max-w-[320px] p-5 rounded-[1.25rem] border-2 border-slate-900 shadow-[4px_4px_0px_rgba(15,23,42,1)] z-10 text-left ${isDarkTheme ? "bg-slate-900" : "bg-slate-50"}`}
                        >
                          <div className="flex items-center justify-between mb-3 border-b border-slate-500/10 pb-2">
                            <span className="text-[9px] font-black uppercase text-orange-500 tracking-wider">Dynamic SQL Sync</span>
                            <Zap className={`w-3.5 h-3.5 ${isCdnOptimized ? "text-green-500 animate-bounce" : "text-yellow-500"}`} />
                          </div>

                          <div className="space-y-2">
                            <div className="p-2 bg-slate-500/5 rounded flex justify-between text-[9px] font-mono">
                              <span className="text-slate-400">SELECT * FROM clients</span>
                              <span className="text-green-500">200 OK</span>
                            </div>
                            <div className="p-2 bg-slate-500/5 rounded flex justify-between text-[9px] font-mono">
                              <span className="text-slate-400">POST /api/leads</span>
                              <span className="text-green-500">Synced</span>
                            </div>
                          </div>

                          {hasAnalytics && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mt-4 pt-3 border-t border-slate-500/10"
                            >
                              <div className="text-[8px] text-slate-400 font-bold uppercase tracking-wider mb-2 flex items-center gap-1">
                                <Activity className="w-3.5 h-3.5 text-green-500 animate-pulse" /> Active User Sessions
                              </div>
                              {/* Simple CSS Chart */}
                              <div className="flex items-end gap-1.5 h-12 pt-2 justify-between">
                                <div className="w-full bg-orange-600 rounded-t h-[40%]" />
                                <div className="w-full bg-orange-600 rounded-t h-[60%]" />
                                <div className="w-full bg-orange-600 rounded-t h-[90%] animate-pulse" />
                                <div className="w-full bg-orange-600 rounded-t h-[50%]" />
                                <div className="w-full bg-orange-600 rounded-t h-[75%]" />
                              </div>
                            </motion.div>
                          )}
                        </motion.div>
                      ) : (
                        <motion.div
                          key="static-doodle"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex flex-col items-center justify-center text-center text-slate-500 space-y-2"
                        >
                          <Database className="w-12 h-12 text-slate-400/50" />
                          <span className="text-xs font-bold uppercase tracking-wider">No API Node Connected</span>
                          <span className="text-[10px] text-slate-400 max-w-[180px] font-medium leading-relaxed">Toggle API Database Sync to connect the dynamic logic cluster.</span>
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
