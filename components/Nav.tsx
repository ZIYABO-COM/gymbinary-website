"use client";
import { useEffect, useState } from "react";
import Brand from "./Brand";
import ContactBar from "./ContactBar";
import Icon from "./ui/Icon";
import { site } from "@/lib/site";
const links = [
  { href: "/#modules", label: "Product" },
  { href: "/#benefits", label: "Solutions" },
  { href: "/#customers", label: "Customers" },
  { href: "/#technology", label: "Technology" },
  { href: "/#pricing", label: "Pricing" },
];
export default function Nav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    function escape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, []);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <ContactBar />
        <div className="container nav-row">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <a className="login-link" href={site.appUrl}>
              Log in
              <Icon name="diagonal" size={14} />
            </a>
            <a className="button button-dark nav-demo" href="/#demo">
              Book Demo
              <Icon name="arrow" size={16} />
            </a>
            <a
              className="button button-primary nav-trial"
              href="/?intent=trial#demo"
            >
              Start Free Trial
              <Icon name="arrow" size={16} />
            </a>
          </div>
          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <Icon name="close" /> : <span className="menu-bars" />}
          </button>
        </div>
        {open && (
          <nav
            className="mobile-nav"
            id="mobile-navigation"
            aria-label="Mobile navigation"
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
                <Icon name="arrow" size={17} />
              </a>
            ))}
            <a href="/#product-tour" onClick={() => setOpen(false)}>
              Product tour
              <Icon name="arrow" size={17} />
            </a>
            <a href="/#faq" onClick={() => setOpen(false)}>
              FAQ
              <Icon name="arrow" size={17} />
            </a>
            <a href={site.appUrl}>
              Log in
              <Icon name="diagonal" size={17} />
            </a>
            <a
              className="button button-primary"
              href="/#demo"
              onClick={() => setOpen(false)}
            >
              Book Demo
              <Icon name="arrow" size={17} />
            </a>
            <a
              className="button button-dark"
              href="/?intent=trial#demo"
              onClick={() => setOpen(false)}
            >
              Start Free Trial
              <Icon name="arrow" size={17} />
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
