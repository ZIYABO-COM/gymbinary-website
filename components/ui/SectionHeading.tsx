"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
  dark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  dark = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`max-w-xl mb-14 ${center ? "mx-auto text-center" : ""}`}
    >
      <span
        className={`inline-block text-[13px] font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4 ${
          dark ? "text-accent bg-accent/10" : "text-accent-dark bg-accent/[0.14]"
        }`}
      >
        {eyebrow}
      </span>
      <h2 className={`text-[clamp(28px,4vw,40px)] mb-3.5 ${dark ? "text-white" : ""}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-[17px] ${dark ? "text-gray-300" : "text-ui-muted"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
