"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Terminal, ShieldCheck, Rocket } from "lucide-react";

interface ProcessItem {
  title: string;
  description: string;
}

interface ProcessData {
  title: string;
  items: ProcessItem[];
}

export default function LocationProcess({ data }: { data: ProcessData }) {
  // Map index to a specific icon
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Search className="w-5 h-5 text-white" />;
      case 1:
        return <PenTool className="w-5 h-5 text-white" />;
      case 2:
        return <Terminal className="w-5 h-5 text-white" />;
      case 3:
        return <ShieldCheck className="w-5 h-5 text-white" />;
      case 4:
        return <Rocket className="w-5 h-5 text-white" />;
      default:
        return <Terminal className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Title */}
        <div className="max-w-3xl mb-20 space-y-4">
          <p className="text-orange-600 font-black text-xs uppercase tracking-widest">Workflow</p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight"
          >
            {data.title}
          </motion.h2>
        </div>

        {/* Dynamic Timeline Layout */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Connector line for desktop (hidden on mobile/tablet) */}
          <div className="hidden lg:block absolute top-[28px] left-[50px] right-[50px] h-0.5 bg-slate-100 z-0"></div>

          {data.items.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative z-10 flex flex-col items-start space-y-6"
            >
              {/* Step indicator node */}
              <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-6 w-full">
                {/* Node circle */}
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border-4 border-white flex items-center justify-center shadow-lg transform hover:rotate-6 transition-transform duration-300 flex-shrink-0">
                  {getIcon(index)}
                </div>

                {/* Step number badge */}
                <span className="px-2.5 py-1 rounded bg-orange-50 border border-orange-100 text-[10px] font-black text-orange-600 uppercase tracking-wider">
                  Step 0{index + 1}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900 leading-tight">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
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
