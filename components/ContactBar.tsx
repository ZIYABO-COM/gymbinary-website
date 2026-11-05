import { site } from "@/lib/site";
import Icon from "./ui/Icon";
import SocialLinks from "./SocialLinks";
export default function ContactBar() {
  return (
    <div className="contact-bar">
      <div className="container contact-bar-inner">
        <a className="contact-bar-email" href={`mailto:${site.email}`}>
          <Icon name="mail" size={14} />
          <span>{site.email}</span>
        </a>
        <a className="contact-bar-india" href={site.india.href}>
          <Icon name="phone" size={14} />
          <span>
            <span className="contact-country">India</span> {site.india.label}
          </span>
        </a>
        <a className="contact-bar-uae" href={site.uae.href}>
          <Icon name="phone" size={14} />
          <span>
            <span className="contact-country">UAE</span> {site.uae.label}
          </span>
        </a>
        <SocialLinks compact className="contact-bar-social" />
      </div>
    </div>
  );
}
