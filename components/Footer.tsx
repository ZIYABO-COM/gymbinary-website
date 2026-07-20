import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#modules" },
      { label: "Pricing", href: "#pricing" },
      { label: "How It Works", href: "#how-it-works" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Gym Owners", href: "#benefits" },
      { label: "Trainers", href: "#benefits" },
      { label: "Members", href: "#benefits" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Help Center", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink-soft text-gray-300 pt-16 pb-7.5 border-t border-charcoal-border">
      <div className="max-w-content mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-8 mb-12">
          <div>
            <Link href="#" className="flex items-center gap-2.5 mb-3.5">
              <Image src="/assets/gym-binary-logo.png" alt="Gym Binary logo" width={38} height={38} className="rounded-lg" />
              <span className="font-display font-bold text-white text-lg">Gym Binary</span>
            </Link>
            <p className="text-[13.5px] text-ui-muted-soft max-w-[260px]">
              Smarter gym. Stronger you. Multi-branch gym management software
              for growing fitness businesses.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h5 className="text-[13px] text-white uppercase tracking-wide mb-4">
                {col.title}
              </h5>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label} className="mb-2.5">
                    <a href={l.href} className="text-sm text-gray-300 hover:text-accent">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-between items-center gap-3 border-t border-charcoal-border pt-6 text-[13px] text-ui-muted-soft">
          <span>© 2026 Gym Binary. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent">Instagram</a>
            <a href="#" className="hover:text-accent">LinkedIn</a>
            <a href="#" className="hover:text-accent">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
