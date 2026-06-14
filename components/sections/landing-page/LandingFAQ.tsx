"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function LandingFAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is the cost of landing page development for USA/UK clients?",
      a: "Landing page development costs $1,500–5,000 for a single high-converting page. Our offshore pricing is $25–50/hr vs $150–200/hr US agencies. Enterprise suites (3–5 pages) cost $6,000–12,000. We include CRO, A/B testing, and CRM integration in all packages."
    },
    {
      q: "Do you work with international clients (USA, UK, Canada, Australia, UAE)?",
      a: "Yes, 60% of our clients are international (USA 35%, UK 15%, Canada/Australia/UAE 10%). We support US/UK timezones, use agile methodology, provide weekly updates, and have built 200+ pages for global clients."
    },
    {
      q: "What platforms do you use (Webflow, WordPress, React, HubSpot)?",
      a: "We specialize in Webflow (no-code, fast deployment), WordPress (custom themes), React (custom builds), and HubSpot (CRM-integrated). 70% of projects use Webflow for speed and flexibility. All pages are mobile-responsive with sub-2.5s load times."
    },
    {
      q: "How long does it take to build a high-converting landing page?",
      a: "A standard landing page takes 5–7 days (design 2–3 days, development 2–3 days, QA 1 day). Complex pages with A/B testing and CRM integration take 10–14 days. We offer rush delivery (3–4 days) for urgent campaigns."
    },
    {
      q: "Do you include CRO and A/B testing in your services?",
      a: "Yes, all our landing pages include CRO (conversion rate optimization) with A/B testing setup, analytics tracking, and behavior analysis. We achieve average 8–15% conversion rates (vs 2–5% industry average) through message match, friction reduction, and data-driven improvements."
    },
    {
      q: "What conversion rates can I expect from your landing pages?",
      a: "Our landing pages achieve 8–15% average conversion rates for SaaS lead gen, 6–10% for eCommerce, and 10–20% for B2B. Industry average is 2–5%. We optimize through CRO, A/B testing, speed (<2.5s), and social proof."
    },
    {
      q: "Why is your pricing lower than US/UK agencies?",
      a: "We are a remote offshore team with $25–50/hr pricing vs $150–200/hr US agencies like OuterBox and AdVenture Media. This provides 60–75% cost savings for the exact same high-end engineering quality. We work in US/UK timezones with full daily communication."
    },
    {
      q: "Do you integrate CRM and analytics (HubSpot, Salesforce, Google Analytics)?",
      a: "Yes, we integrate all landing pages with your existing marketing stack, including HubSpot, Salesforce, ActiveCampaign, Mailchimp, Google Analytics 4, and Meta Pixel."
    },
    {
      q: "Do you provide post-launch support and optimization?",
      a: "Yes, we provide 30 days of free post-launch support to monitor analytics and fix any bugs. We also offer monthly optimization retainers for continuous A/B testing."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1000px] relative z-10">
        
        {/* FAQ Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-orange-600" /> Have Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-wide">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-md mt-2">
            Explore answers to our most common questions regarding timelines, SEO, redesigns, and capabilities.
          </p>
        </div>

        {/* Cardless Accordion FAQ Panels */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={idx}
                className="border-b border-slate-200 py-6 transition-all duration-300"
              >
                {/* Accordion trigger button */}
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  className="w-full flex items-center justify-between text-left gap-4 outline-none group"
                >
                  <h3 className={`font-extrabold text-base sm:text-lg uppercase tracking-wide transition-colors ${
                    isExpanded ? "text-orange-600" : "text-slate-950 group-hover:text-orange-500"
                  }`}>
                    {faq.q}
                  </h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${
                    isExpanded ? "bg-orange-600 border-orange-600 text-white" : "border-slate-200 text-slate-500 group-hover:border-slate-900"
                  }`}>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Collapsible content panel */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-2 border-l-2 border-orange-500">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
