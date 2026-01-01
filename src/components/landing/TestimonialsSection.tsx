'use client';

import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote: "Zedger finally solved our family expense tracking. No more spreadsheets or awkward money conversations.",
    author: "Jenny Wilson",
    role: "VP of Product",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
  },
  {
    quote: "Zedger made our trip expenses so easy to manage. Everyone knew exactly what they owed at the end.",
    author: "Savannah Nguyen",
    role: "VP of Product",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
  },
  {
    quote: "Zedger is the only app that lets me share recurring expenses with roommates effortlessly.",
    author: "Esther Howard",
    role: "VP of Product",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Large Background Text - positioned at top */}
      <div className="absolute -top-[20px] left-0 right-0 flex justify-center pointer-events-none select-none">
        <span className="text-[4rem] md:text-[7rem] lg:text-[10rem] font-bold text-slate-200 whitespace-nowrap italic">
          Testimonials
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10 mt-[30px]">
        <div className="flex items-center gap-8">
          {/* Navigation Arrows */}
          <div className="hidden md:flex flex-col gap-4">
            <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
            <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
          </div>

          {/* Testimonials Cards */}
          <div className="flex-1 grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-border/30"
              >
                <p className="text-foreground text-sm leading-relaxed mb-6">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
