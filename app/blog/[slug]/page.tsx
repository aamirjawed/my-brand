import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { contentfulClient, mapContentfulPost } from "@/lib/contentful";
import BlogLayout from "../../../components/blog/BlogLayout";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  
  try {
    const entries = await contentfulClient.getEntries<any>({
      content_type: "myBrand",
      "fields.slug": resolvedParams.slug,
      limit: 1,
    });

    const entry = entries.items[0];
    if (!entry) {
      return {
        title: "Blog Post Not Found",
      };
    }

    const post = mapContentfulPost(entry);
    const baseUrl = "https://yourdomain.com"; // Replace with your production domain

    return {
      title: post.seoTitle,
      description: post.metaDescription,
      alternates: {
        canonical: post.canonicalUrl || `${baseUrl}/blog/${post.slug}`,
      },
      openGraph: {
        title: post.seoTitle,
        description: post.metaDescription,
        type: "article",
        publishedTime: new Date(post.date).toISOString(),
      }
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Blog Post",
    };
  }
}

export async function generateStaticParams() {
  try {
    const entries = await contentfulClient.getEntries<any>({
      content_type: "myBrand",
      limit: 100,
    });

    return entries.items
      .filter((item: any) => item.fields && item.fields.slug)
      .map((item: any) => ({
        slug: item.fields.slug,
      }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;

  // 1. Fetch active post
  let activeEntry;
  try {
    const activeEntries = await contentfulClient.getEntries<any>({
      content_type: "myBrand",
      "fields.slug": resolvedParams.slug,
      limit: 1,
    });
    activeEntry = activeEntries.items[0];
  } catch (error) {
    console.error("Error fetching active blog post from Contentful:", error);
    notFound();
  }

  if (!activeEntry) {
    notFound();
  }

  const post = mapContentfulPost(activeEntry);

  // 2. Fetch related posts in the same category
  let relatedPosts: any[] = [];
  try {
    const relatedEntries = await contentfulClient.getEntries<any>({
      content_type: "myBrand",
      "fields.category": post.category,
      "fields.slug[ne]": post.slug,
      limit: 3,
    });
    relatedPosts = relatedEntries.items.map(mapContentfulPost);
  } catch (error) {
    console.error("Error fetching related blog posts from Contentful:", error);
  }

  return <BlogLayout post={post} relatedPosts={relatedPosts} />;
}
