"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function BrandingFAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is the difference between a logo and a full brand identity?",
      a: "A logo is a single graphic mark — the tip of the branding iceberg. A full brand identity is the complete visual and strategic system that surrounds it: your color palette, typography hierarchy, iconography style, photography direction, tone of voice, and the documented rules for how all these elements work together. A great logo without a coherent brand system produces an inconsistent, forgettable impression. A complete identity system ensures every customer touchpoint — from your website to your business card to your social posts — feels unmistakably and consistently you."
    },
    {
      q: "How many logo concepts will I receive and how many revisions are included?",
      a: "We present three distinct, fully developed logo directions in the first concept round — each rooted in a different creative strategy. Once you select a direction, we enter a focused refinement phase with up to three rounds of revisions included as standard. Our clients rarely need more than two, because our process starts with thorough research rather than guesswork. Every revision is strategic, not arbitrary — we refine with purpose based on your feedback and brand objectives."
    },
    {
      q: "What file formats will I receive when the project is complete?",
      a: "You receive a complete production-ready asset pack containing: SVG and EPS (infinitely scalable vectors for print and web), PNG with transparent backgrounds in multiple resolutions, PDF for print production, WebP for optimized web use, and JPG for general purpose. All files are organized into clearly labeled folders by format and variant (primary, reversed, monogram, favicon) so your team, printer, and web developers can immediately find and use exactly what they need."
    },
    {
      q: "Do you design brand identities for startups or only established businesses?",
      a: "We work with brands at every stage. Startups benefit enormously from professional branding from day one — it accelerates trust, justifies premium pricing, and builds investor confidence immediately. Established businesses often engage us for strategic rebrands when their current identity no longer reflects their growth or target market. Both have unique requirements, and we tailor our discovery process to extract what each brand specifically needs to succeed at its exact stage."
    },
    {
      q: "Can you redesign or evolve our existing logo without losing recognition?",
      a: "Absolutely — and this is one of our most nuanced specialities. Brand evolution requires preserving the equity and recognition built into your existing identity while modernizing what no longer serves you. We analyze which elements your audience already associate with your brand, what must be retained, and what can be refreshed — producing an evolved identity that feels both familiar and powerfully new. Think of it as the difference between a revolution and a refinement."
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
            Branding & Logo Design FAQ
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-md mt-2">
            Got questions about deliverables, revisions, file formats, or brand evolution? Everything you need to know is right here.
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
