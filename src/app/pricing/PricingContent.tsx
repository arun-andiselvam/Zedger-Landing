'use client';

import { motion } from "framer-motion";
import { Check, X, Crown, Gem, Zap, Shield, Mail } from "lucide-react";
import Link from "next/link";

const PricingContent = () => {
  const tiers = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      annual: null,
      tagline: "Everything you need to get started",
      bestFor: "Individuals & small groups",
      badge: null,
      popular: false,
      cta: "Get Started",
      features: [
        { name: "All 4 book types", included: true },
        { name: "Books per account", value: "4" },
        { name: "Members per book", value: "10" },
        { name: "Expense entries", value: "Unlimited" },
        { name: "Expense history", value: "6 months" },
        { name: "Smart splitting", included: true },
        { name: "Offline mode", included: true },
        { name: "Basic reports", included: true },
        { name: "Data export", included: false },
        { name: "Multi-currency", included: false },
        { name: "Priority support", included: false },
        { name: "Ads", value: "Occasional" },
      ],
    },
    {
      name: "Pro",
      price: "$1",
      period: "/month",
      annual: "$8.99/year (save 25%)",
      tagline: "For families & groups who share regularly",
      bestFor: "Active families & roommates",
      badge: "crown",
      popular: true,
      cta: "Start Free Trial",
      features: [
        { name: "All 4 book types", included: true },
        { name: "Books per account", value: "20" },
        { name: "Members per book", value: "100" },
        { name: "Expense entries", value: "Unlimited" },
        { name: "Expense history", value: "Forever" },
        { name: "Smart splitting", included: true },
        { name: "Offline mode", included: true },
        { name: "Advanced reports", included: true },
        { name: "Data export", value: "CSV, PDF, Excel" },
        { name: "Multi-currency", included: true },
        { name: "Priority support", value: "24-hour response" },
        { name: "Ads", value: "None" },
      ],
    },
    {
      name: "VIP",
      price: "$1.99",
      period: "/month",
      annual: "$17.99/year (save 25%)",
      tagline: "For power users & large groups",
      bestFor: "Power users & large groups",
      badge: "diamond",
      popular: false,
      cta: "Start Free Trial",
      features: [
        { name: "All 4 book types", included: true },
        { name: "Books per account", value: "Unlimited" },
        { name: "Members per book", value: "Unlimited" },
        { name: "Expense entries", value: "Unlimited" },
        { name: "Expense history", value: "Forever" },
        { name: "Smart splitting", included: true },
        { name: "Offline mode", included: true },
        { name: "Advanced reports", included: true },
        { name: "Data export", value: "CSV, PDF, Excel, API" },
        { name: "Multi-currency", included: true },
        { name: "Priority support", value: "4-hour response" },
        { name: "Ads", value: "None" },
      ],
    },
  ];

  const proFeatures = [
    "Recurring Expenses: Auto-log monthly bills",
    "Custom Categories: Create your own expense categories",
    "Insights Dashboard: Detailed spending analytics",
    "Budget Alerts: Get notified when spending exceeds limits",
    "Multiple Admins: Share book admin rights with others",
    "Expense Templates: Save frequent expenses for quick entry",
    "Attachment Storage: 1 GB for receipts and bills",
  ];

  const vipFeatures = [
    "Unlimited Books: Create as many as you need",
    "Unlimited Members: No cap on group size",
    "API Access: Integrate with your own tools/spreadsheets",
    "White-Label Exports: Remove Zedger branding from reports",
    "Dedicated Account Manager: For onboarding and support",
    "Early Access: Try new features before public release",
    "Bulk Import: Import expenses from spreadsheets or other apps",
    "Audit Log: Complete history of all actions",
    "Custom Reports: Request specific report formats",
    "Attachment Storage: 10 GB for receipts and bills",
    "Team Workspaces: Organize multiple books under one workspace",
  ];

  const comparisonCategories = [
    {
      title: "Book & Member Limits",
      features: [
        { name: "Total books", free: "4", pro: "20", vip: "Unlimited" },
        { name: "Members per book", free: "10", pro: "100", vip: "Unlimited" },
        { name: "Pending invites", free: "5", pro: "20", vip: "Unlimited" },
      ],
    },
    {
      title: "Expense Features",
      features: [
        { name: "Expense entries", free: "Unlimited", pro: "Unlimited", vip: "Unlimited" },
        { name: "Expense history", free: "6 months", pro: "Forever", vip: "Forever" },
        { name: "Split options", free: "All", pro: "All", vip: "All" },
        { name: "Recurring expenses", free: false, pro: true, vip: true },
        { name: "Expense templates", free: false, pro: true, vip: true },
        { name: "Bulk import", free: false, pro: false, vip: true },
      ],
    },
    {
      title: "Reports & Insights",
      features: [
        { name: "Basic summary", free: true, pro: true, vip: true },
        { name: "Category breakdown", free: true, pro: true, vip: true },
        { name: "Trend analysis", free: false, pro: true, vip: true },
        { name: "Member insights", free: false, pro: true, vip: true },
        { name: "Custom date ranges", free: false, pro: true, vip: true },
        { name: "Budget tracking", free: false, pro: true, vip: true },
        { name: "Custom reports", free: false, pro: false, vip: true },
      ],
    },
    {
      title: "Export Options",
      features: [
        { name: "CSV export", free: false, pro: true, vip: true },
        { name: "PDF export", free: false, pro: true, vip: true },
        { name: "Excel export", free: false, pro: true, vip: true },
        { name: "API access", free: false, pro: false, vip: true },
        { name: "White-label exports", free: false, pro: false, vip: true },
      ],
    },
    {
      title: "Storage & Attachments",
      features: [
        { name: "Receipt attachments", free: "5 per book", pro: "Unlimited", vip: "Unlimited" },
        { name: "Storage space", free: "100 MB", pro: "1 GB", vip: "10 GB" },
      ],
    },
    {
      title: "Support",
      features: [
        { name: "Help center access", free: true, pro: true, vip: true },
        { name: "Email support", free: true, pro: true, vip: true },
        { name: "Response time", free: "72 hours", pro: "24 hours", vip: "4 hours" },
        { name: "Chat support", free: false, pro: true, vip: true },
        { name: "Dedicated manager", free: false, pro: false, vip: true },
        { name: "Onboarding call", free: false, pro: false, vip: true },
      ],
    },
  ];

  const faqs = [
    {
      q: "Can I try Pro before paying?",
      a: "Yes. Start a 7-day free trial of Pro — no card required. Downgrade anytime.",
    },
    {
      q: "What happens when my trial ends?",
      a: "You'll be moved to the Free tier. Your data stays safe. You just lose access to Pro features until you subscribe.",
    },
    {
      q: "What happens if I downgrade from Pro to Free?",
      a: "Books beyond the limit become view-only. Members beyond 5 per book can still view but can't add expenses. History older than 6 months becomes archived. No data is deleted.",
    },
    {
      q: "Can I upgrade mid-month?",
      a: "Yes. You'll be charged the full monthly price immediately, and your billing cycle starts that day.",
    },
    {
      q: "Can I downgrade mid-month?",
      a: "Yes. You'll retain Pro access until your current billing period ends, then switch to Free.",
    },
    {
      q: "Is there a refund policy?",
      a: "Refunds are handled through Google Play or App Store based on their respective policies. Contact us if you need assistance.",
    },
    {
      q: "Do you offer student discounts?",
      a: "Yes. Students with a valid .edu email get 50% off Pro. Email support@tryzedger.com with proof.",
    },
    {
      q: "Do you offer discounts for NGOs?",
      a: "Yes. Registered non-profits get 50% off any tier. Contact us with your registration details.",
    },
    {
      q: "Can I pay annually?",
      a: "Yes. Save 25% with annual billing: Pro at $8.99/year (vs $12 monthly), VIP at $17.99/year (vs $23.88 monthly).",
    },
    {
      q: "What payment methods do you accept?",
      a: "All payments are processed securely through Google Play or App Store in-app purchases.",
    },
    {
      q: "Is my payment secure?",
      a: "Yes. All payments are processed through Google Play or App Store with bank-level encryption. We never store your payment details.",
    },
    {
      q: "What if I need more than VIP offers?",
      a: "Contact us for Enterprise pricing. We offer custom solutions for large organizations, housing societies, and businesses.",
    },
  ];

  return (
    <>
      {/* Philosophy Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-lg text-muted-foreground">
              No hidden fees. No surprise charges. No &quot;contact sales&quot; games.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-16 bg-coca-gray-light">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl p-8 ${
                  tier.popular ? "ring-2 ring-primary shadow-xl" : "shadow-sm"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-foreground">{tier.name}</h3>
                    {tier.badge === "crown" && <Crown className="w-6 h-6 text-yellow-500" />}
                    {tier.badge === "diamond" && <Gem className="w-6 h-6 text-blue-500" />}
                  </div>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    <span className="text-muted-foreground">{tier.period}</span>
                  </div>
                  {tier.annual && (
                    <p className="text-sm text-primary font-medium">{tier.annual}</p>
                  )}
                  <p className="text-sm text-muted-foreground mt-2">{tier.tagline}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      {feature.included === true ? (
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      ) : feature.included === false ? (
                        <X className="w-5 h-5 text-gray-300 flex-shrink-0" />
                      ) : (
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      )}
                      <span className="text-sm text-foreground">
                        {feature.name}
                        {feature.value && (
                          <span className="text-muted-foreground ml-1">({feature.value})</span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Secure in-app purchases</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span>Cancel anytime</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pro Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Crown className="w-8 h-8 text-yellow-500" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Pro Features
              </h2>
            </div>
            <p className="text-muted-foreground">Everything in Free, plus these powerful additions</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {proFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 bg-coca-gray-light rounded-xl"
              >
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* Pro testimonials */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              "\"I have 8 people in my flat. Free tier's 5-member limit wasn't enough.\"",
              "\"I wanted to see last year's expenses for tax filing. Pro's unlimited history saved me.\"",
              "\"The analytics helped me realize we were overspending on food delivery. Worth every penny of the $1/month.\"",
            ].map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary/5 rounded-xl p-6 border border-primary/10"
              >
                <p className="text-sm text-foreground italic">{quote}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Features Section */}
      <section className="py-20 bg-coca-gray-light">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Gem className="w-8 h-8 text-blue-500" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                VIP Features
              </h2>
            </div>
            <p className="text-muted-foreground">Everything in Pro, plus these exclusive additions</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {vipFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 bg-white rounded-xl"
              >
                <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* VIP testimonials */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              "\"I manage expenses for a 40-flat apartment society. VIP's unlimited members was essential.\"",
              "\"I run 12 different collections for various community events. Needed unlimited books.\"",
              "\"The API access lets me auto-sync with my Google Sheets. Game changer for my workflow.\"",
            ].map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-blue-50 rounded-xl p-6 border border-blue-100"
              >
                <p className="text-sm text-foreground italic">{quote}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Section */}
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
              Detailed Feature Comparison
            </h2>
            <p className="text-muted-foreground">See exactly what you get with each plan</p>
          </motion.div>

          <div className="space-y-8">
            {comparisonCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">{category.title}</h3>
                <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
                  <div className="bg-coca-gray-light rounded-xl overflow-hidden min-w-[500px]">
                    <div className="grid grid-cols-4 bg-gray-100 border-b border-gray-200">
                      <div className="p-3 md:p-4 font-medium text-foreground text-sm">Feature</div>
                      <div className="p-3 md:p-4 font-medium text-foreground text-center text-sm">Free</div>
                      <div className="p-3 md:p-4 font-medium text-primary text-center flex items-center justify-center gap-1 text-sm">
                        Pro <Crown className="w-4 h-4 text-yellow-500" />
                      </div>
                      <div className="p-3 md:p-4 font-medium text-blue-600 text-center flex items-center justify-center gap-1 text-sm">
                        VIP <Gem className="w-4 h-4 text-blue-500" />
                      </div>
                    </div>
                    {category.features.map((feature, index) => (
                      <div key={index} className="grid grid-cols-4 border-b border-gray-100 last:border-b-0">
                        <div className="p-3 md:p-4 text-sm text-foreground">{feature.name}</div>
                        <div className="p-3 md:p-4 text-center">
                          {typeof feature.free === "boolean" ? (
                            feature.free ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-300 mx-auto" />
                            )
                          ) : (
                            <span className="text-xs md:text-sm text-muted-foreground">{feature.free}</span>
                          )}
                        </div>
                        <div className="p-3 md:p-4 text-center">
                          {typeof feature.pro === "boolean" ? (
                            feature.pro ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-300 mx-auto" />
                            )
                          ) : (
                            <span className="text-xs md:text-sm text-foreground">{feature.pro}</span>
                          )}
                        </div>
                        <div className="p-3 md:p-4 text-center">
                          {typeof feature.vip === "boolean" ? (
                            feature.vip ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-300 mx-auto" />
                            )
                          ) : (
                            <span className="text-xs md:text-sm text-foreground font-medium">{feature.vip}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-20 bg-coca-gray-light">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Enterprise / Custom Plans
            </h2>
            <p className="text-muted-foreground mb-6">
              For housing societies, large organizations, and businesses
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 text-left">
              {[
                "Custom member and book limits",
                "Dedicated server instance",
                "Custom branding options",
                "On-premise deployment (optional)",
                "SLA with uptime guarantees",
                "Training and onboarding",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="mailto:sales@tryzedger.com"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-3 rounded-full font-medium hover:bg-foreground/90 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Contact Sales
            </a>
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
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="bg-coca-gray-light rounded-xl p-6"
              >
                <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Join thousands of families and groups who trust <Link href="/" className="underline underline-offset-2 hover:text-primary-foreground">Zedger</Link> for their shared expenses
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

export default PricingContent;
