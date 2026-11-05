# Developer handover

## Stack and scope

This is the marketing website only. It preserves Next.js/React/TypeScript, with a Node.js server route for demo enquiries. It does not change the React gym application, .NET API, database, production tenants or existing domain settings.

Node.js **22+** is required by this package. Next.js 16.4.3, React 19.3.1 and other dependencies are pinned in the lockfile. The old website's Framer Motion/Tailwind dependency set has been removed; the layout uses ordinary CSS, and fonts are self-hosted.

## Deployment sequence

1. Review the source in a staging checkout. Keep existing secrets outside the ZIP and git.
2. Confirm the host supports the required Node.js runtime and a persistent Next.js server.
3. Run `npm ci`, `npm test`, `npm run typecheck`, and `npm run build`.
4. Configure `.env.example` values in the host's secret/environment settings. `NEXT_PUBLIC_APP_URL` is embedded at build time, so rebuild after changing it.
5. Start with `npm start` behind the existing HTTPS reverse proxy.
6. Check the home page, product-tour tabs, mobile menu, FAQ, privacy page, `/robots.txt`, `/sitemap.xml`, all four images, email/tel links and the app login destination.
7. With the website owner's authorization, submit one test demo enquiry and confirm receipt in `contact@gymbinary.com`. Verify a real sender-domain configuration, not only a mocked API result.
8. Only then follow the normal process for updating the live domain. Keep the previous working release available for rollback.

The supplied Oracle workflow still points to `/home/opc/GymBrain/gymbinary-website` and systemd service `gymbinary-website`. These are inherited values, not newly verified infrastructure facts. The updated workflow fails on an install/test/build error before restarting the service. Its existing main-branch trigger is preserved; use a staging branch while reviewing the package.

## Form operations

- Demo and free-trial requests carry a validated `intent` field and distinct notification subjects. Trial setup remains a manual conversation; no account is automatically created.
- Resend delivers the enquiry; the client never receives the API key.
- Incomplete email configuration returns 503 with direct contact alternatives.
- Resend rejection, malformed delivery acknowledgements and transport failures return 502.
- A successful response requires an accepted provider response containing an email ID.
- Enquiries are not stored in an application database by this website.
- The request counter is process-local; apply edge/proxy limits when hosting multiple instances.
- `DEMO_TRUST_PROXY=true` is appropriate only when a trusted proxy overwrites client-supplied forwarding headers.
- This archive includes no actual API keys and no end-to-end email-delivery claim.

## Search and accessibility

The homepage renders as static HTML with hydrated interactive components; the email route remains dynamic. Canonical metadata is for `https://www.gymbinary.com`. A separate canonical URL is set for the website privacy page. The software/FAQ structured data contains no invented review scores or offers.

UI provisions include semantic sections, one homepage H1, labelled forms, required field feedback, keyboard tour tabs, menu Escape handling, visible focus, reduced motion and alt text describing the masked captures. Test on the target browsers/devices before live release; these provisions are not a certification of universal accessibility compliance.
