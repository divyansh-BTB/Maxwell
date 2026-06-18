"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const galleryItems = [
  {
    title: "R&R Event Images",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Catering Events",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Food Court Operations",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Team Activities",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Hospital Food Service Operations",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Banquet Setup",
    image:
      "https://images.unsplash.com/photo-1606900136270-2a2a07c9d1c9?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Healthcare Kitchen Operations",
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Event Catering Station",
    image:
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Team Dinner/Celebration",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Cafeteria Food Service Line",
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
      className="bg-[#23443D] px-[clamp(20px,5vw,72px)] py-[clamp(72px,10vw,120px)] overflow-hidden"
      id="gallery"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        
        {/* --- EDITORIAL HEADER LAYOUT --- */}
        <div className="mb-[clamp(40px,6vw,80px)] flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="w-full lg:w-1/2">
            <span className="mb-4 flex items-center gap-3 text-sm font-bold tracking-[0.15em] text-[#C9A86A] uppercase">
              <span className="h-[2px] w-8 bg-[#C9A86A]" />
              Gallery Preview
            </span>
            <h2 className="m-0 text-[clamp(2rem,3.5vw,3rem)] font-bold leading-[1.1] text-[#FAFAF8]">
              Moments of excellence across service & operations.
            </h2>
          </div>
          
          <div className="flex w-full items-center justify-between lg:w-auto lg:justify-end lg:gap-12">
            <Link
              className="group inline-flex items-center gap-3 border-b border-[#C9A86A]/40 pb-1 text-sm font-bold tracking-[0.15em] text-[#FAFAF8] uppercase transition-all duration-300 hover:border-[#C9A86A] hover:text-[#C9A86A]"
              href="#gallery"
            >
              View Full Gallery
            </Link>

            {/* Pure Minimalist Arrows */}
            <div className="hidden items-center gap-6 lg:flex">
              <button
                onClick={scrollPrev}
                className="text-white/40 transition-all duration-300 hover:-translate-x-2 hover:text-[#C9A86A]"
                aria-label="Previous image"
              >
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={scrollNext}
                className="text-white/40 transition-all duration-300 hover:translate-x-2 hover:text-[#C9A86A]"
                aria-label="Next image"
              >
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
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
                className="group relative flex h-[400px] w-[85vw] sm:w-[360px] flex-none snap-start flex-col justify-end overflow-hidden rounded-[2rem] border border-white/10 transition-all duration-700 hover:border-[#C9A86A]/50 hover:shadow-2xl hover:shadow-[#C9A86A]/20"
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
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0d1a17] via-[#0d1a17]/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                {/* 3. Text & Hover Content */}
                <div className="relative z-20 flex flex-col p-8 transition-transform duration-500 ease-out group-hover:-translate-y-2">
                  {/* Decorative Gold Line */}
                  <div className="mb-4 h-[2px] w-8 bg-[#C9A86A] transition-all duration-500 group-hover:w-16" />
                  
                  <h3 className="text-[1.4rem] font-bold leading-tight text-white drop-shadow-md">
                    {item.title}
                  </h3>
                  
                  {/* Hover "Explore" Indicator that slides up */}
                  <div className="mt-4 flex items-center gap-2 overflow-hidden">
                    <span className="translate-y-4 text-xs font-bold tracking-[0.2em] text-[#C9A86A] opacity-0 transition-all duration-500 uppercase group-hover:translate-y-0 group-hover:opacity-100">
                      Explore
                    </span>
                    <svg className="-translate-x-4 h-4 w-4 text-[#C9A86A] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-4 hidden justify-center text-xs tracking-widest text-[#FAFAF8]/30 uppercase lg:hidden flex">
            Swipe to explore
          </div>
        </div>

      </div>
    </section>
  );
}