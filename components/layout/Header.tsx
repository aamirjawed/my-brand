"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { navigationData, NavLink } from "@/lib/navigation-data";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveMegaMenu(null);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center transform transition-transform group-hover:rotate-12">
              <span className="text-white font-bold text-xl">DD</span>
            </div>
            <span className={cn(
              "font-bold text-xl tracking-tight transition-colors flex items-center",
              scrolled ? "text-gray-900" : "text-gray-900 md:text-white"
            )}>
              Digital<span className="text-orange-600">Developer</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-4 flex-grow justify-center px-4">
            {navigationData.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => setActiveMegaMenu(link.label)}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                {link.megaMenu ? (
                  <span
                    className={cn(
                      "flex items-center gap-1 font-medium text-[12px] xl:text-[14px] tracking-tight transition-colors py-2 whitespace-nowrap cursor-default select-none",
                      scrolled ? "text-gray-700" : "text-gray-700 md:text-white"
                    )}
                  >
                    {link.label}
                    <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180 opacity-50" />
                  </span>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 font-medium text-[12px] xl:text-[14px] tracking-tight transition-colors py-2 whitespace-nowrap",
                      scrolled ? "text-gray-700 hover:text-orange-600" : "text-gray-700 md:text-white hover:text-orange-400",
                      pathname === link.href && "text-orange-600"
                    )}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Mega Menu Desktop */}
                {link.megaMenu && (
                  <AnimatePresence>
                    {activeMegaMenu === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-[70px] left-0 right-0 w-full px-4 pointer-events-none"
                      >
                        <div className="container mx-auto pointer-events-auto">
                          <div className="bg-slate-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden flex flex-wrap gap-x-24 p-12 w-fit mx-auto">
                            {link.megaMenu.map((category) => (
                              <div key={category.title} className="flex flex-col gap-6">
                                <h3 className="text-orange-500 font-black text-[11px] tracking-[0.25em] uppercase border-b border-white/5 pb-2">
                                  {category.title}
                                </h3>
                                <ul className="flex flex-col gap-3.5">
                                  {category.links.map((subLink) => (
                                    <li key={subLink.label}>
                                      <Link
                                        href={subLink.href}
                                        className="text-gray-300 hover:text-white text-[15px] transition-all hover:translate-x-1.5 inline-block whitespace-nowrap"
                                      >
                                        {subLink.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Right Actions - Empty for now */}
          <div className="hidden md:flex items-center gap-4">
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "lg:hidden p-2 transition-colors",
              scrolled ? "text-gray-900" : "text-white"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-900 border-t border-white/10 overflow-y-auto max-h-[calc(100vh-80px)] pb-12"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navigationData.filter(link => link.label.toLowerCase().trim() !== "contact us").map((link) => (
                <div key={link.label} className="flex flex-col">
                  <div className="flex items-center justify-between py-3 border-b border-white/5">
                    {link.megaMenu ? (
                      <button
                        onClick={() => setActiveMegaMenu(activeMegaMenu === link.label ? null : link.label)}
                        className="text-xl text-white text-left w-full flex items-center justify-between py-1"
                      >
                        <span>{link.label}</span>
                        <ChevronDown className={cn(
                          "w-5 h-5 text-gray-405 transition-transform",
                          activeMegaMenu === link.label && "rotate-180"
                        )} />
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-xl text-white w-full block py-1"
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>

                  {link.megaMenu && activeMegaMenu === link.label && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="pl-4 py-6 grid grid-cols-1 gap-8"
                    >
                      {link.megaMenu.map((category) => (
                        <div key={category.title}>
                          <h4 className="text-orange-500 font-black text-[10px] tracking-widest uppercase mb-4">
                            {category.title}
                          </h4>
                          <ul className="flex flex-col gap-3">
                            {category.links.map((subLink) => (
                              <li key={subLink.label}>
                                <Link
                                  href={subLink.href}
                                  className="text-gray-400 text-[15px] py-1 block active:text-orange-500 transition-colors"
                                >
                                  {subLink.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
              <div className="mt-4 flex flex-col gap-4">
                <Link
                  href="/contact-us"
                  className="bg-orange-600 text-white text-center py-4 rounded-xl font-bold shadow-xl shadow-orange-600/20"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
