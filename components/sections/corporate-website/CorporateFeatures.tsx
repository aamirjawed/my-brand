"use client";

import React from "react";
import { motion } from "framer-motion";
import { Paintbrush, Laptop, Search, Zap, LayoutGrid, Rocket, BarChart3, Wrench, ArrowUpRight } from "lucide-react";

export default function CorporateFeatures() {
  const services = [
    {
      icon: Paintbrush,
      title: "Custom Website Design",
      description: "Bespoke visual layouts crafted precisely to match corporate identity guidelines, brand books, and enterprise aesthetics."
    },
    {
      icon: Laptop,
      title: "Responsive Development",
      description: "Mobile-first structures programmed using Next.js and Tailwind, offering smooth transitions across all viewports."
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Clean semantic markup, optimized meta schemas, indexable structural trees, and perfect technical SEO alignment."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Static pre-rendering, edge asset CDN caching, and optimized media load times to secure perfect Lighthouse scores."
    },
    {
      icon: LayoutGrid,
      title: "CMS Integration",
      description: "Headless content platforms (Strapi, Contentful, WordPress) mapped to decoupled frontends for effortless editing."
    },
    {
      icon: Rocket,
      title: "Business Landing Pages",
      description: "Conversion-optimized product pages and capture funnels configured to turn page traffic into pipeline leads."
    },
    {
      icon: BarChart3,
      title: "Analytics Setup",
      description: "Google Tag Manager tracking, conversion logs, pixels, and automated dashboards to measure business growth."
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: "Formal SLAs guaranteeing uptime checks, database optimizations, visual updates, and server security checks."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute left-[-10%] top-[10%] w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-4">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-wide leading-tight mb-4 text-center">
            What’s Included in Our Corporate Website Development Services
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl">
            We deliver robust architecture components pre-configured for high-availability corporate website operations.
          </p>
        </div>

        {/* Services List - Premium cardless layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0 mt-8">
          {services.map((feat, idx) => {
            const Icon = feat.icon;
            const displayNum = String(idx + 1).padStart(2, "0");
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group border-b border-slate-200/80 py-8 flex items-start gap-6 hover:border-orange-500 transition-colors duration-300 text-left"
              >
                {/* Left Side: Number & Icon */}
                <div className="flex items-center gap-4 select-none">
                  <span className="text-xs font-mono font-black text-slate-300 group-hover:text-orange-500 transition-colors">
                    {displayNum}
                  </span>
                  <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-orange-50/80 transition-colors duration-300">
                    <Icon className="w-4 h-4 text-slate-700 group-hover:text-orange-600 transition-colors duration-300" />
                  </div>
                </div>

                {/* Right Side: Title & Description */}
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-extrabold text-slate-900 text-base uppercase tracking-wider group-hover:text-orange-600 transition-colors duration-300">
                      {feat.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-orange-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium max-w-xl">
                    {feat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
