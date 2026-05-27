import React from "react";
import { Metadata } from "next";
import ClientsHero from "@/components/sections/clients/ClientsHero";
import ClientsGrid from "@/components/sections/clients/ClientsGrid";

export const metadata: Metadata = {
  title: "Our Clients & Partners | DigitalDeveloper",
  description: "Explore the industry-leading companies and enterprises we have built products for.",
  keywords: ["DigitalDeveloper clients", "client partnerships", "brand collaborations"],
  alternates: { canonical: "/our-clients" },
  openGraph: {
    title: "Our Clients & Partners | DigitalDeveloper",
    description: "Explore the industry-leading companies and enterprises we have built products for.",
    type: "website",
    url: "/our-clients"
  }
};

export default function OurClientsPage() {
  return (
    <main className="flex-grow bg-white min-h-screen">
      <ClientsHero />
      <ClientsGrid />
    </main>
  );
}
