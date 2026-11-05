import { site } from "@/lib/site";
import Icon from "./ui/Icon";
export default function SocialLinks({
  compact = false,
  className = "",
}: {
  compact?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`social-links ${compact ? "social-compact" : ""} ${className}`}
      aria-label="GymBinary social pages"
    >
      {[
        { name: "Instagram", href: site.instagram, icon: "instagram" },
        { name: "Facebook", href: site.facebook, icon: "facebook" },
      ].map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`GymBinary on ${link.name} (opens in a new tab)`}
        >
          <Icon name={link.icon} size={compact ? 15 : 17} />
          {!compact && <span>{link.name}</span>}
        </a>
      ))}
    </div>
  );
}
