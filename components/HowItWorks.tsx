"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  { title: "Set up your branches", body: "Create your gym group, add each location, and invite your team." },
  { title: "Add members & plans", body: "Build your membership plans once, then assign them as members join or renew." },
  { title: "Staff run daily ops", body: "Front desk logs attendance and payments; trainers manage their member list." },
  { title: "Owner sees everything", body: "Revenue, retention, and branch performance roll up automatically — no spreadsheets." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          eyebrow="How It Works"
          title="Live in an afternoon, not a quarter."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-9">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
              className="relative px-5.5 lg:px-0 lg:pr-5.5 first:pl-0"
            >
              {i < steps.length - 1 && (
                <span className="hidden lg:block absolute top-[23px] right-0 w-5 h-0.5 bg-gray-300" />
              )}
              <div className="w-[46px] h-[46px] rounded-full bg-ink text-accent flex items-center justify-center font-display font-bold text-[17px] mb-4.5">
                {i + 1}
              </div>
              <h4 className="text-base mb-2">{step.title}</h4>
              <p className="text-sm text-ui-muted">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
