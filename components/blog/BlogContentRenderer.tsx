import React from "react";
import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS, Block, Inline } from "@contentful/rich-text-types";
import Link from "next/link";
import { Document } from "@contentful/rich-text-types";
import { generateHeadingId } from "@/lib/contentful";

interface BlogContentRendererProps {
  content: Document;
}

const richTextRenderOptions: Options = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => <strong className="font-extrabold text-white">{text}</strong>,
    [MARKS.ITALIC]: (text: React.ReactNode) => <em className="italic text-slate-200">{text}</em>,
    [MARKS.UNDERLINE]: (text: React.ReactNode) => <u className="underline decoration-orange-500 decoration-2">{text}</u>,
    [MARKS.CODE]: (text: React.ReactNode) => (
      <code className="bg-slate-900/80 px-1.5 py-0.5 rounded text-orange-400 font-mono text-xs border border-slate-800/60">
        {text}
      </code>
    ),
  },
  renderNode: {
    // Custom Heading 2 with Scroll Margins & Anchor IDs
    [BLOCKS.HEADING_2]: (node: Block | Inline, children: React.ReactNode) => {
      const text = node.content
        .filter((c: any) => c.nodeType === "text")
        .map((c: any) => c.value)
        .join("");
      const id = generateHeadingId(text);
      return (
        <h2
          id={id}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-12 mb-6 border-l-4 border-orange-500 pl-4 tracking-tight scroll-mt-28"
        >
          {children}
        </h2>
      );
    },

    // Custom Heading 3 with Anchor ID
    [BLOCKS.HEADING_3]: (node: Block | Inline, children: React.ReactNode) => {
      const text = node.content
        .filter((c: any) => c.nodeType === "text")
        .map((c: any) => c.value)
        .join("");
      const id = generateHeadingId(text);
      return (
        <h3
          id={id}
          className="text-lg sm:text-xl font-bold text-white mt-8 mb-4 border-l-2 border-orange-500/60 pl-3 tracking-tight scroll-mt-28"
        >
          {children}
        </h3>
      );
    },

    // Custom Heading 4 with Anchor ID
    [BLOCKS.HEADING_4]: (node: Block | Inline, children: React.ReactNode) => {
      const text = node.content
        .filter((c: any) => c.nodeType === "text")
        .map((c: any) => c.value)
        .join("");
      const id = generateHeadingId(text);
      return (
        <h4
          id={id}
          className="text-base sm:text-lg font-bold text-white mt-6 mb-3 tracking-tight scroll-mt-28"
        >
          {children}
        </h4>
      );
    },

    // Standard Styled Paragraph
    [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: React.ReactNode) => (
      <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-medium">
        {children}
      </p>
    ),

    // Styled Lists
    [BLOCKS.UL_LIST]: (node: Block | Inline, children: React.ReactNode) => (
      <ul className="grid grid-cols-1 gap-2.5 my-6 list-disc pl-6 text-slate-300 [&>li>p]:mb-0 [&>li>p]:inline">
        {children}
      </ul>
    ),
    [BLOCKS.OL_LIST]: (node: Block | Inline, children: React.ReactNode) => (
      <ol className="grid grid-cols-1 gap-2.5 my-6 list-decimal pl-6 text-slate-300 [&>li>p]:mb-0 [&>li>p]:inline">
        {children}
      </ol>
    ),
    [BLOCKS.LIST_ITEM]: (node: Block | Inline, children: React.ReactNode) => (
      <li className="text-slate-300 text-sm sm:text-base leading-relaxed pl-1">
        {children}
      </li>
    ),

    // Tables
    [BLOCKS.TABLE]: (node: Block | Inline, children: React.ReactNode) => (
      <div className="overflow-x-auto my-8 border border-slate-900 rounded-2xl bg-slate-950/60 backdrop-blur-sm">
        <table className="w-full text-left border-collapse text-slate-300">
          <tbody>{children}</tbody>
        </table>
      </div>
    ),
    [BLOCKS.TABLE_HEADER_CELL]: (node: Block | Inline, children: React.ReactNode) => (
      <th className="p-4 sm:p-5 border-r border-b border-slate-900 last:border-r-0 bg-slate-900/60 text-white font-black uppercase text-[10px] tracking-widest">
        {children}
      </th>
    ),
    [BLOCKS.TABLE_ROW]: (node: Block | Inline, children: React.ReactNode) => (
      <tr className="hover:bg-slate-900/20 border-b border-slate-900 last:border-b-0 transition-colors">
        {children}
      </tr>
    ),
    [BLOCKS.TABLE_CELL]: (node: Block | Inline, children: React.ReactNode) => (
      <td className="p-4 sm:p-5 text-xs sm:text-sm border-r border-slate-900 last:border-r-0">
        {children}
      </td>
    ),

    // Links mapping
    [INLINES.HYPERLINK]: (node: Block | Inline, children: React.ReactNode) => {
      const url = node.data.uri || "";
      const isInternal = url.startsWith("/") || url.startsWith("https://yourdomain.com");

      if (isInternal) {
        return (
          <Link href={url} className="text-orange-500 hover:text-orange-400 font-extrabold underline underline-offset-4 decoration-2 transition-colors">
            {children}
          </Link>
        );
      }
      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-500 hover:text-orange-400 font-extrabold underline underline-offset-4 decoration-2 transition-colors"
        >
          {children}
        </a>
      );
    },
  },
};

export default function BlogContentRenderer({ content }: BlogContentRendererProps) {
  if (!content) return null;
  return <div className="space-y-6">{documentToReactComponents(content, richTextRenderOptions)}</div>;
}
