"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, ShieldCheck, Calendar, MessageSquare, Award, Clipboard } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      num: "01",
      icon: Users,
      title: "Professional coordination",
      description: "Dedicated managers working directly with team captains, referees, and facility crews to align all operational components."
    },
    {
      num: "02",
      icon: ShieldCheck,
      title: "Smooth event execution",
      description: "Strict adherence to rulesets, match timetables, and on-site spectator safety guidelines to deliver a seamless event."
    },
    {
      num: "03",
      icon: Calendar,
      title: "Efficient scheduling",
      description: "Algorithmic fixture configurations that balance team groups, minimize resting gaps, and maximize facility space utility."
    },
    {
      num: "04",
      icon: MessageSquare,
      title: "Transparent communication",
      description: "Instant standings updates, bracket outputs, and real-time announcements to keep players, coaches, and sponsors aligned."
    },
    {
      num: "05",
      icon: Award,
      title: "Operational expertise",
      description: "Decades of combined sports management experience preparing scoreboard equipment and managing on-field operations."
    },
    {
      num: "06",
      icon: Clipboard,
      title: "Customized league planning",
      description: "Tailoring custom tournament brackets, division brackets, rulebooks, and schedules based on your specific requirements."
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
            Why Choose Our League Management Team
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4">
            We operate as your dedicated production and operations team, ensuring competitive integrity and technical coordination so you can focus on the sport.
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
