"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Newspaper, Video, Megaphone, CheckCircle2, ShieldAlert } from "lucide-react";

export default function Features() {
  const capabilities = [
    {
      num: "01",
      icon: Sparkles,
      title: "Holographic & Laser Reveals",
      description: "Produce jaw-dropping reveal moments with automated laser tracks, 3D holographic projection mappings, and synchronize them with dynamic stage automation systems."
    },
    {
      num: "02",
      icon: Newspaper,
      title: "Press & Media Relations",
      description: "Secure coverage from major industry journalists. We establish dedicated press boxes, draft press kits, manage embargo timelines, and host live Q&A sessions on launch day."
    },
    {
      num: "03",
      icon: Video,
      title: "TV-Quality Live Streaming",
      description: "Stream your launch to millions globally with broadcast production trucks, multicam directors, custom picture-in-picture graphics, and live translation layers."
    },
    {
      num: "04",
      icon: Megaphone,
      title: "Influencer Campaign Syndication",
      description: "Amplify organic social reach by inviting top-tier content creators. We build custom aesthetic 'Instagrammable' demo areas to guarantee massive live social coverage."
    },
    {
      num: "05",
      icon: CheckCircle2,
      title: "RSVP & Credential Management",
      description: "Secure private guest checking. We operate custom guest registration portals with automated QR ticket delivery, host VIP concierge lounges, and track high-profile RSVPs."
    },
    {
      num: "06",
      icon: ShieldAlert,
      title: "Technical Failure Contingency",
      description: "We deploy active, dual-redundant server networks for digital presentations, backup AV generators, and spare staging equipment to ensure the launch proceeds smoothly."
    }
  ];

  return (
    <section id="features" className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">

        {/* Section Header */}
        <div className="max-w-3xl mb-20 text-left border-l-4 border-orange-600 pl-4 sm:pl-6">
          <span className="font-extrabold text-xs text-orange-600 uppercase tracking-widest block mb-2">
            Launch Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight leading-none">
            Everything Required for Hype
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4">
            We handle everything from initial hype creation to technical redundancies. Our services ensure your product is delivered to the world with high-end production and media amplification.
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
                className="flex flex-col items-start pt-6 border-t border-slate-200/80 relative group"
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
                
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
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
