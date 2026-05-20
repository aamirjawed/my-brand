"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar, Clock, Bookmark, Filter, Send, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { BlogPost } from "@/lib/blog-data";

interface BlogListingProps {
  posts: BlogPost[];
}

export default function BlogListing({ posts }: BlogListingProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const POSTS_PER_PAGE = 6;

  // Extract unique categories
  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

  // Filter posts
  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter((p) => p.category === activeCategory);

  // Define first post as featured if "All" is active, otherwise render list
  const featuredPost = posts[0];
  const listPosts = activeCategory === "All" ? filteredPosts.slice(1) : filteredPosts;

  const totalPages = Math.ceil(listPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedListPosts = listPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="relative w-full">
      {/* 1. Interactive Filters Block */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-900 pb-8 mb-16">
        <div className="flex items-center gap-2 text-slate-400 font-bold uppercase tracking-widest text-xs">
          <Filter className="w-4 h-4 text-orange-500" />
          <span>Filter Insights:</span>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`relative px-4 py-2 text-xs font-black uppercase tracking-widest rounded-full border transition-all duration-300 ${
                  isActive
                    ? "border-orange-500 text-white bg-orange-600/10 shadow-[0_0_20px_rgba(234,88,12,0.15)]"
                    : "border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 bg-slate-950/40"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Featured Post - Show only when All is active and we have posts on page 1 */}
      {activeCategory === "All" && currentPage === 1 && featuredPost && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-16 mb-20 border-b border-slate-900 group"
        >
          {/* Left Visual: Premium Abstract Wireframe Grid */}
          <div className="col-span-1 lg:col-span-6 relative aspect-[16/10] bg-slate-950 rounded-3xl overflow-hidden border border-slate-900 flex items-center justify-center">
            {/* Mesh Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ea580c05_1px,transparent_1px),linear-gradient(to_bottom,#ea580c05_1px,transparent_1px)] bg-[size:2rem_2rem] z-0" />
            <div className="absolute w-[60%] h-[60%] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none z-0" />
            
            {/* Animated floating abstract doodles */}
            <motion.svg
              className="absolute w-48 h-48 text-orange-600/20 pointer-events-none z-10"
              viewBox="0 0 100 100"
            >
              <motion.circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="6 6"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.path
                d="M 50 10 L 90 50 L 50 90 L 10 50 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
            </motion.svg>

            {/* Simulated Live Analytics Feed */}
            <div className="relative bg-slate-900/90 border border-slate-800 rounded-2xl p-6 w-[80%] shadow-2xl z-20 flex flex-col gap-3 transform group-hover:scale-[1.03] transition-transform duration-500">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-black text-orange-500 uppercase tracking-widest flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
                  Conversion Engine Active
                </span>
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                </div>
              </div>
              <div className="space-y-1.5 border-t border-slate-800 pt-3">
                <div className="text-[18px] font-black text-white leading-none">↑ 34.8% Conversion Lift</div>
                <div className="text-[9px] text-slate-400">A/B Testing: Split Traffic Experiment #082</div>
              </div>
              {/* Funnel Visual */}
              <div className="w-full h-1 bg-slate-800 rounded-full mt-1 overflow-hidden">
                <motion.div 
                  className="h-full bg-orange-500"
                  initial={{ width: "30%" }}
                  whileInView={{ width: "85%" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>

          {/* Right Info: Text Content */}
          <div className="col-span-1 lg:col-span-6 flex flex-col justify-center text-left">
            <span className="text-orange-500 font-extrabold text-xs uppercase tracking-widest mb-4 block">
              ⭐ Featured Insight
            </span>
            <div className="flex items-center gap-4 text-slate-500 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {featuredPost.date}</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-wide leading-[1.1] mb-6 group-hover:text-orange-500 transition-colors duration-300">
              <Link href={`/blog/${featuredPost.slug}`}>
                {featuredPost.h1}
              </Link>
            </h2>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 font-medium">
              {featuredPost.excerpt}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {featuredPost.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-slate-900 border border-slate-800 text-[10px] font-bold text-slate-400 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href={`/blog/${featuredPost.slug}`}
              className="inline-flex items-center gap-2.5 text-xs font-black uppercase tracking-widest text-white hover:text-orange-400 transition-colors w-fit relative group/btn"
            >
              Read Full Article 
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
              {/* Highlight Underline */}
              <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-orange-500 scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-300"></span>
            </Link>
          </div>
        </motion.div>
      )}

      {/* 3. Grid Listing - Cardless list of other posts */}
      <div className="space-y-16">
        <AnimatePresence mode="popLayout">
          {filteredPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 text-slate-500 font-medium"
            >
              No insights found for this category.
            </motion.div>
          ) : (
            paginatedListPosts.map((post, idx) => {
              const displayIndex = String(startIndex + idx + (activeCategory === "All" ? 2 : 1)).padStart(2, "0");
              return (
                <motion.article
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  key={post.slug}
                  className="group relative pb-12 border-b border-slate-900 flex flex-col lg:flex-row lg:items-start justify-between gap-8 text-left"
                >
                  {/* Left Section: Index Number + Post Text */}
                  <div className="lg:w-[70%] flex gap-6 sm:gap-8 items-start">
                    {/* Visual Index Number */}
                    <span className="hidden sm:block text-2xl font-black text-slate-800 font-mono select-none tracking-tight group-hover:text-orange-600/40 transition-colors duration-300">
                      {displayIndex}
                    </span>

                    <div className="space-y-4 flex-1">
                      {/* Meta header */}
                      <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                        <span className="text-orange-500 font-extrabold flex items-center gap-1">
                          <Bookmark className="w-3.5 h-3.5" />
                          {post.category}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                      </div>

                      {/* Heading */}
                      <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-wide leading-snug group-hover:text-orange-500 transition-colors duration-300">
                        <Link href={`/blog/${post.slug}`}>
                          {post.h1}
                        </Link>
                      </h3>

                      {/* Excerpt */}
                      <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-medium">
                        {post.excerpt}
                      </p>

                      {/* Button */}
                      <div className="pt-2">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white hover:text-orange-400 transition-colors relative group/btn2"
                        >
                          Read Article 
                          <ArrowRight className="w-4 h-4 group-hover/btn2:translate-x-1.5 transition-transform" />
                          <span className="absolute bottom-[-2px] left-0 w-full h-[1px] bg-orange-500 scale-x-0 group-hover/btn2:scale-x-100 origin-left transition-transform duration-300"></span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Right Section: Topics Covered tags */}
                  <div className="lg:w-[25%] lg:pl-8 flex flex-col items-start gap-3">
                    <span className="text-[10px] text-slate-600 font-black uppercase tracking-widest select-none">
                      Topics covered
                    </span>
                    <div className="flex flex-wrap lg:flex-col gap-2 w-full">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-slate-900/60 border border-slate-800 text-[10px] font-bold text-slate-400 rounded-full lg:w-fit"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })
          )}
        </AnimatePresence>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-20">
          <button
            onClick={() => {
              setCurrentPage((prev) => Math.max(prev - 1, 1));
              window.scrollTo({ top: 300, behavior: "smooth" });
            }}
            disabled={currentPage === 1}
            className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
              currentPage === 1
                ? "border-slate-900 text-slate-700 cursor-not-allowed"
                : "border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-950/40 cursor-pointer"
            }`}
            aria-label="Previous Page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
            const isCurrent = pageNum === currentPage;
            return (
              <button
                key={pageNum}
                onClick={() => {
                  setCurrentPage(pageNum);
                  window.scrollTo({ top: 300, behavior: "smooth" });
                }}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 cursor-pointer ${
                  isCurrent
                    ? "border-orange-500 text-white bg-orange-600/10 shadow-[0_0_15px_rgba(234,88,12,0.15)]"
                    : "border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 bg-slate-950/40"
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          <button
            onClick={() => {
              setCurrentPage((prev) => Math.min(prev + 1, totalPages));
              window.scrollTo({ top: 300, behavior: "smooth" });
            }}
            disabled={currentPage === totalPages}
            className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
              currentPage === totalPages
                ? "border-slate-900 text-slate-700 cursor-not-allowed"
                : "border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-950/40 cursor-pointer"
            }`}
            aria-label="Next Page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* 4. Newsletter Signup Conversion Box */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-32 p-8 sm:p-12 bg-slate-950 border border-slate-900 rounded-3xl relative overflow-hidden text-center group/panel"
      >
        <div className="absolute right-0 top-0 w-80 h-80 bg-orange-600/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute left-0 bottom-0 w-80 h-80 bg-orange-600/5 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Decorative Floating Sparkle Icon */}
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
  );
}
