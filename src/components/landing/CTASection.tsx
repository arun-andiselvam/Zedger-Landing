'use client';

import { motion } from "framer-motion";
import {
  Users,
  Share2,
  Bell,
  Calculator,
  Shield,
  Smartphone,
  RefreshCw,
  PieChart
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Multi-Currency",
    description: "Support for multiple currencies. Perfect for international trips and global teams.",
    color: "bg-pink-100 text-pink-600"
  },
  {
    icon: Share2,
    title: "Instant Sharing",
    description: "Share books with a simple link. No app download required for viewing.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Get notified when bills are due or when someone adds a new expense.",
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    icon: Calculator,
    title: "Advanced Splits",
    description: "Split by percentage, shares, or exact amounts. Flexible splitting for any situation.",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: PieChart,
    title: "Expense Insights",
    description: "Visualize spending patterns with beautiful charts and reports.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: RefreshCw,
    title: "Smart Alerts",
    description: "Get notified about pending payments, settlements, and book activities.",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: Smartphone,
    title: "Create Groups",
    description: "Organize members into groups for easier expense management and splitting.",
    color: "bg-cyan-100 text-cyan-600"
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your financial data is encrypted and never shared with third parties.",
    color: "bg-emerald-100 text-emerald-600"
  }
];

const CTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything you need to manage<br />shared expenses
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Powerful features that make Zedger the best app for shared expenses — effortless for families, friends, and teams.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-12"
        >
          Zedger is the best app for sharing expenses — comprehensive solutions for everyone.
        </motion.p>
      </div>
    </section>
  );
};

export default CTASection;
