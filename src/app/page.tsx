import { SiteHeader } from "@/components/SiteHeader";
import { AboutPreview } from "./home/components/about-preview";
import { ChallengesPreview } from "./home/components/challenges-preview";
import { ContactCta } from "./home/components/contact-cta";
import { CorporateSolutions } from "./home/components/corporate-solutions";
import { GalleryPreview } from "./home/components/gallery-preview";
import { HealthcareExcellence } from "./home/components/healthcare-excellence";
import { HeroSection } from "./home/components/hero-section";
import { NumbersSection } from "./home/components/numbers-section";
import { RecognitionSection } from "./home/components/recognition-section";
import { ServiceVerticals } from "./home/components/service-verticals";
import { WhyChooseMhpl } from "./home/components/why-choose-mhpl";

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <AboutPreview />
      <ServiceVerticals />
      <NumbersSection />
      <CorporateSolutions />
      <HealthcareExcellence />
      <ChallengesPreview />
      <WhyChooseMhpl />
      <RecognitionSection />
      <GalleryPreview />
      <ContactCta />
    </main>
  );
}
