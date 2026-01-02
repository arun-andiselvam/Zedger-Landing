'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const accordionItems = [
  {
    id: "book-types",
    title: "Each book has its type",
    content: "Family books, trip books, recurring expenses, fundraising — each book type is designed for a specific purpose with features tailored to that use case."
  },
  {
    id: "shareable",
    title: "Each book is shareable",
    content: "Invite family, friends, or roommates to join your books. Everyone can add expenses, view balances, and stay in sync effortlessly."
  },
  {
    id: "controllable",
    title: "Every member is controllable",
    content: "Set permissions for each member. Control who can add expenses, edit entries, or just view the book. You're always in charge."
  },
  {
    id: "first-ledger",
    title: "First ever shareable ledger",
    content: "Zedger is the first app to offer true shareable ledger books. Not just expense splitting — a complete shared financial record for every part of your life."
  }
];

const AccordionSection = () => {
  return (
    <section className="py-20 bg-coca-gray-light">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              One book format won&apos;t fit<br />for all expenses, you need a <span className="italic font-normal">superapp.</span>
            </h2>

            <Accordion type="single" collapsible defaultValue="book-types" className="space-y-2">
              {accordionItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b border-border"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Right Content - Three Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[500px] flex items-center justify-center"
          >
            {/* Left Phone - Trip Book */}
            <motion.div
              initial={{ opacity: 0, x: -20, rotate: -15 }}
              whileInView={{ opacity: 1, x: 0, rotate: -15 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute left-0 lg:left-8 z-10"
            >
              <div className="bg-gray-900 rounded-[2rem] p-1.5 shadow-2xl w-[180px]">
                <div className="rounded-[1.5rem] overflow-hidden">
                  <Image
                    src="/images/trip-book.png"
                    alt="Trip Book"
                    width={180}
                    height={360}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Center Phone - Home */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative z-20"
            >
              <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl w-[220px]">
                <div className="rounded-[2rem] overflow-hidden">
                  <Image
                    src="/images/collection-book.png"
                    alt="Collection Book"
                    width={220}
                    height={440}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Phone - Recurring Book */}
            <motion.div
              initial={{ opacity: 0, x: 20, rotate: 15 }}
              whileInView={{ opacity: 1, x: 0, rotate: 15 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute right-0 lg:right-8 z-10"
            >
              <div className="bg-gray-900 rounded-[2rem] p-1.5 shadow-2xl w-[180px]">
                <div className="rounded-[1.5rem] overflow-hidden">
                  <Image
                    src="/images/recurring-book.png"
                    alt="Recurring Expenses Book"
                    width={180}
                    height={360}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AccordionSection;
