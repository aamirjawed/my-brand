"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface HeroCardProps {
  title: string;
  active?: boolean;
  delay?: number;
}

const HeroCard = ({ title, active, delay = 0 }: HeroCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className={`p-8 rounded-[2rem] backdrop-blur-md border border-white/10 transition-all ${active
      ? "bg-white text-black shadow-2xl"
      : "bg-white/10 text-white hover:bg-white/20"
      }`}
  >
    <h3 className="font-bold text-xs tracking-widest uppercase">{title}</h3>
  </motion.div>
);

export default function Hero() {
  const services = ["Web Development", "AI SEO", "Event Management", "Digital Marketing"];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentService = services[index];
    const typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentService.substring(0, displayText.length + 1));
        if (displayText.length === currentService.length) {
          setTimeout(() => setIsDeleting(true), 1500); // Wait before deleting
        }
      } else {
        setDisplayText(currentService.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % services.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <section className="relative h-screen min-h-[700px] flex flex-col overflow-hidden bg-slate-800">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop"
          alt="Consulting Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-20 flex-grow flex flex-col justify-center">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-7xl font-bold text-white leading-[1.2] mb-8">
              Scale Your <br />
              <div className="h-[1.2em] relative flex items-center">
                <span className="text-orange-600">
                  {displayText}
                  <span className="inline-block w-[2px] h-[0.8em] bg-orange-600 ml-1 animate-pulse" />
                </span>
              </div>
            </h1>

            {/* <div className="flex items-center gap-2 group">
              <Link
                href="/contact-us"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-3 shadow-[0_10px_40px_-10px_rgba(249,115,22,0.5)] hover:shadow-[0_15px_50px_-10px_rgba(249,115,22,0.6)] hover:-translate-y-1 active:translate-y-0"
              >
                Free Consultation
                <div className="bg-white/20 rounded-full p-2 group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </Link>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
