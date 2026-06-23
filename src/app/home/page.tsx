import { SiteHeader } from "@/components/SiteHeader";
import { AboutPreview } from "./components/about-preview";
import { ContactCta } from "./components/contact-cta";
import { CorporateSolutions } from "./components/corporate-solutions";
import { GalleryPreview } from "./components/gallery-preview";
import { HealthcareExcellence } from "./components/healthcare-excellence";
import { HeroSection } from "./components/hero-section";
import { NumbersSection } from "./components/numbers-section";
import { RecognitionSection } from "./components/recognition-section";
import { ServiceVerticals } from "./components/service-verticals";
import { WhyChooseMhpl } from "./components/why-choose-mhpl";

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <AboutPreview />
      <ServiceVerticals />
      <NumbersSection />
      <CorporateSolutions />
      <WhyChooseMhpl />
      <HealthcareExcellence />
      <RecognitionSection />
      <GalleryPreview />
      <ContactCta />
    </main>
  );
}
