"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Building, MonitorPlay, Ticket } from "lucide-react";

export default function Stats() {
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
                className="flex flex-col items-center text-center p-6 text-white group"
              >
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-orange-600 transition-all duration-300">
                  <Icon className="w-6 h-6 text-white group-hover:text-orange-600 transition-colors" />
                </div>
                <div className="text-4xl sm:text-5xl font-black mb-2 tracking-tight">{s.val}</div>
                <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-orange-100">{s.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
