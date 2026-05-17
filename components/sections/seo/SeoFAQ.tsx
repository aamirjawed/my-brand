"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function SeoFAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How long does it take to see results from SEO?",
      a: "Genuine, algorithm-proof SEO results typically begin appearing between months 3 and 6, with significant compounding growth becoming highly visible between months 6 and 12. Timelines vary based on your domain's existing authority, the competitiveness of your target keywords, and the volume of technical issues we need to resolve first. Unlike paid ads that stop the moment you cut spend, SEO delivers compounding, permanent returns — making it far superior as a long-term growth channel. Our clients typically see first measurable organic traffic increases within 60–90 days."
    },
    {
      q: "How is your AI SEO different from a traditional SEO agency?",
      a: "Traditional SEO agencies rely on manual keyword research, generic content writing, and slow link outreach cycles that take months to produce any data. Our AI-powered platform processes search intent signals, competitor content gaps, SERP feature opportunities, and real-time algorithm patterns simultaneously — cutting strategy development time from weeks to hours. This means we execute more precise optimizations, faster, at a fraction of the cost — while continuously learning and adapting as Google evolves."
    },
    {
      q: "Will my rankings drop if I stop your SEO service?",
      a: "Unlike paid advertising that stops instantly the moment you end a campaign, SEO investments produce compounding, durable results. The high-quality content we publish, the authoritative backlinks we acquire, and the technical foundations we build continue delivering organic traffic long after campaigns end. That said, SEO is competitive — your competitors are continuously optimizing too, which is why ongoing investment ensures you hold and grow your positions rather than gradually ceding ground."
    },
    {
      q: "Do you guarantee first page rankings?",
      a: "Any agency that guarantees specific Google rankings is either lying or using black-hat tactics that will eventually destroy your domain. What we guarantee is a rigorous, best-practice methodology backed by our proprietary AI systems, transparent monthly reporting on all ranking movements, and a strong track record of delivering measurable first-page results across hundreds of competitive markets. Our average client achieves first-page rankings for 94% of target keywords within 12 months."
    },
    {
      q: "Can you optimize for AI search platforms like ChatGPT and Perplexity?",
      a: "Yes — this is increasingly critical. We optimize your content for AI overview visibility using structured data markup, authoritative entity building, high-citation content formatting, and E-E-A-T signal strengthening. Brands that establish strong topical authority on traditional Google SERPs are also consistently the ones cited and recommended by AI platforms. Our SEO strategy covers both traditional search dominance and emerging AI search visibility simultaneously."
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
            AI SEO Strategy FAQ
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-md mt-2">
            Got questions about timelines, AI search, ranking guarantees, and what separates us from traditional agencies? Read on.
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
