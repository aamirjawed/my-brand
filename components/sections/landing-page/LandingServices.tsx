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
      title: "Custom Landing Page Design (Webflow, WordPress, Framer)",
      subtitle: "Tailor-made landing pages built on modern platforms",
      description: "We design and build bespoke, responsive landing pages on Webflow, WordPress, Framer, or custom React/HTML5 templates. This gives you complete editor control to easily modify copy, images, and visual elements.",
      details: [
        "Easy content management with Webflow Editor/WordPress CMS",
        "Rapid 5–7 day delivery from design to launch",
        "Lightweight, semantic layouts optimized for all devices"
      ],
      previewContent: (
        <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 text-left font-mono text-xs text-slate-450 space-y-3">
          <div className="text-orange-500">// CMS & Platform Configuration</div>
          <div className="text-white">platform: "Webflow / WordPress / Framer",</div>
          <div className="text-white">editorAccess: true,</div>
          <div className="text-white">customCode: "Next.js React Integration Ready"</div>
        </div>
      )
    },
    {
      icon: Target,
      title: "Landing Pages for Paid Ads (Google, Meta, LinkedIn)",
      subtitle: "Conversion-optimized landing pages configured for ad campaigns",
      description: "Maximize your advertising budget with pages designed specifically for paid channels. By matching landing page messaging perfectly with your Google, Meta, or LinkedIn search hooks, we lower your CPA and improve ad Quality Scores.",
      details: [
        "Tight message-match alignment with ad headlines",
        "High-contrast call-to-actions placed scientifically",
        "Minimal navigation menu loops to prevent visitor distraction"
      ],
      previewContent: (
        <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 text-center space-y-4">
          <div className="text-emerald-400 font-bold text-lg">Quality Score: 10/10</div>
          <div className="text-xs text-slate-400">Ad Click-Through matched to Landing Page Header</div>
          <div className="text-xs text-slate-500 font-bold">Result: -32% Cost Per Acquisition (CPA)</div>
        </div>
      )
    },
    {
      icon: CheckCircle2,
      title: "Lead Gen Landing Pages with CRM Integration",
      subtitle: "Smart capture pages streaming leads straight to pipeline",
      description: "Streamline your sales workflow. We configure lead generation fields to feed directly into your CRM pipelines (HubSpot, Salesforce, Zapier, ActiveCampaign) with instant email notifications and zero lead leakage.",
      details: [
        "Seamless integration with HubSpot, Salesforce, and Zapier webhooks",
        "Pre-filled fields and dynamic forms to minimize typing friction",
        "Automated confirmation email triggers and lead routing"
      ],
      previewContent: (
        <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 text-left font-mono text-xs text-slate-400 space-y-2">
          <div className="text-indigo-400">// CRM API Pipeline Push</div>
          <div className="text-white">axios.post('/api/hubspot/lead', &#123;</div>
          <div className="pl-4">email: lead.email,</div>
          <div className="pl-4">source: "Google Search Ads",</div>
          <div className="pl-4">status: "Instant Route"</div>
          <div>&#125;);</div>
        </div>
      )
    },
    {
      icon: Compass,
      title: "SaaS Product Landing Pages",
      subtitle: "Engineered for app trials, signups, and bookings",
      description: "Designed for high-growth tech companies and SaaS startups. We build pages optimized to explain complex product values, showcase interactive screenshots, and drive direct demo bookings or trial signups.",
      details: [
        "Interactive product demo displays and interface mockups",
        "Calendar booking tools (Calendly, SavvyCal) direct embeds",
        "Dynamic testimonials, trust badges, and security credentials"
      ],
      previewContent: (
        <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 text-center space-y-2">
          <div className="w-full bg-slate-950 p-2.5 rounded border border-slate-800 text-[10px] text-left text-slate-400">
            ✓ 14-Day Free Trial (No Credit Card Required)
          </div>
          <button className="w-full py-2.5 bg-orange-600 text-white rounded font-bold text-xs uppercase tracking-wide">
            Start Free Trial
          </button>
        </div>
      )
    },
    {
      icon: BarChart2,
      title: "eCommerce Landing Pages",
      subtitle: "Promo pages designed to showcase and sell single products",
      description: "Drive immediate transactions. We create direct-to-checkout promo landers that highlight single flagship products or bundle collections, eliminating standard store navigation to maximize conversion rates.",
      details: [
        "Frictionless direct-to-checkout flows and one-click buying",
        "Shopify Buy Button, Stripe, and WooCommerce custom setups",
        "Urgency timers and product benefits comparison grids"
      ],
      previewContent: (
        <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 text-center space-y-2">
          <div className="text-xs text-slate-500 line-through">$89.00</div>
          <div className="text-xl font-bold text-white">$49.00 <span className="text-xs text-orange-500 font-bold">(Save 45%)</span></div>
          <button className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded font-bold text-xs uppercase tracking-wide">
            Buy Now - Stripe Checkout
          </button>
        </div>
      )
    },
    {
      icon: SplitSquareVertical,
      title: "Landing Page CRO & A/B Testing Services",
      subtitle: "Ongoing split-testing to scale conversion metrics",
      description: "A launch is just the beginning. We run continuous conversion rate optimization (CRO) cycles, reviewing heatmap data, analyzing user sessions, and implementing A/B split-tests to lift conversion rates over time.",
      details: [
        "Setup of session recording tools (Hotjar, Microsoft Clarity)",
        "Headline and copy variations testing to find winners",
        "Regular conversion reports with actionable design recommendations"
      ],
      previewContent: (
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-center">
            <div className="text-[10px] text-slate-500">Variant A</div>
            <div className="font-bold text-xs text-white">"Standard"</div>
            <div className="text-[10px] text-slate-400">5.4% CR</div>
          </div>
          <div className="p-3 bg-slate-950 border-2 border-orange-500 rounded-xl text-center">
            <div className="text-[10px] text-slate-500">Variant B (Winner)</div>
            <div className="font-bold text-xs text-orange-450">"CRO Optimised"</div>
            <div className="text-[10px] text-emerald-400 font-bold">+180% Lift</div>
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
