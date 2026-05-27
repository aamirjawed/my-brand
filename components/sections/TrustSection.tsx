"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, HeartPulse, Users, Smile, ArrowRight, Star, Building2, Store, MessageCircle, Heart, ShieldCheck } from "lucide-react";
import AstronautDoodle from "../doodles/AstronautDoodle";
import WarriorDoodle from "../doodles/WarriorDoodle";
import CreativeTeamDoodle from "../doodles/CreativeTeamDoodle";
import GrowthJourneyDoodle from "../doodles/GrowthJourneyDoodle";

const stats = [
  {
    icon: Award,
    title: "6 Years of Track Record"
  },
  {
    icon: HeartPulse,
    title: "1000s of reviews"
  },
  {
    icon: Users,
    title: "In-house Design Team"
  },
  {
    icon: Smile,
    title: "Garage to Global"
  }
];

const tabContent = [
  {
    title: "6 Years of Track Record",
    description: "For over a decade, we have been at the absolute forefront of digital innovation. We've weathered algorithm updates, design trends, and massive technological shifts, consistently delivering results that stand the test of time. Our experience isn't just a number; it's a proven, battle-tested blueprint for your ultimate success.",
    buttonText: "View Our Journey",
    visual: (
      <div className="relative w-full h-full flex items-center justify-center overflow-visible">
        <AstronautDoodle />
      </div>
    )
  },
  {
    title: "1000s of Reviews",
    description: "Don't just take our word for it. Thousands of satisfied clients across the globe have experienced the Digital Developer difference. We pride ourselves on building long-lasting partnerships based on absolute transparency, massive over-delivery, and measurable, explosive growth.",
    buttonText: "Read Success Stories",
    visual: (
      <div className="relative w-full h-full flex items-center justify-center overflow-visible">
        <WarriorDoodle />
      </div>
    )
  },
  {
    title: "In-House Design Team",
    description: "Meet the heart and soul of our creative engine! From branding gurus to web design whizzes and mobile app maestros, we've got it all under one roof. We aren't just a team; we harmonize our skills together. When you work with us, you're tapping into the full spectrum of creativity right here, all hands on deck!",
    buttonText: "Meet the Team",
    visual: (
      <div className="relative w-full h-full flex items-center justify-center overflow-visible">
        <CreativeTeamDoodle />
      </div>
    )
  },
  {
    title: "Garage to Global",
    description: "Whether you're an ambitious garage startup hustling to make your first mark, or a massive global enterprise scaling new heights, we have the tailored expertise to accelerate your growth. We build scalable, bulletproof solutions that grow exactly as your business does.",
    buttonText: "View Portfolio",
    visual: (
      <div className="relative w-full h-full flex items-center justify-center overflow-visible">
        <GrowthJourneyDoodle />
      </div>
    )
  }
];

export default function TrustSection() {
  const [activeTab, setActiveTab] = useState(0); // Default to In-House Team as per screenshot

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">

        {/* Playful Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          {/* Main Quirky Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 uppercase tracking-widest mb-6"
            style={{
              WebkitTextStroke: '1.5px #0f172a',
              textShadow: '4px 4px 0px rgba(0,0,0,0.05)'
            }}
          >
            Only Agency You Need
          </motion.h2>

          {/* Marker-style Highlight Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-orange-600 rounded-2xl transform -rotate-1 scale-105 origin-center shadow-lg shadow-orange-600/20"></div>
            <p className="relative z-10 text-white font-black px-8 py-3 text-xs sm:text-sm tracking-widest uppercase">
              Found Highly crafted Digital Experiences
            </p>
          </motion.div>
        </div>

        {/* Interactive Tabs Grid */}
        <div
          className="flex flex-row overflow-x-auto no-scrollbar gap-4 pt-3 pb-4 px-2 mb-16 sm:py-3 sm:px-3 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 sm:overflow-visible"
          style={{
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {/* Custom style for webkit scrollbar hiding */}
          <style dangerouslySetInnerHTML={{
            __html: `
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}} />

          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const isActive = activeTab === index;
            return (
              <motion.button
                key={index}
                onClick={() => setActiveTab(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className={`flex-shrink-0 w-[170px] sm:w-auto p-4 sm:p-8 flex flex-col items-center justify-center text-center gap-2 sm:gap-4 transition-all duration-300 rounded-[1.5rem] sm:rounded-[2rem] border ${isActive
                  ? "bg-slate-900 text-white border-slate-900 shadow-[0_20px_40px_-15px_rgba(15,23,42,0.25)] scale-105 z-10"
                  : "bg-slate-50 text-slate-900 border-slate-100 hover:bg-slate-100/70 shadow-sm"
                  }`}
              >
                {/* Modern Icon Badge */}
                <div
                  className={`w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300 relative ${isActive
                    ? "bg-white text-slate-900 shadow-md scale-105"
                    : "bg-white text-slate-800 border border-slate-100"
                    }`}
                >
                  <Icon strokeWidth={2} className="w-4 h-4 sm:w-5 h-5" />
                </div>

                {/* Text Title */}
                <h3 className={`font-bold text-[11px] sm:text-base leading-tight transition-colors duration-300 ${isActive ? "text-white" : "text-slate-700"
                  }`}>
                  {stat.title}
                </h3>
              </motion.button>
            );
          })}
        </div>

        {/* Dynamic Tab Content Area */}
        <div className="mt-8 sm:mt-16 relative overflow-visible">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
            >

              {/* Left Content (Text) */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-3xl sm:text-4xl font-black text-orange-600 mb-6 capitalize tracking-tight"
                >
                  {tabContent[activeTab].title}
                </h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  {tabContent[activeTab].description}
                </p>
                <button className="bg-slate-900 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-xl flex items-center gap-3">
                  {tabContent[activeTab].buttonText}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Right Content (Creative Visual) */}
              <div className="w-full lg:w-1/2 h-[380px] sm:h-[400px]">
                {tabContent[activeTab].visual}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
