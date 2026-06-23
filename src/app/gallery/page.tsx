import { SiteHeader } from "@/components/SiteHeader";
import { GalleryPreview } from "../home/components/gallery-preview";
import { KitchenExcellenceSection } from "./KitchenExcellenceSection";

export default function GalleryPage() {
  return (
    <main>
      <SiteHeader />
      <section className="bg-white px-[clamp(20px,5vw,72px)] pt-[clamp(150px,16vw,190px)] pb-0">
        <div className="mx-auto max-w-[1280px]">
          <span className="mb-5 flex items-center gap-3 text-sm font-bold tracking-[0.18em] text-[#758696] uppercase">
            <span className="h-[2px] w-8 bg-[#758696]" />
            Gallery
          </span>
          <h1 className="max-w-[760px] text-[clamp(2.5rem,5vw,5rem)] leading-[0.98] text-[#0B1F33]">
            Experience Maxwell
          </h1>
        </div>
      </section>
      <GalleryPreview />
      <KitchenExcellenceSection />
    </main>
  );
}
