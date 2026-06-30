"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

export type GalleryImage = {
  alt: string;
  src: string;
};

export type GalleryCategory = {
  id: string;
  images: GalleryImage[];
  title: string;
};

type GalleryCollectionProps = {
  categories: GalleryCategory[];
};

export function GalleryCollection({ categories }: GalleryCollectionProps) {
  const allImages = useMemo(
    () =>
      categories.flatMap((category) =>
        category.images.map((image) => ({
          ...image,
          category: category.title,
        })),
      ),
    [categories],
  );
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const carouselRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const totalImages = allImages.length;

  useEffect(() => {
    if (selectedIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) =>
          current === null ? null : (current - 1 + totalImages) % totalImages,
        );
      }
      if (event.key === "ArrowRight") {
        setSelectedIndex((current) =>
          current === null ? null : (current + 1) % totalImages,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, totalImages]);

  const openImage = (src: string) => {
    const index = allImages.findIndex((image) => image.src === src);
    if (index >= 0) setSelectedIndex(index);
  };

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === null ? null : (current - 1 + totalImages) % totalImages,
    );
  };

  const showNext = () => {
    setSelectedIndex((current) =>
      current === null ? null : (current + 1) % totalImages,
    );
  };

  const scrollCarousel = (categoryId: string, direction: "left" | "right") => {
    const carousel = carouselRefs.current[categoryId];

    if (!carousel) return;

    carousel.scrollBy({
      behavior: "smooth",
      left: direction === "left" ? -carousel.clientWidth : carousel.clientWidth,
    });
  };

  const selectedImage =
    selectedIndex === null ? null : allImages[selectedIndex];

  if (categories.length === 0) {
    return (
      <section className="px-[clamp(20px,5vw,72px)] pt-48 pb-24 text-center">
        <h1 className="page-title text-[#0B1F33]">Gallery coming soon</h1>
        <p className="mx-auto mt-5 max-w-xl section-copy">
          New moments from Maxwell Hospitality will be added here shortly.
        </p>
      </section>
    );
  }

  return (
    <>
      <div className="bg-white px-[clamp(20px,5vw,72px)] pt-[clamp(154px,16vw,210px)] pb-[clamp(72px,9vw,120px)]">
        <h1 className="sr-only">Maxwell Hospitality Gallery</h1>
        <div className="mx-auto max-w-[1280px] space-y-[clamp(88px,11vw,150px)]">
          {categories.map((category, categoryIndex) => (
            <section
              className="scroll-mt-24"
              id={category.id}
              key={category.id}
            >
              <div className="mb-9 flex flex-col gap-5 border-b border-[#DDE3E7] pb-7 sm:flex-row sm:items-end sm:justify-between">
                <div className="flex items-start gap-5">
                  <span className="pt-2 font-mono text-xs text-[#788997]">
                    {String(categoryIndex + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="mb-2 text-xs font-bold tracking-[0.15em] text-[#667889] uppercase">
                      Maxwell stories
                    </p>
                    <h2 className="section-title text-[#0B1F33]">
                      {category.title}
                    </h2>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {category.images.length > 3 ? (
                    <div className="flex items-center gap-2">
                      <button
                        aria-label={`Previous ${category.title} photos`}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D5DCE1] bg-white text-[#0B1F33] transition-colors duration-200 hover:border-[#0B1F33] hover:bg-[#0B1F33] hover:text-white focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#0D2B44]"
                        onClick={() => scrollCarousel(category.id, "left")}
                        type="button"
                      >
                        <ArrowIcon direction="left" />
                      </button>
                      <button
                        aria-label={`Next ${category.title} photos`}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0B1F33] bg-[#0B1F33] text-white transition-colors duration-200 hover:bg-white hover:text-[#0B1F33] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#0D2B44]"
                        onClick={() => scrollCarousel(category.id, "right")}
                        type="button"
                      >
                        <ArrowIcon direction="right" />
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>

              <div
                className={
                  category.images.length > 3
                    ? "flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    : "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
                }
                ref={(element) => {
                  carouselRefs.current[category.id] = element;
                }}
              >
                {category.images.map((image, imageIndex) => (
                  <button
                    aria-label={`Open ${image.alt}`}
                    className={`group relative h-[340px] cursor-zoom-in overflow-hidden rounded-[1.25rem] bg-[#E7EAEC] text-left focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#0D2B44] sm:h-[400px] lg:h-[420px] ${
                      category.images.length > 3
                        ? "w-[86%] shrink-0 snap-start sm:w-[calc((100%_-_16px)/2)] lg:w-[calc((100%_-_32px)/3)]"
                        : "w-full"
                    }`}
                    key={image.src}
                    onClick={() => openImage(image.src)}
                    type="button"
                  >
                    <Image
                      alt={image.alt}
                      className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.025] motion-reduce:transition-none"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      src={image.src}
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-[#071625]/60 via-transparent to-transparent opacity-50 transition-opacity duration-200 group-hover:opacity-80" />
                    <span className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white">
                      <span className="text-xs font-bold tracking-[0.12em] uppercase">
                        Photo {String(imageIndex + 1).padStart(2, "0")}
                      </span>
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/15 backdrop-blur-sm transition-colors duration-200 group-hover:bg-white group-hover:text-[#0B1F33]">
                        <ExpandIcon />
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {selectedImage && selectedIndex !== null ? (
        <div
          aria-label="Image viewer"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#06121E]/96 p-3 sm:p-6"
          role="dialog"
        >
          <button
            aria-label="Close image viewer"
            className="absolute top-4 right-4 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-colors duration-200 hover:bg-white hover:text-[#0B1F33] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-white sm:top-6 sm:right-6"
            onClick={() => setSelectedIndex(null)}
            ref={closeButtonRef}
            type="button"
          >
            <CloseIcon />
          </button>

          <button
            aria-label="Previous image"
            className="absolute bottom-5 left-[calc(50%-62px)] z-20 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-colors duration-200 hover:bg-white hover:text-[#0B1F33] focus-visible:outline-3 focus-visible:outline-white sm:top-1/2 sm:bottom-auto sm:left-6 sm:-translate-x-0 sm:-translate-y-1/2"
            onClick={showPrevious}
            type="button"
          >
            <ArrowIcon direction="left" />
          </button>

          <div className="relative h-[calc(100dvh-150px)] w-[calc(100vw-24px)] sm:h-[calc(100dvh-96px)] sm:w-[calc(100vw-180px)]">
            <Image
              alt={selectedImage.alt}
              className="object-contain"
              fill
              priority
              sizes="100vw"
              src={selectedImage.src}
            />
          </div>

          <div className="absolute inset-x-20 bottom-5 z-10 hidden text-center text-sm text-white/80 sm:block">
            <p className="font-semibold text-white">{selectedImage.category}</p>
            <p className="mt-1 text-xs tracking-[0.12em] uppercase">
              {selectedIndex + 1} / {totalImages}
            </p>
          </div>

          <button
            aria-label="Next image"
            className="absolute right-[calc(50%-62px)] bottom-5 z-20 flex h-12 w-12 translate-x-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-colors duration-200 hover:bg-white hover:text-[#0B1F33] focus-visible:outline-3 focus-visible:outline-white sm:top-1/2 sm:right-6 sm:bottom-auto sm:translate-x-0 sm:-translate-y-1/2"
            onClick={showNext}
            type="button"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      ) : null}
    </>
  );
}

function ExpandIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      {direction === "left" ? (
        <path d="m15 18-6-6 6-6" />
      ) : (
        <path d="m9 18 6-6-6-6" />
      )}
    </svg>
  );
}
