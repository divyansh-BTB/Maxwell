import Image from "next/image";

const kitchenHighlights = [
  "ISO-Compliant Processes",
  "Food Safety Standards",
  "Temperature Monitoring",
  "Fresh Ingredient Sourcing",
  "Trained Culinary Team",
];

export function KitchenExcellenceSection() {
  return (
    <section
      className="bg-white px-[clamp(20px,5vw,72px)] pb-[clamp(72px,9vw,112px)]"
      id="kitchen-excellence"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 overflow-hidden rounded-[1.75rem] border border-[#D9D9D9] bg-white shadow-2xl shadow-[#0B1F33]/8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative min-h-[380px] bg-[#0D2B44]">
          <Image
            alt="Central kitchen food preparation process"
            className="object-cover"
            fill
            sizes="(max-width: 1024px) 100vw, 58vw"
            src="https://images.unsplash.com/photo-1581349485608-9469926a8e5e?q=80&w=1400&auto=format&fit=crop"
          />
        </div>
        <div className="p-[clamp(24px,4vw,48px)]">
          <span className="mb-4 flex items-center gap-3 text-sm font-bold tracking-[0.15em] text-[#758696] uppercase">
            <span className="h-[2px] w-8 bg-[#758696]" />
            Kitchen Excellence
          </span>
          <h2 className="max-w-[560px] section-title text-[#0B1F33]">
            Behind every great meal.
          </h2>
          <p className="mt-5 section-copy text-[#5D6C7B]">
            The video section can showcase central kitchen tours, food
            preparation, quality checks, hygiene standards, packaging, delivery
            operations, and team excellence.
          </p>
          <div className="mt-7 grid gap-3">
            {kitchenHighlights.map((highlight) => (
              <p
                className="flex items-center gap-3 text-[0.98rem] font-bold text-[#0B1F33]"
                key={highlight}
              >
                <span className="h-2 w-2 rounded-full bg-[#0D2B44]" />
                {highlight}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
