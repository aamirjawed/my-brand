"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, Calendar, Clock, Bookmark, ChevronRight, 
  Sparkles, CheckCircle2, ChevronDown, Send, User, ArrowUpRight 
} from "lucide-react";
import { BlogPost, BlogPostSection } from "@/lib/blog-data";

interface BlogLayoutProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogLayout({ post, relatedPosts }: BlogLayoutProps) {
  const [activeSection, setActiveSection] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState<{ [key: number]: number }>({});

  // 1. Gather all H2 headings with text for the Table of Contents
  const headings = post.sections
    .map((section, idx) => {
      if (section.heading && (section.type === "text" || section.type === "list" || section.type === "table" || section.type === "carousel" || section.type === "faq")) {
        return {
          id: `section-${idx}`,
          text: section.heading,
        };
      }
      return null;
    })
    .filter(Boolean) as { id: string; text: string }[];

  // 2. Track scroll position to update active TOC section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const heading of headings) {
        const el = document.getElementById(heading.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(heading.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

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
    <div className="min-h-screen bg-slate-950 text-white pt-32 sm:pt-40 pb-24 relative overflow-hidden">
      
      {/* Background aesthetics */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ea580c03_1px,transparent_1px),linear-gradient(to_bottom,#ea580c03_1px,transparent_1px)] bg-[size:4rem_4rem] z-0 pointer-events-none" />
      <div className="absolute right-0 top-0 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        
        {/* Navigation Breadcrumb */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-orange-500 transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Back to blog
        </Link>

        {/* SECTION 1 — BLOG HERO */}
        <header className="space-y-6 pb-12 border-b border-slate-900 mb-16 text-left max-w-4xl">
          <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <span className="text-orange-500 font-extrabold flex items-center gap-1">
              <Bookmark className="w-3.5 h-3.5 animate-pulse" /> {post.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wide leading-[1.1] text-white">
            {post.h1}
          </h1>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
            {post.excerpt}
          </p>

          {/* Featured Graphic representation instead of card boxes */}
          <div className="relative w-full aspect-[21/9] rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden flex items-center justify-center mt-8">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ea580c03_1px,transparent_1px),linear-gradient(to_bottom,#ea580c03_1px,transparent_1px)] bg-[size:3rem_3rem]" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
            <motion.div
              initial={{ scale: 0.95, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
              className="text-orange-500/20 text-7xl sm:text-9xl font-black uppercase select-none tracking-widest font-mono text-center px-4"
            >
              {post.category}
            </motion.div>
            
            <div className="absolute bottom-6 left-6 sm:left-8 z-10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-600/10 border border-orange-500/30 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-orange-500" />
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Strategy Guide</div>
                <div className="text-xs text-white font-extrabold">{post.title}</div>
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* SECTION 2 — TABLE OF CONTENTS (Sticky Sidebar for large screens) */}
          <aside className="col-span-1 lg:col-span-4 lg:sticky lg:top-36 space-y-8 order-2 lg:order-1">
            {headings.length > 0 && (
              <div className="bg-slate-950/60 backdrop-blur-sm border border-slate-900 p-6 sm:p-8 rounded-3xl text-left">
                <div className="flex items-center gap-2 text-white font-black uppercase tracking-widest text-xs border-b border-slate-900 pb-4 mb-6">
                  <Sparkles className="w-4 h-4 text-orange-500" />
                  <span>Table of Contents</span>
                </div>
                <nav className="space-y-4">
                  {headings.map((heading) => {
                    const isActive = activeSection === heading.id;
                    return (
                      <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById(heading.id)?.scrollIntoView({ behavior: "smooth" });
                          setActiveSection(heading.id);
                        }}
                        className={`block text-xs sm:text-sm font-bold leading-relaxed transition-all duration-300 ${
                          isActive 
                            ? "text-orange-500 pl-3 border-l-2 border-orange-500" 
                            : "text-slate-400 hover:text-white pl-0 border-l-0"
                        }`}
                      >
                        {heading.text}
                      </a>
                    );
                  })}
                </nav>
              </div>
            )}

            {/* SECTION 8 — AUTHOR / EXPERIENCE SECTION */}
            <div className="bg-slate-950/40 border border-slate-900 p-6 sm:p-8 rounded-3xl text-left relative overflow-hidden group/author">
              <div className="absolute right-0 top-0 w-24 h-24 bg-orange-500/5 rounded-full blur-[40px] pointer-events-none" />
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-600/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                  <User className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Author Profile</div>
                  <div className="text-sm font-black text-white uppercase tracking-wider">Aamir</div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
                Written by <strong>Aamir</strong> — developer and SEO-focused website creator helping businesses improve performance, design, and conversions.
              </p>
            </div>
          </aside>

          {/* SECTION 3 — CONTENT AREA */}
          <main className="col-span-1 lg:col-span-8 space-y-12 order-1 lg:order-2">
            {post.sections.map((section, sectionIdx) => {
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
                    <div key={sectionIdx} id={elementId} className="space-y-6 text-left scroll-mt-28">
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
                  const slides = section.carouselSlides || [];
                  const activeSlideIdx = currentCarouselIndex[sectionIdx] || 0;
                  return (
                    <div key={sectionIdx} id={elementId} className="my-14 space-y-6 text-left scroll-mt-28">
                      {section.heading && (
                        <h3 className="text-2xl font-black uppercase text-white tracking-wide flex items-center gap-2">
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
                              <h4 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide">
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
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                  idx === activeSlideIdx ? "bg-orange-500 w-6" : "bg-slate-800 hover:bg-slate-700"
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

                // SECTION 6 — CTA SECTION
                case "cta":
                  return (
                    <div
                      key={sectionIdx}
                      className="p-8 sm:p-12 bg-slate-950 border border-slate-900 rounded-3xl text-center my-16 relative overflow-hidden group/cta-inner"
                    >
                      <div className="absolute right-0 top-0 w-48 h-48 bg-orange-500/5 rounded-full blur-[80px] pointer-events-none"></div>
                      <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide mb-3">
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

                // SECTION 5 — FAQ SECTION
                case "faq":
                  return (
                    <div key={sectionIdx} id={elementId} className="my-14 space-y-6 text-left scroll-mt-28">
                      {section.heading && (
                        <h3 className="text-2xl font-black uppercase text-white tracking-wide border-l-4 border-orange-500 pl-4">
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

                default:
                  return null;
              }
            })}
          </main>

        </div>

        {/* SECTION 7 — RELATED BLOGS */}
        {relatedPosts.length > 0 && (
          <div className="mt-32 pt-16 border-t border-slate-900 text-left">
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wide mb-12 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-orange-500" />
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.slice(0, 3).map((rPost) => (
                <article
                  key={rPost.slug}
                  className="group relative flex flex-col justify-between p-6 bg-slate-950 border border-slate-900 hover:border-slate-800 rounded-3xl transition-all duration-300"
                >
                  <div className="space-y-4">
                    <span className="text-orange-500 font-extrabold text-[10px] uppercase tracking-widest block">
                      {rPost.category}
                    </span>
                    <h4 className="text-lg font-extrabold uppercase text-white tracking-wide group-hover:text-orange-500 transition-colors duration-300">
                      <Link href={`/blog/${rPost.slug}`}>
                        {rPost.title}
                      </Link>
                    </h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {rPost.excerpt}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-slate-900/60">
                    <Link
                      href={`/blog/${rPost.slug}`}
                      className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-white hover:text-orange-400 transition-colors"
                    >
                      Read Article <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Conversion signup box at the very end */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 p-8 sm:p-12 bg-slate-950 border border-slate-900 rounded-3xl relative overflow-hidden text-center group/panel"
        >
          <div className="absolute right-0 top-0 w-80 h-80 bg-orange-600/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute left-0 bottom-0 w-80 h-80 bg-orange-600/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="w-14 h-14 bg-orange-600/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-orange-500/20 group-hover/panel:scale-110 transition-transform duration-300">
            <Sparkles className="w-6 h-6 text-orange-500" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wide mb-4">
            Join 5,000+ Founders & Marketers
          </h3>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-8 font-medium">
            Get high-converting landing page layouts, CRO frameworks, and speed optimizations sent directly to your inbox. No fluff. Just conversion math.
          </p>

          {submitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-orange-500 font-extrabold text-sm uppercase tracking-wider"
            >
              ✓ Welcome to the list. We'll send you our best conversion playbook shortly.
            </motion.div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row items-center gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your business email"
                required
                className="w-full px-5 py-4 bg-slate-900 border border-slate-800 rounded-full text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 hover:bg-slate-100 rounded-full font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Get Free Playbook
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </div>
  );
}
