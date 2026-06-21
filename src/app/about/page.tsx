import { SiteHeader } from "@/components/SiteHeader";
import { AboutGallery } from "./components/AboutGallery";
import { AboutHero } from "./components/AboutHero";
import { AboutMission } from "./components/AboutMission";
import { AboutValues } from "./components/AboutValues";
import { AboutVision } from "./components/AboutVision";

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <AboutHero />
      <AboutVision />
      <AboutMission />
      <AboutValues />
      <AboutGallery />
    </main>
  );
}
