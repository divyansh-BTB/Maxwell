import Image from "next/image";
import Link from "next/link";
import { ArrowCircle } from "@/components/ArrowCircle";

export function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden bg-[linear-gradient(135deg,#F7FBFC_0%,#EEF8FB_58%,#DDF5F4_100%)] px-[clamp(20px,5vw,72px)] pt-[clamp(96px,9vw,128px)] pb-[clamp(24px,4vw,44px)]">
      <div className="pointer-events-none absolute right-[-120px] bottom-[-150px] h-[380px] w-[380px] rounded-full bg-[#1F9AAA]/12 blur-sm" />
      <div className="pointer-events-none absolute top-16 right-[8vw] h-[320px] w-[320px] rounded-full bg-[#78CDD7]/28 blur-3xl" />
      <div className="mx-auto grid h-full max-w-[1320px] grid-cols-1 gap-[clamp(28px,4vw,64px)] lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <div className="relative z-10 max-w-[780px]">
          <span className="mb-5 inline-flex rounded-full border border-[#2E7C82]/16 bg-[#2E7C82]/8 px-4 py-2 text-xs font-extrabold tracking-[0.14em] text-[#0E4A4F] uppercase">
            Maxwell Hospitality & Food Services
          </span>

          <h1 className="max-w-[760px] text-[clamp(2.9rem,4.7vw,5.4rem)] leading-[0.98] tracking-[-0.04em] text-[#0E4A4F]">
            One Partner. Multiple
            <br />
            Hospitality Solutions.
          </h1>

          <p className="mt-6 max-w-[600px] border-l border-[#D9E4E8] pl-6 text-[clamp(0.98rem,1.25vw,1.12rem)] leading-[1.75] text-[#5C7078]">
            From corporate catering and hospital food services to premium
            banquets, cafes, bakeries, and large-scale event management, Maxwell
            brings hospitality excellence under one roof.
          </p>

          <div className="mt-7 grid max-w-[540px] grid-cols-1 gap-3 sm:grid-cols-2">
            <Link
              className="group inline-flex min-h-[58px] items-center justify-center gap-4 rounded-full border border-[#1F9AAA] bg-[#1F9AAA] py-2 pr-2 pl-7 text-[0.76rem] font-extrabold tracking-[0.1em] text-white uppercase shadow-[0_10px_30px_rgba(31,154,170,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#1F9AAA]"
              href="/contact"
            >
              <span>Request a Proposal</span>
              <ArrowCircle />
            </Link>
            <Link
              className="group inline-flex min-h-[58px] items-center justify-center gap-4 rounded-full border border-[#D9E4E8] bg-white py-2 pr-2 pl-7 text-[0.76rem] font-black tracking-[0.1em] text-[#0E4A4F] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1F9AAA] hover:bg-[#1F9AAA] hover:text-white"
              href="/contact"
            >
              <span>Book a Consultation</span>
              <ArrowCircle dark />
            </Link>
            <Link
              className="group inline-flex min-h-[58px] items-center justify-center gap-4 rounded-full border border-[#D9E4E8] bg-white py-2 pr-2 pl-7 text-[0.76rem] font-black tracking-[0.1em] text-[#0E4A4F] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1F9AAA] hover:bg-[#1F9AAA] hover:text-white sm:col-span-2 sm:justify-self-center"
              href="/home#brands"
            >
              <span>Explore Our Brands</span>
              <ArrowCircle dark />
            </Link>
          </div>
        </div>

        <div className="relative min-h-0 lg:-mr-[clamp(0px,4vw,56px)]">
          <div className="absolute -left-5 top-5 h-full w-full rounded-[2.25rem] border border-[#D9E4E8] bg-white/35 max-sm:hidden" />
          <div className="relative h-[min(62vh,560px)] min-h-[360px] overflow-hidden rounded-[2.25rem] bg-[#0E4A4F] shadow-2xl shadow-[#243B45]/10 lg:h-[min(72vh,640px)]">
            <Image
              alt="Professional hospitality kitchen service"
              className="object-cover grayscale-[8%] contrast-105"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 52vw"
              src="/hero.png"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/34 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
