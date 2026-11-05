# GymBinary marketing website — redesigned source

A redevelopment of the supplied GymBinary Next.js website. This package is source code for **www.gymbinary.com**, separate from the GymBinary application and its .NET API. Source package version: **2.3.0**. It has not been deployed to the live domain.

The established yellow-and-black identity and supplied GymBinary logo are retained. The design uses self-hosted Inter, authentic demonstration-account captures, role-oriented content and a product walkthrough.

## Run locally

Use Node.js 22 or later and npm. Dependencies are pinned in `package-lock.json`.

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Run `npm ci` before `npm run dev` after extracting a fresh ZIP; installed dependencies are not bundled. On Windows PowerShell, run these commands in the extracted folder containing `package.json`.

Open the local URL printed by Next.js. The site renders without email credentials. To receive demo requests, configure the email service as described below.

## Validate and run production

```sh
npm test
npm run typecheck
npm run build
npm start
```

The production website needs a Node-capable Next.js host. Uploading the source to a static-only host does not run the `/api/demo` email endpoint.

## Configure demo enquiries

Demo and trial requests share one form with a clearly selected enquiry type. Start Free Trial opens `/?intent=trial#demo`; Book Demo opens the demo form. Trial requests do not automatically provision an account, and no fixed duration is published. The notification subject identifies whether an enquiry is for a demo or a free trial.

The existing Resend integration is retained with stronger validation and delivery checks. Set these variables on your host or in the untracked `.env.local`:

| Variable              | Purpose                                                                                            |
| --------------------- | -------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_APP_URL` | Complete application login URL. Retained destination: `https://app.gymbinary.com/login`.           |
| `RESEND_API_KEY`      | Your Resend API key, server-side only.                                                             |
| `DEMO_FROM_EMAIL`     | Sender on a verified sending domain, such as `GymBinary <contact@gymbinary.com>`.                  |
| `DEMO_NOTIFY_EMAIL`   | Receiving inbox; defaults to `contact@gymbinary.com`.                                              |
| `DEMO_TRUST_PROXY`    | Default `false`. Enable only when the reverse proxy overwrites untrusted `X-Forwarded-For` values. |

An unconfigured server returns a useful error and shows direct email/phone alternatives. It never reports that a request was sent when delivery is unconfigured or rejected. Successful delivery is covered by a mocked transport test; actual inbox delivery must be verified after configuring the sender.

Request validation, a honeypot, explicit contact consent, a 16 KB body limit, and a bounded in-memory request counter are included. Counters are per process and reset on restart. Configure appropriate reverse-proxy rate limits for a public deployment, especially with multiple instances. No enquiry database or marketing-tracker integration is added.

## Content decisions confirmed for this version

- Conversion actions: **Book Demo** and **Start Free Trial**.
- Pricing: **Contact for pricing**; no published amounts. Trial duration and terms are confirmed by the team.
- Customer endorsements: **paraphrased feedback**, without fabricated direct quotations.
- PWA availability, staff-initiated WhatsApp reminders and payment recording are described accurately.
- No invented adoption figures, growth results, customer portraits, certifications, AI features, uptime guarantees or app-store availability.

## Source map

- `app/page.tsx`: all homepage sections.
- `components/`: each section, navigation, product tour and form.
- `app/globals.css`: design tokens, responsive rules and focus/reduced-motion support.
- `lib/site.ts`: public email, India/UAE contacts and login/Instagram links.
- `lib/demo-handler.mjs`: validated server-side email handler.
- `app/api/demo/route.ts`: Next.js route wrapper.
- `app/website-privacy/page.tsx`: notice limited to this website's enquiry workflow.
- `public/assets/screens/`: nine cropped demonstration app screenshots.
- `docs/WEBSITE-IMPROVEMENTS.md`: sections retained, improvements and requested follow-up assets.
- `docs/CONTENT-SOURCES.md`: evidence and asset provenance.
- `docs/SCREENSHOT-PLACEMENTS.md`: the single placement assigned to each app screenshot.
- `docs/DEPLOYMENT.md`: handover for the website developer.
- `docs/QA.md`: validation performed and its limits.

The supplied Oracle deployment workflow remains in `.github/workflows/deploy.yml`, with fail-fast build/test steps. Its original target path and service name must be checked against the current hosting environment before using it. Copying these files into an existing repository retains that repository's deployment behavior.

## Screenshot update — 5 November 2026

Every app screenshot now has exactly one homepage placement. The hero, product tour, multi-branch section and mobile section use nine different captures. New owner overview, member subscription, member payment and member health captures are included. Member phone numbers retain their original prefix with their final three digits replaced by `***`. The website owner confirmed that the captures contain dummy data; figures, names, IDs and charts are visible. Only member phone endings are masked.

## Demonstration data update — version 2.3

The website owner confirmed that the supplied screenshots contain dummy data and requested all demonstration figures to be visible. Every app image has been recreated from its original uploaded screenshot or video frame, with original revenue, amounts, counts, names, IDs, branch labels and charts restored. Only the final three digits of member phone numbers remain replaced by `***`. The nine unique screenshot placements are retained.
