export default function ProductScreen({
  screen,
  className = "",
  priority = false,
}: {
  screen:
    | "reports"
    | "branches"
    | "branch-performance"
    | "revenue-analytics"
    | "enrolment"
    | "owner-overview"
    | "member-subscriptions"
    | "member-payments"
    | "member-health";
  className?: string;
  priority?: boolean;
}) {
  const labels = {
    "owner-overview":
      "GymBinary demonstration owner dashboard showing members, plans, staff, branches and expenses",
    "member-subscriptions":
      "GymBinary demonstration member subscription and plan history; final three phone digits masked",
    "member-payments":
      "GymBinary demonstration member payments, balances and payment history; final three phone digits masked",
    "member-health":
      "GymBinary demonstration member health fields; final three phone digits masked",
    reports: "GymBinary demonstration revenue report and six-month trend chart",
    branches: "GymBinary demonstration owner workspace and branch selector",
    "branch-performance":
      "GymBinary demonstration branch performance report with membership and revenue figures",
    "revenue-analytics":
      "GymBinary demonstration daily, weekly, monthly and yearly revenue analytics",
    enrolment: "GymBinary new member enrolment form with all fields empty",
  };
  return (
    <div className={`device ${className}`}>
      <div className="device-top">
        <span />
        <span />
      </div>
      <img
        src={`/assets/screens/${screen}.webp`}
        width="386"
        height="692"
        alt={labels[screen]}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
      />
      <div className="device-bottom">
        <span />
      </div>
    </div>
  );
}
