"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Building, MonitorPlay, Ticket } from "lucide-react";

export default function ConferenceStats() {
  const stats = [
    { val: "10k+", label: "Max Attendee Capacity", icon: Users },
    { val: "500+", label: "Exhibitor Booths Managed", icon: Building },
    { val: "99.9%", label: "Live Stream Uptime", icon: MonitorPlay },
    { val: "$50m+", label: "Client Ticket Revenue", icon: Ticket }
  ];

  return (
    <section className="py-24 bg-orange-600 relative overflow-hidden">
      {/* Abstract geometric background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-orange-700/30 backdrop-blur-sm border border-orange-500/50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col items-start relative overflow-hidden group hover:bg-orange-700/50 transition-colors"
              >
                <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-orange-200 mb-4 sm:mb-6 opacity-70 group-hover:opacity-100 transition-opacity" />
                <div className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-1 sm:mb-2">{s.val}</div>
                <div className="text-orange-200 font-bold uppercase tracking-wide text-[10px] sm:text-sm">{s.label}</div>
                
                {/* Decorative background icon */}
                <Icon className="absolute -right-4 -bottom-4 sm:-right-6 sm:-bottom-6 w-24 h-24 sm:w-32 sm:h-32 text-orange-800/20 group-hover:scale-110 transition-transform duration-500 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
