"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Target, Compass } from "lucide-react";

export default function ContactBanner() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-10 sm:py-10 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Sleek, High-Contrast Creative Container Card */}
        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative bg-slate-900 border-[3px] border-slate-950 rounded-[2.5rem] p-6 sm:p-10 xl:p-12 overflow-hidden shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 group"
        >

          {/* Neon Grid Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none"></div>

          {/* Glowing Ambient Radial light inside card */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-orange-600/20 rounded-full blur-[90px] pointer-events-none group-hover:bg-orange-600/35 transition-all duration-700"></div>
          <div className="absolute -left-20 -top-20 w-72 h-72 bg-orange-950/40 rounded-full blur-[80px] pointer-events-none"></div>

          {/* LEFT COLUMN: The Bold Message & CTA */}
          <div className="lg:col-span-8 max-w-2xl text-left relative z-10">

            {/* Minimalist Subheader */}
            <div className="inline-flex items-center gap-2 text-orange-400 font-bold tracking-widest text-xs uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 fill-orange-400 stroke-none animate-pulse" />
              THE FINAL PIECE
            </div>

            {/* Headline with custom pencil highlight */}
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-none tracking-tight mb-4">
              Your search ends <span className="text-orange-500 relative inline-block">
                here.
                {/* Wobbly hand-drawn pencil highlight vector */}
                <svg
                  viewBox="0 0 100 20"
                  className="absolute left-0 right-0 -bottom-2 w-full h-4 text-orange-500 pointer-events-none z-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                >
                  <path d="M 5 10 Q 50 18 95 8 T 90 4" />
                </svg>
              </span>
            </h2>

            {/* Persuasive Slogan Description */}
            <p className="text-slate-400 text-sm sm:text-base font-medium leading-relaxed mb-6 max-w-xl">
              You've viewed our track record, seen the success charts, and explored our interactive creative engines. The hunting is over. Let's coordinate and launch your next breakthrough digital experience.
            </p>

            {/* Custom Interactive Button */}
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white font-black px-6 py-4 rounded-xl transition-all duration-300 shadow-md text-xs tracking-widest uppercase"
            >
              Contact Us Now
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </motion.a>

          </div>

          {/* RIGHT COLUMN: The Creative Interactive Wobbly Target Doodle */}
          <div className="lg:col-span-4 flex items-center justify-center shrink-0 w-full max-w-[180px] sm:max-w-[220px] relative z-10">
            <div className="relative w-full aspect-square bg-slate-950/40 border border-slate-800 rounded-3xl p-4 flex items-center justify-center">

              {/* Floating Orbiting Emojis */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 left-4 bg-slate-900 border border-slate-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full text-slate-300 shadow-md flex items-center gap-1"
              >
                <Compass className="w-3.5 h-3.5 text-orange-500" />
                FOUND IT!
              </motion.div>

              {/* The Target Vector Graphic */}
              <svg viewBox="0 0 200 200" className="w-full h-full text-slate-500">
                {/* Wobbly concentric target ring 1 */}
                <motion.path
                  d="M 20 100 A 80 80 0 1 1 180 100 A 80 80 0 1 1 20 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeDasharray="8,6"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                  className="origin-center"
                />

                {/* Wobbly concentric target ring 2 */}
                <motion.path
                  d="M 50 100 A 50 50 0 1 1 150 100 A 50 50 0 1 1 50 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="text-slate-700"
                />

                {/* Wobbly core target ring 3 (Bullseye Core) */}
                <circle
                  cx="100"
                  cy="100"
                  r="20"
                  fill="#fed7aa" // peach
                  stroke="#ea580c" // theme orange
                  strokeWidth="2.5"
                  className="animate-pulse"
                />

                {/* Micro Bullseye Dot */}
                <circle
                  cx="100"
                  cy="100"
                  r="5"
                  fill="#ea580c"
                />

                {/* The Dart (Framer Motion Interactive Flying Physics) */}
                <motion.g
                  animate={isHovered ? {
                    x: [0, 8, 0],
                    y: [0, 8, 0],
                    rotate: [45, 42, 45]
                  } : {
                    x: [-40, -45, -40],
                    y: [-40, -45, -40],
                    rotate: 35
                  }}
                  transition={isHovered ? {
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  } : {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="origin-center"
                  style={{ transformOrigin: "100px 100px" }}
                >
                  {/* Dart shaft and arrow lines */}
                  <line
                    x1="60"
                    y1="60"
                    x2="92"
                    y2="92"
                    stroke="#ea580c"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />

                  {/* Dart metallic tip */}
                  <polygon
                    points="90,90 98,98 90,98"
                    fill="#ea580c"
                  />

                  {/* Dart Peach Feathers / Flights */}
                  <path
                    d="M 58 58 L 42 46 Q 38 48 40 54 L 52 62 Z"
                    fill="#fed7aa"
                    stroke="#ea580c"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M 58 58 L 46 42 Q 48 38 54 40 L 62 52 Z"
                    fill="#fed7aa"
                    stroke="#ea580c"
                    strokeWidth="1.5"
                  />
                </motion.g>

              </svg>

            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
