"use client";

import { motion } from "framer-motion";
import {
  Users,
  Calculator,
  Receipt,
  Wallet,
  Target,
  Clock,
  ChevronRight,
  Home,
  Plane,
  Gift,
  Calendar,
  CreditCard,
  ArrowLeftRight,
  Tag,
  CalendarDays,
  Paperclip,
  FileText,
  Equal,
  Percent,
  SplitSquareHorizontal,
  HelpCircle,
  UserMinus,
  Sparkles,
  UserPlus,
  RefreshCw,
  Shield,
  Bell,
  Share2,
  BarChart3,
  PieChart,
  TrendingUp,
  Eye,
  Download,
  History,
  Lock,
  Smartphone,
  Trash2,
  Wifi,
  Globe,
  Zap,
  Search,
  Moon,
  Languages,
  CheckCircle,
  XCircle,
  MessageSquare,
  Mail,
  Play,
} from "lucide-react";
import Link from "next/link";


export default function FeaturesContent() {
  const quickNavItems = [
    { label: "Book Types", href: "#book-types" },
    { label: "Expense Tracking", href: "#expense-tracking" },
    { label: "Smart Splitting", href: "#smart-splitting" },
    { label: "Collaboration", href: "#collaboration" },
    { label: "Insights", href: "#insights" },
    { label: "Privacy", href: "#privacy" },
    { label: "Pro Features", href: "#pricing" },
  ];

  const bookTypes = [
    {
      title: "Family Book",
      purpose: "Track household finances together",
      icon: Home,
      color: "bg-blue-100 text-blue-600",
      link: "/family-book",
    },
    {
      title: "Monthly Recurring",
      purpose: "Split rent, bills & regular expenses",
      icon: Calendar,
      color: "bg-green-100 text-green-600",
      link: "/monthly-recurring-book",
    },
    {
      title: "Trip Book",
      purpose: "Manage travel expenses with friends",
      icon: Plane,
      color: "bg-orange-100 text-orange-600",
      link: "/friends-trip-book",
    },
    {
      title: "Money Collection",
      purpose: "Collect funds from groups",
      icon: Gift,
      color: "bg-purple-100 text-purple-600",
      link: "/fundraising-book",
    },
  ];

  const bookTypeDetails = [
    {
      title: "Family Book",
      forText: "Families managing household finances together",
      capabilities: [
        "Track income, expenses, and transfers",
        "Separate Cash and Bank balances",
        "Multi-member access with shared visibility",
        "See who contributed what",
        "Complete transaction history",
      ],
      bestFor: ["Joint families", "Couples", "Parents & adult children", "Household budgeting"],
      icon: Home,
      color: "bg-blue-100 text-blue-600",
      link: "/family-book",
    },
    {
      title: "Monthly Recurring Book",
      forText: "People splitting regular shared expenses",
      capabilities: [
        "Monthly cycle-based tracking",
        "Auto-calculation of who owes whom",
        "Equal, percentage, or custom splits",
        "Settlement tracking at month end",
        "View past months anytime",
      ],
      bestFor: ["Roommates", "Flatmates", "Couples sharing rent", "Shared households"],
      icon: Calendar,
      color: "bg-green-100 text-green-600",
      link: "/monthly-recurring-book",
    },
    {
      title: "Trip Book",
      forText: "Groups traveling together",
      capabilities: [
        "Log expenses in real-time during trips",
        "Pre-split or unsplit options",
        "Exclude members from specific expenses",
        "Complete trip and settle up",
        "Minimized settlement transactions",
      ],
      bestFor: ["Friend trips", "Family vacations", "Office outings", "Destination events"],
      icon: Plane,
      color: "bg-orange-100 text-orange-600",
      link: "/friends-trip-book",
    },
    {
      title: "Money Collection Book",
      forText: "Collecting fixed amounts from groups",
      capabilities: [
        "Set target amounts",
        "Fixed or variable contributions",
        "Track who paid and who hasn't",
        "Send reminders to pending contributors",
        "Progress tracking with visual bar",
      ],
      bestFor: ["Birthday gifts", "Event funds", "Farewell collections", "Group purchases"],
      icon: Gift,
      color: "bg-purple-100 text-purple-600",
      link: "/fundraising-book",
    },
  ];

  const expenseTrackingFeatures = [
    {
      title: "Quick Expense Entry",
      description: "Add an expense in under 10 seconds. Amount, description, category — done. No friction.",
      icon: Zap,
    },
    {
      title: "Multiple Payment Methods",
      description: "Track Cash and Bank transactions separately. Always know what's in hand vs. what's in the account.",
      icon: CreditCard,
    },
    {
      title: "Income Tracking",
      description: "Not just expenses — log salaries, refunds, and incoming money. See the full picture.",
      icon: Wallet,
    },
    {
      title: "Transfers",
      description: "Record money moving between people or accounts. Dad gave Mom ₹5,000? Log it. Cash deposited to bank? Track it.",
      icon: ArrowLeftRight,
    },
    {
      title: "Categories & Tags",
      description: "Organize expenses by type — groceries, rent, utilities, entertainment. Filter and analyze later.",
      icon: Tag,
    },
    {
      title: "Date Flexibility",
      description: "Forgot to log yesterday's expense? Backdate it. The app adjusts everything automatically.",
      icon: CalendarDays,
    },
    {
      title: "Attachments",
      description: "Add photos of receipts or bills to any expense. Never lose proof of payment.",
      icon: Paperclip,
    },
    {
      title: "Notes & Descriptions",
      description: "Add context to any transaction. \"Birthday dinner for Amit\" is more useful than just \"Restaurant.\"",
      icon: FileText,
    },
  ];

  const smartSplittingFeatures = [
    {
      title: "Equal Split",
      description: "One tap. Everyone pays the same. Perfect for group meals, shared cabs, and common expenses.",
      icon: Equal,
    },
    {
      title: "Percentage Split",
      description: "60-40. 50-30-20. Any ratio you need. Ideal for income-based sharing or unequal usage.",
      icon: Percent,
    },
    {
      title: "Custom Amounts",
      description: "Exact rupee amounts per person. Full control over who pays what.",
      icon: SplitSquareHorizontal,
    },
    {
      title: "Unsplit (Decide Later)",
      description: "Not sure how to split right now? Log the expense, decide the split later when you have time.",
      icon: HelpCircle,
    },
    {
      title: "Member Exclusion",
      description: "Someone didn't participate? Exclude them from that expense. They won't be charged.",
      icon: UserMinus,
    },
    {
      title: "Partial Splits",
      description: "Only 3 of 5 people ordered dessert? Split that item only among them.",
      icon: Users,
    },
    {
      title: "Auto-Settlement Calculation",
      description: "At the end of your cycle or trip, the app calculates exactly who owes whom — minimizing transactions.",
      icon: Sparkles,
    },
  ];

  const collaborationFeatures = [
    {
      title: "Multi-Member Books",
      description: "Add family members, roommates, or friends to any book. Everyone sees the same data.",
      icon: Users,
    },
    {
      title: "Easy Invites",
      description: "Add members by phone number. They receive an instant notification to join.",
      icon: UserPlus,
    },
    {
      title: "Real-Time Sync",
      description: "When someone adds an expense, everyone sees it immediately. No refresh needed.",
      icon: RefreshCw,
    },
    {
      title: "Role-Based Access",
      description: "Book creators have admin rights. Members can view and add, but only admins can delete or modify settings.",
      icon: Shield,
    },
    {
      title: "Activity Feed",
      description: "See who added what and when. Complete transparency on all actions.",
      icon: Clock,
    },
    {
      title: "In-App Reminders",
      description: "Nudge people who haven't paid or contributed. One tap — no awkward messages.",
      icon: Bell,
    },
    {
      title: "Shareable Links",
      description: "Generate a link to share your collection or book via WhatsApp, SMS, or email.",
      icon: Share2,
    },
  ];

  const insightsFeatures = [
    {
      title: "Visual Dashboards",
      description: "See spending patterns at a glance — pie charts, bar graphs, and trend lines.",
      icon: BarChart3,
    },
    {
      title: "Category Breakdown",
      description: "Know exactly how much went to groceries vs. utilities vs. entertainment.",
      icon: PieChart,
    },
    {
      title: "Time-Based Views",
      description: "View by day, week, month, or custom date range. Spot patterns over time.",
      icon: TrendingUp,
    },
    {
      title: "Member Contribution View",
      description: "Who's contributing most? Who's spending most? See individual breakdowns.",
      icon: Users,
    },
    {
      title: "Balance Summary",
      description: "Always know your running balance — overall, Cash vs. Bank, or per member.",
      icon: Calculator,
    },
    {
      title: "Settlement History",
      description: "Track past settlements. Know when and how much was settled between members.",
      icon: History,
    },
    {
      title: "Export Reports",
      description: "Download data as PDF or Excel. Great for records, taxes, or sharing with others.",
      icon: Download,
    },
  ];

  const privacyFeatures = [
    {
      title: "No Bank Linking Required",
      description: "We never ask for your bank credentials, UPI access, or OTPs. Ever.",
      icon: CreditCard,
    },
    {
      title: "Manual Control",
      description: "You decide what to log. Nothing is auto-imported. Complete control over your data.",
      icon: Smartphone,
    },
    {
      title: "End-to-End Encryption",
      description: "All data is encrypted in transit and at rest. Industry-standard security.",
      icon: Lock,
    },
    {
      title: "Private by Default",
      description: "Your books are visible only to members you add. No public profiles, no social features.",
      icon: Eye,
    },
    {
      title: "No Data Selling",
      description: "We don't sell, share, or monetize your financial data. Period.",
      icon: Shield,
    },
    {
      title: "Local Storage Option",
      description: "Sensitive data can be stored locally on your device, not just on servers.",
      icon: Smartphone,
    },
    {
      title: "Delete Anytime",
      description: "Want to remove your data? Delete any book, transaction, or your entire account permanently.",
      icon: Trash2,
    },
  ];

  const convenienceFeatures = [
    {
      title: "Offline Mode",
      description: "No internet? No problem. Add expenses offline. They sync automatically when you're back online.",
      icon: Wifi,
    },
    {
      title: "Multi-Currency Support",
      description: "Traveling abroad? Log in local currency. Great for international trips.",
      icon: Globe,
    },
    {
      title: "Quick Actions",
      description: "Repeat common expenses with one tap. \"Daily milk\" doesn't need re-entry every day.",
      icon: Zap,
    },
    {
      title: "Search & Filter",
      description: "Find any transaction instantly. Search by amount, description, date, or member.",
      icon: Search,
    },
    {
      title: "Dark Mode",
      description: "Easy on the eyes. Perfect for late-night expense logging.",
      icon: Moon,
    },
    {
      title: "Notifications",
      description: "Get notified when members add expenses, when you're tagged, or when settlements are due.",
      icon: Bell,
    },
    {
      title: "Multiple Languages",
      description: "Available in English, Hindi, Tamil, and more regional languages.",
      icon: Languages,
    },
  ];

  const platformAvailability = [
    { platform: "Android", status: "Available on Play Store", available: true },
    { platform: "iOS", status: "Available on App Store", available: true },
    { platform: "Web App", status: "Coming Soon", available: false },
    { platform: "Desktop", status: "Coming Soon", available: false },
  ];

  const freeVsProFeatures = [
    { feature: "All 4 book types", free: true, pro: true },
    { feature: "Expense tracking", free: true, pro: true },
    { feature: "Smart splitting", free: true, pro: true },
    { feature: "Members per book", free: "Up to 5", pro: "Unlimited" },
    { feature: "Books per account", free: "Up to 3", pro: "Unlimited" },
    { feature: "Expense history", free: "6 months", pro: "Forever" },
    { feature: "Export reports", free: "Basic", pro: "Advanced" },
    { feature: "Multi-currency", free: false, pro: true },
    { feature: "Priority support", free: false, pro: true },
    { feature: "Ad-free experience", free: false, pro: true },
  ];

  const whatZedgerIsNot = [
    { isNot: "A bank or wallet", why: "We don't hold your money" },
    { isNot: "A payment app", why: "We don't process transactions" },
    { isNot: "A budgeting tool", why: "We track, we don't restrict" },
    { isNot: "A loan app", why: "We don't lend money" },
    { isNot: "An investment platform", why: "We don't manage portfolios" },
  ];

  return (
    <div className="bg-white">
      {/* Quick Navigation */}
      <section className="py-8 bg-coca-gray-light border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {quickNavItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="px-5 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:text-white hover:bg-primary border border-gray-200 transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Simple by Design. Powerful by Default.
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Most finance apps overwhelm you with features you&apos;ll never use. Zedger is different.
                We built four focused tools — each designed for a specific way people manage shared money.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {bookTypes.map((book, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={book.link}
                    className="block h-full bg-coca-gray-light p-6 rounded-xl border border-gray-200 hover:border-primary/30 hover:shadow-md transition-shadow transition-colors group"
                  >
                    <div className={`w-12 h-12 ${book.color} rounded-xl flex items-center justify-center mb-4`}>
                      <book.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-sm text-gray-600">{book.purpose}</p>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center text-lg font-medium text-gray-900"
            >
              One app. Four powerful modes. Zero confusion.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Book Types Detailed Section */}
      <section id="book-types" className="py-20 bg-coca-gray-light scroll-mt-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Book Types — Detailed Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Four specialized tools for every way you manage money with others.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-8">
            {bookTypeDetails.map((book, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 ${book.color} rounded-2xl flex items-center justify-center`}>
                        <book.icon className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">{book.title}</h3>
                          <p className="text-primary font-medium text-sm">For: {book.forText}</p>
                        </div>
                        <Link
                          href={book.link}
                          className="text-primary font-medium text-sm hover:underline flex items-center gap-1"
                        >
                          Learn more <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Key Capabilities:</h4>
                          <ul className="space-y-1">
                            {book.capabilities.map((cap, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                {cap}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Best For:</h4>
                          <div className="flex flex-wrap gap-2">
                            {book.bestFor.map((item, i) => (
                              <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
        </div>
      </section>

      {/* Expense Tracking Section */}
      <section id="expense-tracking" className="py-20 scroll-mt-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Track Every Penny, Your Way
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful expense tracking that adapts to how you manage money.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {expenseTrackingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-coca-gray-light p-6 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-shadow transition-colors"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Splitting Section */}
      <section id="smart-splitting" className="py-20 bg-coca-gray-light scroll-mt-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Split It Fair. Every Time.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible splitting options for every situation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {smartSplittingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary/20 hover:shadow-md transition-shadow transition-colors"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section id="collaboration" className="py-20 scroll-mt-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Shared Money. Shared Visibility.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Collaborate seamlessly with everyone involved.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {collaborationFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-coca-gray-light p-6 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-shadow transition-colors"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-20 bg-coca-gray-light scroll-mt-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Understand Where Your Money Goes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Beautiful reports and analytics to track your spending.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {insightsFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary/20 hover:shadow-md transition-shadow transition-colors"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" className="py-20 scroll-mt-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Money Data Stays Yours
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Privacy and security built into every feature.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {privacyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-coca-gray-light p-6 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-shadow transition-colors"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Convenience Features Section */}
      <section className="py-20 bg-coca-gray-light">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Real Life
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quality-of-life features that make expense tracking effortless.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {convenienceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary/20 hover:shadow-md transition-shadow transition-colors"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Availability Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Wherever You Are
              </h2>
              <p className="text-lg text-gray-600">
                Access your shared ledgers on any device.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-coca-gray-light rounded-2xl border border-gray-200 overflow-hidden"
            >
              <div className="grid grid-cols-2 md:grid-cols-4">
                {platformAvailability.map((item, index) => (
                  <div key={index} className="p-6 text-center border-b md:border-b-0 md:border-r border-gray-200 last:border-r-0">
                    <h3 className="font-semibold text-gray-900 mb-2">{item.platform}</h3>
                    <p className={`text-sm ${item.available ? "text-green-600" : "text-gray-500"}`}>
                      {item.available && <CheckCircle className="w-4 h-4 inline mr-1" />}
                      {item.status}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center text-gray-600 mt-6"
            >
              <strong>Sync Across Devices:</strong> Log in with the same phone number on any device. Your data follows you everywhere.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Free vs Pro Section */}
      <section id="pricing" className="py-20 bg-coca-gray-light scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Start Free. Upgrade When You Need More.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
            >
              <div className="grid grid-cols-3 bg-coca-gray-light border-b border-gray-200">
                <div className="p-4 font-semibold text-gray-900">Feature</div>
                <div className="p-4 font-semibold text-gray-900 text-center">Free</div>
                <div className="p-4 font-semibold text-primary text-center">Pro</div>
              </div>
              {freeVsProFeatures.map((item, index) => (
                <div key={index} className="grid grid-cols-3 border-b border-gray-100 last:border-b-0">
                  <div className="p-4 text-sm text-gray-700">{item.feature}</div>
                  <div className="p-4 text-center">
                    {typeof item.free === "boolean" ? (
                      item.free ? (
                        <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-gray-300 mx-auto" />
                      )
                    ) : (
                      <span className="text-sm text-gray-600">{item.free}</span>
                    )}
                  </div>
                  <div className="p-4 text-center">
                    {typeof item.pro === "boolean" ? (
                      item.pro ? (
                        <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-gray-300 mx-auto" />
                      )
                    ) : (
                      <span className="text-sm text-primary font-medium">{item.pro}</span>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center text-gray-600 mt-6"
            >
              <strong>Pro Pricing:</strong> ₹99/month or ₹799/year
            </motion.p>
          </div>
        </div>
      </section>

      {/* What Zedger Is NOT Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Let&apos;s Be Clear
              </h2>
              <p className="text-lg text-gray-600">
                Sometimes knowing what something isn&apos;t is just as helpful.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-coca-gray-light rounded-2xl border border-gray-200 overflow-hidden mb-8"
            >
              <div className="grid grid-cols-2 bg-gray-100 border-b border-gray-200">
                <div className="p-4 font-semibold text-gray-900">Zedger Is NOT</div>
                <div className="p-4 font-semibold text-gray-900">Why</div>
              </div>
              {whatZedgerIsNot.map((item, index) => (
                <div key={index} className="grid grid-cols-2 border-b border-gray-100 last:border-b-0">
                  <div className="p-4 text-sm text-gray-700 flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    {item.isNot}
                  </div>
                  <div className="p-4 text-sm text-gray-600">{item.why}</div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-primary/5 p-6 rounded-2xl border border-primary/20 text-center"
            >
              <p className="text-lg text-gray-700">
                <strong className="text-primary">Zedger IS:</strong> A shared ledger app for people who manage money together — families, roommates, travelers, and groups.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Requests Section */}
      <section className="py-20 bg-coca-gray-light">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Missing Something? Tell Us.
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We build features based on what users actually need. Your feedback shapes the product.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="mailto:support@tryzedger.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full border border-gray-200 text-gray-700 hover:border-primary/30 hover:text-primary transition-all"
              >
                <Mail className="w-5 h-5" />
                Suggest a Feature
              </a>
              <a
                href="mailto:hello@tryzedger.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full border border-gray-200 text-gray-700 hover:border-primary/30 hover:text-primary transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                Join Our Community
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              See It in Action
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              The best way to understand Zedger is to try it. No sign-up needed to explore. Create your first book in 30 seconds.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://play.google.com/store/apps/details?id=com.hitasoft.zedger" target="_blank" rel="noopener noreferrer" className="inline-block">
                <div className="bg-foreground text-background rounded-lg px-5 py-2 flex items-center gap-3 hover:opacity-90 transition-opacity min-w-[160px]">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div>
                    <p className="text-[10px] opacity-80">GET IT ON</p>
                    <p className="font-semibold text-sm -mt-0.5">Google Play</p>
                  </div>
                </div>
              </a>
              <a href="https://apps.apple.com/us/app/zedger/id6757311375" target="_blank" rel="noopener noreferrer" className="inline-block">
                <div className="bg-foreground text-background rounded-lg px-5 py-2 flex items-center gap-3 hover:opacity-90 transition-opacity min-w-[160px]">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                  </svg>
                  <div>
                    <p className="text-[10px] opacity-80">Download on the</p>
                    <p className="font-semibold text-sm -mt-0.5">App Store</p>
                  </div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
