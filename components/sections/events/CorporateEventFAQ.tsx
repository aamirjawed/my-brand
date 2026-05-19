"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function CorporateEventFAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What types of corporate events do you manage?",
      a: "We handle a comprehensive range of corporate events, including large-scale industry conferences, executive retreats, product launch galas, annual general meetings (AGMs), award ceremonies, and high-end networking mixers. Regardless of format, our focus is always on flawless execution and elevated brand experiences."
    },
    {
      q: "How far in advance should we engage your team for an event?",
      a: "For large-scale conferences or galas (500+ attendees), we recommend engaging us 6 to 9 months in advance to secure premium venues and top-tier speakers. For smaller executive retreats or regional launches, 3 to 4 months is typically sufficient. However, we have specialized teams capable of turning around high-impact events on tighter deadlines when necessary."
    },
    {
      q: "Do you handle destination events and international retreats?",
      a: "Yes. We manage end-to-end logistics for destination events globally. This includes venue scouting across borders, international flight and transfer coordination, local vendor negotiation, customs management for production equipment, and on-the-ground VIP concierge services."
    },
    {
      q: "How do you handle event security and risk management?",
      a: "Risk management is central to our process. We develop comprehensive contingency plans covering everything from severe weather and AV failures to medical emergencies. For high-profile events, we coordinate discreet VIP protection, implement strict access control protocols, and liaise directly with local authorities."
    },
    {
      q: "Will we have a dedicated point of contact during the planning process?",
      a: "Absolutely. You are assigned a dedicated Senior Event Producer who acts as your singular point of contact. They orchestrate the entire team behind the scenes — from creative directors and AV technicians to caterers and security — ensuring you only ever need to make one phone call to get answers."
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
            Event Management FAQ
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-md mt-2">
            Got questions about timelines, international destinations, risk management, or our specific capabilities? Find the answers here.
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
