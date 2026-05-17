"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function StaticFAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What makes a static website different from a WordPress or CMS-driven site?",
      a: "WordPress builds pages dynamically on every visitor request — querying a database, executing PHP, and sending the result back. A static website is pre-compiled into raw HTML/CSS/JS at build time and served instantly from a CDN. This means zero database lag, zero server-side attack surface, and significantly lower hosting costs — while delivering vastly superior performance scores."
    },
    {
      q: "Can I still update content easily without touching the code?",
      a: "Absolutely. We integrate Headless CMS platforms like Sanity, Contentful, or Notion so your team can update text, images, and structured content from a clean editor interface. Every content save triggers an automated rebuild pipeline that recompiles the updated static pages and pushes them live — no developer involvement required."
    },
    {
      q: "Will a static website rank well on Google?",
      a: "Static websites are the gold standard for SEO. Because they serve pre-rendered HTML without any server processing delay, they consistently achieve perfect Google Lighthouse Performance and SEO scores. Google's Core Web Vitals heavily reward fast loading times, stable layouts, and clean markup — all of which our static builds deliver by default."
    },
    {
      q: "How do contact forms or dynamic features work on a static site?",
      a: "We integrate serverless function APIs (Vercel Functions, Netlify Functions, or AWS Lambda) for dynamic requirements like form submissions, newsletter signups, and search features. The static HTML shell loads instantly while these lightweight functions handle data processing asynchronously in the background — best of both worlds."
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
            Static Architecture FAQ
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-md mt-2">
            Got queries about JAMstack builds, headless CMS, and performance optimization? Explore our strategic answers below.
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
                {/* Accordion trigger */}
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

                {/* Collapsible content */}
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
