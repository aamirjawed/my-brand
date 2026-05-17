import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";
import ServicesSection from "@/components/sections/Services";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <Hero />
      <AboutSection />
      <ServicesSection />
    </div>
  );
}