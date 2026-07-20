"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const features = [
  "All modules included",
  "Unlimited branches & staff",
  "WhatsApp renewal reminders",
];

const plans = [
  {
    name: "1-Month Plan",
    amount: "\u20B9499",
    unit: "/ mo",
    sub: "Billed monthly",
    extra: "Email support",
    featured: false,
  },
  {
    name: "3-Month Plan",
    amount: "\u20B91,299",
    unit: "total",
    sub: "\u2248 \u20B9433 / month, billed every 3 months",
    extra: "Email support",
    featured: false,
  },
  {
    name: "6-Month Plan",
    amount: "\u20B92,499",
    unit: "total",
    sub: "\u2248 \u20B9417 / month, billed every 6 months",
    extra: "Priority support",
    featured: true,
  },
  {
    name: "1-Year Plan",
    amount: "\u20B95,799",
    unit: "total",
    sub: "\u2248 \u20B9483 / month, billed annually",
    extra: "Priority support + onboarding call",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          eyebrow="Pricing"
          title="One flat plan. Pay for the commitment that suits you."
          subtitle="Every plan includes the full product — every module, every role, unlimited branches. Longer commitments simply cost less per month."
          center
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
              className={`relative flex flex-col rounded-lg p-7.5 ${
                plan.featured
                  ? "bg-ink text-white border border-ink shadow-med lg:scale-[1.03]"
                  : "bg-white border border-gray-200"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-ink text-xs font-bold px-3.5 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3
                className={`text-sm font-semibold uppercase tracking-wide mb-2.5 ${
                  plan.featured ? "text-gray-300" : "text-ui-muted-soft"
                }`}
              >
                {plan.name}
              </h3>
              <div className="font-display font-bold text-[32px] mb-1">
                {plan.amount}{" "}
                <span
                  className={`text-[15px] font-medium ${
                    plan.featured ? "text-gray-300" : "text-ui-muted-soft"
                  }`}
                >
                  {plan.unit}
                </span>
              </div>
              <div
                className={`text-[13px] mb-6 ${
                  plan.featured ? "text-gray-300" : "text-ui-muted-soft"
                }`}
              >
                {plan.sub}
              </div>
              <ul className="mb-7 flex-grow">
                {[...features, plan.extra].map((f) => (
                  <li
                    key={f}
                    className={`text-sm py-1.5 pl-5.5 relative ${
                      plan.featured ? "text-gray-100" : "text-ui-muted"
                    }`}
                  >
                    <span
                      className={`absolute left-0 font-bold ${
                        plan.featured ? "text-accent" : "text-accent-dark"
                      }`}
                    >
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                href={`/?intent=trial&plan=${encodeURIComponent(plan.name)}#demo`}
                variant={plan.featured ? "primary" : "outline-light"}
                block
              >
                Start Free Trial
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
