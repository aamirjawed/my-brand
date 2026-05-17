"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function LandingFAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Why do I need a landing page instead of just routing traffic to my homepage?",
      a: "Homepages are designed for general exploration; they contain main navigation links, multiple products, and brand descriptions. When you run paid advertisements (Google, Meta, etc.), general options distract visitors, causing high bounce rates. A bespoke landing page has a single specific intent, removes navigation exit points, and focuses entirely on converting that unique paid traffic into leads or buyers, driving up to 3x higher conversion yields!"
    },
    {
      q: "How do you optimize page loading performance for higher conversions?",
      a: "We assemble landing pages using Next.js with Turbopack, static page rendering, responsive CSS grids, and server-side image compression. Because every 100ms delay in load speeds can slash lead volumes by up to 7%, our modular, standard-setting builds guarantee lightning-fast load scores across all viewports and mobile devices!"
    },
    {
      q: "Can you integrate the landing pages with my CRM or analytical toolsets?",
      a: "Absolutely! We write custom hooks and API routes to seamlessly bind your landing page lead forms to standard CRM networks (Salesforce, HubSpot, Mailchimp, active databases) and configure advanced tracking metrics (Google Tag Manager, Meta Pixel, heatmaps) to monitor performance in real-time."
    },
    {
      q: "Are the wobbly illustrative doodles and device structures fully custom?",
      a: "Yes! All doodles, overlapping device mockups, interactive sandboxes, and process timelines are hand-drawn vector paths and pure CSS modular systems crafted exclusively by our team. We completely avoid boring layout templates, giving your brand a highly curated, premium visual edge that immediately wins customer trust."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1000px] relative z-10">
        
        {/* FAQ Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-orange-600" /> Have Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-wide">
            Strategy & Capabilities FAQ
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-md mt-2">
            Got queries about custom landing page layouts, page loading metrics, and tracking features? Explore our strategic answers below.
          </p>
        </div>

        {/* Cardless Accordion FAQ Panels */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={idx}
                className="border-b border-slate-200 py-6 transition-all duration-300"
              >
                {/* Accordion trigger button */}
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  className="w-full flex items-center justify-between text-left gap-4 outline-none group"
                >
                  <h3 className={`font-extrabold text-base sm:text-lg uppercase tracking-wide transition-colors ${
                    isExpanded ? "text-orange-600" : "text-slate-950 group-hover:text-orange-500"
                  }`}>
                    {faq.q}
                  </h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${
                    isExpanded ? "bg-orange-600 border-orange-600 text-white" : "border-slate-200 text-slate-500 group-hover:border-slate-900"
                  }`}>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Collapsible content panel */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-2 border-l-2 border-orange-500">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
