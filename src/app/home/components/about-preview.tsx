import Image from "next/image";
import Link from "next/link";
import { ArrowCircle } from "@/components/ArrowCircle";

// Beautiful placeholder images from Unsplash matching your hospitality theme
const features = [
  {
    id: "quality",
    eyebrow: "Quality",
    title: "Nutrition-led food programs",
    description:
      "Chef-designed, dietitian-approved menus engineered for healthcare institutions, corporate offices, and large-scale events — balancing nutrition, taste, and consistency at volume.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "hygiene",
    eyebrow: "Hygiene",
    title: "Controlled kitchen standards",
    description:
      "Disciplined kitchens, audited processes, and reliable systems keep food safety first while we serve thousands of guests every single day.",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "service",
    eyebrow: "Service",
    title: "Reliable hospitality teams",
    description:
      "Warm, accountable teams supporting workplaces, cafes, bakeries, banquets, and care environments with dependable daily execution.",
    image:
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1200&auto=format&fit=crop",
  },
];

export function AboutPreview() {
  return (
    <section
      className="bg-white px-[clamp(20px,5vw,72px)] py-[clamp(40px,5vw,76px)]"
      id="about"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* --- Intro: heading left, supporting copy + CTA right --- */}
        <div className="grid grid-cols-1 gap-8 border-b border-[#EDEFF2] pb-[clamp(40px,6vw,72px)] lg:grid-cols-[1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <span className="mb-4 flex items-center gap-3 text-sm font-bold tracking-[0.15em] text-[#758696] uppercase">
              <span className="h-[2px] w-8 bg-[#758696]" />
              Who We Are
            </span>
            <h2 className="max-w-[620px] section-title text-[#0B1F33]">
              Purposeful hospitality for institutions, diners, and events
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="section-copy text-[#5D6C7B]">
              Maxwell is an integrated hospitality, catering, and facility
              management company delivering exceptional food and service
              experiences across healthcare institutions, corporate offices,
              banquets, and retail food outlets.
            </p>
          </div>
        </div>

        {/* --- 3-card feature grid --- */}
        <div className="mt-[clamp(40px,6vw,72px)] grid grid-cols-1 gap-5 md:grid-cols-3">
          {features.map((feature, idx) => (
            <article
              key={feature.id}
              className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-[#EDEFF2] bg-white shadow-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:border-[#0D2B44] hover:shadow-2xl hover:shadow-[#0B1F33]/10"
            >
              <div className="relative h-[clamp(220px,26vw,272px)] overflow-hidden bg-[#0B1F33]">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/60 via-[#0B1F33]/10 to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3.5 py-1.5 text-[0.68rem] font-black tracking-[0.14em] text-[#0D2B44] uppercase backdrop-blur-sm">
                  {feature.eyebrow}
                </span>
                <span className="absolute bottom-3 right-5 font-heading text-[2.4rem] leading-none text-white/80">
                  0{idx + 1}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-[clamp(22px,2vw,30px)]">
                <h3 className="card-title text-[#0B1F33]">{feature.title}</h3>
                <p className="mt-3.5 section-copy text-[#5D6C7B]">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* --- CTA below cards --- */}
        <div className="mt-[clamp(36px,5vw,56px)] flex justify-center">
          <Link
            className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#0D2B44] bg-[#0D2B44] py-1.5 pr-1.5 pl-5 text-[0.72rem] font-black tracking-[0.12em] text-white uppercase transition-colors duration-300 hover:bg-white hover:text-[#0D2B44]"
            href="/about"
          >
            <span>Learn More About Maxwell</span>
            <ArrowCircle />
          </Link>
        </div>
      </div>
    </section>
  );
}
