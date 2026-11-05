import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "./globals.css";
import { site } from "@/lib/site";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "GymBinary | Connected Gym & Multi-Branch Management Software",
    template: "%s | GymBinary",
  },
  description:
    "Bring members, memberships, payment records and every branch together. Explore GymBinary gym management software and book a product walkthrough.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title: "Less admin. More time for your members. | GymBinary",
    description:
      "Your gym. Connected. Members, memberships, payments and multi-branch operations in one workspace.",
    url: site.url,
    images: [
      {
        url: "/assets/social-card.png",
        width: 1200,
        height: 630,
        alt: "GymBinary — Your gym. Connected.",
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/assets/social-card.png"] },
  icons: {
    icon: "/assets/gym-binary-logo.png",
    apple: "/assets/gym-binary-logo.png",
  },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111210",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
