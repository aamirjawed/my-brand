"use client";

import React from "react";
import Link from "next/link";
import UiUxLayoutDoodle from "@/components/doodles/UiUxLayoutDoodle";

export default function UiUxShowcase() {
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
            Build Success-Driven Digital Experiences with Our State-of-the-Art UI/UX Design Services
          </h2>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Responsive Mockup / Interactive Design Doodle */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <UiUxLayoutDoodle />
          </div>

          {/* Right Column: Copywriting with Underlined/Bold Semantic Links */}
          <div className="lg:col-span-7 space-y-6 text-left text-slate-650 text-sm sm:text-base leading-relaxed font-medium">
            <p>
              Launching a digital product comes with massive visual challenges, from structuring complex dashboard menus to establishing a consistent brand identity. Your application could face high drop-off rates and poor user engagement without professional{" "}
              <Link href="/ui-ux-design-services" className="font-extrabold text-slate-950 underline decoration-orange-500 hover:text-orange-500 transition-colors">
                user experience design
              </Link>
              , resulting in lost growth, high{" "}
              <span className="font-extrabold text-slate-950 underline decoration-orange-500">
                bounce rates
              </span>
              , and wasted engineering hours. With our custom{" "}
              <Link href="/ui-ux-design-services" className="font-extrabold text-slate-950 underline decoration-orange-500 hover:text-orange-500 transition-colors">
                UI/UX design services
              </Link>
              , we want to relieve your burden.
            </p>
            
            <p>
              We can be relied upon to deliver top-notch, highly converting experiences because we are at the absolute forefront of usability testing, modern{" "}
              <Link href="/ui-ux-design-services" className="font-extrabold text-slate-950 underline decoration-orange-500 hover:text-orange-500 transition-colors">
                user-centered design
              </Link>
              , responsive{" "}
              <Link href="/ui-ux-design-services" className="font-extrabold text-slate-950 underline decoration-orange-500 hover:text-orange-500 transition-colors">
                interface design
              </Link>
              , high-fidelity{" "}
              <Link href="/ui-ux-design-services" className="font-extrabold text-slate-950 underline decoration-orange-500 hover:text-orange-500 transition-colors">
                prototype design
              </Link>
              , and scalable{" "}
              <Link href="/ui-ux-design-services" className="font-extrabold text-slate-950 underline decoration-orange-500 hover:text-orange-500 transition-colors">
                design systems
              </Link>
              .
            </p>

            <p>
              Our in-house design professionals can provide customized layouts, high-impact branding, and strategic copywriting focused on conversions. We build interfaces designed to hook attention immediately.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
