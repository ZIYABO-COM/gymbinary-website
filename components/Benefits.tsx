import SectionHeading from "./ui/SectionHeading";
import Icon from "./ui/Icon";
const roles = [
  {
    number: "01",
    icon: "chart",
    name: "For gym owners",
    title: "See the business clearly.",
    text: "Stay connected to members, recorded revenue, outstanding balances and branch performance.",
    items: [
      "Combined and branch-level views",
      "Revenue and payment reporting",
      "Staff and branch oversight",
    ],
  },
  {
    number: "02",
    icon: "users",
    name: "For trainers & front desk",
    title: "Keep the day moving.",
    text: "Bring routine member administration into one workspace, with access shaped by role.",
    items: [
      "Member enrolment and plan assignment",
      "Payments, balances and expenses",
      "Leads and WhatsApp follow-ups",
    ],
  },
  {
    number: "03",
    icon: "scan",
    name: "For members",
    title: "A simpler check-in.",
    text: "Provide a dedicated member sign-in experience with QR identification and membership-linked check-in.",
    items: [
      "Individual member login",
      "Member QR identification",
      "In-app self check-in",
    ],
  },
];
export default function Benefits() {
  return (
    <section className="section benefits-section" id="benefits">
      <div className="container">
        <SectionHeading
          eyebrow="MADE FOR YOUR TEAM"
          title="Different responsibilities. Shared clarity."
          subtitle="Put the right tools in the hands of the people who keep your gym running."
        />
        <div className="benefits-grid">
          {roles.map((r) => (
            <article className="benefit-card" key={r.name}>
              <div className="benefit-top">
                <Icon name={r.icon} size={28} />
                <span>{r.number}</span>
              </div>
              <p className="role-label">{r.name}</p>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
              <ul className="check-list">
                {r.items.map((i) => (
                  <li key={i}>
                    <Icon name="check" size={16} />
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
