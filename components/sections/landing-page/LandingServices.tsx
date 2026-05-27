"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Layers, Search, Compass, Target, BarChart2, SplitSquareVertical, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LandingServices() {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      icon: Palette,
      title: "Custom UI Design",
      subtitle: "Tailored design system, not templates",
      description: "We craft custom visual interfaces reflecting your startup's branding. By designing layouts focused on clear hierarchy and conversion psychology, we build trust with visitors instantly.",
      details: [
        "Brand-aligned color palettes and custom typography",
        "Visual feedback & scroll triggers",
        "Clean, modern whitespace execution"
      ],
      previewContent: (
        <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 text-left font-mono text-xs text-slate-400 space-y-3">
          <div className="text-orange-500">// Custom Tailwind Theme Config</div>
          <div>theme: &#123;</div>
          <div className="pl-4">extend: &#123;</div>
          <div className="pl-8 text-white">colors: &#123; brand: '#f97316' &#125;,</div>
          <div className="pl-8 text-white">fontFamily: &#123; sans: ['Outfit', 'sans-serif'] &#125;</div>
          <div className="pl-4">&#125;</div>
          <div>&#125;</div>
        </div>
      )
    },
    {
      icon: Layers,
      title: "Responsive Development",
      subtitle: "Tailored for phone, tablet, and desktop",
      description: "A fast, fully responsive layout built with Next.js ensures zero layout shifts on mobile platforms. Since the majority of ad traffic is mobile, we test and refine layouts extensively.",
      details: [
        "Fluid flex and CSS grid containers",
        "Touch-friendly target click elements",
        "Adaptive styling for high-density Retina screens"
      ],
      previewContent: (
        <div className="relative aspect-[16/9] w-full border border-slate-800 rounded-2xl bg-slate-900 flex items-center justify-center p-4">
          <div className="w-[120px] h-[200px] border-2 border-slate-700 bg-slate-950 rounded-xl p-2 relative flex flex-col justify-between">
            <div className="w-8 h-1.5 bg-slate-700 rounded-full mx-auto"></div>
            <div className="space-y-1.5 my-auto">
              <div className="w-full h-8 bg-orange-600/20 border border-orange-500/30 rounded flex items-center justify-center text-[8px] text-orange-400 font-bold">MOBILE OK</div>
              <div className="w-full h-2 bg-slate-800 rounded"></div>
              <div className="w-2/3 h-2 bg-slate-800 rounded"></div>
            </div>
            <div className="w-4 h-4 rounded-full border border-slate-700 mx-auto"></div>
          </div>
        </div>
      )
    },
    {
      icon: Search,
      title: "SEO Optimization",
      subtitle: "Engineered to rank, structured to index",
      description: "A landing page is useless if search engines can't parse it. We configure structural metadata, semantic HTML headers, and clean site routes that help pages rank and convert.",
      details: [
        "Server-rendered page dynamic metadata",
        "Schema markup integration",
        "Proper H1-H6 semantic page structures"
      ],
      previewContent: (
        <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 text-left font-mono text-xs text-slate-400 space-y-2">
          <div className="text-emerald-500">// Next.js Metadata Output</div>
          <div className="text-white">&lt;title&gt;Landing Page Development Services...&lt;/title&gt;</div>
          <div className="text-white">&lt;meta name="description" content="..." /&gt;</div>
          <div className="text-slate-500">&lt;script type="application/ld+json"&gt; ...</div>
        </div>
      )
    },
    {
      icon: Compass,
      title: "Speed Optimization",
      subtitle: "Sub-second load times for lower bounce rates",
      description: "Milliseconds translate directly to conversions. We implement server-side caching, modern image formats, and minimal bundle sizes to load pages near-instantly.",
      details: [
        "Lightweight WebP/AVIF format rendering",
        "Component code-splitting & lazy loading",
        "Zero unused CSS styles"
      ],
      previewContent: (
        <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 text-center space-y-3">
          <div className="text-5xl font-black text-emerald-400">100</div>
          <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">Google Lighthouse Score</div>
          <div className="flex justify-center gap-4 text-[10px] text-slate-500">
            <div>Perf: 100</div>
            <div>SEO: 100</div>
            <div>Access: 100</div>
          </div>
        </div>
      )
    },
    {
      icon: Target,
      title: "CTA Optimization",
      subtitle: "Scientific button placements that prompt action",
      description: "We optimize forms, call-to-actions, and button positioning using psychological layouts that reduce friction and double your startup's submission volumes.",
      details: [
        "Sticky CTA bars on mobile scrolls",
        "High-contrast contrast action coloring",
        "Single-field fields to eliminate friction"
      ],
      previewContent: (
        <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 text-center space-y-4">
          <div className="w-full bg-slate-950 p-3 rounded-lg border border-slate-800 text-left text-xs">
            <span className="text-slate-500 block mb-1">Business Email</span>
            <span className="text-white">hello@yourstartup.com</span>
          </div>
          <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg font-bold text-xs uppercase tracking-widest shadow-lg shadow-orange-500/20">
            Get High-Converting Proposal
          </button>
        </div>
      )
    },
    {
      icon: BarChart2,
      title: "Analytics Integration",
      subtitle: "Turn anonymous traffic into actionable metrics",
      description: "Integrate Google Tag Manager, custom event tracking, and pixels smoothly so you know exactly where your users come from and which copy makes them convert.",
      details: [
        "Facebook Pixel & Google Ads tagging",
        "Form submission trigger events",
        "Conversion funnel reports setup"
      ],
      previewContent: (
        <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 text-left font-mono text-xs text-slate-400 space-y-2">
          <div className="text-indigo-400">// Analytics Event Fire</div>
          <div className="text-white">window.gtag('event', 'generate_lead', &#123;</div>
          <div className="pl-4">'value': 120.00,</div>
          <div className="pl-4">'currency': 'USD'</div>
          <div>&#125;);</div>
        </div>
      )
    },
    {
      icon: SplitSquareVertical,
      title: "A/B Testing Ready",
      subtitle: "Continuous scaling setup for growth testing",
      description: "We set up clean code structures that allow you to deploy A/B testing variations effortlessly, helping you find and scale the absolute highest performing headlines.",
      details: [
        "Clean, componentized code modular blocks",
        "Compatible with Google Optimize, VWO, or Optimizely",
        "Modular variants logic"
      ],
      previewContent: (
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-center">
            <div className="text-xs text-slate-500 mb-2">Variant A</div>
            <div className="font-bold text-sm text-white mb-2">Claim Free Demo</div>
            <div className="text-xs text-emerald-400 font-bold">12.4% Conv.</div>
          </div>
          <div className="p-4 bg-slate-900 border-2 border-orange-500/50 rounded-xl text-center">
            <div className="text-xs text-slate-500 mb-2">Variant B (Winner)</div>
            <div className="font-bold text-sm text-orange-400 mb-2">Start Free Trail</div>
            <div className="text-xs text-emerald-400 font-bold">18.7% Conv.</div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-28 bg-white text-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        
        {/* Header */}
        <div className="w-full mb-20 border-l-4 border-slate-900 pl-6">
          <span className="font-extrabold text-xs text-slate-500 uppercase tracking-widest block mb-2">
            Fully Feature-Loaded
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide max-w-2xl leading-none">
            What’s Included in Our Landing Page Development Services
          </h2>
        </div>

        {/* Dynamic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Side: Interactive Sidebar Menu - Vertical stack on all screen sizes */}
          <div className="lg:col-span-6 flex flex-col gap-3 sm:gap-4 w-full">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const isActive = activeIndex === idx;

              return (
                <div key={idx} className="flex flex-col w-full">
                  <button
                    onClick={() => setActiveIndex(idx)}
                    className={cn(
                      "text-left transition-all duration-300 flex items-center gap-3.5 sm:gap-4 w-full p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl",
                      isActive
                        ? "bg-slate-950 text-white shadow-xl shadow-slate-950/20 lg:translate-x-2"
                        : "bg-slate-50 hover:bg-slate-100 text-slate-800"
                    )}
                  >
                    <div className={cn(
                      "p-2 rounded-lg lg:p-2.5 lg:rounded-xl transition-colors flex-shrink-0",
                      isActive ? "bg-orange-600 text-white" : "bg-slate-200 text-slate-700"
                    )}>
                      <Icon className="w-4 h-4 lg:w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-grow">
                      <h3 className="font-extrabold text-sm sm:text-base uppercase tracking-wide truncate">
                        {service.title}
                      </h3>
                      <p className={cn(
                        "text-[10px] sm:text-xs mt-0.5 transition-colors truncate",
                        isActive ? "text-slate-400" : "text-slate-500"
                      )}>
                        {service.subtitle}
                      </p>
                    </div>
                  </button>

                  {/* Mobile active content (expanded accordion-style under the option) */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden overflow-hidden w-full mt-2"
                      >
                        <div className="bg-slate-950 text-white p-6 sm:p-8 rounded-2xl border border-slate-900 shadow-xl space-y-6">
                          <div>
                            <span className="text-orange-500 text-[10px] font-bold uppercase tracking-widest block mb-1">
                              Included Capability
                            </span>
                            <h4 className="text-lg sm:text-xl font-black uppercase tracking-wide text-white">
                              {service.title}
                            </h4>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mt-3">
                              {service.description}
                            </p>
                          </div>

                          {/* Bullet points */}
                          <div className="space-y-2.5 border-t border-slate-850 pt-5">
                            {service.details.map((detail, dIdx) => (
                              <div key={dIdx} className="flex items-center gap-2.5 text-slate-300 text-xs sm:text-sm">
                                <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                                <span>{detail}</span>
                              </div>
                            ))}
                          </div>

                          {/* Feature Visual Code or UI Mockup */}
                          <div className="pt-3">
                            {service.previewContent}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Side: Active Feature Detail Box (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-6 lg:sticky lg:top-32">
            <div className="bg-slate-950 text-white p-8 sm:p-10 rounded-3xl border border-slate-900 shadow-2xl relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute right-0 top-0 w-44 h-44 bg-orange-600/10 rounded-full blur-[60px] pointer-events-none" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div>
                    <span className="text-orange-500 text-xs font-bold uppercase tracking-widest block mb-2">
                      Included Capability
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-wide text-white">
                      {services[activeIndex].title}
                    </h3>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-4">
                      {services[activeIndex].description}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <div className="space-y-3 border-t border-slate-800 pt-6">
                    {services[activeIndex].details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-3 text-slate-300 text-sm sm:text-base">
                        <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Feature Visual Code or UI Mockup */}
                  <div className="pt-4">
                    {services[activeIndex].previewContent}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
