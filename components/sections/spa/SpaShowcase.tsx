"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SpaShowcase() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px]">

        <div className="w-full mb-16 border-l-4 border-orange-600 pl-4 sm:pl-6">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-orange-600 uppercase tracking-wider leading-[1.25]"
          >
            ENGINEER PRODUCTION-GRADE SINGLE PAGE APPLICATIONS THAT USERS ACTUALLY ENJOY USING
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: App architecture visual */}
          <div className="col-span-1 lg:col-span-6 relative flex items-center justify-center min-h-[350px] sm:min-h-[460px] md:min-h-[500px]">
            <div className="absolute w-[80%] h-[80%] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

            <div className="relative w-full max-w-[550px] aspect-[4/3] z-10 overflow-visible flex items-center justify-center">

              {/* Back: Component tree panel */}
              <motion.div
                initial={{ opacity: 0, x: -40, y: -20 }}
                whileInView={{ opacity: 1, x: -20, y: -20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="absolute top-[5%] left-[2%] w-[65%] aspect-[4/3] bg-slate-950 rounded-2xl p-5 shadow-2xl border-[3px] border-slate-800 z-10 flex flex-col group hover:-translate-y-2 transition-transform duration-500"
              >
                <div className="flex gap-1.5 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  <div className="ml-auto text-[7px] text-slate-500 font-mono">App.tsx</div>
                </div>
                <div className="font-mono text-[8px] leading-loose space-y-0.5 flex-1">
                  <p><span className="text-blue-400">function</span> <span className="text-yellow-300">App</span><span className="text-slate-400">() {"{"}</span></p>
                  <p className="pl-3"><span className="text-slate-500">// Route-based code splitting</span></p>
                  <p className="pl-3"><span className="text-pink-400">return</span> <span className="text-slate-300">{"("}</span></p>
                  <p className="pl-5 text-slate-300">{"<"}<span className="text-green-400">Router</span>{">"}</p>
                  <p className="pl-7 text-slate-300">{"<"}<span className="text-green-400">Dashboard</span> <span className="text-orange-400">path</span><span className="text-slate-300">="/"</span> <span className="text-slate-400">{" />"}</span></p>
                  <p className="pl-7 text-slate-300">{"<"}<span className="text-green-400">Analytics</span> <span className="text-orange-400">lazy</span> <span className="text-slate-400">{" />"}</span></p>
                  <p className="pl-5 text-slate-300">{"</"}<span className="text-green-400">Router</span>{">"}</p>
                  <p className="pl-3 text-slate-300">{")"}</p>
                  <p className="text-slate-400">{"}"}</p>
                  <p className="mt-2 text-emerald-400 text-[7px] animate-pulse">▶ Bundle: 47kb gzipped</p>
                </div>
              </motion.div>

              {/* Front: Live app UI */}
              <motion.div
                initial={{ opacity: 0, x: 40, y: 20 }}
                whileInView={{ opacity: 1, x: 20, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-[2%] right-[2%] w-[65%] aspect-[16/10] bg-white rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border-[3px] border-slate-100 z-20 flex flex-col group hover:-translate-y-2 transition-transform duration-500 overflow-hidden"
              >
                {/* App top bar */}
                <div className="bg-slate-900 px-4 py-2 flex items-center gap-3">
                  <div className="w-5 h-5 rounded bg-orange-600 flex items-center justify-center">
                    <span className="text-white font-black text-[6px]">S</span>
                  </div>
                  <div className="flex gap-3">
                    {["Dashboard", "Analytics", "Users", "Settings"].map((t) => (
                      <span key={t} className={`text-[6px] font-bold uppercase tracking-wider ${t === "Dashboard" ? "text-orange-400" : "text-slate-500"}`}>{t}</span>
                    ))}
                  </div>
                  <div className="ml-auto w-4 h-4 rounded-full bg-slate-700"></div>
                </div>
                {/* App content area */}
                <div className="flex-1 bg-slate-50 p-3 grid grid-cols-3 gap-2">
                  {[
                    { label: "Revenue", val: "$48.2k", up: true },
                    { label: "Users", val: "12,340", up: true },
                    { label: "Churn", val: "0.8%", up: false },
                  ].map((card) => (
                    <div key={card.label} className="bg-white rounded-lg p-2 border border-slate-100 shadow-sm flex flex-col justify-between">
                      <div className="text-[5px] text-slate-400 uppercase font-bold tracking-wider">{card.label}</div>
                      <div className="text-[9px] font-black text-slate-900">{card.val}</div>
                      <div className={`text-[5px] font-bold ${card.up ? "text-emerald-500" : "text-red-400"}`}>{card.up ? "↑" : "↓"}</div>
                    </div>
                  ))}
                  {/* Mini chart area */}
                  <div className="col-span-3 bg-white rounded-lg p-2 border border-slate-100 shadow-sm flex items-end gap-0.5 h-8">
                    {[40, 65, 50, 80, 70, 90, 85, 100, 88, 95].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i >= 7 ? "#ea580c" : "#e2e8f0" }}></div>
                    ))}
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Right: Content */}
          <div className="col-span-1 lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 sm:space-y-8 text-slate-800"
            >
              <p className="text-base sm:text-lg leading-relaxed font-medium">
                Traditional websites load a new HTML document on every single page navigation — triggering full browser repaints, lost scroll positions, and the jarring white flash your users have learned to tolerate. Single Page Applications fundamentally eliminate this model. With our <strong className="text-orange-600 font-extrabold">custom SPA development services</strong>, your application loads once, then handles all navigation client-side — delivering seamless, instant transitions that feel indistinguishable from a native mobile application running on the user's own device.
              </p>

              <p className="text-sm sm:text-base leading-relaxed">
                We build SPAs using React 18 with concurrent features, Vue 3 Composition API, and Next.js App Router — depending entirely on what your specific project demands technically. Our engineers implement route-based code splitting so the initial bundle stays under 50kb, progressive loading so users see content within 1.5 seconds on any connection, optimistic UI updates so every action feels instant even before the server confirms, and WebSocket integration for real-time collaborative features. The result is a web application your users actually enjoy spending time inside — reducing churn and increasing session depth dramatically.
              </p>

              <p className="text-slate-700 text-xs sm:text-sm font-semibold italic border-l-2 border-orange-500 pl-4">
                If your product requires a login, a dashboard, real-time data, or complex user interactions — a custom SPA is not optional. It is the correct technical decision.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
