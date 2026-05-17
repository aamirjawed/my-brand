"use client";

import React from "react";
import { motion } from "framer-motion";

export default function StaticShowcase() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px]">
        
        {/* Section Heading (Matching LandingShowcase pattern: orange bold uppercase) */}
        <div className="w-full mb-16 border-l-4 border-orange-600 pl-4 sm:pl-6">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-orange-600 uppercase tracking-wider leading-[1.25]"
          >
            DELIVER LIGHTNING-FAST EXPERIENCES WITH OUR PRE-COMPILED STATIC ARCHITECTURE
          </motion.h2>
        </div>

        {/* Grid Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Distinct Visual Design (Code Window overlapping Browser) */}
          <div className="col-span-1 lg:col-span-6 relative flex items-center justify-center min-h-[350px] sm:min-h-[460px] md:min-h-[500px]">
            
            {/* Ambient Background Glow */}
            <div className="absolute w-[80%] h-[80%] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

            <div className="relative w-full max-w-[550px] aspect-[4/3] z-10 flex items-center justify-center overflow-visible">

              {/* Back Element: Code Terminal */}
              <motion.div
                initial={{ opacity: 0, x: -40, y: -20 }}
                whileInView={{ opacity: 1, x: -20, y: -20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="absolute top-[10%] left-[5%] w-[65%] aspect-[4/3] bg-slate-900 rounded-2xl p-4 shadow-2xl border-[3px] border-slate-800 z-10 flex flex-col group hover:-translate-y-2 transition-transform duration-500"
              >
                {/* Terminal Header */}
                <div className="flex gap-1.5 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                {/* Mock Code */}
                <div className="flex-1 font-mono text-[8px] sm:text-[10px] text-slate-400 leading-relaxed overflow-hidden">
                  <p><span className="text-orange-400">import</span> {"{ generateStaticParams }"} <span className="text-orange-400">from</span> 'next';</p>
                  <p className="mt-2"><span className="text-blue-400">export async function</span> build() {"{"}</p>
                  <p className="pl-4">console.log(<span className="text-green-400">'Compiling HTML...'</span>);</p>
                  <p className="pl-4">await generateStaticAssets();</p>
                  <p>{"}"}</p>
                  <p className="mt-4 text-emerald-400 animate-pulse">&gt; Build successful in 1.2s</p>
                </div>
              </motion.div>

              {/* Front Element: Lightning Fast Browser View */}
              <motion.div
                initial={{ opacity: 0, x: 40, y: 20 }}
                whileInView={{ opacity: 1, x: 20, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-[5%] right-[5%] w-[70%] aspect-[16/10] bg-white rounded-2xl p-1 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border-[3px] border-slate-100 z-20 flex flex-col group hover:-translate-y-2 transition-transform duration-500"
              >
                {/* Browser Header */}
                <div className="bg-slate-100 px-3 py-2 flex items-center justify-between rounded-t-xl border-b border-slate-200">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                  </div>
                  <div className="text-[6px] font-bold text-slate-500 uppercase tracking-widest bg-white px-4 py-1 rounded-full shadow-sm">
                    0ms Load Time
                  </div>
                </div>
                {/* Browser Content */}
                <div className="flex-1 bg-slate-50 rounded-b-xl p-4 flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-bl-full"></div>
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-black text-[8px] mb-3 shadow-inner">
                    100
                  </div>
                  <div className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-2">Perfect Score</div>
                  <div className="w-full max-w-[120px] h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-emerald-500"></div>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>

          {/* Right Side: Sophisticated Narrative & Copywriting (Matching LandingShowcase) */}
          <div className="col-span-1 lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 sm:space-y-8 text-slate-800"
            >
              <p className="text-base sm:text-lg leading-relaxed font-medium">
                Running a dynamic database-driven website comes with massive overhead, constant security patching, and slow server response times. Your brand could face severe drop-offs in traffic and SEO penalties without a highly optimized architecture. With our custom <strong className="text-orange-600 font-extrabold">static website development services</strong>, we eliminate database lag. We can be relied upon to provide impenetrable, hyper-fast experiences because we use state-of-the-art JAMstack technologies.
              </p>

              <p className="text-sm sm:text-base leading-relaxed">
                Our in-house engineering team pre-compiles your entire website into raw, highly-optimized HTML and CSS files, deploying them directly to global edge networks. This means your site loads instantly for users anywhere in the world, boasts a 100% perfect Lighthouse performance score, and is completely immune to traditional database hacking attempts. 
              </p>
              
              <p className="text-slate-700 text-xs sm:text-sm font-semibold italic border-l-2 border-orange-500 pl-4">
                So, ensure your digital presence is unbreakable and delivers instantaneous rendering speeds to keep your audience engaged and your search rankings at the absolute top.
              </p>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
