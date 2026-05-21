"use client";

import React from "react";
import Link from "next/link";
import SocialMediaDoodle from "@/components/doodles/SocialMediaDoodle";

export default function SocialShowcase() {
  return (
    <section className="py-24 bg-white text-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        
        {/* Section Title with Left Orange Bar */}
        <div className="flex items-start gap-4 mb-16 max-w-5xl">
          <div className="w-[6px] h-20 bg-orange-600 shrink-0 self-stretch rounded" />
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-wide leading-tight text-left"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            Grow Your Brand with Strategic Social Media Management
          </h2>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive Vector Doodle */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <SocialMediaDoodle />
          </div>

          {/* Right Column: Copywriting with Underlined/Bold Semantic Links */}
          <div className="lg:col-span-7 space-y-6 text-left text-slate-650 text-sm sm:text-base leading-relaxed font-medium">
            <p>
              Establishing a powerful online presence goes far beyond publishing random posts. Without a calculated{" "}
              <Link href="/social-media-management-services" className="font-extrabold text-slate-950 underline decoration-orange-500 hover:text-orange-500 transition-colors">
                content strategy
              </Link>{" "}
              and unified{" "}
              <Link href="/social-media-management-services" className="font-extrabold text-slate-950 underline decoration-orange-500 hover:text-orange-500 transition-colors">
                social branding
              </Link>
              , your company risks losing digital momentum. Your profiles could suffer from stagnant reach and poor{" "}
              <span className="font-extrabold text-slate-950 underline decoration-orange-500">
                audience engagement
              </span>
              , resulting in flatlines in customer growth and low lead generation.
            </p>
            
            <p>
              Our professional{" "}
              <Link href="/social-media-management-services" className="font-extrabold text-slate-950 underline decoration-orange-500 hover:text-orange-500 transition-colors">
                digital marketing
              </Link>{" "}
              team relieves this pressure by securing strict{" "}
              <span className="font-extrabold text-slate-950 underline decoration-orange-500">
                content consistency
              </span>{" "}
              and targeted{" "}
              <Link href="/social-media-management-services" className="font-extrabold text-slate-950 underline decoration-orange-500 hover:text-orange-500 transition-colors">
                marketing campaigns
              </Link>
              . We focus heavily on building{" "}
              <Link href="/social-media-management-services" className="font-extrabold text-slate-950 underline decoration-orange-500 hover:text-orange-500 transition-colors">
                community engagement
              </Link>{" "}
              channels that turn standard followers into loyal customers, generating sustainable{" "}
              <span className="font-extrabold text-slate-950 underline decoration-orange-500">
                social growth
              </span>{" "}
              and brand visibility.
            </p>

            <p>
              We handle visual design, layout optimization, copy hooks, and detailed reporting metrics, allowing you to run your daily operations while we scale your brand reputation online.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
