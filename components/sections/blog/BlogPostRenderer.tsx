"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, CheckCircle2, ChevronDown, Sparkles, ArrowRight, Bookmark } from "lucide-react";
import { BlogPostSection, FAQItem, CarouselSlide } from "@/lib/blog-data";

interface BlogPostRendererProps {
  sections: BlogPostSection[];
}

export default function BlogPostRenderer({ sections }: BlogPostRendererProps) {
  return (
    <div className="space-y-12">
      {sections.map((section, index) => {
        switch (section.type) {
          case "intro":
            return (
              <div key={index} className="space-y-6">
                {section.paragraphs?.map((p, i) => (
                  <p key={i} className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
                    {p}
                  </p>
                ))}
              </div>
            );

          case "text":
            return (
              <div key={index} className="space-y-6 pt-4 text-left">
                {section.heading && (
                  <h2 className="text-2xl sm:text-3xl font-black uppercase text-white mt-12 mb-6 border-l-4 border-orange-500 pl-4 tracking-wide">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs?.map((p, i) => (
                  <p key={i} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            );

          case "list":
            return (
              <div key={index} className="space-y-6 text-left">
                {section.heading && (
                  <h3 className="text-xl font-bold uppercase text-white mt-8 mb-4">
                    {section.heading}
                  </h3>
                )}
                <ul className="grid grid-cols-1 gap-4">
                  {section.listItems?.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );

          case "carousel":
            return (
              <BlogCarousel
                key={index}
                heading={section.heading}
                slides={section.carouselSlides || []}
              />
            );

          case "table":
            return (
              <div key={index} className="space-y-6 pt-4 text-left">
                {section.heading && (
                  <h2 className="text-2xl sm:text-3xl font-black uppercase text-white mt-12 mb-6 border-l-4 border-orange-500 pl-4 tracking-wide">
                    {section.heading}
                  </h2>
                )}
                <div className="overflow-x-auto border border-slate-900 rounded-2xl bg-slate-950/60 backdrop-blur-sm">
                  <table className="w-full text-left border-collapse text-slate-300">
                    <thead>
                      <tr className="bg-slate-900/60 border-b border-slate-900 text-white font-black uppercase text-[10px] tracking-widest">
                        {section.tableHeaders?.map((header, i) => (
                          <th key={i} className="p-4 sm:p-5 border-r border-slate-900 last:border-0">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-900">
                      {section.tableRows?.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-900/20 transition-colors">
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              className={`p-4 sm:p-5 text-xs sm:text-sm border-r border-slate-900 last:border-0 ${
                                cIdx === 0 ? "font-bold text-white" : ""
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );

          case "cta":
            return (
              <div
                key={index}
                className="p-8 sm:p-10 bg-slate-950 border border-slate-900 rounded-3xl text-center my-16 relative overflow-hidden group/cta"
              >
                <div className="absolute right-0 top-0 w-48 h-48 bg-orange-500/5 rounded-full blur-[80px] pointer-events-none"></div>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide mb-3">
                  {section.ctaTitle || "Ready to scale your business?"}
                </h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6 max-w-lg mx-auto font-medium">
                  {section.ctaText}
                </p>
                <Link
                  href={section.ctaLink || "/landing-page-development"}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-950 hover:bg-slate-100 rounded-full font-bold text-xs uppercase tracking-widest transition-all"
                >
                  Explore Services
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );

          case "faq":
            return (
              <BlogFAQ
                key={index}
                heading={section.heading}
                faqs={section.faqs || []}
              />
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

/* CAROUSEL SUB-COMPONENT */
interface BlogCarouselProps {
  heading?: string;
  slides: CarouselSlide[];
}

function BlogCarousel({ heading, slides }: BlogCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (slides.length === 0) return null;

  return (
    <div className="my-14 space-y-6 text-left">
      {heading && (
        <h3 className="text-2xl font-black uppercase text-white tracking-wide flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-orange-500" />
          {heading}
        </h3>
      )}

      <div className="relative bg-slate-950 border border-slate-900 rounded-3xl p-6 sm:p-10 overflow-hidden flex flex-col justify-between min-h-[280px]">
        {/* Decorative glows */}
        <div className="absolute right-0 top-0 w-32 h-32 bg-orange-600/5 rounded-full blur-[60px]" />
        
        {/* Slide Counter */}
        <div className="flex items-center justify-between border-b border-slate-900 pb-4 mb-6">
          <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest">
            Interactive Walkthrough
          </span>
          <span className="text-xs font-mono font-bold text-slate-500">
            {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
        </div>

        {/* Slide Content with AnimatePresence */}
        <div className="flex-1 flex flex-col justify-center min-h-[120px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              {slides[activeIndex].highlight && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                  <Bookmark className="w-3 h-3 text-orange-500" />
                  {slides[activeIndex].highlight}
                </span>
              )}
              <h4 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide">
                {slides[activeIndex].title}
              </h4>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                {slides[activeIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between border-t border-slate-900 pt-6 mt-6">
          {/* Progress dots */}
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? "bg-orange-500 w-6" : "bg-slate-800 hover:bg-slate-700"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Chevrons */}
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full border border-slate-800 text-slate-400 hover:text-white hover:border-slate-750 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full border border-slate-800 text-slate-400 hover:text-white hover:border-slate-750 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* FAQ SUB-COMPONENT */
interface BlogFAQProps {
  heading?: string;
  faqs: FAQItem[];
}

function BlogFAQ({ heading, faqs }: BlogFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="my-14 space-y-6 text-left">
      {heading && (
        <h3 className="text-2xl font-black uppercase text-white tracking-wide border-l-4 border-orange-500 pl-4">
          {heading}
        </h3>
      )}
      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="border border-slate-900 rounded-2xl overflow-hidden bg-slate-950/20 transition-all duration-300"
            >
              <button
                onClick={() => toggleIndex(idx)}
                className="w-full flex items-center justify-between p-5 text-left text-white font-bold text-sm sm:text-base hover:bg-slate-900/40 transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-orange-500 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden border-t border-slate-900/60 bg-slate-950/60"
                  >
                    <p className="p-5 text-slate-400 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
