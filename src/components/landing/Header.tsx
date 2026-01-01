'use client';

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 left-0 right-0 z-50 bg-primary"
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-foreground rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-sm">C</span>
            </div>
            <span className="text-primary-foreground font-bold text-xl">coca</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium">
              Blog
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium">
              About
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium">
              Community
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium">
              Help Center
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10">
              Login
            </Button>
            <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-6">
              Sign Up
            </Button>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
