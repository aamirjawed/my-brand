"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CreativeTeamDoodle() {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-visible">
      {/* Container holding the doodle team */}
      <motion.div
        className="relative w-full max-w-[340px] aspect-[4/5] overflow-hidden rounded-[2.5rem] border-4 text-orange-600 bg-white shadow-[8px_8px_0px_rgba(15,23,42,0.1)] cursor-pointer group select-none"
        whileHover="hover"
        initial="rest"
        animate={isRevealed ? "hover" : "rest"}
        onClick={() => setIsRevealed(!isRevealed)}
      >
        {/* The Hidden "Creative Team Doodles" (Under the curtain) */}
        <div className="absolute inset-0 bg-white p-6 flex items-end justify-start">
          <svg
            viewBox="0 0 300 350"
            className="w-full h-full text-orange-600 overflow-visible"
          >
            {/* Background elements */}
            <path d="M 40 60 Q 50 40 80 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 50 40 L 52 45" stroke="currentColor" strokeWidth="2.5" />
            <path d="M 70 42 L 68 47" stroke="currentColor" strokeWidth="2.5" />

            {/* Twinkling star / sparkles */}
            <g transform="translate(240, 40) scale(0.8)">
              <path d="M 0,-10 L 2,-2 L 10 0 L 2,2 L 0,10 L -2,2 L -10,0 L -2,-2 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
            </g>

            {/* Character Doodles Crowd */}
            <g className="overflow-visible">

              {/* Back Character 1 (Glasses & Mustache) */}
              <motion.g
                variants={{
                  hover: { y: -5 }
                }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                {/* Body */}
                <path d="M 120 180 C 120 110, 180 110, 180 180 Z" fill="white" stroke="currentColor" strokeWidth="3" />
                {/* Sunglasses */}
                <polygon points="132,130 148,130 145,142 135,142" fill="currentColor" />
                <polygon points="152,130 168,130 165,142 155,142" fill="currentColor" />
                <line x1="148" y1="133" x2="152" y2="133" stroke="currentColor" strokeWidth="3" />
                {/* Mustache & Mouth */}
                <path d="M 135 152 Q 150 145 165 152 C 160 162, 140 162, 135 152" fill="white" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                <path d="M 140 156 L 160 156" stroke="currentColor" strokeWidth="1.5" />
                {/* Spiky hair */}
                <path d="M 128 120 Q 120 115 132 112 Q 138 102 150 110 Q 162 102 168 112 Q 180 115 172 120" fill="none" stroke="currentColor" strokeWidth="2.5" />
              </motion.g>

              {/* Back Character 2 (One eye, goofy smile) */}
              <g>
                <path d="M 190 200 C 190 150, 240 150, 240 200 Z" fill="white" stroke="currentColor" strokeWidth="3" />
                <circle cx="215" cy="175" r="7" fill="white" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="215" cy="175" r="3" fill="currentColor" />
                <path d="M 200 190 Q 215 200 230 190" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </g>

              {/* Middle Left Character (Crown, waving hand) */}
              <motion.g
                variants={{
                  hover: { rotate: [0, -3, 3, 0] }
                }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                {/* Body */}
                <path d="M 60 270 C 60 210, 110 210, 110 270 Z" fill="white" stroke="currentColor" strokeWidth="3" />
                {/* Crown */}
                <polygon points="73,212 77,198 85,206 93,198 97,212" fill="white" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                {/* Face */}
                <circle cx="78" cy="235" r="3" fill="currentColor" />
                <circle cx="92" cy="235" r="3" fill="currentColor" />
                <path d="M 80 248 Q 85 253 90 248" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                {/* Waving Arm */}
                <motion.path
                  d="M 60 240 Q 40 230 35 210"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.g>

              {/* Middle Right Character (Tall, happy smile) */}
              <g>
                <path d="M 220 220 C 220 170, 270 170, 270 350 L 220 350 Z" fill="white" stroke="currentColor" strokeWidth="3" />
                <circle cx="240" cy="210" r="5" fill="currentColor" />
                <circle cx="255" cy="210" r="5" fill="currentColor" />
                <path d="M 235 225 C 235 240, 260 240, 260 225 Z" fill="white" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
                {/* Teeth */}
                <path d="M 240 226 L 240 230 M 245 227 L 245 231 M 250 227 L 250 231 M 255 226 L 255 230" stroke="currentColor" strokeWidth="2" />
              </g>

              {/* Front Center Headset Character (Main focal point!) */}
              <motion.g
                variants={{
                  hover: { y: -8 }
                }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                {/* Headset Band */}
                <path d="M 100 225 C 100 170, 180 170, 180 225" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                {/* Body */}
                <path d="M 95 245 C 95 190, 185 190, 185 350 L 95 350 Z" fill="white" stroke="currentColor" strokeWidth="3.5" />
                {/* Headset Earcups */}
                <rect x="90" y="210" width="12" height="24" rx="5" fill="white" stroke="currentColor" strokeWidth="3" />
                <rect x="178" y="210" width="12" height="24" rx="5" fill="white" stroke="currentColor" strokeWidth="3" />
                {/* Large Cute Eyes */}
                <ellipse cx="120" cy="235" rx="14" ry="16" fill="white" stroke="currentColor" strokeWidth="3.5" />
                <ellipse cx="120" cy="235" rx="8" ry="10" fill="currentColor" />
                <circle cx="116" cy="228" r="3" fill="white" />

                <ellipse cx="160" cy="235" rx="14" ry="16" fill="white" stroke="currentColor" strokeWidth="3.5" />
                <ellipse cx="160" cy="235" rx="8" ry="10" fill="currentColor" />
                <circle cx="156" cy="228" r="3" fill="white" />

                {/* Big Excited Mouth */}
                <path d="M 125 260 Q 140 280 155 260 Z" fill="white" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
                {/* Waving Hands */}
                <path d="M 98 280 Q 82 290 85 310" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <path d="M 182 280 Q 198 290 195 310" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </motion.g>

              {/* Bottom Left Character (Happy open mouth) */}
              <g>
                <path d="M 40 350 C 40 280, 100 280, 100 350 Z" fill="white" stroke="currentColor" strokeWidth="3.5" />
                <circle cx="60" cy="305" r="4" fill="currentColor" />
                <circle cx="80" cy="305" r="4" fill="currentColor" />
                {/* Teeth-y wide mouth */}
                <path d="M 52 320 C 52 335, 88 335, 88 320 Z" fill="white" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
                <line x1="60" y1="321" x2="60" y2="328" stroke="currentColor" strokeWidth="2" />
                <line x1="70" y1="322" x2="70" y2="329" stroke="currentColor" strokeWidth="2" />
                <line x1="80" y1="321" x2="80" y2="328" stroke="currentColor" strokeWidth="2" />
              </g>

              {/* Bottom Left Sidekick (Goofy bird-monster) */}
              <g>
                <path d="M 5 350 C 5 310, 45 310, 45 350 Z" fill="white" stroke="currentColor" strokeWidth="3" />
                {/* Crest */}
                <path d="M 18 310 Q 12 300 18 295 Q 24 300 22 310" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <path d="M 23 310 Q 28 302 32 305 Q 32 312 27 312" fill="none" stroke="currentColor" strokeWidth="2.5" />
                {/* Face */}
                <circle cx="20" cy="325" r="5" fill="white" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="20" cy="325" r="2" fill="currentColor" />
                <path d="M 28 325 Q 34 323 32 330 Z" fill="none" stroke="currentColor" strokeWidth="2" />
              </g>

              {/* Bottom Center Character (Pill shaped, peaceful smile) */}
              <motion.g
                variants={{
                  hover: { y: -4 }
                }}
                transition={{ type: "spring", stiffness: 90 }}
              >
                <path d="M 135 350 L 135 290 C 135 265, 175 265, 175 290 L 175 350 Z" fill="white" stroke="currentColor" strokeWidth="3.5" />
                <path d="M 148 280 Q 155 285 162 280" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <path d="M 148 295 Q 155 290 162 295" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                {/* Little arms holding body */}
                <path d="M 138 315 Q 150 325 158 318" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <path d="M 172 315 Q 160 325 152 318" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </motion.g>

              {/* Bottom Right Character (Round glasses) */}
              <g>
                <path d="M 170 350 C 170 300, 230 300, 230 350 Z" fill="white" stroke="currentColor" strokeWidth="3.5" />
                {/* Glasses */}
                <circle cx="190" cy="320" r="10" fill="white" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="210" cy="320" r="10" fill="white" stroke="currentColor" strokeWidth="2.5" />
                <line x1="200" y1="320" x2="200" y2="320" stroke="currentColor" strokeWidth="3" />
                <path d="M 195 332 Q 200 336 205 332" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </g>

            </g>
          </svg>
        </div>

        {/* The Curtain & Hand overlay (Framer motion sliding reveal) */}
        <motion.div
          className="absolute inset-0 z-10 origin-right overflow-visible pointer-events-none"
          variants={{
            rest: { x: "0%" },
            hover: { x: "42%" }
          }}
          transition={{ type: "spring", bounce: 0.15, duration: 1.2 }}
        >
          {/* Solid Curtain Area */}
          <div className="absolute inset-0 bg-slate-50 border-l border-slate-200">
            {/* Wobbly background details on closed page */}
            <div className="absolute top-1/2 left-8 -translate-y-1/2 flex flex-col items-start gap-4">
              <span className="font-extrabold text-slate-800 tracking-wider text-sm uppercase rotate-[-3deg] bg-[#fed7aa] px-3 py-1 border-2 border-slate-900 shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                Our Creative Engine
              </span>
              <span className="text-xs text-slate-400 font-bold tracking-widest uppercase">
                Hover or tap to reveal
              </span>
            </div>
          </div>

          {/* Wobbly Ink Curtain edge line */}
          <svg
            viewBox="0 0 100 400"
            className="absolute top-0 bottom-0 left-[-48px] w-[50px] h-full text-slate-900 overflow-visible"
            preserveAspectRatio="none"
          >
            {/* Draw a thick, hand-drawn wobbly edge */}
            <path
              d="M 50 0 Q 30 100 55 200 T 45 400"
              fill="none"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
            />
            {/* Shadow fold edge */}
            <path
              d="M 50 0 Q 30 100 55 200 T 45 400"
              fill="none"
              stroke="rgba(15,23,42,0.15)"
              strokeWidth="15"
              strokeLinecap="round"
              className="z-0"
            />
          </svg>

          {/* Cartoon Hand Pulling the Curtain */}
          <svg
            viewBox="0 0 100 100"
            className="absolute top-[48%] left-[-60px] w-20 h-20 text-slate-900 overflow-visible z-20"
          >
            <motion.g
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {/* Hand/Fist Path clasping wobbly edge */}
              <path
                d="M 90 35 C 80 32, 60 30, 52 38 C 45 45, 48 55, 54 58 C 45 60, 48 70, 56 72 C 50 74, 52 82, 62 82 C 75 82, 90 70, 90 55"
                fill="white"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Knuckle definition lines */}
              <path d="M 55 46 Q 62 44 68 48" stroke="currentColor" strokeWidth="2.5" fill="none" />
              <path d="M 58 58 Q 65 56 72 60" stroke="currentColor" strokeWidth="2.5" fill="none" />
              <path d="M 62 70 Q 70 68 76 72" stroke="currentColor" strokeWidth="2.5" fill="none" />

              {/* Arm extending out right */}
              <path
                d="M 85 40 L 120 42"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M 85 70 L 120 68"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </motion.g>
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
