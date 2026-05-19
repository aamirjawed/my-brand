"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function SeoWhatIs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1000px]">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-widest mb-6 border border-orange-100"
          >
            <Sparkles className="w-4 h-4" /> The New Standard
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-wide mb-8"
          >
            What is AI SEO?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-slate-600 text-lg sm:text-xl leading-relaxed font-medium"
          >
            <p>
              <strong>AI SEO (Artificial Intelligence Search Engine Optimization)</strong> is the practice of leveraging machine learning algorithms, natural language processing (NLP), and automated data pipelines to optimize a website's organic search visibility.
            </p>
            <p>
              Instead of relying on human guesswork, manual spreadsheet tracking, and slow trial-and-error, AI SEO systems analyze millions of data points across the Google algorithm in real-time. It maps exact semantic relationships, identifies hidden ranking factors, and automates complex technical audits that would take traditional SEO agencies weeks to complete.
            </p>
            <p>
              In short: AI SEO is the transition from <span className="italic">guessing</span> what search engines want, to <span className="italic">knowing</span> exactly what they demand — and executing it at machine speed for faster, more dominant rankings.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
