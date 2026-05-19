"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function SpaFAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is a single page application?",
      a: "A single page application (SPA) is a modern web application that loads a single HTML page and dynamically updates it as the user interacts with the app. This provides a fluid, app-like experience and eliminates the need for full page reloads."
    },
    {
      q: "Are SPAs good for SEO?",
      a: "Yes, modern single page applications are highly SEO-friendly when built using frameworks like Next.js with server-side rendering (SSR) or pre-rendering. This ensures search engines receive fully indexable content immediately while users still experience seamless performance."
    },
    {
      q: "Which framework is best for SPA development?",
      a: "The best framework depends on your specific product requirements. React is the industry standard for custom interfaces, Vue offers lightweight and flexible templating, while Next.js is ideal for production-grade, SEO-friendly applications."
    },
    {
      q: "Are React SPAs fast?",
      a: "Yes, React SPAs are extremely fast when optimized correctly. By implementing route-based code splitting, bundle minification, and progressive loading, interactive response times can be brought down to sub-second speeds."
    },
    {
      q: "What is the difference between SPA and traditional websites?",
      a: "Traditional websites request a completely new page from the server on every click, causing white flashes and page reloads. SPAs load the shell once and fetch data dynamically via APIs in the background, making navigation instantaneous."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1000px] relative z-10">

        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-orange-600" /> Have Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-wide">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-md mt-2">
            Got questions about SPA architecture, SEO optimization, performance tuning, or technology stacks? We have answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div key={idx} className="border-b border-slate-200 py-6 transition-all duration-300">
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  className="w-full flex items-center justify-between text-left gap-4 outline-none group"
                >
                  <h3 className={`font-extrabold text-base sm:text-lg uppercase tracking-wide transition-colors ${isExpanded ? "text-orange-600" : "text-slate-950 group-hover:text-orange-500"}`}>
                    {faq.q}
                  </h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-colors shrink-0 ${isExpanded ? "bg-orange-600 border-orange-600 text-white" : "border-slate-200 text-slate-500 group-hover:border-slate-900"}`}>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

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
