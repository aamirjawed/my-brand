"use client";

import React from "react";
import { motion } from "framer-motion";
import { CATEGORIES, PROJECTS, Category } from "@/lib/portfolio-data";

interface OurWorkFiltersProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

export default function OurWorkFilters({ activeFilter, setActiveFilter }: OurWorkFiltersProps) {
  const activeCategories = React.useMemo(() => {
    const activeIds = new Set(PROJECTS.map((p) => p.category));
    return CATEGORIES.filter((cat) => cat.id === "all" || activeIds.has(cat.id as any));
  }, []);

  return (
    <section className="py-5 sm:py-10 bg-slate-900 border-y border-slate-800 sticky top-[70px] z-30 backdrop-blur-md bg-opacity-95 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
        <div className="flex items-center justify-start md:justify-center overflow-x-auto scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex flex-nowrap md:flex-wrap gap-2.5 sm:gap-3 pb-1 md:pb-0">
            {activeCategories.map((cat: Category) => {
              const IconComponent = cat.icon;
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 relative border cursor-pointer flex-shrink-0 ${
                    isActive
                      ? "bg-orange-600 text-white border-orange-500 shadow-lg shadow-orange-600/20"
                      : "bg-slate-950 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700"
                  }`}
                >
                  <IconComponent className="w-4 h-4 shrink-0" />
                  <span>{cat.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterBg"
                      className="absolute inset-0 bg-orange-600 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
