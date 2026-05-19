"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function ConferenceFAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Can you handle conferences with 10,000+ attendees?",
      a: "Yes. Large-scale events are our specialty. We utilize advanced crowd-flow modeling, multi-zone security, and enterprise-grade registration software to eliminate bottlenecks."
    },
    {
      q: "Do you manage exhibitor sales and sponsor fulfillment?",
      a: "We manage the operational fulfillment (booth builds, power drops, sponsor branding). However, the actual sales of booths and sponsorships are typically handled by your internal team."
    },
    {
      q: "How do you handle hybrid (live + virtual) conferences?",
      a: "We deploy broadcast trucks and dedicated streaming directors to ensure virtual attendees get a TV-quality experience, complete with live lower-thirds, picture-in-picture slides, and separate chat moderation."
    },
    {
      q: "Are you locked into specific venues or cities?",
      a: "No. We operate globally. We have executed summits in Las Vegas, London, Dubai, and Singapore. We leverage our network to negotiate the best possible master contracts globally."
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
            Summit Logistics FAQ
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-md mt-2">
            Producing a conference is vastly different from a standard corporate party. Here is how we handle scale, sponsors, and hybrid broadcasting.
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
