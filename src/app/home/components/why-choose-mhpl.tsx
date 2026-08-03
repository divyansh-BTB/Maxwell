"use client";
import Image from "next/image";

const pillars = [
  {
    title: "Multi-sector expertise",
    description:
      "Hospitality programs for healthcare, corporates, banquets, cafeterias, cafes, bakeries, and events.",
    bentoClass: "md:col-span-1 md:row-span-2",
    image: "/images/why-choose/multi-sector.jpg",
  },
  {
    title: "Food safety first approach",
    description:
      "Controlled kitchens, hygiene routines, temperature monitoring, and quality checks guide every operation.",
    bentoClass: "md:col-span-2 md:row-span-1",
    image: "/images/why-choose/food-safety.jpg",
  },
  {
    title: "Customized menu planning",
    description:
      "Menus are shaped around audience needs, nutrition goals, event formats, and service volume.",
    bentoClass: "md:col-span-1 md:row-span-1",
    image: "/images/why-choose/custom-menu.jpg",
  },
  {
    title: "End-to-end event management",
    description:
      "Experienced culinary and hospitality teams support planning, setup, service delivery, and improvement.",
    bentoClass: "md:col-span-1 md:row-span-1",
    image: "/images/why-choose/event-mgmt.jpg",
  },
];

export function WhyChooseMhpl() {
  return (
    <section className="bg-[#F6F7F8] px-[clamp(20px,5vw,72px)] py-[clamp(40px,5vw,76px)] overflow-hidden">
      <div className="mx-auto max-w-[1280px]">
        {/* --- BALANCED & REFINED HEADER --- */}
        <div className="mb-[clamp(40px,6vw,80px)] flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="w-full max-w-[650px]">
            <span className="mb-4 flex items-center gap-3 text-sm font-bold tracking-[0.15em] text-[#758696] uppercase">
              <span className="h-[2px] w-8 bg-[#758696]" />
              Why Choose Maxwell
            </span>
            <h2 className="m-0 section-title tracking-tight text-[#0B1F33]">
              Excellence delivered daily.
            </h2>
          </div>
          <div className="w-full lg:w-[420px] lg:pb-2">
            <p className="m-0 section-copy text-[#5D6C7B]">
              Maxwell combines healthcare hospitality, food safety discipline,
              large-scale catering capability, technology-driven operations, and
              an experienced culinary team.
            </p>
          </div>
        </div>

        {/* --- CONTEXTUAL PHOTOGRAPHY BENTO GRID --- */}
        <div className="grid grid-cols-1 gap-5 md:auto-rows-[320px] md:grid-cols-3 md:gap-6">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-[1.5rem] border border-[#0B1F33]/15 bg-[#0B1F33] p-8 text-white shadow-xl shadow-[#0B1F33]/10 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#0B1F33]/25 ${pillar.bentoClass}`}
            >
              {/* 1. Contextual Image Background with Hover Zoom */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* 2. Legibility Vignette Overlay */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-t from-[#0B1F33] via-[#0B1F33]/60 to-[#0B1F33]/25 opacity-90 transition-opacity duration-500 group-hover:opacity-80"
              />

              {/* 3. Massive Background Imprint Number */}
              <span className="absolute -bottom-10 -right-4 z-0 select-none text-[10rem] font-black leading-none text-white/[0.08] transition-all duration-700 ease-out group-hover:scale-105 group-hover:text-white/[0.14] md:text-[12rem]">
                0{index + 1}
              </span>

              {/* Top Row: Small Number Badge & Arrow */}
              <div className="relative z-10 flex items-start justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/90 text-sm font-bold text-[#0B1F33] shadow-md backdrop-blur-md transition-all duration-500 group-hover:border-white group-hover:bg-white">
                  0{index + 1}
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#0B1F33]/60 text-white backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-[#0B1F33]">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>

              {/* Bottom Content Area */}
              <div className="relative z-10 mt-12 md:mt-0">
                <h3
                  className={`mb-3 font-bold leading-tight text-white drop-shadow-md transition-transform duration-500 group-hover:-translate-y-1 ${
                    index === 0 ? "text-3xl" : "text-2xl"
                  }`}
                >
                  {pillar.title}
                </h3>
                <p className="max-w-[90%] section-copy text-white/90 transition-all duration-500 group-hover:-translate-y-1 group-hover:text-white">
                  {pillar.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
