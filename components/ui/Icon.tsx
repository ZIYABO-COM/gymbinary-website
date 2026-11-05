import type { ReactNode } from "react";
const paths: Record<string, ReactNode> = {
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </>
  ),
  facebook: (
    <path d="M14 21v-8h3l.5-4H14V7c0-1 .5-2 2-2h2V2.5C17 2.2 16 2 15 2c-3 0-5 2-5 5v2H7v4h3v8" />
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  diagonal: <path d="M6 18 18 6M6 6h12v12" />,
  check: <path d="m5 12 4 4L19 6" />,
  play: <path d="m9 5 11 7-11 7z" />,
  branches: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <path d="M17.5 14V6.5H10M6.5 10v4" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M22 21v-2a4 4 0 0 0-3-3.9" />
      <circle cx="9" cy="7" r="4" />
      <path d="M16 3.1a4 4 0 0 1 0 7.8" />
    </>
  ),
  chart: <path d="M3 3v18h18M7 15v2M12 10v7M17 6v11" />,
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 11h18m-13 5 2 2 5-5" />
    </>
  ),
  wallet: (
    <>
      <path d="M20 8V5a2 2 0 0 0-2-2H5a3 3 0 0 0 0 6h15v11H5a3 3 0 0 1-3-3V6" />
      <path d="M21 12h-6v5h6zM17 14.5h.01" />
    </>
  ),
  message: (
    <>
      <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H3l2.1-4A8.5 8.5 0 1 1 21 11.5Z" />
      <path d="M8 10h8M8 14h5" />
    </>
  ),
  shield: (
    <>
      <path d="m12 2 8 4v6c0 5-8 10-8 10S4 17 4 12V6z" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),
  phone: (
    <>
      <rect x="6" y="2" width="12" height="20" rx="3" />
      <path d="M10 5h4M11 19h2" />
    </>
  ),
  cloud: <path d="M7 18a5 5 0 1 1 0-10 7 7 0 0 1 13-1 5 5 0 0 1-1 11Z" />,
  code: <path d="m7 7-5 5 5 5M17 7l5 5-5 5M14 4l-4 16" />,
  support: (
    <>
      <path d="M3 14v-3a9 9 0 0 1 18 0v3M17 21h-5M21 16v1a4 4 0 0 1-4 4" />
      <rect x="2" y="11" width="4" height="7" rx="2" />
      <rect x="18" y="11" width="4" height="7" rx="2" />
    </>
  ),
  lead: (
    <>
      <circle cx="10" cy="8" r="4" />
      <path d="M3 21v-2a7 7 0 0 1 11-5M17 12v8M13 16h8" />
    </>
  ),
  scan: (
    <>
      <path d="M3 8V3h5M16 3h5v5M21 16v5h-5M8 21H3v-5M3 12h18" />
      <rect x="8" y="7" width="8" height="10" rx="1" />
    </>
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 6 10 7L22 6" />
    </>
  ),
  quote: (
    <path d="M9 5H3v7h4c0 3-1 4-3 5v2c4-1 6-4 6-8V5Zm12 0h-6v7h4c0 3-1 4-3 5v2c4-1 6-4 6-8V5Z" />
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <path d="M3 12h18" />
    </>
  ),
  lock: (
    <>
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V6a4 4 0 0 1 8 0v4M12 14v3" />
    </>
  ),
  close: <path d="m6 6 12 12M6 18 18 6" />,
};
export default function Icon({
  name,
  size = 22,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name] || paths.arrow}
    </svg>
  );
}
