import Button from "./ui/Button";
import Icon from "./ui/Icon";
import { site } from "@/lib/site";
export default function Pricing() {
  return (
    <section className="section pricing-section" id="pricing">
      <div className="container pricing-grid">
        <div>
          <p className="eyebrow">PRICING</p>
          <h2>
            Let’s find the right
            <br />
            setup for your gym.
          </h2>
          <p className="section-intro">
            Tell us about your locations, team and priorities. We’ll discuss the
            product and share pricing for your requirements.
          </p>
          <a href={`mailto:${site.email}`} className="text-link">
            {site.email}
            <Icon name="diagonal" size={16} />
          </a>
        </div>
        <div className="pricing-card">
          <span className="pricing-kicker">YOUR GYM. YOUR REQUIREMENTS.</span>
          <h3>Contact for pricing</h3>
          <p>
            A conversation about what your gym needs, with a clear view of the
            proposed scope.
          </p>
          <ul className="check-list">
            <li>
              <Icon name="check" size={18} />
              Single-location or multi-branch discussion
            </li>
            <li>
              <Icon name="check" size={18} />A walkthrough of relevant workflows
            </li>
            <li>
              <Icon name="check" size={18} />
              Setup and onboarding requirements
            </li>
          </ul>
          <Button href="#demo" variant="dark">
            Book Demo
          </Button>
          <Button href="/?intent=trial#demo" variant="secondary">
            Start Free Trial
          </Button>
          <small>
            Subscription scope and commercial terms are confirmed with you.
          </small>
        </div>
      </div>
    </section>
  );
}
