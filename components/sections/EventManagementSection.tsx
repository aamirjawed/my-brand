"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Star, Sparkles, Music, Crown } from "lucide-react";

export default function EventManagementSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="w-full px-6 lg:px-16 xl:px-24 max-w-[1400px] mx-auto">
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
                Event Management
                <span className="absolute -inset-1 rounded-full border border-slate-900 animate-ping opacity-20"></span>
              </div>
              
              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
                Unforgettable <span className="text-orange-600">Experiences</span>,<br />
                Executed flawlessly.<br />
                <span className="text-2xl sm:text-3xl text-slate-400 font-bold mt-2 block">Leave a lasting impression.</span>
              </h2>
              
              {/* Paragraph */}
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Great events don't just happen; they are meticulously engineered. From high-stakes corporate summits to massive product launches, we handle every microscopic detail so you don't have to. We don't just plan gatherings—we orchestrate immersive, seamless experiences that your attendees will talk about for years.
              </p>
              
              {/* Bullets */}
              <ul className="space-y-4 mb-10">
                {[
                  "End-to-end planning with flawless, stress-free execution",
                  "Immersive attendee experiences and high-impact engagement",
                  "Comprehensive logistics, venue, and vendor management"
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
                href="/events"
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-orange-600/20 group"
              >
                Plan Your Event
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Left Visual Content - The VIP Golden Ticket & Spotlight Metaphor */}
          <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[600px] flex items-center justify-center">
            
            {/* Massive Spotlight Beams (CSS Polygons) */}
            <div className="absolute inset-0 flex justify-center pointer-events-none opacity-60">
              {/* Left Spotlight */}
              <motion.div 
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-[10%] w-[150px] h-[150%] bg-gradient-to-b from-orange-200/40 via-orange-100/10 to-transparent origin-top"
                style={{ clipPath: "polygon(40% 0, 60% 0, 100% 100%, 0% 100%)", transform: "rotate(15deg)" }}
              ></motion.div>
              {/* Right Spotlight */}
              <motion.div 
                animate={{ rotate: [5, -5, 5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-[10%] w-[150px] h-[150%] bg-gradient-to-b from-yellow-200/40 via-yellow-100/10 to-transparent origin-top"
                style={{ clipPath: "polygon(40% 0, 60% 0, 100% 100%, 0% 100%)", transform: "rotate(-15deg)" }}
              ></motion.div>
            </div>

            {/* Confetti Particles */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div animate={{ y: [0, -20, 0], rotate: 360 }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-[20%] left-[20%] w-4 h-4 bg-orange-500 rounded-sm"></motion.div>
              <motion.div animate={{ y: [0, 30, 0], rotate: -360 }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-[40%] right-[15%] w-3 h-3 bg-slate-900 rounded-full"></motion.div>
              <motion.div animate={{ y: [0, -40, 0], rotate: 180 }} transition={{ duration: 6, repeat: Infinity }} className="absolute bottom-[30%] left-[30%] w-5 h-5 bg-yellow-400 rounded-sm"></motion.div>
            </div>

            {/* The Floating VIP Golden Ticket */}
            <motion.div 
              initial={{ scale: 0.5, opacity: 0, rotateY: 90 }}
              whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              className="relative z-20 flex items-center justify-center perspective-[1000px]"
            >
              <motion.div 
                animate={{ 
                  rotateX: [5, -5, 5],
                  rotateY: [-10, 10, -10],
                  y: [-10, 10, -10]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-[300px] h-[160px] sm:w-[400px] sm:h-[200px] bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-xl shadow-2xl flex items-center p-2 transform-style-3d border-[6px] border-orange-400"
                style={{
                  // Create the classic ticket side cutouts using mask-image
                  maskImage: "radial-gradient(circle at 0 50%, transparent 20px, black 21px), radial-gradient(circle at 100% 50%, transparent 20px, black 21px)",
                  WebkitMaskImage: "radial-gradient(circle at 0 50%, transparent 20px, black 21px), radial-gradient(circle at 100% 50%, transparent 20px, black 21px)",
                  WebkitMaskComposite: "source-in",
                  maskComposite: "intersect",
                }}
              >
                {/* Inner dashed border */}
                <div className="w-full h-full border-2 border-dashed border-orange-300/50 rounded-lg flex items-center">
                  
                  {/* Left Side: Crown & VIP text */}
                  <div className="w-[70%] h-full flex flex-col items-center justify-center border-r-2 border-dashed border-orange-300/50 relative overflow-hidden">
                    {/* Faint background star */}
                    <Star className="absolute w-48 h-48 text-orange-400/20 rotate-45" />
                    <Crown className="w-12 h-12 text-white mb-2" />
                    <span className="text-white font-black text-3xl sm:text-4xl tracking-widest drop-shadow-md">VIP PASS</span>
                    <span className="text-orange-200 text-xs sm:text-sm tracking-[0.3em] mt-1">ALL ACCESS</span>
                  </div>
                  
                  {/* Right Side: Stub Details */}
                  <div className="w-[30%] h-full flex flex-col items-center justify-center gap-3">
                    <span className="text-white font-bold text-lg rotate-90 tracking-widest opacity-80">ADMIT</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Music Note */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                animate={{ y: [-15, 15, -15], rotate: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute z-30 -top-[10%] -left-[5%] bg-slate-900 p-4 rounded-full shadow-2xl border-4 border-white"
              >
                <Music strokeWidth={2.5} className="w-8 h-8 text-orange-400" />
              </motion.div>

              {/* Floating Sparkles */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute z-30 -bottom-[15%] -right-[5%] bg-white p-4 rounded-full shadow-xl"
              >
                <Sparkles strokeWidth={2.5} className="w-10 h-10 text-orange-600" />
              </motion.div>

              {/* Diagonal "PREMIUM EXPERIENCE" Badge */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
                className="absolute top-[80%] left-1/2 -translate-x-1/2 bg-slate-900 text-white font-black text-xl sm:text-2xl tracking-widest px-8 py-3 transform rotate-[10deg] whitespace-nowrap flex items-center gap-3 border-[3px] border-white shadow-2xl rounded-sm z-40"
              >
                PREMIUM EXPERIENCE
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
