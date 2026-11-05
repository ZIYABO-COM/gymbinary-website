# Validation record

Validation date: 1 November 2026.

## Passed

- `npm test`: **9 tests passed**. Tests cover invalid input/consent, cross-origin rejection, missing email configuration, provider rejection and malformed acknowledgements, accepted delivery formatting with a mocked transport, body-size/malformed-JSON limits, rate-limit expiry, distinct trial notification routing, and compatibility with existing demo payloads.
- `npm run typecheck`: passed.
- `npm run build`: passed using the pinned Next.js production build.
- Generated routes: home, website privacy, robots, sitemap, demo API and not-found page.
- Rendered HTML inspection: one homepage H1, 14 homepage sections, no duplicate IDs, no empty/placeholder local links, no broken local anchors, no missing tour-panel targets, and all referenced image assets present.
- Actual browser inspection of the pre-rendered production homepage and its hydrated controls.
- Tour tab selection by click and keyboard (ArrowRight and End).
- Responsive layouts inspected in 320 px, 390 px and 768 px iframe viewports, alongside the desktop page. No document-level horizontal overflow in those frames.
- Mobile navigation opened, closed after a section link and reached the customer anchor.
- All nine included product captures visually reviewed after opaque redaction. No source videos or unmasked frames are included.

## Verification limits

The persistent Next.js development preview would not remain available in this environment. Browser checks therefore used a static copy of the actual production-generated HTML, assets and client JavaScript, served through the supported preview service. The dynamic demo API was tested through its shared server handler with a mocked email transport; it was not exercised against a configured external email account.

The build and API tests do not prove production inbox delivery. Configure the sender and run an authorized inbox-delivery check before enabling the new site on the live domain. Real iOS/Android hardware, Safari and the current production reverse proxy were not available for testing. No live deployment or live app changes were made.

## Version 2.1 targeted verification

- Corrected number and `tel:` destination present in the header, form contact block, footer and FAQ.
- Both Instagram and the supplied Facebook URL present.
- Retired image asset and references removed.
- Header/hero trial action opens the trial-request form; the form can switch back to Book Demo.
- First three product-tour screens cover multi-branch views, revenue analytics and owner reports.
- Mobile contact bar and both hero actions checked at the existing responsive widths.

## Version 2.2 image verification — 5 November 2026

- Production build and TypeScript compilation checked for the image-placement update.
- The compiled homepage contains nine app-image elements referencing nine distinct image files, including all inactive tour panels.
- All nine asset files have different SHA-256 hashes.
- Four new captures visually inspected after redaction; member phone endings show `***` and identity/financial masks are baked into the files.
- Existing form behavior and dependencies were not changed by this image update.

- Browser-confirmed: nine app-image elements and nine unique image URLs; subscription, payment and member-detail tour tabs show their corresponding images.
- Responsive browser check at 320 px, 390 px and 768 px iframe widths: no document horizontal overflow.

## Version 2.3 targeted checks — 5 November 2026

- Recreated all nine captures from original uploaded sources, removing previous text/data masks.
- Only member phone suffixes are masked in the three member-detail captures.
- Original demonstration amounts, counts and chart lines are visible.
- Each app image retains its single homepage placement.
- Production build and rendered image inventory checked for this revision.
- Browser-confirmed: restored revenue and dashboard figures; subscription, payment and member-detail tabs select their corresponding captures.
- The compiled homepage and browser each contain nine app-image elements with nine unique URLs; all nine included assets have distinct SHA-256 hashes.
- The production build, including TypeScript checking, passed for version 2.3.0.
