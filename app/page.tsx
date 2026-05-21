import dynamic from "next/dynamic";

import Hero from "@/components/sections/Hero";
const AboutSection = dynamic(() => import("@/components/sections/About"));
const ServicesSection = dynamic(() => import("@/components/sections/Services"));
const WebDevelopmentSection = dynamic(() => import("@/components/sections/WebDevelopment"));
const SeoSection = dynamic(() => import("@/components/sections/SeoSection"));
const GraphicDesignSection = dynamic(() => import("@/components/sections/GraphicDesignSection"));
const ContentCreationSection = dynamic(() => import("@/components/sections/ContentCreationSection"));
const EventManagementSection = dynamic(() => import("@/components/sections/EventManagementSection"));
const TrustSection = dynamic(() => import("@/components/sections/TrustSection"));
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"));
const ContactBanner = dynamic(() => import("@/components/sections/ContactBanner"));

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WebDevelopmentSection />
      <SeoSection />
      <GraphicDesignSection />
      <ContentCreationSection />
      <EventManagementSection />
      <TrustSection />
      <TestimonialsSection />
      <ContactBanner />
    </div>
  );
}