import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
export const metadata: Metadata = {
  title: "Website privacy",
  description: "How the GymBinary marketing website handles product enquiries.",
  alternates: { canonical: "/website-privacy" },
};
export default function WebsitePrivacy() {
  return (
    <>
      <Nav />
      <main id="main" className="container privacy-page">
        <p className="eyebrow">GYMBINARY MARKETING WEBSITE</p>
        <h1>Website privacy notice</h1>
        <p>
          This notice describes the enquiry form on www.gymbinary.com. It does
          not describe the handling of gym member records within the GymBinary
          application. For application data or subscription questions, please
          contact <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
        <h2>Information in your enquiry</h2>
        <p>
          The demo and free-trial request form asks for your name, gym or studio
          name, email and phone number. Country, number of branches and your
          message are optional. Please do not include member records, health
          information, passwords or other sensitive information in this form.
        </p>
        <h2>How the form works</h2>
        <p>
          When you submit the form and agree to being contacted, the website
          sends your enquiry to the GymBinary team by email using Resend. We use
          these details to respond to your enquiry and arrange a product
          walkthrough. The website request form does not automatically create a
          GymBinary application account or a mailing-list subscription.
        </p>
        <h2>Website features</h2>
        <p>
          This version of the marketing website does not add advertising
          trackers or analytics cookies. It does not save enquiry form entries
          in browser storage or a website database. The hosting and email
          services may process technical information required to operate their
          services. The website uses temporary request counters to limit
          repeated form submissions.
        </p>
        <h2>External links</h2>
        <p>
          The website includes links to Instagram and to the separate GymBinary
          application. Those services operate separately from this marketing
          website and may process information when you visit them.
        </p>
        <h2>Questions about your information</h2>
        <p>
          To ask about an enquiry you have sent, request deletion of its
          details, or ask for applicable retention and processing information,
          email <a href={`mailto:${site.email}`}>{site.email}</a>. Please use
          that address for the full application privacy and subscription
          documentation before sharing gym member information.
        </p>
        <p>Website notice updated: 1 November 2026.</p>
      </main>
      <Footer />
    </>
  );
}
