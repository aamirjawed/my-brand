"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Sparkles, Play, ChevronRight, Heart } from "lucide-react";

export default function SocialPortfolio() {
  const [activeTab, setActiveTab] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [likesCount, setLikesCount] = useState(124);

  const projects = [
    {
      client: "Intellect Global",
      title: "B2B Thought Leadership",
      category: "post designs & branding",
      metrics: [
        { label: "LinkedIn Impressions", value: "+340%" },
        { label: "Inbound Leads", value: "+85" },
        { label: "Profile Views", value: "14K/mo" }
      ],
      description: "A comprehensive brand styling setup for corporate LinkedIn pages, converting dense whitepapers into visually digestible slideshows and graphic grids.",
      highlights: [
        "Consistent brand template design libraries",
        "Engaging visual slide decks outlining industry statistics",
        "SEO-optimized thought leadership post captions"
      ],
      tech: ["Brand Templates", "LinkedIn Curation", "Graphic Assets"]
    },
    {
      client: "FitLife Apparel",
      title: "Viral Reels & Video Campaign",
      category: "reels previews",
      metrics: [
        { label: "Video Views", value: "2.4M" },
        { label: "Engagement Lift", value: "+450%" },
        { label: "New Followers", value: "+18K" }
      ],
      description: "A fast-paced fitness Reels campaign focused on high-hook editing, trending audio tracking, and audience polling strategies.",
      highlights: [
        "High-engagement script structures",
        "Custom branded thumbnail cover templates",
        "Optimized caption structures and tag lines"
      ],
      tech: ["Reels Curation", "Short Video Editing", "Audio Tracking"]
    },
    {
      client: "Vibe Beverage Co.",
      title: "Community Growth Hub",
      category: "engagement setups",
      metrics: [
        { label: "Daily Comments", value: "400+" },
        { label: "Story Participation", value: "88%" },
        { label: "Direct Inquiries", value: "3x Lift" }
      ],
      description: "Developing an active consumer brand community by hosting weekly interactive contests, user surveys, and prompt direct message replies.",
      highlights: [
        "Prompt community comment replies",
        "Interactive Instagram Story layout plans",
        "User-generated content compilation blocks"
      ],
      tech: ["Community Management", "DM Automation", "Comment Curation"]
    },
    {
      client: "Apex SaaS Group",
      title: "Lead Pipeline Campaign",
      category: "analytics & conversions",
      metrics: [
        { label: "Profile Clicks", value: "+210%" },
        { label: "Demo Registrations", value: "+380" },
        { label: "Attributed ROI", value: "4.2x" }
      ],
      description: "A conversion-focused campaign leveraging link-in-bio setups, target updates, and analytics reporting to track social leads directly to dashboard sign-ups.",
      highlights: [
        "Frictionless landing page bio routers",
        "A/B caption hook testing metrics",
        "Bi-weekly dashboard conversion analysis"
      ],
      tech: ["Conversion Funnels", "Link-in-Bio Systems", "Reporting Analytics"]
    }
  ];

  // Slides for B2B Thought Leadership Carousel
  const slides = [
    { title: "THE COST OF DOWNTIME", value: "$4.5M/Hr", desc: "Average enterprise infrastructure failure cost." },
    { title: "SECURITY RISK INDEX", value: "78% High", desc: "Startups leaving database ports exposed." },
    { title: "THE SOLUTION SYSTEM", value: "100% Secure", desc: "How custom server staging saves overhead." }
  ];

  return (
    <section className="py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute right-0 bottom-0 w-[40rem] h-[40rem] bg-orange-650/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        
        {/* Header with Switcher Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-6">
          <div className="border-l-4 border-orange-500 pl-6 text-left">
            <span className="font-extrabold text-xs text-orange-400 uppercase tracking-widest block mb-2">
              Our Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide leading-none">
              Social Campaigns We’ve Managed
            </h2>
          </div>

          {/* Minimalist Switcher */}
          <div className="flex flex-wrap gap-4 border-b border-slate-800 pb-2">
            {projects.map((proj, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveTab(idx);
                  setCarouselIndex(0);
                }}
                className={`pb-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-300 relative ${
                  activeTab === idx ? "text-orange-400" : "text-slate-400 hover:text-white"
                }`}
              >
                {proj.client}
                {activeTab === idx && (
                  <motion.div
                    layoutId="socialPortfolioActiveTabLine"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-500"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Copywriting & Metrics */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-2">
                <span className="text-orange-400 text-xs font-black uppercase tracking-widest block">
                  {projects[activeTab].client} Strategy
                </span>
                <span className="px-2.5 py-0.5 bg-slate-900 border border-slate-800 text-[10px] text-slate-400 font-extrabold uppercase tracking-widest rounded-full">
                  {projects[activeTab].category}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-wide text-white">
                {projects[activeTab].title}
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                {projects[activeTab].description}
              </p>
            </div>

            {/* Metrics Breakdown */}
            <div className="grid grid-cols-3 gap-6 border-y border-slate-800 py-8">
              {projects[activeTab].metrics.map((metric, mIdx) => (
                <div key={mIdx} className="text-left">
                  <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest font-bold mt-2">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="space-y-3 text-left">
              {projects[activeTab].highlights.map((highlight, hIdx) => (
                <div key={hIdx} className="flex items-center gap-3 text-slate-300 text-sm sm:text-base font-medium">
                  <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 pt-4">
              {projects[activeTab].tech.map((t, tIdx) => (
                <span key={tIdx} className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs font-bold text-slate-400">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side: HIGHLY CREATIVE INTERACTIVE SIMULATORS */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <div className="w-full max-w-[460px] aspect-[16/11] bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-2xl relative flex flex-col justify-between overflow-hidden">
              
              <AnimatePresence mode="wait">
                {/* 1. B2B Carousel Simulator */}
                {activeTab === 0 && (
                  <motion.div
                    key="b2b"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex-1 flex flex-col justify-between"
                  >
                    {/* Simulator Header */}
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs text-slate-400">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-slate-800 border flex items-center justify-center font-bold text-orange-450">I</div>
                        <span className="font-extrabold text-white text-[11px]">Intellect Global Inc.</span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-bold">1/3 slides</span>
                    </div>

                    {/* Active Slide Display */}
                    <div className="flex-1 flex flex-col justify-center items-center text-center p-4">
                      <motion.div
                        key={carouselIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-3"
                      >
                        <span className="text-[9px] font-black text-orange-500 tracking-widest uppercase block">
                          {slides[carouselIndex].title}
                        </span>
                        <span className="text-4xl sm:text-5xl font-black text-white block tracking-tight">
                          {slides[carouselIndex].value}
                        </span>
                        <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                          {slides[carouselIndex].desc}
                        </p>
                      </motion.div>
                    </div>

                    {/* Click trigger slider */}
                    <button
                      onClick={() => setCarouselIndex((prev) => (prev + 1) % slides.length)}
                      className="w-full flex items-center justify-center gap-2 bg-orange-650 hover:bg-orange-600 text-white py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider transition-all"
                    >
                      Next Slide Preview <ChevronRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                )}

                {/* 2. Viral Reels Video Simulator */}
                {activeTab === 1 && (
                  <motion.div
                    key="reels"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex-1 flex flex-col justify-between relative"
                  >
                    {/* Simulated Portrait Stream Frame */}
                    <div className="absolute inset-0 bg-slate-950/40 rounded-xl overflow-hidden z-0">
                      <img
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80"
                        className="w-full h-full object-cover opacity-70"
                        alt="Reels draft video"
                      />
                    </div>

                    {/* Content Details */}
                    <div className="relative z-10 flex-1 flex flex-col justify-between p-2">
                      <div className="flex items-center justify-between text-white text-[10px] bg-slate-950/50 p-2.5 rounded-xl border border-white/5 backdrop-blur-sm">
                        <span>🔥 Trending Workout Music Track</span>
                        <span className="bg-red-600 text-[8px] font-black uppercase px-2 py-0.5 rounded">LIVE PREVIEW</span>
                      </div>

                      {/* Animated Play click */}
                      <div className="flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-orange-600/90 border border-white/20 flex items-center justify-center text-white shadow-xl animate-pulse">
                          <Play className="w-7 h-7 fill-white stroke-none ml-1" />
                        </div>
                      </div>

                      {/* Interactions */}
                      <div className="bg-slate-950/80 border border-slate-800/80 backdrop-blur-sm p-3 rounded-xl flex items-center justify-between text-xs">
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => setLikesCount(prev => prev + 1)}
                            className="flex items-center gap-1.5 text-red-500 font-bold hover:scale-115 transition-transform"
                          >
                            <Heart className="w-4 h-4 fill-red-500" /> {likesCount}
                          </button>
                          <span className="text-slate-400 font-medium">💬 1,482 comments</span>
                        </div>
                        <span className="text-orange-450 font-black">Reels Hook</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 3. Community Dialogue Simulator */}
                {activeTab === 2 && (
                  <motion.div
                    key="community"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex-1 flex flex-col justify-between"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs">
                      <span className="font-extrabold text-white text-[11px]">Vibe Beverage Brand Feed</span>
                      <span className="text-emerald-500 font-black flex items-center gap-1">
                        ● 45 active users online
                      </span>
                    </div>

                    {/* Chat Bubble Flow simulator */}
                    <div className="flex-1 flex flex-col justify-center space-y-3 p-3">
                      <div className="flex gap-2 items-start text-xs text-left">
                        <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-300">RK</div>
                        <div className="bg-slate-800 border border-slate-700/60 p-2.5 rounded-2xl rounded-tl-none max-w-[280px]">
                          <span className="block font-bold text-orange-450 mb-0.5">Riya Kapoor</span>
                          <span className="text-slate-200">Where can I order the herbal energy drinks in Delhi? 🌿</span>
                        </div>
                      </div>

                      <div className="flex gap-2 items-start text-xs text-left justify-end">
                        <div className="bg-orange-950 border border-orange-850 p-2.5 rounded-2xl rounded-tr-none max-w-[280px]">
                          <span className="block font-bold text-orange-400 mb-0.5">Vibe Beverage (Support)</span>
                          <span className="text-white">Hi Riya! We deliver pan-India via our website bio link. Dispatch takes 24 hours. 😊</span>
                        </div>
                        <div className="w-7 h-7 rounded-full bg-orange-600 flex items-center justify-center font-bold text-white">V</div>
                      </div>
                    </div>

                    {/* Click trigger action */}
                    <div className="border-t border-slate-800 pt-3 flex items-center justify-between text-xs text-slate-400">
                      <span>Response Speed: <strong>Under 5 Mins</strong></span>
                      <span className="text-orange-400 font-extrabold">Engagement Rate: 8.8%</span>
                    </div>
                  </motion.div>
                )}

                {/* 4. Conversion Pipeline Analytics Simulator */}
                {activeTab === 3 && (
                  <motion.div
                    key="analytics"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex-1 flex flex-col justify-between"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs">
                      <span className="font-extrabold text-white text-[11px]">Apex SaaS Conversion Dashboard</span>
                      <span className="text-[10px] text-orange-450 font-black">ROI tracking ACTIVE</span>
                    </div>

                    {/* Simulated Funnel Node Layout */}
                    <div className="flex-1 flex flex-col justify-center space-y-4 p-4 text-xs font-semibold text-left">
                      <div className="flex items-center justify-between bg-slate-800/40 p-2.5 rounded-xl border border-slate-800">
                        <span className="text-slate-400">1. Link-in-Bio Clicks</span>
                        <span className="text-white font-black">12,842 clicks</span>
                      </div>
                      
                      <div className="flex items-center justify-between bg-slate-850/60 p-2.5 rounded-xl border border-slate-800">
                        <span className="text-orange-400">2. Free Trial Registrations</span>
                        <span className="text-white font-black">+380 Sign-ups</span>
                      </div>

                      <div className="flex items-center justify-between bg-orange-950/20 p-2.5 rounded-xl border border-orange-500/20">
                        <span className="text-orange-500">3. Estimated Growth ROI</span>
                        <span className="text-orange-450 font-black">4.2x Returns</span>
                      </div>
                    </div>

                    {/* Stats footer */}
                    <div className="flex items-center gap-1 text-[10px] text-slate-500 uppercase tracking-widest justify-center">
                      <Sparkles className="w-3.5 h-3.5 text-orange-500 animate-pulse" /> Unified conversion analytics
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
