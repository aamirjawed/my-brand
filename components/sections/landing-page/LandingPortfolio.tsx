"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";

export default function LandingPortfolio() {
  const [activeTab, setActiveTab] = useState(0);

  const projects = [
    {
      client: "Fintech Venture Capital",
      title: "SeedFund - High-Converting Investor Lead Portal",
      metrics: [
        { label: "Conversion Lift", value: "+214%" },
        { label: "Cost Per Lead", value: "-45%" },
        { label: "Lighthouse Speed", value: "100/100" }
      ],
      description: "A secure, lightning-fast lead funnel designed for high-net-worth investors. By implementing a frictionless multi-step questionnaire, we boosted lead volume and qualified high-quality seed leads.",
      highlights: [
        "Interactive investment returns calculator",
        "Encrypted database integrations",
        "0.6s page response times"
      ],
      tech: ["Next.js", "Framer Motion", "Tailwind CSS", "PostgreSQL"],
      imageSrc: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
      badgeColor: "bg-emerald-500"
    },
    {
      client: "B2B SaaS Automation",
      title: "FlowSync - Automated Workflow Registration",
      metrics: [
        { label: "Signup Rate", value: "18.7%" },
        { label: "Page Load Speed", value: "0.4s" },
        { label: "Mobile Conversions", value: "+320%" }
      ],
      description: "FlowSync needed a landing page that could instantly clarify their complex automated database integration features. We built an interactive live flowchart sandbox on the page, driving huge sign-up numbers.",
      highlights: [
        "Live interactive pipeline demo widget",
        "Mobile-first responsive call-to-actions",
        "GTM & Meta Pixel conversion tracking"
      ],
      tech: ["React Core", "TypeScript", "Vite", "Node.js"],
      imageSrc: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
      badgeColor: "bg-orange-500"
    }
  ];

  return (
    <section className="py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Dynamic background accents */}
      <div className="absolute left-0 bottom-0 w-[40rem] h-[40rem] bg-orange-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        
        {/* Header with Switcher Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="border-l-4 border-orange-500 pl-6">
            <span className="font-extrabold text-xs text-orange-500 uppercase tracking-widest block mb-2">
              Our Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide leading-none">
              Landing Pages We’ve Built
            </h2>
          </div>

          {/* Minimalist Switcher - No Card */}
          <div className="flex gap-4 border-b border-slate-800 pb-2">
            {projects.map((proj, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`pb-2 text-sm font-extrabold uppercase tracking-wider transition-all duration-300 relative ${
                  activeTab === idx ? "text-orange-500" : "text-slate-400 hover:text-white"
                }`}
              >
                {proj.client}
                {activeTab === idx && (
                  <motion.div
                    layoutId="portfolioActiveTabLine"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-500"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Project Showcase Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Story & Bold Metrics */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-orange-500 text-xs font-black uppercase tracking-widest block">
                {projects[activeTab].client} Showcase
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-wide text-white">
                {projects[activeTab].title}
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                {projects[activeTab].description}
              </p>
            </div>

            {/* Metrics Breakdown (Big values, no card styling, just text grids with borders) */}
            <div className="grid grid-cols-3 gap-6 border-y border-slate-800 py-8">
              {projects[activeTab].metrics.map((metric, mIdx) => (
                <div key={mIdx} className="text-left">
                  <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest font-bold mt-2">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Highlights bullet points */}
            <div className="space-y-3">
              {projects[activeTab].highlights.map((highlight, hIdx) => (
                <div key={hIdx} className="flex items-center gap-3 text-slate-300 text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Tech stack tags */}
            <div className="flex flex-wrap gap-2 pt-4">
              {projects[activeTab].tech.map((t, tIdx) => (
                <span key={tIdx} className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs font-bold text-slate-400">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side: Media Container / Device preview & Lighthouse */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
              {/* Screenshot mockup */}
              <img
                src={projects[activeTab].imageSrc}
                alt={projects[activeTab].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors" />

              {/* Lighthouse Speed Badge Overlay (Shows custom tech credentials) */}
              <div className="absolute bottom-4 right-4 bg-slate-950/95 border border-slate-800 backdrop-blur px-4 py-2.5 rounded-xl flex items-center gap-3 shadow-lg">
                <div className="w-10 h-10 rounded-full border-2 border-emerald-500 flex items-center justify-center text-xs font-black text-emerald-400 font-mono">
                  100
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider leading-none">Speed Index</span>
                  <span className="text-[8px] text-slate-500 block uppercase font-mono mt-1">Lighthouse v10</span>
                </div>
              </div>

              {/* Active project tag */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-slate-950/90 border border-slate-800 px-3 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest text-orange-500">
                <Sparkles className="w-3.5 h-3.5" /> High Performance
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
