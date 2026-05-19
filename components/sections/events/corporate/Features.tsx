"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mic2, Utensils, Palette, Users, ShieldCheck } from "lucide-react";

export default function Features() {
  const features = [
    {
      num: "01",
      icon: MapPin,
      title: "Venue Sourcing & Contracting",
      description: "We secure exclusive venues that perfectly align with your brand image and capacity needs, negotiating aggressive rates and handling all complex contract liabilities on your behalf."
    },
    {
      num: "02",
      icon: Mic2,
      title: "AV & Technical Production",
      description: "Flawless staging, lighting, and sound design. We manage technical crews to ensure every presentation, keynote, and video playback runs without a single glitch."
    },
    {
      num: "03",
      icon: Utensils,
      title: "Luxury F&B Curation",
      description: "From five-course gala dinners to interactive food stations, we curate bespoke menus with top-tier caterers, accommodating all dietary requirements with elegance."
    },
    {
      num: "04",
      numColor: "text-orange-500",
      icon: Palette,
      title: "Thematic Styling & Decor",
      description: "We transform empty spaces into immersive brand environments. Our designers handle custom fabrication, floral arrangements, furniture rentals, and branded signage to create a cohesive atmosphere."
    },
    {
      num: "05",
      icon: Users,
      title: "Guest Management & Registration",
      description: "Seamless RSVP tracking, VIP concierge services, and frictionless on-site check-in systems ensure your attendees feel valued from the moment they receive the invitation."
    },
    {
      num: "06",
      icon: ShieldCheck,
      title: "On-Site Logistics & Security",
      description: "Our stage managers run the show minute-by-minute while discreet security teams manage crowd control, VIP protection, and emergency protocols in the background."
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">

        {/* Section Header */}
        <div className="max-w-3xl mb-20 text-left border-l-4 border-orange-600 pl-4 sm:pl-6">
          <span className="font-extrabold text-xs text-orange-600 uppercase tracking-widest block mb-2">
            End-to-End Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight leading-none">
            Everything Required for Perfection
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4">
            Planning a major corporate event requires coordinating dozens of moving parts simultaneously. We handle the entire ecosystem, giving you a single, reliable point of contact for the entire production.
          </p>
        </div>

        {/* Cardless Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="flex flex-col items-start pt-6 border-t border-slate-200/80 relative group"
              >
                {/* Floating details */}
                <div className="flex items-center justify-between w-full mb-6">
                  <div className="w-10 h-10 rounded-lg bg-orange-600/10 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono font-black text-slate-300 text-sm group-hover:text-orange-500 transition-colors duration-300">
                    {feature.num}
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-black text-slate-900 uppercase tracking-wide mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
