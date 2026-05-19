"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Rocket, BarChart2, MapPin, Briefcase, ShoppingBag, GraduationCap } from "lucide-react";

export default function LandingIndustries() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const industries = [
    {
      icon: Rocket,
      name: "Startups",
      focus: "Investment & Early Growth",
      description: "Pitch ideas to early adopters and VCs. We design high-converting waitlist signups and prototype feedback funnels that establish instant credibility.",
    },
    {
      icon: BarChart2,
      name: "SaaS & Software",
      focus: "Trials & Subscriptions",
      description: "Explain complex workflow features simply. We construct interactive product sandbox previews and multi-tiered pricing charts that drive SaaS growth.",
    },
    {
      icon: MapPin,
      name: "Local Businesses",
      focus: "Phone Leads & Bookings",
      description: "Get direct phone calls and booking requests. We build local-first pages optimized for mapping software and quick tap-to-call interfaces.",
    },
    {
      icon: Briefcase,
      name: "Agencies & Professional",
      focus: "Consultation Bookings",
      description: "Showcase client testimonials and booking calendars. We eliminate calendar scheduling friction, turning visitors into warm sales calls.",
    },
    {
      icon: ShoppingBag,
      name: "E-Commerce",
      focus: "Direct Sales & Promos",
      description: "Drive sales for single-product lines or seasonal offers. We build checkout paths and buy buttons integrated directly with payment checkouts.",
    },
    {
      icon: GraduationCap,
      name: "Coaches & Education",
      focus: "Webinar & Course Signups",
      description: "Grow your email list and sell premium courses. We build beautiful lead magnets and webinar signup pages optimized for email software.",
    }
  ];

  return (
    <section className="py-28 bg-white text-slate-900 relative overflow-hidden">
      {/* Background wobbly lines pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#000_1.5px,transparent_1.5px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        
        {/* Header */}
        <div className="w-full mb-20 border-l-4 border-slate-900 pl-6">
          <span className="font-extrabold text-xs text-slate-500 uppercase tracking-widest block mb-2">
            Targeted Niche Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide max-w-2xl leading-none">
            Landing Pages for Different Industries
          </h2>
        </div>

        {/* Asymmetrical Transparent List/Grid - Cardless */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="relative group cursor-default pt-6 border-t border-slate-100 hover:border-orange-500/30 transition-colors duration-300"
              >
                {/* Micro-animated line indicator */}
                <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden pointer-events-none">
                  <motion.div
                    className="h-full bg-gradient-to-r from-orange-500 to-amber-500"
                    initial={{ x: "-100%" }}
                    animate={isHovered ? { x: "0%" } : { x: "-100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                <div className="space-y-4">
                  {/* Icon & Focus Label */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-slate-950 text-orange-500 rounded-2xl group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      {ind.focus}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black uppercase tracking-wide text-slate-900 group-hover:text-orange-600 transition-colors duration-300">
                    {ind.name}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                    {ind.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
