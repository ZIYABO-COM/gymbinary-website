import Brand from "./Brand";
import SocialLinks from "./SocialLinks";
import Icon from "./ui/Icon";
import { site } from "@/lib/site";
const columns = [
  {
    title: "Product",
    links: [
      ["Product tour", "/#product-tour"],
      ["Features", "/#modules"],
      ["Multi-branch", "/#multi-branch"],
      ["Mobile experience", "/#mobile-experience"],
      ["Pricing", "/#pricing"],
    ],
  },
  {
    title: "Explore",
    links: [
      ["Solutions", "/#benefits"],
      ["Customer perspectives", "/#customers"],
      ["Getting started", "/#how-it-works"],
      ["Technology", "/#technology"],
      ["FAQ", "/#faq"],
    ],
  },
];
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand footer />
            <p>
              Bring the business of running your gym into one connected
              workspace.
            </p>
            <SocialLinks className="footer-social" />
          </div>
          {columns.map((c) => (
            <div className="footer-column" key={c.title}>
              <h2>{c.title}</h2>
              <ul>
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="footer-column footer-contact">
            <h2>Let’s connect</h2>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span>INDIA</span>
            <a href={site.india.href}>{site.india.label}</a>
            <span>UAE</span>
            <a href={site.uae.href}>{site.uae.label}</a>
            <a className="footer-demo" href="/#demo">
              Book Demo
              <Icon name="arrow" size={16} />
            </a>
            <a className="footer-demo" href="/?intent=trial#demo">
              Start Free Trial
              <Icon name="arrow" size={16} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} GymBinary. A product of Ziyabo
            Technologies.
          </span>
          <div>
            <a href="/website-privacy">Website privacy</a>
            <a
              href={`mailto:${site.email}?subject=GymBinary%20subscription%20terms`}
            >
              Subscription enquiries
            </a>
            <a href={site.appUrl}>
              App login
              <Icon name="diagonal" size={13} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
