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
    },
    {
      icon: FileSearch,
      title: "Technical Optimization for Better Site Performance",
      description: "Slow, broken sites don't rank. We run an exhaustive 250-point technical AI SEO audit identifying Core Web Vitals failures, crawl budget waste, broken internal link equity chains, and page speed bottlenecks — then fix every single one for flawless site performance.",
    },
    {
      icon: Link2,
      title: "High-Authority Links for Business Growth",
      description: "Better rankings translate to more leads. We acquire powerful editorial backlinks from high-DR domains in your exact industry through targeted digital PR campaigns and strategic outreach, guided directly by a senior AI SEO consultant to permanently boost rankings and drive business growth.",
    },
    {
      icon: BarChart2,
      title: "Content Optimization for Better Ranking Content",
      description: "Using natural language processing, we extract the exact semantic coverage and entity relationships Google rewards — then our AI content optimization pipeline produces authoritative, human-reviewed content that outranks competitors consistently for faster SEO workflows.",
    },
    {
      icon: Globe,
      title: "Local & Global SEO",
      description: "From Google Business Profile optimization and local citation building to international hreflang implementations and geo-targeted content strategies, we dominate both local map packs and international SERPs.",
    },
    {
      icon: Zap,
      title: "Real-Time Rank Monitoring",
      description: "Custom dashboards track your exact keyword positions daily across Google, Bing, and AI search platforms like Perplexity and ChatGPT — with automated alerts for position drops and competitor movement.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden border-t border-slate-100">
      
      {/* Background Floating Doodle 1 */}
      <motion.svg
        className="absolute top-[8%] right-[3%] w-40 h-40 text-orange-200 opacity-50 pointer-events-none"
        viewBox="0 0 200 200"
      >
        <motion.path
          d="M 180 20 C 120 40 80 120 20 180"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </motion.svg>

      {/* Background Floating Doodle 2 */}
      <motion.svg
        className="absolute bottom-[8%] left-[3%] w-44 h-44 text-orange-100 opacity-60 pointer-events-none"
        viewBox="0 0 100 100"
      >
        <motion.path
          d="M 10 50 Q 50 10 90 50 T 10 50"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
        />
      </motion.svg>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="relative inline-block mb-6">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 uppercase tracking-wide">
              Our AI SEO Services
            </h2>
            {/* Header Underline Doodle */}
            <motion.svg
              className="absolute -bottom-4 left-0 w-full h-6 text-orange-500"
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M 5 15 Q 50 5 95 15"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.svg>
          </div>
          <p className="text-slate-600 text-lg sm:text-xl leading-relaxed mt-4 font-medium">
            Most agencies pick one or two SEO tactics and hope for the best. We execute the complete, interconnected ecosystem of signals that Google's algorithm actually rewards — simultaneously, at scale, with measurable precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col items-start relative group"
              >
                {/* Animated doodle behind icon on hover */}
                <div className="relative mb-8">
                  <motion.svg 
                    className="absolute -inset-6 w-24 h-24 text-orange-300 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    viewBox="0 0 100 100"
                  >
                    <motion.path
                      d="M 50 5 C 20 15 10 30 15 60 C 20 80 50 95 75 80 C 95 65 90 20 60 10 C 50 5 45 8 40 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
                    />
                  </motion.svg>
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Icon className="w-10 h-10 text-orange-600 relative z-10 group-hover:scale-110 transition-transform duration-300 group-hover:-rotate-12" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
