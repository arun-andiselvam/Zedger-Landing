'use client';

import { motion } from "framer-motion";
import { Wallet, ArrowLeftRight, Users, RefreshCw, Shield, Check, X } from "lucide-react";
import Link from "next/link";

const FamilyBookContent = () => {
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
              The Money Conversations Nobody Wants to Have
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "\"Who paid the electricity bill last month?\"",
              "\"Did you reimburse mom for groceries?\"",
              "\"Why is the joint account empty again?\""
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
            className="text-center text-muted-foreground mt-8"
          >
            Sound familiar? You&apos;re not alone. These conversations create friction in even the closest families.
          </motion.p>
        </div>
      </section>

      {/* How It Works Section */}
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
              One Book. Every Penny. Zero Arguments.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A shared ledger from <Link href="/" className="text-primary underline underline-offset-2 hover:text-primary/80">Zedger</Link> your whole family can trust
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Add",
                description: "Log income, expenses, and transfers in seconds. No complicated categories — just the essentials."
              },
              {
                step: "2",
                title: "Track",
                description: "See Cash vs Bank balances at a glance. Always know where your money actually is."
              },
              {
                step: "3",
                title: "Share",
                description: "Family members see the same truth. No more conflicting records or memory arguments."
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Built for How Families Actually Manage Money
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: Wallet,
                title: "Dual Balance (Cash + Bank)",
                description: "Track physical cash AND digital payments separately. Because families juggle both."
              },
              {
                icon: ArrowLeftRight,
                title: "Transfer Tracking",
                description: "Record money moving between family members. No more \"I sent you last week\" confusion."
              },
              {
                icon: Users,
                title: "Multi-Member View",
                description: "Everyone sees who contributed what. Transparency builds trust."
              },
              {
                icon: RefreshCw,
                title: "Real-time Sync",
                description: "Every entry updates instantly for all members. No refresh needed — everyone sees the same truth."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-6 rounded-2xl bg-coca-gray-light"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Section */}
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
              Real Families. Real Peace of Mind.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "The Joint Household",
                story: "My parents, my wife, and I live together. Before Zedger, we had a WhatsApp group full of screenshots. Now we have one shared ledger app — and zero confusion.",
                author: "Rahul, Mumbai"
              },
              {
                title: "The Long-Distance Family",
                story: "I send money to my parents monthly. They log expenses. I can see they're doing well without awkward 'did you receive it?' calls.",
                author: "Priya, Singapore"
              },
              {
                title: "The Newlyweds",
                story: "We merged our finances but kept fighting about 'where did the money go?' This app saved our first year of marriage.",
                author: "Amit & Sneha, Bangalore"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">&ldquo;{item.story}&rdquo;</p>
                <p className="text-sm font-medium text-primary">— {item.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Your Family&apos;s Finances Stay Your Family&apos;s
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              "No bank linking required",
              "No OTP or UPI access needed",
              "Manual entry = complete control",
              "Data encrypted, never sold"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 bg-coca-gray-light rounded-xl"
              >
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
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
              Not a Budget App. Not a Banking App.
            </h2>
            <p className="text-muted-foreground">
              <Link href="/" className="text-primary underline underline-offset-2 hover:text-primary/80">Zedger</Link> is a shared ledger app — a different category entirely.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm"
          >
            <div className="grid grid-cols-2">
              <div className="p-4 bg-gray-100 font-semibold text-foreground text-center">Others</div>
              <div className="p-4 bg-primary font-semibold text-primary-foreground text-center">Zedger Family Book</div>
            </div>
            {[
              { others: "Track YOUR money", zedger: "Track FAMILY money together" },
              { others: "Complex categories", zedger: "Simple: Income, Expense, Transfer" },
              { others: "Needs bank sync", zedger: "Manual entry, complete control" },
              { others: "Individual use", zedger: "Built for shared households" }
            ].map((row, index) => (
              <div key={index} className="grid grid-cols-2 border-t border-gray-100">
                <div className="p-4 flex items-center gap-2 text-muted-foreground">
                  <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span className="text-sm">{row.others}</span>
                </div>
                <div className="p-4 flex items-center gap-2 bg-primary/5">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-foreground">{row.zedger}</span>
                </div>
              </div>
            ))}
          </motion.div>
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
                q: "What exactly is a Family Book?",
                a: "Think of it as a digital version of that old notebook families used to keep for household accounts. It's a shared space where family members can log income, expenses, and transfers — and everyone sees the same updated picture of the family finances."
              },
              {
                q: "How is this different from a personal expense tracker?",
                a: "Personal trackers are for your money. Family Book is for our money. Multiple family members can add entries, view balances, and track where the household money is going — together."
              },
              {
                q: "Who can see the entries I add?",
                a: "Everyone in the Family Book sees all entries. That's the point — complete transparency. If you need to track something private, create a separate personal book."
              },
              {
                q: "Can I track both cash and bank money separately?",
                a: "Yes. Every entry asks whether it was Cash or Bank. The app maintains two separate running balances so you always know how much is in hand versus in the account."
              },
              {
                q: "What's the difference between an Expense and a Transfer?",
                a: "Expense: Money that left the family (groceries, bills, rent). Transfer: Money that moved within the family (Dad gave Mom $500 for shopping, or moved cash to bank). Transfers don't reduce your total — they just shift money from one place or person to another."
              },
              {
                q: "Can I add income as well?",
                a: "Absolutely. Log salaries, rental income, cash gifts, or any money that comes into the household. Income increases your balance; expenses decrease it."
              },
              {
                q: "How do I add family members?",
                a: "Open your Family Book, go to Members, tap \"Add Member\", enter their phone number, and they'll receive an invite to join. Once they accept, they can view and add entries to the same book."
              },
              {
                q: "What if a family member doesn't have the app?",
                a: "They'll need to download Zedger to join the book. It's free and takes under a minute to set up."
              },
              {
                q: "Can children or elderly parents use this?",
                a: "Yes. The interface is simple — no financial jargon, no complex categories. If they can use WhatsApp, they can use this."
              },
              {
                q: "Is there a limit on how many members can join?",
                a: "Free accounts allow up to 5 members per book. For larger joint families, upgrade to Pro for unlimited members."
              },
              {
                q: "Can I have multiple Family Books?",
                a: "Yes. Some families keep one book for household expenses and another for a specific goal (like vacation savings or wedding fund). Create as many as you need."
              },
              {
                q: "What if someone accidentally adds a wrong entry?",
                a: "Any member can edit or delete entries they added. The book creator can edit or delete any entry."
              },
              {
                q: "Can I see who added which entry?",
                a: "Yes. Every entry shows the name of the person who logged it, along with the date and time."
              },
              {
                q: "Does the app automatically connect to our bank accounts?",
                a: "No. And that's intentional. Family Book is fully manual — you decide what to log. No bank linking, no OTP sharing, no privacy concerns."
              },
              {
                q: "Can I categorize expenses (groceries, bills, etc.)?",
                a: "Yes. You can add categories or tags to each expense for better organization and insights."
              },
              {
                q: "Can I see monthly or yearly reports?",
                a: "Yes. The app shows summaries by week, month, or custom date range — so you can see spending patterns over time."
              },
              {
                q: "What happens if I delete the Family Book?",
                a: "Only the creator can delete the book. Once deleted, all entries are permanently removed for all members. Make sure everyone agrees before deleting."
              },
              {
                q: "Can I leave a Family Book without deleting it?",
                a: "Yes. Members can leave anytime. The book continues for others. But once you leave, you lose access to all entries."
              },
              {
                q: "Is my family's financial data safe?",
                a: "Completely. Data is encrypted and stored securely. We don't sell, share, or analyze your financial information. What happens in your Family Book stays in your Family Book."
              },
              {
                q: "Can I export the data to Excel or PDF?",
                a: "Yes. Export your Family Book data anytime for record-keeping, tax purposes, or offline review."
              },
              {
                q: "Is Family Book free?",
                a: "Yes, the core features are free. Pro unlocks advanced features like unlimited members, detailed analytics, and priority support."
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
                Reach out to us at <a href="mailto:support@tryzedger.com" className="text-primary underline">support@tryzedger.com</a> — we usually respond within a few hours.
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
              Start Your Family&apos;s Financial Chapter
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Join 10,000+ families using <Link href="/" className="underline underline-offset-2 hover:text-primary-foreground">Zedger</Link> — the simplest shared ledger app
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
    </>
  );
};

export default FamilyBookContent;
