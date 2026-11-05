"use client";
import { useRef, useState } from "react";
import ProductScreen from "./ProductScreen";
import Icon from "./ui/Icon";
import Button from "./ui/Button";
// Each capture has one homepage placement. Hero, branch and mobile screens stay distinct.
const tours = [
  {
    name: "Owner reports",
    screen: "reports" as const,
    icon: "chart",
    title: "See the wider business picture.",
    body: "Open the owner reporting workspace to review recorded revenue over time and view the business across branches.",
    bullets: [
      "Open combined branch reports",
      "Review recorded revenue over time",
      "Keep reporting connected to daily operations",
    ],
  },
  {
    name: "Subscriptions",
    screen: "member-subscriptions" as const,
    icon: "calendar",
    title: "Keep every membership in view.",
    body: "Review a member’s active plan, remaining membership period and subscription history from the same profile.",
    bullets: [
      "Review active membership plans",
      "See plan periods and remaining days",
      "Keep previous subscriptions within reach",
    ],
  },
  {
    name: "Payments & balances",
    screen: "member-payments" as const,
    icon: "wallet",
    title: "Keep payment records connected.",
    body: "Review recorded payments, outstanding balances and payment history alongside a member’s subscriptions.",
    bullets: [
      "Review outstanding balances",
      "Record payments against memberships",
      "Find previous payment entries",
    ],
  },
  {
    name: "Member details",
    screen: "member-health" as const,
    icon: "users",
    title: "Bring member details together.",
    body: "Keep member information and health measurement fields in the same workspace as plans and payment records.",
    bullets: [
      "Record height and weight measurements",
      "Keep health details within the member profile",
      "Move between profile, subscription and payment views",
    ],
  },
];
export default function ProductTour() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  function move(e: React.KeyboardEvent, i: number) {
    let n: number | undefined;
    if (e.key === "ArrowRight") n = (i + 1) % tours.length;
    if (e.key === "ArrowLeft") n = (i + tours.length - 1) % tours.length;
    if (e.key === "Home") n = 0;
    if (e.key === "End") n = tours.length - 1;
    if (n !== undefined) {
      e.preventDefault();
      setActive(n);
      tabs.current[n]?.focus();
    }
  }
  return (
    <section className="section tour-section" id="product-tour">
      <div className="container">
        <div className="split-heading">
          <div className="section-heading">
            <p className="eyebrow">A LOOK INSIDE</p>
            <h2>
              From business reports
              <br />
              to member details.
            </h2>
          </div>
          <p className="section-intro">
            Explore GymBinary through actual app screens.
            <br />
            Demonstration data. Member phone endings are masked.
          </p>
        </div>
        <div
          className="tour-tabs"
          role="tablist"
          aria-label="Product walkthrough"
        >
          {tours.map((t, i) => (
            <button
              ref={(el) => {
                tabs.current[i] = el;
              }}
              role="tab"
              id={`tour-tab-${i}`}
              aria-controls={`tour-panel-${i}`}
              aria-selected={active === i}
              tabIndex={active === i ? 0 : -1}
              key={t.name}
              onClick={() => setActive(i)}
              onKeyDown={(e) => move(e, i)}
            >
              <Icon name={t.icon} size={18} />
              {t.name}
            </button>
          ))}
        </div>
        {tours.map((tour, i) => (
          <div
            key={tour.name}
            hidden={active !== i}
            className="tour-panel"
            role="tabpanel"
            id={`tour-panel-${i}`}
            aria-labelledby={`tour-tab-${i}`}
            tabIndex={0}
          >
            <div className="tour-copy">
              <span className="tour-counter">0{i + 1} / 04</span>
              <h3>{tour.title}</h3>
              <p>{tour.body}</p>
              <ul className="check-list">
                {tour.bullets.map((b) => (
                  <li key={b}>
                    <Icon name="check" size={17} />
                    {b}
                  </li>
                ))}
              </ul>
              <Button href="#demo" variant="dark">
                See it in a demo
              </Button>
            </div>
            <div className="tour-image">
              <div className="tour-grid-pattern" aria-hidden="true" />
              <ProductScreen screen={tour.screen} />
              <span className="tour-image-label">ACTUAL GYMBINARY SCREEN</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
