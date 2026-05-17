"use client";

import { motion } from "framer-motion";

export default function AstronautDoodle() {
  return (
    <motion.svg
      viewBox="0 0 400 400"
      className="w-full max-w-[360px] h-auto text-orange-600"
      initial="hidden"
      animate="visible"
    >
      {/* Moon Ground with Craters */}
      <path
        d="M 60 360 Q 150 350 200 355 T 340 360"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <ellipse cx="140" cy="365" rx="10" ry="3" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <ellipse cx="280" cy="363" rx="8" ry="2.5" fill="none" stroke="currentColor" strokeWidth="2.5" />

      {/* Floating Saturn Planet */}
      <motion.g
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Planet Body */}
        <circle cx="80" cy="200" r="18" fill="white" stroke="currentColor" strokeWidth="3" />
        <path d="M 75 190 Q 80 193 85 190" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        {/* Saturn Ring */}
        <ellipse
          cx="80"
          cy="200"
          rx="32"
          ry="7"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          transform="rotate(-20 80 200)"
        />
      </motion.g>

      {/* Astronaut Flag (AG style with Green flag) */}
      <g>
        {/* Flagpole */}
        <line x1="150" y1="353" x2="150" y2="240" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <circle cx="150" cy="240" r="3" fill="currentColor" />
        {/* Flag fabric - hand drawn triangle */}
        <polygon
          points="150,245 110,265 150,285"
          fill="#fed7aa"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        {/* Hand-written text inside flag */}
        <text x="136" y="270" className="font-extrabold text-[10px]" fill="currentColor">AG</text>
        {/* Craters base */}
        <path d="M 135 353 Q 150 350 165 353" fill="none" stroke="currentColor" strokeWidth="2.5" />
      </g>

      {/* Twinkling Stars */}
      {[
        { cx: 70, cy: 120, size: 8, delay: 0 },
        { cx: 330, cy: 160, size: 10, delay: 0.3 },
        { cx: 120, cy: 220, size: 6, delay: 0.6 }
      ].map((star, i) => (
        <motion.path
          key={i}
          d={`M ${star.cx} ${star.cy - star.size} L ${star.cx + star.size/3} ${star.cy - star.size/3} L ${star.cx + star.size} ${star.cy} L ${star.cx + star.size/3} ${star.cy + star.size/3} L ${star.cx} ${star.cy + star.size} L ${star.cx - star.size/3} ${star.cy + star.size/3} L ${star.cx - star.size} ${star.cy} L ${star.cx - star.size/3} ${star.cy + star.size/3} Z`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: star.delay }}
        />
      ))}

      {/* Astronaut holding the Sign (Animated floating) */}
      <motion.g
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Backpack & Satellite */}
        <rect x="235" y="220" width="30" height="70" rx="8" fill="white" stroke="currentColor" strokeWidth="3" />
        {/* Satellite Dish */}
        <path d="M 255 200 A 15 15 0 0 1 280 220" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <line x1="250" y1="215" x2="265" y2="205" stroke="currentColor" strokeWidth="3" />
        
        {/* Suit Body */}
        <rect x="180" y="225" width="60" height="65" rx="18" fill="white" stroke="currentColor" strokeWidth="3" />
        {/* Control Panel */}
        <rect x="193" y="238" width="34" height="28" rx="5" fill="white" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="201" cy="245" r="3" fill="currentColor" />
        <line x1="210" y1="245" x2="220" y2="245" stroke="currentColor" strokeWidth="2" />
        <line x1="210" y1="252" x2="220" y2="252" stroke="currentColor" strokeWidth="2" />

        {/* Suit Legs */}
        <path d="M 192 290 L 192 315 C 192 320, 207 320, 207 315 L 207 290" fill="white" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 213 290 L 213 315 C 213 320, 228 320, 228 315 L 228 290" fill="white" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

        {/* Helmet */}
        <circle cx="210" cy="180" r="36" fill="white" stroke="currentColor" strokeWidth="3.5" />
        {/* Helmet Visor */}
        <rect x="184" y="158" width="52" height="38" rx="14" fill="#0f172a" stroke="currentColor" strokeWidth="3" />
        {/* Visor Glare Reflection */}
        <ellipse cx="196" cy="168" rx="6" ry="3" fill="white" transform="rotate(-15 196 168)" />

        {/* Arms holding the Sign */}
        <path d="M 180 240 Q 160 210 150 160" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M 240 240 Q 260 210 270 160" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />

        {/* Cartoon wobbly Hands */}
        <circle cx="150" cy="160" r="6" fill="white" stroke="currentColor" strokeWidth="3" />
        <circle cx="270" cy="160" r="6" fill="white" stroke="currentColor" strokeWidth="3" />

        {/* The Big Whiteboard Sign */}
        <g transform="translate(110, 55)">
          {/* Sign Board with wobbly hand-drawn path */}
          <path
            d="M 5 5 C 40 2, 160 8, 200 5 C 205 30, 198 80, 200 95 C 160 98, 40 92, 5 95 C 2 80, 8 30, 5 5 Z"
            fill="white"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Little corner screws */}
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <circle cx="188" cy="12" r="2" fill="currentColor" />
          <circle cx="12" cy="88" r="2" fill="currentColor" />
          <circle cx="188" cy="88" r="2" fill="currentColor" />

          {/* Hand-Drawn Speech Bubble inside Board */}
          <g transform="translate(45, 12)">
            <path
              d="M 10 5 C 30 2, 70 8, 100 5 C 105 15, 108 45, 100 55 C 80 58, 40 52, 10 55 C 8 45, 5 15, 10 5 Z M 50 55 L 45 68 L 65 55"
              fill="#fed7aa"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* 14 Years Track Record text - bold, organic, quirky */}
            <text
              x="28"
              y="38"
              className="font-black text-2xl uppercase tracking-tighter"
              fill="currentColor"
              style={{ fontFamily: 'monospace' }}
            >
              14 Yrs
            </text>
          </g>
        </g>
      </motion.g>
    </motion.svg>
  );
}
