"use client";

import { motion } from "framer-motion";

export default function GrowthJourneyDoodle() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-visible">
      <motion.svg
        viewBox="0 0 400 450"
        className="w-full max-w-[340px] h-auto text-orange-600"
        initial="hidden"
        animate="visible"
      >
        {/* Ground Line */}
        <path
          d="M 40 400 Q 150 395 200 398 T 360 400"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Drifting Clouds (emphasizing height) */}
        {[
          { d: "M 270 120 Q 285 110 300 120 Q 315 110 325 125 Q 310 135 270 125 Z", delay: 0, x: [-10, 10, -10] },
          { d: "M 50 180 Q 65 170 80 180 Q 95 170 105 185 Q 90 195 50 185 Z", delay: 2, x: [-5, 5, -5] }
        ].map((cloud, i) => (
          <motion.path
            key={i}
            d={cloud.d}
            fill="white"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
            animate={{ x: cloud.x }}
            transition={{ duration: 6 + i * 2, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        {/* Twinkling Growth Sparkles */}
        {[
          { cx: 160, cy: 220, size: 8, delay: 0.2 },
          { cx: 220, cy: 150, size: 6, delay: 0.5 },
          { cx: 90, cy: 300, size: 7, delay: 0.8 }
        ].map((star, i) => (
          <motion.path
            key={i}
            d={`M ${star.cx} ${star.cy - star.size} L ${star.cx + star.size / 3} ${star.cy - star.size / 3} L ${star.cx + star.size} ${star.cy} L ${star.cx + star.size / 3} ${star.cy + star.size / 3} L ${star.cx} ${star.cy + star.size} L ${star.cx - star.size / 3} ${star.cy + star.size / 3} L ${star.cx - star.size} ${star.cy} L ${star.cx - star.size / 3} ${star.cy - star.size / 3} Z`}
            fill="#eab308" // Gold growth stars
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: star.delay }}
          />
        ))}

        {/* The Growth Path / Rocket trajectory arrow */}
        <g>
          {/* Main Loop Arrow */}
          <path
            d="M 110 350 C 130 250, 180 180, 240 220 Q 270 240, 275 200 C 280 130, 240 100, 290 80"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeDasharray="6 6"
            strokeLinecap="round"
          />
          {/* Arrow Tip at Skyscraper */}
          <polygon
            points="290,75 280,88 290,83 298,90"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* Small Rocket Passenger (Bouncing up the path!) */}
          <motion.g
            animate={{
              offsetDistance: ["0%", "100%"]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{
              offsetPath: "path('M 110 350 C 130 250, 180 180, 240 220 Q 270 240, 275 200 C 280 130, 240 100, 290 80')",
              offsetRotate: "auto"
            }}
          >
            {/* Cute Cartoon Rocket */}
            <path
              d="M -15,-6 L 15,-6 Q 22,0 15,6 L -15,6 Z"
              fill="white"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            {/* Rocket Fins */}
            <path d="M -15 -6 L -20 -12 L -10 -6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M -15 6 L -20 12 L -10 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            {/* Flames */}
            <path d="M -16 -3 Q -28 0 -16 3" fill="#f97316" stroke="currentColor" strokeWidth="2" />
            {/* Little Monster Passenger */}
            <circle cx="0" cy="0" r="4" fill="white" stroke="currentColor" strokeWidth="2" />
            <circle cx="0" cy="0" r="1.5" fill="currentColor" />
          </motion.g>
        </g>

        {/* GARAGE: Small Local Garage (Left Side) */}
        <g>
          {/* Shop Building Outline */}
          <path
            d="M 60 400 L 60 350 C 60 348, 62 345, 65 345 L 115 345 C 118 345, 120 348, 120 350 L 120 400"
            fill="white"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Shop Roof Angle */}
          <polygon points="55,348 90,325 125,348" fill="white" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
          {/* Tiny Chimney */}
          <rect x="105" y="328" width="8" height="15" fill="white" stroke="currentColor" strokeWidth="2.5" />
          <path d="M 109 328 Q 115 320 108 315" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

          {/* Shop Awning (Striped) */}
          <path d="M 60 355 L 120 355" stroke="currentColor" strokeWidth="3" />
          <path d="M 65 355 L 65 365 Q 70 368 75 365 L 75 355" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M 85 355 L 85 365 Q 90 368 95 365 L 95 355" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M 105 355 L 105 365 Q 110 368 115 365 L 115 355" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />

          {/* Shop Door & Small Window */}
          <rect x="70" y="372" width="16" height="28" rx="2" fill="white" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="82" cy="386" r="1.5" fill="currentColor" />
          <rect x="96" y="372" width="14" height="14" rx="2" fill="white" stroke="currentColor" strokeWidth="2" />
          <line x1="103" y1="372" x2="103" y2="386" stroke="currentColor" strokeWidth="1.5" />
          <line x1="96" y1="379" x2="110" y2="379" stroke="currentColor" strokeWidth="1.5" />

          {/* Wobbly Sign: "Garage" */}
          <g transform="translate(68, 305) rotate(-3)">
            <path d="M 0 0 C 15 -2, 35 2, 44 0 C 46 5, 42 12, 44 15 C 30 17, 10 13, 0 15 Z" fill="white" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
            <text x="3" y="11" className="font-extrabold text-[8px]" fill="currentColor">GARAGE</text>
          </g>
        </g>

        {/* GLOBAL: Colossal Corporate Skyscraper (Right Side) */}
        <g>
          {/* Main Tower body */}
          <path
            d="M 285 400 L 285 140 Q 315 135 345 140 L 345 400"
            fill="white"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Helipad on top */}
          <path d="M 280 140 L 350 140" stroke="currentColor" strokeWidth="3" />
          <path d="M 292 140 L 288 128 L 342 128 L 338 140" fill="white" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
          <text x="311" y="137" className="font-black text-[8px]" fill="currentColor">H</text>

          {/* Windows Grid (Quirky hand-sketched lines) */}
          {/* Floor 1 */}
          <rect x="296" y="160" width="12" height="12" rx="1" fill="white" stroke="currentColor" strokeWidth="2" />
          <rect x="322" y="160" width="12" height="12" rx="1" fill="white" stroke="currentColor" strokeWidth="2" />
          {/* Floor 2 */}
          <rect x="296" y="190" width="12" height="12" rx="1" fill="white" stroke="currentColor" strokeWidth="2" />
          <rect x="322" y="190" width="12" height="12" rx="1" fill="white" stroke="currentColor" strokeWidth="2" />
          {/* Floor 3 */}
          <rect x="296" y="220" width="12" height="12" rx="1" fill="white" stroke="currentColor" strokeWidth="2" />
          <rect x="322" y="220" width="12" height="12" rx="1" fill="white" stroke="currentColor" strokeWidth="2" />
          {/* Floor 4 */}
          <rect x="296" y="250" width="12" height="12" rx="1" fill="white" stroke="currentColor" strokeWidth="2" />
          <rect x="322" y="250" width="12" height="12" rx="1" fill="white" stroke="currentColor" strokeWidth="2" />
          {/* Floor 5 */}
          <rect x="296" y="280" width="12" height="12" rx="1" fill="white" stroke="currentColor" strokeWidth="2" />
          <rect x="322" y="280" width="12" height="12" rx="1" fill="white" stroke="currentColor" strokeWidth="2" />

          {/* Double revolving Glass Doors */}
          <rect x="306" y="365" width="28" height="35" rx="3" fill="white" stroke="currentColor" strokeWidth="2.5" />
          <line x1="320" y1="365" x2="320" y2="400" stroke="currentColor" strokeWidth="2" />
          <circle cx="313" cy="383" r="1.5" fill="currentColor" />
          <circle cx="327" cy="383" r="1.5" fill="currentColor" />

          {/* Corporate Flag waving from side */}
          <g>
            <line x1="345" y1="180" x2="368" y2="180" stroke="currentColor" strokeWidth="2.5" />
            <polygon points="368,172 390,180 368,188" fill="#f97316" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
            <text x="370" y="183" className="font-extrabold text-[5.5px]" fill="currentColor">GLOBAL</text>
          </g>
        </g>

        {/* Wobbly Handwritten Banner Tag Line (Top Center) */}
        <g transform="translate(65, 25) rotate(-2)">
          {/* Banner core */}
          <path
            d="M 5 5 C 60 2, 210 8, 260 5 C 265 15, 262 30, 260 38 C 210 40, 60 36, 5 38 C 2 30, 8 15, 5 5 Z"
            fill="#fed7aa"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Ribbon Fold Tails */}
          <path d="M 5 15 L -10 20 L 5 28" fill="#fed7aa" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M 260 15 L 275 20 L 260 28" fill="#fed7aa" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />

          {/* Tag Line text */}
          <text
            x="20"
            y="26"
            className="font-black text-[12px] tracking-tight uppercase"
            fill="currentColor"
            style={{ fontFamily: 'monospace' }}
          >
            Local Hustle ➔ Global Muscle
          </text>
        </g>
      </motion.svg>
    </div>
  );
}
