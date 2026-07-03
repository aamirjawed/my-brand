"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BlogPost, extractHeadingsFromRichText } from "@/lib/contentful";
import BlogHero from "./BlogHero";
import TableOfContents from "./TableOfContents";
import BlogContentRenderer from "./BlogContentRenderer";
import RelatedPosts from "./RelatedPosts";
import NewsletterSubscribe from "./NewsletterSubscribe";

interface BlogLayoutProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogLayout({ post, relatedPosts }: BlogLayoutProps) {
  const [activeSection, setActiveSection] = useState("");

  // 1. Gather all H2 headings with text dynamically from Contentful Rich Text
  const headings = useMemo(() => {
    return extractHeadingsFromRichText(post.content);
  }, [post.content]);

  // 2. Track scroll position to update active TOC section
  useEffect(() => {
    if (headings.length === 0) return;

    const handleScroll = () => {
      // Check if we are at the bottom of the page
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50;

      if (isAtBottom) {
        setActiveSection(headings[headings.length - 1].id);
        return;
      }

      // Find the heading closest to the top of the viewport (with safety margin for header/padding)
      const scrollMargin = 160;
      let currentActive = "";

      for (const heading of headings) {
        const el = document.getElementById(heading.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= scrollMargin) {
            currentActive = heading.id;
          }
        }
      }

      // Fallback: if we haven't scrolled past any section yet, default to first heading
      if (!currentActive && headings.length > 0) {
        currentActive = headings[0].id;
      }

      setActiveSection(currentActive);
    };

    // Run once on mount / dependency change to set initial active section
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 sm:pt-40 pb-24 relative overflow-x-clip">

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
        <BlogHero post={post} />

        {/* Dynamic Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* SECTION 2 — TABLE OF CONTENTS (Sticky Sidebar for large screens) */}
          <aside className="hidden lg:block lg:col-span-4 lg:sticky lg:top-36 space-y-8">
            <TableOfContents
              headings={headings}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </aside>

          {/* SECTION 3 — CONTENT AREA */}
          <main className="col-span-1 lg:col-span-8 space-y-12">
            <BlogContentRenderer content={post.content} />
          </main>

        </div>

        {/* SECTION 7 — RELATED BLOGS */}
        <RelatedPosts relatedPosts={relatedPosts} />

        {/* Conversion signup box at the very end */}
        <NewsletterSubscribe />

      </div>
    </div>
  );
}
