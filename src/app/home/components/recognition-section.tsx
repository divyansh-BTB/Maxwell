"use client";

import Image from "next/image";
import { useState } from "react";

const recognitionItems = [
  {
    title: "Sharda Care Healthcity",
    // Represents quality and clinical precision
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Sharda University",
    // Represents trust, partnership, and professional relationships
    image:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Sharda Hospital",
    // Represents official documentation, quality seals, premium paper
    image:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Sharda Group",
    // Represents celebration, galas, excellence
    image:
      "https://images.unsplash.com/photo-1530103862676-de8892b07439?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Healthcare & Institutional Clients",
    // Represents a glowing, premium hospitality team or establishment
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
  },
];

export function RecognitionSection() {
  // Track which item is currently hovered to show the corresponding image
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="bg-white px-[clamp(20px,5vw,72px)] py-[clamp(72px,10vw,132px)] text-[#0B1F33]"
      id="recognition"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* --- HEADER --- */}
        <div className="mb-[clamp(50px,8vw,100px)] flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="w-full max-w-[700px]">
            <span className="mb-4 flex items-center gap-3 text-sm font-bold tracking-[0.15em] text-[#758696] uppercase">
              <span className="h-[2px] w-8 bg-[#758696]" />
              Featured Clients
            </span>
            {/* Shorter, punchier heading */}
            <h2 className="m-0 section-title text-[#0B1F33]">
              Trusted by leading organizations.
            </h2>
          </div>
          <div className="w-full lg:w-[400px] lg:pb-3">
            <p className="m-0 section-copy text-[#5D6C7B]">
              This section is ready for the final logo grid while showing the
              client and partner categories Maxwell wants to highlight.
            </p>
          </div>
        </div>

        {/* --- INTERACTIVE SPLIT DIRECTORY --- */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Left Side: The Interactive List */}
          <div className="flex flex-col">
            {/* Top border for the list */}
            <div className="h-[1px] w-full bg-[#D9D9D9]" />

            {recognitionItems.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  type="button"
                  key={item.title}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  className="group relative w-full cursor-pointer border-b border-[#D9D9D9] py-8 text-left transition-colors duration-500 hover:border-[#0D2B44]/50 focus:outline-none lg:py-10"
                >
                  <div className="flex items-center justify-between pr-4">
                    {/* The Title */}
                    <div className="flex items-center gap-6 md:gap-10">
                      <span
                        className={`text-lg font-mono transition-colors duration-500 ${isActive ? "text-[#0D2B44]" : "text-[#758696]"}`}
                      >
                        0{index + 1}
                      </span>
                      <h3
                        className={`text-2xl font-bold transition-all duration-500 md:text-4xl ${isActive ? "text-[#0B1F33] translate-x-4" : "text-[#5D6C7B]"}`}
                      >
                        {item.title}
                      </h3>
                    </div>

                    {/* The Sliding Gold Arrow */}
                    <svg
                      aria-hidden="true"
                      className={`h-8 w-8 text-[#0D2B44] transition-all duration-500 ease-out ${
                        isActive
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-8"
                      }`}
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

                  {/* MOBILE ONLY: The image appears directly under the text when tapped/hovered since split-screen doesn't fit on phones */}
                  <div
                    className={`mt-6 overflow-hidden rounded-xl transition-all duration-700 ease-in-out lg:hidden ${isActive ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <div className="relative h-[250px] w-full">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Side: The Sticky Image Viewer (Desktop Only) */}
          <div className="hidden sticky top-32 lg:block">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-[#0B1F33] shadow-2xl">
              {recognitionItems.map((item, index) => (
                <Image
                  key={item.title}
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`object-cover transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    activeIndex === index
                      ? "opacity-100 scale-100 z-10"
                      : "opacity-0 scale-110 z-0"
                  }`}
                  sizes="(max-width: 1024px) 0vw, 40vw"
                  priority={index === 0} // Prioritize loading the first image
                />
              ))}

              {/* Subtle inner shadow for depth */}
              <div
                className="absolute inset-0 z-20 rounded-[2rem] ring-1 ring-inset ring-white/10"
                pointer-events-none="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
