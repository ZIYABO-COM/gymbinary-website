"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import PhoneMockup from "@/components/PhoneMockup";

const stats = [
  { value: "5", label: "Role-based dashboards" },
  { value: "Multi", label: "Branch support, one login" },
  { value: "Zero-cost", label: "WhatsApp renewal reminders" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white pt-28 pb-24">
      <div
        className="absolute inset-0 bg-dot-grid pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(250,204,21,0.10), transparent 55%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-content mx-auto px-6 grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block text-[13px] font-semibold uppercase tracking-widest text-accent bg-accent/10 px-3.5 py-1.5 rounded-full mb-4.5">
            Multi-branch gym management
          </span>
          <h1 className="text-[clamp(36px,5vw,56px)] mb-5">
            Run every branch, member, and trainer from{" "}
            <span className="text-accent">one dashboard.</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-[520px] mb-8">
            Gym Binary replaces spreadsheets and WhatsApp chaos with one
            system for members, leads, attendance, plans, and billing — built
            for gyms with more than one location.
          </p>
          <div className="flex flex-wrap gap-3.5 mb-11">
            <Button href="#demo" variant="primary">Book a Demo</Button>
            <Button href="/?intent=trial#demo" variant="outline-dark">Start Free Trial</Button>
          </div>
          <div className="flex flex-wrap gap-9">
            {stats.map((s) => (
              <div key={s.label}>
                <strong className="block font-display text-2xl text-accent">
                  {s.value}
                </strong>
                <span className="text-[13px] text-gray-300">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  );
}
