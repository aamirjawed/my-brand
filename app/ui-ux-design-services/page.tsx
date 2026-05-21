import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

import dynamic from "next/dynamic";

// Modular UI/UX Components
import UiUxHero from "@/components/sections/ui-ux-design/UiUxHero";
const UiUxShowcase = dynamic(() => import("@/components/sections/ui-ux-design/UiUxShowcase"));
const UiUxWhyMatters = dynamic(() => import("@/components/sections/ui-ux-design/UiUxWhyMatters"));
const UiUxServices = dynamic(() => import("@/components/sections/ui-ux-design/UiUxServices"));
const UiUxSolutions = dynamic(() => import("@/components/sections/ui-ux-design/UiUxSolutions"));
const UiUxProcess = dynamic(() => import("@/components/sections/ui-ux-design/UiUxProcess"));
const UiUxFeatures = dynamic(() => import("@/components/sections/ui-ux-design/UiUxFeatures"));
const UiUxWhyChooseUs = dynamic(() => import("@/components/sections/ui-ux-design/UiUxWhyChooseUs"));
const UiUxPortfolio = dynamic(() => import("@/components/sections/ui-ux-design/UiUxPortfolio"));
const UiUxTestimonials = dynamic(() => import("@/components/sections/ui-ux-design/UiUxTestimonials"));
const UiUxFAQ = dynamic(() => import("@/components/sections/ui-ux-design/UiUxFAQ"));

const faqs = [
  {
    q: "What is UI/UX design?",
    a: "UI/UX design focuses on creating visually engaging, user-friendly, and intuitive digital experiences for websites and applications by focusing on visual hierarchy and interaction design."
  },
  {
    q: "Why is UX important for websites?",
    a: "Good user experience design reduces visitor friction, helps users navigate layouts efficiently, builds brand trust, and reduces bounce rates."
  },
  {
    q: "Do you design responsive interfaces?",
    a: "Yes, we design responsive interfaces that scale and adjust visual components for a premium look across all mobile, tablet, and desktop screens."
  },
  {
    q: "Can UI/UX improve conversions?",
    a: "Yes, effective UI/UX design can improve usability, engagement, customer satisfaction, and conversion rates by placing elements intentionally."
  },
  {
    q: "Do you provide mobile app UI/UX design?",
    a: "Absolutely. We design custom mobile app UI layouts for iOS and Android, focusing on mobile responsiveness, touch elements, and prototype design models."
  }
];

export const metadata: Metadata = {
  title: "UI/UX Design Services | Modern User Experience & Interface Design",
  description: "Professional UI/UX design services focused on user experience, responsive interfaces, usability, branding, and conversion-focused digital design.",
  keywords: [
    "UI/UX Design Services",
    "user interface design",
    "user experience design",
    "modern UI/UX solutions",
    "responsive interface design",
    "website UI/UX design",
    "mobile app UI/UX",
    "conversion-focused design",
    "custom UI design",
    "professional UX services",
    "digital product design"
  ],
  openGraph: {
    title: "UI/UX Design Services | Modern User Experience & Interface Design",
    description: "Professional UI/UX design services focused on user experience, responsive interfaces, usability, branding, and conversion-focused digital design.",
    type: "website",
    url: "/ui-ux-design-services"
  }
};

export default function UiUxDesignServicesPage() {
  return (
    <div className="relative bg-white min-h-screen">
      {/* 1. Hero Section */}
      <UiUxHero />

      {/* 2. Showcase Doodle Section */}
      <UiUxShowcase />

      {/* 3. Why UI/UX Matters */}
      <UiUxWhyMatters />

      {/* 3. Services Included */}
      <UiUxServices />

      {/* 4. UI/UX Solutions We Design */}
      <UiUxSolutions />

      {/* 5. Our UI/UX Design Process */}
      <UiUxProcess />

      {/* 6. Features of Our UI/UX Design Solutions */}
      <UiUxFeatures />

      {/* 7. Why Choose Our UI/UX Design Services */}
      <UiUxWhyChooseUs />

      {/* 8. Portfolio Showcase */}
      <UiUxPortfolio />

      {/* 9. Testimonials */}
      <UiUxTestimonials />

      {/* 10. FAQ Section */}
      <UiUxFAQ faqs={faqs} />

      {/* 11. CTA & Internal Linking Loop */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden text-center border-t border-slate-900">
        <div className="absolute right-0 top-0 w-80 h-80 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Sparkles className="w-10 h-10 text-orange-500 mx-auto mb-6 animate-pulse" />
          
          <h2
            className="text-3xl sm:text-4xl font-black text-white uppercase tracking-widest mb-4"
            style={{
              textShadow: "2px 2px 0px rgba(0,0,0,0.1)"
            }}
          >
            Looking for intuitive and modern UI/UX design solutions?
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
            Contact us for responsive, user-focused, and conversion-driven design services. We optimize usability, user-centered design, visual hierarchy, and interaction design to shape responsive interfaces and premium digital experiences. Let us refine your prototype design, design systems, and conversion optimization to align branding precisely with accessibility guidelines.
          </p>

          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-white text-slate-950 hover:bg-slate-100 px-8 py-4 rounded-full font-bold text-xs tracking-wide transition-all shadow-lg hover:-translate-y-0.5"
          >
            Schedule Consultation
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          {/* Internal Linking Hub */}
          <div className="border-t border-slate-900 pt-10 mt-10">
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black mb-4">Explore Our Web Services</p>
            <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400 font-semibold">
              <Link href="/custom-website-development" className="hover:text-orange-500 transition-colors">Custom Website Development</Link>
              <span className="text-slate-800">•</span>
              <Link href="/corporate-website-development" className="hover:text-orange-500 transition-colors">Corporate Website Development</Link>
              <span className="text-slate-800">•</span>
              <Link href="/single-page-application-development" className="hover:text-orange-500 transition-colors">Single Page Application</Link>
              <span className="text-slate-800">•</span>
              <Link href="/landing-page-development" className="hover:text-orange-500 transition-colors">Landing Page Development</Link>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "UI/UX Design Services",
            "name": "UI/UX Design Services",
            "provider": {
              "@type": "Organization",
              "name": "DigitalDeveloper",
              "url": "https://digitaldeveloper.co"
            },
            "areaServed": "Worldwide",
            "description": "Professional UI/UX design services focused on user experience, responsive design, usability, and conversion-focused interfaces.",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />

      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })
        }}
      />
    </div>
  );
}
