"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

interface TestimonialItem {
  author: string;
  role: string;
  text: string;
  rating: number;
}

interface TestimonialsData {
  title: string;
  items: TestimonialItem[];
}

export default function LocationTestimonials({ data }: { data: TestimonialsData }) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Title */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <p className="text-orange-600 font-black text-xs uppercase tracking-widest mb-3">Feedback</p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight"
          >
            {data.title}
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {data.items.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-8 sm:p-10 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col justify-between shadow-sm relative group"
            >
              {/* Quote bubble style overlay */}
              <Quote className="absolute top-6 right-8 w-12 h-12 text-slate-100 pointer-events-none transition-transform duration-300 group-hover:scale-105" />

              <div className="space-y-6 relative z-10">
                {/* Rating stars */}
                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 text-orange-500"
                      fill="currentColor"
                    />
                  ))}
                </div>

                <p className="text-slate-900 text-base italic leading-relaxed">
                  "{review.text}"
                </p>
              </div>

              {/* Author profile */}
              <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center gap-4 relative z-10">
                {/* Initial Avatar */}
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-sm">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{review.author}</h4>
                  <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
