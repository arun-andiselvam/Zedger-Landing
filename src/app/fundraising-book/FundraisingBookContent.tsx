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
  AlertCircle,
  CheckCircle,
  PlusCircle,
  UserPlus,
  Gift,
  PartyPopper,
  Heart,
  Building,
  Home,
  Baby,
  ShoppingBag,
  Briefcase,
  Shield,
  Zap,
  FileText,
  Bell,
  Eye,
  EyeOff,
  Share2,
  Download,
  Archive,
  Wifi,
  DollarSign,
  BarChart3,
  ListChecks,
  Send,
  Lock,
} from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function FundraisingBookContent() {
  const problemScenarios = [
    {
      title: "Friday comes",
      description: "4 out of 12 people paid. You don't remember who.",
    },
    {
      title: "You check UPI history",
      description: "Three transactions with no names. Two people claim they \"already paid.\"",
    },
    {
      title: "You create a spreadsheet",
      description: "Nobody looks at it. Someone sends ₹400 instead of ₹500.",
    },
    {
      title: "The gift costs ₹6,000",
      description: "You collected ₹4,900. Guess who covers the rest?",
    },
  ];

  const perfectFor = [
    { text: "Birthday & anniversary gifts", icon: Gift },
    { text: "Wedding contributions", icon: Heart },
    { text: "Farewell collections", icon: PartyPopper },
    { text: "Office party funds", icon: Briefcase },
    { text: "Team lunch pools", icon: Users },
    { text: "Housewarming gifts", icon: Home },
    { text: "Baby shower contributions", icon: Baby },
    { text: "Group purchases", icon: ShoppingBag },
    { text: "Charity & donation drives", icon: Heart },
    { text: "Event ticket collections", icon: Receipt },
    { text: "Club/society dues", icon: Building },
    { text: "Sports team fees", icon: Users },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Create Your Collection",
      description:
        "Give it a name — \"Priya's Wedding Gift\" or \"Office Diwali Party Fund\" — and set your target amount. Done in seconds.",
      icon: PlusCircle,
    },
    {
      step: "2",
      title: "Add Contributors",
      description:
        "Add everyone who needs to chip in. Set a fixed amount per person, or let them contribute whatever they can.",
      icon: UserPlus,
    },
    {
      step: "3",
      title: "Track Contributions",
      description:
        "As people pay you (cash, UPI, whatever works), mark them as \"Paid\" in the app. Everyone sees the updated progress.",
      icon: ListChecks,
    },
    {
      step: "4",
      title: "Hit Your Goal",
      description:
        "Watch the progress bar fill up. When you've collected enough, close the book and make the magic happen.",
      icon: Target,
    },
  ];

  const collectionOptions = [
    {
      title: "Fixed Amount Per Person",
      description:
        "Everyone pays the same — no exceptions, no negotiations. Clear and simple. \"It's ₹500 each, take it or leave it.\"",
      icon: DollarSign,
      example: "18 people × ₹300 = ₹5,400 for the manager's gift",
    },
    {
      title: "Variable Contributions",
      description:
        "Some people want to give more, others less? Allow flexible amounts. The intern and the senior manager don't have to contribute equally.",
      icon: BarChart3,
      example: "8 friends gave between ₹1,000 - ₹2,000 each",
    },
    {
      title: "Target-Based Collection",
      description:
        "Set a goal and watch the progress bar climb. Stop collecting when you hit it. Perfect when you know exactly what you're buying.",
      icon: Target,
      example: "Target: ₹15,000 for a smartwatch. Stop at 100%.",
    },
    {
      title: "No-Target Collection",
      description:
        "Not sure how much you'll collect? Skip the target entirely. Just track contributions as they come. Whatever you get, you get.",
      icon: Wallet,
      example: "Charity drive: collected ₹47,000 from 200+ donors",
    },
    {
      title: "Partial Payments",
      description:
        "Someone can only pay ₹300 now and ₹200 later? Log partial payments. The app tracks the remaining balance automatically.",
      icon: Clock,
      example: "Paid: ₹300/₹500. Remaining: ₹200",
    },
  ];

  const dashboardFeatures = [
    {
      title: "Target Amount",
      description: "What you're trying to collect",
      icon: Target,
    },
    {
      title: "Collected So Far",
      description: "What's already in the kitty",
      icon: Wallet,
    },
    {
      title: "Remaining",
      description: "What's still needed to hit the goal",
      icon: Calculator,
    },
    {
      title: "Progress Bar",
      description: "Visual tracker — 60% collected!",
      icon: BarChart3,
    },
    {
      title: "Contributor List",
      description: "Who paid, who didn't, how much",
      icon: Users,
    },
  ];

  const reminderFeatures = [
    {
      title: "Send In-App Reminder",
      description: "One tap, they get a notification. No awkward personal messages.",
      icon: Bell,
    },
    {
      title: "Share Collection Link",
      description: "Post in your WhatsApp group. Let peer pressure do its thing.",
      icon: Share2,
    },
    {
      title: "View Pending List",
      description: "Know exactly who to follow up with. No more guessing.",
      icon: ListChecks,
    },
  ];

  const useCases = [
    {
      title: "The Birthday Gift",
      subtitle: "Office Team Collection",
      description:
        "Sneha is organizing a gift for their manager's birthday. 18 team members, ₹300 each, target ₹5,400. She creates the collection, adds everyone, shares the link. Within 3 days: 12 paid, 4 marked \"will pay tomorrow\", 2 on leave got reminders. Day before: ₹5,400 collected. Gift purchased. Zero stress.",
      icon: Gift,
      color: "bg-pink-100 text-pink-600",
    },
    {
      title: "The Wedding Contribution",
      subtitle: "College Friends Group",
      description:
        "Rahul's friend group is contributing for a wedding gift. 8 friends, different budgets. Instead of fixed amounts, variable contributions: 3 friends give ₹2,000, 4 give ₹1,500, 1 gives ₹1,000. Total: ₹13,000. Rahul knows exactly who gave what — helpful for the thank-you note.",
      icon: Heart,
      color: "bg-red-100 text-red-600",
    },
    {
      title: "The Farewell Fund",
      subtitle: "Team Send-off",
      description:
        "A colleague is leaving. The team wants to give a proper send-off — gift + party. Two separate collections: \"Amit's Gift\" at ₹500/person and \"Amit's Party\" at ₹400/person. Everyone contributes separately. No confusion about what the money is for.",
      icon: PartyPopper,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "The Society Maintenance",
      subtitle: "Apartment Complex",
      description:
        "The apartment society collects ₹1,500/month from 24 flats. The treasurer creates a monthly collection book: adds all flat numbers, marks payments as they come, sends reminders to pending flats, exports report for society records. No more cash-in-envelope confusion.",
      icon: Building,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "The Charity Drive",
      subtitle: "Community Event",
      description:
        "A local NGO collecting donations for flood relief. No fixed amount — people give what they can. Collection with no target, variable amounts, shared on social media. Result: 200+ contributions tracked cleanly. Transparent. Accountable.",
      icon: Heart,
      color: "bg-green-100 text-green-600",
    },
  ];

  const features = [
    {
      title: "Target Setting",
      description: "Set a collection goal or go open-ended",
      icon: Target,
    },
    {
      title: "Fixed/Variable Amounts",
      description: "Same amount for all, or flexible contributions",
      icon: DollarSign,
    },
    {
      title: "Real-Time Tracking",
      description: "See who paid and who hasn't — instantly",
      icon: BarChart3,
    },
    {
      title: "Progress Bar",
      description: "Visual status of your collection",
      icon: Zap,
    },
    {
      title: "Partial Payments",
      description: "Track contributions in installments",
      icon: Clock,
    },
    {
      title: "In-App Reminders",
      description: "Nudge pending contributors with one tap",
      icon: Bell,
    },
    {
      title: "Shareable Link",
      description: "Post collection in WhatsApp groups",
      icon: Share2,
    },
    {
      title: "Payment Marking",
      description: "Log cash, UPI, or any payment method",
      icon: CheckCircle,
    },
    {
      title: "Contributor Privacy",
      description: "Control what others can see",
      icon: Eye,
    },
    {
      title: "Export Report",
      description: "Download summary as PDF or Excel",
      icon: Download,
    },
    {
      title: "Close & Archive",
      description: "Lock completed collections",
      icon: Archive,
    },
    {
      title: "Offline Mode",
      description: "Works without internet",
      icon: Wifi,
    },
  ];

  const faqItems = [
    {
      question: "What exactly is a Money Collection Book?",
      answer:
        "A simple tool to track group contributions. You set a purpose, add people, and track who paid — all in one place. Think of it as a digital version of that notebook someone always loses.",
    },
    {
      question: "Is this a payment app?",
      answer:
        "No. People pay you directly — cash, UPI, bank transfer, whatever works. You just log the payment here. The app tracks, it doesn't transact.",
    },
    {
      question: "Who should create the collection?",
      answer:
        "Whoever is organizing it — the person buying the gift, planning the party, or managing the fund. One organizer, full control.",
    },
    {
      question: "Can I have multiple organizers?",
      answer:
        "Currently, one organizer per collection. But you can share view-only access with others to keep everyone informed.",
    },
    {
      question: "How do I add contributors?",
      answer:
        "Tap \"Add Contributor,\" enter their name and phone number. They'll receive a notification about the collection. Takes about 5 seconds per person.",
    },
    {
      question: "What if someone doesn't have the app?",
      answer:
        "They can download Zedger (free) to view the collection. Or you can track them manually and just mark their payment when received.",
    },
    {
      question: "Is there a limit on contributors?",
      answer:
        "Free accounts allow up to 20 contributors per collection. Need more? Upgrade to Pro for unlimited contributors.",
    },
    {
      question: "Can I set different amounts for different people?",
      answer:
        "Yes. Set individual amounts for each person, or use variable contributions where everyone gives what they want.",
    },
    {
      question: "What if someone wants to pay in parts?",
      answer:
        "Log partial payments. The app tracks the remaining balance and marks them fully paid once complete.",
    },
    {
      question: "Can I edit a contribution after logging it?",
      answer:
        "Yes. Tap the contributor, edit the amount or payment status. Updates reflect immediately for everyone.",
    },
    {
      question: "What if someone paid but I forgot to mark it?",
      answer:
        "Mark it anytime. The app recalculates totals instantly. Better late than never.",
    },
    {
      question: "Can contributors see how much others have given?",
      answer:
        "You control this. Enable or disable contribution visibility in settings. Some prefer transparency, others prefer privacy.",
    },
    {
      question: "Can I send payment reminders?",
      answer:
        "Yes. One tap sends an in-app notification to pending contributors. No awkward personal messages or passive-aggressive texts needed.",
    },
    {
      question: "What if I collect more than the target?",
      answer:
        "The app tracks it. You decide what to do with the extra — return it proportionally, save for next time, or upgrade the gift!",
    },
    {
      question: "Can I close a collection before hitting the target?",
      answer:
        "Yes. Sometimes you can't wait forever. Close anytime and work with what you've collected.",
    },
    {
      question: "Can I reopen a closed collection?",
      answer:
        "Yes, if you need to accept more contributions. But it's best to finalize everything before closing.",
    },
    {
      question: "What happens after I close the collection?",
      answer:
        "The collection is locked. You get a final summary with all the details. Export it if needed. Then go fulfill the purpose!",
    },
    {
      question: "Can I delete a collection?",
      answer:
        "Yes. Only the organizer can delete. All data will be permanently removed — so be certain before you do.",
    },
    {
      question: "Can someone leave a collection?",
      answer:
        "Contributors can opt out. You can also remove them manually if plans change.",
    },
    {
      question: "What if there's a dispute about a payment?",
      answer:
        "The app logs every action with timestamps. Use that as your reference. No more \"I definitely paid\" arguments.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes. All data is encrypted. Only you and your contributors can access the collection. We're the notepad, not the wallet.",
    },
    {
      question: "Does it work offline?",
      answer:
        "Yes. Track payments offline. They'll sync automatically when you're back online.",
    },
    {
      question: "Is Money Collection Book free?",
      answer:
        "Yes, core features are completely free. Pro unlocks unlimited contributors, advanced reports, and more.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <AlertCircle className="w-4 h-4" />
                Sound Familiar?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The Group Collection Nightmare
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                &ldquo;Okay everyone, ₹500 each for Rahul&apos;s birthday gift. Pay me by Friday.&rdquo;
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-4 mb-8">
              {problemScenarios.map((scenario, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-red-200 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 text-sm font-bold">?</span>
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">{scenario.title}</p>
                      <p className="text-gray-600 text-sm mt-1">{scenario.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-center text-lg text-gray-700 font-medium"
            >
              Sound exhausting? That&apos;s because it is.{" "}
              <span className="text-primary">Let&apos;s fix it.</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What Is Money Collection Book Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Personal Collection Manager
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Money Collection Book is built for one thing: collecting a fixed amount from a
                group of people.
              </p>
              <p className="text-lg text-gray-600">
                Set your target. Add contributors. Track who paid. See progress in real-time.{" "}
                <span className="font-medium text-gray-900">
                  No spreadsheets. No memory games. No chasing people.
                </span>
              </p>
              <p className="text-primary font-medium mt-4">
                You&apos;re the organizer, not the accountant.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-8">
                Perfect for:
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {perfectFor.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100"
                  >
                    <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Four Steps to Stress-Free Collections
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From &ldquo;let&apos;s collect for a gift&rdquo; to &ldquo;mission accomplished&rdquo; in four simple
                steps.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {howItWorks.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all relative"
                  >
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {item.step}
                    </div>
                    <div className="ml-4">
                      <item.icon className="w-10 h-10 text-primary mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collection Options Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Flexible Collections for Every Situation
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Every collection is different. The app adapts to yours.
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto space-y-6">
              {collectionOptions.map((option, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-primary/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <option.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {option.title}
                      </h3>
                      <p className="text-gray-600 mb-3">{option.description}</p>
                      <div className="bg-white px-4 py-2 rounded-lg border border-gray-100 inline-block">
                        <p className="text-sm text-gray-500">{option.example}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Adding Contributors Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get Everyone on the List
              </h2>
              <p className="text-lg text-gray-600">
                Adding contributors takes seconds, not minutes.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <UserPlus className="w-5 h-5 text-primary" />
                  How to add contributors:
                </h3>
                <ol className="space-y-3 text-gray-600">
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium flex-shrink-0">
                      1
                    </span>
                    Open your Money Collection Book
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium flex-shrink-0">
                      2
                    </span>
                    Tap &ldquo;Add Contributor&rdquo;
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium flex-shrink-0">
                      3
                    </span>
                    Enter their name and phone number
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium flex-shrink-0">
                      4
                    </span>
                    Set their contribution amount (or leave flexible)
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium flex-shrink-0">
                      5
                    </span>
                    They receive a notification to view the collection
                  </li>
                </ol>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-green-600" />
                    What contributors can see:
                  </h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      The collection purpose
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Target amount (if set)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Their own contribution status
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Overall progress (optional — you control visibility)
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <EyeOff className="w-5 h-5 text-primary" />
                    What only you (the organizer) can see:
                  </h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-primary" />
                      Who has paid and who hasn&apos;t
                    </li>
                    <li className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-primary" />
                      Individual contribution amounts
                    </li>
                    <li className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-primary" />
                      Complete payment history
                    </li>
                    <li className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-primary" />
                      Options to send reminders
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 bg-primary/5 p-4 rounded-xl border border-primary/20 text-center"
            >
              <p className="text-primary font-medium">
                Pro tip: Add everyone upfront. It&apos;s easier to track from day one than to add
                people mid-collection.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tracking Contributions Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                See Everything at a Glance
              </h2>
              <p className="text-lg text-gray-600">
                Your dashboard tells you exactly where things stand.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-5 gap-4 mb-12">
              {dashboardFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center"
                >
                  <feature.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-medium text-gray-900 text-sm mb-1">{feature.title}</h3>
                  <p className="text-xs text-gray-500">{feature.description}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Marking Payments:</h3>
              <p className="text-gray-600 mb-4">When someone pays you:</p>
              <ol className="space-y-3 text-gray-600 mb-6">
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                    1
                  </span>
                  Open the collection
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                    2
                  </span>
                  Find their name
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                    3
                  </span>
                  Tap &ldquo;Mark as Paid&rdquo;
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                    4
                  </span>
                  Enter the amount received
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                    5
                  </span>
                  Done — their status updates instantly
                </li>
              </ol>
              <div className="bg-white p-4 rounded-xl border border-gray-100">
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">Payment Methods:</span> The app
                  doesn&apos;t process payments. People pay you directly — cash, UPI, bank
                  transfer, whatever works. You just track it here.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Reminders & Follow-ups Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Gentle Nudges, Not Awkward Chases
              </h2>
              <p className="text-lg text-gray-600">
                Asking people for money is uncomfortable. Asking twice is worse.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6 mb-8">
              {reminderFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl border border-gray-200 text-center"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-green-50 p-6 rounded-2xl border border-green-100"
            >
              <h3 className="font-semibold text-green-900 mb-3">What you won&apos;t do:</h3>
              <ul className="space-y-2 text-green-800">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Manually text 15 people individually
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Forget who paid and who didn&apos;t
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Ask someone who already paid (embarrassing!)
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Completing the Collection Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Mission Accomplished
              </h2>
              <p className="text-lg text-gray-600">
                When you&apos;ve collected enough (or decided to stop), here&apos;s how to wrap
                it up.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Close the Collection</h3>
                <ol className="space-y-3 text-gray-600">
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium flex-shrink-0">
                      1
                    </span>
                    Go to Collection Settings
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium flex-shrink-0">
                      2
                    </span>
                    Tap &ldquo;Close Collection&rdquo;
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium flex-shrink-0">
                      3
                    </span>
                    Review final summary
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium flex-shrink-0">
                      4
                    </span>
                    Confirm closure
                  </li>
                </ol>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">After closing:</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-center gap-2">
                      <Archive className="w-4 h-4 text-primary" />
                      No new contributions accepted
                    </li>
                    <li className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-primary" />
                      Final report is saved
                    </li>
                    <li className="flex items-center gap-2">
                      <Download className="w-4 h-4 text-primary" />
                      You can export or share the summary
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">What the Summary Shows:</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>Total collected</li>
                    <li>Number of contributors</li>
                    <li>Individual contributions (if you want to share)</li>
                    <li>Date completed</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 bg-primary/5 p-6 rounded-2xl border border-primary/20 text-center"
            >
              <p className="text-lg text-gray-700">
                <span className="font-medium text-gray-900">Then what?</span> Buy the gift. Book
                the venue. Make the donation.{" "}
                <span className="text-primary font-medium">
                  Whatever the collection was for — go do it!
                </span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How Real People Use It
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From birthday gifts to society dues, see how Money Collection Book works in the
                real world.
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto space-y-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-14 h-14 ${useCase.color} rounded-2xl flex items-center justify-center flex-shrink-0`}
                    >
                      <useCase.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{useCase.title}</h3>
                      <p className="text-sm text-primary font-medium mb-3">{useCase.subtitle}</p>
                      <p className="text-gray-600">{useCase.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Everything You Need to Collect Funds
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Simple, powerful features that make group collections effortless.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all"
                >
                  <feature.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{feature.title}</h3>
                  <p className="text-xs text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Quick Answers
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to know about Money Collection Book.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-xl border border-gray-200"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">{item.question}</h3>
                  <p className="text-sm text-gray-600">{item.answer}</p>
                </motion.div>
              ))}

              {/* Still have questions card */}
              <motion.div
                variants={fadeInUp}
                className="bg-primary/5 p-6 rounded-xl border border-primary/20"
              >
                <h3 className="font-semibold text-gray-900 mb-2">Still have questions?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Can&apos;t find the answer you&apos;re looking for? We&apos;re here to help with
                  any collection-related queries.
                </p>
                <a
                  href="mailto:hello@tryzedger.com"
                  className="inline-flex items-center text-primary font-medium text-sm hover:underline"
                >
                  Contact Support <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </motion.div>
            </div>
          </motion.div>
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
              Stop Chasing. Start Collecting.
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              You have enough to manage already. Tracking who paid ₹500 for a birthday gift shouldn&apos;t be one of them.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://play.google.com/store/apps/details?id=com.zedger" target="_blank" rel="noopener noreferrer" className="inline-block">
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
              <a href="https://apps.apple.com/in/app/zedger-shared-ledger-app/id6742518475" target="_blank" rel="noopener noreferrer" className="inline-block">
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
            <p className="text-primary-foreground/60 mt-6 text-sm">
              Free forever. No payment processing. Just simple tracking.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
