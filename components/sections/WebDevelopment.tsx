"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Gem, Sparkles, Rocket, Cpu } from "lucide-react";

export default function WebDevelopmentSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="w-full px-6 lg:px-16 xl:px-24 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Label */}
              <div className="inline-block bg-slate-900 text-white text-xs sm:text-sm font-bold tracking-widest uppercase py-2 px-5 rounded-full mb-6 relative shadow-lg">
                Web Development
                {/* Decorative pulse ring */}
                <span className="absolute -inset-1 rounded-full border border-slate-900 animate-ping opacity-20"></span>
              </div>
              
              {/* Headline - Completely Unique */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
                Digital <span className="text-orange-600">Masterpieces</span>,<br />
                Sculpted from scratch.<br />
                <span className="text-2xl sm:text-3xl text-slate-400 font-bold mt-2 block">No templates. No compromises.</span>
              </h2>
              
              {/* Paragraph - Completely Unique */}
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Your website is your ultimate digital flagship. We don't just build pages; we engineer immersive, high-performance web experiences that captivate your audience from the very first click. Ready to dominate your industry? We craft platforms that don't just look stunning, but act as relentless growth engines for your business.
              </p>
              
              {/* Bullets */}
              <ul className="space-y-4 mb-10">
                {[
                  "Deliver lightning-fast user experiences",
                  "Architected for absolute scalability",
                  "Transform casual visitors into brand advocates"
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
                href="/development"
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-orange-600/20 group"
              >
                Launch Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right Visual Content - Unique "Polished Gem/Rocket" Metaphor */}
          <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[600px] flex items-center justify-center">
            
            {/* Abstract Orbiting Rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] rounded-full border border-slate-100 border-dashed" style={{ transform: 'rotateX(60deg)' }}></div>
              <div className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full border-2 border-orange-100" style={{ transform: 'rotateX(60deg) rotateY(20deg)' }}></div>
            </motion.div>

            {/* Floating Sparkles (Magical/Polished Vibe) */}
            <motion.div 
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[15%] right-[25%] text-orange-400"
            >
              <Sparkles strokeWidth={1.5} className="w-12 h-12 fill-orange-100" />
            </motion.div>

            <motion.div 
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[25%] left-[15%] text-slate-300"
            >
              <Sparkles strokeWidth={1.5} className="w-8 h-8 fill-slate-50" />
            </motion.div>

            {/* The Giant Gem (Metaphor for "Sculpted from scratch, highly valuable") */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center"
            >
              <div className="relative">
                {/* Glowing background behind gem */}
                <div className="absolute inset-0 bg-orange-400 blur-3xl opacity-20 rounded-full scale-150"></div>
                
                <Gem strokeWidth={1} className="w-48 h-48 sm:w-64 sm:h-64 text-slate-900 drop-shadow-2xl relative z-10" />
                
                {/* Diagonal "FLAWLESS ARCHITECTURE" Badge */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-600 text-white font-black text-xl sm:text-2xl tracking-widest px-8 py-3 transform rotate-[15deg] whitespace-nowrap flex items-center gap-3 border-[3px] border-white shadow-2xl rounded-sm z-20"
                >
                  <Cpu className="w-6 h-6 text-white" />
                  FLAWLESS ARCHITECTURE
                </motion.div>
              </div>
            </motion.div>

            {/* Rocket emerging from bottom left (Metaphor for launch/speed) */}
            <motion.div 
              initial={{ x: -100, y: 100, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
              className="absolute bottom-[15%] left-[10%] text-slate-800 z-10"
            >
              <div className="relative">
                <Rocket strokeWidth={1.5} className="w-20 h-20 sm:w-28 sm:h-28 fill-slate-100 rotate-45" />
                {/* Rocket trail */}
                <motion.div 
                  animate={{ height: [0, 40, 0], opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute top-full left-1/4 w-2 bg-gradient-to-b from-orange-500 to-transparent rounded-full origin-top transform -rotate-45"
                ></motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
