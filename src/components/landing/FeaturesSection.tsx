'use client';

import { motion } from "framer-motion";
import { Home, Plane, Calendar, Heart } from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Family Book",
    description: "A shared ledger for your family. Track household expenses together and keep everyone informed in real-time."
  },
  {
    icon: Plane,
    title: "Trip Book",
    description: "Plan trips with friends without the hassle. Record expenses, split costs fairly, and settle up easily after the adventure."
  },
  {
    icon: Calendar,
    title: "Recurring Expenses Book",
    description: "Share recurring expenses with roommates or friends. Track rent, utilities, and subscriptions with automatic monthly splitting."
  },
  {
    icon: Heart,
    title: "Fundraising Book",
    description: "Collect money for events, gifts, or causes. Track contributions and keep everyone informed transparently."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-coca-gray-light">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-xl mb-4">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
