"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

interface ContactData {
  title: string;
  address: string;
  phone: string;
  email: string;
  mapEmbedUrl: string;
}

export default function LocationContact({ data }: { data: ContactData }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left: Contact Info & Form */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <p className="text-orange-500 font-black text-xs uppercase tracking-widest">Connect</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
                {data.title}
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                Have a project idea or need additional details? Drop us a message or schedule a direct consultation with our engineering team in Noida.
              </p>
            </div>

            {/* Info details */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 text-orange-500">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Address</p>
                  <p className="text-slate-200 text-sm font-semibold mt-0.5">{data.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 text-orange-500">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Phone</p>
                  <p className="text-slate-200 text-sm font-semibold mt-0.5">{data.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 text-orange-500">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Email</p>
                  <p className="text-slate-200 text-sm font-semibold mt-0.5">{data.email}</p>
                </div>
              </div>
            </div>


          </div>

          {/* Right: Map Embed */}
          <div className="lg:col-span-6 h-[400px] lg:h-[550px] w-full rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-2xl relative">
            <iframe
              src={data.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
