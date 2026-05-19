"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Showcase() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px]">

        <div className="w-full mb-16 border-l-4 border-orange-600 pl-4 sm:pl-6">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-orange-600 uppercase tracking-wider leading-[1.25]"
          >
            FLAWLESS EXECUTION, HIGH-END PRODUCTION, AND MEMORABLE BRAND EXPERIENCES
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Launch Moodboard / Plan Visual */}
          <div className="col-span-1 lg:col-span-6 relative flex items-center justify-center min-h-[400px] sm:min-h-[500px]">
            <div className="absolute w-[80%] h-[80%] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

            <div className="relative w-full max-w-[550px] aspect-square sm:aspect-[4/3] z-10 overflow-visible">
              
              {/* Back Polaroid 1 */}
              <motion.div
                initial={{ opacity: 0, x: -40, y: 20, rotate: -10 }}
                whileInView={{ opacity: 1, x: -20, y: 0, rotate: -5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="absolute top-[10%] left-[5%] w-[45%] aspect-[3/4] bg-white rounded-lg p-2 pb-8 shadow-xl border border-slate-200 z-10"
              >
                <div className="w-full h-full bg-slate-200 rounded overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply" alt="Hologram Reveal" />
                </div>
                <div className="absolute bottom-2 left-0 w-full text-center text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">Stage Rigging</div>
              </motion.div>

              {/* Back Polaroid 2 */}
              <motion.div
                initial={{ opacity: 0, x: 40, y: -20, rotate: 10 }}
                whileInView={{ opacity: 1, x: 20, y: -10, rotate: 8 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute top-[5%] right-[5%] w-[45%] aspect-[3/4] bg-white rounded-lg p-2 pb-8 shadow-xl border border-slate-200 z-10"
              >
                <div className="w-full h-full bg-slate-200 rounded overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply" alt="Press Conference" />
                </div>
                <div className="absolute bottom-2 left-0 w-full text-center text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">Press Syndicate</div>
              </motion.div>

              {/* Front: Clipboard / Run of Show */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-[0%] left-[15%] w-[70%] aspect-square bg-[#fdfbf7] rounded-xl p-5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border-2 border-slate-100 z-20 flex flex-col items-center group hover:-translate-y-2 transition-transform duration-500"
              >
                {/* Clipboard Clip */}
                <div className="w-16 h-4 bg-slate-300 rounded-full mb-4 shadow-inner relative -top-2"></div>
                
                <h3 className="font-extrabold text-sm uppercase tracking-widest text-slate-900 mb-3 border-b-2 border-orange-600 pb-1 inline-block">Launch Schedule</h3>
                
                <div className="w-full space-y-3 mt-2">
                  {[
                    { time: "09:00 AM", desc: "Press Embargo Lifted" },
                    { time: "10:30 AM", desc: "VIP Doors & Registration" },
                    { time: "11:00 AM", desc: "Holographic Keynote Reveal" },
                    { time: "12:30 PM", desc: "Interactive Demo Zone Open" },
                    { time: "02:00 PM", desc: "Media Syndication & Q&A" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-[9px] sm:text-[10px]">
                      <span className="font-mono font-bold text-orange-600 shrink-0">{item.time}</span>
                      <span className="w-full border-b border-dashed border-slate-300"></span>
                      <span className="font-bold text-slate-700 shrink-0">{item.desc}</span>
                    </div>
                  ))}
                </div>
                
                {/* SVG Signature doodle */}
                <svg className="w-16 h-8 absolute bottom-4 right-4 text-orange-500 opacity-60" viewBox="0 0 100 50">
                  <path d="M 10 30 Q 30 10 50 30 T 90 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </motion.div>

            </div>
          </div>

          {/* Right: Content */}
          <div className="col-span-1 lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 sm:space-y-8 text-slate-800"
            >
              <p className="text-base sm:text-lg leading-relaxed font-medium">
                Product launches are not just reveals; they are the physical manifestation of your innovation. A poorly executed reveal damages your market entry instantly, while a flawless one cements category leadership, drives pre-orders, and motivates developers. With our <strong className="text-orange-600 font-extrabold">expert launch production team</strong>, nothing is left to chance.
              </p>

              <p className="text-sm sm:text-base leading-relaxed">
                We handle the end-to-end lifecycle of product launch production. From holographic displays and complex lighting designs to global media syndication and minute-by-minute launch control. We anticipate the friction points before they happen, managing tech crews, journalists, and interactive demo areas behind the scenes so that when the curtain rises, your product commands absolute attention.
              </p>

              <p className="text-slate-700 text-xs sm:text-sm font-semibold italic border-l-2 border-orange-500 pl-4 bg-orange-50/50 py-2 pr-2">
                Whether you're launching a SaaS startup to global developers or revealing high-end consumer hardware to key retailers, we deliver the staging excellence that makes your product look unforgettable.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
