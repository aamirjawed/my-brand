"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Megaphone, Heart, MessageCircle, Video, PlayCircle } from "lucide-react";

export default function ContentCreationSection() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="w-full px-6 lg:px-16 xl:px-24 max-w-[1400px] mx-auto">
        {/* Notice lg:flex-row to keep design on the right side (zigzag pattern) */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left Content (Text) */}
          <div className="w-full lg:w-1/2 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Label */}
              <div className="inline-block bg-orange-600 text-white text-xs sm:text-sm font-bold tracking-widest uppercase py-2 px-5 rounded-full mb-6 relative shadow-lg">
                Content Creation
                {/* Decorative pulse ring */}
                <span className="absolute -inset-1 rounded-full border border-orange-600 animate-ping opacity-20"></span>
              </div>
              
              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
                Compelling <span className="text-orange-600">Narratives</span>,<br />
                Crafted to convert.<br />
                <span className="text-2xl sm:text-3xl text-slate-400 font-bold mt-2 block">Don't just speak. Resonate.</span>
              </h2>
              
              {/* Paragraph */}
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Content isn't just filler; it's the heartbeat of your brand. We craft magnetic, high-impact content that stops scrollers in their tracks and speaks directly to your audience's deepest desires. From persuasive copywriting to engaging video scripts, we build narratives that don't just get views—they drive relentless action.
              </p>
              
              {/* Bullets */}
              <ul className="space-y-4 mb-10">
                {[
                  "Stop the scroll with magnetic storytelling",
                  "Build authentic, lasting connections with your audience",
                  "Turn passive readers into highly active buyers"
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
                href="/content"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-xl group"
              >
                Amplify Your Voice
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right Visual Content - Content Creation Metaphor (Megaphone & Engagement) */}
          <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[600px] flex items-center justify-center">
            
            {/* Soft glowing background focus */}
            <div className="absolute inset-0 bg-slate-200 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>

            {/* Soundwave/Broadcast Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-[20%] -translate-y-1/2 flex items-center justify-center">
              <motion.div 
                animate={{ scale: [1, 1.5, 2], opacity: [0.8, 0.3, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                className="absolute w-40 h-40 rounded-full border-[8px] border-orange-500"
              ></motion.div>
              <motion.div 
                animate={{ scale: [1, 1.5, 2], opacity: [0.8, 0.3, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0.8 }}
                className="absolute w-40 h-40 rounded-full border-[8px] border-orange-400"
              ></motion.div>
              <motion.div 
                animate={{ scale: [1, 1.5, 2], opacity: [0.8, 0.3, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 1.6 }}
                className="absolute w-40 h-40 rounded-full border-[8px] border-orange-300"
              ></motion.div>
            </div>

            {/* The Giant Megaphone */}
            <motion.div 
              initial={{ scale: 0.5, opacity: 0, rotate: 20 }}
              whileInView={{ scale: 1, opacity: 1, rotate: -15 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative z-20"
            >
              <Megaphone strokeWidth={1} className="w-48 h-48 sm:w-64 sm:h-64 text-slate-900 drop-shadow-2xl fill-white" />
              
              {/* Diagonal "VIRAL STORYTELLING" Badge */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
                className="absolute top-[80%] left-[65%] sm:left-[80%] -translate-x-1/2 -translate-y-1/2 bg-orange-600 text-white font-black text-sm sm:text-2xl tracking-wider sm:tracking-widest px-5 sm:px-8 py-2 sm:py-3 transform -rotate-[10deg] whitespace-nowrap flex items-center gap-3 border-[3px] border-white shadow-2xl rounded-sm z-40"
              >
                VIRAL STORYTELLING
              </motion.div>
            </motion.div>

            {/* Floating Like/Heart Icon */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              animate={{ y: [-10, 10, -10] }}
              className="absolute z-30 top-[15%] right-[20%] bg-rose-500 p-4 rounded-full shadow-xl border-4 border-white"
            >
              <Heart strokeWidth={2.5} className="w-8 h-8 text-white fill-white" />
            </motion.div>

            {/* Floating Comment Icon */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              animate={{ y: [10, -10, 10] }}
              className="absolute z-30 bottom-[20%] left-[10%] bg-blue-500 p-4 rounded-2xl shadow-xl border-4 border-white rounded-bl-none"
            >
              <MessageCircle strokeWidth={2.5} className="w-10 h-10 text-white fill-white" />
            </motion.div>

            {/* Floating Play/Video Icon */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              animate={{ scale: [1, 1.1, 1] }}
              className="absolute z-30 top-[40%] right-[5%] bg-slate-900 p-4 rounded-xl shadow-xl border-4 border-white"
            >
              <PlayCircle strokeWidth={2} className="w-8 h-8 text-white" />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
