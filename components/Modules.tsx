"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const modules = [
  {
    title: "Member Management",
    body: "Profiles, health metrics, emergency contacts, subscription history, and payment records in one place.",
    tag: "Core",
  },
  {
    title: "Leads & CRM",
    body: "Capture walk-ins and inquiries, track follow-ups, and see today's leads at a glance.",
    tag: "Growth",
  },
  {
    title: "Attendance",
    body: "Log check-ins per member and branch, and spot drop-off before it becomes a churned member.",
    tag: "Core",
  },
  {
    title: "Plans & Subscriptions",
    body: "Build your own plan groups — 3-month, 6-month, annual — and assign or renew in a few taps.",
    tag: "Core",
  },
  {
    title: "Payments & Balances",
    body: "Record cash, UPI, or card payments and let the system recalculate every member's balance automatically.",
    tag: "Billing",
  },
  {
    title: "Expenses",
    body: "Log daily branch expenses alongside revenue for a true picture of what each location actually earns.",
    tag: "Finance",
  },
  {
    title: "Staff & Trainer Allocation",
    body: "Add staff, assign trainers to branches, and control exactly what each role can see and do.",
    tag: "Ops",
  },
  {
    title: "Reports & Revenue Analytics",
    body: "Owner-level dashboards for revenue, branch performance, and business KPIs — updated in real time.",
    tag: "Insights",
  },
];

export default function Modules() {
  return (
    <section id="modules" className="py-24 bg-gray-50">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          eyebrow="Core Modules"
          title="Everything your front desk, trainers, and owners actually use."
          center
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5.5">
          {modules.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.07, ease: "easeOut" }}
              className="bg-white border border-gray-200 rounded-lg p-7 hover:shadow-soft hover:-translate-y-1 transition-all"
            >
              <div className="w-[46px] h-[46px] rounded-xl bg-accent/[0.15] text-accent-dark flex items-center justify-center text-xl mb-4.5">
                ●
              </div>
              <h3 className="text-[17px] mb-2">{m.title}</h3>
              <p className="text-sm text-ui-muted">{m.body}</p>
              <span className="inline-block mt-3.5 text-[11.5px] font-semibold text-ui-muted-soft bg-gray-100 px-2.5 py-1 rounded-full">
                {m.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
