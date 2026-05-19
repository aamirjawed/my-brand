"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function SpaFAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is the difference between a traditional website and a Single Page Application?",
      a: "A traditional website requests a completely new HTML document from the server every time a user clicks a link, causing the screen to flash white and completely reload. A Single Page Application (SPA) loads only one HTML file initially. When users click links, the SPA uses JavaScript to instantly swap out components and fetch only the necessary data via API in the background. The result is a fluid, app-like experience with zero page reloads."
    },
    {
      q: "Are Single Page Applications bad for SEO?",
      a: "Historically, yes — but not anymore. Pure client-side SPAs (like early React or Angular apps) forced search engine crawlers to execute heavy JavaScript before seeing content, which often hurt rankings. Today, we build SPAs using meta-frameworks like Next.js or Nuxt.js. This allows us to use Server-Side Rendering (SSR) or Static Site Generation (SSG), meaning Google immediately receives fully rendered HTML while your users still get the lightning-fast, app-like experience. You get perfect SEO without sacrificing interactivity."
    },
    {
      q: "When should I choose an SPA over a traditional WordPress site?",
      a: "You should choose an SPA if your project is an actual application rather than a brochure. If you are building a SaaS product, a user dashboard, a complex e-commerce flow, an internal tool, or any platform that requires persistent state (like a playing audio track that continues across pages), real-time data updates, or heavy user interactivity, an SPA is the correct choice. If you just need a simple blog or a 5-page informational site with mostly static text, WordPress or a basic static site is more appropriate."
    },
    {
      q: "What technologies do you use to build SPAs?",
      a: "We are strictly framework-agnostic and choose the right tool for the exact technical requirements of your product. Our primary stacks utilize React (via Next.js or Vite) and Vue.js (via Nuxt or Vite). For state management, we utilize Redux Toolkit, Zustand, or Pinia. For data fetching and caching, we deploy React Query or SWR. We style using Tailwind CSS for highly maintainable, utility-first design systems. We do not use bloated templates — everything is engineered from scratch."
    },
    {
      q: "How do you handle initial load times for large applications?",
      a: "A common pitfall of poorly built SPAs is a massive initial JavaScript payload that takes seconds to download, leaving users staring at a blank screen. We solve this through aggressive route-based code splitting and lazy loading. A user visiting your login page only downloads the exact code needed for the login page — the heavy dashboard logic is fetched dynamically only when they actually navigate there. Combined with aggressive asset caching and edge network deployment, our SPAs typically reach 'Time to Interactive' in under 1.5 seconds."
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
            SPA Technical FAQ
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-md mt-2">
            Got questions about SPA architecture, SEO implications, performance tuning, or technology stacks? We have answers.
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
