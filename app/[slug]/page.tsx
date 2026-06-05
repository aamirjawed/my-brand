import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE_URL } from "@/lib/constants";

import locationData from "@/lib/location-pages.json";

// Modular Section Components
import LocationHero from "@/components/sections/location/LocationHero";
import LocationWhyChooseUs from "@/components/sections/location/LocationWhyChooseUs";
import LocationServices from "@/components/sections/location/LocationServices";
import LocationIndustries from "@/components/sections/location/LocationIndustries";
import LocationProcess from "@/components/sections/location/LocationProcess";
import LocationPortfolio from "@/components/sections/location/LocationPortfolio";
import LocationTestimonials from "@/components/sections/location/LocationTestimonials";
import LocationFAQ from "@/components/sections/location/LocationFAQ";
import LocationContact from "@/components/sections/location/LocationContact";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const getLocationData = () => {
  return (locationData as any).default || locationData;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const data = getLocationData();
  console.log("[generateMetadata] Resolved Params:", resolvedParams);
  console.log("[generateMetadata] JSON keys:", Object.keys(data));
  const pageData = data[resolvedParams.slug];

  if (!pageData) {
    console.log("[generateMetadata] Page data not found for slug:", resolvedParams.slug);
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: pageData.meta.title,
    description: pageData.meta.description,
    keywords: pageData.meta.keywords,
    alternates: {
      canonical: `/${resolvedParams.slug}`,
    },
    openGraph: {
      title: pageData.meta.title,
      description: pageData.meta.description,
      type: "website",
      url: `/${resolvedParams.slug}`,
    },
  };
}

export async function generateStaticParams() {
  const data = getLocationData();
  return Object.keys(data).map((slug) => ({
    slug: slug,
  }));
}

export default async function LocationPage({ params }: PageProps) {
  const resolvedParams = await params;
  const data = getLocationData();
  console.log("[LocationPage] Rendering with slug:", resolvedParams.slug);
  const pageData = data[resolvedParams.slug];

  if (!pageData) {
    console.log("[LocationPage] NOT FOUND triggered for slug:", resolvedParams.slug);
    notFound();
  }

  return (
    <div className="relative bg-white min-h-screen">
      {/* 1. Hero Section */}
      <LocationHero data={pageData.hero} />

      {/* 2. Why Choose Us (GEO-Optimized) */}
      <LocationWhyChooseUs data={pageData.whyChooseUs} />

      {/* 3. Services Section */}
      <LocationServices data={pageData.services} />

      {/* 4. Industries Served */}
      <LocationIndustries data={pageData.industries} />

      {/* 5. Development Process */}
      <LocationProcess data={pageData.process} />

      {/* 6. Portfolio Showcase */}
      <LocationPortfolio data={pageData.portfolio} />

      {/* 7. Client Testimonials */}
      <LocationTestimonials data={pageData.testimonials} />

      {/* 8. Frequently Asked Questions */}
      <LocationFAQ data={pageData.faqs} />

      {/* 9. Contact Info & Form */}
      <LocationContact data={pageData.contact} />

      {/* 10. SEO Internal & External Linking Hub */}
      <section className="py-16 bg-slate-900 border-t border-slate-850 text-slate-400">
        <div className="container mx-auto px-6 max-w-[1200px] text-center space-y-8">
          <div className="space-y-3">
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Useful Resources</p>
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-xs font-semibold">
              <Link href="/custom-website-development" className="hover:text-orange-500 transition-colors">Our Web Services</Link>
              <span className="text-slate-800 hidden sm:inline">•</span>
              <Link href="/our-work" className="hover:text-orange-500 transition-colors">Client Portfolio</Link>
              <span className="text-slate-800 hidden sm:inline">•</span>
              <Link href="/about-us" className="hover:text-orange-500 transition-colors">About Our Team</Link>
              <span className="text-slate-800 hidden sm:inline">•</span>
              <Link href="/contact-us" className="hover:text-orange-500 transition-colors">Get in Touch</Link>
              <span className="text-slate-800 hidden sm:inline">•</span>
              <Link href={`/blog/how-to-hire-software-developer-${resolvedParams.slug.split('-').pop()}`} className="hover:text-orange-500 transition-colors">How to Hire in Noida</Link>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-850/65">
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Connect Globally</p>
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-xs font-semibold">
              <a href="https://www.linkedin.com/company/digitaldeveloper" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors inline-flex items-center gap-1">
                LinkedIn Profile <ArrowUpRight className="w-3 h-3" />
              </a>
              <span className="text-slate-800">•</span>
              <a href="https://www.clutch.co/profile/digitaldeveloper" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors inline-flex items-center gap-1">
                Clutch Reviews <ArrowUpRight className="w-3 h-3" />
              </a>
              <span className="text-slate-800">•</span>
              <a href="https://twitter.com/digitaldeveloper" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors inline-flex items-center gap-1">
                Google Reviews <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageData.localBusinessSchema)
        }}
      />

      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": pageData.faqs.items.map((faq: any) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </div>
  );
}
