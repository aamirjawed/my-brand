"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Code, Brain, Cloud, ShieldAlert } from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
  tech: string[];
  benefits: string;
}

interface ServicesData {
  title: string;
  items: ServiceItem[];
}

export default function LocationServices({ data }: { data: ServicesData }) {
  // Return an icon matching the service title
  const getIcon = (title: string) => {
    const lower = title.toLowerCase();
    if (lower.includes("web")) return <Code2 className="w-5 h-5 text-orange-600" />;
    if (lower.includes("mobile") || lower.includes("app")) return <Code className="w-5 h-5 text-orange-600" />;
    if (lower.includes("enterprise") || lower.includes("software")) return <Code className="w-5 h-5 text-orange-600" />;
    if (lower.includes("ai") || lower.includes("learning") || lower.includes("machine")) return <Brain className="w-5 h-5 text-orange-600" />;
    if (lower.includes("devops") || lower.includes("cloud")) return <Cloud className="w-5 h-5 text-orange-600" />;
    return <ShieldAlert className="w-5 h-5 text-orange-600" />;
  };

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Section Title */}
        <div className="max-w-3xl mb-16 space-y-4">
          <p className="text-orange-500 font-black text-xs uppercase tracking-widest">Expertise</p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight"
          >
            {data.title}
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="p-8 rounded-[2rem] bg-slate-900 border border-slate-900 hover:border-slate-800/80 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div className="space-y-6">
                {/* Header Icon + H3 */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-850 flex items-center justify-center flex-shrink-0">
                    {getIcon(service.title)}
                  </div>
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Technologies List */}
                <div className="space-y-2">
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Technologies & Tools</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-850 text-slate-300 text-[11px] font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Benefit Footer */}
              <div className="mt-8 pt-6 border-t border-slate-850 space-y-2">
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Key Benefit</p>
                <p className="text-xs text-orange-400 font-semibold leading-normal">
                  {service.benefits}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
