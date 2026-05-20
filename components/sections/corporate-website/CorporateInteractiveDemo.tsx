"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sliders, ToggleLeft, ToggleRight, Sparkles, CheckCircle2, ShieldAlert, Globe, Server } from "lucide-react";

export default function CorporateInteractiveDemo() {
  const [securityTier, setSecurityTier] = useState<"standard" | "waf" | "vpc">("standard");
  const [cmsType, setCmsType] = useState<"sql" | "headless">("sql");
  const [regions, setRegions] = useState<string[]>(["US"]);

  const toggleRegion = (region: string) => {
    if (regions.includes(region)) {
      if (regions.length > 1) {
        setRegions(regions.filter((r) => r !== region));
      }
    } else {
      setRegions([...regions, region]);
    }
  };

  return (
    <section id="interactive-demo" className="py-24 bg-slate-900 border-t border-b border-slate-950 relative overflow-hidden text-white">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-white text-xs font-bold uppercase tracking-widest mb-4">
            <Sliders className="w-3.5 h-3.5 text-orange-500" /> Interactive Architecture Builder
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-wide leading-tight mb-4">
            Enterprise System Configuration Sandbox
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
            Toggle your corporate website's security layer, CMS, and edge-routing configuration to preview performance characteristics.
          </p>
        </div>

        {/* Modular Playground Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* 1. Control Panel */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-slate-950 border border-slate-800 rounded-[2rem] p-6 sm:p-8 relative z-10 text-left">
            <div className="space-y-8">
              <div>
                <h3 className="font-extrabold text-white text-lg uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-orange-500 animate-pulse" /> Architecture Config
                </h3>
                <p className="text-slate-400 text-xs">
                  Interact with real enterprise systems controls and watch the system model adapt instantly.
                </p>
              </div>

              {/* Controls */}
              <div className="space-y-6">
                {/* Security Tier */}
                <div className="space-y-2.5">
                  <label className="font-bold text-xs uppercase tracking-wider text-slate-400">Security Shield Tier</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { key: "standard", label: "Basic SSL" },
                      { key: "waf", label: "WAF Shield" },
                      { key: "vpc", label: "Isolated VPC" }
                    ].map((sec) => (
                      <button
                        key={sec.key}
                        onClick={() => setSecurityTier(sec.key as any)}
                        className={`px-3 py-2.5 text-[9px] font-black uppercase tracking-wider rounded-xl border transition-all duration-300 ${
                          securityTier === sec.key
                            ? "border-orange-500 text-white bg-orange-600/10 shadow-[0_0_15px_rgba(234,88,12,0.1)]"
                            : "border-slate-800 text-slate-400 hover:text-white bg-slate-900/40"
                        }`}
                      >
                        {sec.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* CMS Database Architecture */}
                <div className="space-y-2.5">
                  <label className="font-bold text-xs uppercase tracking-wider text-slate-400">CMS Database Mode</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { key: "sql", label: "Monolithic SQL" },
                      { key: "headless", label: "Headless GraphQL" }
                    ].map((cms) => (
                      <button
                        key={cms.key}
                        onClick={() => setCmsType(cms.key as any)}
                        className={`px-3 py-2.5 text-[9px] font-black uppercase tracking-wider rounded-xl border transition-all duration-300 ${
                          cmsType === cms.key
                            ? "border-orange-500 text-white bg-orange-600/10 shadow-[0_0_15px_rgba(234,88,12,0.1)]"
                            : "border-slate-800 text-slate-400 hover:text-white bg-slate-900/40"
                        }`}
                      >
                        {cms.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* CDN Locations */}
                <div className="space-y-2.5">
                  <label className="font-bold text-xs uppercase tracking-wider text-slate-400">CDN Edge Locations</label>
                  <div className="grid grid-cols-3 gap-2">
                    {["US", "EU", "APAC"].map((region) => {
                      const isActive = regions.includes(region);
                      return (
                        <button
                          key={region}
                          onClick={() => toggleRegion(region)}
                          className={`px-3 py-2.5 text-[9px] font-black uppercase tracking-wider rounded-xl border transition-all duration-300 ${
                            isActive
                              ? "border-orange-500 text-white bg-orange-600/10 shadow-[0_0_15px_rgba(234,88,12,0.1)]"
                              : "border-slate-800 text-slate-400 hover:text-white bg-slate-900/40"
                          }`}
                        >
                          {region} Edge
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-900 text-[10px] text-slate-500 leading-relaxed italic">
              <strong>Architecture Summary:</strong> Decoupled headless platforms route user requests via dynamic edge servers, completely securing databases against direct web exposures.
            </div>
          </div>

          {/* 2. Interactive Wireframe Canvas */}
          <div className="lg:col-span-8 flex flex-col justify-start relative">
            <div className="absolute top-4 right-4 z-30 bg-orange-600 text-white font-black text-[9px] tracking-widest uppercase px-3 py-1 rounded-full animate-pulse shadow-md flex items-center gap-1">
              <Globe className="w-3.5 h-3.5" /> Simulator Engine Active
            </div>

            {/* Canvas */}
            <div className="flex-1 flex flex-col rounded-[2rem] border border-slate-800 overflow-hidden bg-slate-950/80 shadow-2xl min-h-[460px] p-6 sm:p-10 justify-between relative text-left">
              {/* Mesh visualizer overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ea580c03_1px,transparent_1px),linear-gradient(to_bottom,#ea580c03_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />

              {/* Visualized flow nodes */}
              <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center gap-10 flex-1 my-6">
                {/* User Input Edge */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-orange-600/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
                    <Globe className="w-6 h-6 animate-pulse" />
                  </div>
                  <div className="text-center">
                    <div className="text-[10px] font-black uppercase tracking-wider text-white">Client Traffic</div>
                    <div className="text-[8px] text-slate-400">DNS Resolution</div>
                  </div>
                </div>

                {/* Pulse lines connecting User -> Firewall */}
                <div className="hidden sm:block flex-1 h-0.5 bg-slate-800 relative overflow-hidden">
                  <div className="absolute h-full w-[40%] bg-orange-500 left-[-40%] animate-[pulse_2s_infinite] rounded-full" />
                </div>

                {/* Firewall Layer */}
                <div className="flex flex-col items-center gap-3">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300 ${
                    securityTier === "standard" 
                      ? "bg-slate-900 border-slate-800 text-slate-400" 
                      : securityTier === "waf"
                      ? "bg-orange-600/10 border-orange-500/30 text-orange-500 shadow-[0_0_20px_rgba(234,88,12,0.15)]"
                      : "bg-emerald-600/10 border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                  }`}>
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <div className="text-center">
                    <div className="text-[10px] font-black uppercase tracking-wider text-white">Security Shield</div>
                    <div className="text-[8px] text-slate-400">
                      {securityTier === "standard" ? "Basic Port SSL" : securityTier === "waf" ? "CF Enterprise WAF" : "Isolated VPC Tunnel"}
                    </div>
                  </div>
                </div>

                {/* Pulse lines connecting Firewall -> Origin Server */}
                <div className="hidden sm:block flex-1 h-0.5 bg-slate-800 relative overflow-hidden">
                  <div className="absolute h-full w-[40%] bg-orange-500 left-[-40%] animate-[pulse_2s_infinite_0.5s] rounded-full" />
                </div>

                {/* Origin Host Server */}
                <div className="flex flex-col items-center gap-3">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300 ${
                    cmsType === "sql" 
                      ? "bg-slate-900 border-slate-800 text-slate-400"
                      : "bg-orange-600/10 border-orange-500/30 text-orange-500 shadow-[0_0_20px_rgba(234,88,12,0.15)]"
                  }`}>
                    <Server className="w-6 h-6" />
                  </div>
                  <div className="text-center">
                    <div className="text-[10px] font-black uppercase tracking-wider text-white">Application Host</div>
                    <div className="text-[8px] text-slate-400">{cmsType === "sql" ? "Direct DB Queries" : "Static Node Pre-Render"}</div>
                  </div>
                </div>
              </div>

              {/* Simulation Terminal Console */}
              <div className="relative z-10 w-full bg-slate-950 border border-slate-900 rounded-xl p-4 font-mono text-[9px] text-slate-400 space-y-1 shadow-inner">
                <div className="flex items-center justify-between border-b border-slate-900 pb-2 mb-2 text-slate-500">
                  <span>TERMINAL CONSOLE SYSTEM FEED</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                </div>
                <p className="text-slate-500">{"["}System Configuration Ready{"]"}</p>
                <p className="text-orange-500">▶ SEC_TIER: {securityTier.toUpperCase()} | CMS_MODE: {cmsType.toUpperCase()} | EDGE_CDNS: {regions.join(", ")}</p>
                <p>▶ Initializing handshake protocol with regional servers...</p>
                <p className="text-emerald-400">
                  {cmsType === "headless" 
                    ? "✔ Cache HIT: Assets loaded dynamically in 42ms via CDN edge routing." 
                    : "⚡ Cache MISS: Bypassed edge nodes, querying monolithic SQL database directly (240ms latency)."}
                </p>
                <p>
                  {securityTier === "vpc" 
                    ? "✔ Security clearance high: Port monitoring restricted behind private VPC gateways." 
                    : securityTier === "waf"
                    ? "✔ Cloudflare threat defense active: Scanning user agent cookies."
                    : "⚠ Notice: Direct port connection exposed to open internet traffic. Security auditing recommended."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
