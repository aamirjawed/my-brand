"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Zap, Sparkles, Target, BarChart3, Rocket } from "lucide-react";

export default function LandingPageService() {
  const landingBenefits = ["Conversions", "Leads & Sales", "Customer Trust", "Product Value"];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentBenefit = landingBenefits[index];
    const typeSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentBenefit.substring(0, displayText.length + 1));
        if (displayText.length === currentBenefit.length) {
          setTimeout(() => setIsDeleting(true), 2000); // Hold before deleting
        }
      } else {
        setDisplayText(currentBenefit.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % landingBenefits.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  const features = [
    {
      icon: Zap,
      title: "Blazing Fast Speeds",
      description: "Optimized to load in milliseconds. Standard-setting page performance that ensures no lead bounce."
    },
    {
      icon: Target,
      title: "Conversion Focused",
      description: "Meticulously designed visual hierarchies, clear CTA placement, and psychological triggers that guide actions."
    },
    {
      icon: BarChart3,
      title: "Integrated Analytics",
      description: "Built-in tracking, heatmaps, and UTM parameters to measure performance and conversions instantly."
    },
    {
      icon: ShieldCheck,
      title: "Secure & Compliant",
      description: "Fully loaded with SSL, modern GDPR/CCPA consent forms, and absolute data safety tools."
    }
  ];

  return (
    <div className="relative bg-white min-h-screen">

      {/* 1. HERO SECTION (Mirroring Home Hero with different content) */}
      <section className="relative h-auto pt-44 pb-28 sm:py-36 md:py-40 flex flex-col overflow-hidden bg-slate-900">

        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/75 z-10" />
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
            alt="Landing Page Optimization Setup"
            className="w-full h-full object-cover select-none"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-20 flex flex-col items-center justify-center text-center">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center justify-center"
            >


              {/* Dynamic Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.15] tracking-tight mb-8">
                Multiply Your <br />
                <div className="h-[1.25em] relative flex items-center justify-center">
                  <span className="text-orange-500">
                    {displayText}
                    <span className="inline-block w-[3px] h-[0.8em] bg-orange-500 ml-2 animate-pulse" />
                  </span>
                </div>
              </h1>

              {/* Pitch */}
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
                Stop throwing traffic into generic websites. We design bespoke, lightning-fast landing pages engineered specifically to convert visitors into loyal clients.
              </p>

              {/* Action Button */}
              {/* <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact-us"
                  className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-300 flex items-center gap-2 shadow-[0_8px_30px_-5px_rgba(234,88,12,0.4)] hover:shadow-[0_12px_40px_-5px_rgba(234,88,12,0.5)] hover:-translate-y-1 active:translate-y-0"
                >
                  Start Your Project
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a
                  href="#why-us"
                  className="text-gray-400 hover:text-white px-6 py-4 rounded-full text-sm font-bold tracking-wide transition-colors"
                >
                  Learn More Below
                </a>
              </div> */}
            </motion.div>
          </div>
        </div>

      </section>


    </div>
  );
}
