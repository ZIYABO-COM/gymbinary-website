"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const groups = [
  {
    title: "Gym Owners",
    items: [
      "Full visibility across every branch",
      "Real revenue, expense & balance data",
      "Monitor subscriptions & retention",
      "Executive-level reports on demand",
    ],
  },
  {
    title: "Trainers & Front Desk",
    items: [
      "Fast member add & plan assignment",
      "Daily dashboard: expiring members, leads",
      "QR-based attendance logging",
      "WhatsApp reminders in one tap",
    ],
  },
  {
    title: "Members",
    items: [
      "Check subscription status anytime",
      "View attendance & health metrics",
      "Get renewal reminders before expiry",
      "Update their own profile",
    ],
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-gray-50">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          eyebrow="Built For Everyone On Your Team"
          title="Different roles. One shared source of truth."
          center
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5.5">
          {groups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1, ease: "easeOut" }}
              className="bg-white border border-gray-200 rounded-lg p-7.5"
            >
              <h3 className="text-[19px] mb-4 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                {group.title}
              </h3>
              <ul>
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-[14.5px] text-ui-muted py-1.5 border-b border-dashed border-gray-200 last:border-none"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
