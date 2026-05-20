"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clipboard, Calendar, Users, RefreshCw, MapPin, Trophy, MessageSquare, ShieldCheck } from "lucide-react";

export default function Services() {
  const capabilities = [
    {
      num: "01",
      icon: Clipboard,
      title: "League Planning",
      description: "Drafting comprehensive league formats, division structures, official rulebooks, and compliance policies tailored to your competition."
    },
    {
      num: "02",
      icon: Calendar,
      title: "Tournament Scheduling",
      description: "Designing algorithmically optimized brackets, round-robins, and double-elimination schedules to prevent match delays."
    },
    {
      num: "03",
      icon: Users,
      title: "Team Registration Management",
      description: "Managing player portals, custom team entry forms, roster verification checkpoints, and digital waiver collection."
    },
    {
      num: "04",
      icon: RefreshCw,
      title: "Fixture Coordination",
      description: "Configuring exact match times, court/field allocations, referee schedules, and active weather delay buffers."
    },
    {
      num: "05",
      icon: MapPin,
      title: "Venue Coordination",
      description: "Securing event spaces, managing field setup/markings, setting up scoreboard hardware, and managing spectator flow."
    },
    {
      num: "06",
      icon: Trophy,
      title: "Leaderboard Management",
      description: "Updating player statistics, points standings, division rankings, and match results on live scoreboard portals in real-time."
    },
    {
      num: "07",
      icon: MessageSquare,
      title: "Participant Communication",
      description: "Broadcasting schedule changes, standings updates, team placements, and league notices through instant notifications."
    },
    {
      num: "08",
      icon: ShieldCheck,
      title: "Event Operations Support",
      description: "Providing certified on-site crew, managing equipment load-in/out, referee staffing, and spectator management."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">

        {/* Section Header */}
        <div className="max-w-3xl mb-20 text-left border-l-4 border-orange-600 pl-4 sm:pl-6">
          <span className="font-extrabold text-xs text-orange-600 uppercase tracking-widest block mb-2">
            Scope of Operations
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight leading-none">
            What’s Included in Our League Management Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4">
            We handle the digital infrastructure and operational logistics to ensure your tournaments run without technical glitches.
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
