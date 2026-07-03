"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Send } from "lucide-react";

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-32 p-8 sm:p-12 bg-slate-950 border border-slate-900 rounded-3xl relative overflow-hidden text-center group/panel"
    >
      <div className="absolute right-0 top-0 w-80 h-80 bg-orange-600/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-orange-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-14 h-14 bg-orange-600/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-orange-500/20 group-hover/panel:scale-110 transition-transform duration-300">
        <Sparkles className="w-6 h-6 text-orange-500" />
      </div>

      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">
        Join 5,000+ Founders & Marketers
      </h3>
      <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-8 font-medium">
        Get high-converting landing page layouts, CRO frameworks, and speed optimizations sent directly to your inbox. No fluff. Just conversion math.
      </p>

      {submitted ? (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-orange-500 font-extrabold text-sm uppercase tracking-wider"
        >
          ✓ Welcome to the list. We'll send you our best conversion playbook shortly.
        </motion.div>
      ) : (
        <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row items-center gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your business email"
            required
            className="w-full px-5 py-4 bg-slate-900 border border-slate-800 rounded-full text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 hover:bg-slate-100 rounded-full font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 whitespace-nowrap"
          >
            Get Free Playbook
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      )}
    </motion.div>
  );
}
