import Button from "./ui/Button";
export default function FinalCta() {
  return (
    <section className="final-cta">
      <div className="container">
        <div>
          <p className="eyebrow">GIVE YOUR GYM ROOM TO GROW</p>
          <h2>
            Run the gym.
            <br />
            Keep the connection.
          </h2>
        </div>
        <div>
          <p>
            See how GymBinary brings your people,
            <br />
            memberships and daily operations together.
          </p>
          <Button href="#demo" variant="dark">
            Book Demo
          </Button>
          <Button href="/?intent=trial#demo" variant="secondary">
            Start Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
}
