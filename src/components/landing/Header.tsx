'use client';

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-primary"
    >
      <div className="container mx-auto px-6 py-5">
        <nav className="flex items-center justify-center relative h-12">
          {/* Logo */}
          <Link href="/" className="absolute left-0 flex items-center gap-2 h-full">
            <Image
              src="/images/logo.png"
              alt="Zedger Logo"
              width={44}
              height={44}
              className="rounded-full"
            />
            <span className="text-primary-foreground font-bold text-2xl">Zedger</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8 h-full">
            {/* Use Cases Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium">
                Use Cases
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                <a href="/family-book" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                  Family Book
                </a>
                <a href="/monthly-recurring-book" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                  Monthly Recurring Book
                </a>
                <a href="/friends-trip-book" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                  Friends Trip Book
                </a>
                <a href="/fundraising-book" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                  Fundraising Book
                </a>
              </div>
            </div>
            <a href="/features" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium">
              Features
            </a>
            <a href="/pricing" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium">
              Pricing
            </a>
            <a href="/blog" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium">
              Blog
            </a>
            <a href="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium">
              Contact Us
            </a>
          </div>

          {/* Auth Buttons - Hidden for now */}
          {/* <div className="flex items-center gap-3">
            <Button variant="ghost" className="text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10">
              Login
            </Button>
            <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-6">
              Sign Up
            </Button>
          </div> */}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
