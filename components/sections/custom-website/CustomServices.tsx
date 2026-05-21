"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Paintbrush, Smartphone, Search, Database, Globe, Zap, BarChart3, ShieldCheck } from "lucide-react";

export default function CustomServices() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const services = [
    {
      icon: Paintbrush,
      title: "Custom UI/UX Design",
      description: "Tailored brand layouts and component systems designed from scratch around your brand guidelines. We focus on clear typographic hierarchies and user flow layouts that build trust."
    },
    {
      icon: Smartphone,
      title: "Responsive Development",
      description: "Next-gen frontends that scale to mobile, tablet, and desktop viewports, ensuring zero layout shifts (CLS) and smooth touch interactions."
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Clean semantic HTML structures, pre-rendered static content, dynamic meta tags, and structured JSON-LD schemas so search bots rank your content."
    },
    {
      icon: Database,
      title: "CMS Integration",
      description: "Headless CMS setups (Sanity, Strapi, Contentful) decoupled from the layout, letting your content team publish updates without breaking layout code."
    },
    {
      icon: Globe,
      title: "API Integration",
      description: "Secure, structured synchronization with external APIs, CRM servers (Salesforce, HubSpot), payment platforms (Stripe), or custom databases."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Sub-second load times engineered via lightweight media, split code bundles, lazy assets, and edge CDN delivery."
    },
    {
      icon: BarChart3,
      title: "Analytics Setup",
      description: "Embedded tracking events (GTM, Meta Pixels, Google Analytics) tracking user click behaviors and lead funnels without slowing page speeds."
    },
    {
      icon: ShieldCheck,
      title: "Maintenance & Support",
      description: "Continuous version updates, serverless monitoring, security audits, and layout modifications to keep your build secure and up to date."
    }
  ];

  return (
    <section className="py-28 bg-white text-slate-900 relative overflow-hidden">
      {/* Background wobbly lines pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#000_1.5px,transparent_1.5px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        
        {/* Header */}
        <div className="w-full mb-20 border-l-4 border-slate-900 pl-6 text-left">
          <span className="font-extrabold text-xs text-slate-500 uppercase tracking-widest block mb-2">
            Services Included
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide max-w-4xl leading-[1.1]">
            What’s Included in Our Custom Website Development Services
          </h2>
        </div>

        {/* Cardless Interactive List - Spacing Grid & Borderless Rows */}
        <div className="divide-y divide-slate-100">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="py-10 transition-all duration-300 relative group text-left"
              >
                {/* Subtle horizontal highlight line */}
                <div className="absolute left-0 right-0 top-0 bottom-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start relative z-10">
                  
                  {/* Left Column: Number and Icon */}
                  <div className="lg:col-span-3 flex items-center gap-6">
                    <span className="text-4xl sm:text-5xl font-black text-slate-200 select-none group-hover:text-orange-500 transition-colors duration-300">
                      0{idx + 1}
                    </span>
                    <div className="p-3 bg-slate-950 text-orange-500 rounded-2xl group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Center/Right Column: Title & Description */}
                  <div className="lg:col-span-9 space-y-2">
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wide text-slate-900 group-hover:text-orange-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-4xl group-hover:text-slate-800 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
