"use client";

import Image from "next/image";
import { useState } from "react";

const services = [
  {
    title: "Healthcare Food Services",
    description: "Patient-focused nutrition and food management solutions.",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Food Court Management",
    description: "Managing premium food courts with renowned brands.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Restaurant Operations",
    description: "Delivering memorable dining experiences.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Indoor Catering",
    description: "Corporate and institutional catering solutions.",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Outdoor Catering",
    description: "Event catering for celebrations and special occasions.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80",
  },
];

export function ServiceVerticals() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      // UPDATED: min-h-screen and flex-col ensure it acts as a perfect full-screen section
      className="bg-[#FAFAF8] px-[clamp(20px,5vw,72px)] py-16 lg:py-0 min-h-screen lg:h-screen flex flex-col justify-center"
      id="services"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        {/* Section Heading */}
        <div className="mb-[clamp(30px,6vw,60px)] text-center">
          <span className="mb-3 block text-sm font-bold tracking-[0.15em] text-[#C9A86A] uppercase">
            What We Do
          </span>
          <h2 className="mx-auto max-w-[800px] text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.1] text-[#3F6F63]">
            Custom food service programs for evolving spaces
          </h2>
        </div>

        {/* --- DESKTOP VIEW: 2D Fisheye Curve --- */}
        <div 
          className="hidden lg:flex flex-row items-center justify-center gap-4 h-[600px] w-full"
          onMouseLeave={() => setHoveredIndex(null)} 
        >
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
              <div
                key={service.title}
                onMouseEnter={() => setHoveredIndex(index)}
                style={{ 
                  height: `${cardHeight}px`, 
                  flex: cardFlex 
                }}
                className="group relative overflow-hidden rounded-[2rem] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
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
                  className={`absolute inset-0 bg-gradient-to-t from-[#3F6F63]/92 via-[#3F6F63]/28 to-transparent transition-opacity duration-500 ease-in-out ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`} 
                />

                <div 
                  className={`absolute inset-x-0 bottom-0 flex flex-col justify-end p-8 text-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 pointer-events-none"
                  }`}
                >
                  <h3 className="mb-3 text-3xl font-bold leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-[1.6] text-white/90 max-w-[85%]">
                    {service.description}
                  </p>
                </div>
              </div>
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#3F6F63]/88 via-transparent to-transparent" />
              
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
