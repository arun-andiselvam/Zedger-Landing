'use client';

import { motion } from "framer-motion";
import {
  Calculator,
  Users,
  Calendar,
  Check,
  UserPlus,
  RefreshCw,
  Shield,
  Percent,
  UserMinus,
  Eye,
  PlusCircle,
  Wallet,
  History,
  Clock
} from "lucide-react";
import Link from "next/link";

const MonthlyRecurringBookContent = () => {
  return (
    <>
      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Sound Familiar?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "\"Hey, did you pay your share of the electricity bill?\"",
              "\"I paid for groceries twice this month. You owe me $120... I think?\"",
              "\"Let's just split everything equally\" — but nothing is ever equal."
            ].map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-coca-gray-light rounded-2xl p-6 text-center"
              >
                <p className="text-lg text-foreground italic">{quote}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center text-muted-foreground mt-8 text-lg"
          >
            Shared living is great. Shared expenses? A nightmare. <span className="text-foreground font-medium">Until now.</span>
          </motion.p>
        </div>
      </section>

      {/* What Is It Section */}
      <section className="py-20 bg-coca-gray-light">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Your Household&apos;s Financial Autopilot
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              The Monthly Recurring Book is designed for people who share regular expenses — rent, utilities, WiFi, groceries, or anything that repeats monthly.
            </p>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed mt-4">
              Instead of calculating who owes whom at the end of every month, the app does it for you. <span className="text-foreground font-medium">Automatically. Fairly. Without the drama.</span>
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Roommates & flatmates",
              "Couples sharing a home",
              "Co-living residents sharing costs",
              "Hostel mates sharing common expenses"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl p-4 text-center shadow-sm"
              >
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-foreground font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Three Steps to Expense Peace
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Create Your Book",
                description: "Give it a name — \"Flat 4B Expenses\" or \"Home Bills\" — whatever feels right. Set your monthly cycle to match your billing dates."
              },
              {
                step: "2",
                title: "Add Your People",
                description: "Invite your roommates or flatmates by phone number. They'll get a notification to join. Everyone sees the same book, same expenses, same balances."
              },
              {
                step: "3",
                title: "Log Expenses as They Happen",
                description: "Paid the WiFi bill? Add it. Bought groceries? Log it. The app remembers who paid and splits it among members based on your rules."
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center bg-coca-gray-light rounded-2xl p-8"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 text-center bg-primary/5 rounded-2xl p-6"
          >
            <p className="text-foreground font-medium">
              At month end: Everyone sees exactly what they owe or what they&apos;re owed. Settle up with a single tap.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Smart Split System */}
      <section className="py-20 bg-coca-gray-light">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-4"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Split Your Way
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Not every expense should be split equally. We get it.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Calculator,
                title: "Equal Split",
                description: "Everyone pays the same. Perfect for rent, WiFi, and shared subscriptions."
              },
              {
                icon: Percent,
                title: "Custom Split",
                description: "Your roommate eats out every day? Adjust the groceries split to 70-30 or any ratio that's fair."
              },
              {
                icon: UserMinus,
                title: "Exclude Members",
                description: "Going home for two weeks? Exclude yourself from that period's electricity bill. Simple."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center text-foreground font-medium mt-8"
          >
            The golden rule: <span className="text-primary">You decide what&apos;s fair. The app just does the math.</span>
          </motion.p>
        </div>
      </section>

      {/* Adding Members Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Getting Everyone on the Same Page
              </h2>

              <div className="space-y-4">
                {[
                  "Open your Monthly Recurring Book",
                  "Tap \"Add Member\"",
                  "Enter their phone number",
                  "They receive an invite notification",
                  "Once they accept, they see all shared expenses"
                ].map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground text-sm font-bold">{index + 1}</span>
                    </div>
                    <p className="text-foreground">{step}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-primary/5 rounded-xl">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Pro tip:</span> Add members before logging expenses. That way, everyone&apos;s included from day one.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="bg-coca-gray-light rounded-2xl p-6">
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-primary" />
                  What members can do
                </h3>
                <ul className="space-y-2">
                  {[
                    "View all expenses in the book",
                    "Add new expenses they've paid for",
                    "See their running balance",
                    "Settle up when the month ends"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Check className="w-4 h-4 text-green-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-coca-gray-light rounded-2xl p-6">
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  What only the creator can do
                </h3>
                <ul className="space-y-2">
                  {[
                    "Remove members",
                    "Close or delete the book",
                    "Adjust member permissions"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Check className="w-4 h-4 text-green-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Monthly Cycles Section */}
      <section className="py-20 bg-coca-gray-light">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Fresh Start, Every Month
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each month is a clean slate. At the start of your cycle, everyone&apos;s balance resets to zero. As expenses are logged throughout the month, the app calculates who&apos;s ahead and who&apos;s behind.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-foreground">End of Month</h3>
              </div>
              <ul className="space-y-2">
                {[
                  "See the settlement summary",
                  "Know exactly who pays whom",
                  "Mark settlements as done",
                  "Start the next month fresh"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Check className="w-4 h-4 text-green-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <History className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-foreground">Viewing Past Months</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Need to check what happened in October? Just swipe to view previous cycles. Every expense, every split, preserved forever.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              How Real People Use It
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "The Three-Roommate Flat",
                story: "Rahul pays rent ($1,500). Priya handles electricity and WiFi ($175). Amit buys groceries every week ($300/month).",
                result: "At month end, the app shows exactly who owes whom. One settlement. Done.",
                highlight: "No spreadsheets needed"
              },
              {
                title: "The Couple's Shared Home",
                story: "Sneha and Vikram split everything 50-50, except groceries — Vikram eats more, so they do 60-40.",
                result: "The app handles both rules in the same book.",
                highlight: "No arguments"
              },
              {
                title: "The Co-living Space",
                story: "Five professionals sharing a large apartment. Everyone has different room sizes and earns differently.",
                result: "They split rent by room size (varying percentages) and utilities equally. The app handles the complexity invisibly.",
                highlight: "Fair for everyone"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-coca-gray-light rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{item.story}</p>
                <p className="text-foreground text-sm mb-4">{item.result}</p>
                <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                  {item.highlight}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-coca-gray-light">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Everything You Need, Nothing You Don&apos;t
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Calculator, title: "Auto-Split Calculation", desc: "Instantly know who owes what" },
              { icon: Percent, title: "Custom Split Ratios", desc: "Equal, percentage, or exact amounts" },
              { icon: RefreshCw, title: "Monthly Cycles", desc: "Fresh calculations every month" },
              { icon: Check, title: "Settlement Tracking", desc: "Mark debts as settled with one tap" },
              { icon: History, title: "Expense History", desc: "View any past month anytime" },
              { icon: Users, title: "Multi-Member Access", desc: "Everyone adds, everyone sees" },
              { icon: Clock, title: "Real-time Sync", desc: "Changes update instantly" },
              { icon: Shield, title: "No Bank Linking", desc: "Complete privacy, manual control" }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-xl p-4 shadow-sm"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-sm mb-1">{feature.title}</h3>
                <p className="text-muted-foreground text-xs">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Quick Answers
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                q: "What exactly is a Monthly Recurring Book?",
                a: "It's a shared expense tracker designed for people who split regular costs — like rent, utilities, groceries, or WiFi. The app automatically calculates who owes what at the end of each month, so you don't have to."
              },
              {
                q: "Who is this for?",
                a: "Anyone sharing recurring expenses: roommates, flatmates, couples living together, joint families splitting household bills, PG mates, or even office colleagues sharing lunch costs."
              },
              {
                q: "How is this different from Family Book?",
                a: "Family Book tracks a household's overall finances (income, expenses, balances). Monthly Recurring Book specifically tracks shared expenses between people who need to settle up — it calculates who owes whom."
              },
              {
                q: "What does \"monthly cycle\" mean?",
                a: "A cycle is your expense tracking period — usually a month. At the start of each cycle, balances reset to zero. As expenses are logged, the app tracks who paid and who owes. At cycle end, you settle up and start fresh."
              },
              {
                q: "Can I customize when my cycle starts?",
                a: "Yes. By default, it runs 1st to 30th/31st. But if your rent is due on the 5th, you can set your cycle from 5th to 4th of the next month."
              },
              {
                q: "How do I add members to the book?",
                a: "Open your Monthly Recurring Book, tap \"Add Member\", enter their phone number, they receive an invite notification, and once accepted, they can view and add expenses."
              },
              {
                q: "What if someone doesn't have the app?",
                a: "They'll need to download Zedger (free) and create an account to join your book. It takes less than a minute."
              },
              {
                q: "Is there a limit on how many members I can add?",
                a: "Free accounts allow up to 5 members per book. Upgrade to Pro for unlimited members."
              },
              {
                q: "Can I remove a member mid-month?",
                a: "Yes. Their balance will be calculated based on expenses up to that point. They'll need to settle before being removed, or you can write off the balance."
              },
              {
                q: "What can members do in the book?",
                a: "All members can: view all expenses, add new expenses they paid for, see their running balance, and mark settlements as complete."
              },
              {
                q: "What can only the book creator do?",
                a: "The creator has admin rights: add or remove members, edit or delete any expense, adjust split ratios, and close or delete the book."
              },
              {
                q: "How do I log an expense?",
                a: "Tap \"Add Expense,\" enter the amount, add a description (like \"Electricity Bill\"), select who paid, and choose how to split it. Done — balances update instantly."
              },
              {
                q: "Can I split expenses unequally?",
                a: "Yes. Choose from: equal split (everyone pays the same), percentage split (60-40, 50-30-20, or any ratio), or custom amounts (exact amounts per person)."
              },
              {
                q: "What if someone shouldn't be included in a particular expense?",
                a: "When adding the expense, simply uncheck that member from the split. They won't be charged for that item."
              },
              {
                q: "Can I edit an expense after adding it?",
                a: "Yes. Tap the expense, hit edit, and change the amount, description, or split. Balances recalculate automatically."
              },
              {
                q: "What if someone forgets to log an expense?",
                a: "No problem. Expenses can be added anytime — even days later. The app will adjust all balances accordingly."
              },
              {
                q: "Can I add an expense from a previous month?",
                a: "Yes. When adding an expense, you can change the date to backdate it to the correct cycle. It'll reflect in that month's calculations."
              },
              {
                q: "How do I see who owes whom at month end?",
                a: "Go to \"Settlement\" at the end of your cycle. The app shows a clear summary: \"Amit owes Priya $250\" — simple, direct, no confusion."
              },
              {
                q: "How do we settle up?",
                a: "Pay your roommate directly (cash, UPI, bank transfer — your choice). Then mark it as \"Settled\" in the app. The balance clears."
              },
              {
                q: "What if someone doesn't pay their share?",
                a: "The app tracks unsettled amounts. They carry forward as a reminder, but you'll need to handle the actual collection yourself — we're not a payment enforcer, just the accountant."
              },
              {
                q: "Can I view previous months?",
                a: "Absolutely. Swipe or tap to view any past cycle — all expenses, splits, and settlements are preserved."
              },
              {
                q: "What happens to unsettled balances from last month?",
                a: "You have two options: carry forward to the new month, or mark as settled (if you agreed to let it go)."
              },
              {
                q: "Can I have multiple Monthly Recurring Books?",
                a: "Yes. One for your flat, one for weekend trip friends, one for office lunch gang — create as many as you need."
              },
              {
                q: "Does the app connect to our bank accounts?",
                a: "No. Everything is manual. You log what was paid, the app calculates the split. No bank access, no UPI linking, no privacy concerns."
              },
              {
                q: "Is my expense data private?",
                a: "Only members of the book can see its contents. Your data is encrypted and never shared or sold. What happens in your shared book stays there."
              },
              {
                q: "Does it work offline?",
                a: "Yes. Add expenses without internet. They'll sync with other members once you're back online."
              },
              {
                q: "Can I export expense data?",
                a: "Yes. Export your book's data to Excel or PDF — useful for record-keeping or resolving disputes."
              },
              {
                q: "What if there's a disagreement about an expense?",
                a: "Every entry shows who added it, when, and how it was split. Use that as your source of truth. Transparency solves most disputes."
              },
              {
                q: "Can I delete the entire book?",
                a: "Only the creator can delete the book. Once deleted, all expense history is permanently removed for all members."
              },
              {
                q: "Can I leave a book without deleting it?",
                a: "Yes. Settle your balance first, then leave. The book continues for remaining members."
              },
              {
                q: "Is Monthly Recurring Book free?",
                a: "Yes, core features are free. Pro unlocks unlimited members, advanced analytics, and priority support."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="bg-coca-gray-light rounded-xl p-6"
              >
                <h3 className="font-bold text-foreground mb-2">{item.q}</h3>
                <p className="text-muted-foreground text-sm">{item.a}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-primary/10 rounded-xl flex flex-col justify-center"
            >
              <h3 className="font-bold text-foreground mb-2">Still have questions?</h3>
              <p className="text-muted-foreground text-sm">
                Write to us at <a href="mailto:support@tryzedger.com" className="text-primary underline">support@tryzedger.com</a> — we&apos;re here to help.
              </p>
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
              Stop Chasing. Start Tracking.
            </h2>
            <p className="text-primary-foreground/80 mb-2">
              The average person spends 3 hours a month sorting out shared expenses. That&apos;s 36 hours a year — gone.
            </p>
            <p className="text-primary-foreground font-medium mb-8">
              Take it back.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
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
            <p className="text-primary-foreground/60 text-sm">
              Join thousands of roommates and flatmates who stopped arguing about money.
            </p>
          </motion.div>
        </div>
      </section>

    </>
  );
};

export default MonthlyRecurringBookContent;
