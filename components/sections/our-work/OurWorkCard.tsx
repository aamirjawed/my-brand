"use client";

import React from "react";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/portfolio-data";

interface OurWorkCardProps {
  project: Project;
}

export default function OurWorkCard({ project }: OurWorkCardProps) {
  return (
    <div className="group bg-slate-950 rounded-3xl overflow-hidden border border-slate-900 shadow-xl flex flex-col h-full hover:border-orange-500/50 transition-colors duration-300">
      {/* Visual container (Image & category badge) */}
      <div className="relative aspect-[16/10] overflow-hidden w-full bg-slate-900 border-b border-slate-900">
        <img
          src={project.imageSrc}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" />
        
        {/* Floating Category Tag */}
        <div className="absolute top-4 left-4 bg-slate-950/90 border border-slate-800 px-3.5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-orange-500 shadow-md">
          {project.categoryLabel}
        </div>

        {/* Client Name Overlay */}
        <div className="absolute bottom-4 left-4">
          <span className="text-[10px] uppercase tracking-widest text-orange-400 font-extrabold block">Client Partner</span>
          <h4 className="text-white font-bold text-sm leading-tight">{project.client}</h4>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow text-white">
        <h3 className="text-lg sm:text-xl font-black uppercase tracking-wide mb-3 leading-snug text-white group-hover:text-orange-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-2 border-y border-slate-900 py-4 mb-6">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="text-center">
              <span className="block text-sm sm:text-base font-black text-white">{metric.value}</span>
              <span className="block text-[8px] sm:text-[9px] uppercase tracking-wider text-slate-500 mt-1 font-bold">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bullet Highlights */}
        <ul className="space-y-2 mb-6">
          {project.highlights.map((highlight, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-md text-[9px] font-black text-slate-400 uppercase tracking-wider"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Live Link Button */}
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-slate-900 hover:bg-orange-600 text-white rounded-xl text-xs font-black uppercase tracking-widest transition-all border border-slate-800 hover:border-orange-500 shadow-md group/btn cursor-pointer"
        >
          <span>Launch Live Project</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
}
