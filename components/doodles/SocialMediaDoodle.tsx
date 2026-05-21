"use client";

import { motion } from "framer-motion";
import { Heart, MessageCircle, Send, Share2, TrendingUp, Sparkles } from "lucide-react";

export default function SocialMediaDoodle() {
  return (
    <div className="relative w-full aspect-[4/3] max-w-[500px] mx-auto select-none">
      {/* Background blueprint grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f973160a_1px,transparent_1px),linear-gradient(to_bottom,#f973160a_1px,transparent_1px)] bg-[size:24px_24px] border border-slate-100 rounded-3xl" />

      {/* Main SVG Container */}
      <svg
        viewBox="0 0 500 375"
        className="w-full h-full text-slate-800 relative z-10"
        fill="none"
      >
        {/* Ground shadow connector */}
        <path
          d="M 30 320 C 150 315 300 325 470 320"
          stroke="#ea580c"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="4,6"
          opacity="0.3"
        />

        {/* 1. SOCIAL POST FRAME (Left) */}
        <g>
          {/* Post Card Outer frame */}
          <rect
            x="40"
            y="50"
            width="240"
            height="210"
            rx="12"
            fill="white"
            stroke="currentColor"
            strokeWidth="3.2"
            className="shadow-sm"
          />
          {/* Post Header */}
          <circle cx="65" cy="75" r="12" fill="white" stroke="currentColor" strokeWidth="2.5" />
          <path d="M 57 82 C 57 82 59 77 65 77 C 71 77 73 82 73 82" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="85" y1="70" x2="150" y2="70" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="85" y1="80" x2="120" y2="80" stroke="currentColor" strokeWidth="2" opacity="0.6" strokeLinecap="round" />

          {/* Post Image Container */}
          <rect x="52" y="102" width="216" height="110" rx="8" fill="#ea580c" opacity="0.08" stroke="currentColor" strokeWidth="2.2" strokeDasharray="3,2" />

          {/* Content Graphic (Heart vector outline inside post) */}
          <motion.path
            d="M 160 157 C 145 137 125 152 160 182 C 195 152 175 137 160 157 Z"
            fill="#f97316"
            stroke="currentColor"
            strokeWidth="2.5"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ transformOrigin: "160px 162px" }}
          />

          {/* Bottom Icons row */}
          <g className="text-slate-700">
            <path d="M 55 235 H 265" stroke="currentColor" strokeWidth="2" opacity="0.4" />
            <circle cx="65" cy="245" r="3.5" stroke="currentColor" strokeWidth="2" />
            <circle cx="85" cy="245" r="3.5" stroke="currentColor" strokeWidth="2" />
            <circle cx="105" cy="245" r="3.5" stroke="currentColor" strokeWidth="2" />
          </g>
        </g>

        {/* 2. CHAT FEED COLUMN (Back Right Offset) */}
        <g>
          {/* Bubble 1 */}
          <motion.path
            d="M 280 80 C 280 65 310 65 310 80 C 310 90 295 92 290 98 C 290 92 280 90 280 80 Z"
            fill="white"
            stroke="currentColor"
            strokeWidth="2.8"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <circle cx="295" cy="78" r="2" fill="#ea580c" />
          <circle cx="295" cy="83" r="2.5" fill="currentColor" />

          {/* Bubble 2 (Larger with engagement details) */}
          <motion.path
            d="M 310 130 C 310 110 390 110 390 130 C 390 148 340 150 330 160 C 330 150 310 148 310 130 Z"
            fill="white"
            stroke="currentColor"
            strokeWidth="3"
            className="shadow-sm"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
          />
          {/* Hearts in bubble */}
          <path d="M 345 127 C 340 117 330 125 345 140 C 360 125 350 117 345 127 Z" fill="#ea580c" stroke="currentColor" strokeWidth="1.5" />
          <line x1="365" y1="130" x2="380" y2="130" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="365" y1="138" x2="375" y2="138" stroke="currentColor" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
        </g>

        {/* 3. PERFORMANCE CHART WINDOW (Front Foreground) */}
        <g>
          {/* Chart Frame */}
          <rect
            x="240"
            y="180"
            width="210"
            height="130"
            rx="12"
            fill="white"
            stroke="currentColor"
            strokeWidth="3.2"
            className="shadow-md"
          />

          {/* Chart Header */}
          <line x1="240" y1="212" x2="450" y2="212" stroke="currentColor" strokeWidth="2" opacity="0.4" />
          <circle cx="260" cy="196" r="4" fill="#ea580c" />
          <line x1="274" y1="196" x2="320" y2="196" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />

          {/* Sparking chart line (Audience Growth representation) */}
          <motion.path
            d="M 260 280 L 295 255 L 330 270 L 365 235 L 400 250 L 430 220"
            stroke="#ea580c"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />

          {/* Chart Anchor Dots */}
          <circle cx="260" cy="280" r="3.5" fill="white" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="330" cy="270" r="3.5" fill="white" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="400" cy="250" r="3.5" fill="white" stroke="currentColor" strokeWidth="2.5" />
          
          <motion.circle
            cx="430"
            cy="220"
            r="4.5"
            fill="#ea580c"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </g>
      </svg>

      {/* Floating Info Panels */}
      <div className="absolute top-[8%] left-[8%] bg-white/90 backdrop-blur-sm border border-slate-200/60 rounded-xl p-3 shadow-md text-left max-w-[130px]">
        <span className="block text-[8px] text-slate-400 uppercase font-black tracking-wider">Follower Growth</span>
        <span className="block text-sm font-black text-slate-800 tracking-tight flex items-center gap-1">
          <TrendingUp className="w-4 h-4 text-orange-500" /> +320%
        </span>
      </div>

      <div className="absolute bottom-[20%] right-[5%] bg-white/90 backdrop-blur-sm border border-slate-200/60 rounded-xl p-3 shadow-md text-left max-w-[140px]">
        <div className="flex items-center gap-1.5 mb-1">
          <Sparkles className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
          <span className="text-[8px] text-slate-400 uppercase font-black tracking-wider">Campaign state</span>
        </div>
        <span className="block text-base font-black text-slate-800 tracking-tight">Active Reach</span>
      </div>
    </div>
  );
}
