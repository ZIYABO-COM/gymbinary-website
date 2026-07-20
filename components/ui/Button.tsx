import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "outline-dark" | "outline-light";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  block?: boolean;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent text-ink hover:shadow-[0_10px_24px_rgba(250,204,21,0.35)]",
  "outline-dark":
    "border border-white/25 text-white hover:border-white",
  "outline-light":
    "border border-gray-300 text-ui-text hover:border-ui-text",
};

export default function Button({
  href,
  children,
  variant = "primary",
  block = false,
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold transition-transform hover:-translate-y-0.5 ${
        variantClasses[variant]
      } ${block ? "w-full" : ""} ${className}`}
    >
      {children}
    </Link>
  );
}
