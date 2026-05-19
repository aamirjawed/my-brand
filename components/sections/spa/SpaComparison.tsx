"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, MinusCircle } from "lucide-react";

export default function SpaComparison() {
  const criteria = [
    {
      name: "Page Navigation Speed",
      spa: { value: "Instant", note: "Client-side routing, no server round-trip", good: true },
      mpa: { value: "300–1200ms", note: "Full HTML document reload on every click", good: false },
      ssr: { value: "200–600ms", note: "Server renders new HTML per request", good: null },
    },
    {
      name: "Real-Time Data Updates",
      spa: { value: "Native", note: "WebSocket & polling built into the component layer", good: true },
      mpa: { value: "Requires refresh", note: "No built-in real-time capability", good: false },
      ssr: { value: "Partial", note: "Possible with SSE but complex to implement", good: null },
    },
    {
      name: "User Experience & Feel",
      spa: { value: "App-like", note: "Smooth transitions, persistent state, no flash", good: true },
      mpa: { value: "Page reloads", note: "Visible white flash, scroll position lost", good: false },
      ssr: { value: "Near-SPA", note: "Better than MPA, worse than true SPA", good: null },
    },
    {
      name: "Initial Load Time",
      spa: { value: "1–2s (split)", note: "With code splitting + lazy loading", good: null },
      mpa: { value: "Fast first load", note: "Each page is a lightweight HTML document", good: true },
      ssr: { value: "0.5–1.5s", note: "HTML streamed from server immediately", good: true },
    },
    {
      name: "SEO Performance",
      spa: { value: "Good (modern)", note: "Next.js SSG/SSR hybrid handles SEO natively", good: true },
      mpa: { value: "Excellent", note: "Full HTML available to crawlers immediately", good: true },
      ssr: { value: "Excellent", note: "Server-rendered HTML fully indexable", good: true },
    },
    {
      name: "Best For",
      spa: { value: "Dashboards, SaaS, Portals, Apps", note: "Any product requiring rich interactivity", good: true },
      mpa: { value: "Blogs, Brochure Sites", note: "Content-heavy, low-interaction use cases", good: null },
      ssr: { value: "E-commerce, Marketing Sites", note: "SEO-critical with moderate interactivity", good: null },
    },
  ];

  const Icon = ({ good }: { good: boolean | null }) => {
    if (good === true) return <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />;
    if (good === false) return <XCircle className="w-4 h-4 text-red-400 shrink-0" />;
    return <MinusCircle className="w-4 h-4 text-slate-400 shrink-0" />;
  };

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-extrabold text-xs text-orange-500 uppercase tracking-widest bg-orange-600/10 px-4 py-2 rounded-full border border-orange-500/20 mb-4 inline-block">
            Technical Comparison
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-wide mt-6 mb-6">
            SPA vs MPA vs SSR
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            The right architecture depends entirely on what your product needs to do. This is a direct, technical comparison — no marketing spin — so you can make the correct decision for your specific project.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden"
        >
          {/* Table header */}
          <div className="grid grid-cols-4 bg-slate-900 text-white">
            <div className="p-5 text-xs font-bold uppercase tracking-widest text-slate-400">Criteria</div>
            <div className="p-5 border-l border-slate-800">
              <div className="text-orange-500 font-black text-sm uppercase tracking-wide">Single Page App</div>
              <div className="text-slate-500 text-[10px] mt-0.5">React / Vue / Next.js</div>
            </div>
            <div className="p-5 border-l border-slate-800">
              <div className="text-white font-black text-sm uppercase tracking-wide">Multi-Page Site</div>
              <div className="text-slate-500 text-[10px] mt-0.5">WordPress / Static HTML</div>
            </div>
            <div className="p-5 border-l border-slate-800">
              <div className="text-white font-black text-sm uppercase tracking-wide">Server-Side Rendered</div>
              <div className="text-slate-500 text-[10px] mt-0.5">Next.js SSR / Nuxt</div>
            </div>
          </div>

          {/* Table rows */}
          {criteria.map((row, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-4 border-t border-slate-100 ${idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}
            >
              <div className="p-5 text-slate-900 font-bold text-sm">{row.name}</div>

              {[row.spa, row.mpa, row.ssr].map((cell, ci) => (
                <div key={ci} className="p-5 border-l border-slate-100 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Icon good={cell.good} />
                    <span className="font-bold text-sm text-slate-900">{cell.value}</span>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed">{cell.note}</p>
                </div>
              ))}
            </div>
          ))}
        </motion.div>

        <p className="text-center text-slate-500 text-xs mt-6 max-w-xl mx-auto">
          We build all three architectures. Most client dashboards, SaaS tools, and internal platforms are best served by a well-engineered SPA — but we will always recommend what your specific product genuinely needs.
        </p>

      </div>
    </section>
  );
}
