"use client";

import React from "react";
import { Quote } from "lucide-react";
import { CLIENT_PARTNERS } from "@/lib/client-data";

export default function ClientsTestimonials() {
  return (
    <section className="py-24 bg-slate-900 border-y border-slate-800 text-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-96 h-96 bg-orange-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-extrabold text-xs uppercase tracking-widest block mb-3">Feedback</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase">
            WHAT OUR PARTNERS SAY
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CLIENT_PARTNERS.slice(0, 4).map((client) => (
            <div
              key={client.id}
              className="bg-slate-950/80 backdrop-blur-sm border border-slate-800 p-8 rounded-3xl relative flex flex-col justify-between"
            >
              <div className="absolute -top-4 right-8 bg-slate-900 border border-slate-800 p-2.5 rounded-2xl text-orange-500">
                <Quote className="w-5 h-5" />
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed italic mb-8 pt-2">
                "{client.testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={client.testimonial.avatar}
                  alt={client.testimonial.author}
                  className="w-12 h-12 rounded-full object-cover border border-slate-800"
                />
                <div>
                  <h4 className="font-bold text-sm text-white">{client.testimonial.author}</h4>
                  <p className="text-xs text-slate-400 font-medium">
                    {client.testimonial.role}, <span className="text-orange-500 font-bold">{client.name}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
