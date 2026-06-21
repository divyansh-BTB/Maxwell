import { SiteHeader } from "../home/components/site-header";
import { ContactFormSection } from "./components/ContactFormSection";
import { ContactHero } from "./components/ContactHero";
import { ContactInfo } from "./components/ContactInfo";
import { ContactMap } from "./components/ContactMap";

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <ContactHero />
      <ContactInfo />
      <ContactFormSection />
      <ContactMap />
    </main>
  );
}
