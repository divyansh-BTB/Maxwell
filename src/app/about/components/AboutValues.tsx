"use client";

import Image from "next/image";
import { useState } from "react";

const values = [
  {
    title: "Integrity",
    description: "Transparent decisions and accountable service standards.",
    tags: ["Accountability", "Trust", "Clarity"],
    image:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Excellence",
    description: "Consistent execution across kitchens, teams, and sites.",
    tags: ["Standards", "Precision", "Quality"],
    image:
      "https://images.unsplash.com/photo-1581349485608-9469926a8e5e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Hospitality",
    description: "Warm, attentive experiences for patients, guests, and teams.",
    tags: ["Warmth", "Care", "Service"],
    image:
      "https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Hygiene",
    description: "Controlled routines that keep food safety at the center.",
    tags: ["Food Safety", "Control", "Cleanliness"],
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Innovation",
    description: "Better menus, systems, and processes through improvement.",
    tags: ["Menus", "Systems", "Progress"],
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Reliability",
    description: "Dependable delivery and service that institutions can trust.",
    tags: ["Timing", "Dependability", "Operations"],
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Customer Delight",
    description: "Memorable food moments shaped around real expectations.",
    tags: ["Experience", "Satisfaction", "Detail"],
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Teamwork",
    description: "Skilled people working with shared ownership and respect.",
    tags: ["People", "Training", "Ownership"],
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1200&auto=format&fit=crop",
  },
];

export function AboutValues() {
  const [activeValue, setActiveValue] = useState(values[0]);

  return (
    <section
      className="border-b border-[#D9E4E8] bg-[#E7F1F5] px-[clamp(20px,5vw,72px)] py-[clamp(72px,9vw,112px)]"
      id="values"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-[clamp(36px,6vw,72px)] grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1fr] lg:items-end">
          <div>
            <span className="mb-4 flex items-center gap-3 text-sm font-bold tracking-[0.15em] text-[#2E7C82] uppercase">
              <span className="h-[2px] w-8 bg-[#2E7C82]" />
              Core Values
            </span>
            <h2 className="max-w-[600px] text-[clamp(2rem,4vw,3.6rem)] font-bold leading-[1.05] text-[#0E4A4F]">
              The principles behind every service.
            </h2>
          </div>
          <p className="max-w-[620px] text-[1.04rem] leading-[1.8] text-[#5C7078] lg:justify-self-end">
            These values guide how MHPL plans food programs, trains teams,
            manages kitchens, and serves people across every environment.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 rounded-[1.5rem] border border-[#D9E4E8] bg-white p-[clamp(24px,4vw,48px)] shadow-2xl shadow-[#0E4A4F]/8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div>
            <div className="divide-y divide-[#E7F1F5]">
              {values.map((value) => {
                const isActive = activeValue.title === value.title;

                return (
                  <button
                    className="group flex w-full items-center justify-between gap-5 py-5 text-left"
                    key={value.title}
                    onClick={() => setActiveValue(value)}
                    type="button"
                  >
                    <div>
                      <h3
                        className={`text-[1.05rem] font-bold transition-colors duration-300 ${
                          isActive ? "text-[#1F9AAA]" : "text-[#5C7078]"
                        }`}
                      >
                        {value.title}
                      </h3>
                      {isActive ? (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {value.tags.map((tag) => (
                            <span
                              className="rounded-full bg-[#0E4A4F]/8 px-3 py-1.5 text-[0.72rem] font-bold text-[#1F9AAA]"
                              key={tag}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                    <span
                      className={`text-2xl leading-none transition-colors duration-300 ${
                        isActive ? "text-[#1F9AAA]" : "text-[#2E7C82]"
                      }`}
                    >
                      {isActive ? "-" : "+"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <div className="relative min-h-[430px] overflow-hidden rounded-[1.35rem] bg-[#1F9AAA] max-sm:min-h-[320px]">
              <Image
                src={activeValue.image}
                alt={activeValue.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-transparent" />
            </div>

            <div className="mt-8 max-w-[760px]">
              <p className="text-[0.82rem] font-bold tracking-[0.16em] text-[#2E7C82] uppercase">
                {activeValue.title}
              </p>
              <p className="mt-3 text-[1.05rem] leading-[1.85] text-[#5C7078]">
                {activeValue.description} These principles shape how our teams
                plan, prepare, and serve across healthcare, food courts,
                restaurants, and catering environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
