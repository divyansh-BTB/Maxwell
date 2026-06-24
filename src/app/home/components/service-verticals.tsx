"use client";

import Image from "next/image";
import { useState } from "react";

const services = [
  {
    title: "Street Hub",
    description:
      "A vibrant food destination offering multi-cuisine experiences with quality and convenience.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Street Cafe",
    description:
      "A modern cafe concept for beverages, snacks, quick meals, and social dining.",
    image:
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Baker Street",
    description:
      "Fresh bakery products, artisan breads, cakes, desserts, and corporate gifting.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Nutriverse",
    description:
      "Nutrition-focused food solutions for hospitals, wellness programs, and health-conscious consumers.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Maxwell Banquets",
    description:
      "Premium banquet services for weddings, celebrations, corporate gatherings, and social events.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Maxwell Events",
    description:
      "End-to-end event planning and execution services for corporate and social events.",
    image:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Hospital Management Services",
    description:
      "Hospital food operations, cafeteria management, patient diet planning, and healthcare hospitality.",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=80",
  },
];

export function ServiceVerticals() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      // UPDATED: min-h-screen and flex-col ensure it acts as a perfect full-screen section
      className="bg-white px-[clamp(20px,5vw,72px)] py-16 lg:min-h-screen lg:py-20 flex flex-col justify-center"
      id="brands"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        {/* Section Heading */}
        <div className="mb-[clamp(30px,6vw,60px)] text-center">
          <span className="mb-3 block text-sm font-bold tracking-[0.15em] text-[#758696] uppercase">
            Maxwell Ecosystem
          </span>
          <h2 className="mx-auto max-w-[800px] section-title text-[#0B1F33]">
            Brands built around daily food, care, celebration, and scale.
          </h2>
        </div>

        {/* --- DESKTOP VIEW: 2D Fisheye Curve --- */}
        <div className="hidden lg:flex flex-row items-center justify-center gap-4 h-[600px] w-full">
          {services.map((service, index) => {
            const isActive = hoveredIndex === index;

            // Slightly reduced heights so it fits perfectly on smaller laptops
            let cardHeight = 420;
            let cardFlex = 1;

            if (hoveredIndex !== null) {
              const distance = Math.abs(hoveredIndex - index);

              if (distance === 0) {
                cardHeight = 550; // Hovered center
                cardFlex = 4;
              } else if (distance === 1) {
                cardHeight = 460; // Immediate Neighbors
                cardFlex = 1.5;
              } else {
                cardHeight = 380; // Outer Edges
                cardFlex = 1;
              }
            }

            return (
              <button
                type="button"
                key={service.title}
                onFocus={() => setHoveredIndex(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                style={{
                  height: `${cardHeight}px`,
                  flex: cardFlex,
                }}
                className="group relative overflow-hidden rounded-[2rem] text-left transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className={`object-cover transition-transform duration-1000 ease-out ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />

                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/82 via-black/24 to-transparent transition-opacity duration-500 ease-in-out ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />

                <div
                  className={`absolute inset-x-0 bottom-0 flex flex-col justify-end p-8 text-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12 pointer-events-none"
                  }`}
                >
                  <h3 className="mb-3 text-3xl font-bold leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-[1.6] text-white/90 max-w-[85%]">
                    {service.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* --- MOBILE/TABLET VIEW: Stacked Cards --- */}
        <div className="flex flex-col gap-6 lg:hidden">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative h-[350px] w-full overflow-hidden rounded-[1.5rem]"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-transparent to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h3 className="mb-2 text-2xl font-bold leading-[1.2]">
                  {service.title}
                </h3>
                <p className="text-sm leading-[1.6] text-white/90">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
