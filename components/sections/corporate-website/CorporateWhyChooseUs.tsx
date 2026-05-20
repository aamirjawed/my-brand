"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, BarChart2, Search, Zap, Palette, Layers, HeartHandshake } from "lucide-react";

export default function CorporateWhyChooseUs() {
  const reasons = [
    {
      icon: <BarChart2 className="w-5 h-5 text-orange-500" />,
      title: "Business-Focused Approach",
      description: "We align digital layout mechanics directly with commercial goals, lead capture KPIs, and conversion pipelines."
    },
    {
      icon: <Search className="w-5 h-5 text-orange-500" />,
      title: "SEO Optimization",
      description: "Pre-compiled semantic tags, JSON-LD meta markup, and structured schemas built-in to satisfy search crawlers."
    },
    {
      icon: <Zap className="w-5 h-5 text-orange-500" />,
      title: "Performance-Driven Development",
      description: "Leveraging static pre-rendering, lazy resource loading, and CDN edge optimization to secure sub-second paint speeds."
    },
    {
      icon: <Palette className="w-5 h-5 text-orange-500" />,
      title: "Professional Design Standards",
      description: "Curated modern visual assets and theme systems tailored to reinforce corporate authority and brand books."
    },
    {
      icon: <Layers className="w-5 h-5 text-orange-500" />,
      title: "Scalable Website Architecture",
      description: "Decoupled headless backends configured to accommodate expanding sub-folders, translation zones, and client portals."
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-orange-500" />,
      title: "Long-Term Support",
      description: "Comprehensive SLAs offering routine database optimizations, speed audits, security updates, and feature upgrades."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute left-0 bottom-0 w-[40rem] h-[40rem] bg-orange-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual summary block */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div className="border-l-4 border-orange-500 pl-6">
              <span className="font-extrabold text-xs text-orange-500 uppercase tracking-widest block mb-2">
                Why Partners Trust Us
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide leading-none text-slate-900">
                Why Choose Our Corporate Website Development Services
              </h2>
            </div>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              We bypass rigid template constraints. Our experienced developers craft high-availability web applications built specifically to meet the security, speed, and branding requirements of global businesses.
            </p>
            <div className="p-6 border-2 border-slate-900 rounded-[2rem] bg-slate-50 flex items-start gap-4">
              <ShieldCheck className="w-8 h-8 text-orange-600 shrink-0" />
              <div>
                <h4 className="font-black text-slate-900 text-xs sm:text-sm uppercase tracking-wider mb-1">Audit-Ready Frameworks</h4>
                <p className="text-slate-500 text-xs leading-relaxed">All of our components adhere to strict validation audits, GDPR guidelines, and server separation principles.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Grid list of reasons */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, idx) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white p-6 rounded-[2rem] border-2 border-slate-900 shadow-[4px_4px_0px_rgba(15,23,42,1)] flex flex-col justify-between text-left"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-orange-600/10 rounded-xl flex items-center justify-center border border-orange-500/20">
                    {reason.icon}
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider">{reason.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
