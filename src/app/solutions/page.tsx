import { SiteHeader } from "@/components/SiteHeader";
import { ServiceDetailSections } from "../service/components/ServiceDetailSections";
import { ServicesCta } from "../service/components/ServicesCta";
import { ServicesList } from "../service/components/ServicesList";

export default function SolutionsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="bg-white px-[clamp(20px,5vw,72px)] pt-[clamp(150px,16vw,210px)] pb-[clamp(32px,6vw,72px)]">
        <div className="mx-auto max-w-[1280px]">
          <span className="mb-5 flex items-center gap-3 text-sm font-bold tracking-[0.18em] text-[#758696] uppercase">
            <span className="h-[2px] w-8 bg-[#758696]" />
            Solutions
          </span>
          <h1 className="max-w-[860px] page-title text-[#0B1F33]">
            Hospitality and food service solutions for every operating need.
          </h1>
        </div>
      </section>
      <ServicesList />
      <ServiceDetailSections />
      <ServicesCta />
    </main>
  );
}
