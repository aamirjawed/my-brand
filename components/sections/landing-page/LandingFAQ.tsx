"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function LandingFAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How long does landing page development take?",
      a: "Our typical timeline is 1 to 2 weeks. This includes audience research, conversion-focused copywriting, custom UI/UX design, custom Next.js development, CRM integration, and analytics setup."
    },
    {
      q: "Are the landing pages SEO-friendly?",
      a: "Absolutely. We build all landing pages with clean semantic HTML structures, server-side page rendering, optimized meta tags, and structured schema markup. This makes it easy for search engine crawlers to read and rank your page."
    },
    {
      q: "Can you redesign existing landing pages?",
      a: "Yes. We analyze your existing page to identify friction points and conversion drop-offs. Then, we redesign it with clear copywriting, modern styling, and optimized CTA paths to lift conversion rates."
    },
    {
      q: "Do you develop responsive landing pages?",
      a: "Yes. Every landing page we build is developed mobile-first. Over 60% of web traffic is mobile, so we optimize and test extensively on mobile, tablet, and desktop viewports to ensure seamless visual layouts and swift loading times."
    },
    {
      q: "Which technologies do you use?",
      a: "We build with Next.js, React, Tailwind CSS, and Framer Motion. This modern stack allows us to create blazing-fast static pages, custom interactive components, and smooth micro-animations without heavy bundle weight."
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
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-md mt-2">
            Explore answers to our most common questions regarding timelines, SEO, redesigns, and capabilities.
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
