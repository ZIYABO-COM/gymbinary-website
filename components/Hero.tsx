import Button from "./ui/Button";
import Icon from "./ui/Icon";
import ProductScreen from "./ProductScreen";
export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" />
            YOUR GYM. CONNECTED.
          </p>
          <h1>
            Less admin.
            <br />
            More time for
            <br />
            <span>your members.</span>
          </h1>
          <p className="hero-description">
            Members, memberships, payments and every branch. Bring the daily
            work of running your gym into one clear, connected system.
          </p>
          <div className="hero-buttons">
            <Button href="#demo">Book Demo</Button>
            <Button href="/?intent=trial#demo" variant="secondary">
              Start Free Trial
            </Button>
            <a className="hero-tour" href="#product-tour">
              <span>
                <Icon name="play" size={14} />
              </span>
              Explore the product
            </a>
          </div>
          <div className="hero-proof">
            <span>
              <Icon name="branches" size={16} />
              Multi-branch ready
            </span>
            <span>
              <Icon name="phone" size={16} />
              Installable web app
            </span>
            <span>
              <Icon name="users" size={16} />
              Role-based access
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="stage-orbit" aria-hidden="true" />
          <div className="stage-caption">
            <span className="status-dot" />
            MULTI-BRANCH. ONE CLEAR VIEW.
          </div>
          <ProductScreen
            screen="revenue-analytics"
            className="hero-device-back"
            priority
          />
          <ProductScreen
            screen="owner-overview"
            className="hero-device-front"
            priority
          />
          <div className="stage-label">
            <span className="icon-box">
              <Icon name="branches" />
            </span>
            <span>
              <strong>Every branch. One view.</strong>
              <small>Made for the way you manage.</small>
            </span>
          </div>
          <p className="screen-disclaimer">
            Actual app screens · demonstration data
          </p>
        </div>
      </div>
      <div className="hero-bottom container">
        <span>Built around the way real gyms work.</span>
        <a href="#customers">PureFitness Studio</a>
        <a href="#customers">
          PRIMEFIT <small>FITNESS STUDIO</small>
        </a>
        <a className="hero-bottom-link" href="#customers">
          Meet our customers
          <Icon name="arrow" size={16} />
        </a>
      </div>
    </section>
  );
}
