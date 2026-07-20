"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function FinalCta() {
  return (
    <section
      className="py-24 text-center bg-ink text-white"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at center, rgba(250,204,21,0.10), transparent 60%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-content mx-auto px-6"
      >
        <h2 className="text-[clamp(30px,4vw,42px)] mb-4">
          Ready to run your gym from one dashboard?
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          Book a 20-minute demo or start your free trial today — no credit
          card required.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <Button href="#demo" variant="primary">Book a Demo</Button>
          <Button href="/?intent=trial#demo" variant="outline-dark">Start Free Trial</Button>
        </div>
      </motion.div>
    </section>
  );
}
