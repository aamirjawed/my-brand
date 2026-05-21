"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, Heart, Compass, Users, Sparkles, Megaphone, Calendar } from "lucide-react";

export default function SocialWhyMatters() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const points = [
    {
      icon: Eye,
      title: "Brand awareness",
      description: "Consistent posting schedules ensure your brand stays fresh in consumer feeds, building natural brand recognition."
    },
    {
      icon: Heart,
      title: "Customer engagement",
      description: "Direct interactions via comments and messaging turn casual scrolls into personalized brand conversations."
    },
    {
      icon: Compass,
      title: "Online visibility",
      description: "Active profiles tell search engines your brand is alive and authoritative, boosting overall organic search positioning."
    },
    {
      icon: Users,
      title: "Audience trust",
      description: "Polished templates, responsive replies, and professional assets build strong audience credibility."
    },
    {
      icon: Sparkles,
      title: "Lead generation",
      description: "Strategic bio links, interactive polls, and promo hooks direct social followers straight into your sales pipeline."
    },
    {
      icon: Megaphone,
      title: "Community building",
      description: "Fostering user-generated content and brand advocates, creating a self-sustaining word-of-mouth ecosystem."
    },
    {
      icon: Calendar,
      title: "Marketing consistency",
      description: "A calculated content calendar prevents engagement drops, securing steady lead flow weeks in advance."
    }
  ];

  return (
    <section className="py-28 bg-white text-slate-900 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.01] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Title context (Sticks on desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 text-left space-y-6">
            <span className="font-extrabold text-xs text-orange-650 uppercase tracking-widest block">
              Market Power
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide leading-[1.1] text-slate-950">
              Why Social Media Management Is Important for Businesses
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-md font-medium">
              Over 80% of consumers check a company's social media platforms before making a purchase. Having a dormant profile translates to lost conversions and weakened credibility.
            </p>
            <div className="pt-4 border-t border-slate-100 max-w-sm">
              <span className="text-[10px] font-black uppercase tracking-widest text-orange-600">Growth Index</span>
              <p className="text-xs text-slate-400 italic mt-1 leading-relaxed">
                "Brands that maintain consistent content schedules and engage audiences weekly see up to 3x faster follower growth rates and double organic inquiry ratios."
              </p>
            </div>
          </div>

          {/* Right Column: Cardless list */}
          <div className="lg:col-span-7 divide-y divide-slate-100 border-t border-slate-100">
            {points.map((pt, idx) => {
              const Icon = pt.icon;
              const isHovered = hoveredIdx === idx;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="py-8 transition-all duration-300 relative group text-left"
                >
                  <div className="flex gap-6 items-start relative z-10">
                    {/* Index Number */}
                    <span className="text-3xl font-black text-slate-200 select-none group-hover:text-orange-500 transition-colors duration-300">
                      0{idx + 1}
                    </span>

                    {/* Icon and content */}
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-slate-950 text-orange-400 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300 rounded-xl">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="text-lg font-black uppercase tracking-wide text-slate-950 group-hover:text-orange-600 transition-colors duration-300">
                          {pt.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                        {pt.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
