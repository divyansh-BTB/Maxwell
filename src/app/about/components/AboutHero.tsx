"use client";

import Image from "next/image";

const overviewHighlights = [
  {
    title: "Healthcare",
    description:
      "Patient-centric food, diet planning, cafeterias, and care-led hospitality.",
  },
  {
    title: "Corporate",
    description:
      "Catering, workplace dining, meetings, conferences, and gifting.",
  },
  {
    title: "Events & Brands",
    description:
      "Banquets, cafes, bakeries, food courts, and large-scale events.",
  },
];

export function AboutHero() {
  return (
    <section className="relative bg-white overflow-hidden" id="about-hero">
      {/* --- CINEMATIC HEADER (Untouched) --- */}
      <div className="relative flex h-[60vh] min-h-[500px] w-full flex-col justify-end overflow-hidden px-[clamp(20px,5vw,72px)] pb-20">
        <Image
          src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1920&auto=format&fit=crop"
          alt="Maxwell Hospitality"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1280px]">
          <span className="mb-4 flex items-center gap-3 text-sm font-bold tracking-[0.2em] text-[#758696] uppercase">
            <span className="h-[2px] w-8 bg-[#758696]" />
            Company Overview
          </span>
          <h1 className="m-0 max-w-[900px] page-title text-white">
            About Maxwell Hospitality Private Limited
          </h1>
        </div>
      </div>

      {/* --- REVAMPED EDITORIAL OVERVIEW --- */}
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,5vw,72px)] py-[clamp(80px,10vw,140px)]">
        {/* 1. Magazine-Style Header Split */}
        <div className="mb-[clamp(60px,8vw,100px)] grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
          <div>
            <span className="mb-4 flex items-center gap-3 text-sm font-bold tracking-[0.18em] text-[#758696] uppercase">
              <span className="h-[2px] w-8 bg-[#758696]" />
              Who We Are
            </span>
            <h2 className="section-title tracking-tight text-[#0B1F33]">
              Integrated hospitality under one roof.
            </h2>
          </div>

          <div className="relative pl-6 lg:pl-10">
            {/* Elegant vertical border separator */}
            <div className="absolute bottom-0 left-0 top-0 w-[2px] bg-gradient-to-b from-[#0D2B44] to-transparent" />
            <p className="mb-4 section-copy text-[#0B1F33] font-medium">
              Maxwell is an integrated hospitality, catering, and facility
              management company delivering exceptional food and service
              experiences across healthcare institutions, corporate offices,
              events, banquets, and retail food outlets.
            </p>
            <p className="section-copy text-[#5D6C7B]">
              With a focus on quality, safety, innovation, and customer
              satisfaction, Maxwell serves thousands of guests daily through its
              diverse portfolio of brands and services.
            </p>
          </div>
        </div>

        {/* 2. Interactive & Overlapping Grid */}
        <div className="grid grid-cols-1 items-center gap-[clamp(60px,8vw,100px)] lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: Framed Image with Floating Plaque */}
          <div className="relative w-full max-w-[600px] mx-auto lg:max-w-none">
            {/* Decorative Offset Gold Frame */}
            <div className="absolute -bottom-6 -left-6 top-6 right-6 rounded-[2rem] border-[1.5px] border-[#0D2B44]/40 transition-transform duration-700 hover:-translate-x-2 hover:-translate-y-2 lg:-bottom-8 lg:-left-8 lg:top-8 lg:right-8" />

            {/* Main Image Container */}
            <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-[#0D2B44] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1400&auto=format&fit=crop"
                alt="Professional hospitality kitchen preparation"
                fill
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-black/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
            </div>

            {/* Overlapping "Built On" Floating Plaque */}
            <div className="absolute -bottom-10 -right-4 z-20 w-[85%] max-w-[380px] rounded-[1.5rem] bg-[#0B1F33] p-8 text-white shadow-2xl shadow-[#0B1F33]/30 transition-transform duration-500 hover:-translate-y-2 sm:-right-10 lg:-right-16 lg:p-10">
              <div className="mb-4 h-[2px] w-12 bg-[#0D2B44]" />
              <p className="mb-2 text-xs font-bold tracking-[0.2em] text-[#758696] uppercase">
                Built On
              </p>
              <p className="text-[1.2rem] font-bold leading-[1.3] lg:text-[1.4rem]">
                Quality, safety, innovation, and customer satisfaction.
              </p>
            </div>
          </div>

          {/* Right: Interactive Highlight Rows */}
          <div className="flex flex-col justify-center lg:pl-10 pt-10 lg:pt-0">
            <h3 className="mb-8 text-2xl font-bold text-[#0B1F33]">
              Core Service Areas
            </h3>
            <div className="flex flex-col border-t border-[#F6F7F8]">
              {overviewHighlights.map((item, index) => (
                <article
                  className="group relative flex cursor-default flex-col justify-center border-b border-[#F6F7F8] py-8 transition-colors duration-500 hover:border-[#0D2B44]"
                  key={item.title}
                >
                  {/* Sliding Left Gold Accent */}
                  <div className="absolute left-0 top-0 h-full w-0 bg-[#0D2B44]/10 transition-all duration-500 ease-out group-hover:w-full" />
                  <div className="absolute left-0 top-0 h-full w-[3px] scale-y-0 bg-[#0D2B44] transition-transform duration-500 ease-out group-hover:scale-y-100" />

                  <div className="relative z-10 flex items-start gap-6 pl-4 transition-transform duration-500 group-hover:translate-x-2 lg:pl-6">
                    <span className="mt-1 font-mono text-sm font-bold text-[#0D2B44]">
                      0{index + 1}
                    </span>
                    <div>
                      <h4 className="mb-2 text-[1.1rem] font-black tracking-[0.1em] text-[#0B1F33] uppercase transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="max-w-[90%] section-copy text-[#5D6C7B] transition-colors duration-300 group-hover:text-[#0B1F33]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
