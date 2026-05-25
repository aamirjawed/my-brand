"use client";

import React, { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, Project } from "@/lib/portfolio-data";
import OurWorkCard from "./OurWorkCard";

interface OurWorkGridProps {
  activeFilter: string;
}

export default function OurWorkGrid({ activeFilter }: OurWorkGridProps) {
  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return PROJECTS;
    return PROJECTS.filter((p: Project) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
              >
                <OurWorkCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
