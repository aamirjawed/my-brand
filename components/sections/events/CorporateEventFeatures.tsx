"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Utensils, Mic2, Music, Palette, Users, Camera, ShieldCheck } from "lucide-react";

export default function CorporateEventFeatures() {
  const features = [
    {
      icon: MapPin,
      title: "Venue Sourcing & Contracting",
      description: "We secure exclusive venues that perfectly align with your brand image and capacity needs, negotiating aggressive rates and handling all complex contract liabilities on your behalf.",
      colSpan: "lg:col-span-8",
    },
    {
      icon: Mic2,
      title: "AV & Technical Production",
      description: "Flawless staging, lighting, and sound design. We manage technical crews to ensure every presentation, keynote, and video playback runs without a single glitch.",
      colSpan: "lg:col-span-4",
    },
    {
      icon: Utensils,
      title: "Luxury F&B Curation",
      description: "From five-course gala dinners to interactive food stations, we curate bespoke menus with top-tier caterers, accommodating all dietary requirements with elegance.",
      colSpan: "lg:col-span-4",
    },
    {
      icon: Palette,
      title: "Thematic Styling & Decor",
      description: "We transform empty spaces into immersive brand environments. Our designers handle custom fabrication, floral arrangements, furniture rentals, and branded signage to create a cohesive atmosphere.",
      colSpan: "lg:col-span-8",
    },
    {
      icon: Users,
      title: "Guest Management & Registration",
      description: "Seamless RSVP tracking, VIP concierge services, and frictionless on-site check-in systems ensure your attendees feel valued from the moment they receive the invitation.",
      colSpan: "lg:col-span-6",
    },
    {
      icon: ShieldCheck,
      title: "On-Site Logistics & Security",
      description: "Our stage managers run the show minute-by-minute while discreet security teams manage crowd control, VIP protection, and emergency protocols in the background.",
      colSpan: "lg:col-span-6",
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px]">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-extrabold text-xs text-orange-500 uppercase tracking-widest bg-orange-600/10 px-4 py-2 rounded-full border border-orange-500/20 mb-4 inline-block">
            End-to-End Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-wide mt-6 mb-6">
            Everything Required for Perfection
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Planning a major corporate event requires coordinating dozens of moving parts simultaneously. We handle the entire ecosystem, giving you a single, reliable point of contact for the entire production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`${feature.colSpan} bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-600/10 flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-wide mb-4">{feature.title}</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
