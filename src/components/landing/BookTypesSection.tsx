'use client';

import { motion } from "framer-motion";
import { Home, Calendar, Plane, Gift, ArrowRight } from "lucide-react";
import Link from "next/link";

const bookTypes = [
  {
    title: "Family Expense Tracker App",
    description: "Track household finances together with your family. The best family expense tracker for managing shared budgets.",
    icon: Home,
    color: "bg-blue-100 text-blue-600",
    link: "/family-expense-tracker-app",
  },
  {
    title: "Bill Splitting App for Roommates",
    description: "Split rent, utilities, and shared subscriptions effortlessly. The ultimate roommate bill splitter.",
    icon: Calendar,
    color: "bg-green-100 text-green-600",
    link: "/bill-splitting-app-for-roommates",
  },
  {
    title: "Travel Expense Splitter",
    description: "The best app for sharing expenses with friends on trips. Track and split travel costs in real-time.",
    icon: Plane,
    color: "bg-orange-100 text-orange-600",
    link: "/travel-expense-split-app",
  },
  {
    title: "Fundraising Tracker App",
    description: "Collect money for gifts, events, and group purchases. A powerful fundraising goal tracker.",
    icon: Gift,
    color: "bg-purple-100 text-purple-600",
    link: "/fundraising-tracker-app",
  },
];

const BookTypesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Your Book Type
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Four specialized tools for every way you manage money with others. Each book type is designed for a specific use case.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bookTypes.map((book, index) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={book.link}
                className="block h-full bg-coca-gray-light p-6 rounded-2xl border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all group"
              >
                <div className={`w-14 h-14 ${book.color} rounded-xl flex items-center justify-center mb-4`}>
                  <book.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {book.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {book.description}
                </p>
                <span className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookTypesSection;
