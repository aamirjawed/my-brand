import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";
import BlogLayout from "../../../components/blog/BlogLayout";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: post.seoTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `/blog/${resolvedParams.slug}`,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
    }
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Filter and sort to prioritize related posts in the same category or sharing tags
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => {
      const aCatMatch = a.category === post.category ? 1 : 0;
      const bCatMatch = b.category === post.category ? 1 : 0;
      if (aCatMatch !== bCatMatch) {
        return bCatMatch - aCatMatch;
      }
      const aSharedTags = a.tags.filter(t => post.tags.includes(t)).length;
      const bSharedTags = b.tags.filter(t => post.tags.includes(t)).length;
      return bSharedTags - aSharedTags;
    });

  return <BlogLayout post={post} relatedPosts={relatedPosts} />;
}


