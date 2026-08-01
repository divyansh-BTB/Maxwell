import { SiteHeader } from "@/components/SiteHeader";
import { NumbersSection } from "../home/components/numbers-section";
import { WhyChooseMhpl } from "../home/components/why-choose-mhpl";
import { AboutHero } from "./components/AboutHero";
import { AboutMission } from "./components/AboutMission";
import { AboutVision } from "./components/AboutVision";

export default function AboutPage() {
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
