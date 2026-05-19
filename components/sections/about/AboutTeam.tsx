"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Globe } from "lucide-react";

export default function AboutTeam() {
  const team = [
    {
      name: "Marcus Holloway",
      role: "Founder & Technical Director",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
      bio: "Former Principal Engineer at Stripe. Obsessed with distributed systems, clean architecture, and mechanical keyboards."
    },
    {
      name: "Sarah Jenkins",
      role: "Head of Product Design",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
      bio: "10 years designing enterprise SaaS. Believes that if a user needs a manual to use your software, you failed the design."
    },
    {
      name: "David Chen",
      role: "Lead Systems Architect",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
      bio: "Open-source contributor to React and Next.js. Spends his weekends optimizing database queries for fun."
    }
  ];

  return (
    <section className="py-24 bg-slate-950 text-white relative border-t border-slate-900">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-4 inline-block">The Leadership</span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-wide">
              Small team.<br/> Massive impact.
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm sm:text-base leading-relaxed">
            We intentionally keep our core team small, senior, and highly capable. We don't hire junior devs to pad our billing hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
            >
              <div className="aspect-[3/4] rounded-3xl overflow-hidden relative mb-6">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-80" />
                
                <div className="absolute bottom-6 left-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-orange-500 transition-colors">
                    <Mail className="w-4 h-4 text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-orange-500 transition-colors">
                    <Globe className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
              
              <h3 className="text-2xl font-black mb-1">{member.name}</h3>
              <div className="text-orange-500 font-bold text-sm tracking-wide uppercase mb-4">{member.role}</div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
