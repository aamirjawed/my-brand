"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageSquare, Briefcase, DollarSign, CheckCircle2, Clock, MapPin, Send, HelpCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "landing-page",
    budget: "5k-10k",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  // Live status helper (Office hours 9 AM - 6 PM IST/GMT+5:30)
  useEffect(() => {
    const currentHour = new Date().getUTCHours() + 5.5; // simple offset representation
    if (currentHour >= 9 && currentHour < 18) {
      setIsOnline(true);
    } else {
      setIsOnline(false);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API pipeline transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        service: "landing-page",
        budget: "5k-10k",
        message: ""
      });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const services = [
    { value: "landing-page", label: "Landing Page Development" },
    { value: "static-website", label: "Static Website Development" },
    { value: "spa-app", label: "Single Page Application (SPA)" },
    { value: "ai-seo", label: "AI SEO Optimization Services" },
    { value: "branding", label: "Branding & UI/UX Design" },
    { value: "other", label: "Other Consultancy Services" }
  ];

  const budgets = [
    { value: "under-2k", label: "Under $2,000" },
    { value: "2k-5k", label: "$2,000 - $5,000" },
    { value: "5k-10k", label: "$5,000 - $10,000" },
    { value: "10k-plus", label: "$10,000+" }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-6">

      {/* LEFT COLUMN: The Interactive Form */}
      <div className="col-span-1 lg:col-span-7 bg-slate-900/60 border border-slate-900 rounded-[2rem] p-6 sm:p-10 relative overflow-hidden backdrop-blur-sm shadow-xl">
        <div className="absolute top-0 right-0 w-36 h-36 bg-orange-600/5 rounded-full blur-[60px] pointer-events-none"></div>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="johndoe@domain.com"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Service Dropdown */}
            <div className="space-y-2">
              <label htmlFor="service" className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Project Category
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-orange-500 transition-colors appearance-none cursor-pointer"
              >
                {services.map((s) => (
                  <option key={s.value} value={s.value} className="bg-slate-950 text-white">
                    {s.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget Dropdown */}
            <div className="space-y-2">
              <label htmlFor="budget" className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Estimated Budget
              </label>
              <select
                id="budget"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-orange-500 transition-colors appearance-none cursor-pointer"
              >
                {budgets.map((b) => (
                  <option key={b.value} value={b.value} className="bg-slate-950 text-white">
                    {b.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Description Scope */}
          <div className="space-y-2">
            <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Project Brief / Details
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about the project goals, timelines, and primary features you need..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-orange-500 transition-colors resize-none"
            />
          </div>

          {/* Submit Button & Animations */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-800/40">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-700 text-white font-black px-8 py-4 rounded-xl transition-all duration-300 shadow-md text-xs tracking-widest uppercase disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
                  Sending Brief...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>

            {/* Success message banner */}
            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex items-center gap-2 text-emerald-400 font-mono text-[11px] uppercase tracking-wider"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Message dispatched successfully!
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </form>
      </div>

      {/* RIGHT COLUMN: Studio details & Availability stats */}
      <div className="col-span-1 lg:col-span-5 space-y-8">

        {/* Availability Badge */}
        <div className="bg-slate-900/40 border border-slate-900 rounded-3xl p-6 relative overflow-hidden flex items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest block">Response Desk</span>
            <h4 className="text-sm font-black uppercase text-white tracking-wide">
              {isOnline ? "Operational & Online" : "Monitoring Inboxes"}
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed font-mono">
              {isOnline ? "Average review duration: under 15 minutes." : "Outside office hours. Average response: under 2 hours."}
            </p>
          </div>
          <div className="relative shrink-0">
            <div className={`w-3.5 h-3.5 rounded-full ${isOnline ? "bg-emerald-500" : "bg-orange-500"} animate-pulse`}></div>
          </div>
        </div>

        {/* Directory details */}
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-orange-600/10 border border-orange-500/20 flex items-center justify-center shrink-0 text-orange-500">
              <Mail className="w-4.5 h-4.5" />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest block">Direct Communications</span>
              <a href="mailto:hello@digitaldeveloper.co" className="text-sm font-black text-white hover:text-orange-500 transition-colors uppercase tracking-wider block mt-1">
                hello@digitaldeveloper.co
              </a>
              <span className="text-[10px] text-slate-400 font-mono">Replies guaranteed within 24 hours.</span>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-orange-600/10 border border-orange-500/20 flex items-center justify-center shrink-0 text-orange-500">
              <MapPin className="w-4.5 h-4.5" />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest block">Studio Operations</span>
              <span className="text-sm font-black text-white uppercase tracking-wider block mt-1">
                Remote Operations
              </span>
              <span className="text-[10px] text-slate-400 font-mono">Collaborating globally with leading startups.</span>
            </div>
          </div>
        </div>

        {/* Dynamic prompt section */}
        {/* <div className="bg-slate-900/20 border border-slate-900/50 rounded-3xl p-6 space-y-4">
          <div className="flex items-center gap-2 text-orange-400 font-bold text-xs uppercase">
            <HelpCircle className="w-4 h-4 text-orange-500" /> FAQ Snapshot
          </div>
          <div className="space-y-3 font-mono text-[11px] leading-relaxed text-slate-400">
            <p>
              <strong>Do you sign NDAs?</strong>
              <br />
              Yes. We regularly execute standard Non-Disclosure Agreements prior to scope definition.
            </p>
            <p>
              <strong>What is the typical delivery schedule?</strong>
              <br />
              Landing pages: 5-7 business days. Custom SPAs: 3-6 weeks based on specifications.
            </p>
          </div>
        </div> */}

      </div>

    </div>
  );
}
