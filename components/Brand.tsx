export default function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a
      href="/"
      className={`brand ${footer ? "brand-footer" : ""}`}
      aria-label="GymBinary home"
    >
      <img src="/assets/gym-binary-logo.png" width="46" height="46" alt="" />
      <span>
        <strong>
          Gym<span>Binary</span>
        </strong>
        <small>SMART GYM MANAGEMENT</small>
      </span>
    </a>
  );
}
