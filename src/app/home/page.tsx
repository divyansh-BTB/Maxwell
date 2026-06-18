import { AboutPreview } from "./components/about-preview";
import { ContactCta } from "./components/contact-cta";
import { GalleryPreview } from "./components/gallery-preview";
import { HealthcareExcellence } from "./components/healthcare-excellence";
import { HeroSection } from "./components/hero-section";
import { RecognitionSection } from "./components/recognition-section";
import { ServiceVerticals } from "./components/service-verticals";
import { SiteHeader } from "./components/site-header";
import { WhyChooseMhpl } from "./components/why-choose-mhpl";

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <AboutPreview />
      <ServiceVerticals />
      <WhyChooseMhpl />
      <HealthcareExcellence />
      <RecognitionSection />
      <GalleryPreview />
      <ContactCta />
    </main>
  );
}
