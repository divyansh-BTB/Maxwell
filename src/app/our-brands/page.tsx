import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { brands } from "@/lib/site-content";

export default function OurBrandsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="bg-white px-[clamp(20px,5vw,72px)] pt-[clamp(150px,16vw,210px)] pb-[clamp(72px,10vw,120px)]">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-[clamp(40px,7vw,84px)] grid grid-cols-1 gap-6 lg:grid-cols-[0.82fr_1fr] lg:items-end">
            <div>
              <span className="mb-4 flex items-center gap-3 text-sm font-bold tracking-[0.15em] text-[#758696] uppercase">
                <span className="h-[2px] w-8 bg-[#758696]" />
                Our Brands
              </span>
              <h1 className="max-w-[760px] page-title text-[#0B1F33]">
                Maxwell Ecosystem
              </h1>
            </div>
            <p className="max-w-[680px] section-copy text-[#5D6C7B] lg:justify-self-end">
              A connected portfolio across vibrant food destinations, playful
              cafe experiences, bakeries, and nutrition-led services.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {brands.map((brand, index) => (
              <article
                className="group overflow-hidden rounded-[1.5rem] border border-[#F6F7F8] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0D2B44] hover:shadow-xl hover:shadow-[#0B1F33]/10"
                id={brand.id}
                key={brand.id}
              >
                <div
                  className={`relative aspect-[4/3] ${
                    brand.image.startsWith("/") ? "bg-white" : "bg-[#0B1F33]"
                  }`}
                >
                  <Image
                    alt={brand.title}
                    className={`transition-transform duration-700 group-hover:scale-105 ${
                      brand.image.startsWith("/")
                        ? "object-contain p-8"
                        : "object-cover"
                    }`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    src={brand.image}
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-white/92 px-4 py-2 text-xs font-black tracking-[0.12em] text-[#0B1F33]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="section-title text-[#0B1F33]">
                    {brand.title}
                  </h2>
                  <p className="mt-4 section-copy text-[#5D6C7B]">
                    {brand.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
