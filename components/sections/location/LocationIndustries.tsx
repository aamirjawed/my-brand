"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, ShoppingBag, Landmark, HeartPulse, GraduationCap, ArrowRight } from "lucide-react";

interface IndustryItem {
  title: string;
  description: string;
}

interface IndustriesData {
  title: string;
  items: IndustryItem[];
}

export default function LocationIndustries({ data }: { data: IndustriesData }) {
  // Map index to a specific icon
  const getIcon = (title: string) => {
    const lower = title.toLowerCase();
    if (lower.includes("startup") || lower.includes("saas")) {
      return <Rocket className="w-5 h-5 text-orange-600" />;
    }
    if (lower.includes("e-commerce") || lower.includes("retail")) {
      return <ShoppingBag className="w-5 h-5 text-orange-600" />;
    }
    if (lower.includes("fintech") || lower.includes("finance")) {
      return <Landmark className="w-5 h-5 text-orange-600" />;
    }
    if (lower.includes("healthcare") || lower.includes("medicine")) {
      return <HeartPulse className="w-5 h-5 text-orange-600" />;
    }
    if (lower.includes("edtech") || lower.includes("education")) {
      return <GraduationCap className="w-5 h-5 text-orange-600" />;
    }
    return <Rocket className="w-5 h-5 text-orange-600" />;
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Title */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <p className="text-orange-600 font-black text-xs uppercase tracking-widest mb-3">Sectors We Empower</p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight"
          >
            {data.title}
          </motion.h2>
        </div>

        {/* Industries List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {data.items.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-[2rem] bg-white border border-slate-100 hover:border-slate-200 transition-all duration-300 flex flex-col justify-between group shadow-sm"
            >
              <div className="space-y-4">
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-orange-55/60 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  {getIcon(industry.title)}
                </div>

                <div className="space-y-2">
                  {/* H3 heading */}
                  <h3 className="text-base font-bold text-slate-900 leading-tight">
                    {industry.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-50 flex items-center gap-1.5 text-xs text-orange-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>See solutions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
