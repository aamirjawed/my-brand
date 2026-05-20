"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function CorporateFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is a corporate website?",
      answer: "A corporate website is a professional, enterprise-grade web application designed to serve as the official digital presence for a company. It conveys brand identity, communicates key corporate news, hosts secure user portals, and builds instant credibility."
    },
    {
      question: "Why are corporate websites important?",
      answer: "Corporate websites help businesses build credibility, improve online visibility, and generate leads through a professional digital presence."
    },
    {
      question: "Are corporate websites SEO-friendly?",
      answer: "Yes, professionally developed corporate websites can be optimized for SEO, performance, and user experience."
    },
    {
      question: "How long does corporate website development take?",
      answer: "Depending on the scope of custom system integrations, localization levels, and database setups, corporate website development timelines typically range between 4 to 8 weeks, ensuring complete security audits and launch readiness."
    },
    {
      question: "Can you redesign existing corporate websites?",
      answer: "Absolutely. We specialize in refactoring and migration planning, transferring old monolithic frameworks to modern, fast Next.js architectures without losing search index authority or database records."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[900px]">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-4">
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-wide text-center">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={faq.question}
                className="border-2 border-slate-900 rounded-2xl overflow-hidden bg-white shadow-[4px_4px_0px_rgba(15,23,42,1)]"
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-black uppercase text-slate-900 text-sm sm:text-base tracking-wide hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-orange-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
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
