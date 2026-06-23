import Link from "next/link";
import { ArrowCircle } from "@/components/ArrowCircle";
import { SiteHeader } from "@/components/SiteHeader";

export default function CareersPage() {
  return (
    <main>
      <SiteHeader />
      <section className="bg-white px-[clamp(20px,5vw,72px)] pt-[clamp(150px,16vw,210px)] pb-[clamp(72px,10vw,120px)]">
        <div className="mx-auto max-w-[980px]">
          <span className="mb-4 flex items-center gap-3 text-sm font-bold tracking-[0.15em] text-[#758696] uppercase">
            <span className="h-[2px] w-8 bg-[#758696]" />
            Careers
          </span>
          <h1 className="max-w-[760px] text-[clamp(2.8rem,6vw,6rem)] leading-[0.96] text-[#0B1F33]">
            Careers
          </h1>
          <p className="mt-6 max-w-[720px] text-[1.08rem] leading-[1.85] text-[#5D6C7B]">
            Join Maxwell Hospitality & Food Services across corporate,
            healthcare, catering, food court, banquet, and event operations.
          </p>
          <Link
            className="group mt-8 inline-flex min-h-[58px] items-center justify-center gap-4 rounded-full border border-[#0D2B44] bg-[#0D2B44] py-2 pr-2 pl-7 text-sm font-black tracking-[0.08em] text-white uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#0D2B44]"
            href="/contact-us#inquiry-form"
          >
            <span>Contact HR</span>
            <ArrowCircle />
          </Link>
        </div>
      </section>
    </main>
  );
}
