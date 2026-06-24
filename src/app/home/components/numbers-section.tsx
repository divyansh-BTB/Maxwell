"use client";

import { useEffect, useRef, useState } from "react";

const numbers = [
  { value: "25+", label: "Corporate Clients" },
  { value: "180+", label: "Events Successfully Managed" },
  { value: "350+", label: "Catering Projects Delivered" },
  { value: "1.2M+", label: "Meals Served" },
  { value: "12+", label: "Healthcare Institutions Supported" },
  { value: "8+", label: "Years of Hospitality Excellence" },
];

export function NumbersSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pageIndexes, setPageIndexes] = useState([0]);

  useEffect(() => {
    const updatePages = () => {
      const carousel = carouselRef.current;
      const firstCard = cardRefs.current[0];

      if (!(carousel && firstCard)) return;

      const gap = 20;
      const visibleCount = Math.max(
        1,
        Math.floor(
          (carousel.clientWidth + gap) / (firstCard.offsetWidth + gap),
        ),
      );
      const pages = [];

      for (let index = 0; index < numbers.length; index += visibleCount) {
        pages.push(index);
      }

      const lastPageIndex = Math.max(0, numbers.length - visibleCount);

      if (!pages.includes(lastPageIndex)) {
        pages.push(lastPageIndex);
      }

      setPageIndexes([...new Set(pages)].sort((a, b) => a - b));
    };

    updatePages();
    window.addEventListener("resize", updatePages);

    return () => window.removeEventListener("resize", updatePages);
  }, []);

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
    const activePagePosition = pageIndexes.findLastIndex(
      (pageIndex) => pageIndex <= activeIndex,
    );
    const nextPagePosition =
      activePagePosition <= 0 ? pageIndexes.length - 1 : activePagePosition - 1;

    scrollToCard(pageIndexes[nextPagePosition] ?? 0);
  };

  const scrollNext = () => {
    const activePagePosition = pageIndexes.findLastIndex(
      (pageIndex) => pageIndex <= activeIndex,
    );
    const nextPagePosition =
      activePagePosition >= pageIndexes.length - 1 ? 0 : activePagePosition + 1;

    scrollToCard(pageIndexes[nextPagePosition] ?? 0);
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
            <h2 className="max-w-[620px] section-title text-[#0B1F33]">
              Built for volume, trust, and repeatable quality.
            </h2>
          </div>
          <p className="max-w-[620px] section-copy text-[#5D6C7B] lg:justify-self-end">
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
                  <p className="text-[clamp(2.65rem,6vw,4.15rem)] font-black leading-[0.94] tracking-[-0.035em] text-[#0B1F33]">
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
            {pageIndexes.map((pageIndex, index) => (
              <button
                aria-label={`Go to counter page ${index + 1}`}
                className={`h-2 w-8 rounded-full transition-colors hover:bg-[#0D2B44] ${
                  pageIndex <= activeIndex &&
                  (pageIndexes[index + 1] ?? numbers.length) > activeIndex
                    ? "bg-[#0D2B44]"
                    : "bg-[#D9D9D9]"
                }`}
                key={`numbers-page-${pageIndex}`}
                onClick={() => scrollToCard(pageIndex)}
                type="button"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
