"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Mouse position relative to center of the element (-1 to 1)
    const x = (e.clientX - rect.left - width / 2) / (width / 2);
    const y = (e.clientY - rect.top - height / 2) / (height / 2);
    
    // Max rotation of 15 degrees. Invert Y for correct tilt direction.
    setRotateX(-y * 15);
    setRotateY(x * 15);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="w-full px-6 lg:px-16 xl:px-24 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
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

          {/* Right Image Content - CSS Blob Composition with 3D Tilt */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative" style={{ perspective: 1200 }}>
            <motion.div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              animate={{ rotateX, rotateY }}
              viewport={{ once: true }}
              transition={{ 
                rotateX: { type: "spring", stiffness: 300, damping: 30, mass: 0.5 },
                rotateY: { type: "spring", stiffness: 300, damping: 30, mass: 0.5 },
                default: { duration: 0.6, delay: 0.2 } 
              }}
              className="relative w-full aspect-square max-w-[500px]"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Background Theme-Matched Blob */}
              <div 
                className="absolute inset-0 bg-orange-600 translate-x-4 translate-y-4 sm:translate-x-8 sm:translate-y-8"
                style={{ 
                  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                  transform: 'translateZ(-50px)' // Pushes the shadow back in 3D space
                }}
              ></div>
              
              {/* Foreground Image Blob */}
              <div 
                className="absolute inset-0 overflow-hidden bg-slate-200 shadow-2xl"
                style={{ 
                  borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
                  transform: 'translateZ(0px)'
                }}
              >
                <Image 
                  src="/images/about-person.png" 
                  alt="Digital Developer Team" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              
              {/* Small Decorative Floating Elements (Popped out in 3D) */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-0 w-8 h-8 rounded-full bg-orange-200 opacity-60"
                style={{ transform: 'translateZ(50px)' }}
              ></motion.div>
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 right-8 w-12 h-12 rounded-full bg-slate-800 opacity-90"
                style={{ transform: 'translateZ(80px)' }}
              ></motion.div>
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -right-4 w-4 h-4 rounded-full bg-orange-500"
                style={{ transform: 'translateZ(60px)' }}
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
