"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Target, TrendingUp, Search, BarChart3 } from "lucide-react";

export default function SeoSection() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="w-full px-6 lg:px-16 xl:px-24 max-w-[1400px] mx-auto">
        {/* Notice lg:flex-row to keep design on the right side */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Label */}
              <div className="inline-block bg-orange-600 text-white text-xs sm:text-sm font-bold tracking-widest uppercase py-2 px-5 rounded-full mb-6 relative shadow-lg">
                Search Engine Optimization
                {/* Decorative pulse ring */}
                <span className="absolute -inset-1 rounded-full border border-orange-600 animate-ping opacity-20"></span>
              </div>
              
              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
                Unfair <span className="text-orange-600">Visibility</span>,<br />
                Engineered to rank.<br />
                <span className="text-2xl sm:text-3xl text-slate-400 font-bold mt-2 block">Outsmart the competition.</span>
              </h2>
              
              {/* Paragraph */}
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Having a beautiful website is pointless if no one can find it. Our data-driven SEO strategies don't just chase algorithms; they capture high-intent traffic ready to convert. We dominate search results, putting your brand exactly where it needs to be: at the absolute top.
              </p>
              
              {/* Bullets */}
              <ul className="space-y-4 mb-10">
                {[
                  "Capture high-intent organic traffic",
                  "Outrank industry competitors",
                  "Drive sustainable, long-term ROI"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                    className="flex items-center gap-3 text-slate-700 font-medium"
                  >
                    <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <Link 
                href="/seo"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-xl group"
              >
                Boost Your Traffic
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right Visual Content - SEO Metaphor (Target, Charts, Search) */}
          <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[600px] flex items-center justify-center">
            
            {/* Glowing background */}
            <div className="absolute inset-0 bg-orange-100 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>

            {/* Radar Sweeping Animation Background */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none"
            >
              <div className="w-[300px] h-[300px] sm:w-[480px] sm:h-[480px] rounded-full border border-slate-900 relative shrink-0" style={{ background: 'conic-gradient(from 0deg, transparent 70%, #0f172a 100%)' }}></div>
            </motion.div>
 
            {/* Floating Search Icon */}
            <motion.div 
              animate={{ y: [-15, 15, -15], x: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[10%] right-[15%] text-slate-900 bg-white p-4 rounded-2xl shadow-xl z-30"
            >
              <Search strokeWidth={2} className="w-10 h-10 text-orange-600" />
            </motion.div>
 
            {/* Floating Chart Icon */}
            <motion.div 
              animate={{ y: [15, -15, 15] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[20%] left-[10%] bg-white p-5 rounded-3xl shadow-2xl z-30"
            >
              <BarChart3 strokeWidth={2} className="w-12 h-12 text-slate-900" />
              {/* Animated chart bars inside */}
              <div className="flex gap-1 mt-3 items-end h-8">
                <motion.div animate={{ height: ["30%", "70%", "30%"] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 bg-orange-200 rounded-t-sm"></motion.div>
                <motion.div animate={{ height: ["50%", "90%", "50%"] }} transition={{ duration: 2.5, repeat: Infinity }} className="w-2 bg-orange-400 rounded-t-sm"></motion.div>
                <motion.div animate={{ height: ["40%", "100%", "40%"] }} transition={{ duration: 2.2, repeat: Infinity }} className="w-2 bg-orange-600 rounded-t-sm"></motion.div>
              </div>
            </motion.div>
 
            {/* The Giant Target (Bullseye) */}
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative z-20 flex items-center justify-center shrink-0"
            >
              <div className="w-[240px] h-[240px] sm:w-[350px] sm:h-[350px] shrink-0 rounded-full border-[15px] border-slate-100 flex items-center justify-center shadow-inner bg-white">
                <div className="w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] shrink-0 rounded-full border-[15px] border-slate-200 flex items-center justify-center">
                  <div className="w-[110px] h-[110px] sm:w-[150px] sm:h-[150px] shrink-0 rounded-full bg-orange-600 shadow-2xl flex items-center justify-center">
                    <Target className="w-12 h-12 sm:w-16 sm:h-16 text-white opacity-80" />
                  </div>
                </div>
              </div>
              
              {/* Arrow/Trending Icon piercing the target */}
              <motion.div 
                initial={{ x: -100, y: 100, opacity: 0 }}
                whileInView={{ x: -20, y: 20, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
                className="absolute z-30"
              >
                <TrendingUp strokeWidth={2.5} className="w-24 h-24 sm:w-32 sm:h-32 text-slate-900 drop-shadow-2xl" />
              </motion.div>
              
              {/* Diagonal "PAGE ONE DOMINANCE" Badge */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 text-white font-black text-xl sm:text-2xl tracking-widest px-8 py-3 transform rotate-[10deg] whitespace-nowrap flex items-center gap-3 border-[3px] border-white shadow-2xl rounded-sm z-40"
              >
                PAGE ONE DOMINANCE
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
