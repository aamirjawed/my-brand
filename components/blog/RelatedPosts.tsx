"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ChevronRight } from "lucide-react";
import { BlogPost, parseMarkdownToReact } from "@/lib/contentful";

interface RelatedPostsProps {
  relatedPosts: BlogPost[];
}

export default function RelatedPosts({ relatedPosts }: RelatedPostsProps) {
  if (relatedPosts.length === 0) return null;

  return (
    <div className="mt-32 pt-16 border-t border-slate-900 text-left">
      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-12 flex items-center gap-2">
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
              <h4 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-orange-500 transition-colors duration-300">
                <Link href={`/blog/${rPost.slug}`}>
                  {rPost.title}
                </Link>
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                {parseMarkdownToReact(rPost.excerpt)}
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
  );
}
