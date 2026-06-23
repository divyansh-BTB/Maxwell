import { SiteHeader } from "@/components/SiteHeader";
import { AboutHero } from "../about/components/AboutHero";
import { AboutMission } from "../about/components/AboutMission";
import { AboutVision } from "../about/components/AboutVision";
import { NumbersSection } from "../home/components/numbers-section";
import { WhyChooseMhpl } from "../home/components/why-choose-mhpl";

export default function AboutMaxwellPage() {
  return (
    <main>
      <SiteHeader />
      <AboutHero />
      <AboutVision />
      <AboutMission />
      <section id="by-the-numbers">
        <NumbersSection />
      </section>
      <section id="why-choose-maxwell">
        <WhyChooseMhpl />
      </section>
    </main>
  );
}
