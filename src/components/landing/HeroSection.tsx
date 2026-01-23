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
            <h1 className="text-3xl md:text-4xl lg:text-[3.25rem] font-bold text-primary-foreground lg:leading-[50px] mb-4">
              The Best Group Expense App — split bills with<br />
              <span className="italic font-normal">friends, family & roommates.</span>
            </h1>

            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl">
              Looking for the best app for sharing expenses? Zedger is the ultimate group expense tracker to track expenses with friends, family, and roommates.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="https://play.google.com/store/apps/details?id=com.hitasoft.zedger" target="_blank" rel="noopener noreferrer" className="inline-block">
                <div className="bg-foreground text-background rounded-lg px-5 py-2 flex items-center gap-3 hover:opacity-90 transition-opacity min-w-[160px]">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div>
                    <p className="text-[10px] opacity-80">GET IT ON</p>
                    <p className="font-semibold text-sm -mt-0.5">Google Play</p>
                  </div>
                </div>
              </a>
              <a href="https://apps.apple.com/us/app/zedger/id6757311375" target="_blank" rel="noopener noreferrer" className="inline-block">
                <div className="bg-foreground text-background rounded-lg px-5 py-2 flex items-center gap-3 hover:opacity-90 transition-opacity min-w-[160px]">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                  </svg>
                  <div>
                    <p className="text-[10px] opacity-80">Download on the</p>
                    <p className="font-semibold text-sm -mt-0.5">App Store</p>
                  </div>
                </div>
              </a>
            </div>
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
          <p className="text-center text-primary-foreground/60 text-sm">Trusted by 100+ users to split expenses with friends, family & roommates</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
