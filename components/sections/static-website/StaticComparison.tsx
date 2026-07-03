"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X, Shield, Zap, Sparkles, AlertCircle } from "lucide-react";

export default function StaticComparison() {
  const comparisonRows = [
    {
      feature: "Page Speed",
      staticVal: "Instant (0.1s) — Pre-compiled pages served from CDN edge networks",
      dynamicVal: "Slow (1.5s+) — Requires server-side calculation and database query latency",
      staticIcon: Zap,
      staticIconColor: "text-emerald-500",
      dynamicIcon: AlertCircle,
      dynamicIconColor: "text-orange-500",
    },
    {
      feature: "Maintenance",
      staticVal: "Zero overhead — No databases to maintain, no PHP plugins to update",
      dynamicVal: "High overhead — Requires regular security patches and server configurations",
      staticIcon: Check,
      staticIconColor: "text-emerald-500",
      dynamicIcon: X,
      dynamicIconColor: "text-rose-500",
    },
    {
      feature: "SEO & Rankings",
      staticVal: "Stellar performance — Perfect 100/100 Core Web Vitals scores by default",
      dynamicVal: "Difficult optimization — Slower crawls and rendering delays impact search indexers",
      staticIcon: Check,
      staticIconColor: "text-emerald-500",
      dynamicIcon: AlertCircle,
      dynamicIconColor: "text-orange-500",
    },
    {
      feature: "Hosting Costs",
      staticVal: "Minimal cost — Served globally from free/cheap serverless edge hosting",
      dynamicVal: "Expensive scaling — Requires web servers, database hosting, and memory load balancers",
      staticIcon: Check,
      staticIconColor: "text-emerald-500",
      dynamicIcon: X,
      dynamicIconColor: "text-rose-500",
    },
    {
      feature: "Security",
      staticVal: "Impenetrable — Read-only files with zero database or backend plugin vulnerabilities",
      dynamicVal: "Vulnerable — Exposed to SQL injections, malware, and cross-site scripting exploits",
      staticIcon: Shield,
      staticIconColor: "text-emerald-500",
      dynamicIcon: X,
      dynamicIconColor: "text-rose-500",
    },
  ];

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900">
      {/* Background radial glow */}
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">

        {/* Section Header */}
        <div className="w-full mb-16 border-l-4 border-orange-600 pl-4 sm:pl-6 text-left">
          <span className="font-extrabold text-[10px] text-orange-500 uppercase tracking-widest block mb-2">
            Topical Comparison
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white uppercase tracking-wider leading-[1.25]">
            Static Websites vs Dynamic Websites
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-xl font-medium">
            Explore how modern pre-rendered systems outperform traditional database-heavy database setups across every core web metric.
          </p>
        </div>

        {/* Asymmetric Responsive Table */}
        <div className="overflow-x-auto border border-slate-900 rounded-3xl bg-slate-950/40 backdrop-blur-sm">
          <table className="w-full text-left border-collapse text-slate-350">
            <thead>
              <tr className="bg-slate-900/60 border-b border-slate-900 text-white font-black uppercase text-[10px] tracking-widest">
                <th className="p-5 border-r border-slate-900">Core Feature</th>
                <th className="p-5 border-r border-slate-900 text-orange-500">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" /> Static Architecture (JAMstack)
                  </span>
                </th>
                <th className="p-5">Dynamic CMS (WordPress/PHP)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-900">
              {comparisonRows.map((row, idx) => {
                const StatIcon = row.staticIcon;
                const DynIcon = row.dynamicIcon;

                return (
                  <tr key={idx} className="hover:bg-slate-900/10 transition-colors">
                    <td className="p-5 font-extrabold text-white text-xs sm:text-sm border-r border-slate-900">
                      {row.feature}
                    </td>
                    <td className="p-5 border-r border-slate-900">
                      <div className="flex items-start gap-3">
                        <StatIcon className={`w-5 h-5 shrink-0 mt-0.5 ${row.staticIconColor}`} />
                        <span className="text-xs sm:text-sm text-slate-300 font-medium">{row.staticVal}</span>
                      </div>
                    </td>
                    <td className="p-5">
                      <div className="flex items-start gap-3">
                        <DynIcon className={`w-5 h-5 shrink-0 mt-0.5 ${row.dynamicIconColor}`} />
                        <span className="text-xs sm:text-sm text-slate-400 font-medium">{row.dynamicVal}</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Direct Summary List for AI Overviews optimization */}
        <div className="mt-12 p-6 bg-slate-950 border border-slate-900 rounded-3xl text-left">
          <h3 className="font-extrabold text-sm uppercase tracking-widest text-white mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-orange-500" /> Summary Benefits of Static Websites:
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Faster loading speed with edge pre-rendering",
              "Better SEO performance and Core Web Vitals rankings",
              "Improved security through database elimination",
              "Lower maintenance overhead and hosting costs",
            ].map((benefit, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 font-medium">
                <Check className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
