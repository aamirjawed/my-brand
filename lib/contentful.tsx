import React from "react";
import { createClient } from "contentful";
import { Document } from "@contentful/rich-text-types";

let clientInstance: any = null;

const getClient = () => {
  if (typeof window !== "undefined") {
    return null;
  }
  if (!clientInstance) {
    const space = process.env.CONTENTFUL_SPACE_ID;
    const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
    if (!space || !accessToken) {
      throw new Error("Contentful environment variables CONTENTFUL_SPACE_ID or CONTENTFUL_ACCESS_TOKEN are missing in .env.local.");
    }
    clientInstance = createClient({ space, accessToken });
  }
  return clientInstance;
};

export const contentfulClient = {
  getEntries: <T = any>(query: any): Promise<any> => {
    const client = getClient();
    if (!client) {
      throw new Error("Contentful client cannot be initialized on the client-side.");
    }
    return client.getEntries(query);
  }
};

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  tags: string[];
  canonicalUrl?: string;
  imageUrl?: string;
  content: Document;
}

/**
 * Format date string into "MMM DD, YYYY" (e.g. "May 19, 2026")
 */
export const formatDate = (dateStr: string): string => {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch (e) {
    return dateStr;
  }
};

/**
 * Maps Contentful entry payload to clean BlogPost type
 */
export const mapContentfulPost = (entry: any): BlogPost => {
  const fields = entry.fields;
  return {
    slug: fields.slug || "",
    title: fields.title || "",
    seoTitle: fields.seoTitle || fields.title || "",
    metaDescription: fields.metaDescription || fields.excerpt || "",
    h1: fields.h1 || fields.title || "",
    date: fields.date ? formatDate(fields.date) : "",
    readTime: fields.readTime || "5 min read",
    category: fields.category || "General",
    excerpt: fields.excerpt || "",
    tags: fields.tags || [],
    canonicalUrl: fields.canonicalUrl || undefined,
    imageUrl: fields.image?.fields?.file?.url 
      ? (fields.image.fields.file.url.startsWith("http") 
          ? fields.image.fields.file.url 
          : `https:${fields.image.fields.file.url}`)
      : undefined,
    content: fields.content,
  };
};

/**
 * Generates an anchor ID from a text heading
 */
export const generateHeadingId = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // remove special characters
    .trim()
    .replace(/\s+/g, "-");        // replace spaces with hyphens
};

/**
 * Parses H2 nodes from Contentful Rich Text AST to feed the Table of Contents
 */
export const extractHeadingsFromRichText = (content: Document): { id: string; text: string; level: number }[] => {
  if (!content || !content.content) return [];

  return content.content
    .filter((node: any) => node.nodeType === "heading-2" || node.nodeType === "heading-3" || node.nodeType === "heading-4")
    .map((node: any) => {
      const text = node.content
        .filter((c: any) => c.nodeType === "text")
        .map((c: any) => c.value)
        .join("");

      let level = 2;
      if (node.nodeType === "heading-3") level = 3;
      else if (node.nodeType === "heading-4") level = 4;

      return {
        id: generateHeadingId(text),
        text: text,
        level: level,
      };
    })
    .filter((h: { id: string; text: string; level: number }) => h.text.trim().length > 0);
};

/**
 * Safely parses basic inline markdown (bold, italic, and links) into React elements
 */
export const parseMarkdownToReact = (text: string): React.ReactNode[] => {
  if (!text) return [];

  const regex = /(\*\*|__)(.*?)\1|(\*|_)(.*?)\3|\[(.*?)\]\((.*?)\)/g;
  let lastIndex = 0;
  const result: React.ReactNode[] = [];
  let match;

  while ((match = regex.exec(text)) !== null) {
    const matchIndex = match.index;
    
    if (matchIndex > lastIndex) {
      result.push(text.substring(lastIndex, matchIndex));
    }

    const [_, boldDelim, boldText, italicDelim, italicText, linkText, linkUrl] = match;

    if (boldText !== undefined) {
      result.push(
        <strong key={matchIndex} className="font-extrabold text-white">
          {boldText}
        </strong>
      );
    } else if (italicText !== undefined) {
      result.push(
        <em key={matchIndex} className="italic text-slate-200">
          {italicText}
        </em>
      );
    } else if (linkText !== undefined) {
      const isInternal = linkUrl.startsWith("/") || linkUrl.startsWith("https://yourdomain.com");
      if (isInternal) {
        result.push(
          <a
            key={matchIndex}
            href={linkUrl}
            className="text-orange-500 hover:text-orange-400 font-extrabold underline underline-offset-4 decoration-2 transition-colors"
          >
            {linkText}
          </a>
        );
      } else {
        result.push(
          <a
            key={matchIndex}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-orange-400 font-extrabold underline underline-offset-4 decoration-2 transition-colors"
          >
            {linkText}
          </a>
        );
      }
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    result.push(text.substring(lastIndex));
  }

  return result;
};
