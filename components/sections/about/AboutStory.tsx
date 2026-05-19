"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutStory() {
  return (
    <section className="py-24 sm:py-32 bg-white relative">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg sm:prose-xl prose-slate max-w-none"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-wide mb-8">
              The Origin Story
            </h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              A few years ago, our founders were working on the client side, hiring external development agencies to build core infrastructure. Time after time, the experience was the same: brilliant sales pitches followed by junior developers, missed deadlines, and bloated, unmaintainable codebases. 
            </p>
            <p className="text-slate-600 leading-relaxed font-medium mt-6">
              It was incredibly frustrating. You shouldn't have to babysit the technical partner you are paying to solve your problems. So, we left our jobs and built the agency we wished we could have hired.
            </p>
            <p className="text-slate-600 leading-relaxed font-medium mt-6">
              Today, we operate differently. We are deeply technical. We don't employ salespeople who promise impossible features. When you talk to us, you are talking directly to the systems architects and lead developers who will actually be typing the code for your product. We believe in brutal honesty, transparent pricing, and over-engineering the things that matter.
            </p>
            
            <div className="mt-12 pl-6 border-l-4 border-orange-500">
              <p className="text-xl italic font-semibold text-slate-800">
                "Our metric for success isn't how many clients we can sign in a quarter. It's how many clients stick with us for over three years because we actually became an extension of their team."
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1000&auto=format&fit=crop" 
                alt="Team working late" 
                className="absolute inset-0 w-full h-full object-cover filter contrast-125"
              />
            </div>
            {/* Floating stats card */}
            <div className="absolute -bottom-10 -left-10 bg-slate-950 p-8 rounded-3xl shadow-2xl border border-slate-800 hidden sm:block">
              <div className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-2">Since Day One</div>
              <div className="text-5xl font-black text-white mb-1">0</div>
              <div className="text-slate-400 text-sm font-medium">Outsourced Developers</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
