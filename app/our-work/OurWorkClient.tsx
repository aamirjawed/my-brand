"use client";

import React, { useState } from "react";
import OurWorkHero from "@/components/sections/our-work/OurWorkHero";
import OurWorkFilters from "@/components/sections/our-work/OurWorkFilters";
import OurWorkGrid from "@/components/sections/our-work/OurWorkGrid";
import OurWorkCTA from "@/components/sections/our-work/OurWorkCTA";

export default function OurWorkClient() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <>
      {/* Hero Header Section */}
      <OurWorkHero />

      {/* Category Selection Filter Tabs */}
      <OurWorkFilters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      {/* Portfolio Items Grid */}
      <OurWorkGrid activeFilter={activeFilter} />

      {/* Bottom CTA Conversion Banner */}
      <OurWorkCTA />
    </>
  );
}
