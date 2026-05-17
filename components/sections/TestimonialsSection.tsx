"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, ArrowRight, ArrowLeft, MessageSquare, Sparkles, TrendingUp } from "lucide-react";

const testimonials = [
  {
    name: "Siddharth Birla",
    role: "Director of Digital",
    company: "Birla Ventures",
    metric: "+300% Scaling Boost",
    quote: "We started as a small team with a local footprint and they scaled us to global standards. Their team didn't just build our app; they engineered a modular creative engine that revolutionized our lead acquisition. Absolutely world-class.",
    bubbleText: "Literally transformed our brand! 🔥",
    avatarColor: "bg-[#fed7aa]",
    textColor: "text-orange-950",
    tag: "GARAGE TO GLOBAL"
  },
  {
    name: "Ananya Mehta",
    role: "Founder & CEO",
    company: "LuxeSpace",
    metric: "5x Inbound Conversions",
    quote: "The interactive design patterns they implemented for our portal are unmatched. Our customer retention doubled within 30 days of launch. They are, hands down, the only digital agency you will ever need.",
    bubbleText: "The interactive designs are unreal! 🚀",
    avatarColor: "bg-[#a7f3d0]",
    textColor: "text-emerald-950",
    tag: "GRAPHIC & WEB"
  },
  {
    name: "Rohan Khanna",
    role: "VP of Product",
    company: "SaaSify",
    metric: "Saved 40+ Eng Hours/Wk",
    quote: "Our portal went from a slow, cluttered dashboard layout to an absolute high-speed visual masterpiece. Their custom SEO and clean Next.js architecture instantly pushed us to page 1. Highly, highly recommended!",
    bubbleText: "Cleanest Next.js architecture ever! 🙌",
    avatarColor: "bg-[#bfdbfe]",
    textColor: "text-blue-950",
    tag: "SEO & DEVELOPMENT"
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  const handleNext = () => {
    setDirection(1);
    setIsPlaying(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIsPlaying(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeTestimonial = testimonials[activeIndex];

  // Soundwave bar heights for voice note animation
  const waveBars = [12, 28, 16, 32, 20, 40, 24, 18, 36, 14, 28, 20, 32, 16, 24, 12, 36, 18, 28, 14];

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-orange-100/40 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#fed7aa]/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-8 sm:mb-10">
          <h4 className="text-orange-600 font-bold tracking-widest text-xs sm:text-sm mb-4 uppercase">
            Real Impact Reviews
          </h4>

          <h2
            className="text-4xl sm:text-5xl font-black text-slate-900 leading-none tracking-tight max-w-3xl"
            style={{
              fontFamily: 'system-ui, sans-serif',
              textShadow: '4px 4px 0px rgba(0,0,0,0.02)'
            }}
          >
            Stories of Unlocked Growth
          </h2>
        </div>

        {/* Testimonial Core Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Interactive Story Info & Selector */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs font-bold text-orange-600 tracking-widest uppercase mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              TANGIBLE METRICS OVER WORDS
            </span>
            <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 leading-tight">
              Listen to the success from those who scaled.
            </h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              We don't count generic five-star ratings. We count business milestones, optimized engineering pipelines, and scaled operations. Swipe through to view real statistics.
            </p>

            {/* Interaction Row: Prev/Next Buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrev}
                className="w-14 h-14 rounded-2xl border border-slate-100 bg-slate-50 text-slate-800 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-14 h-14 rounded-2xl border border-slate-100 bg-slate-50 text-slate-800 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
              >
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="ml-4 flex items-center gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > activeIndex ? 1 : -1);
                      setIsPlaying(false);
                      setActiveIndex(i);
                    }}
                    className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === i ? "w-8 bg-orange-600" : "w-2.5 bg-slate-200"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: The Sleek Testimonial Card Deck */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[440px] sm:min-h-[480px]">
            <div className="relative w-full max-w-2xl overflow-visible">

              {/* Stacked Cards behind the main active card */}
              <div className="absolute inset-0 pointer-events-none">
                {testimonials.map((t, idx) => {
                  if (idx === activeIndex) return null;

                  // Simple offset positioning for stack depth
                  const isNext = (activeIndex + 1) % testimonials.length === idx;
                  const offsetScale = isNext ? 0.95 : 0.90;
                  const offsetTranslateY = isNext ? 12 : 24;
                  const offsetRotate = isNext ? 2 : -2;

                  return (
                    <div
                      key={idx}
                      className="absolute inset-0 bg-slate-50/80 border border-slate-100/60 rounded-[2.5rem] shadow-sm transition-all duration-500 origin-bottom"
                      style={{
                        transform: `translateY(${offsetTranslateY}px) scale(${offsetScale}) rotate(${offsetRotate}deg)`,
                        zIndex: testimonials.length - Math.abs(activeIndex - idx)
                      }}
                    />
                  );
                })}
              </div>

              {/* Main Active Testimonial Card */}
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  initial={{
                    opacity: 0,
                    x: direction * 150,
                    rotate: direction * 5,
                    scale: 0.95
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    rotate: 0,
                    scale: 1
                  }}
                  exit={{
                    opacity: 0,
                    x: -direction * 150,
                    rotate: -direction * 5,
                    scale: 0.95
                  }}
                  transition={{ type: "spring", stiffness: 120, damping: 18 }}
                  className="relative z-10 w-full bg-white border border-slate-100 rounded-[2.5rem] p-8 sm:p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.06)] flex flex-col justify-between origin-bottom"
                >

                  {/* Card Header: Client Tag & Huge Metric */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <span className="text-xs font-black text-slate-800 tracking-wider bg-slate-100 px-4 py-1.5 rounded-full uppercase">
                      {activeTestimonial.tag}
                    </span>

                    {/* Highly Interactive Core Metric Badge */}
                    <div className="flex items-center gap-2 bg-[#fed7aa] text-orange-950 px-4.5 py-1.5 rounded-full font-black text-sm tracking-wide shadow-sm">
                      <TrendingUp className="w-4 h-4 stroke-[3]" />
                      {activeTestimonial.metric}
                    </div>
                  </div>

                  {/* Body Quote */}
                  <blockquote className="text-slate-800 text-lg sm:text-xl font-bold leading-relaxed mb-8 select-none">
                    "{activeTestimonial.quote}"
                  </blockquote>

                  {/* Voice Note Simulated Player */}
                  {/* <div className="bg-slate-50 border border-slate-100/60 rounded-3xl p-4 sm:p-5 flex items-center gap-4 mb-8 relative overflow-hidden">

                    Wavy Transcription Bubble popping up on play
                    <AnimatePresence>
                      {isPlaying && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.8 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.8 }}
                          className={`absolute -top-12 left-12 ${activeTestimonial.avatarColor} border-[2px] border-slate-900 shadow-[3px_3px_0px_#0f172a] px-4 py-1 rounded-2xl z-20`}
                          style={{ borderRadius: '15px 15px 15px 0px' }}
                        >
                          <p className={`text-xs font-black uppercase tracking-tight ${activeTestimonial.textColor}`}>
                            {activeTestimonial.bubbleText}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    Circular Play Button
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-12 h-12 rounded-2xl bg-orange-600 text-white flex items-center justify-center hover:bg-orange-700 hover:scale-105 active:scale-95 transition-all shadow-md shrink-0 relative z-10"
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 fill-white stroke-none" />
                      ) : (
                        <Play className="w-5 h-5 fill-white stroke-none translate-x-[1px]" />
                      )}
                    </button>

                    Soundwave Bars
                    <div className="flex items-center justify-between gap-1 flex-grow h-10 px-2 overflow-hidden select-none">
                      {waveBars.map((baseHeight, idx) => (
                        <motion.div
                          key={idx}
                          className="w-1 bg-slate-900 rounded-full"
                          animate={isPlaying ? {
                            height: [
                              `${baseHeight * 0.4}px`,
                              `${baseHeight * 1.1}px`,
                              `${baseHeight * 0.7}px`,
                              `${baseHeight * 0.4}px`
                            ]
                          } : {
                            height: "4px"
                          }}
                          transition={{
                            duration: 0.8 + (idx % 3) * 0.15,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: idx * 0.02
                          }}
                        />
                      ))}
                    </div>

                    Audio Status Info
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 shrink-0">
                      <Volume2 className="w-4 h-4" />
                      <span>{isPlaying ? "LIVE VOICE" : "VOICE NOTE"}</span>
                    </div>
                  </div> */}

                  {/* Card Footer: Client Info */}
                  <div className="flex items-center gap-4">
                    {/* Wobbly Custom Initials Avatar */}
                    <div
                      className={`w-14 h-14 ${activeTestimonial.avatarColor} border-[2.5px] border-slate-900 flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#0f172a]`}
                      style={{ borderRadius: '45% 55% 50% 50% / 50% 50% 50% 50%' }}
                    >
                      <span className={`font-black text-lg ${activeTestimonial.textColor}`}>
                        {activeTestimonial.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>

                    {/* Identity Details */}
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-base leading-none mb-1">
                        {activeTestimonial.name}
                      </h4>
                      <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">
                        {activeTestimonial.role} at <span className="text-orange-600 font-extrabold">{activeTestimonial.company}</span>
                      </p>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
