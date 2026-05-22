import React from "react";
import { Metadata } from "next";
import ContactForm from "./ContactForm";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | High-Performance Development & AI SEO Services",
  description: "Get in touch with our team for custom Single Page Applications, high-performance static websites, design branding, and AI SEO services.",
  keywords: [
    "Contact agency",
    "web development services contact",
    "hire static website developer",
    "SPA development agency",
    "AI SEO services quote",
    "branding and logo request"
  ],
  alternates: {
    canonical: "/contact-us"
  }
};

export default function ContactUsPage() {
  return (
    <div className="relative bg-slate-950 text-white min-h-screen pt-32 sm:pt-40 pb-24 overflow-hidden">
      {/* Dynamic Grid Background Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none z-0"></div>

      {/* Light glow effects */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="absolute -left-20 bottom-1/4 w-[400px] h-[400px] bg-orange-950/20 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">

        {/* Header Block */}
        <div className="text-center max-w-5xl mx-auto mb-16 sm:mb-20">

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-wide leading-[1.15] mt-4 mb-6">
            Let's build something <br />
            <span className="text-orange-500">exceptional</span> together.
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-medium max-w-2xl mx-auto">
            Have an idea or a project that needs technical excellence and dynamic user interfaces? Get in touch and let's configure your next success.
          </p>
        </div>

        {/* Form and info components grid */}
        <ContactForm />

      </div>

      {/* Structured JSON-LD Contact Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Us - DigitalDeveloper",
            "description": "Contact DigitalDeveloper for top-tier custom web application development, SEO, and branding.",
            "url": `${SITE_URL}/contact-us`,
            "mainEntity": {
              "@type": "Organization",
              "name": "DigitalDeveloper",
              "url": SITE_URL,
              "logo": `${SITE_URL}/logo.png`,
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-800-555-0199",
                "contactType": "customer service",
                "areaServed": "Worldwide",
                "availableLanguage": "English"
              }
            }
          })
        }}
      />
    </div>
  );
}
