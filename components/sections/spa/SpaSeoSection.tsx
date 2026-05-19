"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, Globe } from "lucide-react";

export default function SpaSeoSection() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden border-t border-b border-slate-800">
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
      <div className="absolute right-0 bottom-0 w-[500px] h-[300px] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: SEO Narrative & Technical Highlights */}
          <div className="col-span-1 lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-8"
            >
              <span className="font-extrabold text-xs text-orange-500 uppercase tracking-widest bg-orange-600/10 px-4 py-2 rounded-full border border-orange-500/20 w-fit">
                Search Engine Optimization
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide">
                SEO-Friendly Single Page Application Development
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                A common misconception is that single page applications are bad for search indexing. While standard client-side rendering (CSR) causes indexing delays, we utilize <strong className="text-orange-500">server-side rendering (SSR)</strong> and advanced <strong className="text-orange-500">pre-rendering</strong> to present crawlers with clean HTML shells instantly.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                By developing with meta-frameworks like <strong className="text-white">Next.js</strong>, we achieve exceptional scores in Google's <strong className="text-white">Core Web Vitals</strong>. We structure robust <strong className="text-white">metadata optimization</strong> at the server level, ensuring each page route has dynamic titles and indexable Open Graph tags.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm italic border-l-2 border-orange-500 pl-4">
                To understand how we make React apps discoverable, read our research on <a href="/blog/are-single-page-applications-seo-friendly" className="text-orange-500 underline font-semibold hover:text-orange-400 transition-colors">are SPAs SEO-friendly</a>, check our analysis of <a href="/blog/react-vs-next-js-for-seo" className="text-orange-500 underline font-semibold hover:text-orange-400 transition-colors">React vs Next.js for SEO</a>, and learn the mechanics of <a href="/blog/what-is-server-side-rendering" className="text-orange-500 underline font-semibold hover:text-orange-400 transition-colors">server-side rendering</a>.
              </p>
            </motion.div>
          </div>

          {/* Right Side: Visualizing SSR vs CSR */}
          <div className="col-span-1 lg:col-span-6 relative flex flex-col gap-6">
            
            {/* Box 1: Server-Side Rendering (Best) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-3xl border border-slate-800 bg-slate-950/80 backdrop-blur-sm flex gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-500">
                <Server className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-extrabold text-sm uppercase tracking-wider text-white">
                    Our Method: Server-Side Rendering (SSR)
                  </h3>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[8px] uppercase tracking-wider">Fast & Indexable</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Server builds complete HTML and serves it immediately. Search engine bots index the site in milliseconds. User hydration happens in the background.
                </p>
              </div>
            </motion.div>

            {/* Box 2: Client-Side Rendering (Delayed) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-3xl border border-slate-800 bg-slate-950/40 backdrop-blur-sm flex gap-4 opacity-60"
            >
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 text-red-400">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-extrabold text-sm uppercase tracking-wider text-slate-300">
                    Standard CSR (Client-Side Rendering)
                  </h3>
                  <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-bold text-[8px] uppercase tracking-wider">Slow Indexing</span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Browser receives empty HTML. Search engines must run javascript scripts to render content, delaying index updates.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
