"use client";

import { useRef, useState } from "react";

const numbers = [
  { value: "XX+", label: "Corporate Clients" },
  { value: "XX+", label: "Events Successfully Managed" },
  { value: "XX+", label: "Catering Projects Delivered" },
  { value: "XX Million+", label: "Meals Served" },
  { value: "XX+", label: "Healthcare Institutions Supported" },
  { value: "XX+", label: "Years of Hospitality Excellence" },
];

export function NumbersSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCard = (index: number) => {
    const carousel = carouselRef.current;
    const card = cardRefs.current[index];

    if (!(carousel && card)) return;

    carousel.scrollTo({
      left: card.offsetLeft - carousel.offsetLeft,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const scrollPrev = () => {
    const nextIndex = activeIndex === 0 ? numbers.length - 1 : activeIndex - 1;
    scrollToCard(nextIndex);
  };

  const scrollNext = () => {
    const nextIndex = activeIndex === numbers.length - 1 ? 0 : activeIndex + 1;
    scrollToCard(nextIndex);
  };

  const updateActiveCard = () => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const carouselLeft = carousel.scrollLeft;
    const nearestIndex = cardRefs.current.reduce((nearest, card, index) => {
      if (!card) return nearest;

      const nearestCard = cardRefs.current[nearest];
      if (!nearestCard) return index;

      const currentDistance = Math.abs(card.offsetLeft - carouselLeft);
      const nearestDistance = Math.abs(nearestCard.offsetLeft - carouselLeft);

      return currentDistance < nearestDistance ? index : nearest;
    }, 0);

    setActiveIndex(nearestIndex);
  };

  return (
    <section
      className="overflow-hidden bg-[#F6F7F8] px-[clamp(20px,5vw,72px)] py-[clamp(72px,9vw,116px)]"
      id="numbers"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-[clamp(40px,6vw,72px)] flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <span className="mb-5 flex items-center gap-3 text-sm font-bold tracking-[0.15em] text-[#758696] uppercase">
              <span className="h-[2px] w-8 bg-[#758696]" />
              By The Numbers
            </span>
            <h2 className="max-w-[620px] text-[clamp(2rem,3.8vw,3.4rem)] font-bold leading-[1.08] text-[#0B1F33]">
              Built for volume, trust, and repeatable quality.
            </h2>
          </div>
          <p className="max-w-[620px] text-[1.04rem] leading-[1.8] text-[#5D6C7B] lg:justify-self-end">
            These counters are ready for final business numbers while preserving
            the structure for corporate, healthcare, catering, and events scale.
          </p>
        </div>

        <div className="relative">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-xs font-black tracking-[0.16em] text-[#758696] uppercase">
              Scroll the counters
            </p>
            <div className="hidden items-center gap-3 md:flex">
              <button
                aria-label="Previous counters"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D9D9D9] bg-white text-[#0B1F33] transition-colors hover:border-[#0D2B44] hover:bg-[#0D2B44] hover:text-white"
                onClick={scrollPrev}
                type="button"
              >
                <span aria-hidden="true" className="text-xl leading-none">
                  ←
                </span>
              </button>
              <button
                aria-label="Next counters"
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#0D2B44] bg-[#0D2B44] text-white transition-colors hover:bg-white hover:text-[#0D2B44]"
                onClick={scrollNext}
                type="button"
              >
                <span aria-hidden="true" className="text-xl leading-none">
                  →
                </span>
              </button>
            </div>
          </div>

          <div
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-px pt-3 pb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            onScroll={updateActiveCard}
            ref={carouselRef}
          >
            {numbers.map((item, index) => (
              <article
                className="group relative flex min-h-[360px] w-[82vw] max-w-[420px] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-[1.5rem] border border-[#D9D9D9] bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#0D2B44] hover:shadow-2xl hover:shadow-[#0B1F33]/10 sm:w-[390px]"
                id={`numbers-card-${index + 1}`}
                key={item.label}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
              >
                <div className="absolute -right-16 -bottom-16 h-40 w-40 rounded-full border border-[#D9D9D9] transition-colors duration-300 group-hover:border-[#0D2B44]/35" />
                <div className="relative z-10 flex items-center justify-between">
                  <p className="text-[0.78rem] font-black tracking-[0.18em] text-[#758696] uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F6F7F8] text-[#0B1F33] transition-colors duration-300 group-hover:bg-[#0D2B44] group-hover:text-white">
                    +
                  </span>
                </div>

                <div className="relative z-10">
                  <p className="text-[clamp(3.4rem,8vw,5.4rem)] font-black leading-[0.9] tracking-[-0.05em] text-[#0B1F33]">
                    {item.value}
                  </p>
                  <p className="mt-6 max-w-[300px] text-[1.05rem] font-bold leading-[1.45] text-[#5D6C7B]">
                    {item.label}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 flex justify-center gap-2">
            {numbers.map((item, index) => (
              <button
                aria-label={`Go to ${item.label}`}
                className={`h-2 w-8 rounded-full transition-colors hover:bg-[#0D2B44] ${
                  activeIndex === index ? "bg-[#0D2B44]" : "bg-[#D9D9D9]"
                }`}
                key={`${item.label}-dot`}
                onClick={() => scrollToCard(index)}
                type="button"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
