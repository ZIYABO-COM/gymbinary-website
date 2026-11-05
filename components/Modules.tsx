import SectionHeading from "./ui/SectionHeading";
import Icon from "./ui/Icon";
const modules = [
  {
    icon: "users",
    title: "Member management",
    body: "Keep member profiles, contact details, subscription history and payment records together.",
    tag: "MEMBERS",
  },
  {
    icon: "calendar",
    title: "Plans & subscriptions",
    body: "Create plans, assign memberships and manage renewals around your gym’s offering.",
    tag: "MEMBERSHIPS",
  },
  {
    icon: "wallet",
    title: "Payments & balances",
    body: "Record payments and see outstanding balances. Payment recording is separate from online payment collection.",
    tag: "BILLING",
  },
  {
    icon: "message",
    title: "WhatsApp follow-ups",
    body: "Open prefilled renewal and balance reminders. Your staff review and send each message through WhatsApp.",
    tag: "ENGAGEMENT",
  },
  {
    icon: "lead",
    title: "Leads & follow-ups",
    body: "Capture enquiries and walk-ins, maintain contact details and keep follow-up work visible.",
    tag: "GROWTH",
  },
  {
    icon: "scan",
    title: "Member check-in",
    body: "Support membership-linked check-in and member QR identification within the application.",
    tag: "ATTENDANCE",
  },
  {
    icon: "chart",
    title: "Expenses & reports",
    body: "Record operating expenses and review revenue reporting with branch-level context.",
    tag: "INSIGHTS",
  },
  {
    icon: "branches",
    title: "Branches & staff",
    body: "Organize locations and staff, with role-based access for owners and their teams.",
    tag: "OPERATIONS",
  },
];
export default function Modules() {
  return (
    <section className="section" id="modules">
      <div className="container">
        <SectionHeading
          eyebrow="THE PRODUCT"
          title="The essentials, working together."
          subtitle="A connected set of tools for the work behind every well-run gym."
        />
        <div className="modules-grid">
          {modules.map((m) => (
            <article className="module-card" key={m.title}>
              <div className="module-top">
                <span className="icon-box">
                  <Icon name={m.icon} />
                </span>
                <span className="module-tag">{m.tag}</span>
              </div>
              <h3>{m.title}</h3>
              <p>{m.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
