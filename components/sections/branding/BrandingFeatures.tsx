"use client";

import React from "react";
import { motion } from "framer-motion";
import { Palette, Type, Layout, FileImage, BookOpen, Globe } from "lucide-react";

export default function BrandingFeatures() {
  const features = [
    {
      icon: Palette,
      title: "Primary & Secondary Logo Design",
      description: "We craft your full logo suite — primary horizontal lockup, stacked variation, reversed white version, and responsive compact icon — all built as scalable vector files that look flawless at any size. Every concept is rooted in deep research into your industry, competitor landscape, and target audience psychology to ensure your mark stands powerfully apart from everything else in your market.",
      colSpan: "lg:col-span-8",
    },
    {
      icon: Type,
      title: "Brand Typography System",
      description: "We select and pair premium typefaces that express your brand's exact personality — whether authoritative, playful, modern, or luxurious — with full hierarchy specifications for headings, body copy, and labels across print and digital.",
      colSpan: "lg:col-span-4",
    },
    {
      icon: FileImage,
      title: "Brand Color Architecture",
      description: "We engineer a complete color system with primary, secondary, accent, and neutral palettes — each defined in HEX, RGB, CMYK, and Pantone values for flawless reproduction across every medium from digital screens to physical print.",
      colSpan: "lg:col-span-4",
    },
    {
      icon: Layout,
      title: "Visual Identity & Collateral",
      description: "Beyond the logo, we design the full visual expression of your brand — business cards, letterheads, email signatures, social media profile kits, presentation templates, and packaging mock-ups — all as production-ready files delivered immediately.",
      colSpan: "lg:col-span-8",
    },
    {
      icon: BookOpen,
      title: "Brand Guidelines Document",
      description: "We produce a comprehensive Brand Bible documenting every rule: logo usage zones, minimum sizes, forbidden modifications, color specifications, typography hierarchy, iconography style, photography direction, and tone of voice guidelines — so your brand stays consistent forever.",
      colSpan: "lg:col-span-6",
    },
    {
      icon: Globe,
      title: "Digital Brand Application",
      description: "We apply your complete identity system to all digital touchpoints — website UI kits, social media templates, email newsletter headers, digital advertising banners, and app icon sets — ensuring pixel-perfect brand consistency everywhere your audience encounters you.",
      colSpan: "lg:col-span-6",
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px]">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-extrabold text-xs text-orange-500 uppercase tracking-widest bg-orange-600/10 px-4 py-2 rounded-full border border-orange-500/20 mb-4 inline-block">
            Complete Brand Identity System
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-wide mt-6 mb-6">
            Everything Your Brand Needs
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            A logo alone is not a brand. We deliver the complete interconnected identity system — every visual asset, every guideline, every touchpoint — so your brand communicates with authority and consistency across every platform your customers encounter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`${feature.colSpan} bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-600/10 flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-wide mb-4">{feature.title}</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
