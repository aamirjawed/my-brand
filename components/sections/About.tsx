"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-orange-600 font-bold tracking-widest text-xs sm:text-sm mb-4">LET'S KNOW ABOUT</h4>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tighter uppercase leading-[1.1]">
                Digital <span className="text-orange-600">Developer</span>
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl lg:max-w-xl">
                We are armed with a highly-efficient team that develops digital experiences essential for the growth of businesses. Our unique and reasonably priced approach to every client makes sure that all their business objectives and goals are achieved on time.
              </p>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl lg:max-w-xl">
                100s of clients from different parts of the world look forward to us when they want to enhance their business and customer reach.
              </p>
            </motion.div>
          </div>

          {/* Right Image Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full aspect-square max-w-[550px] mx-auto lg:ml-auto"
            >
              <Image 
                src="/images/about-hero.png" 
                alt="Digital Developer Team" 
                fill 
                className="object-contain hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
