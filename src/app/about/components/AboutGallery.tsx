"use client";

import Image from "next/image";
import { useState } from "react";

const galleryCategories = [
  {
    title: "Hospital Catering",
    description: "Patient-centric food programs built around safety and care.",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Corporate Events",
    description:
      "Planned food experiences for meetings, launches, and annual days.",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Street Cafe & Food Courts",
    description:
      "Managed retail spaces with variety, flow, and service discipline.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Kitchen Operations",
    description:
      "Controlled preparation, hygiene routines, and trained culinary teams.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Banquets & Client Events",
    description:
      "Celebrations and client moments delivered with hospitality detail.",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8892b07439?q=80&w=900&auto=format&fit=crop",
  },
];

export function AboutGallery() {
  const featuredItem = galleryCategories[0];
  const supportingItems = galleryCategories.slice(1);
  const [previewItem, setPreviewItem] = useState(featuredItem);

  return (
    <section
      className="bg-white px-[clamp(20px,5vw,72px)] py-[clamp(72px,10vw,120px)]"
      id="about-gallery"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-[clamp(36px,6vw,72px)] grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1fr] lg:items-end">
          <div>
            <span className="mb-4 flex items-center gap-3 text-sm font-bold tracking-[0.15em] text-[#2E7C82] uppercase">
              <span className="h-[2px] w-8 bg-[#2E7C82]" />
              Inside MHPL
            </span>
            <h2 className="m-0 text-[clamp(2rem,3.5vw,3rem)] font-bold leading-[1.1] text-[#0E4A4F]">
              Our operations in action.
            </h2>
          </div>
          <p className="max-w-[620px] text-[1.04rem] leading-[1.8] text-[#5C7078] lg:justify-self-end">
            A glimpse into the environments MHPL serves, from healthcare food
            programs and managed dining spaces to catering events and team-led
            service moments.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(340px,0.65fr)]">
          <article className="group relative min-h-[620px] overflow-hidden rounded-[1.75rem] bg-[#1F9AAA] shadow-2xl shadow-[#0E4A4F]/10 max-lg:min-h-[520px] max-sm:min-h-[420px]">
            <Image
              src={previewItem.image}
              alt={previewItem.title}
              fill
              className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 64vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/14 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-[clamp(24px,4vw,44px)] text-white">
              <p className="text-[0.78rem] font-bold tracking-[0.18em] text-[#2E7C82] uppercase">
                Featured
              </p>
              <h3 className="mt-3 max-w-[620px] text-[clamp(2rem,4vw,4rem)] font-bold leading-[1.02]">
                {previewItem.title}
              </h3>
              <p className="mt-5 max-w-[520px] text-[1.02rem] leading-[1.75] text-white/78">
                {previewItem.description}
              </p>
            </div>
          </article>

          <div className="grid gap-5">
            <div className="rounded-[1.5rem] border border-[#E7F1F5] bg-white p-7 shadow-sm">
              <p className="text-[0.78rem] font-bold tracking-[0.16em] text-[#2E7C82] uppercase">
                Gallery Focus
              </p>
              <p className="mt-4 text-[1.65rem] font-bold leading-tight text-[#0E4A4F]">
                Real service moments, organized by the spaces we support.
              </p>
            </div>

            {supportingItems.map((item) => (
              <article
                className="group grid min-h-[132px] grid-cols-[128px_1fr] overflow-hidden rounded-[1.25rem] border border-[#E7F1F5] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1F9AAA] hover:shadow-xl hover:shadow-[#0E4A4F]/10 max-sm:grid-cols-1"
                key={item.title}
                onMouseEnter={() => setPreviewItem(item)}
              >
                <div className="relative min-h-[132px] overflow-hidden bg-[#1F9AAA]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="128px"
                  />
                </div>
                <div className="flex flex-col justify-center p-5">
                  <h3 className="text-[1.1rem] font-bold text-[#0E4A4F]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.9rem] leading-[1.6] text-[#5C7078]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-5 md:grid-cols-4">
          {supportingItems.map((item) => (
            <article
              className="group relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-[#1F9AAA]"
              key={`${item.title}-tile`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/12 transition-colors duration-300 group-hover:bg-black/28" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
