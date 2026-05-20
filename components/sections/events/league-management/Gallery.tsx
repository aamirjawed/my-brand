"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const items = [
    {
      title: "Tournament Visuals",
      category: "Match Action",
      img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800&auto=format&fit=crop",
      colSpan: "md:col-span-8 lg:col-span-6",
    },
    {
      title: "Crowd Images",
      category: "Spectator Engagement",
      img: "https://images.unsplash.com/photo-1519766304817-4f37bda74a27?q=80&w=800&auto=format&fit=crop",
      colSpan: "md:col-span-4 lg:col-span-3",
    },
    {
      title: "Scoreboard Images",
      category: "Analytics & Tracking",
      img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
      colSpan: "md:col-span-4 lg:col-span-3",
    },
    {
      title: "Match Coordination",
      category: "Tournament Officiating",
      img: "https://images.unsplash.com/photo-1579952362224-89a7640077cd?q=80&w=800&auto=format&fit=crop",
      colSpan: "md:col-span-4 lg:col-span-3",
    },
    {
      title: "Venue Setups",
      category: "Stadium Infrastructure",
      img: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=800&auto=format&fit=crop",
      colSpan: "md:col-span-8 lg:col-span-9",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900">
      {/* Background soft blurs */}
      <div className="absolute left-0 top-0 w-80 h-80 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-orange-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left border-l-4 border-orange-600 pl-4 sm:pl-6">
          <span className="font-extrabold text-xs text-orange-500 uppercase tracking-widest block mb-2">
            Event Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-none">
            Our League Gallery & Event Showcase
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-4">
            A visual overview of elite stadiums, cheering spectators, automated scoreboards, and smooth operational management.
          </p>
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              className={`relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900 group aspect-[4/3] ${item.colSpan} cursor-pointer`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              onClick={() => setSelectedImg(item.img)}
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Zoom Icon Button */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-900/80 border border-slate-700/50 flex items-center justify-center text-slate-350 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-white hover:border-orange-500">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Title & Category Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <span className="font-mono text-[10px] sm:text-xs font-bold text-orange-500 uppercase tracking-widest block mb-1">
                  {item.category}
                </span>
                <h3 className="text-base sm:text-lg font-black uppercase text-white tracking-wide">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImg(null)}
          >
            {/* Close Button */}
            <button className="absolute top-6 right-6 w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-white hover:text-orange-500 hover:border-orange-500 transition-all">
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              src={selectedImg}
              alt="Expanded Preview"
              className="max-w-full max-h-[85vh] rounded-lg object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
