"use client";

import React from "react";
import { motion } from "framer-motion";
import { Monitor, Tablet, Smartphone, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function CustomShowcase() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px]">

        {/* Section Heading */}
        <div className="w-full mb-16 border-l-4 border-orange-600 pl-4 sm:pl-6">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-orange-600 uppercase tracking-wider leading-[1.25]"
          >
            BUILD SUCCESS-DRIVEN WEBSITES WITH OUR CUSTOM DEVELOPMENT SERVICES
          </motion.h2>
        </div>

        {/* Grid Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Side: Overlapping Device Mockup */}
          <div className="col-span-1 lg:col-span-6 relative flex items-center justify-center min-h-[350px] sm:min-h-[460px] md:min-h-[500px]">
            <div className="absolute w-[80%] h-[80%] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

            <div className="relative w-full max-w-[550px] aspect-[4/3] z-10 flex items-center justify-start overflow-visible">

              {/* 1. LAPTOP MOCKUP */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="relative w-[75%] aspect-[16/10] bg-slate-900 rounded-[1.5rem] p-2.5 shadow-2xl border-[3px] border-slate-800/80 z-10 flex flex-col group hover:scale-[1.02] transition-transform duration-500"
              >
                <div className="relative flex-1 bg-white rounded-lg overflow-hidden flex flex-col border border-slate-950/20 select-none">
                  <div className="bg-slate-900 px-3 py-2 flex items-center justify-between border-b border-slate-100">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    </div>
                    <div className="text-[7px] text-white font-black tracking-widest uppercase">CUSTOM PORTAL</div>
                    <div className="flex gap-2">
                      <div className="w-3 h-1 bg-white/20 rounded-full"></div>
                      <div className="w-3 h-1 bg-white/20 rounded-full"></div>
                    </div>
                  </div>

                  <div className="flex-1 bg-slate-50 p-3 flex flex-col items-center justify-center text-center relative">
                    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:10px_10px]"></div>
                    <div className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[5px] font-bold text-orange-600 mb-1 z-10">
                      99.9%
                    </div>
                    <div className="text-[10px] sm:text-xs font-black text-slate-900 leading-tight mb-1 max-w-[120px] uppercase tracking-wide z-10">
                      Bespoke System
                    </div>
                    <div className="text-[6px] text-slate-500 font-bold uppercase tracking-widest mb-2 z-10">
                      Built For Business Scale
                    </div>
                    <div className="px-3 py-1 bg-orange-600 text-white rounded-full text-[5px] font-bold tracking-wider uppercase z-10 shadow-sm">
                      Access Database
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-[-16px] left-[5%] right-[5%] h-[12px] bg-slate-800 rounded-b-xl border-t border-slate-700/50 shadow-md flex items-center justify-center">
                  <div className="w-16 h-1 bg-slate-900 rounded-full"></div>
                </div>
              </motion.div>

              {/* 2. TABLET MOCKUP */}
              <motion.div
                initial={{ opacity: 0, x: 40, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute top-[8%] right-[5%] w-[38%] aspect-[3/4] bg-slate-900 rounded-[1.5rem] p-2 shadow-2xl border-[3px] border-slate-800/80 z-20 flex flex-col group hover:scale-[1.03] transition-transform duration-500"
              >
                <div className="flex-1 bg-slate-50 rounded-xl overflow-hidden flex flex-col border border-slate-950/20 select-none">
                  <div className="bg-slate-900 py-1.5 px-2.5 flex items-center justify-between border-b border-slate-100">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
                    <div className="text-[5px] text-white font-bold tracking-wider uppercase">CRM Sync</div>
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                  </div>

                  <div className="flex-1 p-2.5 flex flex-col justify-between">
                    <div className="flex flex-col items-center text-center">
                      <div className="text-[7px] font-black text-slate-900 uppercase leading-none mb-1">
                        API Data Pipeline
                      </div>
                      <div className="text-[4px] text-slate-400 font-bold uppercase tracking-wider mb-2">
                        Real-Time Integrations
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                      <div className="p-1 bg-white border border-slate-100 rounded-md flex flex-col items-center">
                        <div className="w-full aspect-square bg-slate-100 rounded mb-1"></div>
                        <div className="w-6 h-1 bg-slate-800 rounded-full mb-0.5"></div>
                      </div>
                      <div className="p-1 bg-white border border-slate-100 rounded-md flex flex-col items-center">
                        <div className="w-full aspect-square bg-slate-100 rounded mb-1"></div>
                        <div className="w-6 h-1 bg-slate-800 rounded-full mb-0.5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 3. MOBILE PHONE MOCKUP */}
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                className="absolute bottom-[-5%] right-[22%] w-[24%] aspect-[9/19] bg-slate-955 rounded-[1.8rem] p-1.5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border-[3px] border-slate-800/90 z-30 flex flex-col group hover:scale-[1.05] transition-transform duration-500"
              >
                <div className="flex-1 bg-white rounded-[1.3rem] overflow-hidden flex flex-col border border-slate-955/20 relative select-none">
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-2.5 bg-slate-950 rounded-full z-20" />
                  <div className="bg-slate-900 pt-5 pb-1 px-2.5 flex items-center justify-between border-b border-slate-100">
                    <div className="text-[4px] text-white font-bold tracking-wider uppercase">Mobile UX</div>
                    <div className="w-1.5 h-1 bg-white/20 rounded-full"></div>
                  </div>

                  <div className="flex-1 p-2 flex flex-col items-center justify-between text-center bg-slate-50">
                    <div className="flex flex-col items-center w-full mt-2">
                      <div className="text-[6px] font-black text-slate-900 leading-tight uppercase mb-0.5">
                        Fluid Layout
                      </div>
                    </div>
                    <div className="w-full bg-white border border-slate-100 rounded-lg p-1.5 flex flex-col items-center shadow-sm mb-1">
                      <div className="w-full h-10 bg-slate-100 rounded mb-1"></div>
                    </div>
                    <div className="w-full py-1 bg-orange-600 text-white rounded-md text-[4px] font-black uppercase tracking-widest">
                      Action Complete
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Right Side: Copywriting */}
          <div className="col-span-1 lg:col-span-6 flex flex-col justify-center text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 sm:space-y-8 text-slate-800"
            >
              <p className="text-base sm:text-lg leading-relaxed font-medium">
                Venturing into the digital space with a template can limit your brand identity, slow down loading speeds, and restrict database scalability. Standard web builders frequently cause security vulnerabilities, high bounce rates, and dynamic loading delays. With our premium <strong className="text-orange-600 font-extrabold">custom website development services</strong>, we design tailored website solutions engineered specifically around your corporate workflows, branding rules, and business requirements.
              </p>

              <p className="text-sm sm:text-base leading-relaxed">
                Our senior frontend engineers and custom software experts build responsive custom websites, robust database connectors, and clean next-generation codebases. By utilizing speed-driven static page rendering, API-first integrations, and strict technical SEO standards, we ensure your site achieves outstanding Lighthouse performance scores. Whether you need custom business websites, single page applications, or bespoke web portals, we complete the project with state-of-the-art visual excellence.
              </p>

              <p className="text-slate-700 text-xs sm:text-sm font-semibold italic border-l-2 border-orange-500 pl-4">
                Let us transform your vision into a unique, scalable, and conversion-focused web architecture that drives long-term business growth.
              </p>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
