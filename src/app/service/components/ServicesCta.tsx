import Link from "next/link";

export function ServicesCta() {
  return (
    <section className="bg-[#FAFAF8] px-[clamp(20px,5vw,72px)] py-[clamp(72px,9vw,112px)]">
      <div className="relative mx-auto overflow-hidden rounded-[1.75rem] bg-[#244C43] px-6 py-[clamp(56px,8vw,92px)] text-center text-white shadow-2xl shadow-[#3F6F63]/12 md:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgb(201_168_106_/_0.16),transparent_34%)]" />
        <div className="relative z-10 mx-auto max-w-[860px]">
          <span className="mb-5 flex items-center justify-center gap-4 text-sm font-bold tracking-[0.18em] text-[#C9A86A] uppercase">
            <span className="h-[2px] w-8 bg-[#C9A86A]/70" />
            Contact MHPL Today
            <span className="h-[2px] w-8 bg-[#C9A86A]/70" />
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.75rem)] font-bold leading-[1.08]">
            Looking for Reliable Hospitality & Food Service Solutions?
          </h2>
          <div className="mt-8">
            <Link
              className="inline-flex min-h-13 items-center justify-center rounded-full bg-[#C9A86A] px-8 text-sm font-black tracking-[0.08em] text-[#244C43] uppercase transition-transform duration-200 hover:-translate-y-0.5"
              href="/contact"
            >
              Contact MHPL Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
