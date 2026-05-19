"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Compass, DollarSign, MapPin, ShieldCheck, Users } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      num: "01",
      icon: Award,
      title: "Experienced Event Planners",
      description: "Our team has coordinated venue requirements for over 400 events, from tech summits to state dinners."
    },
    {
      num: "02",
      icon: Compass,
      title: "Wide Venue Network",
      description: "We maintain direct commercial relationships with top-tier conservatories, castles, warehouses, and hotel groups."
    },
    {
      num: "03",
      icon: DollarSign,
      title: "Budget-Focused Planning",
      description: "We ensure you never pay hidden resort charges, excessive corkage fees, or arbitrary setup fees."
    },
    {
      num: "04",
      icon: MapPin,
      title: "Location Expertise",
      description: "We evaluate real-time transit times, municipal safety zoning regulations, and soundscape layouts."
    },
    {
      num: "05",
      icon: ShieldCheck,
      title: "Professional Coordination",
      description: "Providing on-site technical inspection managers to audit stage heights and electrical breakers."
    },
    {
      num: "06",
      icon: Users,
      title: "Customized Venue Recommendations",
      description: "We source custom fits matching your specific capacity numbers, rather than pushing generic spaces."
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">

        {/* Section Header */}
        <div className="max-w-3xl mb-20 text-left border-l-4 border-orange-600 pl-4 sm:pl-6">
          <span className="font-extrabold text-xs text-orange-600 uppercase tracking-widest block mb-2">
            Why Partner With Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight leading-none">
            Why Choose Our Selection Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4">
            We operate as your direct advocates, handling technical vetting and commercial negotiations so you can focus entirely on your event program.
          </p>
        </div>

        {/* Cardless Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {points.map((item, idx) => {
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
