import { SiteHeader } from "@/components/SiteHeader";
import { ServiceDetailSections } from "./components/ServiceDetailSections";
import { ServicesCta } from "./components/ServicesCta";
import { ServicesHero } from "./components/ServicesHero";
import { ServicesList } from "./components/ServicesList";
import { ServicesProcess } from "./components/ServicesProcess";

export default function ServicePage() {
  return (
    <main>
      <SiteHeader />
      <ServicesHero />
      <ServicesList />
      <ServiceDetailSections />
      <ServicesProcess />
      <ServicesCta />
    </main>
  );
}
