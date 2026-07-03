"use client";

import React from "react";
import { Bookmark, Calendar, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { BlogPost, parseMarkdownToReact } from "@/lib/contentful";

interface BlogHeroProps {
  post: BlogPost;
}

export default function BlogHero({ post }: BlogHeroProps) {
  return (
    <header className="space-y-6 pb-12 border-b border-slate-900 mb-16 text-center max-w-4xl mx-auto">
      <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
        <span className="text-orange-500 font-extrabold flex items-center gap-1">
          <Bookmark className="w-3.5 h-3.5 animate-pulse" /> {post.category}
        </span>
        <span>•</span>
        <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
        <span>•</span>
        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white animate-fade-in">
        {post.h1}
      </h1>

      <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
        {parseMarkdownToReact(post.excerpt)}
      </p>

      {/* Featured Graphic representation */}
      <div className="relative w-full aspect-[21/9] rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden flex items-center justify-center mt-8 group">
        {post.imageUrl ? (
          <>
            <img
              src={post.imageUrl}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
            />
            {/* Dark overlay to keep text readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90" />
          </>
        ) : (
          <>
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
          </>
        )}

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
  );
}
