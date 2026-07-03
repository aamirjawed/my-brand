"use client";

import React from "react";
import { Sparkles } from "lucide-react";

interface Heading {
  id: string;
  text: string;
  level?: number;
}

interface TableOfContentsProps {
  headings: Heading[];
  activeSection: string;
  setActiveSection: (id: string) => void;
}

export default function TableOfContents({
  headings,
  activeSection,
  setActiveSection,
}: TableOfContentsProps) {
  if (headings.length === 0) return null;

  return (
    <div className="bg-slate-950/60 backdrop-blur-sm border border-slate-900 p-6 sm:p-8 rounded-3xl text-left">
      <div className="flex items-center gap-2 text-white font-black uppercase tracking-widest text-xs border-b border-slate-900 pb-4 mb-6">
        <Sparkles className="w-4 h-4 text-orange-500" />
        <span>Table of Contents</span>
      </div>
      <nav className="space-y-4">
        {headings.map((heading) => {
          const isActive = activeSection === heading.id;
          const isSubSection = heading.level === 4;

          return (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(heading.id)?.scrollIntoView({ behavior: "smooth" });
                setActiveSection(heading.id);
              }}
              className={`block leading-relaxed transition-all duration-300 border-l-2 ${
                isSubSection
                  ? "pl-6 ml-4 text-xs font-semibold"
                  : "pl-3 text-xs sm:text-sm font-bold"
              } ${
                isActive
                  ? "text-orange-500 border-orange-500"
                  : "text-slate-400 hover:text-white border-transparent"
              }`}
            >
              {heading.text}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
