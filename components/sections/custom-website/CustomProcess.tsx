"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CustomProcess() {
  const processSteps = [
    {
      num: "01",
      title: "Discovery & Analysis",
      description: "We audit your business requirements, target audience profiles, and competitors to map out a tailored architecture."
    },
    {
      num: "02",
      title: "UI/UX Architecture",
      description: "Custom wireframes and bespoke layouts are crafted around your brand identity guidelines without using templates."
    },
    {
      num: "03",
      title: "Custom Development",
      description: "Our engineers build clean React and Next.js page layers, ensuring fast, responsive, and clean semantic codes."
    },
    {
      num: "04",
      title: "SEO & Integration Setup",
      description: "Semantic layouts are structured, search schemas are set up, and CRM/analytics systems are integrated."
    },
    {
      num: "05",
      title: "QA Testing & Launch",
      description: "We audit cross-device viewport responsiveness, test link trees, run security checks, and deploy to CDNs."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-[1200px]">
        
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-4">
            Our Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-wide">
            Custom Development Process
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-lg mt-2">
            From requirement analysis to deployment, we follow a modular process optimized for performance, security, and search engine optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-12">
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative flex flex-col justify-between p-6 rounded-2xl border border-slate-100 hover:border-orange-500/20 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all duration-300 group text-left"
            >
              <div className="space-y-4">
                <span className="font-mono font-black text-slate-300 group-hover:text-orange-500 transition-colors text-2xl">
                  {step.num}
                </span>
                <h3 className="font-bold text-slate-900 text-base uppercase tracking-wider group-hover:text-orange-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed font-semibold">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
