import { SiteHeader } from "@/components/SiteHeader";
import { ContactFormSection } from "./components/ContactFormSection";
import { ContactHero } from "./components/ContactHero";
import { ContactInfo } from "./components/ContactInfo";
import { ContactMap } from "./components/ContactMap";
import { SocialMediaSection } from "./components/SocialMediaSection";

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <ContactHero />
      <ContactInfo />
      <ContactFormSection />
      <ContactMap />
      <SocialMediaSection />
    </main>
  );
}
