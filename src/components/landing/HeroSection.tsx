'use client';

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Users, FolderCheck, ArrowRight } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative bg-primary w-full min-h-screen md:min-h-[100svh] pt-24 pb-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl lg:max-w-3xl"
          >
            <h1 className="text-3xl md:text-4xl lg:text-[3.25rem] font-bold text-primary-foreground lg:leading-[50px] mb-8">
              Not just expense splitting — shareable ledger books<br />
              <span className="italic font-normal">for every part of your life.</span>
            </h1>
          </motion.div>

          {/* Right Content - Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative lg:ml-32 xl:ml-40 mt-8 lg:mt-12"
          >
            {/* Main Phone */}
            <div className="relative z-10 mx-auto lg:mx-0 max-w-[280px]">
              <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-2xl z-10"></div>
                {/* Phone screen */}
                <div className="relative rounded-[2rem] overflow-hidden">
                  <Image
                    src="/images/zedger-home.png"
                    alt="Zedger App"
                    width={280}
                    height={560}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
                {/* Home indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/30 rounded-full"></div>
              </div>
            </div>

            {/* Money Collection Card - Top Left */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="hidden md:block absolute top-8 -left-20 lg:-left-28 bg-card rounded-xl p-4 shadow-lg z-20"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-sm">💰</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">Office Lunch</p>
                  <p className="text-[10px] text-muted-foreground">Collection Book</p>
                </div>
              </div>
              <p className="text-lg font-bold text-foreground mb-1">$25.00</p>
              <p className="text-[10px] text-muted-foreground mb-3">3 pending • Due today</p>
              <Button size="sm" className="w-full bg-primary text-primary-foreground rounded-full text-xs">
                Remind
              </Button>
            </motion.div>

            {/* Recurring Expense Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="hidden md:block absolute top-24 left-48 bg-card rounded-xl p-4 shadow-lg z-20"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-sm">🏠</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">Room Rent</p>
                  <p className="text-[10px] text-muted-foreground">Monthly recurring</p>
                </div>
              </div>
              <p className="text-lg font-bold text-foreground mb-2">$850.00</p>
              <p className="text-[10px] text-muted-foreground mb-3">Due in 3 days</p>
              <Button size="sm" className="w-full bg-primary text-primary-foreground rounded-full text-xs">
                Mark as Paid
              </Button>
            </motion.div>

            {/* Expense Notification Card - Right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="hidden md:block absolute bottom-48 left-48 bg-card rounded-xl p-3 shadow-lg z-20"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 flex items-center justify-center">
                  <span className="text-xs text-white">🏠</span>
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground">Home Book</p>
                  <p className="text-[10px] text-muted-foreground">Your wife recorded $100 spent</p>
                </div>
              </div>
            </motion.div>

            {/* Notification Cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="hidden md:block absolute bottom-40 -left-16 lg:-left-24 xl:-left-28 space-y-2 z-20"
            >
              <div className="bg-card rounded-xl p-3 shadow-lg flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-xs">✓</span>
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground">Sarah settled up</p>
                  <p className="text-[10px] text-muted-foreground">You received $45.00</p>
                </div>
              </div>
              <div className="bg-card rounded-xl p-3 shadow-lg flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-pink-400 flex items-center justify-center">
                  <span className="text-xs text-white">🏖️</span>
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground">Bali Trip Book</p>
                  <p className="text-[10px] text-muted-foreground">4 members • $1,250 total</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Trusted By */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 sm:mt-12"
        >
          <p className="text-center text-primary-foreground/60 text-sm">Trusted by 50+ Companies</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
