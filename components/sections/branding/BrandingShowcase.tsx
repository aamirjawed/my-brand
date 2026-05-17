"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BrandingShowcase() {
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
            BUILD AN ICONIC BRAND IDENTITY THAT COMMANDS RESPECT AND DRIVES CUSTOMER LOYALTY
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Side: Brand Identity Visual */}
          <div className="col-span-1 lg:col-span-6 relative flex items-center justify-center min-h-[350px] sm:min-h-[460px] md:min-h-[500px]">
            <div className="absolute w-[80%] h-[80%] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

            <div className="relative w-full max-w-[550px] aspect-[4/3] z-10 overflow-visible flex items-center justify-center">

              {/* Back: Color Palette Card */}
              <motion.div
                initial={{ opacity: 0, x: -40, y: -20 }}
                whileInView={{ opacity: 1, x: -20, y: -20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="absolute top-[5%] left-[2%] w-[64%] aspect-[4/3] bg-white rounded-2xl p-5 shadow-2xl border-[3px] border-slate-100 z-10 flex flex-col group hover:-translate-y-2 transition-transform duration-500"
              >
                <div className="text-[8px] font-extrabold text-slate-500 uppercase tracking-widest mb-4">Brand Color System</div>
                <div className="grid grid-cols-5 gap-1.5 flex-1">
                  {[
                    { color: "#0f172a", label: "Primary" },
                    { color: "#ea580c", label: "Accent" },
                    { color: "#f8fafc", label: "Base" },
                    { color: "#64748b", label: "Muted" },
                    { color: "#fed7aa", label: "Warm" },
                  ].map((c, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <div className="w-full aspect-square rounded-lg border border-slate-200" style={{ background: c.color }}></div>
                      <span className="text-[5px] text-slate-400 font-bold uppercase">{c.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100 flex gap-2">
                  <div className="h-4 bg-slate-900 rounded flex-1 flex items-center justify-center">
                    <span className="text-[5px] text-white font-black tracking-widest">Aa</span>
                  </div>
                  <div className="h-4 bg-orange-600 rounded flex-1 flex items-center justify-center">
                    <span className="text-[5px] text-white font-black tracking-widest">Bb</span>
                  </div>
                </div>
              </motion.div>

              {/* Front: Logo Preview Card */}
              <motion.div
                initial={{ opacity: 0, x: 40, y: 20 }}
                whileInView={{ opacity: 1, x: 20, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-[2%] right-[2%] w-[60%] aspect-[16/10] bg-slate-950 rounded-2xl p-5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] border-[3px] border-slate-800 z-20 flex flex-col items-center justify-center group hover:-translate-y-2 transition-transform duration-500"
              >
                {/* Abstract Logo Mark */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 relative flex items-center justify-center">
                    <svg viewBox="0 0 40 40" className="w-full h-full">
                      <polygon points="20,4 36,14 36,26 20,36 4,26 4,14" fill="none" stroke="#ea580c" strokeWidth="2.5" />
                      <polygon points="20,10 30,16 30,24 20,30 10,24 10,16" fill="#ea580c" opacity="0.2" />
                      <circle cx="20" cy="20" r="4" fill="#ea580c" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-black text-sm tracking-widest uppercase">BRANDMARK</div>
                    <div className="text-slate-500 text-[6px] tracking-widest uppercase">Est. Identity Studio</div>
                  </div>
                </div>
                <div className="w-full h-px bg-slate-800 mb-3"></div>
                <div className="flex gap-2 w-full justify-center">
                  <div className="px-3 py-1 bg-orange-600 rounded text-white text-[6px] font-bold uppercase tracking-wider">Primary Logo</div>
                  <div className="px-3 py-1 bg-slate-800 rounded text-slate-400 text-[6px] font-bold uppercase tracking-wider">Monogram</div>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Right Side: Narrative */}
          <div className="col-span-1 lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 sm:space-y-8 text-slate-800"
            >
              <p className="text-base sm:text-lg leading-relaxed font-medium">
                In a saturated marketplace where customers scroll past hundreds of businesses daily, your brand identity is the single most powerful differentiator you possess. Without a strategically crafted visual system, even the best products get overlooked and forgotten. With our bespoke <strong className="text-orange-600 font-extrabold">branding and logo design services</strong>, we transform your vision into a visual language that customers immediately recognize, trust, and remember — across every platform and touchpoint imaginable.
              </p>

              <p className="text-sm sm:text-base leading-relaxed">
                Our brand strategists and visual designers work in deep collaboration to craft complete identity systems — from your primary logo mark and its monogram variations, to a comprehensive brand color palette, custom typography hierarchy, iconography libraries, and fully documented brand guidelines. Every element is designed with intentional psychological precision to communicate your brand's core values, personality, and positioning to your exact target audience at an instinctive, emotional level.
              </p>

              <p className="text-slate-700 text-xs sm:text-sm font-semibold italic border-l-2 border-orange-500 pl-4">
                So, stop competing on price alone — let your brand identity do the heavy lifting, charging premium rates and attracting clients who are proud to work with you.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
