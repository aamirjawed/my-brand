"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sliders, Eye, ToggleLeft, ToggleRight, Sparkles, Terminal, Activity, Zap, Play } from "lucide-react";

export default function SpaInteractiveDemo() {
  const [bundleSize, setBundleSize] = useState<"small" | "large">("small");
  const [cachingEnabled, setCachingEnabled] = useState(true);
  const [ssrEnabled, setSsrEnabled] = useState(true);
  const [activeTab, setActiveTab] = useState<"dashboard" | "analytics" | "settings">("dashboard");
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  // Add simulated terminal logging
  const addLog = (msg: string) => {
    setLogs((prev) => [msg, ...prev.slice(0, 5)]);
  };

  useEffect(() => {
    addLog(`[System] Initialized sandbox. SSR: ${ssrEnabled ? "ON" : "OFF"}, Caching: ${cachingEnabled ? "ON" : "OFF"}, Bundle: ${bundleSize === "small" ? "45KB" : "4.8MB"}`);
  }, [bundleSize, cachingEnabled, ssrEnabled]);

  // Handle active client tab clicks
  const handleTabClick = (tab: "dashboard" | "analytics" | "settings") => {
    if (tab === activeTab) return;
    setLoading(true);
    
    // Simulate network delay & bundle parsing duration
    const fetchDelay = cachingEnabled ? 50 : 600;
    const hydrationDelay = bundleSize === "small" ? 100 : 1500;
    const totalDelay = fetchDelay + hydrationDelay;

    addLog(`[Route] Navigating to /${tab}`);
    if (!cachingEnabled) {
      addLog(`[Network] GET /api/${tab} ... pending (no-cache)`);
    } else {
      addLog(`[Cache] GET /api/${tab} ... loaded from cache`);
    }

    setTimeout(() => {
      setActiveTab(tab);
      setLoading(false);
      addLog(`[Performance] Hydrated /${tab} in ${hydrationDelay}ms. Time-To-Interactive (TTI) achieved.`);
    }, totalDelay);
  };

  // Compute simulated Performance Score
  let lighthouseScore = 100;
  if (bundleSize === "large") lighthouseScore -= 45;
  if (!ssrEnabled) lighthouseScore -= 25;
  if (!cachingEnabled) lighthouseScore -= 15;

  return (
    <section className="py-24 bg-slate-50 border-t border-b border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-[1400px]">

        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-4">
            <Sliders className="w-3.5 h-3.5" /> Performance Sandbox
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-wide leading-tight mb-4">
            Single Page Application Development Sandbox
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
            Toggle rendering strategies, bundles, and cache logic to inspect client-side hydration speeds and search index suitability in real-time.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

          {/* Control Panel (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-white border-2 border-slate-900 rounded-[2rem] p-6 sm:p-8 shadow-[8px_8px_0px_rgba(15,23,42,1)] relative z-10">
            <div className="space-y-8">
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-orange-600" /> System Tuning
                </h3>
                <p className="text-slate-400 text-xs">
                  Manipulate frontend loading assets and watch the simulated Lighthouse metrics transform.
                </p>
              </div>

              <div className="space-y-6">
                {/* Bundle Size */}
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100/70 transition-colors">
                  <div className="flex flex-col">
                    <span className="font-bold text-xs sm:text-sm text-slate-800 uppercase tracking-wide">JS Bundle Size</span>
                    <span className="text-[10px] text-slate-400">Total script volume downloaded</span>
                  </div>
                  <button 
                    onClick={() => setBundleSize(bundleSize === "small" ? "large" : "small")} 
                    className="text-xs font-black uppercase bg-slate-950 text-white hover:text-orange-500 px-3 py-1.5 rounded-lg border border-slate-800 transition-colors"
                  >
                    {bundleSize === "small" ? "45KB (Optimized)" : "4.8MB (Bloated)"}
                  </button>
                </div>

                {/* Server-Side Rendering (SSR) */}
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100/70 transition-colors">
                  <div className="flex flex-col">
                    <span className="font-bold text-xs sm:text-sm text-slate-800 uppercase tracking-wide">SSR Pre-rendering</span>
                    <span className="text-[10px] text-slate-400">Server compiles initial HTML</span>
                  </div>
                  <button onClick={() => setSsrEnabled(!ssrEnabled)} className="text-slate-900 hover:text-orange-600 transition-colors">
                    {ssrEnabled ? <ToggleRight className="w-10 h-10 text-orange-600" /> : <ToggleLeft className="w-10 h-10" />}
                  </button>
                </div>

                {/* Cache Optimization */}
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100/70 transition-colors">
                  <div className="flex flex-col">
                    <span className="font-bold text-xs sm:text-sm text-slate-800 uppercase tracking-wide">Data Caching</span>
                    <span className="text-[10px] text-slate-400">Cached API states (React Query)</span>
                  </div>
                  <button onClick={() => setCachingEnabled(!cachingEnabled)} className="text-slate-900 hover:text-orange-600 transition-colors">
                    {cachingEnabled ? <ToggleRight className="w-10 h-10 text-orange-600" /> : <ToggleLeft className="w-10 h-10" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 text-[11px] text-gray-600 leading-relaxed italic">
              <strong>💡 Live Concept:</strong> SPAs perform best when hydration delays are avoided. Restricting your JS bundle size prevents main thread blocks.
            </div>
          </div>

          {/* Interactive Wireframe Canvas (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col justify-start relative">
            
            <div className="absolute top-4 right-4 z-30 bg-rose-600 text-white font-black text-[10px] tracking-widest uppercase px-3 py-1 rounded-full animate-pulse shadow-md flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5" /> Simulation active
            </div>

            {/* Simulated Browser Frame */}
            <div className="flex-1 flex flex-col rounded-[2rem] border-2 border-slate-900 overflow-hidden shadow-2xl min-h-[480px] bg-slate-950 text-white">
              
              {/* Browser Address Bar */}
              <div className="px-4 py-3 flex items-center justify-between border-b bg-slate-900 border-slate-800">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className="w-1/2 rounded-full py-1 text-center text-[10px] font-bold tracking-wide uppercase bg-slate-950/50 text-slate-500">
                  https://spa-optimizer.digital
                </div>
                <div className="w-8"></div>
              </div>

              {/* Dynamic Content Panel */}
              <div className="flex-1 p-6 flex flex-col justify-between relative">
                
                {/* Browser Navigation */}
                <div className="flex items-center justify-between w-full pb-4 border-b border-slate-900">
                  <div className="font-extrabold text-sm tracking-wider uppercase flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-orange-500" /> DASHBOARD.APP
                  </div>
                  <div className="flex items-center gap-3">
                    {["dashboard", "analytics", "settings"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => handleTabClick(tab as any)}
                        className={`px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider transition-colors ${
                          activeTab === tab 
                            ? "bg-orange-600 text-white" 
                            : "bg-slate-900 text-slate-400 hover:text-white"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Simulated Loading Overlay */}
                {loading && (
                  <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm z-30 flex flex-col items-center justify-center gap-4">
                    <div className="w-8 h-8 rounded-full border-4 border-orange-500 border-t-transparent animate-spin"></div>
                    <span className="text-[10px] font-mono text-orange-500 uppercase tracking-widest">
                      {bundleSize === "large" ? "Downloading & Hydrating JS..." : "Routing Client..."}
                    </span>
                  </div>
                )}

                {/* Viewport content */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-6">
                  
                  {/* Left: View Description */}
                  <div className="space-y-4">
                    <h4 className="text-xl sm:text-2xl font-black uppercase tracking-wide text-orange-500">
                      /{activeTab} View
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-mono">
                      {activeTab === "dashboard" && "Main state hub. Displaying server stats, operational revenue aggregates, and API data streams."}
                      {activeTab === "analytics" && "Analytical graphics. Compiling bundle packages on demand. Script resources executed seamlessly."}
                      {activeTab === "settings" && "System control portal. Dynamic metadata mutations. Global configurations adjusted safely."}
                    </p>

                    <div className="flex gap-4 items-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-sm ${
                        lighthouseScore >= 90 ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" :
                        lighthouseScore >= 70 ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20" :
                        "bg-red-500/10 text-red-400 border border-red-500/20"
                      }`}>
                        {lighthouseScore}
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Lighthouse Perf</div>
                        <div className="text-[9px] text-slate-500 font-mono">Core Web Vitals Rating</div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Terminal Logs */}
                  <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 h-[160px] flex flex-col font-mono text-[9px] text-slate-300 overflow-hidden relative">
                    <div className="flex items-center gap-1.5 text-slate-500 border-b border-slate-800 pb-2 mb-2 shrink-0">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>CONSOLE LOGGER</span>
                    </div>
                    <div className="flex-1 overflow-y-auto space-y-1.5 select-none scrollbar-thin">
                      {logs.map((log, index) => (
                        <div key={index} className={log.includes("[Performance]") ? "text-emerald-400" : log.includes("[Network]") ? "text-yellow-400" : "text-slate-400"}>
                          {log}
                        </div>
                      ))}
                    </div>
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
