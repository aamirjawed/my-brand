"use client";

import { motion } from "framer-motion";
import { MousePointer, Compass, Sliders, Layers } from "lucide-react";

export default function UiUxLayoutDoodle() {
  return (
    <div className="relative w-full aspect-[4/3] max-w-[500px] mx-auto select-none">
      {/* Background Blueprint Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ea580c0c_1px,transparent_1px),linear-gradient(to_bottom,#ea580c0c_1px,transparent_1px)] bg-[size:24px_24px] border border-slate-100 rounded-3xl" />

      {/* Main SVG Container */}
      <svg
        viewBox="0 0 500 375"
        className="w-full h-full text-slate-800 relative z-10"
        fill="none"
      >
        {/* Ground shadow connector line */}
        <path
          d="M 30 320 C 150 315 300 325 470 320"
          stroke="#ea580c"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="4,6"
          opacity="0.3"
        />

        {/* 1. BROWSER FRAME DRAFT (Left) */}
        <g>
          {/* Outer Border */}
          <rect
            x="40"
            y="60"
            width="280"
            height="180"
            rx="8"
            fill="white"
            stroke="currentColor"
            strokeWidth="3.2"
            className="shadow-sm"
          />
          {/* Header Bar */}
          <line x1="40" y1="92" x2="320" y2="92" stroke="currentColor" strokeWidth="2.8" />
          {/* Window Buttons */}
          <circle cx="56" cy="76" r="4.5" fill="#ef4444" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="70" cy="76" r="4.5" fill="#f59e0b" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="84" cy="76" r="4.5" fill="#10b981" stroke="currentColor" strokeWidth="1.5" />
          {/* Address Bar */}
          <rect x="108" y="70" width="180" height="12" rx="4" stroke="currentColor" strokeWidth="2" opacity="0.6" />

          {/* Canvas Blueprint Grid */}
          <path d="M 50 140 L 310 140 M 175 92 L 175 240" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3,4" opacity="0.3" />

          {/* Hand-Drawn Bezier Vector Curve Drafting (The Doodle Effect!) */}
          <motion.path
            d="M 60 210 Q 150 110 240 210"
            stroke="#ea580c"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            animate={{
              d: [
                "M 60 210 Q 150 110 240 210",
                "M 60 210 Q 150 140 240 210",
                "M 60 210 Q 150 110 240 210"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Anchor Points */}
          <circle cx="60" cy="210" r="4" fill="white" stroke="#ea580c" strokeWidth="2.5" />
          <circle cx="240" cy="210" r="4" fill="white" stroke="#ea580c" strokeWidth="2.5" />
          
          <motion.circle
            cx="150"
            cy="160"
            r="4.5"
            fill="#ea580c"
            animate={{
              cy: [160, 175, 160]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Handle Lines */}
          <motion.line
            x1="60"
            y1="210"
            x2="150"
            y2="160"
            stroke="#ea580c"
            strokeWidth="1.5"
            strokeDasharray="2,2"
            animate={{
              y2: [160, 175, 160]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.line
            x1="240"
            y1="210"
            x2="150"
            y2="160"
            stroke="#ea580c"
            strokeWidth="1.5"
            strokeDasharray="2,2"
            animate={{
              y2: [160, 175, 160]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Simulated Text Lines */}
          <rect x="60" y="110" width="80" height="12" rx="3" fill="#ea580c" opacity="0.15" />
          <line x1="60" y1="130" x2="120" y2="130" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* 2. TABLET FRAME (Back Right Offset) */}
        <g>
          <rect
            x="240"
            y="110"
            width="180"
            height="130"
            rx="12"
            fill="white"
            stroke="currentColor"
            strokeWidth="3.2"
            className="shadow-sm"
          />
          {/* Screen boundary */}
          <rect x="250" y="120" width="160" height="100" rx="4" stroke="currentColor" strokeWidth="2" opacity="0.4" />
          {/* Home Button */}
          <circle cx="245" cy="175" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          
          {/* Radial Graph representation inside Tablet */}
          <circle cx="330" cy="170" r="30" stroke="currentColor" strokeWidth="2.5" strokeDasharray="4,3" opacity="0.5" />
          <motion.circle
            cx="330"
            cy="170"
            r="30"
            stroke="#ea580c"
            strokeWidth="3.5"
            strokeDasharray="188"
            strokeDashoffset="120"
            strokeLinecap="round"
            animate={{ strokeDashoffset: [120, 40, 120] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </g>

        {/* 3. SMARTPHONE FRAME (Front Foreground) */}
        <g>
          <rect
            x="320"
            y="150"
            width="95"
            height="170"
            rx="18"
            fill="white"
            stroke="currentColor"
            strokeWidth="3.5"
            className="shadow-md"
          />
          {/* Speaker Notch */}
          <rect x="355" y="157" width="25" height="5" rx="2.5" fill="currentColor" />
          
          {/* Simulated App Card Content */}
          <rect x="332" y="172" width="71" height="50" rx="6" fill="#ea580c" opacity="0.08" stroke="currentColor" strokeWidth="2" strokeDasharray="3,2" />
          
          {/* Circular profile avatar inside phone */}
          <circle cx="367" cy="197" r="12" fill="white" stroke="currentColor" strokeWidth="2.2" />
          <path d="M 359 204 C 359 204 361 199 367 199 C 373 199 375 204 375 204" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />

          {/* Input bars */}
          <rect x="338" y="234" width="59" height="10" rx="3" stroke="currentColor" strokeWidth="2" opacity="0.7" />
          <rect x="338" y="252" width="59" height="10" rx="3" stroke="currentColor" strokeWidth="2" opacity="0.7" />

          {/* Hand-drawn button */}
          <motion.rect
            x="338"
            y="272"
            width="59"
            height="12"
            rx="4"
            fill="#ea580c"
            stroke="currentColor"
            strokeWidth="2"
            animate={{ scale: [1, 0.96, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ transformOrigin: "367px 278px" }}
          />
          <line x1="358" y1="278" x2="378" y2="278" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* 4. FLOATING INTERACTION DESIGN BITS */}
        <g>
          {/* Mouse pointer dragging anchor */}
          <motion.g
            animate={{
              x: [0, 8, -4, 0],
              y: [0, -12, 10, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <MousePointer className="w-5 h-5 text-slate-900 fill-slate-900 absolute" style={{ left: "140px", top: "155px" }} />
          </motion.g>

          {/* Ruler compass line badge */}
          <motion.g
            className="text-slate-400"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            style={{ transformOrigin: "440px 50px" }}
          >
            <Compass className="w-6 h-6 absolute text-slate-300" style={{ left: "430px", top: "40px" }} />
          </motion.g>
        </g>
      </svg>

      {/* Floating Info Panels */}
      <div className="absolute top-[8%] right-[8%] bg-white/90 backdrop-blur-sm border border-slate-200/60 rounded-xl p-3 shadow-md text-left max-w-[120px]">
        <span className="block text-[8px] text-slate-400 uppercase font-black tracking-wider">Usability</span>
        <span className="block text-sm font-black text-slate-800 tracking-tight">Frictionless</span>
      </div>

      <div className="absolute bottom-[20%] left-[5%] bg-white/90 backdrop-blur-sm border border-slate-200/60 rounded-xl p-3 shadow-md text-left max-w-[140px]">
        <div className="flex items-center gap-1.5 mb-1">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="text-[8px] text-slate-400 uppercase font-black tracking-wider">Lighthouse score</span>
        </div>
        <span className="block text-base font-black text-slate-800 tracking-tight">100% Performance</span>
      </div>
    </div>
  );
}
