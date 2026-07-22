This file is a merged representation of the entire codebase, combined into a single document by Repomix.

<file_summary>
This section contains a summary of this file.

<purpose>
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.
</purpose>

<file_format>
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  - File path as an attribute
  - Full contents of the file
</file_format>

<usage_guidelines>
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.
</usage_guidelines>

<notes>
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)
</notes>

</file_summary>

<directory_structure>
.github/
  workflows/
    deploy.yml
app/
  api/
    demo/
      route.ts
  globals.css
  layout.tsx
  page.tsx
components/
  ui/
    Button.tsx
    SectionHeading.tsx
  Benefits.tsx
  DemoBooking.tsx
  Faq.tsx
  FinalCta.tsx
  Footer.tsx
  Hero.tsx
  HowItWorks.tsx
  MobileExperience.tsx
  Modules.tsx
  Nav.tsx
  PhoneMockup.tsx
  Pricing.tsx
  WhyChooseUs.tsx
public/
  assets/
    gym-binary-logo.png
    gym-binary-logo1.png
.gitignore
next-env.d.ts
next.config.mjs
package.json
postcss.config.mjs
README.md
tailwind.config.ts
tsconfig.json
</directory_structure>

<files>
This section contains the contents of the repository's files.

<file path=".github/workflows/deploy.yml">
name: Deploy GymBinary Website

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Deploy to Oracle VM
        uses: appleboy/ssh-action@v1.2.0
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          key: ${{ secrets.SSH_KEY }}
          script: |
            cd /home/opc/GymBrain/gymbinary-website

            echo "Pulling latest code..."
            git pull origin main

            echo "Installing dependencies..."
            npm install

            echo "Building website..."
            npm run build

            echo "Restarting service..."
            sudo systemctl restart gymbinary-website

            echo "Deployment completed!"
</file>

<file path="app/globals.css">
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  @apply bg-white text-ui-text font-body antialiased;
}

h1, h2, h3, h4 {
  @apply font-display font-semibold tracking-tight;
  line-height: 1.15;
}

/* Dotted background used behind the hero */
.bg-dot-grid {
  background-image: radial-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px);
  background-size: 26px 26px;
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.9), transparent 70%);
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.9), transparent 70%);
}

/* Native details/summary arrow, hidden so we can draw our own +/- */
details.faq-item summary::-webkit-details-marker {
  display: none;
}
details.faq-item summary::after {
  content: "+";
  font-size: 22px;
  font-weight: 400;
  color: #b88f0a;
}
details.faq-item[open] summary::after {
  content: "\2013";
}
</file>

<file path="app/layout.tsx">
import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gym Binary — Smarter Gym. Stronger You. | Gym Management Software",
  description:
    "Gym Binary is multi-branch gym management software for Indian gym owners — members, leads, attendance, plans, billing and WhatsApp renewal reminders in one dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
</file>

<file path="app/page.tsx">
import { Suspense } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Modules from "@/components/Modules";
import HowItWorks from "@/components/HowItWorks";
import MobileExperience from "@/components/MobileExperience";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import DemoBooking from "@/components/DemoBooking";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <WhyChooseUs />
      <Modules />
      <HowItWorks />
      <MobileExperience />
      <Benefits />
      <Pricing />
      <Suspense fallback={null}>
        <DemoBooking />
      </Suspense>
      <Faq />
      <FinalCta />
      <Footer />
    </>
  );
}
</file>

<file path="components/ui/Button.tsx">
import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "outline-dark" | "outline-light";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  block?: boolean;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent text-ink hover:shadow-[0_10px_24px_rgba(250,204,21,0.35)]",
  "outline-dark":
    "border border-white/25 text-white hover:border-white",
  "outline-light":
    "border border-gray-300 text-ui-text hover:border-ui-text",
};

