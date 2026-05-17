import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";
import ServicesSection from "@/components/sections/Services";
import WebDevelopmentSection from "@/components/sections/WebDevelopment";
import SeoSection from "@/components/sections/SeoSection";
import GraphicDesignSection from "@/components/sections/GraphicDesignSection";
import ContentCreationSection from "@/components/sections/ContentCreationSection";
import EventManagementSection from "@/components/sections/EventManagementSection";
import TrustSection from "@/components/sections/TrustSection";

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
    </div>
  );
}