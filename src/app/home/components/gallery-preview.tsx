"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const galleryItems = [
  {
    title: "Corporate Events",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Banquets",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Catering Services",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Hospital Catering",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Street Cafe",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Baker Street",
    image:
      "https://images.unsplash.com/photo-1606900136270-2a2a07c9d1c9?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Nutriverse",
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Kitchen Operations",
    image:
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Food Preparation",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Client Events",
    image:
      "https://images.unsplash.com/photo-1544025162-8315ea07fc7a?auto=format&fit=crop&w=900&q=80",
  },
];

export function GalleryPreview() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollPrev = () => {
    if (carouselRef.current) {
      // Adjusted scroll amount to match the new card width + gap
      carouselRef.current.scrollBy({ left: -384, behavior: "smooth" });
    }
  };

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 384, behavior: "smooth" });
    }
  };

  return (
    <section
      className="bg-white px-[clamp(20px,5vw,72px)] py-[clamp(72px,10vw,120px)] overflow-hidden"
      id="gallery"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        {/* --- EDITORIAL HEADER LAYOUT --- */}
        <div className="mb-[clamp(40px,6vw,80px)] flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="w-full lg:w-1/2">
            <span className="mb-4 flex items-center gap-3 text-sm font-bold tracking-[0.15em] text-[#758696] uppercase">
              <span className="h-[2px] w-8 bg-[#758696]" />
              Experience Maxwell
            </span>
            <h2 className="m-0 section-title text-[#0B1F33]">
              Service moments across brands, kitchens, banquets, and client
              events.
            </h2>
          </div>

          <div className="flex w-full items-center justify-between lg:w-auto lg:justify-end lg:gap-12">
            <Link
              className="group inline-flex items-center gap-3 border-b border-[#0D2B44]/40 pb-1 text-sm font-bold tracking-[0.15em] text-[#0B1F33] uppercase transition-all duration-300 hover:border-[#0D2B44] hover:text-[#0D2B44]"
              href="#gallery"
            >
              View Full Gallery
            </Link>

            {/* Pure Minimalist Arrows */}
            <div className="hidden items-center gap-6 lg:flex">
              <button
                aria-label="Previous image"
                className="text-[#758696] transition-all duration-300 hover:-translate-x-2 hover:text-[#0D2B44]"
                onClick={scrollPrev}
                type="button"
              >
                <svg
                  aria-hidden="true"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                aria-label="Next image"
                className="text-[#758696] transition-all duration-300 hover:translate-x-2 hover:text-[#0D2B44]"
                onClick={scrollNext}
                type="button"
              >
                <svg
                  aria-hidden="true"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* --- CINEMATIC FULL-BLEED CAROUSEL --- */}
        <div className="relative w-full">
          <div
            ref={carouselRef}
            className="flex w-full gap-6 overflow-x-auto pb-10 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {galleryItems.map((item) => (
              <article
                className="group relative flex h-[400px] w-[85vw] sm:w-[360px] flex-none snap-start flex-col justify-end overflow-hidden rounded-[2rem] border border-[#D9D9D9] transition-all duration-700 hover:border-[#0D2B44]/50 hover:shadow-2xl hover:shadow-[#0B1F33]/12"
                key={item.title}
              >
                {/* 1. Full-Bleed Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                    fill
                    sizes="(max-width: 640px) 85vw, 360px"
                  />
                </div>

                {/* 2. Cinematic Gradient Overlay (Darkens the bottom for text readability) */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0B1F33] via-[#0B1F33]/35 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                {/* 3. Text & Hover Content */}
                <div className="relative z-20 flex flex-col p-8 transition-transform duration-500 ease-out group-hover:-translate-y-2">
                  {/* Decorative Gold Line */}
                  <div className="mb-4 h-[2px] w-8 bg-[#758696] transition-all duration-500 group-hover:w-16" />

                  <h3 className="text-[1.4rem] font-bold leading-tight text-white drop-shadow-md">
                    {item.title}
                  </h3>

                  {/* Hover "Explore" Indicator that slides up */}
                  <div className="mt-4 flex items-center gap-2 overflow-hidden">
                    <span className="translate-y-4 text-xs font-bold tracking-[0.2em] text-[#0D2B44] opacity-0 transition-all duration-500 uppercase group-hover:translate-y-0 group-hover:opacity-100">
                      Explore
                    </span>
                    <svg
                      aria-hidden="true"
                      className="-translate-x-4 h-4 w-4 text-[#0D2B44] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-4 hidden justify-center text-xs tracking-widest text-[#758696] uppercase lg:hidden flex">
            Swipe to explore
          </div>
        </div>
      </div>
    </section>
  );
}
