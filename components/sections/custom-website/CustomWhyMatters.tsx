"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Database, Zap, Settings, Smartphone, Search, Shield } from "lucide-react";

export default function CustomWhyMatters() {
  const benefits = [
    {
      num: "01",
      icon: Sparkles,
      title: "Brand Uniqueness",
      description: "Custom-tailored graphics and visual identity alignments designed from scratch to ensure your company stands out from competitors."
    },
    {
      num: "02",
      icon: Database,
      title: "Scalable Functionality",
      description: "Custom-coded frameworks designed to accommodate dynamic user databases, external APIs, and multi-tenant portals as you grow."
    },
    {
      num: "03",
      icon: Zap,
      title: "Better Performance",
      description: "Lightweight architectures compiled to static builds, serving assets instantly at the edge for optimal load speeds."
    },
    {
      num: "04",
      icon: Settings,
      title: "Flexible Integrations",
      description: "Seamless synchronization with Salesforce, HubSpot, Stripe, or any custom API without relying on third-party plugins."
    },
    {
      num: "05",
      icon: Smartphone,
      title: "Improved User Experience",
      description: "Bespoke navigation structures and smooth interface pathways designed around the browsing behaviors of your target audience."
    },
    {
      num: "06",
      icon: Search,
      title: "SEO Optimization",
      description: "Pre-rendered semantic layouts, complete custom microdata schema trees, and lightning-fast load times built in from the start."
    },
    {
      num: "07",
      icon: Shield,
      title: "Business-Specific Features",
      description: "From custom booking systems and interactive pricing maps to user accounts, built exactly to match your business rules."
    }
  ];

  return (
    <section className="py-28 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute right-0 bottom-0 w-[40rem] h-[40rem] bg-orange-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Title and explanation */}
          <div className="col-span-1 lg:col-span-5 lg:sticky lg:top-32 text-left">
            <span className="font-extrabold text-xs text-orange-600 uppercase tracking-widest block mb-2">
              Semantic SEO Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight leading-none mb-6">
              Why Businesses Choose Custom Website Development
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-10 font-medium">
              Google prefers topic depth and business context. Unlike standardized website building setups that rely on heavy templates, our custom solutions are built from the ground up for maximum visibility, adaptability, and performance.
            </p>

            {/* Hand-drawn pathway decoration */}
            <div className="hidden lg:block w-48 h-24 text-orange-500/60 opacity-80">
              <svg viewBox="0 0 200 100" className="w-full h-full fill-none">
                <motion.path
                  d="M 10 90 C 40 40, 100 10, 190 20"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
                <circle cx="190" cy="20" r="5" fill="currentColor" />
                <path d="M 175 12 L 190 20 L 180 35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Right Column: Dynamic cardless points */}
          <div className="col-span-1 lg:col-span-7 space-y-2">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="py-8 border-b border-slate-200/80 transition-all duration-300 relative group cursor-default text-left"
                >
                  <div className="flex gap-6 sm:gap-8 items-start">
                    
                    {/* Left: Index Counter & Icon */}
                    <div className="flex flex-col items-center shrink-0 select-none">
                      <span className="font-mono font-black text-2xl mb-2 text-slate-300 group-hover:text-orange-600 transition-colors duration-300">
                        {benefit.num}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-500 flex items-center justify-center group-hover:bg-orange-600 group-hover:border-orange-600 group-hover:text-white transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Right: Text */}
                    <div className="space-y-2 flex-1">
                      <h3 className="text-xl font-black uppercase tracking-wide text-slate-900 group-hover:text-orange-600 transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold">
                        {benefit.description}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
