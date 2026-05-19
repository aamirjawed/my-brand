"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SeoShowcase() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px]">

        {/* Section Heading — exact LandingShowcase pattern */}
        <div className="w-full mb-16 border-l-4 border-orange-600 pl-4 sm:pl-6">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-orange-600 uppercase tracking-wider leading-[1.25]"
          >
            OUTRANK EVERY COMPETITOR WITH OUR AI-DRIVEN SEARCH ENGINE OPTIMIZATION SYSTEMS
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Side: SEO Dashboard Visual */}
          <div className="col-span-1 lg:col-span-6 relative flex items-center justify-center min-h-[350px] sm:min-h-[460px] md:min-h-[500px]">
            <div className="absolute w-[80%] h-[80%] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

            <div className="relative w-full max-w-[550px] aspect-[4/3] z-10 flex items-center justify-center overflow-visible">

              {/* Back: Keyword Rankings Panel */}
              <motion.div
                initial={{ opacity: 0, x: -40, y: -20 }}
                whileInView={{ opacity: 1, x: -20, y: -20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="absolute top-[8%] left-[3%] w-[68%] aspect-[4/3] bg-slate-900 rounded-2xl p-4 shadow-2xl border-[3px] border-slate-800 z-10 flex flex-col group hover:-translate-y-2 transition-transform duration-500"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[8px] font-extrabold text-orange-500 uppercase tracking-widest">Keyword Rankings</div>
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                </div>
                <div className="space-y-2 flex-1">
                  {[
                    { kw: "ai seo services", pos: "#1", delta: "+12" },
                    { kw: "seo agency usa", pos: "#3", delta: "+8" },
                    { kw: "rank on google fast", pos: "#2", delta: "+15" },
                    { kw: "ai content optimization", pos: "#4", delta: "+6" },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between text-[7px]">
                      <span className="text-slate-400 truncate max-w-[100px]">{row.kw}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-bold">{row.pos}</span>
                        <span className="text-emerald-400 font-bold">{row.delta}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-2 border-t border-slate-800">
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-[82%] h-full bg-orange-500 rounded-full"></div>
                  </div>
                  <div className="text-[6px] text-slate-500 mt-1">Domain Authority: 82/100</div>
                </div>
              </motion.div>

              {/* Front: Traffic Graph Card */}
              <motion.div
                initial={{ opacity: 0, x: 40, y: 20 }}
                whileInView={{ opacity: 1, x: 20, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-[3%] right-[3%] w-[65%] aspect-[16/10] bg-white rounded-2xl p-3 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)] border-[3px] border-slate-100 z-20 flex flex-col group hover:-translate-y-2 transition-transform duration-500"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-[7px] font-extrabold text-slate-900 uppercase tracking-widest">Organic Traffic</div>
                  <div className="text-[7px] font-bold text-emerald-500">↑ 247% YoY</div>
                </div>
                {/* Fake chart bars */}
                <div className="flex-1 flex items-end gap-1 pb-1">
                  {[30, 45, 35, 55, 50, 70, 65, 80, 75, 90, 85, 100].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i >= 9 ? "#ea580c" : "#e2e8f0" }}></div>
                  ))}
                </div>
                <div className="text-[5px] text-slate-400 uppercase tracking-widest mt-1">Jan — Dec</div>
              </motion.div>

            </div>
          </div>

          {/* Right Side: Narrative */}
          <div className="col-span-1 lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 sm:space-y-8 text-slate-800"
            >
              <p className="text-base sm:text-lg leading-relaxed font-medium">
                Sitting on page two of Google is as good as being invisible. But we know that achieving better rankings is ultimately about one thing: <strong>you want high-quality traffic</strong>. Without a data-driven, technically precise SEO strategy, your competitors are actively stealing leads that should belong to you. With our cutting-edge <strong className="text-orange-600 font-extrabold">AI SEO services</strong>, we deploy machine learning systems that analyze <a href="/blog/how-ai-is-changing-seo" className="text-orange-600 underline font-semibold hover:text-orange-500">search intent</a> signals, enabling <strong className="text-orange-600">AI optimization</strong> speeds that manual agencies cannot replicate. Combine this with responsive <a href="/static-website-development" className="text-orange-600 underline font-semibold hover:text-orange-500">static website development</a> and optimized <a href="/landing-page-development" className="text-orange-600 underline font-semibold hover:text-orange-500">landing page development</a> to convert that traffic.
              </p>

              <p className="text-sm sm:text-base leading-relaxed">
                We focus on <strong className="text-orange-600">content strategy</strong> and automated <a href="/blog/ai-seo-vs-traditional-seo" className="text-orange-600 underline font-semibold hover:text-orange-500">keyword clustering</a> to match modern <strong className="text-orange-600">semantic search</strong> standards. Our systems crawl your site structure, resolving critical leaks using <a href="/blog/technical-seo-in-the-ai-era" className="text-orange-600 underline font-semibold hover:text-orange-500">technical SEO in the AI era</a>. To learn if machine-generated text is effective for ranking, check our research on whether <a href="/blog/can-ai-content-rank-on-google" className="text-orange-600 underline font-semibold hover:text-orange-500">AI content can rank on Google</a> and how we maintain quality.
              </p>

              <p className="text-slate-700 text-xs sm:text-sm font-semibold italic border-l-2 border-orange-500 pl-4">
                Stop burning ad budgets on short-lived clicks — let our AI automation systems build you an unstoppable organic traffic engine that drives real leads and permanent business growth.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
