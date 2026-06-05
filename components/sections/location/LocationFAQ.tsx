"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQData {
  title: string;
  items: FAQItem[];
}

export default function LocationFAQ({ data }: { data: FAQData }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open first one

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[800px]">
        {/* Title */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-orange-600 font-black text-xs uppercase tracking-widest">Learn More</p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight"
          >
            {data.title}
          </motion.h2>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {data.items.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-2xl border border-slate-200/60 bg-white overflow-hidden shadow-sm"
              >
                {/* Trigger / Question */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 sm:px-8 sm:py-6 flex justify-between items-center text-left gap-4 font-bold text-slate-900 text-sm sm:text-base hover:bg-slate-50 transition-colors"
                >
                  <span className="leading-tight">{faq.question}</span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-650">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-orange-600" />
                    ) : (
                      <Plus className="w-4 h-4 text-slate-800" />
                    )}
                  </div>
                </button>

                {/* Answer Accordion Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 sm:px-8 sm:pb-8 text-slate-500 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
