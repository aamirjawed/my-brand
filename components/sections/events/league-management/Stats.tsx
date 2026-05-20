"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCount({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800; // ms
    const frameRate = 16; // ms
    const totalSteps = duration / frameRate;
    const step = target / totalSteps;

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, frameRate);
    return () => clearInterval(timer);
  }, [isInView, target]);

  const formatted = target % 1 === 0 
    ? Math.round(count).toLocaleString() 
    : count.toFixed(2);

  return <span ref={ref}>{formatted}{suffix}</span>;
}

export default function Stats() {
  const stats = [
    { value: 200, suffix: "+", label: "Tournaments Streamed", caption: "broadcasted to live global audiences" },
    { value: 50, suffix: "K+", label: "Competitive Players", caption: "registered on our draft systems" },
    { value: 99.98, suffix: "%", label: "Scoreboard API Uptime", caption: "zero latency in live statistics feed" },
    { value: 2.5, suffix: "M+", label: "Sponsorship Revenue", caption: "secured for championship clients" }
  ];

  return (
    <section className="bg-slate-950 relative overflow-hidden py-20 border-t border-b border-slate-900">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
      {/* Center blur glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="flex items-center justify-center mb-14">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-orange-600"></div>
            <span className="text-orange-500 font-extrabold text-xs tracking-[0.3em] uppercase">Championship Metrics</span>
            <div className="h-px w-12 bg-orange-600"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-8 py-10 group hover:bg-white/[0.02] transition-colors duration-300"
            >
              <div className="text-5xl sm:text-6xl font-black text-white leading-none mb-3 tabular-nums group-hover:text-orange-400 transition-colors duration-300">
                <AnimatedCount target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-bold text-white uppercase tracking-wide mb-1">{stat.label}</div>
              <div className="text-xs text-slate-500 leading-snug max-w-[155px]">{stat.caption}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
