export const site = {
  name: "GymBinary",
  url: "https://www.gymbinary.com",
  email: "contact@gymbinary.com",
  appUrl: process.env.NEXT_PUBLIC_APP_URL || "https://app.gymbinary.com/login",
  facebook: "https://www.facebook.com/profile.php?id=61593806836324",
  instagram: "https://www.instagram.com/gym_binary/",
  india: { label: "+91 8129905061", href: "tel:+918129905061" },
  uae: { label: "+971 52 184 8128", href: "tel:+971521848128" },
} as const;
