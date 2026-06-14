"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Rocket, BarChart2, MapPin, Briefcase, ShoppingBag, GraduationCap } from "lucide-react";

export default function LandingIndustries() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const industries = [
    {
      icon: Rocket,
      name: "SaaS & B2B Tech",
      focus: "Trials & Subscriptions",
      description: "Explain complex workflow features simply. We construct interactive product sandbox previews and multi-tiered pricing charts that drive trial registrations and demo bookings.",
    },
    {
      icon: ShoppingBag,
      name: "eCommerce & Retail",
      focus: "Direct Sales & Promos",
      description: "Drive high direct-to-checkout conversions for single products or collections. We optimize payment checkouts, speed (<2.5s), and coupon flows.",
    },
    {
      icon: Briefcase,
      name: "FinTech & Crypto",
      focus: "Trust & Registrations",
      description: "Establish immediate security and credibility. We design pages for investment platforms, mobile app downloads, secure forms, and compliance badges.",
    },
    {
      icon: BarChart2,
      name: "Professional Agencies",
      focus: "Consultation Bookings",
      description: "Showcase case studies and embed calendar scheduling. We eliminate friction paths to turn anonymous search traffic into qualified sales calls.",
    },
    {
      icon: MapPin,
      name: "Healthcare & Wellness",
      focus: "Patient Bookings",
      description: "Optimize layout for doctor profiles, clinic locator tools, patient inquiry forms, and HIPAA-compliant secure intake integrations.",
    },
    {
      icon: GraduationCap,
      name: "EdTech & Online Courses",
      focus: "Student Enrollments",
      description: "Grow your email list and sell premium courses. We build custom lead magnets and webinar signup pages optimized for email platforms.",
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
