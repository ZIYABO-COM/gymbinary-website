import Icon from "./ui/Icon";
export default function Testimonials() {
  return (
    <section className="section customers-section" id="customers">
      <div className="container">
        <div className="split-heading">
          <div className="section-heading">
            <p className="eyebrow">CUSTOMER PERSPECTIVES</p>
            <h2>
              Built with the people
              <br />
              who run real gyms.
            </h2>
          </div>
          <p className="section-intro">
            The most useful feedback comes from the gym floor.
            <br />
            Here is what customers value about GymBinary.
          </p>
        </div>
        <div className="testimonial-grid">
          <article className="testimonial-card testimonial-featured">
            <span className="feedback-label">PUREFITNESS STUDIO</span>
            <Icon name="quote" size={38} />
            <h3>One clear view across branches.</h3>
            <p>
              Arun values GymBinary’s multi-branch capability, useful features
              and ease of use. He also highlights the support the GymBinary team
              provides.
            </p>
            <div className="testimonial-person">
              <span className="avatar" aria-hidden="true">
                A
              </span>
              <div>
                <strong>Mr. Arun</strong>
                <span>Owner, PureFitness Studio · Customer & mentor</span>
                <small>Former Mr. India · 8-time Mr. Kerala champion</small>
              </div>
            </div>
            <a
              className="text-link"
              href="https://www.instagram.com/_pure_fitness_studio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              PureFitness Studio on Instagram
              <Icon name="diagonal" size={16} />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </article>
          <article className="testimonial-card">
            <span className="feedback-label">PRIMEFIT FITNESS STUDIO</span>
            <Icon name="quote" size={38} />
            <h3>
              Less clerical work.
              <br />
              More room for coaching.
            </h3>
            <p>
              Kripa appreciates how GymBinary simplifies the clerical work
              involved in managing her gym, making everyday administration
              easier to handle.
            </p>
            <div className="testimonial-person">
              <span className="avatar" aria-hidden="true">
                K
              </span>
              <div>
                <strong>Ms. Kripa</strong>
                <span>Owner, PRIMEFIT FITNESS STUDIO</span>
                <small>Fitness trainer, Ottappalam</small>
              </div>
            </div>
            <span className="customer-detail">
              Everyday gym management, made simpler.
            </span>
          </article>
        </div>
        <p className="testimonial-note">
          Paraphrased customer feedback shared with GymBinary; these summaries
          are not verbatim quotations.
        </p>
      </div>
    </section>
  );
}
