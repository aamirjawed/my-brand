"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Star, Users, Zap, Shield } from "lucide-react";

interface WhyChooseUsItem {
  title: string;
  description: string;
}

interface WhyChooseUsData {
  title: string;
  text: string;
  items: WhyChooseUsItem[];
}

export default function LocationWhyChooseUs({ data }: { data: WhyChooseUsData }) {
  // Map index to a specific icon
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Zap className="w-6 h-6 text-orange-600" />;
      case 1:
        return <Users className="w-6 h-6 text-orange-600" />;
      case 2:
        return <Star className="w-6 h-6 text-orange-600" fill="currentColor" />;
      case 3:
        return <Shield className="w-6 h-6 text-orange-600" />;
      default:
        return <Check className="w-6 h-6 text-orange-600" />;
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Header grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-6">
            {/* H2 Title */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight leading-tight"
            >
              {data.title}
            </motion.h2>
          </div>
          <div className="lg:col-span-6">
            {/* Direct Answer Paragraph (AI Citations Optimized) */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 text-base sm:text-lg leading-relaxed border-l-4 border-orange-500 pl-6 py-1 font-medium"
            >
              {data.text}
            </motion.p>
          </div>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-slate-100/40 hover:border-slate-200 transition-all duration-300 flex items-start gap-5 group"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                {getIcon(index)}
              </div>

              <div className="space-y-2">
                {/* H3 item heading */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
