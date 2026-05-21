"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

export default function UiUxPortfolio() {
  const [activeTab, setActiveTab] = useState(0);

  const projects = [
    {
      client: "Horizon Analytics",
      title: "Interactive SaaS Dashboard",
      category: "dashboards",
      metrics: [
        { label: "User Task Time", value: "-40%" },
        { label: "System Adoption", value: "+85%" },
        { label: "Engagement Index", value: "98%" }
      ],
      description: "A data-heavy SaaS analytics portal redesigned with modular telemetry grids, high-contrast chart palettes, and customizable workspace filters.",
      highlights: [
        "Interactive drag-and-drop widget layouts",
        "Unified visual style tokens for charts & graphs",
        "Responsive grid alignment for mobile/retina viewports"
      ],
      tech: ["Dashboard UI", "Interaction Design", "Figma Design System"],
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    },
    {
      client: "NeoBank Mobile",
      title: "Mobile Banking Application",
      category: "mobile screens",
      metrics: [
        { label: "Transfer Friction", value: "0 points" },
        { label: "Store Rating", value: "4.9/5.0" },
        { label: "Active Retention", value: "+60%" }
      ],
      description: "A modern fintech mobile application design emphasizing clean layout hierarchies, gesture-based actions, and a high-contrast dark theme.",
      highlights: [
        "Tested thumb-zone accessibility parameters",
        "Clean digital animations for transactions",
        "Universal dark and light layout systems"
      ],
      tech: ["Mobile App UI", "Interaction Tokens", "Figma Prototypes"],
      imageSrc: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      client: "Apex SaaS Funnel",
      title: "Conversion-Optimized Landing Page",
      category: "landing pages",
      metrics: [
        { label: "Conversion Lift", value: "+120%" },
        { label: "Bounce Reduction", value: "-35%" },
        { label: "A/B Test Success", value: "100%" }
      ],
      description: "A conversion-focused promotional landing page mockup built with contrasting call-to-actions, clear benefit grids, and visual media placeholders.",
      highlights: [
        "Structured typographic reading flow",
        "Frictionless inline sign-up input layouts",
        "Highly engaging responsive illustration grids"
      ],
      tech: ["Landing Page UI", "Conversion Design", "Wireframe Framework"],
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      client: "Tradex Holdings",
      title: "Corporate Website Redesign",
      category: "before/after redesigns",
      metrics: [
        { label: "Speed Index", value: "0.4s" },
        { label: "Inbound Leads", value: "+210%" },
        { label: "Content CLS Shift", value: "0.0" }
      ],
      description: "A comprehensive before-and-after redesign transforming an outdated legacy portal into a high-end corporate digital product experience.",
      highlights: [
        "Complete rebranding and logo alignment",
        "Clean CSS flexbox responsive structures",
        "Optimized media asset layout tokens"
      ],
      tech: ["Corporate UI", "Branding Design", "Design Audit"],
      imageSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    }
  ];

  return (
    <section className="py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute left-0 bottom-0 w-[40rem] h-[40rem] bg-orange-650/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        
        {/* Header with Switcher Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-6">
          <div className="border-l-4 border-orange-500 pl-6 text-left">
            <span className="font-extrabold text-xs text-orange-400 uppercase tracking-widest block mb-2">
              Our Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide leading-none">
              UI/UX Projects We’ve Designed
            </h2>
          </div>

          {/* Minimalist Switcher */}
          <div className="flex flex-wrap gap-4 border-b border-slate-800 pb-2">
            {projects.map((proj, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`pb-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-300 relative ${
                  activeTab === idx ? "text-orange-400" : "text-slate-400 hover:text-white"
                }`}
              >
                {proj.client}
                {activeTab === idx && (
                  <motion.div
                    layoutId="uiuxPortfolioActiveTabLine"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-500"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Copywriting & Metrics */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-2">
                <span className="text-orange-400 text-xs font-black uppercase tracking-widest block">
                  {projects[activeTab].client} Design
                </span>
                <span className="px-2.5 py-0.5 bg-slate-900 border border-slate-800 text-[10px] text-slate-400 font-extrabold uppercase tracking-widest rounded-full">
                  {projects[activeTab].category}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-wide text-white">
                {projects[activeTab].title}
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                {projects[activeTab].description}
              </p>
            </div>

            {/* Metrics Breakdown */}
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

            {/* Highlights */}
            <div className="space-y-3 text-left">
              {projects[activeTab].highlights.map((highlight, hIdx) => (
                <div key={hIdx} className="flex items-center gap-3 text-slate-300 text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 pt-4">
              {projects[activeTab].tech.map((t, tIdx) => (
                <span key={tIdx} className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs font-bold text-slate-400">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side: Image Mockup */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
              <img
                src={projects[activeTab].imageSrc}
                alt={projects[activeTab].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors" />

              {/* High Engagement Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-slate-950/90 border border-slate-800 px-3 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest text-orange-400">
                <Sparkles className="w-3.5 h-3.5" /> Premium UX Quality
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
