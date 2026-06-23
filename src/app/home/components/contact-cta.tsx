"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowCircle } from "@/components/ArrowCircle";

export function ContactCta() {
  return (
    <section
      className="bg-white px-[clamp(20px,5vw,72px)] py-[clamp(60px,8vw,120px)]"
      id="contact"
    >
      {/* --- THE COMPACT FLOATING CARD --- */}
      {/* Reduced vertical padding here (py-[clamp(48px,6vw,72px)]) for a sleeker look */}
      <div className="relative mx-auto w-full max-w-[1200px] overflow-hidden rounded-[2rem] bg-[#1F9AAA] px-6 py-[clamp(48px,6vw,72px)] text-center shadow-2xl shadow-[#0E4A4F]/15 md:px-12 lg:rounded-[3rem]">
        {/* Cinematic Background Texture */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=1920&auto=format&fit=crop"
            alt="Contact MHPL"
            fill
            className="object-cover opacity-[0.12] mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F9AAA] via-transparent to-[#1F9AAA]/80" />
        </div>

        {/* Ambient Gold Glow */}
        <div className="absolute left-1/2 top-1/2 z-0 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1F9AAA] opacity-[0.1] blur-[100px] pointer-events-none" />

        {/* --- CARD CONTENT --- */}
        <div className="relative z-10 mx-auto flex max-w-[800px] flex-col items-center">
          {/* Eyebrow - Tightened margin */}
          <span className="mb-4 flex items-center justify-center gap-4 text-xs font-bold tracking-[0.2em] text-[#2E7C82] uppercase sm:text-sm">
            <span className="h-[2px] w-6 bg-[#2E7C82]/60 sm:w-8" />
            Ready to Partner With Maxwell?
            <span className="h-[2px] w-6 bg-[#2E7C82]/60 sm:w-8" />
          </span>

          {/* Heading - Slightly scaled down to prevent excessive wrapping */}
          <h2 className="m-0 text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.15] text-white drop-shadow-md">
            Let's create exceptional hospitality experiences together.
          </h2>

          {/* Description - Tightened top and bottom margins */}
          <p className="mx-auto mt-5 mb-8 max-w-[700px] text-[1.05rem] leading-[1.7] text-white/70">
            Discuss corporate catering, healthcare food services, restaurant
            partnerships, banquets, bakery gifting, and event requirements with
            Maxwell Hospitality.
          </p>

          {/* Animated Pill Button */}
          <Link
            href="/contact"
            className="group relative inline-flex min-h-[58px] items-center justify-center gap-4 overflow-hidden rounded-full border border-white bg-white py-2 pr-2 pl-7 font-bold tracking-[0.1em] text-[#0E4A4F] uppercase transition-all duration-500 hover:-translate-y-1 hover:bg-[#0E4A4F] hover:text-white max-[640px]:w-full"
          >
            <span className="relative z-10 flex items-center gap-3">
              Request a Proposal
            </span>
            <ArrowCircle dark />
            {/* Sweep Shine Effect */}
            <div className="absolute inset-0 z-0 h-full w-full translate-x-[-100%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[100%]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
