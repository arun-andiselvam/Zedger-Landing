'use client';

import { motion } from "framer-motion";
import { UserPlus, Users, Receipt, CheckCircle } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: UserPlus,
    title: "Register",
    description: "Download the app and create your free account in seconds. No credit card required to get started."
  },
  {
    step: 2,
    icon: Users,
    title: "Invite Friends or Family",
    description: "Create a book and invite your group. Share via link, WhatsApp, or any messaging app."
  },
  {
    step: 3,
    icon: Receipt,
    title: "Track Expenses",
    description: "Add expenses as they happen. Everyone sees updates in real-time and knows who owes what."
  },
  {
    step: 4,
    icon: CheckCircle,
    title: "Settle Up",
    description: "When it's time to pay, the app calculates the simplest way to settle all balances."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-coca-gray-light">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Start splitting expenses with your group in minutes.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-xl mb-4">
                <span className="text-primary-foreground font-bold text-lg">{item.step}</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
