"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const items = [
  {
    title: "True multi-branch",
    body: "One tenant, many branches — each with its own staff, members, and settings, rolled up for the owner.",
  },
  {
    title: "Role-based access",
    body: "Owner, Admin, Trainer, Front Desk, and Member each see exactly what they need — nothing more.",
  },
  {
    title: "Real cost tracking",
    body: "Payments, balances, and expenses are recalculated from source records — never stale numbers.",
  },
  {
    title: "WhatsApp renewals",
    body: "One-tap WhatsApp links for every member expiring soon — no API fees, no approval wait.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          eyebrow="Why Gym Binary"
          title="Built for gyms that outgrew a spreadsheet."
          subtitle="Every feature below exists in the product today — no vaporware, no “coming soon” filler."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5.5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
              className="bg-gray-50 border border-gray-200 rounded-lg p-7"
            >
              <div className="w-[46px] h-[46px] rounded-xl bg-ink text-accent flex items-center justify-center text-xl mb-4.5">
                ◆
              </div>
              <h3 className="text-lg mb-2.5">{item.title}</h3>
              <p className="text-[14.5px] text-ui-muted">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
