"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Monitor, Tablet, Smartphone } from "lucide-react";

export default function LandingShowcase() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px]">

        {/* Section Heading (Matching screenshot: orange bold uppercase) */}
        <div className="w-full mb-16 border-l-4 border-orange-600 pl-4 sm:pl-6">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-orange-600 uppercase tracking-wider leading-[1.25]"
          >
            BUILD SUCCESS-DRIVEN LANDING PAGES WITH OUR STATE-OF-THE-ART CONVERSION SERVICES
          </motion.h2>
        </div>

        {/* Grid Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Side: Dynamic Overlapping Device Mockup (MacBook, Tablet, Mobile) */}
          <div className="col-span-1 lg:col-span-6 relative flex items-center justify-center min-h-[350px] sm:min-h-[460px] md:min-h-[500px]">

            {/* Ambient Background Glow */}
            <div className="absolute w-[80%] h-[80%] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

            <div className="relative w-full max-w-[550px] aspect-[4/3] z-10 flex items-center justify-start overflow-visible">

              {/* 1. LAPTOP MOCKUP (MacBook Pro style) */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="relative w-[75%] aspect-[16/10] bg-slate-900 rounded-[1.5rem] p-2.5 shadow-2xl border-[3px] border-slate-800/80 z-10 flex flex-col group hover:scale-[1.02] transition-transform duration-500"
              >
                {/* Screen Inner Frame */}
                <div className="relative flex-1 bg-white rounded-lg overflow-hidden flex flex-col border border-slate-950/20 select-none">
                  {/* Laptop Mini Webpage Mockup */}
                  <div className="bg-slate-900 px-3 py-2 flex items-center justify-between border-b border-slate-100">
                    {/* Browser Dots */}
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    </div>
                    {/* Mini Brand Title */}
                    <div className="text-[7px] text-white font-black tracking-widest uppercase">ACME CORPS</div>
                    {/* Mini Nav Bar links */}
                    <div className="flex gap-2">
                      <div className="w-3 h-1 bg-white/20 rounded-full"></div>
                      <div className="w-3 h-1 bg-white/20 rounded-full"></div>
                      <div className="w-3 h-1 bg-white/20 rounded-full"></div>
                    </div>
                  </div>

                  {/* Mockup Webpage Hero */}
                  <div className="flex-1 bg-slate-50 p-3 flex flex-col items-center justify-center text-center relative">
                    {/* Background Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:10px_10px]"></div>
                    {/* Tiny Google Badge & Review badge */}
                    <div className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[5px] font-bold text-orange-600 mb-1 z-10">
                      ★ ★ ★
                    </div>
                    {/* Mini Title */}
                    <div className="text-[10px] sm:text-xs font-black text-slate-900 leading-tight mb-1 max-w-[120px] uppercase tracking-wide z-10">
                      ACME CORPS
                    </div>
                    {/* Mini Tag */}
                    <div className="text-[6px] text-slate-500 font-bold uppercase tracking-widest mb-2 z-10">
                      FAMILY-OWNED & OPERATED
                    </div>
                    {/* Mini CTA button */}
                    <div className="px-3 py-1 bg-orange-600 text-white rounded-full text-[5px] font-bold tracking-wider uppercase z-10 shadow-sm shadow-orange-600/30">
                      Shop Products
                    </div>
                  </div>
                </div>

                {/* Laptop Hinge Base Notch */}
                <div className="absolute bottom-[-16px] left-[5%] right-[5%] h-[12px] bg-slate-800 rounded-b-xl border-t border-slate-700/50 shadow-md flex items-center justify-center">
                  <div className="w-16 h-1 bg-slate-900 rounded-full"></div>
                </div>
              </motion.div>

              {/* 2. TABLET MOCKUP (iPad Pro style) */}
              <motion.div
                initial={{ opacity: 0, x: 40, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute top-[8%] right-[5%] w-[38%] aspect-[3/4] bg-slate-900 rounded-[1.5rem] p-2 shadow-2xl border-[3px] border-slate-800/80 z-20 flex flex-col group hover:scale-[1.03] transition-transform duration-500"
              >
                {/* Screen Inner Frame */}
                <div className="flex-1 bg-slate-50 rounded-xl overflow-hidden flex flex-col border border-slate-950/20 select-none">
                  {/* Tablet Webpage Mockup */}
                  <div className="bg-slate-900 py-1.5 px-2.5 flex items-center justify-between border-b border-slate-100">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
                    <div className="text-[5px] text-white font-bold tracking-wider uppercase">ACME CORPS</div>
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                  </div>

                  {/* Tablet Content */}
                  <div className="flex-1 p-2.5 flex flex-col justify-between">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-5 h-5 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[4px] font-black text-slate-800 mb-1">
                        ★ ★ ★
                      </div>
                      <div className="text-[7px] font-black text-slate-900 uppercase leading-none mb-1">
                        ACME CORPS
                      </div>
                      <div className="text-[4px] text-slate-400 font-bold uppercase tracking-wider mb-2">
                        FAMILY-OWNED & OPERATED
                      </div>
                    </div>
                    {/* Mock product grid */}
                    <div className="grid grid-cols-2 gap-1.5">
                      <div className="p-1 bg-white border border-slate-100 rounded-md flex flex-col items-center">
                        <div className="w-full aspect-square bg-slate-100 rounded mb-1"></div>
                        <div className="w-6 h-1 bg-slate-800 rounded-full mb-0.5"></div>
                        <div className="w-4 h-0.5 bg-slate-300 rounded-full"></div>
                      </div>
                      <div className="p-1 bg-white border border-slate-100 rounded-md flex flex-col items-center">
                        <div className="w-full aspect-square bg-slate-100 rounded mb-1"></div>
                        <div className="w-6 h-1 bg-slate-800 rounded-full mb-0.5"></div>
                        <div className="w-4 h-0.5 bg-slate-300 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 3. MOBILE PHONE MOCKUP (iPhone style) */}
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                className="absolute bottom-[-5%] right-[22%] w-[24%] aspect-[9/19] bg-slate-950 rounded-[1.8rem] p-1.5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border-[3px] border-slate-800/90 z-30 flex flex-col group hover:scale-[1.05] transition-transform duration-500"
              >
                {/* Screen Inner Frame */}
                <div className="flex-1 bg-white rounded-[1.3rem] overflow-hidden flex flex-col border border-slate-950/20 relative select-none">
                  {/* Dynamic Island/Speaker Notch */}
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-2.5 bg-slate-950 rounded-full z-20 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-slate-800 ml-3"></div>
                  </div>

                  {/* Webpage Header */}
                  <div className="bg-slate-900 pt-5 pb-1 px-2.5 flex items-center justify-between border-b border-slate-100">
                    <div className="text-[4px] text-white font-bold tracking-wider uppercase">ACME CORPS</div>
                    <div className="flex gap-0.5">
                      <div className="w-1.5 h-1 bg-white/20 rounded-full"></div>
                      <div className="w-1.5 h-1 bg-white/20 rounded-full"></div>
                    </div>
                  </div>

                  {/* Webpage Body */}
                  <div className="flex-1 p-2 flex flex-col items-center justify-between text-center bg-slate-50">
                    <div className="flex flex-col items-center w-full mt-2">
                      {/* Google reviews seal */}
                      <div className="w-4 h-4 rounded-full bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center text-[2px] font-bold text-orange-600 scale-90 mb-1">
                        <span>Google</span>
                        <span>★★★★★</span>
                      </div>
                      <div className="text-[6px] font-black text-slate-900 leading-tight uppercase max-w-[50px] mb-0.5">
                        ACME CORPS
                      </div>
                      <div className="text-[3px] text-slate-400 font-bold uppercase tracking-wider mb-2">
                        FAMILY-OWNED & OPERATED
                      </div>
                    </div>

                    {/* Single featured card */}
                    <div className="w-full bg-white border border-slate-100 rounded-lg p-1.5 flex flex-col items-center shadow-sm mb-1">
                      <div className="w-full h-10 bg-slate-100 rounded mb-1"></div>
                      <div className="w-8 h-1 bg-slate-800 rounded-full mb-0.5"></div>
                      <div className="w-6 h-0.5 bg-slate-300 rounded-full"></div>
                    </div>

                    {/* Floating call action */}
                    <div className="w-full py-1 bg-orange-600 text-white rounded-md text-[4px] font-black uppercase tracking-widest shadow-sm">
                      Call To Shop
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>

          {/* Right Side: Sophisticated Narrative & Copywriting */}
          <div className="col-span-1 lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 sm:space-y-8 text-slate-800"
            >
              <p className="text-base sm:text-lg leading-relaxed font-medium">
                Stepping foot into the digital marketing space comes with a lot of tension involved in planning your advertising campaigns, launching them online, and securely monitoring conversion revenue. Your marketing business could face serious financial leaks and poor user retention without qualified landing page developers, resulting in wasted ad-spend and lost growth. With our custom <strong className="text-orange-600 font-extrabold">landing page development services</strong>, we want to relieve your burden. We can be relied upon to provide top-notch, highly converting experiences because we are at the absolute forefront of web design.
              </p>

              <p className="text-sm sm:text-base leading-relaxed">
                Our in-house design professionals can provide customized layouts and strategic copywriting using the newest web technologies and optimization techniques. We build lightning-fast loading speeds, interactive conversion sandboxes, and psychological layout threads that lead your audience straight to the purchase form. Whether a brilliant idea or a billion-dollar scaling project, we complete the task with state-of-the-art premium quality.
              </p>

              <p className="text-slate-700 text-xs sm:text-sm font-semibold italic border-l-2 border-orange-500 pl-4">
                So, make sure that your eCommerce campaigns stand out from the competition and are compelling enough to turn casual scrollers into highly active buyers with us.
              </p>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
