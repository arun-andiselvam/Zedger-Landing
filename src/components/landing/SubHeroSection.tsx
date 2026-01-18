'use client';

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SubHeroSectionProps {
  title: string;
  subtitle?: ReactNode;
}

const SubHeroSection = ({ title, subtitle }: SubHeroSectionProps) => {
  return (
    <section className="relative bg-primary w-full pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default SubHeroSection;
