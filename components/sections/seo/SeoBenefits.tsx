"use client";

import React from "react";
import { motion } from "framer-motion";
import { FastForward, Target, Expand, PiggyBank } from "lucide-react";

export default function SeoBenefits() {
  const benefits = [
    {
      icon: FastForward,
      title: "Unmatched Speed",
      desc: "What takes a traditional agency 3 weeks of manual research, our AI systems accomplish in 3 minutes. Faster strategy means faster implementation and faster ranking growth."
    },
    {
      icon: Target,
      title: "Algorithmic Precision",
      desc: "Stop guessing. AI processes the exact SERP features, semantic entities, and technical signals that Google's algorithm is currently rewarding in your specific industry."
    },
    {
      icon: Expand,
      title: "Infinite Scalability",
      desc: "Whether you need to optimize 10 pages or 10,000, AI automation allows us to deploy programmatic SEO fixes and content optimizations across your entire domain instantly."
    },
    {
      icon: PiggyBank,
      title: "Superior ROI",
      desc: "By eliminating thousands of hours of manual labor, we invest your budget into what actually moves the needle: high-DR backlinks, premium content, and market domination."
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden border-y border-slate-100">
      
      {/* Background Abstract Doodles */}
      <motion.svg
        className="absolute top-[15%] left-[5%] w-40 h-40 text-orange-200 opacity-50 pointer-events-none"
        viewBox="0 0 200 200"
      >
        <motion.path
          d="M 10 90 Q 50 10 150 50 T 190 150"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </motion.svg>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 relative">
          <div className="relative inline-block mb-6">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 uppercase tracking-wide">
              The Benefits of AI SEO
            </h2>
            {/* Header Underline Doodle */}
            <motion.svg
              className="absolute -bottom-3 left-0 w-full h-4 text-orange-500"
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M 2 12 Q 50 2 98 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </motion.svg>
          </div>
          <p className="text-slate-600 text-lg sm:text-xl leading-relaxed mt-4 font-medium">
            Why the top 1% of brands have completely abandoned traditional SEO agencies in favor of machine-precision intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20 mt-12">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex flex-col items-start relative group"
              >
                {/* Doodle animating behind the icon */}
                <div className="relative mb-6">
                  <motion.svg 
                    className="absolute -inset-4 w-20 h-20 text-orange-300 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    viewBox="0 0 100 100"
                  >
                    <motion.path
                      d="M 50 10 C 20 15 10 30 15 60 C 20 80 50 90 75 80 C 95 65 90 20 60 10 C 50 5 45 8 40 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
                    />
                  </motion.svg>
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Icon className="w-10 h-10 text-orange-600 relative z-10 group-hover:scale-110 transition-transform duration-300 group-hover:-rotate-6" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                  {benefit.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
