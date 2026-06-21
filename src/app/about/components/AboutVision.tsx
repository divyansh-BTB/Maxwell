"use client";

import Image from "next/image";

const visionPillars = [
  "Trusted food service partner",
  "Memorable dining experiences",
  "Value for people and communities",
];

export function AboutVision() {
  return (
    <section
      className="relative overflow-hidden bg-[#3F6F63] px-[clamp(20px,5vw,72px)] py-[clamp(80px,11vw,132px)] text-white"
      id="vision"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="relative z-10 mx-auto grid max-w-[1280px] grid-cols-1 gap-[clamp(40px,7vw,92px)] lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <span className="mb-5 flex items-center gap-3 text-sm font-bold tracking-[0.18em] text-[#C9A86A] uppercase">
            <span className="h-[2px] w-8 bg-[#C9A86A]" />
            Our Vision
          </span>

          <h2 className="max-w-[720px] text-[clamp(2rem,4.4vw,4.8rem)] font-bold leading-[1.02]">
            To be the most trusted name in food service.
          </h2>

          <p className="mt-7 max-w-[680px] text-[1.08rem] leading-[1.85] text-white/70">
            MHPL aims to be recognized as a benchmark for food service
            management, known for nourishment, comfort, convenience, and
            memorable dining experiences.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {visionPillars.map((pillar) => (
              <div
                className="flex items-center gap-4 border-t border-white/16 py-4"
                key={pillar}
              >
                <span className="h-2.5 w-2.5 rounded-full bg-[#C9A86A]" />
                <p className="text-[0.92rem] font-bold tracking-[0.08em] text-white/86 uppercase">
                  {pillar}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-5 -bottom-5 h-full w-full rounded-[1.5rem] border border-[#C9A86A]/35" />
          <div className="relative min-h-[520px] overflow-hidden rounded-[1.5rem] bg-[#2F5F55] shadow-2xl shadow-black/16 max-sm:min-h-[380px]">
            <Image
              src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1400&auto=format&fit=crop"
              alt="Memorable hospitality dining experience"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3F6F63]/72 via-[#3F6F63]/18 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
