"use client";

import Image from "next/image";

const pillars = [
  {
    title: "Multi-sector expertise",
    description:
      "Hospitality programs for healthcare, corporates, banquets, cafeterias, cafes, bakeries, and events.",
    bentoClass: "md:col-span-1 md:row-span-2",
    // UPDATED IMAGE: Professional chef plating with precision (screams controlled, hygienic, and premium)
    image:
      "https://images.unsplash.com/photo-1581349485608-9469926a8e5e?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Food safety first approach",
    description:
      "Controlled kitchens, hygiene routines, temperature monitoring, and quality checks guide every operation.",
    bentoClass: "md:col-span-2 md:row-span-1",
    // Warm, comforting nutritious food layout
    image:
      "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Customized menu planning",
    description:
      "Menus are shaped around audience needs, nutrition goals, event formats, and service volume.",
    bentoClass: "md:col-span-1 md:row-span-1",
    // Premium dining/restaurant setup
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "End-to-end event management",
    description:
      "Experienced culinary and hospitality teams support planning, setup, service delivery, and improvement.",
    bentoClass: "md:col-span-1 md:row-span-1",
    // Dedicated hospitality team member
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop",
  },
];

export function WhyChooseMhpl() {
  return (
    <section className="bg-[#F6F7F8] px-[clamp(20px,5vw,72px)] py-[clamp(72px,10vw,120px)] overflow-hidden">
      <div className="mx-auto max-w-[1280px]">
        {/* --- BALANCED & REFINED HEADER --- */}
        <div className="mb-[clamp(40px,6vw,80px)] flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="w-full max-w-[650px]">
            <span className="mb-4 flex items-center gap-3 text-sm font-bold tracking-[0.15em] text-[#758696] uppercase">
              <span className="h-[2px] w-8 bg-[#758696]" />
              Why Choose Maxwell
            </span>
            <h2 className="m-0 text-[clamp(1.8rem,3vw,3rem)] font-bold leading-[1.15] tracking-tight text-[#0B1F33]">
              Excellence delivered daily.
            </h2>
          </div>
          <div className="w-full lg:w-[420px] lg:pb-2">
            <p className="m-0 text-[0.95rem] leading-[1.7] text-[#5D6C7B]">
              Maxwell combines healthcare hospitality, food safety discipline,
              large-scale catering capability, technology-driven operations, and
              an experienced culinary team.
            </p>
          </div>
        </div>

        {/* --- PHOTOGRAPHIC BENTO GRID WITH IMPRINTS --- */}
        <div className="grid grid-cols-1 gap-5 md:auto-rows-[300px] md:grid-cols-3 md:gap-6">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-[1.5rem] bg-black border border-white/10 p-8 text-white transition-all duration-500 hover:-translate-y-1 hover:border-white/35 hover:shadow-2xl hover:shadow-black/30 ${pillar.bentoClass}`}
            >
              {/* 1. Full Cover Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover opacity-60 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:opacity-80"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* 2. Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/82 via-black/35 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

              {/* 3. Massive Background Imprint Number */}
              <span className="absolute -bottom-10 -right-4 z-20 select-none text-[10rem] font-black leading-none text-white/10 transition-all duration-700 ease-out group-hover:scale-105 group-hover:text-white/20 md:text-[12rem]">
                0{index + 1}
              </span>

              {/* Top Row: Small Number Badge & Arrow */}
              <div className="relative z-30 flex items-start justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-sm font-bold text-white backdrop-blur-md transition-colors duration-500 group-hover:border-white/70">
                  0{index + 1}
                </span>

                <svg
                  aria-hidden="true"
                  className="h-6 w-6 text-white/40 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
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
              </div>

              {/* Bottom Content Area */}
              <div className="relative z-30 mt-12 md:mt-0">
                <h3
                  className={`mb-3 font-bold leading-tight drop-shadow-lg transition-transform duration-500 group-hover:-translate-y-1 ${
                    index === 0 ? "text-3xl" : "text-2xl"
                  }`}
                >
                  {pillar.title}
                </h3>
                <p className="max-w-[90%] text-[0.95rem] leading-[1.6] text-white/80 drop-shadow-md transition-all duration-500 group-hover:-translate-y-1 group-hover:text-white">
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
