import Brand from "@/components/Brand";
import Button from "@/components/ui/Button";
export default function NotFound() {
  return (
    <main id="main" className="error-page">
      <Brand />
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1>
        Let’s get you
        <br />
        back on track.
      </h1>
      <p>The page you are looking for could not be found.</p>
      <Button href="/" variant="dark">
        Back to GymBinary
      </Button>
    </main>
  );
}
