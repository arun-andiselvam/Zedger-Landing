'use client';

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [useCasesOpen, setUseCasesOpen] = useState(false);

  const useCases = [
    { href: "/family-book", label: "Family Book" },
    { href: "/monthly-recurring-book", label: "Monthly Recurring Book" },
    { href: "/friends-trip-book", label: "Friends Trip Book" },
    { href: "/fundraising-book", label: "Fundraising Book" },
  ];

  const navLinks = [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-primary"
    >
      <div className="container mx-auto px-6 py-3">
        <nav className="flex items-center justify-between md:justify-center relative h-10">
          {/* Logo */}
          <Link href="/" className="md:absolute md:left-0 flex items-center gap-2 h-full">
            <Image
              src="/images/logo.png"
              alt="Zedger Logo"
              width={44}
              height={44}
              className="rounded-full"
            />
            <span className="text-primary-foreground font-bold text-2xl">Zedger</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 h-full">
            {/* Use Cases Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium">
                Use Cases
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                {useCases.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-primary-foreground p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-primary border-t border-primary-foreground/10"
          >
            <div className="container mx-auto px-6 py-4">
              {/* Use Cases Accordion */}
              <div className="border-b border-primary-foreground/10 pb-2 mb-2">
                <button
                  onClick={() => setUseCasesOpen(!useCasesOpen)}
                  className="flex items-center justify-between w-full py-3 text-primary-foreground font-medium"
                >
                  Use Cases
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      useCasesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {useCasesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 space-y-1"
                    >
                      {useCases.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other Nav Links */}
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 text-primary-foreground font-medium hover:text-primary-foreground/80 transition-colors border-b border-primary-foreground/10 last:border-b-0"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
