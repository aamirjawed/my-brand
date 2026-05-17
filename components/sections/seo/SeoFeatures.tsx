"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, FileSearch, Link2, BarChart2, Globe, Zap } from "lucide-react";

export default function SeoFeatures() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Keyword Intelligence",
      description: "Our proprietary machine learning models process millions of search queries, SERP features, and competitor content clusters to identify the highest-value keyword opportunities your competitors have missed. We build comprehensive semantic keyword maps covering primary targets, LSI variations, long-tail clusters, and featured snippet opportunities — all validated with real search volume, competition density, and commercial intent scores.",
      colSpan: "lg:col-span-8",
      rowSpan: ""
    },
    {
      icon: FileSearch,
      title: "Deep Technical SEO Audit",
      description: "We run an exhaustive 250-point technical crawl identifying Core Web Vitals failures, crawl budget waste, duplicate content, broken internal link equity chains, XML sitemap gaps, hreflang errors, and page speed bottlenecks — then fix every single one.",
      colSpan: "lg:col-span-4",
      rowSpan: ""
    },
    {
      icon: Link2,
      title: "High-Authority Link Building",
      description: "We acquire powerful editorial backlinks from high-DR domains in your exact industry through targeted digital PR campaigns, expert content syndication, and strategic partnership outreach — building real domain authority that permanently boosts rankings.",
      colSpan: "lg:col-span-4",
      rowSpan: ""
    },
    {
      icon: BarChart2,
      title: "AI Content Strategy & Optimization",
      description: "Using natural language processing, we analyze the top 20 ranking pages for every target keyword, extract the exact content depth, semantic coverage, heading structures, and entity relationships Google rewards — then produce authoritative content that outranks them consistently across all device types.",
      colSpan: "lg:col-span-8",
      rowSpan: ""
    },
    {
      icon: Globe,
      title: "Local & Global SEO",
      description: "From Google Business Profile optimization and local citation building to international hreflang implementations and geo-targeted content strategies, we dominate both local map packs and international SERPs.",
      colSpan: "lg:col-span-6",
      rowSpan: ""
    },
    {
      icon: Zap,
      title: "Real-Time Rank Monitoring",
      description: "Custom dashboards track your exact keyword positions daily across Google, Bing, and AI search platforms like Perplexity and ChatGPT — with automated alerts for position drops and competitor movement.",
      colSpan: "lg:col-span-6",
      rowSpan: ""
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px]">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-extrabold text-xs text-orange-500 uppercase tracking-widest bg-orange-600/10 px-4 py-2 rounded-full border border-orange-500/20 mb-4 inline-block">
            Full-Spectrum SEO Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-wide mt-6 mb-6">
            Everything That Moves The Needle
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Most agencies pick one or two SEO tactics and hope for the best. We execute the complete, interconnected ecosystem of signals that Google's algorithm actually rewards — simultaneously, at scale, with measurable precision.
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
