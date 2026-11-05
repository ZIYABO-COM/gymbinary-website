import Icon from "./ui/Icon";
const reasons = [
  {
    icon: "branches",
    title: "One location or many",
    text: "Manage daily work at a single gym and keep a connected view as your branches grow.",
  },
  {
    icon: "wallet",
    title: "A clearer financial picture",
    text: "Keep payments, outstanding balances and expenses alongside your member records.",
  },
  {
    icon: "message",
    title: "Follow-ups within reach",
    text: "Find expiring memberships and open a ready-to-send WhatsApp reminder.",
  },
  {
    icon: "support",
    title: "People behind the product",
    text: "Speak directly with the GymBinary team about your gym’s workflow and questions.",
  },
];
export default function WhyChooseUs() {
  return (
    <section id="why-gymbinary" className="section why-section">
      <div className="container">
        <div className="section-heading compact">
          <p className="eyebrow">WHY GYMBINARY</p>
          <h2>
            Your energy belongs on the gym floor.
            <br />
            Your admin belongs here.
          </h2>
        </div>
        <div className="reason-grid">
          {reasons.map((r) => (
            <article className="reason" key={r.title}>
              <Icon name={r.icon} size={28} />
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
