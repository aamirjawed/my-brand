"use client";

import React from "react";
import { motion } from "framer-motion";
import { Gauge, Smartphone, Share2, ShieldAlert, Sparkles, Network, Compass, Target, ArrowUpRight } from "lucide-react";

export default function CorporateSpecificFeatures() {
  const featuresList = [
    {
      icon: Gauge,
      title: "Fast Loading Speed",
      description: "Pre-rendering pipelines and dynamic asset edge caching deliver pages to clients in less than 400 milliseconds."
    },
    {
      icon: Smartphone,
      title: "Mobile Responsiveness",
      description: "Carefully designed and tested grid mechanics that provide seamless layouts on any mobile or desktop screen size."
    },
    {
      icon: Share2,
      title: "SEO-Friendly Structure",
      description: "Strict HTML5 tag structures, metadata integrations, and pre-compiled routing systems to index instantly."
    },
    {
      icon: ShieldAlert,
      title: "Secure Architecture",
      description: "Decoupled databases and pre-configured WAF layers keep server resources protected against injection vectors."
    },
    {
      icon: Sparkles,
      title: "Modern UI/UX",
      description: "Beautiful modern interfaces incorporating curated HSL palettes, smooth micro-animations, and high usability."
    },
    {
      icon: Network,
      title: "Scalable Design",
      description: "Multi-tenant routing structures ready to accommodate dynamic user dashboards, internal portals, and locational folders."
    },
    {
      icon: Compass,
      title: "Easy Navigation",
      description: "Clean mega-menu systems and streamlined footer hubs to help visitors find matching information quickly."
    },
    {
      icon: Target,
      title: "Conversion-Focused Layouts",
      description: "Strategic placement of consultation CTAs and scheduling paths designed to generate high-quality pipeline leads."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-4">
            Platform Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-wide leading-tight mb-4 text-center">
            Features of Our Corporate Websites
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl">
            We build state-of-the-art corporate web solutions that align with modern speed, safety, and search index expectations.
          </p>
        </div>

        {/* Features Grid - Completely Cardless Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16 mt-8">
          {featuresList.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="space-y-4 text-left group"
              >
                <div className="w-12 h-12 bg-orange-600/10 rounded-2xl flex items-center justify-center border border-orange-500/20 group-hover:bg-orange-600 group-hover:border-orange-600 transition-all duration-300">
                  <Icon className="w-5 h-5 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-extrabold text-slate-900 text-base uppercase tracking-wider group-hover:text-orange-600 transition-colors duration-300">
                    {feat.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
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
