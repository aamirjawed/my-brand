"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Calculator, MapPin, GitCompare, FileCheck, Users, Users2, ShieldCheck } from "lucide-react";

export default function Services() {
  const capabilities = [
    {
      num: "01",
      icon: Search,
      title: "Venue Research & Shortlisting",
      description: "Custom space discovery mapping unique aesthetic parameters, zoning permissions, and load-in specifications."
    },
    {
      num: "02",
      icon: Calculator,
      title: "Budget & Contract Auditing",
      description: "Auditing hidden facility fees, food minimum agreements, overtime staffing, and cleanup charges."
    },
    {
      num: "03",
      icon: MapPin,
      title: "Location & Transit Analysis",
      description: "Evaluating regional access loops, valet drop pathways, airport proximities, and transport durations."
    },
    {
      num: "04",
      icon: GitCompare,
      title: "Side-by-Side Comparison",
      description: "Side-by-side matrices comparing rental structures, dimensions, capacity thresholds, and included vendor rigs."
    },
    {
      num: "05",
      icon: FileCheck,
      title: "Booking & Attrition Protection",
      description: "Professional contract review to limit client liability, mitigate attrition fees, and lock in best rates."
    },
    {
      num: "06",
      icon: Users,
      title: "Capacity Chart Design",
      description: "Designing floor charts for banquets, theatre seating, or trade booths while leaving adequate exit paths."
    },
    {
      num: "07",
      icon: Users2,
      title: "Vendor Load-in Coordination",
      description: "Coordinating rigging rules, electrical limits, and load-in schedules with catering and decorating crews."
    },
    {
      num: "08",
      icon: ShieldCheck,
      title: "Physical Site Vetting",
      description: "Physically guiding walk-throughs to verify Wi-Fi signal grids, elevator clearance paths, and ambient acoustics."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">

        {/* Section Header */}
        <div className="max-w-3xl mb-20 text-left border-l-4 border-orange-600 pl-4 sm:pl-6">
          <span className="font-extrabold text-xs text-orange-600 uppercase tracking-widest block mb-2">
            Scope of Sourcing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight leading-none">
            What’s Included in Our Sourcing Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4">
            We provide end-to-end assistance from initial geographical research to contract negotiations and site handover.
          </p>
        </div>

        {/* Cardless Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="flex flex-col items-start pt-6 border-t border-slate-200/80 relative group text-left"
              >
                {/* Header elements */}
                <div className="flex items-center justify-between w-full mb-6">
                  <div className="w-10 h-10 rounded-lg bg-orange-600/10 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono font-black text-slate-300 text-sm group-hover:text-orange-500 transition-colors duration-300">
                    {item.num}
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-black text-slate-900 uppercase tracking-wide mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
