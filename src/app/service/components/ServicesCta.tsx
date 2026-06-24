import Link from "next/link";
import { ArrowCircle } from "@/components/ArrowCircle";

export function ServicesCta() {
  return (
    <section className="bg-white px-[clamp(20px,5vw,72px)] py-[clamp(72px,9vw,112px)]">
      <div className="relative mx-auto overflow-hidden rounded-[1.75rem] bg-[#0D2B44] px-6 py-[clamp(56px,8vw,92px)] text-center text-white shadow-2xl shadow-[#0B1F33]/12 md:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgb(255_255_255_/_0.12),transparent_34%)]" />
        <div className="relative z-10 mx-auto max-w-[860px]">
          <span className="mb-5 flex items-center justify-center gap-4 text-sm font-bold tracking-[0.18em] text-[#758696] uppercase">
            <span className="h-[2px] w-8 bg-[#758696]/70" />
            Contact MHPL Today
            <span className="h-[2px] w-8 bg-[#758696]/70" />
          </span>
          <h2 className="section-title ">
            Looking for Reliable Hospitality & Food Service Solutions?
          </h2>
          <div className="mt-8">
            <Link
              className="group inline-flex min-h-[58px] items-center justify-center gap-4 rounded-full border border-white bg-white py-2 pr-2 pl-7 text-sm font-black tracking-[0.08em] text-[#0B1F33] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B1F33] hover:text-white"
              href="/contact-us#inquiry-form"
            >
              <span>Contact MHPL Today</span>
              <ArrowCircle dark />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
