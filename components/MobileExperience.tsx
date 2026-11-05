import ProductScreen from "./ProductScreen";
import Button from "./ui/Button";
import Icon from "./ui/Icon";
export default function MobileExperience() {
  return (
    <section className="section mobile-section" id="mobile-experience">
      <div className="container mobile-grid">
        <div className="mobile-art">
          <span className="mobile-art-tag">
            <Icon name="phone" size={17} />
            Progressive Web App
          </span>
          <ProductScreen screen="enrolment" />
          <span className="mobile-art-note">
            Actual app screen · empty enrolment form
          </span>
        </div>
        <div className="mobile-copy">
          <p className="eyebrow">ON THE GYM FLOOR. ON THE GO.</p>
          <h2>
            Your gym doesn’t stand still.
            <br />
            Neither should your software.
          </h2>
          <p>
            Use GymBinary through your browser, or add the web app to your home
            screen on a supported device. Keep the same connected workspace
            close to hand.
          </p>
          <div className="mobile-points">
            <div>
              <Icon name="globe" />
              <span>
                <strong>Browser access</strong>
                <small>Open the application on a compatible browser.</small>
              </span>
            </div>
            <div>
              <Icon name="phone" />
              <span>
                <strong>A place on your home screen</strong>
                <small>
                  Install the PWA where your device and browser support it.
                </small>
              </span>
            </div>
            <div>
              <Icon name="users" />
              <span>
                <strong>Access shaped by role</strong>
                <small>Owners, admins, trainers, front desk and members.</small>
              </span>
            </div>
          </div>
          <p className="mobile-availability">
            GymBinary is currently available as a web app / PWA. Internet access
            is required for connected workflows.
          </p>
          <Button href="#demo" variant="text">
            Explore the mobile experience
          </Button>
        </div>
      </div>
    </section>
  );
}
