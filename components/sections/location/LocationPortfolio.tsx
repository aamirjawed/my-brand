"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, CheckCircle } from "lucide-react";

interface PortfolioItem {
  title: string;
  metrics: string;
  description: string;
  tech: string[];
}

interface PortfolioData {
  title: string;
  items: PortfolioItem[];
}

export default function LocationPortfolio({ data }: { data: PortfolioData }) {
  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute left-1/4 bottom-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Section Title */}
        <div className="max-w-3xl mb-16 space-y-4">
          <p className="text-orange-500 font-black text-xs uppercase tracking-widest">Case Studies</p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight"
          >
            {data.title}
          </motion.h2>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {data.items.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="p-8 rounded-[2rem] bg-slate-900 border border-slate-900 hover:border-slate-800/80 transition-all duration-300 flex flex-col justify-between shadow-2xl relative overflow-hidden"
            >
              {/* Backlight glow */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-orange-600/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="space-y-6">
                {/* Metric Badge */}
                <div className="inline-block px-4 py-2 rounded-xl bg-orange-600/10 border border-orange-500/20 text-orange-500 text-sm font-black uppercase tracking-wide">
                  {project.metrics}
                </div>

                {/* H3 Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies & Footer */}
              <div className="mt-8 pt-6 border-t border-slate-850 space-y-4">
                <div className="space-y-2">
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-slate-950 border border-slate-850 text-slate-400 text-[10px] font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
