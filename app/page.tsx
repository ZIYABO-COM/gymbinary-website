import { Suspense } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Modules from "@/components/Modules";
import HowItWorks from "@/components/HowItWorks";
import MobileExperience from "@/components/MobileExperience";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import DemoBooking from "@/components/DemoBooking";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <WhyChooseUs />
      <Modules />
      <HowItWorks />
      <MobileExperience />
      <Benefits />
      <Pricing />
      <Suspense fallback={null}>
        <DemoBooking />
      </Suspense>
      <Faq />
      <FinalCta />
      <Footer />
    </>
  );
}
