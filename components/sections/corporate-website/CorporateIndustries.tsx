"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, HeartPulse, Building2, Landmark, GraduationCap, Flame, Building, Users } from "lucide-react";

export default function CorporateIndustries() {
  const industries = [
    {
      icon: <Cpu className="w-6 h-6 text-orange-500" />,
      title: "Technology Companies",
      description: "Sleek, high-converting developer portals and SaaS product showcases with micro-interactions."
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-orange-500" />,
      title: "Healthcare Businesses",
      description: "Secure, compliant web ecosystems focusing on information accessibility and patient portal routes."
    },
    {
      icon: <Building2 className="w-6 h-6 text-orange-500" />,
      title: "Real Estate",
      description: "Visual-first property portfolios, geolocation maps, and highly optimized lead capture mechanisms."
    },
    {
      icon: <Landmark className="w-6 h-6 text-orange-500" />,
      title: "Finance & Consulting",
      description: "Credible, authoritative web presences built to emphasize security, institutional trust, and client onboarding."
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-orange-500" />,
      title: "Education",
      description: "Intuitive directory routes, student portal systems, and resource directories configured for accessibility."
    },
    {
      icon: <Flame className="w-6 h-6 text-orange-500" />,
      title: "Startups",
      description: "Ultra-fast loading, conversion-focused websites engineered to match rapid funding and scale requirements."
    },
    {
      icon: <Building className="w-6 h-6 text-orange-500" />,
      title: "Corporate Enterprises",
      description: "Decoupled multi-regional platforms built with headless CMS setups to support global marketing teams."
    },
    {
      icon: <Users className="w-6 h-6 text-orange-500" />,
      title: "Agencies",
      description: "High-performance client portfolio layouts and reliable systems optimized to showcase creative output."
    }
  ];

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute left-0 top-0 w-80 h-80 bg-orange-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-orange-500 text-xs font-bold uppercase tracking-widest mb-4">
            Our Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-wide leading-tight mb-4 text-center">
            Industries We Serve
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
            Custom-tailored web architectures mapped to specific commercial needs and target audience behaviors.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="p-8 rounded-[2rem] border border-slate-800 bg-slate-900/40 hover:bg-slate-900 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-orange-600/10 rounded-2xl flex items-center justify-center border border-orange-500/20 group-hover:bg-orange-600/20 transition-colors">
                  {ind.icon}
                </div>
                <h3 className="font-extrabold text-white text-sm sm:text-base uppercase tracking-wider">{ind.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{ind.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
