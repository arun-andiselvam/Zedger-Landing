"use client";

import { motion } from "framer-motion";
import {
  Users,
  Calculator,
  Receipt,
  Wallet,
  Globe,
  Clock,
  ChevronRight,
  AlertCircle,
  Smartphone,
  CheckCircle,
  PlusCircle,
  UserPlus,
  SplitSquareHorizontal,
  Percent,
  Equal,
  Share2,
  MapPin,
  Plane,
  Mountain,
  Building,
  Briefcase,
  Shield,
  Zap,
  FileText,
  RefreshCw,
  Bell,
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

export default function FriendsTripBookContent() {
  const problemScenarios = [
    {
      person: "Priya",
      action: "booked the Airbnb",
      detail: "but forgot to note the exact amount",
    },
    {
      person: "Rahul",
      action: "paid for groceries",
      detail: "three different times",
    },
    {
      person: "Someone",
      action: "covered the petrol",
      detail: "but can't remember who",
    },
    {
      person: "The restaurant bill",
      action: "got split weirdly",
      detail: "because two people didn't drink",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Create Your Trip Book",
      description:
        "Give it a catchy name (\"Goa 2024\" or \"The Great Ladakh Disaster\"), set your base currency, and you're ready to roll.",
      icon: PlusCircle,
    },
    {
      step: "2",
      title: "Invite Your Travel Squad",
      description:
        "Share a simple invite link. Even friends who don't have the app can join and see expenses in real-time.",
      icon: UserPlus,
    },
    {
      step: "3",
      title: "Log Expenses As You Go",
      description:
        "Just paid for dinner? Log it in seconds. Snap a photo of the receipt if you want. The app handles the math instantly.",
      icon: Receipt,
    },
    {
      step: "4",
      title: "Settle Up When Ready",
      description:
        "At the end of the trip, see exactly who owes whom. One-tap settlement suggestions make squaring up a breeze.",
      icon: Wallet,
    },
  ];

  const splitOptions = [
    {
      title: "Split Equally",
      description:
        "The classic: everyone pays the same. Perfect for shared meals, accommodation, and group activities.",
      icon: Equal,
      example: "Dinner was ₹3,000 ÷ 6 friends = ₹500 each",
    },
    {
      title: "Split by Percentage",
      description:
        "When some people should pay more (or less). Great for couples sharing a room or when someone brings a plus-one.",
      icon: Percent,
      example: "Hotel: 3 couples pay 25% each, 2 singles pay 12.5% each",
    },
    {
      title: "Unequal Split",
      description:
        "Custom amounts for everyone. Use when someone had extra drinks, skipped an activity, or has budget constraints.",
      icon: SplitSquareHorizontal,
      example: "Activity: Some paid ₹2,000 (participated), others paid ₹0 (skipped)",
    },
    {
      title: "Exclude Members",
      description:
        "Easily exclude people from specific expenses. Vegetarian didn't eat the seafood platter? No problem.",
      icon: Users,
      example: "BBQ night: Non-veg eaters only, 4 people excluded",
    },
  ];

  const useCases = [
    {
      title: "The Goa Gang",
      subtitle: "Friends Beach Weekend",
      description:
        "Six college friends, one beach house, countless memories. From the villa rental to the last coconut water, every expense tracked and split fairly. No more \"who paid for what\" arguments on the drive back.",
      icon: MapPin,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "The Family Vacation",
      subtitle: "Multi-generational Trip",
      description:
        "When three generations travel together, expenses get complicated. Parents paying for activities, grandparents covering meals, kids chipping in for souvenirs. Trip Book keeps everyone on the same page.",
      icon: Plane,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "The Couple's Europe Trip",
      subtitle: "Romantic Getaway",
      description:
        "Even couples need to track! One person always seems to pay for more. With Trip Book, you both see exactly who's spending what — leading to either fairness or ammunition for future arguments (your choice).",
      icon: Globe,
      color: "bg-pink-100 text-pink-600",
    },
    {
      title: "The Office Team Outing",
      subtitle: "Corporate Retreat",
      description:
        "Company paying for some things, team members splitting others. Keep personal expenses separate from reimbursable ones. Your finance team will thank you for the organized receipts.",
      icon: Briefcase,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  const duringTripFeatures = [
    {
      title: "Quick-Add Expense",
      description: "Log an expense in under 5 seconds. Seriously, we timed it.",
      icon: Zap,
    },
    {
      title: "Photo Receipts",
      description: "Snap the bill before it disappears into someone's pocket forever.",
      icon: FileText,
    },
    {
      title: "Real-time Sync",
      description: "Everyone sees expenses the moment they're added. No refresh needed.",
      icon: RefreshCw,
    },
    {
      title: "Running Balance",
      description: "Always know where you stand. \"You're currently owed ₹2,340\" is a beautiful notification.",
      icon: Calculator,
    },
    {
      title: "Multi-Currency",
      description: "International trip? Add expenses in any currency, we'll convert automatically.",
      icon: Globe,
    },
    {
      title: "Push Notifications",
      description: "Get notified when expenses are added. Stay in the loop without opening the app.",
      icon: Bell,
    },
  ];

  const features = [
    {
      title: "Smart Simplification",
      description:
        "Instead of 15 different payments between 6 people, we calculate the minimum transactions needed. Usually 3-4 payments settle everything.",
      icon: Calculator,
    },
    {
      title: "Expense Categories",
      description:
        "Food, Transport, Accommodation, Activities, Shopping — see exactly where the trip money went with beautiful breakdowns.",
      icon: Receipt,
    },
    {
      title: "Trip Timeline",
      description:
        "A chronological view of your trip through expenses. It's like a financial photo album of your adventure.",
      icon: Clock,
    },
    {
      title: "Export Options",
      description:
        "Need to submit for reimbursement? Export a neat PDF or spreadsheet of all expenses with receipts attached.",
      icon: FileText,
    },
    {
      title: "Privacy First",
      description:
        "Your trip expenses are yours. We don't sell data or show ads. What happens in Goa stays in Goa (and in your encrypted Trip Book).",
      icon: Shield,
    },
    {
      title: "Works Offline",
      description:
        "No signal in the mountains? No problem. Add expenses offline, they sync when you're back online.",
      icon: Smartphone,
    },
  ];

  const settlementSteps = [
    {
      title: "View Final Balances",
      description:
        "See exactly who owes what with crystal-clear breakdowns. No surprises, no disputes.",
    },
    {
      title: "Smart Settlement Suggestions",
      description:
        "We calculate the minimum number of transactions needed. If Rahul owes Priya ₹500 and Priya owes Amit ₹500, Rahul can just pay Amit directly.",
    },
    {
      title: "Mark as Settled",
      description:
        "Track who has paid whom. The app updates balances in real-time as settlements happen.",
    },
    {
      title: "Trip Summary",
      description:
        "Get a beautiful summary of your trip: total spent, per-person breakdown, category splits, and more. Perfect for the memories (and the tax returns).",
    },
  ];

  const faqItems = [
    {
      question: "Is the Trip Book free to use?",
      answer:
        "Yes! Creating trip books and tracking expenses is completely free. We believe managing money with friends shouldn't cost money.",
    },
    {
      question: "How many people can join a Trip Book?",
      answer:
        "There's no limit. Whether it's 3 friends or a 30-person group tour, everyone can join and participate.",
    },
    {
      question: "Do all members need to have the app installed?",
      answer:
        "No! Members without the app can view expenses through a shared web link. They can see all expenses but need the app to add new ones.",
    },
    {
      question: "How do I add someone who doesn't have a smartphone?",
      answer:
        "You can add them as a \"non-app member\". They won't receive notifications, but you can track their expenses and include them in settlements.",
    },
    {
      question: "Can I use Trip Book for domestic trips only?",
      answer:
        "Absolutely! While we support multiple currencies for international trips, Trip Book works perfectly for local weekend getaways, road trips, or even a day outing.",
    },
    {
      question: "How does multi-currency work?",
      answer:
        "Set your base currency when creating the trip. When adding expenses in other currencies, we convert them automatically using current exchange rates. Everyone sees amounts in the base currency.",
    },
    {
      question: "What if someone paid in cash?",
      answer:
        "No problem! Just log who paid and the amount. The payment method doesn't matter for splitting — it's all about who covered what.",
    },
    {
      question: "Can I edit or delete an expense after adding it?",
      answer:
        "Yes, you can edit or delete any expense you've added. Changes are synced to all members instantly, and we keep a history for transparency.",
    },
    {
      question: "What if someone disputes an expense?",
      answer:
        "Expenses can be flagged for review. The person who added it can clarify or edit. Receipt photos help resolve disputes quickly.",
    },
    {
      question: "How do I handle expenses where some people shouldn't pay?",
      answer:
        "When adding an expense, simply exclude those members. Vegetarians skipping the meat? Exclude them. Someone sleeping in while others went parasailing? Exclude them. Easy.",
    },
    {
      question: "Can couples share a balance?",
      answer:
        "Yes! When adding members, you can link two people as a couple. Their expenses and balances are combined, so you track one balance instead of two.",
    },
    {
      question: "What if someone leaves the trip early?",
      answer:
        "Their balance remains calculated until the point they left. You can settle with them separately while the trip continues for others.",
    },
    {
      question: "How does the settlement suggestion work?",
      answer:
        "We use a smart algorithm to minimize the number of transactions. Instead of everyone paying everyone, we calculate the fewest payments needed to settle all balances.",
    },
    {
      question: "Can I settle partially?",
      answer:
        "Yes! If Rahul owes you ₹1,000 but only pays ₹500 now, you can mark a partial settlement. The remaining ₹500 stays in the balance.",
    },
    {
      question: "What payment methods can I use to settle?",
      answer:
        "Zedger doesn't process payments. You settle through UPI, bank transfer, cash, or carrier pigeons — whatever works. Just mark it as settled in the app.",
    },
    {
      question: "How long is my Trip Book data stored?",
      answer:
        "Forever, unless you delete it. Your trip memories (and expenses) are always accessible. Great for \"remember that trip?\" conversations.",
    },
    {
      question: "Can I export my trip data?",
      answer:
        "Yes! Export as PDF for a nice report, or as CSV/spreadsheet for detailed analysis. Perfect for expense reports or personal records.",
    },
    {
      question: "Is my data secure?",
      answer:
        "We use end-to-end encryption and follow industry-standard security practices. Your expense data is private and secure.",
    },
    {
      question: "Can I create multiple Trip Books simultaneously?",
      answer:
        "Of course! Planning a road trip while finishing up settlements from last month's vacation? Create as many books as you need.",
    },
    {
      question: "What happens to the Trip Book after the trip ends?",
      answer:
        "It stays accessible for reference and settlements. You can archive it once everyone has settled up, or keep it active indefinitely.",
    },
    {
      question: "Can I use Trip Book for business travel?",
      answer:
        "Yes! Many teams use it for client dinners, conference trips, and team outings. The export feature makes expense reporting simple.",
    },
    {
      question: "Does it work without internet?",
      answer:
        "Yes! Add expenses offline and they'll sync automatically when you're back online. Perfect for remote destinations.",
    },
    {
      question: "How is this different from other apps for bill splitting?",
      answer:
        "Zedger is a travel expense splitter built specifically for trips with features like multi-currency, trip timeline, receipt photos, and smart settlements. It's the best app for sharing expenses with friends on trips.",
    },
    {
      question: "Can I suggest features or report bugs?",
      answer:
        "Absolutely! We love feedback. Reach out through the app or email us. Many features came from user suggestions.",
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
                Every Group Trip Ever
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The trip was perfect. The sunset was magical. The memories are priceless.
                But now you&apos;re home, and no one remembers who paid for what.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-4">
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
                      <p className="text-gray-900 font-medium">{scenario.person}</p>
                      <p className="text-gray-600">
                        {scenario.action}, <span className="text-red-600">{scenario.detail}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-center text-gray-600 mt-8 text-lg"
            >
              Result? A 47-message WhatsApp thread, a shared Google Sheet that no one
              updates, and at least one friendship that&apos;s a little awkward now.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What is Trip Book Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Ultimate App for Sharing Expenses with Friends
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                The{" "}
                <Link href="/" className="text-primary font-medium hover:underline">
                  Zedger
                </Link>{" "}
                travel expense splitter is designed specifically for group travel. It captures
                every coffee, taxi, and temple entry ticket — then calculates exactly who owes
                whom at the end.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-3 gap-6 mt-12"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Receipt className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900">Track Everything</h3>
                <p className="text-sm text-gray-600 mt-2">Every expense, big or small</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900">Auto Calculate</h3>
                <p className="text-sm text-gray-600 mt-2">Instant split calculations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900">Fair for All</h3>
                <p className="text-sm text-gray-600 mt-2">Multiple split options</p>
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
                Adventure First, Math Later
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Four simple steps to expense-tracking bliss. Set it up once, and the Trip Book
                does the heavy lifting.
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

      {/* Split Options Section */}
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
                One of the Best Apps for Bill Splitting
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Not everyone eats the same, drinks the same, or does the same activities.
                This travel expense splitter lets you split expenses fairly with flexible options.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {splitOptions.map((option, index) => (
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
                      <p className="text-gray-600 text-sm mb-3">{option.description}</p>
                      <div className="bg-white px-4 py-2 rounded-lg border border-gray-100">
                        <p className="text-xs text-gray-500 font-medium">{option.example}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Adding Members Section */}
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
                Getting the Gang Together
              </h2>
              <p className="text-lg text-gray-600">
                Adding your travel squad takes seconds, not minutes.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 text-center">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Share2 className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Share Invite Link</h3>
                <p className="text-sm text-gray-600">
                  One tap to share. Friends click and join instantly.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-200 text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">From Contacts</h3>
                <p className="text-sm text-gray-600">
                  Pick from your existing contacts who use Zedger.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-200 text-center">
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserPlus className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Add Manually</h3>
                <p className="text-sm text-gray-600">
                  Add non-app users by name. They&apos;re included in all calculations.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* During the Trip Section */}
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
                While You&apos;re Living Your Best Life
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The trip is happening! Here&apos;s how Trip Book keeps up with your adventures.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {duringTripFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all"
                >
                  <feature.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
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
                Every Trip Has a Story
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From beach weekends to world tours, Trip Book adapts to your adventure.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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

      {/* Trip Settlement Section */}
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
                The Grand Finale: Settlement
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The trip&apos;s over, the photos are posted, and now it&apos;s time to settle up.
                Trip Book makes this painless.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {settlementSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex gap-4 mb-6 last:mb-0"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                      {index + 1}
                    </div>
                    {index < settlementSteps.length - 1 && (
                      <div className="w-0.5 h-full bg-gray-200 mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid Section */}
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
                Built for Real Travelers
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Every feature exists because travelers asked for it. No bloat, all value.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary/20 hover:shadow-md transition-all"
                >
                  <feature.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
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
                Travel Expense Splitter - FAQ
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to know about using this app for sharing expenses with friends.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-100"
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
                  Can&apos;t find the answer you&apos;re looking for? Our team is happy to help
                  with any trip-related queries.
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
              Download the Best Travel Expense Splitter
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              The best app for sharing expenses with friends. One of the top apps for bill splitting on trips — let it handle the numbers while you handle the memories.
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
            <p className="text-primary-foreground/60 mt-6 text-sm">
              Free travel expense splitter. No hidden costs (unlike that resort fee).
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
