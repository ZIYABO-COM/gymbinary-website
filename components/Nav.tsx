"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "#modules", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#benefits", label: "Solutions" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink/85 backdrop-blur-md border-b border-charcoal-border">
      <div className="max-w-content mx-auto px-6 py-3.5 flex items-center justify-between gap-6">
        <Link href="#" className="flex items-center gap-2.5">
          <Image src="/assets/gym-binary-logo.png" alt="Gym Binary logo" width={38} height={38} className="rounded-lg" />
          <span className="font-display font-bold text-white text-lg tracking-tight">
            Gym Binary
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-gray-300 hover:text-white text-[14.5px] font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-gray-300 hover:text-white text-[14.5px] font-medium px-1.5 py-2.5">
            Log In
          </a>
          <a
            href="#demo"
            className="inline-flex items-center rounded-full border border-white/25 text-white hover:border-white px-4.5 py-2.5 text-sm font-semibold transition-colors"
          >
            Book Demo
          </a>
          <a
            href="/?intent=trial#demo"
            className="inline-flex items-center rounded-full bg-accent text-ink px-4.5 py-2.5 text-sm font-semibold hover:-translate-y-0.5 transition-transform"
          >
            Start Free Trial
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className={`block w-5 h-0.5 bg-white transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span className={`block w-5 h-0.5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`block w-5 h-0.5 bg-white transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden overflow-hidden border-t border-charcoal-border"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-300 hover:text-white text-[15px] font-medium"
                >
                  {l.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-2">
                <a
                  href="#demo"
                  onClick={() => setOpen(false)}
                  className="inline-flex justify-center rounded-full border border-white/25 text-white px-4.5 py-2.5 text-sm font-semibold"
                >
                  Book Demo
                </a>
                <a
                  href="/?intent=trial#demo"
                  onClick={() => setOpen(false)}
                  className="inline-flex justify-center rounded-full bg-accent text-ink px-4.5 py-2.5 text-sm font-semibold"
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
