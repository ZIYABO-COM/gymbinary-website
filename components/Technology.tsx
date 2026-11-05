import Icon from "./ui/Icon";
const items = [
  {
    icon: "cloud",
    title: "Cloud-hosted application",
    body: "A shared online workspace keeps your team connected to the same operational records.",
  },
  {
    icon: "lock",
    title: "Role & branch permissions",
    body: "Application access follows user roles and branch context, with tenant-aware data access.",
  },
  {
    icon: "code",
    title: "A connected product foundation",
    body: "The web interface, application API and database support shared membership and billing workflows.",
  },
];
export default function Technology() {
  return (
    <section className="section technology-section" id="technology">
      <div className="container">
        <div className="split-heading">
          <div className="section-heading">
            <p className="eyebrow">THE TECHNOLOGY BEHIND THE EXPERIENCE</p>
            <h2>
              Modern foundations.
              <br />
              Practical advantages.
            </h2>
          </div>
          <p className="section-intro">
            Built to connect the work that happens across your gym, with a
            web-first experience and controlled access.
          </p>
        </div>
        <div className="technology-grid">
          {items.map((i) => (
            <article key={i.title}>
              <span className="technology-icon">
                <Icon name={i.icon} size={27} />
              </span>
              <h3>{i.title}</h3>
              <p>{i.body}</p>
            </article>
          ))}
        </div>
        <div className="tech-foundation">
          <span>APPLICATION FOUNDATION</span>
          <div>
            <strong>React</strong>
            <strong>.NET</strong>
            <strong>PostgreSQL</strong>
            <strong>Microsoft Azure</strong>
            <strong>PWA</strong>
          </div>
        </div>
        <p className="tech-note">
          Have questions about access, deployment or your gym’s requirements?{" "}
          <a href="#demo">
            Talk to our team
            <Icon name="arrow" size={15} />
          </a>
        </p>
      </div>
    </section>
  );
}
