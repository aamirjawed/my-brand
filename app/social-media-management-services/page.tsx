import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

import dynamic from "next/dynamic";

// Modular Social Components
import SocialHero from "@/components/sections/social-media/SocialHero";
const SocialShowcase = dynamic(() => import("@/components/sections/social-media/SocialShowcase"));
const SocialWhyMatters = dynamic(() => import("@/components/sections/social-media/SocialWhyMatters"));
const SocialServices = dynamic(() => import("@/components/sections/social-media/SocialServices"));
const SocialPlatforms = dynamic(() => import("@/components/sections/social-media/SocialPlatforms"));
const SocialContentStrategy = dynamic(() => import("@/components/sections/social-media/SocialContentStrategy"));
const SocialBenefits = dynamic(() => import("@/components/sections/social-media/SocialBenefits"));
const SocialProcess = dynamic(() => import("@/components/sections/social-media/SocialProcess"));
const SocialWhyChooseUs = dynamic(() => import("@/components/sections/social-media/SocialWhyChooseUs"));
const SocialPortfolio = dynamic(() => import("@/components/sections/social-media/SocialPortfolio"));
const SocialTestimonials = dynamic(() => import("@/components/sections/social-media/SocialTestimonials"));
const SocialFAQ = dynamic(() => import("@/components/sections/social-media/SocialFAQ"));

const faqs = [
  {
    q: "What do social media management services include?",
    a: "Social media management services include audience research, content creation, template styling, post scheduling, user engagement monitoring, and detailed bi-weekly analytics reporting."
  },
  {
    q: "Which platforms do you manage?",
    a: "We manage all major platforms including Instagram, Facebook, LinkedIn, Twitter/X, Pinterest, YouTube, and TikTok with platform-specific content optimization models."
  },
  {
    q: "Can social media help grow my business?",
    a: "Yes, active social media profiles build company authority, expand organic visibility, engage target demographics directly, and direct inbound traffic to your landing page funnels."
  },
  {
    q: "Do you create content for social media?",
    a: "Yes, we handle the entire content production workflow including custom visual graphics design, Reels/video clip editing, headline writing, and hashtag compiling."
  },
  {
    q: "How often should businesses post on social media?",
    a: "Post frequency depends on the platform and industry. Generally, we recommend 3-5 high-quality updates per week on LinkedIn/Instagram and daily thread updates on X to sustain maximum reach."
  }
];

export const metadata: Metadata = {
  title: "Social Media Management Services | Grow Your Brand Online",
  description: "Professional social media management services focused on content creation, audience engagement, brand visibility, and business growth across digital platforms.",
  keywords: [
    "Social Media Management Services",
    "social media marketing",
    "social media management company",
    "Instagram marketing services",
    "content creation services",
    "brand growth services",
    "social media strategy",
    "business social media management",
    "Facebook marketing",
    "social media content planning",
    "audience engagement services"
  ],
  openGraph: {
    title: "Social Media Management Services | Grow Your Brand Online",
    description: "Professional social media management services focused on content creation, audience engagement, brand visibility, and business growth across digital platforms.",
    type: "website",
    url: "/social-media-management-services"
  }
};

export default function SocialMediaManagementPage() {
  return (
    <div className="relative bg-white min-h-screen">
      {/* 1. Hero Section */}
      <SocialHero />

      {/* 2. Showcase Doodle Section */}
      <SocialShowcase />

      {/* 3. Why Social Media Matters */}
      <SocialWhyMatters />

      {/* 4. Services Included */}
      <SocialServices />

      {/* 5. Platforms We Manage */}
      <SocialPlatforms />

      {/* 6. Content Strategy */}
      <SocialContentStrategy />

      {/* 7. Benefits Section */}
      <SocialBenefits />

      {/* 8. Our Process */}
      <SocialProcess />

      {/* 9. Why Choose Us */}
      <SocialWhyChooseUs />

      {/* 10. Portfolio Showcase */}
      <SocialPortfolio />

      {/* 11. Testimonials */}
      <SocialTestimonials />

      {/* 12. FAQ Section */}
      <SocialFAQ faqs={faqs} />

      {/* 13. CTA & Internal Linking Loop */}
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
            Looking to grow your brand online?
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
            Contact us for strategic social media management and content marketing solutions. We focus heavily on brand visibility, audience engagement, content strategy, online presence, and social branding. Let us drive your community engagement, digital marketing campaigns, and content consistency to scale your social growth today.
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
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black mb-4">Explore Our Brand Services</p>
            <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400 font-semibold">
              <Link href="/ui-ux-design-services" className="hover:text-orange-500 transition-colors">UI/UX Design Services</Link>
              <span className="text-slate-800">•</span>
              <Link href="/custom-website-development" className="hover:text-orange-500 transition-colors">Custom Website Development</Link>
              <span className="text-slate-800">•</span>
              <Link href="/corporate-website-development" className="hover:text-orange-500 transition-colors">Corporate Website Development</Link>
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
            "serviceType": "Social Media Management Services",
            "name": "Social Media Management Services",
            "provider": {
              "@type": "Organization",
              "name": "DigitalDeveloper",
              "url": "https://digitaldeveloper.co"
            },
            "areaServed": "Worldwide",
            "description": "Professional social media management services focused on content creation, audience engagement, branding, and business growth."
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
