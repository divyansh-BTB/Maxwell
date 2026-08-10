import Image from "next/image";
import Link from "next/link";
import { ArrowCircle } from "@/components/ArrowCircle";
import { InsideMaxwellVideo } from "./inside-maxwell-video";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white px-[clamp(20px,5vw,72px)] pt-[clamp(104px,10vw,132px)] pb-[clamp(56px,7vw,96px)] lg:flex lg:min-h-screen lg:items-center lg:py-[clamp(96px,9vw,128px)]">
      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-[clamp(44px,5vw,72px)] lg:grid-cols-[1.24fr_0.76fr]">
        <div className="max-w-[820px]">
          <span
            className="hero-rise mb-7 flex items-center gap-3 text-[0.68rem] font-black tracking-[0.24em] text-[#5D6C7B] uppercase"
            style={{ animationDelay: "60ms" }}
          >
            <span className="h-px w-10 bg-[#758696]" />
            Maxwell Hospitality
          </span>

          <div className="hero-title-wrap">
            <h1
              className="hero-rise hero-title text-[#0B1F33]"
              style={{ animationDelay: "140ms" }}
            >
              One Partner. Multiple
              <br className="hidden md:block" />
              {" Hospitality Solutions."}
            </h1>
          </div>

          <p
            className="hero-rise mt-8 max-w-[540px] text-[1.02rem] leading-[1.75] text-[#5D6C7B]"
            style={{ animationDelay: "220ms" }}
          >
            From corporate catering and hospital food services to premium
            banquets, cafes, bakeries, and large-scale event management, Maxwell
            brings hospitality excellence under one roof.
          </p>

          <div
            className="hero-rise mt-11 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "300ms" }}
          >
            <Link
              className="group inline-flex min-h-[54px] items-center gap-4 rounded-full border border-[#0D2B44] bg-[#0D2B44] py-2 pr-2 pl-7 text-[0.72rem] font-extrabold tracking-[0.12em] text-white uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#0D2B44]"
              href="/contact#inquiry-form"
            >
              <span>Request a Proposal</span>
              <ArrowCircle />
            </Link>
            <Link
              className="inline-flex min-h-[54px] items-center rounded-full border border-[#0B1F33]/20 px-8 text-[0.72rem] font-extrabold tracking-[0.12em] text-[#0B1F33] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0B1F33] hover:bg-[#0B1F33] hover:text-white"
              href="/our-brands"
            >
              Explore Our Brands
            </Link>
          </div>

          <div className="hero-rise" style={{ animationDelay: "380ms" }}>
            <InsideMaxwellVideo />
          </div>
        </div>

        <div className="hero-rise relative" style={{ animationDelay: "260ms" }}>
          <div className="relative h-[clamp(340px,52vw,420px)] w-full overflow-hidden rounded-[1.5rem] bg-[#0B1F33] shadow-[0_30px_80px_-40px_rgba(11,31,51,0.55)] lg:h-[min(74vh,640px)]">
            <Image
              alt="Maxwell hospitality team serving guests in a professional kitchen"
              className="object-cover"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              src="/hero.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
