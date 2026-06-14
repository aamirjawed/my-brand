"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ServiceSkylineDoodle from "../doodles/ServiceSkylineDoodle";

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-0 relative overflow-hidden"
    >
      {/* Background soft ambient flares */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-orange-600/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute left-0 top-0 w-80 h-80 bg-orange-950/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Clean, standard Grid Columns (12-column system, zero fractional spans) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 text-left">
          
          {/* COLUMN 1: Brand Pitch (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-8">
            <span className="text-lg font-bold text-white tracking-tight flex items-center gap-1.5 mb-3">
              <span className="text-orange-500 font-black">Digital</span>Developer
            </span>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              We design, build, and scale digital experiences. A premium offshore product engineering studio based in India, serving startups and enterprises globally across the USA, UK, Canada, Australia, and UAE.
            </p>
          </div>

          {/* COLUMN 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-3.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="/" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="/about" className="text-slate-400 hover:text-white transition-colors duration-200">
                  About Journey
                </a>
              </li>
              <li>
                <a href="/track-record" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Track Record
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-3.5">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="/web-development" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-0.5 group">
                  Web Development
                  <ArrowUpRight className="w-2.5 h-2.5 text-slate-600 group-hover:text-white transition-colors" />
                </a>
              </li>
              <li>
                <a href="/seo" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-0.5 group">
                  SEO & Marketing
                  <ArrowUpRight className="w-2.5 h-2.5 text-slate-600 group-hover:text-white transition-colors" />
                </a>
              </li>
              <li>
                <a href="/graphic-design" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-0.5 group">
                  Graphic Design
                  <ArrowUpRight className="w-2.5 h-2.5 text-slate-600 group-hover:text-white transition-colors" />
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: Connect Info (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-3.5">
              Connect With Us
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="mailto:hello@digitaldeveloper.com" className="hover:text-white transition-colors">
                  hello@digitaldeveloper.com
                </a>
              </li>
              <li>
                <span className="text-slate-500">+1 (555) 019-2834</span>
              </li>
              <li className="pt-2 flex items-center gap-2.5">
                <motion.a
                  whileHover={{ y: -2 }}
                  href="https://github.com"
                  className="w-7 h-7 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:border-orange-500 hover:text-white transition-all duration-200 shadow-sm"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </motion.a>
                <motion.a
                  whileHover={{ y: -2 }}
                  href="https://linkedin.com"
                  className="w-7 h-7 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:border-orange-500 hover:text-white transition-all duration-200 shadow-sm"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </motion.a>
              </li>
            </ul>
          </div>

        </div>

        {/* Minimal Copyright Centered */}
        <div className="text-[10px] text-slate-600 font-medium text-center pb-8 border-b border-slate-900">
          © {currentYear} DigitalDeveloper. All Rights Reserved. Crafted with wobbly vector nodes.
        </div>

      </div>

      {/* MAJESTIC SERVICE SKYLINE DOODLE (Stretches 100% full width along bottom of dark footer) */}
      <div className="w-full relative bg-slate-950/80 border-t border-slate-900 pt-4 pb-0 h-32 sm:h-36 overflow-hidden">
        <ServiceSkylineDoodle isHovered={isHovered} />
      </div>
    </footer>
  );
}
