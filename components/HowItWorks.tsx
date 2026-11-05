import SectionHeading from "./ui/SectionHeading";
const steps = [
  {
    title: "Show us your workflow",
    body: "Walk through your gym’s memberships, branches and daily admin with the team.",
  },
  {
    title: "Plan your setup",
    body: "Discuss plans, staff access and any existing data you would like us to review.",
  },
  {
    title: "Bring your team in",
    body: "Set up the agreed workspace and introduce your team to its everyday workflows.",
  },
  {
    title: "Run. Review. Refine.",
    body: "Use GymBinary for daily operations and share feedback as your needs develop.",
  },
];
export default function HowItWorks() {
  return (
    <section className="section setup-section" id="how-it-works">
      <div className="container">
        <SectionHeading
          eyebrow="GETTING STARTED"
          title="A clear path from first look to daily use."
          subtitle="Start with a conversation about your gym. Shape the setup around how your team works."
        />
        <div className="steps-grid">
          {steps.map((s, i) => (
            <article key={s.title}>
              <span className="step-number">0{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