export default function Button({
  href,
  children,
  variant = "primary",
  block = false,
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold transition-transform hover:-translate-y-0.5 ${
        variantClasses[variant]
      } ${block ? "w-full" : ""} ${className}`}
    >
      {children}
    </Link>
  );
}
</file>

<file path="components/ui/SectionHeading.tsx">
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
</file>

<file path="components/Benefits.tsx">
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
</file>

<file path="components/DemoBooking.tsx">
"use client";

import { useState, useEffect, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

type Status = "idle" | "loading" | "success" | "error";
type Intent = "demo" | "trial";

const timeSlots = [
  "Morning (9am–12pm)",
  "Afternoon (12pm–4pm)",
  "Evening (4pm–8pm)",
];

const copy: Record<Intent, { eyebrow: string; title: string; subtitle: string; cta: string }> = {
  demo: {
    eyebrow: "Book a Demo",
    title: "See Gym Binary running on your own plans and branches.",
    subtitle:
      "Tell us a bit about your gym and we'll get back to you within one business day to schedule a walkthrough.",
    cta: "Book My Demo",
  },
  trial: {
    eyebrow: "Start Free Trial",
    title: "Get Gym Binary set up for your gym — free to start.",
    subtitle:
      "Share a few details and we'll personally set up your account and send your login within one business day. No card required.",
    cta: "Start My Free Trial",
  },
};

export default function DemoBooking() {
  const searchParams = useSearchParams();
  const rawIntent = searchParams.get("intent");
  const intent: Intent = rawIntent === "trial" ? "trial" : "demo";
  const plan = searchParams.get("plan") ?? "";

  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [messageDefault, setMessageDefault] = useState("");

  useEffect(() => {
    if (intent === "trial" && plan) {
      setMessageDefault(`Interested in the ${plan} plan.`);
    } else {
      setMessageDefault("");
    }
  }, [intent, plan]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      intent,
      plan,
      name: data.get("name")?.toString() ?? "",
      gymName: data.get("gymName")?.toString() ?? "",
      email: data.get("email")?.toString() ?? "",
      phone: data.get("phone")?.toString() ?? "",
      country: data.get("country")?.toString() ?? "",
      preferredTime: data.get("preferredTime")?.toString() ?? "",
      message: data.get("message")?.toString() ?? "",
    };

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(json.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Network error — please check your connection and try again.");
    }
  }

  const text = copy[intent];

  return (
    <section id="demo" className="py-24 bg-gray-50">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          eyebrow={text.eyebrow}
          title={text.title}
          subtitle={text.subtitle}
          center
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="max-w-[640px] mx-auto bg-white border border-gray-200 rounded-lg p-7.5"
        >
          {status === "success" ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 rounded-full bg-accent/15 text-accent-dark flex items-center justify-center text-2xl mx-auto mb-4">
                ✓
              </div>
              <h3 className="text-xl mb-2">Request sent</h3>
              <p className="text-ui-muted text-sm">
                {intent === "trial"
                  ? "Thanks — we'll set up your account and email your login within one business day."
                  : "Thanks — we've got your details and will reach out within one business day."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="hidden" name="intent" value={intent} />
              {plan && <input type="hidden" name="plan" value={plan} />}

              <Field label="Name" name="name" required />
              <Field label="Gym Name" name="gymName" required={intent === "trial"} />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" required />
              <Field label="Country" name="country" />

              {intent === "demo" ? (
                <div>
                  <label className="block text-sm font-medium mb-1.5" htmlFor="preferredTime">
                    Preferred Time
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    className="w-full border border-gray-300 rounded-md px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent-dark"
                  >
                    <option value="">Select a slot</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <Field label="Number of Branches" name="preferredTime" />
              )}

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-1.5" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  defaultValue={messageDefault}
                  key={messageDefault}
                  className="w-full border border-gray-300 rounded-md px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent-dark"
                  placeholder="Current tools you use, anything else we should know..."
                />
              </div>

              {status === "error" && (
                <p className="sm:col-span-2 text-sm text-red-600">{errorMsg}</p>
              )}

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center rounded-full bg-accent text-ink px-6 py-3.5 text-[15px] font-semibold hover:-translate-y-0.5 transition-transform disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {status === "loading" ? "Sending..." : text.cta}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5" htmlFor={name}>
        {label} {required && <span className="text-accent-dark">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border border-gray-300 rounded-md px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent-dark"
      />
    </div>
  );
}
</file>

<file path="components/Faq.tsx">
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    q: "Does Gym Binary support multiple branches?",
    a: "Yes — Gym Binary is built around gym groups with multiple branches from day one. Each branch keeps its own staff and members while the owner sees a rolled-up view across all locations.",
  },
  {
    q: "How does WhatsApp reminders work?",
    a: "Gym Binary generates a direct WhatsApp link for each member whose plan is expiring, so your front desk can send a reminder in one tap — no third-party API cost or approval process involved.",
  },
  {
    q: "Is online payment collection included?",
    a: "Gym Binary currently supports recording payments made by cash, UPI, or card, and automatically keeps every member's balance accurate. Direct online payment collection is on our roadmap.",
  },
  {
    q: "What roles does the software support?",
    a: "Owner, Admin, Trainer, Front Desk, and Member — each with a dashboard scoped to what they need. Admins manage staff and members without seeing financials; only Owners see full revenue data.",
  },
  {
    q: "Can I try Gym Binary before paying?",
    a: "Yes, every plan starts with a free trial so you can set up your branches and test the workflow with your own team before committing.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions gym owners ask us first."
          center
        />
        <div className="max-w-[760px] mx-auto">
          {faqs.map((item, i) => (
            <details
              key={item.q}
              className="faq-item bg-white border border-gray-200 rounded-md p-5 mb-3"
              open={i === 0}
            >
              <summary className="cursor-pointer font-semibold text-base list-none flex justify-between items-center">
                {item.q}
              </summary>
              <p className="mt-3.5 text-[14.5px] text-ui-muted leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
</file>

<file path="components/FinalCta.tsx">
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
</file>

<file path="components/Hero.tsx">
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
</file>

<file path="components/HowItWorks.tsx">
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
</file>

<file path="components/MobileExperience.tsx">
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
</file>

<file path="components/Modules.tsx">
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
</file>

<file path="components/PhoneMockup.tsx">
/**
 * TEMP placeholder: CSS-only dashboard mockup.
 * Once real app screenshots are ready, replace the contents of this file with:
 *
 *   <div className="w-[280px] mx-auto rounded-[36px] border-8 border-[#262626] p-4 shadow-med">
 *     <Image src="/assets/dashboard-screenshot.png" alt="Gym Binary dashboard" width={252} height={520} className="rounded-2xl" />
 *   </div>
 *
 * and drop the actual PNG/JPG into /public/assets/.
 */
export default function PhoneMockup() {
  return (
    <div className="w-[280px] mx-auto bg-ink-soft border-8 border-[#262626] rounded-[36px] shadow-med px-3.5 py-4 relative">
      <div className="w-[70px] h-[18px] bg-[#262626] rounded-full mx-auto mb-3.5" />

      <div className="bg-charcoal border border-charcoal-border rounded-2xl p-3.5 mb-2.5">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[11px] text-gray-300">Active Members</span>
          <span className="text-[10px] font-semibold text-accent bg-accent/15 px-2 py-0.5 rounded-full">
            Owner
          </span>
        </div>
        <div className="font-display font-bold text-xl text-white">1,248</div>
      </div>

      <div className="bg-charcoal border border-charcoal-border rounded-2xl p-3.5 mb-2.5">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[11px] text-gray-300">Expiring in 10 days</span>
          <span className="font-display font-bold text-xl text-accent">32</span>
        </div>
        <div className="h-1.5 bg-[#2b2b2b] rounded overflow-hidden">
          <div className="h-full bg-accent rounded" style={{ width: "62%" }} />
        </div>
      </div>

      <div className="bg-charcoal border border-charcoal-border rounded-2xl p-3.5">
        {[
          ["Today's Leads", "9"],
          ["Follow-ups Due", "4"],
          ["Today's Expenses", "\u20B92,150"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="flex justify-between text-xs text-gray-300 py-1.5 border-b border-charcoal-border last:border-none"
          >
            <span>{label}</span>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
</file>

<file path="components/Pricing.tsx">
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
</file>

<file path="components/WhyChooseUs.tsx">
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
</file>

<file path=".gitignore">
node_modules
.next
out
.env*.local
.DS_Store
*.log
</file>

<file path="next-env.d.ts">
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
</file>

<file path="next.config.mjs">
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
</file>

<file path="package.json">
{
  "name": "gym-binary-web",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.2.5",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "framer-motion": "^11.3.19",
    "resend": "^3.5.0"
  },
  "devDependencies": {
    "typescript": "^5.5.4",
    "@types/node": "^20.14.15",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.40",
    "tailwindcss": "^3.4.7"
  }
}
</file>

<file path="postcss.config.mjs">
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
</file>

<file path="README.md">
# Gym Binary — Marketing Site (Next.js)

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion conversion
of the approved HTML/CSS homepage prototype.

## Wiring up "Book a Demo" and "Start Free Trial"

Both buttons lead to the same form (`components/DemoBooking.tsx`, right after
Pricing) — but the copy, fields, and email adapt based on which one was
clicked:

- **Book a Demo** → `#demo` → form shows "Preferred Time" and demo-flavored copy.
- **Start Free Trial** → `/?intent=trial#demo` → form shows "Number of
  Branches" and trial-flavored copy. Clicking Start Free Trial from a specific
  pricing card also passes `&plan=6-Month%20Plan` etc., which pre-fills the
  message field.

Both submit to the same `app/api/demo/route.ts`, which emails you via
[Resend](https://resend.com) with the type (`Free Trial Request` vs `Demo
Request`) in the subject line, so you can filter/prioritize accordingly.

**Why it works this way today:** the BioSync backend has no self-service
signup — only a SuperAdmin-only endpoint (`POST /api/superadmin/tenants`)
creates new tenants. So "Start Free Trial" can't provision an account by
itself yet; it captures the lead so you can manually create their tenant and
email their login. If you build a self-serve signup endpoint later, swap the
`fetch("/api/demo", ...)` call in `DemoBooking.tsx` for a call to that
endpoint instead.

### Setup

```bash
npm install
cp .env.example .env.local   # fill in your Resend API key + notify email
npm run dev
```

Then open http://localhost:3000.

1. Sign up at resend.com (free tier is plenty to start).
2. Verify a sending domain — or skip that for local testing and use their
   shared `onboarding@resend.dev` sender, which only delivers to **your own**
   Resend account email.
3. Copy `.env.example` to `.env.local` and fill in:
   - `RESEND_API_KEY` — from the Resend dashboard
   - `DEMO_NOTIFY_EMAIL` — the inbox that should receive requests
   - `DEMO_FROM_EMAIL` — optional, must be on your verified domain
4. Deploy with those same env vars set in your host (Vercel: Project
   Settings → Environment Variables).

Every submission arrives as a plain email with reply-to set to the
requester's address, so you can just hit reply to respond.

**Prefer plain SMTP (e.g. your own mail server or Gmail) instead of Resend?**
Swap the body of `app/api/demo/route.ts` for `nodemailer`:

```bash
npm install nodemailer
```

```ts
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});

await transporter.sendMail({
  from: process.env.DEMO_FROM_EMAIL,
  to: process.env.DEMO_NOTIFY_EMAIL,
  replyTo: email,
  subject: `New demo request — ${gymName || name}`,
  text: "...",
});
```

## Log In

Left as a placeholder (`href="#"` in `components/Nav.tsx`) for now. There's
no web login in this codebase yet — the real `/api/auth/login` endpoint is
only consumed by the React Native/Expo mobile app. Two things worth fixing in
that endpoint before it's used more widely, unrelated to this website:
`AuthController.cs` compares passwords in plaintext (`user.PasswordHash !=
request.Password`, no actual hashing), and the JWT signing key is hardcoded
in source rather than pulled from configuration/secrets.

## Structure

```
app/
  layout.tsx       Root layout — fonts (Space Grotesk + Inter), metadata
  page.tsx         Assembles all homepage sections
  globals.css      Tailwind directives + a couple of base styles
components/
  Nav.tsx              Sticky nav, working mobile menu (real toggle, not CSS-only)
  Hero.tsx             Hero with entrance animation
  PhoneMockup.tsx      CSS-only dashboard mock — see the comment at the top of
                       the file for exactly how to swap in a real screenshot
  WhyChooseUs.tsx
  Modules.tsx
  HowItWorks.tsx
  MobileExperience.tsx
  Benefits.tsx
  Pricing.tsx          Current 4-tier plan: ₹499/mo, ₹1,299/3mo, ₹2,499/6mo, ₹5,799/yr
  DemoBooking.tsx      Real form → app/api/demo/route.ts → email via Resend
  Faq.tsx              Native <details>/<summary> accordion, no JS needed
  FinalCta.tsx
  Footer.tsx
  ui/Button.tsx
  ui/SectionHeading.tsx
public/assets/
  gym-binary-logo.png
```

## Swapping in real dashboard screenshots

Open `components/PhoneMockup.tsx` — the comment at the top shows the exact
replacement code. Drop your screenshot into `public/assets/` and point the
`<Image>` src at it.

## Notes carried over from the prototype

- Pricing is real (as of this build) but double-check before shipping —
  edit the `plans` array in `components/Pricing.tsx`.
- Testimonials / "Trusted By" logos are intentionally omitted until real
  ones are available.
- Colors, type, and spacing are defined as design tokens in
  `tailwind.config.ts` — extend them there rather than hardcoding new hex
  values in components.
</file>

<file path="tailwind.config.ts">
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        "ink-soft": "#151515",
        charcoal: "#1A1A1A",
        "charcoal-border": "#2E2E2E",
        accent: "#FACC15",
        "accent-dark": "#B88F0A",
        gray: {
          50: "#FAFAFA",
          100: "#F4F4F5",
          200: "#E4E4E7",
          300: "#D4D4D8",
        },
        ui: {
          text: "#18181B",
          muted: "#52525B",
          "muted-soft": "#71717A",
          success: "#16A34A",
          warning: "#B45309",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        lg: "20px",
        md: "14px",
        sm: "10px",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.06)",
        med: "0 20px 50px rgba(0,0,0,0.10)",
      },
      maxWidth: {
        content: "1200px",
      },
      spacing: {
        "4.5": "1.125rem",
        "5.5": "1.375rem",
        "7.5": "1.875rem",
      },
    },
  },
  plugins: [],
};

export default config;
</file>

<file path="app/api/demo/route.ts">
import { Resend } from "resend";

let resend: Resend | null = null;

if (process.env.RESEND_API_KEY) {
  resend = new Resend(process.env.RESEND_API_KEY);
}

interface DemoRequestBody {
  intent: "demo" | "trial";
  plan: string;
  name: string;
  gymName: string;
  email: string;
  phone: string;
  country: string;
  preferredTime: string;
  message: string;
}

export async function POST(req: Request) {
  let body: Partial<DemoRequestBody>;

  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const {
    intent,
    plan,
    name,
    gymName,
    email,
    phone,
    country,
    preferredTime,
    message,
  } = body;

if (!resend) {
    return Response.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }



  if (!name || !email || !phone) {
    return Response.json(
      { error: "Name, email, and phone are required." },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY || !process.env.DEMO_NOTIFY_EMAIL) {
    console.error(
      "Demo form: RESEND_API_KEY or DEMO_NOTIFY_EMAIL is not set. See .env.example."
    );
    return Response.json(
      { error: "Email is not configured on the server yet." },
      { status: 500 }
    );
  }

  const isTrial = intent === "trial";
  const label = isTrial ? "Free Trial Request" : "Demo Request";

  try {
    await resend.emails.send({
      from: process.env.DEMO_FROM_EMAIL || "Gym Binary <onboarding@resend.dev>",
      to: process.env.DEMO_NOTIFY_EMAIL,
      reply_to: email,
      subject: `New ${label.toLowerCase()} — ${gymName || name}`,
      text: [
        `Type: ${label}`,
        plan ? `Plan Interested In: ${plan}` : null,
        `Name: ${name}`,
        `Gym Name: ${gymName || "—"}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Country: ${country || "—"}`,
        isTrial
          ? `Number of Branches: ${preferredTime || "—"}`
          : `Preferred Time: ${preferredTime || "—"}`,
        "",
        "Message:",
        message || "—",
        "",
        isTrial
          ? "Next step: create this tenant via the SuperAdmin panel and email them their login."
          : "Next step: reach out to schedule the walkthrough.",
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Demo form: failed to send email", err);
    return Response.json(
      { error: "Something went wrong sending your request. Please try again." },
      { status: 500 }
    );
  }
}
</file>

<file path="components/Footer.tsx">
import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#modules" },
      { label: "Pricing", href: "#pricing" },
      { label: "How It Works", href: "#how-it-works" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Gym Owners", href: "#benefits" },
      { label: "Trainers", href: "#benefits" },
      { label: "Members", href: "#benefits" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Help Center", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink-soft text-gray-300 pt-16 pb-7.5 border-t border-charcoal-border">
      <div className="max-w-content mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-8 mb-12">
          <div>
            <Link href="#" className="flex items-center gap-3 mb-3.5">
              <Image
                src="/assets/gym-binary-logo.png"
                alt="Gym Binary logo"
                width={64}
                height={64}
                className="shrink-0"
              />
              <span className="flex flex-col leading-tight">
                <span className="font-display font-bold text-accent text-lg">Gym Binary</span>
                <span className="text-[10px] font-semibold text-white uppercase tracking-widest">
                  Smarter Gym. Stronger You.
                </span>
              </span>
            </Link>
            <p className="text-[13.5px] text-ui-muted-soft max-w-[260px]">
              Multi-branch gym management software for growing fitness
              businesses.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h5 className="text-[13px] text-white uppercase tracking-wide mb-4">
                {col.title}
              </h5>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label} className="mb-2.5">
                    <a href={l.href} className="text-sm text-gray-300 hover:text-accent">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-between items-center gap-3 border-t border-charcoal-border pt-6 text-[13px] text-ui-muted-soft">
          <span>© 2026 Gym Binary. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent">Instagram</a>
            <a href="#" className="hover:text-accent">LinkedIn</a>
            <a href="#" className="hover:text-accent">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
</file>

<file path="tsconfig.json">
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
</file>

<file path="components/Nav.tsx">
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

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.gymbinary.com";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink/85 backdrop-blur-md border-b border-charcoal-border">
      <div className="max-w-content mx-auto px-6 py-3.5 flex items-center justify-between gap-6">
        <Link href="#" className="flex items-center gap-3">
          <Image
            src="/assets/gym-binary-logo.png"
            alt="Gym Binary logo"
            width={72}
            height={72}
            className="shrink-0"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display font-bold text-accent text-xl tracking-tight">
              Gym Binary
            </span>
            <span className="text-[10.5px] font-semibold text-white uppercase tracking-widest">
              Smarter Gym. Stronger You.
            </span>
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
          <a href={`${APP_URL}/login`} className="text-gray-300 hover:text-white text-[14.5px] font-medium px-1.5 py-2.5">
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
                  href={`${APP_URL}/login`}
                  onClick={() => setOpen(false)}
                  className="text-gray-300 hover:text-white text-[15px] font-medium"
                >
                  Log In
                </a>
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
</file>

</files>
