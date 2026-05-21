"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Plus } from "lucide-react";

// Custom inline SVG icons for robust compilation across Lucide versions
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.54a29 29 0 0 0 .46 5.12 2.78 2.78 0 0 0 1.95 1.96c1.71.46 8.59.46 8.59.46s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96 29 29 0 0 0 .46-5.12 29 29 0 0 0-.46-5.12z" />
    <polygon points="9.75 15.02 15.5 11.54 9.75 8.06 9.75 15.02" />
  </svg>
);

const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

// Explicit TypeScript Interface definitions to avoid "possibly undefined" compiler warnings
interface PlatformMockup {
  avatar: string;
  handle: string;
  location?: string;
  image?: string;
  caption?: string;
  likes?: string;
  comments?: { user: string; text: string }[];
  text?: string;
  role?: string;
  username?: string;
  retweets?: string;
  title?: string;
  views?: string;
  thumbnail?: string;
  music?: string;
  bgVideoImage?: string;
}

interface PlatformItem {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  accent: string;
  bgAccent: string;
  description: string;
  mockup: PlatformMockup;
}

export default function SocialPlatforms() {
  const [activeTab, setActiveTab] = useState(0);

  const platforms: PlatformItem[] = [
    {
      name: "Instagram",
      icon: InstagramIcon,
      accent: "text-pink-500",
      bgAccent: "bg-pink-500/10",
      description: "Visual grid planning, grid styling, Reels curation, story interactions, and bio sales setups.",
      mockup: {
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=60",
        handle: "vibe.beverage",
        location: "New York, NY",
        image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&auto=format&fit=crop&q=80",
        caption: "Sip into flow state. Crafted with organic herbs for mental clarity. 🌿 #stateofflow #drinkvibe #healthyenergy",
        likes: "12,854",
        comments: [
          { user: "alex_j", text: "Ordered a box, this looks amazing! 🔥" },
          { user: "creative.minds", text: "Branding is on point." }
        ]
      }
    },
    {
      name: "LinkedIn",
      icon: LinkedinIcon,
      accent: "text-blue-650",
      bgAccent: "bg-blue-600/10",
      description: "B2B thought leadership updates, corporate event promo, slides, and executive profile styling.",
      mockup: {
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=60",
        handle: "Siddharth Birla",
        role: "Managing Director at Birla Ventures",
        text: "How we scaled customer retention by +85% in under 90 days without raising budget. 🧵\n\n1. Built consistent visual updates.\n2. Addressed queries in comments under 15 mins.\n3. Shared real founder struggles.\n\nRead the full breakdown in slides below 👇",
        likes: "482",
        comments: [
          { user: "Sarah Jenkins", text: "Spot on Siddharth, consistency is key!" }
        ]
      }
    },
    {
      name: "Twitter/X",
      icon: TwitterIcon,
      accent: "text-slate-400",
      bgAccent: "bg-slate-500/10",
      description: "Real-time thread updates, industry commentary, trend hijacking, and daily community lines.",
      mockup: {
        avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=80&auto=format&fit=crop&q=60",
        handle: "Brand Architect",
        username: "@brand_architect",
        text: "Stop writing boring copy. \n\nPeople scroll past standard corporate templates. Design custom doodles, add bold claims, back them up with analytics. \n\nThread below (1/5) 🧵",
        likes: "2.4K",
        retweets: "420"
      }
    },
    {
      name: "YouTube",
      icon: YoutubeIcon,
      accent: "text-red-600",
      bgAccent: "bg-red-600/10",
      description: "Long-form content scheduling, video Short scripts, custom thumbnail graphic drafts, and meta SEO.",
      mockup: {
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=60",
        handle: "Digital Agency Vibe",
        title: "How to Build a Conversion Landing Page (Figma Tutorial)",
        views: "45K views • 2 weeks ago",
        likes: "3.2K",
        thumbnail: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?w=400&auto=format&fit=crop&q=80"
      }
    },
    {
      name: "TikTok",
      icon: TiktokIcon,
      accent: "text-cyan-400",
      bgAccent: "bg-cyan-500/10",
      description: "Highly engaging video scripts, trends, TikTok shop sync, and rapid audience growth models.",
      mockup: {
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=60",
        handle: "@apexsaas",
        caption: "Behind the scenes of scaling a B2B SaaS startup. Day 45/100 🚀 #startup #saas #dayinthelife",
        likes: "185.4K",
        music: "Original Sound - apexsaas",
        bgVideoImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&auto=format&fit=crop&q=80"
      }
    }
  ];

  return (
    <section className="py-28 bg-white text-slate-900 relative overflow-hidden">
      {/* Background wobbly lines */}
      <div className="absolute inset-0 opacity-[0.01] bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        
        {/* Header */}
        <div className="w-full mb-20 border-l-4 border-orange-500 pl-6 text-left">
          <span className="font-extrabold text-xs text-orange-600 uppercase tracking-widest block mb-2">
            Interactive Channels
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide max-w-4xl leading-[1.1] text-slate-950">
            Platforms We Manage
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl mt-3 font-medium">
            Click through the switcher to view live simulations of our custom platform-specific design templates.
          </p>
        </div>

        {/* Asymmetrical Switcher Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Platform Selector Menu */}
          <div className="lg:col-span-5 space-y-4 text-left">
            {platforms.map((plat, idx) => {
              const Icon = plat.icon;
              const isActive = activeTab === idx;

              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full flex items-start gap-4 p-5 rounded-2xl border transition-all duration-300 outline-none ${
                    isActive
                      ? "bg-slate-950 border-slate-950 text-white shadow-xl translate-x-2"
                      : "bg-slate-50 border-slate-100 text-slate-700 hover:bg-slate-100 hover:border-slate-200"
                  }`}
                >
                  <div className={`p-2.5 rounded-xl shrink-0 ${isActive ? "bg-orange-600 text-white" : `${plat.bgAccent} ${plat.accent}`}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="block font-black text-base uppercase tracking-wider">
                      {plat.name}
                    </span>
                    <span className={`block text-xs leading-relaxed font-medium ${isActive ? "text-slate-400" : "text-slate-500"}`}>
                      {plat.description}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Interactive Mockup Viewport */}
          <div className="lg:col-span-7 flex justify-center relative">
            
            {/* Background Blob behind device */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-amber-500/10 rounded-full blur-3xl pointer-events-none scale-75" />

            {/* Smart Phone Device Body */}
            <div className="relative w-full max-w-[340px] aspect-[9/18] bg-slate-900 border-[8px] border-slate-950 rounded-[3rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col justify-between p-3 select-none">
              
              {/* Device Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-950 rounded-b-2xl z-50 flex items-center justify-center">
                <div className="w-3.5 h-3.5 rounded-full bg-slate-900 border border-slate-800" />
              </div>

              {/* Viewport Content */}
              <div className="flex-1 bg-white rounded-[2.2rem] overflow-hidden relative flex flex-col justify-between pt-6 text-left">
                
                <AnimatePresence mode="wait">
                  {activeTab === 0 && (
                    <motion.div
                      key="instagram"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex-1 flex flex-col justify-between text-xs"
                    >
                      {/* Insta Header */}
                      <div className="p-3 border-b flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img src={platforms[0].mockup?.avatar} className="w-8 h-8 rounded-full object-cover border" />
                          <div>
                            <span className="font-extrabold block text-[11px]">{platforms[0].mockup?.handle}</span>
                            <span className="text-[9px] text-slate-400 block">{platforms[0].mockup?.location}</span>
                          </div>
                        </div>
                        <div className="w-5 h-5 rounded bg-slate-100 flex items-center justify-center text-slate-700 font-extrabold">+</div>
                      </div>

                      {/* Post Photo */}
                      <div className="flex-1 min-h-[160px] relative bg-slate-100">
                        <img src={platforms[0].mockup?.image} className="w-full h-full object-cover" />
                        
                        {/* Dynamic Heart overlay animation */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Sparkles className="w-8 h-8 text-white drop-shadow-md animate-pulse" />
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="p-3 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-red-500 font-bold">❤️</span>
                            <span className="text-slate-500 font-bold">💬</span>
                            <span className="text-slate-500 font-bold">📤</span>
                          </div>
                          <span className="text-slate-500 font-bold">🔖</span>
                        </div>
                        <div className="font-extrabold text-[10px]">{platforms[0].mockup?.likes} likes</div>
                        <p className="text-[10px] leading-relaxed">
                          <span className="font-extrabold mr-1.5">{platforms[0].mockup?.handle}</span>
                          {platforms[0].mockup?.caption}
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 1 && (
                    <motion.div
                      key="linkedin"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex-1 flex flex-col justify-between text-xs p-3.5 space-y-4"
                    >
                      {/* LinkedIn Header */}
                      <div className="flex items-center gap-2">
                        <img src={platforms[1].mockup?.avatar} className="w-9 h-9 rounded-full object-cover border" />
                        <div>
                          <span className="font-extrabold block text-xs">{platforms[1].mockup?.handle}</span>
                          <span className="text-[9px] text-slate-400 block leading-tight">{platforms[1].mockup?.role}</span>
                        </div>
                      </div>

                      {/* Post Text */}
                      <p className="text-[11px] leading-relaxed text-slate-750 whitespace-pre-line font-medium">
                        {platforms[1].mockup?.text}
                      </p>

                      {/* Mock slide preview */}
                      <div className="bg-slate-50 border rounded-xl p-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded bg-orange-650 text-white flex items-center justify-center font-black">PDF</div>
                          <div>
                            <span className="block font-bold text-[10px]">retention-guide.pdf</span>
                            <span className="block text-[8px] text-slate-400">12 pages • 4.2 MB</span>
                          </div>
                        </div>
                        <span className="text-slate-500 font-bold">📤</span>
                      </div>

                      {/* Stats */}
                      <div className="border-t pt-3 flex items-center justify-between text-[9px] text-slate-500 font-bold">
                        <span>👍 {platforms[1].mockup?.likes} reactions</span>
                        <span>{platforms[1].mockup?.comments?.length || 0} comment</span>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 2 && (
                    <motion.div
                      key="twitter"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex-1 flex flex-col justify-between text-xs bg-slate-950 text-white p-4"
                    >
                      <div className="space-y-4">
                        {/* Twitter Header */}
                        <div className="flex items-center gap-2">
                          <img src={platforms[2].mockup?.avatar} className="w-8 h-8 rounded-full object-cover" />
                          <div>
                            <span className="font-extrabold block text-[11px]">{platforms[2].mockup?.handle}</span>
                            <span className="text-[9px] text-slate-500 block">{platforms[2].mockup?.username}</span>
                          </div>
                        </div>

                        {/* Tweet Text */}
                        <p className="text-xs leading-relaxed text-slate-200 whitespace-pre-line">
                          {platforms[2].mockup?.text}
                        </p>
                      </div>

                      {/* Actions footer */}
                      <div className="border-t border-slate-800 pt-3 flex justify-between text-[10px] text-slate-500 font-bold">
                        <span>💬 48</span>
                        <span>🔁 {platforms[2].mockup?.retweets}</span>
                        <span className="text-orange-500">❤️ {platforms[2].mockup?.likes}</span>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 3 && (
                    <motion.div
                      key="youtube"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex-1 flex flex-col justify-between text-xs bg-slate-950 text-white"
                    >
                      {/* Video Thumbnail Area (Simulated Figma Canvas Mockup) */}
                      <div className="relative aspect-[16/9] w-full bg-slate-950 overflow-hidden flex flex-col justify-between p-3.5 border-b border-slate-900 group">
                        {/* Figma Topbar */}
                        <div className="flex items-center justify-between text-[7px] text-slate-500 border-b border-slate-900/60 pb-1.5 z-10">
                          <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                            <span className="font-semibold text-slate-400">Drafts / UI UX wireframe</span>
                          </div>
                          <span className="font-bold">75%</span>
                        </div>

                        {/* Figma Canvas Grid Area */}
                        <div className="flex-1 grid grid-cols-3 gap-2 py-2.5 z-10">
                          {/* Frame 1 */}
                          <div className="bg-slate-900/80 rounded border border-slate-800 p-1 flex flex-col justify-between">
                            <div className="w-4 h-1 bg-orange-500/40 rounded" />
                            <div className="space-y-0.5">
                              <div className="w-full h-1 bg-slate-800 rounded" />
                              <div className="w-3/4 h-1 bg-slate-800 rounded" />
                            </div>
                          </div>
                          {/* Frame 2 (Active Selection Outline) */}
                          <div className="bg-slate-900/80 rounded border-2 border-orange-500 p-1 flex flex-col justify-between relative">
                            <div className="w-5 h-1 bg-orange-500 rounded" />
                            <div className="space-y-0.5">
                              <div className="w-full h-1 bg-slate-800 rounded" />
                              <div className="w-full h-1 bg-slate-800 rounded" />
                              <div className="w-1/2 h-1 bg-orange-500/40 rounded" />
                            </div>
                            {/* Blue scale handle */}
                            <div className="absolute right-0 bottom-0 w-1.5 h-1.5 bg-orange-500 rounded-sm translate-x-0.5 translate-y-0.5" />
                          </div>
                          {/* Frame 3 */}
                          <div className="bg-slate-900/80 rounded border border-slate-800 p-1 flex flex-col justify-between">
                            <div className="w-3 h-1 bg-slate-800 rounded" />
                            <div className="space-y-0.5">
                              <div className="w-full h-1 bg-slate-800 rounded" />
                              <div className="w-2/3 h-1 bg-slate-800 rounded" />
                            </div>
                          </div>
                        </div>

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-20">
                          <div className="w-11 h-11 rounded-full bg-orange-650 flex items-center justify-center text-white shadow-lg animate-pulse">
                            <span className="text-white text-xs ml-0.5">▶</span>
                          </div>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="p-3 flex-1 flex flex-col justify-between">
                        <div className="space-y-1">
                          <h4 className="font-extrabold text-[11px] leading-snug">{platforms[3].mockup?.title}</h4>
                          <span className="text-[9px] text-slate-500 block">{platforms[3].mockup?.views}</span>
                        </div>

                        {/* Channel Badge */}
                        <div className="flex items-center justify-between border-t border-slate-900 pt-3">
                          <div className="flex items-center gap-2">
                            <img src={platforms[3].mockup?.avatar} className="w-7 h-7 rounded-full object-cover" />
                            <div>
                              <span className="font-extrabold block text-[10px]">{platforms[3].mockup?.handle}</span>
                              <span className="text-[8px] text-slate-500 block">120K subscribers</span>
                            </div>
                          </div>
                          <button className="bg-white text-slate-950 text-[9px] font-black uppercase px-2.5 py-1 rounded-full">
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 4 && (
                    <motion.div
                      key="tiktok"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex-1 flex flex-col justify-end text-white relative bg-slate-950"
                    >
                      {/* Backdrop simulated portrait video */}
                      <div className="absolute inset-0 z-0">
                        <img src={platforms[4].mockup?.bgVideoImage} className="w-full h-full object-cover opacity-60" />
                      </div>

                      {/* Right bar actions */}
                      <div className="absolute right-2 bottom-20 flex flex-col items-center gap-4 z-10 text-[9px] font-extrabold text-slate-300">
                        <div className="flex flex-col items-center">
                          <div className="w-9 h-9 rounded-full bg-slate-900/80 flex items-center justify-center text-red-500 border border-slate-700">
                            <span>❤️</span>
                          </div>
                          <span>{platforms[4].mockup?.likes}</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-9 h-9 rounded-full bg-slate-900/80 flex items-center justify-center text-white border border-slate-700">
                            <span>💬</span>
                          </div>
                          <span>4.2K</span>
                        </div>
                      </div>

                      {/* Video Bottom Copy overlay */}
                      <div className="p-3.5 space-y-1 relative z-10 bg-gradient-to-t from-black/85 via-black/45 to-transparent text-[10px]">
                        <span className="font-extrabold text-white block">{platforms[4].mockup?.handle}</span>
                        <p className="text-slate-200 leading-relaxed font-medium">{platforms[4].mockup?.caption}</p>
                        <span className="text-[9px] text-slate-400 block">🎵 {platforms[4].mockup?.music}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
