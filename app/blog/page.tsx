import React from "react";
import { Metadata } from "next";
import { contentfulClient, mapContentfulPost } from "@/lib/contentful";
import BlogListing from "../../components/sections/blog/BlogListing";

export const metadata: Metadata = {
  title: "Landing Page & CRO Blog | High-Converting Design Tips",
  description: "Explore our strategic design, copy, and performance optimization guides. Learn how to design landing pages that capture leads and scale conversions.",
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogListingPage() {
  let posts: any[] = [];
  try {
    const response = await contentfulClient.getEntries<any>({
      content_type: "myBrand",
      order: ["-fields.date"], // Sort by date descending
      limit: 100,
    });
    posts = response.items.map(mapContentfulPost);
  } catch (error) {
    console.error("Error fetching blog posts from Contentful:", error);
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-40 pb-32 relative overflow-hidden">
      {/* Subtle Premium Background Grid & Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ea580c04_1px,transparent_1px),linear-gradient(to_bottom,#ea580c04_1px,transparent_1px)] bg-[size:4rem_4rem] z-0" />
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute left-[-10%] bottom-[10%] w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        
        {/* Header Section */}
        <div className="border-l-4 border-orange-500 pl-6 mb-24 text-left">
          <span className="font-extrabold text-xs text-orange-500 uppercase tracking-widest block mb-3">
            Knowledge Base
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-wide leading-none text-white">
            Conversion & Design Blog
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mt-4 font-medium">
            Bite-sized, high-impact strategies focusing exclusively on landing page development, conversion copywriting, performance speed optimization, and CRO.
          </p>
        </div>

        {/* Interactive Blog Listing Component */}
        <BlogListing posts={posts} />

      </div>
    </div>
  );
}
