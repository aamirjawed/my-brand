"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, FileSearch, Link2, BarChart2, Globe, Zap } from "lucide-react";

export default function SeoFeatures() {
  const features = [
    {
      icon: Brain,
      title: "Better Rankings & High-Converting Traffic",
      description: "You don't just want keywords; you want traffic. Our proprietary machine learning models process millions of search queries and competitor content clusters to identify the highest-value keyword opportunities. We build comprehensive semantic keyword maps, delivering enterprise-grade strategy and the best AI SEO for small business growth alike.",
      colSpan: "lg:col-span-8",
      rowSpan: ""
    },
    {
      icon: FileSearch,
      title: "Technical Optimization for Better Site Performance",
      description: "Slow, broken sites don't rank. We run an exhaustive 250-point technical AI SEO audit identifying Core Web Vitals failures, crawl budget waste, broken internal link equity chains, and page speed bottlenecks — then fix every single one for flawless site performance.",
      colSpan: "lg:col-span-4",
      rowSpan: ""
    },
    {
      icon: Link2,
      title: "High-Authority Links for Business Growth",
      description: "Better rankings translate to more leads. We acquire powerful editorial backlinks from high-DR domains in your exact industry through targeted digital PR campaigns and strategic outreach, guided directly by a senior AI SEO consultant to permanently boost rankings and drive business growth.",
      colSpan: "lg:col-span-4",
      rowSpan: ""
    },
    {
      icon: BarChart2,
      title: "Content Optimization for Better Ranking Content",
      description: "Using natural language processing, we extract the exact semantic coverage and entity relationships Google rewards — then our AI content optimization pipeline produces authoritative, human-reviewed content that outranks competitors consistently for faster SEO workflows.",
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
            Full-Spectrum Implementation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-wide mt-6 mb-6">
            Our AI SEO Services
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
