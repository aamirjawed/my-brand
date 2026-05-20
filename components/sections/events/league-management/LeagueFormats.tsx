"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, GraduationCap, Globe, Shield, Gamepad2, MapPin } from "lucide-react";

export default function LeagueFormats() {
  const formats = [
    {
      num: "01",
      icon: Users,
      title: "Corporate Sports Leagues",
      description: "Custom structured tournaments designed for corporate bonding, wellness programs, and inter-department competitions."
    },
    {
      num: "02",
      icon: GraduationCap,
      title: "School & College Tournaments",
      description: "Official academic leagues, varsity cups, and regional multi-school athletic meets with verified student rosters."
    },
    {
      num: "03",
      icon: Globe,
      title: "Community Competitions",
      description: "Recreational sports leagues, local cup tournaments, and charity matches open to the public."
    },
    {
      num: "04",
      icon: Shield,
      title: "Private Sports Events",
      description: "Exclusive invitationals, members-only championships, and private club events managed with complete security."
    },
    {
      num: "05",
      icon: Gamepad2,
      title: "Esports Tournaments",
      description: "Competitive gaming brackets, high-performance network configurations, and broadcast-ready multiplayer events."
    },
    {
      num: "06",
      icon: MapPin,
      title: "Local Sports Leagues",
      description: "Seasonal city-wide leagues, club divisions, and district tournaments featuring comprehensive leaderboard tracking."
    }
  ];

  return (
    <section id="league-formats" className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">

        {/* Section Header */}
        <div className="max-w-3xl mb-20 text-left border-l-4 border-orange-600 pl-4 sm:pl-6">
          <span className="font-extrabold text-xs text-orange-600 uppercase tracking-widest block mb-2">
            Target Audiences
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight leading-none">
            Types of Leagues We Manage
          </h2>
          <p className="text-slate-650 text-sm sm:text-base leading-relaxed mt-4">
            We adapt rules, scheduling software, and bracket layouts to support the exact format matching your player count and game type.
          </p>
        </div>

        {/* Cardless Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {formats.map((item, idx) => {
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
