import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

// Modular Section Components
import CustomHero from "@/components/sections/custom-website/CustomHero";
import CustomShowcase from "@/components/sections/custom-website/CustomShowcase";
import InteractiveCustomDemo from "@/components/sections/custom-website/InteractiveCustomDemo";
import CustomServices from "@/components/sections/custom-website/CustomServices";
import CustomTypes from "@/components/sections/custom-website/CustomTypes";
import CustomFeatures from "@/components/sections/custom-website/CustomFeatures";
import CustomProcessSteps from "@/components/sections/custom-website/CustomProcessSteps";
import CustomBenefits from "@/components/sections/custom-website/CustomBenefits";
import CustomPortfolio from "@/components/sections/custom-website/CustomPortfolio";
import CustomIndustries from "@/components/sections/custom-website/CustomIndustries";
import CustomTechnical from "@/components/sections/custom-website/CustomTechnical";
import CustomTestimonials from "@/components/sections/custom-website/CustomTestimonials";
import CustomFAQ from "@/components/sections/custom-website/CustomFAQ";

// Define FAQ data to keep schema and component aligned
const faqs = [
  {
    q: "What is custom website development?",
    a: "Custom website development involves building websites tailored specifically to a business’s goals, branding, and functionality requirements, rather than using generic templates."
  },
  {
    q: "Why choose a custom website over templates?",
    a: "Templates limit layouts and contain bloat. Custom websites are coded from scratch, resulting in superior performance, custom functionality, modern UI/UX design, and SEO advantages."
  },
  {
    q: "Are custom websites SEO-friendly?",
    a: "Yes, custom websites can be optimized for SEO, performance, responsiveness, and user experience. Clean code architectures and schema inputs make them highly indexing-friendly."
  },
  {
    q: "Can custom websites scale with business growth?",
    a: "Absolutely. Custom website solutions are designed for scalability, allowing you to easily add new database entries, portals, dynamic content feeds, and CRM synchronizations."
  },
  {
    q: "How long does custom website development take?",
    a: "Depending on the complexity and third-party integrations, custom development typically takes 4 to 8 weeks, including planning, custom UI design, coding, testing, and deployment."
  }
];

export const metadata: Metadata = {
  title: "Custom Website Development Services | Tailored Web Solutions",
  description: "Professional custom website development services designed for businesses requiring scalable, SEO-friendly, responsive, and tailored web solutions.",
  keywords: [
    "Custom Website Development Services",
    "custom web development",
    "tailored website solutions",
    "custom business websites",
    "responsive custom websites",
    "SEO-friendly custom websites",
    "professional website development",
    "bespoke web development",
    "scalable website solutions",
    "modern custom websites",
    "business website development"
  ],
  openGraph: {
    title: "Custom Website Development Services | Tailored Web Solutions",
    description: "Professional custom website development services designed for businesses requiring scalable, SEO-friendly, responsive, and tailored web solutions.",
    type: "website",
    url: "/custom-website-development"
  }
};

export default function CustomWebsiteDevelopmentPage() {
  return (
    <div className="relative bg-white min-h-screen">
      {/* 1. Hero Section */}
      <CustomHero />

      {/* 2. Overlapping Concept Showcase */}
      <CustomShowcase />

      {/* 3. Interactive Sandbox Simulator */}
      <InteractiveCustomDemo />

      {/* 4. Services Included */}
      <CustomServices />

      {/* 5. Types of Custom Websites We Build */}
      <CustomTypes />

      {/* 6. Features of Our Custom Website Solutions */}
      <CustomFeatures />

      {/* 7. Our Custom Website Development Process */}
      <CustomProcessSteps />

      {/* 8. Why Choose Our Custom Website Development Services */}
      <CustomBenefits />

      {/* 9. Portfolio Showcase */}
      <CustomPortfolio />

      {/* 10. Industries Served */}
      <CustomIndustries />

      {/* 11. Technical SEO & Performance */}
      <CustomTechnical />

      {/* 12. Client Testimonials */}
      <CustomTestimonials />

      {/* 13. Frequently Asked Questions */}
      <CustomFAQ faqs={faqs} />

      {/* 14. CTA & Internal Linking Loop */}
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
            Looking for a website tailored specifically to your business needs?
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
            Contact us for custom website development solutions designed for growth and performance. We leverage modern technologies to deliver tailored solutions with custom functionality, responsive development, and performance optimization to ensure a conversion-focused design, robust API integrations, and scalable SEO architecture for ultimate business scalability.
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
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black mb-4">Explore More Services</p>
            <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400 font-semibold">
              <Link href="/corporate-website-development" className="hover:text-orange-500 transition-colors">Corporate Website Development</Link>
              <span className="text-slate-800">•</span>
              <Link href="/single-page-application-development" className="hover:text-orange-500 transition-colors">Single Page Application</Link>
              <span className="text-slate-800">•</span>
              <Link href="/static-website-development" className="hover:text-orange-500 transition-colors">Static Website Development</Link>
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
            "serviceType": "Custom Website Development",
            "name": "Custom Website Development Services",
            "provider": {
              "@type": "Organization",
              "name": "DigitalDeveloper",
              "url": "https://digitaldeveloper.co"
            },
            "areaServed": "Worldwide",
            "description": "Professional custom website development services designed for businesses requiring scalable, SEO-friendly, responsive, and tailored web solutions.",
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
