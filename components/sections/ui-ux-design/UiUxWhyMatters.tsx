"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Activity, Percent, Compass, Palette, Eye, Smartphone, Heart } from "lucide-react";

export default function UiUxWhyMatters() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const reasons = [
    {
      icon: Activity,
      title: "User engagement",
      description: "Interactive visual states and layouts keep visitors locked in, boosting session duration and interaction metrics."
    },
    {
      icon: Percent,
      title: "Conversion optimization",
      description: "Reducing friction points in user workflows, helping guide visits directly toward forms, sign-ups, or checkout buttons."
    },
    {
      icon: Compass,
      title: "Navigation experience",
      description: "Intuitive directory flow and site mapping, allowing customers to locate necessary information in under three actions."
    },
    {
      icon: Palette,
      title: "Brand consistency",
      description: "A cohesive design language containing standardized UI colors, styling assets, and icons to build user confidence."
    },
    {
      icon: Eye,
      title: "Accessibility",
      description: "Strict WCAG compliance structures, high-contrast layouts, and readable typefaces that accommodate all user abilities."
    },
    {
      icon: Smartphone,
      title: "Mobile responsiveness",
      description: "Interfaces engineered to adapt fluidly across all tablet and mobile screen dimensions without text overflow."
    },
    {
      icon: Heart,
      title: "Customer retention",
      description: "Delightful UX patterns, fast load paths, and visual clarity that build lasting trust and repeat visits."
    }
  ];

  return (
    <section className="py-28 bg-white text-slate-900 relative overflow-hidden">
      {/* Background wobbly lines */}
      <div className="absolute inset-0 opacity-[0.01] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Sticky Context (Sticks on desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 text-left space-y-6">
            <span className="font-extrabold text-xs text-orange-600 uppercase tracking-widest block">
              Business Impact
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide leading-[1.1]">
              Why UI/UX Design Is Important for Digital Products
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-md font-medium">
              Google ranks websites based on user experience, responsive interfaces, and interaction times. Investing in professional UX architecture directly scales product retention and boosts organic visibility.
            </p>
            <div className="pt-4 border-t border-slate-100 max-w-sm">
              <span className="text-[10px] font-black uppercase tracking-widest text-orange-600">EEAT Field Note</span>
              <p className="text-xs text-slate-400 italic mt-1 leading-relaxed">
                "Products designed with a clear visual hierarchy and zero navigation roadblocks see up to a 400% increase in user conversion rates compared to generic template designs."
              </p>
            </div>
          </div>

          {/* Right Column: Cardless Row List */}
          <div className="lg:col-span-7 divide-y divide-slate-100 border-t border-slate-100">
            {reasons.map((reason, idx) => {
              const Icon = reason.icon;
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

                    {/* Icon and Content */}
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-slate-950 text-orange-400 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300 rounded-xl">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="text-lg font-black uppercase tracking-wide text-slate-950 group-hover:text-orange-600 transition-colors duration-300">
                          {reason.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                        {reason.description}
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
