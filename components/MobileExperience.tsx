"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const roles = [
  {
    tag: "Trainer",
    title: "Manage members on the floor",
    items: ["Member directory & QR check-in", "Add leads and follow-ups", "Assign plans, log expenses"],
  },
  {
    tag: "Owner",
    title: "See the whole business",
    items: ["Revenue & branch performance", "Staff overview across locations", "Executive reports & KPIs"],
  },
  {
    tag: "Member",
    title: "Self-serve from their phone",
    items: ["Attendance & subscription status", "Health metrics & profile", "Notifications & plan details"],
  },
];

export default function MobileExperience() {
  return (
    <section className="py-24 bg-ink text-white">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          eyebrow="Mobile Experience"
          title="One app. Five roles. No separate builds."
          subtitle="After login, Gym Binary routes each person to the dashboard built for their role — Trainers, Admins, Owners, Members, and Front Desk all share the same app."
          dark
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5.5">
          {roles.map((role, i) => (
            <motion.div
              key={role.tag}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1, ease: "easeOut" }}
              className="bg-charcoal border border-charcoal-border rounded-lg p-7"
            >
              <span className="inline-block text-[10px] font-semibold text-accent bg-accent/[0.15] px-2 py-0.5 rounded-full mb-3.5">
                {role.tag}
              </span>
              <h4 className="text-[17px] text-white mb-2.5">{role.title}</h4>
              <ul>
                {role.items.map((item) => (
                  <li key={item} className="text-[13.5px] text-gray-300 py-1.5 pl-4.5 relative">
                    <span className="absolute left-0 text-accent font-bold">✓</span>
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
