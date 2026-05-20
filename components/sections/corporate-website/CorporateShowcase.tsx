"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, ShieldAlert, Cpu, Database } from "lucide-react";

export default function CorporateShowcase() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* H2 Title */}
        <div className="w-full mb-16 border-l-4 border-orange-600 pl-4 sm:pl-6">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-orange-600 uppercase tracking-wider leading-[1.25]"
          >
            Why Businesses Need Professional Corporate Websites
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Enterprise architecture diagram mockup */}
          <div className="col-span-1 lg:col-span-6 relative flex items-center justify-center min-h-[350px] sm:min-h-[460px]">
            <div className="absolute w-[80%] h-[80%] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

            <div className="relative w-full max-w-[550px] aspect-[4/3] z-10 flex items-center justify-center">
              {/* Box 1: Multi-regional Database */}
              <motion.div
                initial={{ opacity: 0, x: -40, y: -20 }}
                whileInView={{ opacity: 1, x: -20, y: -20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="absolute top-[8%] left-[4%] w-[60%] bg-slate-950 rounded-2xl p-5 border-[3px] border-slate-800 shadow-2xl flex flex-col group hover:-translate-y-2 transition-transform duration-500 text-left"
              >
                <div className="flex gap-1.5 mb-4 items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
                  <span className="text-[9px] text-slate-400 font-mono">multi-regional-db.config</span>
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex items-center justify-between text-[9px] text-slate-400 font-semibold border-b border-slate-800 pb-1.5">
                    <span className="flex items-center gap-1"><Database className="w-3.5 h-3.5 text-orange-500" /> Database Clustering</span>
                    <span className="text-emerald-400">ACTIVE</span>
                  </div>
                  <div className="text-[8px] font-mono text-slate-500 leading-normal space-y-1">
                    <p>Replica 1 (US-East): <span className="text-emerald-400">0ms Sync</span></p>
                    <p>Replica 2 (EU-West): <span className="text-emerald-400">2ms Sync</span></p>
                    <p>Replica 3 (AP-South): <span className="text-emerald-400">1ms Sync</span></p>
                  </div>
                </div>
              </motion.div>

              {/* Box 2: Enterprise API Gateway */}
              <motion.div
                initial={{ opacity: 0, x: 40, y: 20 }}
                whileInView={{ opacity: 1, x: 20, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-[8%] right-[4%] w-[60%] bg-slate-50 rounded-2xl p-5 border-[3px] border-slate-200 shadow-2xl flex flex-col group hover:-translate-y-2 transition-transform duration-500 text-left"
              >
                <div className="flex gap-1.5 mb-4 items-center">
                  <ShieldAlert className="w-4 h-4 text-orange-600" />
                  <span className="text-[9px] text-slate-900 font-black tracking-widest uppercase">Security Firewall Active</span>
                </div>
                <div className="space-y-2 flex-1">
                  <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-orange-500 h-full w-[94%]" />
                  </div>
                  <div className="flex items-center justify-between text-[8px] text-slate-500 font-bold uppercase tracking-wider">
                    <span>Threat Detection Rate</span>
                    <span className="text-slate-900">99.98%</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-2">
                    <Globe className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-[7.5px] text-slate-400 font-mono">edge-dns: cloudflare-enterprise</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: Copywriting text block */}
          <div className="col-span-1 lg:col-span-6 flex flex-col justify-center text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 sm:space-y-8 text-slate-800"
            >
              <p className="text-base sm:text-lg leading-relaxed font-medium">
                In today's landscape, a solid <strong className="text-orange-600 font-extrabold">online presence</strong> is the absolute foundation of <strong className="text-slate-900 font-extrabold">brand credibility</strong> and successful <strong className="text-slate-900 font-extrabold">digital branding</strong>. A professional corporate website serves as a company's main hub, built with a <strong className="text-orange-600 font-extrabold">conversion-focused design</strong> and optimized <strong className="text-slate-900 font-extrabold">user experience</strong> to convert traffic into real <strong className="text-orange-600 font-extrabold">business growth</strong>.
              </p>

              <p className="text-sm sm:text-base leading-relaxed">
                By focusing on mobile-first <strong className="text-slate-900 font-extrabold">responsive design</strong> and top-tier <strong className="text-slate-900 font-extrabold">website performance</strong>, organizations establish channels that guarantee long-term <strong className="text-orange-600 font-extrabold">business scalability</strong>. Our custom web solutions integrate robust <strong className="text-slate-900 font-extrabold">technical SEO</strong> and clean code hierarchies to keep your platform ranking at the top of search indexes.
              </p>

              <p className="text-slate-700 text-xs sm:text-sm font-semibold italic border-l-2 border-orange-500 pl-4">
                Want to see our custom designs in action? Explore our success stories on the <a href="/blog/sports-event-planning-checklist" className="text-orange-600 underline font-semibold hover:text-orange-500">Sports Event Planning Checklist</a> to see how coordination and scalability are handled.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
