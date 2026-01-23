'use client';

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    id: "best-app-sharing",
    question: "What is the best app for sharing expenses?",
    answer: "Zedger is widely considered the best app for sharing expenses because it goes beyond simple expense splitting. With shareable ledger books, you can create dedicated books for different purposes — family, trips, roommates, or fundraising — and invite others to collaborate in real-time. Everyone stays informed, and settling up is effortless."
  },
  {
    id: "group-expense-tracker",
    question: "How does Zedger work as a group expense tracker?",
    answer: "As a group expense tracker, Zedger lets you create shared books where all members can add expenses, view balances, and track who owes what. The app automatically calculates splits, supports multiple currencies, and sends smart reminders for pending payments. It's the easiest way to keep group finances organized."
  },
  {
    id: "track-with-friends",
    question: "Can I use Zedger to track expenses with friends?",
    answer: "Zedger is the perfect app to track expenses with friends. Whether you're splitting dinner, planning a trip, or sharing a subscription, simply create a book, invite your friends, and start adding expenses. Everyone can see the running total and their individual balances in real-time."
  },
  {
    id: "best-tracker-app",
    question: "What makes Zedger the best group expense tracker app?",
    answer: "Zedger stands out as the best group expense tracker app because of its unique book-based approach. Unlike other apps that only split bills, Zedger provides dedicated book types for different scenarios — Trip Books, Family Books, Recurring Expense Books, and more. Each book type has features tailored to its specific use case, with granular permission controls for every member."
  },
  {
    id: "shared-expenses",
    question: "Is Zedger free to use for shared expenses?",
    answer: "Yes! Zedger is free to download and use for managing shared expenses. You can create unlimited books, invite unlimited members, and track all your group expenses without any cost. Premium features are available for power users who need advanced functionality like detailed analytics and export options."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about using Zedger as your group expense app.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="bg-coca-gray-light rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
