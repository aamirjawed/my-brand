"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Building, Landmark, TreePine, ShieldAlert, PartyPopper, Award, Rocket } from "lucide-react";

export default function VenueTypes() {
  const types = [
    {
      num: "01",
      icon: Heart,
      title: "Wedding Venues",
      description: "Heritage castles, private estate domains, botanical glasshouses, and scenic beachfront estates."
    },
    {
      num: "02",
      icon: Building,
      title: "Corporate Event Venues",
      description: "Modern architectural towers, glass penthouses, luxury hotels, and private members clubs."
    },
    {
      num: "03",
      icon: Landmark,
      title: "Conference Halls",
      description: "State-of-the-art auditorium rooms with stage rigging, built-in translation booths, and massive seating."
    },
    {
      num: "04",
      icon: TreePine,
      title: "Outdoor Event Spaces",
      description: "Waterfront platforms, open estate grounds, and desert configurations with full rigging templates."
    },
    {
      num: "05",
      icon: ShieldAlert,
      title: "Luxury Venues",
      description: "Exquisite high-security properties, luxury palaces, historic properties, and superyachts."
    },
    {
      num: "06",
      icon: PartyPopper,
      title: "Private Party Venues",
      description: "Quirky speakeasies, private dinner chambers, art galleries, and boutique rooftops."
    },
    {
      num: "07",
      icon: Award,
      title: "Banquet Halls",
      description: "Grand traditional ballrooms, hotel banquet spaces, and grand dining halls with kitchen setups."
    },
    {
      num: "08",
      icon: Rocket,
      title: "Product Launch Venues",
      description: "Industrial warehouses, high-ceiling studios, and hangars with heavy power phases and vehicular access."
    }
  ];

  return (
    <section id="venue-types" className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">

        {/* Section Header */}
        <div className="max-w-3xl mb-20 text-left border-l-4 border-orange-600 pl-4 sm:pl-6">
          <span className="font-extrabold text-xs text-orange-600 uppercase tracking-widest block mb-2">
            Asset Inventory
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight leading-none">
            Venue Types We Help You Select
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4">
            We target diverse visual and operational categories to match your specific guest counts and design standards.
          </p>
        </div>

        {/* Cardless Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {types.map((item, idx) => {
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
