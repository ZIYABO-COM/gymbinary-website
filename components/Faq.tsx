export const faqs = [
  {
    q: "Can I manage a single gym as well as multiple branches?",
    a: "Yes. GymBinary supports individual locations and multi-branch operations. Owners can switch between branch-specific and combined views. We can walk through the setup for your gym during a demo.",
  },
  {
    q: "Do WhatsApp reminders send automatically?",
    a: "The current workflow opens a prefilled WhatsApp message for staff to review and send. It is a staff-initiated action. Automated sending is not presented as an included feature; discuss any automation requirements with the team.",
  },
  {
    q: "Is GymBinary available on mobile?",
    a: "Yes. GymBinary is a web application and Progressive Web App (PWA). You can use it through a compatible browser and add it to the home screen where supported. Connected workflows need an internet connection.",
  },
  {
    q: "Can I record payments and track balances?",
    a: "Yes. GymBinary supports payment recording and outstanding balance tracking alongside member subscriptions. Recording a payment does not mean the application processes an online payment through a payment gateway.",
  },
  {
    q: "Can different team members have different access?",
    a: "Yes. The application supports Owner, Admin, Trainer, Front Desk and Member roles. Access also depends on branch context. Ask us to demonstrate the permissions relevant to your team.",
  },
  {
    q: "Can I move data from my existing system?",
    a: "Please share what export files or records your current system provides. The team can review the available format, data quality and migration scope before confirming what is possible.",
  },
  {
    q: "How can I start a free trial?",
    a: "Choose Start Free Trial and submit your gym details. The GymBinary team will contact you to discuss the setup and confirm the trial duration and terms. Submitting a request does not automatically create an account.",
  },
  {
    q: "How do I get pricing?",
    a: "Book a demo or contact us with your gym’s branch and team requirements. We will discuss the product and provide pricing and subscription terms directly.",
  },
  {
    q: "How can I reach the GymBinary team?",
    a: "Email contact@gymbinary.com, call India on +91 8129905061, or call the UAE number +971 52 184 8128. You can also submit the demo request form on this page.",
  },
];
export default function Faq() {
  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-grid">
        <div className="section-heading">
          <p className="eyebrow">A LITTLE MORE CLARITY</p>
          <h2>
            Good questions.
            <br />
            Clear answers.
          </h2>
          <p className="section-intro">
            Getting to know GymBinary?
            <br />
            Start here, or talk directly with our team.
          </p>
          <a href="#demo" className="text-link">
            Ask us a question<span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <details className="faq-item" key={f.q} open={i === 0}>
              <summary>
                {f.q}
                <span aria-hidden="true" className="faq-indicator" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
