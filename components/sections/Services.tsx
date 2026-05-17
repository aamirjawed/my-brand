"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, PenTool, LayoutTemplate, Megaphone, MonitorSmartphone } from "lucide-react";

const services = [
  {
    title: "Logo & Branding",
    description: "A logo is a exceptionally impactful and vital element of contemporary branding.",
    href: "/design/branding",
    icon: MonitorSmartphone,
  },
  {
    title: "Graphic Design",
    description: "Print designs to extend reach and tap into new markets.",
    href: "/graphic-designing",
    icon: PenTool,
  },
  {
    title: "Web Design",
    description: "Streamlined and creative website designs focused on engagement and high conversion rates.",
    href: "/development/custom",
    icon: LayoutTemplate,
  },
  {
    title: "Digital Marketing",
    description: "Boosting visibility, engagement, and conversions with data-driven digital marketing solutions.",
    href: "/ai-seo",
    icon: Megaphone,
  },
];

function ServiceCard({ service, index }: { service: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;

  return (
    <Link
      href={service.href}
      className="block h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        layout
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: index * 0.1,
          layout: { duration: 0.5, ease: "easeInOut" }
        }}
        className={`relative p-5 sm:p-8 flex flex-col xl:flex-row gap-4 sm:gap-6 overflow-hidden transition-colors transition-shadow duration-500 rounded-3xl border border-slate-100 ${!isHovered ? 'h-full' : ''} ${isHovered ? "bg-black text-white shadow-2xl -translate-y-2 border-black" : "bg-slate-50 text-slate-900"
          }`}
      >


        {/* Icon Box */}
        <motion.div
          layout="position"
          className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 shrink-0 flex items-center justify-center transition-colors transition-transform duration-500 relative z-10 rounded-2xl shadow-sm ${isHovered ? "bg-slate-800 scale-110" : "bg-white"
            }`}
        >
          <Icon className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 transition-colors duration-500 ${isHovered ? "text-orange-600" : "text-slate-800"}`} />
        </motion.div>

        {/* Text Content */}
        <motion.div
          layout="position"
          className="flex flex-col justify-center relative z-10 flex-grow"
        >
          <motion.h3 layout="position" className="text-base sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 whitespace-pre-line transition-colors duration-500 leading-tight">
            {service.title}
          </motion.h3>

          <AnimatePresence mode="popLayout">
            {!isHovered ? (
              <motion.div
                key="description"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex items-start"
              >
                <p className="text-slate-500 text-[11px] sm:text-sm md:text-base leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {service.description}
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="read-more"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 text-sm font-medium text-white"
              >
                <span className="text-[11px] sm:text-sm md:text-base">Read more</span> <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Decorative Faint Icon for Dark Card */}
        <Icon className={`absolute right-4 bottom-4 w-24 h-24 text-white pointer-events-none transition-opacity duration-500 ${isHovered ? "opacity-5" : "opacity-0"}`} />
      </motion.div>
    </Link>
  );
}

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="w-full px-6 lg:px-16 xl:px-24 max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start">

          {/* Left Content */}
          <div className="w-full lg:w-4/12 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">

                <h4 className="text-orange-600 font-bold tracking-widest text-xs sm:text-sm mb-4 uppercase">Let's know about our Services</h4>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
                Creative <br className="hidden sm:block" />
                Web Design <br className="hidden sm:block" />
                and Branding <br className="hidden sm:block" />
                Services, <br className="hidden sm:block" />
                <span className="text-orange-600">Tailored for You</span>
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed max-w-lg">
                Streamlining concentrated on, engagement, and conversions
                with powerful omnichannel virtual techniques.
              </p>
            </motion.div>
          </div>

          {/* Right Content - Grid */}
          <div className="w-full lg:w-8/12 grid grid-cols-2 gap-3 sm:gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
