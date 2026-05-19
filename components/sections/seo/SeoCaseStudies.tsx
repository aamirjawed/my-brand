"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, BarChart } from "lucide-react";

export default function SeoCaseStudies() {
  const caseStudies = [
    {
      industry: "Enterprise B2B SaaS",
      challenge: "Competing against legacy software giants with 10x the domain authority and infinite ad budgets. The client needed to capture high-intent 'software' queries without relying on unsustainable CPCs.",
      solution: "We deployed a highly targeted AI content optimization strategy focusing exclusively on semantic topic clusters around long-tail enterprise use cases. Coupled with a deep technical SEO audit to resolve massive crawl budget leaks and strategic digital PR for high-DR link building.",
      results: [
        { label: "Organic Traffic Growth", value: "+450%" },
        { label: "Increase in MQLs", value: "1,200%" },
        { label: "Page 1 Keyword Rankings", value: "340+" }
      ]
    },
    {
      industry: "National E-Commerce Retailer",
      challenge: "The brand was entirely dependent on branded search terms and paid social media. They had zero visibility for high-volume, non-branded product category searches due to poor site architecture and thin category content.",
      solution: "Implemented programmatic AI SEO optimization across 15,000+ product pages. We injected dynamic schema markup, resolved widespread internal link equity chains, and used natural language processing to generate authoritative, ranking content for 400+ category hubs.",
      results: [
        { label: "New Organic Visitors", value: "2.4M" },
        { label: "Non-Branded Revenue", value: "$3.2M" },
        { label: "YoY Traffic Increase", value: "+312%" }
      ]
    }
  ];

  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-6 max-w-[1200px]">
        
        {/* Header - Heavy typography, no cards */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24 border-b-2 border-slate-900 pb-12">
          <div className="max-w-2xl">
            <span className="text-orange-600 font-extrabold tracking-widest uppercase text-sm mb-4 block">
              Proven Business Growth
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 uppercase tracking-tight leading-[1.1]">
              AI SEO Case Studies
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              We don't just chase vanity metrics. We engineer search visibility that directly translates into unstoppable organic traffic, qualified leads, and measurable revenue.
            </p>
          </div>
        </div>

        {/* Content - Asymmetric, heavy text, sleek borders instead of boxes */}
        <div className="space-y-32">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20"
            >
              
              {/* Left Side: Stats (New Gen Minimalist) */}
              <div className="lg:col-span-4 flex flex-col justify-start">
                <div className="sticky top-32">
                  <div className="flex items-center gap-3 mb-8">
                    <TrendingUp className="w-8 h-8 text-orange-500" />
                    <h3 className="text-2xl font-black text-slate-900 uppercase tracking-wide">
                      {study.industry}
                    </h3>
                  </div>
                  
                  <div className="space-y-8 border-l-[3px] border-orange-500 pl-6">
                    {study.results.map((stat, i) => (
                      <div key={i}>
                        <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side: Heavy SEO Content */}
              <div className="lg:col-span-8 space-y-12 text-lg sm:text-xl leading-relaxed text-slate-700">
                <div>
                  <h4 className="text-sm font-extrabold text-orange-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <BarChart className="w-4 h-4" /> The Challenge
                  </h4>
                  <p className="font-medium text-slate-800">
                    {study.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-extrabold text-orange-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <ArrowUpRight className="w-4 h-4" /> The AI SEO Solution
                  </h4>
                  <p className="text-slate-600">
                    {study.solution}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
