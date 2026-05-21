"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, TrendingUp } from "lucide-react";

const testimonials = [
  {
    name: "Siddharth Birla",
    role: "Director of Digital",
    company: "Birla Ventures",
    metric: "+300% Scaling Boost",
    quote: "They scaled our local service website into a global Next.js custom platform. Their custom-coded API integrations and responsive development completely changed how we handle customer leads.",
    avatarColor: "bg-[#fed7aa]",
    textColor: "text-orange-950",
    tag: "CUSTOM WEB DEVELOPMENT"
  },
  {
    name: "Ananya Mehta",
    role: "Founder & CEO",
    company: "LuxeSpace",
    metric: "5x Inbound Conversions",
    quote: "We needed a custom dashboard linked to our Salesforce pipeline. Their custom-coded architecture optimized our customer workflows and reduced page speed load times to under 300ms.",
    avatarColor: "bg-[#a7f3d0]",
    textColor: "text-emerald-950",
    tag: "DASHBOARD SYSTEMS"
  },
  {
    name: "Rohan Khanna",
    role: "VP of Product",
    company: "SaaSify",
    metric: "Saved 40+ Eng Hours/Wk",
    quote: "Their team built a bespoke client dashboard from scratch. The code was exceptionally structured with a custom SEO architecture, which drove more conversions without breaking database dependencies.",
    avatarColor: "bg-[#bfdbfe]",
    textColor: "text-blue-950",
    tag: "SEO ARCHITECTURE"
  }
];

export default function CustomTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
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
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
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
                    onClick={// Set direction cleanly
                      () => {
                        setDirection(i > activeIndex ? 1 : -1);
                        setActiveIndex(i);
                      }
                    }
                    className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === i ? "w-8 bg-orange-600" : "w-2.5 bg-slate-200"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Active Card Display (Zero outdated cards style - high-end clean layout) */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[380px] sm:min-h-[420px]">
            <div className="relative w-full max-w-2xl overflow-visible">

              {/* Behind card shadows */}
              <div className="absolute inset-0 pointer-events-none">
                {testimonials.map((t, idx) => {
                  if (idx === activeIndex) return null;
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

              {/* Main Card */}
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
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <span className="text-[10px] font-black text-slate-800 tracking-wider bg-slate-100 px-4 py-1.5 rounded-full uppercase">
                      {activeTestimonial.tag}
                    </span>

                    <div className="flex items-center gap-2 bg-[#fed7aa] text-orange-950 px-4.5 py-1.5 rounded-full font-black text-xs tracking-wide shadow-sm">
                      <TrendingUp className="w-4 h-4 stroke-[3]" />
                      {activeTestimonial.metric}
                    </div>
                  </div>

                  <blockquote className="text-slate-800 text-lg sm:text-xl font-bold leading-relaxed mb-8 select-none text-left">
                    "{activeTestimonial.quote}"
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 ${activeTestimonial.avatarColor} border-[2.5px] border-slate-900 flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#0f172a]`}
                      style={{ borderRadius: '45% 55% 50% 50% / 50% 50% 50% 50%' }}
                    >
                      <span className={`font-black text-lg ${activeTestimonial.textColor}`}>
                        {activeTestimonial.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>

                    <div className="text-left">
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
