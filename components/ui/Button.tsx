import Icon from "./Icon";
export default function Button({
  href,
  children,
  variant = "primary",
  arrow = true,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark" | "text";
  arrow?: boolean;
}) {
  return (
    <a href={href} className={`button button-${variant}`}>
      {children}
      {arrow && <Icon name="arrow" size={18} />}
    </a>
  );
}
