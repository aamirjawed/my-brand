"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Palette, PenTool, Layers, Image as ImageIcon } from "lucide-react";

export default function GraphicDesignSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="w-full px-6 lg:px-16 xl:px-24 max-w-[1400px] mx-auto">
        {/* Notice lg:flex-row-reverse to keep design on the left side (zigzag pattern) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
          
          {/* Right Content (Text) */}
          <div className="w-full lg:w-1/2 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Label */}
              <div className="inline-block bg-slate-900 text-white text-xs sm:text-sm font-bold tracking-widest uppercase py-2 px-5 rounded-full mb-6 relative shadow-lg">
                Graphic Design & Branding
                {/* Decorative pulse ring */}
                <span className="absolute -inset-1 rounded-full border border-slate-900 animate-ping opacity-20"></span>
              </div>
              
              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
                Visual <span className="text-orange-600">Identity</span>,<br />
                Crafted to captivate.<br />
                <span className="text-2xl sm:text-3xl text-slate-400 font-bold mt-2 block">Make them stare.</span>
              </h2>
              
              {/* Paragraph */}
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                In a crowded digital world, average design gets instantly ignored. Your brand's visual identity needs to immediately communicate trust, premium value, and unique personality. From striking logos to comprehensive brand guidelines, we design stunning visual assets that make your business utterly impossible to forget.
              </p>
              
              {/* Bullets */}
              <ul className="space-y-4 mb-10">
                {[
                  "Establish instant brand authority and trust",
                  "Ensure a cohesive visual identity across all platforms",
                  "Stand out effortlessly in highly competitive markets"
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
                href="/design"
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-orange-600/20 group"
              >
                Explore Design Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Left Visual Content - Graphic Design Metaphor (Palette, Colors, Pen Tool) */}
          <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[600px] flex items-center justify-center">
            
            {/* Color Theory Overlapping Blobs (Representing creativity and blending) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-multiply opacity-60">
              <motion.div 
                animate={{ x: [-20, 20, -20], y: [-20, 20, -20] }} 
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} 
                className="absolute w-[250px] h-[250px] bg-orange-400 rounded-full blur-3xl -translate-x-16 -translate-y-16"
              ></motion.div>
              <motion.div 
                animate={{ x: [20, -20, 20], y: [20, -20, 20] }} 
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} 
                className="absolute w-[250px] h-[250px] bg-yellow-300 rounded-full blur-3xl translate-x-16 translate-y-16"
              ></motion.div>
            </div>

            {/* The Canvas / Artboard */}
            <motion.div 
              initial={{ scale: 0.5, opacity: 0, rotate: -5 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative z-20 w-[280px] h-[350px] sm:w-[350px] sm:h-[450px] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden"
            >
              {/* Fake UI Toolbar */}
              <div className="w-full h-12 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="h-4 w-px bg-slate-200"></div>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded bg-slate-200"></div>
                  <div className="w-6 h-6 rounded bg-slate-200"></div>
                </div>
              </div>

              {/* Canvas Area with Giant Palette */}
              <div className="flex-grow flex items-center justify-center relative overflow-hidden bg-slate-50/50">
                {/* Decorative Grid */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                
                <Palette strokeWidth={1.5} className="w-32 h-32 sm:w-48 sm:h-48 text-orange-600 drop-shadow-xl relative z-10" />
              </div>
            </motion.div>
            
            {/* Floating Pen Tool */}
            <motion.div 
              initial={{ x: -100, y: 100, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
              className="absolute z-30 bottom-[15%] right-[25%] bg-slate-900 p-4 rounded-full shadow-2xl"
            >
              <PenTool strokeWidth={2} className="w-10 h-10 text-white" />
            </motion.div>

            {/* Floating Layers Icon */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute z-30 top-[20%] left-[10%] bg-white p-3 rounded-xl shadow-xl border border-slate-100"
            >
              <Layers strokeWidth={2} className="w-8 h-8 text-orange-500" />
            </motion.div>

            {/* Floating Image/Asset Icon */}
            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute z-30 top-[10%] right-[10%] bg-white p-3 rounded-xl shadow-xl border border-slate-100"
            >
              <ImageIcon strokeWidth={2} className="w-8 h-8 text-slate-800" />
            </motion.div>

            {/* Diagonal "VISUAL BRILLIANCE" Badge */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-600 text-white font-black text-xl sm:text-2xl tracking-widest px-8 py-3 transform -rotate-[15deg] whitespace-nowrap flex items-center gap-3 border-[3px] border-white shadow-2xl rounded-sm z-40"
            >
              VISUAL BRILLIANCE
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
