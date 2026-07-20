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
