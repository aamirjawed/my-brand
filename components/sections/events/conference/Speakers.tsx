"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Speakers() {
  const speakers = [
    { name: "Executive Keynotes", role: "Industry Titans & CEOs", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600&auto=format&fit=crop" },
    { name: "Technical Deep-Dives", role: "Lead Engineers & Authors", img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop" },
    { name: "Panel Discussions", role: "Diverse Thought Leaders", img: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=600&auto=format&fit=crop" },
    { name: "Fireside Chats", role: "Intimate Founder Stories", img: "https://images.unsplash.com/photo-1560523159-4a9692d222f9?q=80&w=600&auto=format&fit=crop" }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px]">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="font-extrabold text-xs text-orange-500 uppercase tracking-widest mb-2 inline-block">Talent Management</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-wide">
              World-Class Stages
            </h2>
          </div>
          <p className="text-slate-500 max-w-md text-sm sm:text-base leading-relaxed">
            We handle complex speaker logistics, from green room hospitality and private transport to presentation deck reviews and live teleprompter operation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((speaker, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img 
                src={speaker.img} 
                alt={speaker.name} 
                className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-8 h-1 bg-orange-500 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
                <h3 className="text-2xl font-black text-white uppercase tracking-wide mb-1">{speaker.name}</h3>
                <p className="text-orange-400 text-xs font-bold uppercase tracking-widest">{speaker.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
