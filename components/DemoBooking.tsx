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
