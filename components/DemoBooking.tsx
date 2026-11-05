"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import Icon from "./ui/Icon";
import SocialLinks from "./SocialLinks";
import { site } from "@/lib/site";
type Status = "idle" | "sending" | "success" | "error";
export default function DemoBooking() {
  const [isTrial, setIsTrial] = useState(false);
  useEffect(() => {
    setIsTrial(
      new URLSearchParams(window.location.search).get("intent") === "trial",
    );
  }, []);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const errorRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setError("");
    const payload = Object.fromEntries(data.entries());
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          intent: isTrial ? "trial" : "demo",
          consent: data.get("consent") === "on",
        }),
        signal: controller.signal,
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || result?.ok !== true) {
        const problem = new Error(
          typeof result?.error === "string"
            ? result.error
            : "We could not send your request. Please try again or contact us directly.",
        );
        problem.name = "EnquiryError";
        throw problem;
      }
      setStatus("success");
      form.reset();
      setTimeout(() => successRef.current?.focus(), 0);
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error && err.name === "EnquiryError"
          ? err.message
          : err instanceof Error && err.name === "AbortError"
            ? "The request timed out. Please try again or contact us directly."
            : "We could not reach our enquiry service. Please try again or contact us by email or phone.",
      );
      setTimeout(() => errorRef.current?.focus(), 0);
    } finally {
      window.clearTimeout(timeout);
    }
  }
  return (
    <section className="section demo-section" id="demo">
      <div className="container demo-grid">
        <div className="demo-copy">
          <p className="eyebrow">LET’S TALK ABOUT YOUR GYM</p>
          <h2>
            {isTrial ? (
              <>
                Try GymBinary.
                <br />
                With your own gym.
              </>
            ) : (
              <>
                Meet your next
                <br />
                way of working.
              </>
            )}
          </h2>
          <p>
            {isTrial
              ? "Tell us about your gym to request a free trial. Our team will get in touch to discuss your setup and confirm the trial arrangements."
              : "See the workflows that matter to you. Tell us a little about your gym and our team will get in touch to arrange a product walkthrough."}
          </p>
          <div className="contact-options">
            <div className="contact-option">
              <span className="icon-box">
                <Icon name="mail" size={19} />
              </span>
              <span>
                <small>Email GymBinary</small>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </span>
            </div>
            <div className="contact-option">
              <span className="icon-box">
                <Icon name="phone" size={19} />
              </span>
              <span>
                <small>India</small>
                <a href={site.india.href}>{site.india.label}</a>
              </span>
            </div>
            <div className="contact-option">
              <span className="icon-box">
                <Icon name="phone" size={19} />
              </span>
              <span>
                <small>UAE</small>
                <a href={site.uae.href}>{site.uae.label}</a>
              </span>
            </div>
          </div>
          <SocialLinks className="demo-social" />
        </div>
        <div className="demo-form">
          {status === "success" ? (
            <div
              className="form-success"
              ref={successRef}
              tabIndex={-1}
              role="status"
            >
              <span className="icon-box">
                <Icon name="check" size={25} />
              </span>
              <h3>Your request is on its way.</h3>
              <p>
                {isTrial
                  ? "Your free-trial request has been sent. The GymBinary team will contact you about your setup and confirm the trial arrangements."
                  : "Thank you for getting in touch. The GymBinary team will contact you to arrange a demo or discuss a free trial."}
              </p>
              <button onClick={() => setStatus("idle")}>
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <fieldset className="enquiry-intent">
                <legend className="sr-only">Enquiry type</legend>
                <button
                  type="button"
                  disabled={status === "sending"}
                  aria-pressed={!isTrial}
                  onClick={() => {
                    setIsTrial(false);
                    setStatus("idle");
                    setError("");
                  }}
                >
                  Book Demo
                </button>
                <button
                  type="button"
                  disabled={status === "sending"}
                  aria-pressed={isTrial}
                  onClick={() => {
                    setIsTrial(true);
                    setStatus("idle");
                    setError("");
                  }}
                >
                  Start Free Trial
                </button>
              </fieldset>
              <h3 className="form-title">
                {isTrial
                  ? "Request your free trial"
                  : "Book your product walkthrough"}
              </h3>
              <p className="form-description">Fields marked * are required.</p>
              <div className="form-honeypot" aria-hidden="true">
                <label htmlFor="website">Leave this field empty</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <div className="form-grid">
                <Field
                  name="name"
                  label="Your name"
                  autoComplete="name"
                  required
                  maxLength={80}
                />
                <Field
                  name="gymName"
                  label="Gym / studio name"
                  autoComplete="organization"
                  required
                  maxLength={120}
                />
                <Field
                  name="email"
                  label="Email address"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                />
                <Field
                  name="phone"
                  label="Phone with country code"
                  type="tel"
                  autoComplete="tel"
                  required
                  maxLength={32}
                />
                <Field
                  name="country"
                  label="Country"
                  autoComplete="country-name"
                  maxLength={80}
                />
                <div className="form-field">
                  <label htmlFor="branches">Number of branches</label>
                  <select id="branches" name="branches" defaultValue="">
                    <option value="">Please select</option>
                    <option value="1">1 location</option>
                    <option value="2-5">2–5 locations</option>
                    <option value="6+">6+ locations</option>
                    <option value="discuss">Let’s discuss</option>
                  </select>
                </div>
                <div className="form-field form-wide">
                  <label htmlFor="message">
                    What would you like to explore?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    maxLength={1500}
                    placeholder="Your daily workflows, current tools, or questions…"
                  />
                </div>
              </div>
              <label className="form-consent">
                <input type="checkbox" name="consent" required />
                <span>
                  I agree that GymBinary may contact me about this enquiry. Read
                  the <a href="/website-privacy">website privacy notice</a>. *
                </span>
              </label>
              {status === "error" && (
                <div
                  className="form-error"
                  ref={errorRef}
                  tabIndex={-1}
                  role="alert"
                >
                  <p>{error}</p>
                  <a href={`mailto:${site.email}`}>Email {site.email}</a>
                </div>
              )}
              <button
                type="submit"
                className="button button-dark"
                disabled={status === "sending"}
              >
                {status === "sending"
                  ? "Sending your request…"
                  : isTrial
                    ? "Request Free Trial"
                    : "Request a demo"}
                <Icon name="arrow" size={18} />
              </button>
              <p className="form-footnote">
                {isTrial
                  ? "Submit a trial request. Our team will confirm the setup, duration and terms with you before your trial begins."
                  : "This is a walkthrough request. A meeting time will be agreed with you."}
              </p>
              <noscript>
                <p>
                  Please email <a href={`mailto:${site.email}`}>{site.email}</a>{" "}
                  to arrange a demo or discuss a free trial.
                </p>
              </noscript>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
function Field({
  name,
  label,
  type = "text",
  autoComplete,
  required = false,
  maxLength,
}: {
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  maxLength?: number;
}) {
  return (
    <div className="form-field">
      <label htmlFor={name}>
        {label}
        {required && <span> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        maxLength={maxLength}
      />
    </div>
  );
}
