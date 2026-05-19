"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Code2, Users2, Zap } from "lucide-react";

export default function AboutValues() {
  const values = [
    {
      icon: ShieldAlert,
      title: "No Bullshit",
      desc: "If an idea is bad or technically unfeasible within your budget, we will tell you immediately. We don't say 'yes' just to win a contract."
    },
    {
      icon: Code2,
      title: "Craftsmanship",
      desc: "We actually care about clean architecture. We write tests, we document our APIs, and we leave codebases better than we found them."
    },
    {
      icon: Users2,
      title: "Zero Middlemen",
      desc: "You have direct Slack access to the engineers building your product. No account managers playing telephone and slowing down progress."
    },
    {
      icon: Zap,
      title: "Velocity",
      desc: "We don't do endless discovery phases. We figure out the core requirements and we start shipping working software within the first two weeks."
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden">
      
      {/* Background Floating Doodle 1 */}
      <motion.svg
        className="absolute top-[10%] left-[5%] w-32 h-32 text-orange-200 opacity-60 pointer-events-none"
        viewBox="0 0 200 200"
      >
        <motion.path
          d="M 20 180 Q 100 20 180 80"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M 160 50 L 180 80 L 150 90"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 1.5 }}
        />
      </motion.svg>

      {/* Background Floating Doodle 2 */}
      <motion.svg
        className="absolute bottom-[10%] right-[5%] w-48 h-48 text-indigo-200 opacity-40 pointer-events-none"
        viewBox="0 0 100 100"
      >
        <motion.path
          d="M 50 10 C 20 15 10 30 15 60 C 20 80 50 90 75 80 C 95 65 90 20 60 10 C 50 5 45 8 40 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
        />
      </motion.svg>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="relative inline-block mb-6">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 uppercase tracking-wide">
              Our Core Principles
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
            These aren't just words on a wall. These are the non-negotiable rules that dictate who we hire, how we write code, and how we interact with our clients every single day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex flex-col items-start relative group"
              >
                {/* Hand-drawn circle doodle animating behind the icon on hover */}
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
                
                <h3 className="text-2xl font-black text-slate-900 mb-4">{v.title}</h3>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                  {v.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
