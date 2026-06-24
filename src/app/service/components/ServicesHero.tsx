import Image from "next/image";

export function ServicesHero() {
  return (
    <section className="relative min-h-[78vh] overflow-hidden bg-[#0D2B44] px-[clamp(20px,5vw,72px)] pt-[clamp(150px,16vw,210px)] pb-[clamp(72px,10vw,124px)] text-white">
      <Image
        src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2200&auto=format&fit=crop"
        alt="Premium hospitality food service"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="relative z-10 mx-auto grid max-w-[1280px] grid-cols-1 gap-8 lg:grid-cols-[0.9fr_0.82fr] lg:items-end">
        <div>
          <span className="mb-5 flex items-center gap-3 text-sm font-bold tracking-[0.18em] text-[#758696] uppercase">
            <span className="h-[2px] w-8 bg-[#758696]" />
            Services
          </span>
          <h1 className="max-w-[760px] page-title ">
            Hospitality, food service, catering, and event solutions.
          </h1>
        </div>
        <p className="max-w-[620px] section-copy text-white/74 lg:justify-self-end">
          Maxwell supports corporate organizations, healthcare institutions,
          banquets, cafes, bakeries, food courts, and events with disciplined
          food service programs designed around quality, hygiene, and reliable
          execution.
        </p>
      </div>
    </section>
  );
}
