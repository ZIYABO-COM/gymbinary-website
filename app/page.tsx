import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProductTour from "@/components/ProductTour";
import Modules from "@/components/Modules";
import MultiBranch from "@/components/MultiBranch";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import MobileExperience from "@/components/MobileExperience";
import Technology from "@/components/Technology";
import Pricing from "@/components/Pricing";
import DemoBooking from "@/components/DemoBooking";
import Faq, { faqs } from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "GymBinary",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: site.url,
        description:
          "Gym management software for members, subscriptions, payment recording, staff and multi-branch operations.",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <WhyChooseUs />
        <ProductTour />
        <Modules />
        <MultiBranch />
        <Benefits />
        <Testimonials />
        <HowItWorks />
        <MobileExperience />
        <Technology />
        <Pricing />
        <DemoBooking />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
