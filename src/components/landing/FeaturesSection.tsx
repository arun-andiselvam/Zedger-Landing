'use client';

import { motion } from "framer-motion";
import { Users, Shield, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Team Accounts",
    description: "When you want to connect with clients. You will get all the features from the best management app."
  },
  {
    icon: Shield,
    title: "Top Notch Secured",
    description: "We ensure that high quality and low-risk guarantees for your security. We will keep you everything you have."
  },
  {
    icon: MessageCircle,
    title: "Engage Customers",
    description: "To earn more attractive customers on your business where you don't have to browse more."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-coca-gray-light">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
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
