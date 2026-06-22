import Image from "next/image";
import Link from "next/link";
import { ArrowCircle } from "@/components/ArrowCircle";

export function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden bg-white px-[clamp(20px,5vw,72px)] pt-[clamp(96px,9vw,128px)] pb-[clamp(24px,4vw,44px)]">
      <div className="mx-auto grid h-full max-w-[1320px] grid-cols-1 gap-[clamp(28px,4vw,64px)] lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <div className="relative z-10 max-w-[780px]">
          <span className="mb-5 flex items-center gap-3 text-sm font-black tracking-[0.18em] text-[#758696] uppercase">
            <span className="h-[2px] w-9 bg-[#758696]" />
            Maxwell Hospitality
          </span>

          <h1 className="max-w-[860px] text-[clamp(2.15rem,3.55vw,3.9rem)] font-black leading-[0.98] tracking-normal text-[#0B1F33]">
            Food service that feels effortless.
          </h1>

          <p className="mt-6 max-w-[600px] border-l border-[#D9D9D9] pl-6 text-[clamp(0.98rem,1.25vw,1.12rem)] leading-[1.75] text-[#5D6C7B]">
            We manage healthcare food services, food courts, restaurants, and
            catering with dependable systems, disciplined kitchens, and warm
            hospitality.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              className="group inline-flex min-h-[58px] items-center justify-center gap-4 rounded-full border border-[#0D2B44] bg-[#0D2B44] py-2 pr-2 pl-7 text-[0.76rem] font-black tracking-[0.1em] text-white uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#0D2B44]"
              href="#contact"
            >
              <span>Start Inquiry</span>
              <ArrowCircle />
            </Link>
            <Link
              className="group inline-flex min-h-[58px] items-center justify-center gap-4 rounded-full border border-[#D9D9D9] bg-white py-2 pr-2 pl-7 text-[0.76rem] font-black tracking-[0.1em] text-[#0B1F33] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0D2B44] hover:bg-[#0D2B44] hover:text-white"
              href="#services"
            >
              <span>Explore Services</span>
              <ArrowCircle dark />
            </Link>
          </div>
        </div>

        <div className="relative min-h-0 lg:-mr-[clamp(0px,4vw,56px)]">
          <div className="absolute -left-5 top-5 h-full w-full rounded-[2.25rem] border border-[#D9D9D9] max-sm:hidden" />
          <div className="relative h-[min(62vh,560px)] min-h-[360px] overflow-hidden rounded-[2.25rem] bg-black shadow-2xl shadow-[#0B1F33]/14 lg:h-[min(72vh,640px)]">
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
