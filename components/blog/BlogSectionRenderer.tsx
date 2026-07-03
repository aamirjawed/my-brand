"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Sparkles, ChevronRight, ChevronDown, ArrowUpRight } from "lucide-react";
import { BlogPostSection } from "@/lib/blog-data";

interface BlogSectionRendererProps {
  sections: BlogPostSection[];
}

export default function BlogSectionRenderer({ sections }: BlogSectionRendererProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState<{ [key: number]: number }>({});

  const handlePrevCarousel = (idx: number, slidesCount: number) => {
    setCurrentCarouselIndex((prev) => ({
      ...prev,
      [idx]: ((prev[idx] || 0) - 1 + slidesCount) % slidesCount,
    }));
  };

  const handleNextCarousel = (idx: number, slidesCount: number) => {
    setCurrentCarouselIndex((prev) => ({
      ...prev,
      [idx]: ((prev[idx] || 0) + 1) % slidesCount,
    }));
  };

  return (
    <>
      {sections.map((section, sectionIdx) => {
        const elementId = `section-${sectionIdx}`;

        switch (section.type) {
          case "intro":
            return (
              <div key={sectionIdx} className="space-y-6">
                {section.paragraphs?.map((p, i) => (
                  <p key={i} className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium text-left">
                    {p}
                  </p>
                ))}
              </div>
            );

          case "text":
            return (
              <div key={sectionIdx} id={elementId} className="space-y-6 pt-4 text-left scroll-mt-28">
                {section.heading && (
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-12 mb-6 border-l-4 border-orange-500 pl-4 tracking-tight">
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
              <div key={sectionIdx} id={elementId} className="space-y-6 text-left scroll-mt-28">
                {section.heading && (
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-4">
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
            const slides = section.carouselSlides || [];
            const activeSlideIdx = currentCarouselIndex[sectionIdx] || 0;
            return (
              <div key={sectionIdx} id={elementId} className="my-14 space-y-6 text-left scroll-mt-28">
                {section.heading && (
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-orange-500" />
                    {section.heading}
                  </h3>
                )}
                <div className="relative bg-slate-950 border border-slate-900 rounded-3xl p-6 sm:p-10 overflow-hidden flex flex-col justify-between min-h-[280px]">
                  <div className="absolute right-0 top-0 w-32 h-32 bg-orange-600/5 rounded-full blur-[60px]" />
                  <div className="flex items-center justify-between border-b border-slate-900 pb-4 mb-6">
                    <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest">
                      Interactive Guide
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-500">
                      {String(activeSlideIdx + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col justify-center min-h-[120px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeSlideIdx}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -15 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-3"
                      >
                        {slides[activeSlideIdx]?.highlight && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                            {slides[activeSlideIdx].highlight}
                          </span>
                        )}
                        <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                          {slides[activeSlideIdx]?.title}
                        </h4>
                        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                          {slides[activeSlideIdx]?.description}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <div className="flex items-center justify-between border-t border-slate-900 pt-6 mt-6">
                    <div className="flex gap-2">
                      {slides.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentCarouselIndex(p => ({ ...p, [sectionIdx]: idx }))}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeSlideIdx ? "bg-orange-500 w-6" : "bg-slate-800 hover:bg-slate-700"
                            }`}
                        />
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handlePrevCarousel(sectionIdx, slides.length)}
                        className="p-2 rounded-full border border-slate-800 text-slate-400 hover:text-white hover:border-slate-750 transition-colors"
                      >
                        <ChevronRight className="w-4 h-4 rotate-180" />
                      </button>
                      <button
                        onClick={() => handleNextCarousel(sectionIdx, slides.length)}
                        className="p-2 rounded-full border border-slate-800 text-slate-400 hover:text-white hover:border-slate-750 transition-colors"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );

          case "table":
            return (
              <div key={sectionIdx} id={elementId} className="space-y-6 pt-4 text-left scroll-mt-28">
                {section.heading && (
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-12 mb-6 border-l-4 border-orange-500 pl-4 tracking-tight">
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
                              className={`p-4 sm:p-5 text-xs sm:text-sm border-r border-slate-900 last:border-0 ${cIdx === 0 ? "font-bold text-white" : ""
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
                key={sectionIdx}
                className="p-8 sm:p-12 bg-slate-950 border border-slate-900 rounded-3xl text-center my-16 relative overflow-hidden group/cta-inner"
              >
                <div className="absolute right-0 top-0 w-48 h-48 bg-orange-500/5 rounded-full blur-[80px] pointer-events-none"></div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight mb-3">
                  {section.ctaTitle || "Need a high-converting landing page?"}
                </h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto font-medium">
                  {section.ctaText}
                </p>
                <Link
                  href={section.ctaLink || "/landing-page-development"}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-slate-950 hover:bg-slate-100 rounded-full font-bold text-xs uppercase tracking-widest transition-all"
                >
                  Explore Our Services
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            );

          case "faq":
            return (
              <div key={sectionIdx} id={elementId} className="my-14 space-y-6 text-left scroll-mt-28">
                {section.heading && (
                  <h3 className="text-xl sm:text-2xl font-bold text-white border-l-4 border-orange-500 pl-4 tracking-tight">
                    {section.heading}
                  </h3>
                )}
                <div className="space-y-3">
                  {section.faqs?.map((faq, idx) => {
                    const isOpen = expandedFaq === idx;
                    return (
                      <div
                        key={idx}
                        className="border border-slate-900 rounded-2xl overflow-hidden bg-slate-950/20"
                      >
                        <button
                          onClick={() => setExpandedFaq(isOpen ? null : idx)}
                          className="w-full flex items-center justify-between p-5 text-left text-white font-bold text-sm sm:text-base hover:bg-slate-900/40 transition-colors"
                        >
                          <span>{faq.question}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-orange-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
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

          default:
            return null;
        }
      })}
    </>
  );
}
