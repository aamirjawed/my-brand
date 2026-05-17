"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function WarriorDoodle() {
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
          d="M 60 410 Q 150 405 200 408 T 340 410"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path d="M 120 412 Q 150 410 180 412" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M 230 411 Q 250 410 270 411" fill="none" stroke="currentColor" strokeWidth="2" />

        {/* Twinkling Star Reviews */}
        {[
          { cx: 70, cy: 80, size: 8, delay: 0 },
          { cx: 330, cy: 100, size: 9, delay: 0.3 },
          { cx: 50, cy: 180, size: 7, delay: 0.6 },
          { cx: 340, cy: 220, size: 8, delay: 0.9 }
        ].map((star, i) => (
          <motion.path
            key={i}
            d={`M ${star.cx} ${star.cy - star.size} L ${star.cx + star.size / 3} ${star.cy - star.size / 3} L ${star.cx + star.size} ${star.cy} L ${star.cx + star.size / 3} ${star.cy + star.size / 3} L ${star.cx} ${star.cy + star.size} L ${star.cx - star.size / 3} ${star.cy + star.size / 3} L ${star.cx - star.size} ${star.cy} L ${star.cx - star.size / 3} ${star.cy - star.size / 3} Z`}
            fill="#eab308" // Gold/Yellow stars for reviews
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, delay: star.delay }}
          />
        ))}

        {/* Floating Review Speech Bubble */}
        <motion.g
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="pointer-events-none"
        >
          {/* Bubble background */}
          <path
            d="M 260 50 Q 300 45 330 55 C 340 70, 338 90, 330 100 C 310 105, 290 102, 260 105 Q 255 115 250 120 L 255 105 Z"
            fill="white"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Hand drawn stars inside bubble */}
          <g transform="translate(268, 65) scale(0.7)">
            <path d="M 0 0 L 10 0 L 13 8 L 16 0 L 26 0 L 18 -5 L 21 -13 L 13 -8 L 5 -13 L 8 -5 Z" fill="#eab308" stroke="currentColor" strokeWidth="2" />
            <path d="M 30 0 L 40 0 L 43 8 L 46 0 L 56 0 L 48 -5 L 51 -13 L 43 -8 L 35 -13 L 38 -5 Z" fill="#eab308" stroke="currentColor" strokeWidth="2" />
            <path d="M 60 0 L 70 0 L 73 8 L 76 0 L 86 0 L 78 -5 L 81 -13 L 73 -8 L 65 -13 L 68 -5 Z" fill="#eab308" stroke="currentColor" strokeWidth="2" />
          </g>
          <text x="268" y="93" className="font-extrabold text-[10px] fill-slate-500 tracking-wider">5.0 RATING</text>
        </motion.g>

        {/* Animated Warrior (Breathing & Cape motion) */}
        <motion.g
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Cape behind the warrior */}
          <motion.path
            d="M 200 130 Q 150 200 160 300 Q 190 380 230 380 Q 280 340 290 280 Q 300 200 240 130 Z"
            fill="white"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
            animate={{
              d: [
                "M 200 130 Q 150 200 160 300 Q 190 380 230 380 Q 280 340 290 280 Q 300 200 240 130 Z",
                "M 200 130 Q 140 210 150 310 Q 185 390 235 385 Q 285 330 295 270 Q 295 190 240 130 Z",
                "M 200 130 Q 150 200 160 300 Q 190 380 230 380 Q 280 340 290 280 Q 300 200 240 130 Z"
              ]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />

          {/* Left Arm / Shield Mount */}
          <path d="M 185 155 Q 160 170 145 195" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />

          {/* Left Hand holding shield */}
          <circle cx="143" cy="195" r="5" fill="white" stroke="currentColor" strokeWidth="3" />

          {/* Large Spartan Shield (Left Side) */}
          <g transform="translate(130, 275) rotate(-5)">
            {/* Outer Shield Rim */}
            <circle cx="0" cy="0" r="62" fill="white" stroke="currentColor" strokeWidth="4" />
            <circle cx="0" cy="0" r="54" fill="white" stroke="currentColor" strokeWidth="2.5" />

            {/* Hand-drawn cuts/cracks on shield */}
            <path d="M -40 -30 L -30 -25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 35 35 L 45 42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M -45 25 L -35 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />

            {/* Shield Core (Theme Orange circle) */}
            <circle cx="0" cy="0" r="44" fill="#fed7aa" stroke="currentColor" strokeWidth="3.5" />

            {/* Hand-written AG Logo in 3D style */}
            <g transform="translate(-25, -20) scale(1.1)">
              {/* Bold line-art letter A */}
              <path
                d="M 10 32 L 20 6 C 21 4, 25 4, 26 6 L 36 32 M 14 22 L 32 22"
                fill="none"
                stroke="currentColor"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Bold line-art letter G */}
              <path
                d="M 52 14 C 48 8, 40 8, 38 15 C 36 22, 38 29, 44 32 C 48 34, 52 32, 53 26 L 44 26"
                fill="none"
                stroke="currentColor"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>

          {/* Legs & Sandals */}
          {/* Right Leg */}
          <path d="M 232 285 L 235 340 C 235 345, 245 385, 248 395" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M 235 340 L 252 390" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
          {/* Left Leg */}
          <path d="M 195 285 L 180 340 C 180 345, 178 385, 175 395" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M 180 340 L 165 390" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />

          {/* Sandals (Detailed organic lines) */}
          <path d="M 160 395 Q 170 393 180 395 L 183 400 L 158 400 Z" fill="white" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
          <path d="M 243 395 Q 253 393 263 395 L 266 400 L 241 400 Z" fill="white" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
          <path d="M 172 370 L 178 390" stroke="currentColor" strokeWidth="2" />
          <path d="M 252 370 L 258 390" stroke="currentColor" strokeWidth="2" />

          {/* Body Armor / Torso */}
          {/* Muscular chest plate (Cuirass) */}
          <path d="M 185 145 C 190 142, 210 142, 215 145 C 225 155, 222 230, 215 240 C 210 242, 190 242, 185 240 C 178 230, 175 155, 185 145 Z" fill="white" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
          {/* Abdominal definitions (organic sketch style) */}
          <path d="M 195 190 Q 200 185 205 190" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 193 210 Q 200 205 207 210" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="200" y1="165" x2="200" y2="225" stroke="currentColor" strokeWidth="2.5" />
          {/* Chest lines */}
          <path d="M 190 168 Q 200 172 210 168" stroke="currentColor" strokeWidth="2.5" />

          {/* Shoulder Pads (Pauldrons) */}
          <path d="M 176 138 Q 165 145 174 158" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M 224 138 Q 235 145 226 158" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />

          {/* Belt and Skirt (Pteruges) */}
          <rect x="182" y="240" width="36" height="12" rx="2" fill="white" stroke="currentColor" strokeWidth="3" />
          {/* Sword Scabbard on belt */}
          <path d="M 180 235 L 165 295" fill="white" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M 176 242 L 182 250" stroke="currentColor" strokeWidth="3" />

          {/* Skirt strips (Hand-drawn wobbly strips) */}
          <path d="M 185 252 L 180 290" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M 192 252 L 190 295" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M 200 252 L 200 298" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M 208 252 L 210 295" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M 215 252 L 220 290" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />

          {/* Neck Guard */}
          <path d="M 193 135 C 195 140, 205 140, 207 135" fill="none" stroke="currentColor" strokeWidth="3" />

          {/* Helmet & Plume (Crest) */}
          {/* The Plume (Organic hair/fur line-art) */}
          <path
            d="M 200 85 Q 215 45 225 35 Q 240 60 215 90 Z"
            fill="white"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path d="M 206 72 Q 218 52 225 45" stroke="currentColor" strokeWidth="2" />
          <path d="M 211 80 Q 222 62 227 55" stroke="currentColor" strokeWidth="2" />
          {/* Helmet Base */}
          <circle cx="200" cy="115" r="20" fill="white" stroke="currentColor" strokeWidth="3.5" />
          {/* Corinthian visor nose-guard / cheek-guards */}
          <path d="M 182 120 L 192 125 L 200 115 L 208 125 L 218 120" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
          {/* Cheek guard lines */}
          <path d="M 188 122 L 188 132 C 188 136, 194 136, 194 132 L 194 124" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M 212 122 L 212 132 C 212 136, 206 136, 206 132 L 206 124" fill="none" stroke="currentColor" strokeWidth="2.5" />
          {/* Visor eyes slit */}
          <path d="M 187 114 Q 200 110 213 114" stroke="currentColor" strokeWidth="2.5" />

          {/* Right Arm holding Spear */}
          <path d="M 215 155 Q 245 160 262 185" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
          {/* Hand clasping spear */}
          <circle cx="262" cy="185" r="6" fill="white" stroke="currentColor" strokeWidth="3" />

          {/* Extremely Long Spear */}
          <g>
            {/* Shaft */}
            <line x1="262" y1="410" x2="262" y2="40" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />

            {/* Spearhead (Triangular blade) */}
            <polygon
              points="262,15 254,42 262,38 270,42"
              fill="white"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
            {/* Crossbar on spear head */}
            <line x1="256" y1="42" x2="268" y2="42" stroke="currentColor" strokeWidth="3" />
          </g>
        </motion.g>
      </motion.svg>
    </div>
  );
}
