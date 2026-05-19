"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Map, Zap, Cog, MonitorSpeaker, CheckCircle } from "lucide-react";

export default function ConferenceProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const scaleX = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  const steps = [
    { icon: Map, title: "Strategic Masterplanning", desc: "Venue mapping, capacity planning, and financial modeling." },
    { icon: Cog, title: "Vendor Procurement", desc: "Sourcing staging, AV, catering, and local union crews." },
    { icon: Zap, title: "Creative & Marketing", desc: "Developing summit branding, stage design, and digital assets." },
    { icon: MonitorSpeaker, title: "Live Show Calling", desc: "Minute-by-minute execution by our elite stage managers." },
    { icon: CheckCircle, title: "Post-Con Reconciliation", desc: "Budget audits, attendee NPS scoring, and teardown." }
  ];

  return (
    <section ref={containerRef} className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px]">
        
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-wide">
            Linear Execution Model
          </h2>
          <p className="text-slate-500 mt-4 text-sm sm:text-base">
            No zigzagging. Our process is a relentless, straight-line drive from initial concept to final execution, ensuring absolute accountability at every milestone.
          </p>
        </div>

        <div className="relative">
          {/* Background Track */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-1 bg-slate-200 hidden lg:block" />
          
          {/* Animated Fill Track */}
          <motion.div 
            className="absolute top-1/2 -translate-y-1/2 left-0 h-1 bg-orange-600 hidden lg:block origin-left"
            style={{ scaleX }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="flex flex-col items-center text-center relative group">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-slate-100 shadow-lg flex items-center justify-center mb-6 group-hover:border-orange-500 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-slate-800 group-hover:text-orange-600 transition-colors" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg uppercase tracking-tight mb-3">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
