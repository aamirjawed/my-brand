"use client";

import { motion } from "framer-motion";

interface ServiceSkylineDoodleProps {
  isHovered?: boolean;
}

export default function ServiceSkylineDoodle({ isHovered = false }: ServiceSkylineDoodleProps) {
  return (
    <svg 
      viewBox="0 0 1000 120" 
      className="w-full h-full text-slate-650 pointer-events-none origin-bottom preserve-3d"
      preserveAspectRatio="none"
    >
      {/* Ground wobbly horizon connector line */}
      <path 
        d="M 0 110 C 150 108 300 112 500 110 C 700 109 850 111 1000 110" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="3.2" 
        strokeLinecap="round"
      />

      {/* DOODLE SEGMENT 1: WEB DEVELOPMENT (Left side - Screen, Keyboard, Code bracket) */}
      <g>
        {/* Monitor Stand */}
        <path d="M 60 90 L 50 110 L 80 110 Z" fill="#0b0f19" stroke="currentColor" strokeWidth="2.8" strokeLinejoin="round" />
        {/* Wobbly Monitor Screen */}
        <rect x="35" y="40" width="60" height="50" rx="6" fill="#0b0f19" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        {/* Code bracket inside */}
        <motion.path 
          d="M 52 60 L 46 65 L 52 70 M 78 60 L 84 65 L 78 70" 
          fill="none" 
          stroke="#ea580c" // theme orange
          strokeWidth="2.8" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          animate={isHovered ? {
            x: [-1, 1, -1]
          } : {}}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
        {/* Slash */}
        <line x1="68" y1="58" x2="62" y2="72" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />

        {/* Connecting wobbly pathway bridge */}
        <path d="M 95 70 Q 115 65 130 80" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6,5" />
      </g>


      {/* DOODLE SEGMENT 2: SEO & GROWTH MARKETING (Growing bar chart, target) */}
      <g>
        {/* Target Ring */}
        <circle cx="205" cy="50" r="16" fill="#0b0f19" stroke="currentColor" strokeWidth="3" />
        <circle cx="205" cy="50" r="8" fill="#0b0f19" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="205" cy="50" r="2.5" fill="#ea580c" />

        {/* Bar 1 */}
        <rect x="235" y="75" width="14" height="20" rx="3" fill="#0b0f19" stroke="currentColor" strokeWidth="2.8" strokeLinejoin="round" />
        {/* Bar 2 */}
        <rect x="255" y="60" width="14" height="35" rx="3" fill="#0b0f19" stroke="currentColor" strokeWidth="2.8" strokeLinejoin="round" />
        {/* Bar 3 (Orange Accent - Peak Growth!) */}
        <motion.rect 
          x="275" 
          y="40" 
          width="14" 
          height="55" 
          rx="3" 
          fill="#fed7aa" // peach
          stroke="#ea580c" // orange
          strokeWidth="3" 
          strokeLinejoin="round"
          animate={isHovered ? {
            height: [50, 58, 50],
            y: [45, 37, 45]
          } : {}}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />

        {/* Connecting arrow path */}
        <path d="M 290 80 Q 320 70 340 90" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6,5" />
      </g>


      {/* DOODLE SEGMENT 3: GRAPHIC DESIGN (Palette, brush, pencil) */}
      <g>
        {/* Painter's Palette with organic curves */}
        <motion.path 
          d="M 430 75 C 430 55 480 50 490 70 C 495 85 460 95 440 90 C 425 88 425 78 430 75 Z" 
          fill="#0b0f19" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinejoin="round"
          animate={isHovered ? { rotate: [0, 4, -4, 0] } : {}}
          transition={{ repeat: Infinity, duration: 3 }}
          style={{ transformOrigin: "460px 75px" }}
        />
        {/* Palette slots */}
        <circle cx="445" cy="72" r="3" fill="#ea580c" />
        <circle cx="465" cy="65" r="3" fill="#fed7aa" />
        <circle cx="475" cy="80" r="3" fill="currentColor" />

        {/* Pencil cross */}
        <line x1="415" y1="95" x2="445" y2="50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <polygon points="445,50 440,54 443,48" fill="currentColor" />

        {/* Sparkle spark node */}
        <motion.path 
          d="M 515 45 L 518 50 L 525 51 L 520 55 L 521 60 L 515 57 L 509 60 L 510 55 L 505 51 L 512 50 Z" 
          fill="#eab308" // gold growth sparkle
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </g>


      {/* DOODLE SEGMENT 4: CONTENT CREATION (Notebook, Speech Quotes) */}
      <g>
        {/* Wobbly Notebook */}
        <rect x="640" y="50" width="50" height="45" rx="4" fill="#0b0f19" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        {/* Notebook binder rings */}
        <path d="M 640 58 C 635 58 635 62 640 62 M 640 70 C 635 70 635 74 640 74 M 640 82 C 635 82 635 86 640 86" fill="none" stroke="#ea580c" strokeWidth="2.8" strokeLinecap="round" />
        {/* Pages writing lines */}
        <line x1="650" y1="62" x2="680" y2="62" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="650" y1="74" x2="675" y2="74" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="650" y1="84" x2="682" y2="84" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />

        {/* Quotes Speech Bubble */}
        <motion.path 
          d="M 708 45 C 708 30 738 30 738 45 C 738 56 718 58 713 65 C 713 58 708 56 708 45 Z" 
          fill="#0b0f19" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinejoin="round"
          animate={isHovered ? {
            scale: [1, 1.05, 1],
            y: [0, -2, 0]
              } : {}}
              style={{ transformOrigin: "723px 45px" }}
            />
            {/* Quote marks */}
            <text x="716" y="47" fill="#ea580c" fontSize="10" fontWeight="bold">“</text>
          </g>


          {/* DOODLE SEGMENT 5: EVENT MANAGEMENT (Stage Spotlight & Confetti Stars) */}
          <g>
            {/* Pathway bridge */}
            <path d="M 740 70 Q 770 60 790 75" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6,5" />

            {/* Spotlight setup stand */}
            <path d="M 865 110 L 880 90 L 895 110" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
            <rect x="865" y="65" width="30" height="25" rx="3" fill="#0b0f19" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
            
            {/* Light beam line */}
            <line x1="865" y1="70" x2="830" y2="35" stroke="#fed7aa" strokeWidth="2" strokeDasharray="4,2" />
            <line x1="895" y1="70" x2="930" y2="35" stroke="#fed7aa" strokeWidth="2" strokeDasharray="4,2" />

            {/* Gold growth sparkle */}
            <motion.path 
              d="M 830 25 L 833 30 L 840 31 L 835 35 L 836 40 L 830 37 L 824 40 L 825 35 L 820 31 L 827 30 Z" 
              fill="#eab308" 
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinejoin="round"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.2, repeat: Infinity }}
            />
          </g>

        </svg>
  );
}
