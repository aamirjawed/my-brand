"use client";

import React from "react";
import { CLIENT_PARTNERS } from "@/lib/client-data";

function LogoTile({ name, logoSrc }: { name: string; logoSrc: string }) {
  return (
    <div className="relative group flex items-center justify-center h-24 cursor-default">
      <img
        src={logoSrc}
        alt={`${name} logo`}
        className="max-h-12 w-auto max-w-[130px] object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
      />

      {/* Tooltip */}
      <div className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200 z-30">
        <div className="bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl">
          {name}
        </div>
        <div className="w-2 h-2 bg-slate-900 rotate-45 mx-auto -mt-1" />
      </div>
    </div>
  );
}

export default function ClientsGrid() {
  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-[1100px]">

        <div className="text-center mb-20">
          <span className="text-orange-600 font-extrabold text-xs uppercase tracking-widest block mb-3">
            Our Network
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase">
            Trusted By Industry Leaders
          </h1>
          <div className="w-16 h-1 bg-orange-600 mx-auto mt-6" />
        </div>

        {/* Pure logo grid — no cards, equal height cells, local images */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-y-10 gap-x-6 items-center justify-items-center">
          {CLIENT_PARTNERS.map((client) => (
            <LogoTile
              key={client.id}
              name={client.name}
              logoSrc={client.logoSrc}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
