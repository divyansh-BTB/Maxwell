import { SiteHeader } from "@/components/SiteHeader";
import { ContactFormSection } from "../contact/components/ContactFormSection";
import { ContactHero } from "../contact/components/ContactHero";
import { ContactInfo } from "../contact/components/ContactInfo";
import { ContactMap } from "../contact/components/ContactMap";
import { SocialMediaSection } from "../contact/components/SocialMediaSection";

export default function ContactUsPage() {
  return (
    <main>
      <SiteHeader />
      <ContactHero />
      <ContactInfo />
      <section id="inquiry-form">
        <ContactFormSection />
      </section>
      <ContactMap />
      <SocialMediaSection />
    </main>
  );
}
