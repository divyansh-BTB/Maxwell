import Image from "next/image";

const services = [
  {
    title: "Corporate Solutions",
    description:
      "Customized food and hospitality solutions for businesses of all sizes.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1400&auto=format&fit=crop",
    items: [
      "Corporate Catering",
      "Daily Meal Programs",
      "Executive Dining",
      "Meeting Refreshments",
      "Conference Catering",
      "Workplace Cafeteria Management",
    ],
  },
  {
    title: "Healthcare & Hospital Food Services",
    description:
      "Patient-centric nutrition services designed for healthcare institutions.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1400&auto=format&fit=crop",
    items: [
      "Patient Meal Management",
      "Customized Patient Meals",
      "Disease-Specific Diets",
      "Diet Planning Services",
      "Hospital Cafeteria Management",
      "In-House Restaurant Operations",
    ],
  },
  {
    title: "Catering Solutions",
    description:
      "Catering for corporate, healthcare, social, and institutional occasions.",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1400&auto=format&fit=crop",
    items: [
      "Office Events",
      "Conferences",
      "Healthcare Catering",
      "Weddings",
      "Family Celebrations",
      "Industrial Facilities",
    ],
  },
  {
    title: "Events & Banquets",
    description:
      "End-to-end planning and food service support for corporate and social events.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1400&auto=format&fit=crop",
    items: [
      "Corporate Conferences",
      "Annual Day Celebrations",
      "Product Launches",
      "Award Functions",
      "Weddings",
      "Community Festivals",
    ],
  },
  {
    title: "Brands & Retail Food Outlets",
    description:
      "Food court, cafe, bakery, and nutrition-led brand operations under the Maxwell ecosystem.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1400&auto=format&fit=crop",
    items: [
      "Street Hub",
      "Street Cafe",
      "Baker Street",
      "Nutriverse",
      "Food Court Management",
      "Restaurant Operations",
    ],
  },
];

export function ServicesList() {
  return (
    <section
      className="bg-white px-[clamp(20px,5vw,72px)] py-[clamp(72px,9vw,116px)]"
      id="corporate-solutions"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-[clamp(36px,6vw,72px)] grid grid-cols-1 gap-6 lg:grid-cols-[0.86fr_1fr] lg:items-end">
          <div>
            <span className="mb-4 flex items-center gap-3 text-sm font-bold tracking-[0.15em] text-[#2E7C82] uppercase">
              <span className="h-[2px] w-8 bg-[#2E7C82]" />
              Complete Service Map
            </span>
            <h2 className="max-w-[680px] text-[clamp(2rem,4vw,3.7rem)] font-bold leading-[1.05] text-[#0E4A4F]">
              Solutions mapped to the new Maxwell structure.
            </h2>
          </div>
          <p className="max-w-[640px] text-[1.04rem] leading-[1.8] text-[#5C7078] lg:justify-self-end">
            This page now covers corporate solutions, hospital food services,
            catering, events, banquets, brands, and retail food operations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10">
          {services.map((service, index) => (
            <article
              className="sticky grid grid-cols-1 overflow-hidden rounded-[1.75rem] border border-[#E7F1F5] bg-white shadow-2xl shadow-[#0E4A4F]/10 transition-all duration-300 hover:border-[#1F9AAA] lg:grid-cols-[0.8fr_1.2fr]"
              key={service.title}
              style={{ top: `${96 + index * 18}px`, zIndex: index + 1 }}
            >
              <div className="relative min-h-[280px] bg-[#1F9AAA] lg:min-h-[420px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/32 via-transparent to-transparent" />
                <span className="absolute left-6 top-6 rounded-full bg-white/92 px-4 py-2 text-xs font-black tracking-[0.12em] text-[#0E4A4F]">
                  SERVICE {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="p-[clamp(24px,4vw,48px)]">
                <h3 className="max-w-[680px] text-[clamp(1.8rem,3vw,3rem)] font-bold leading-[1.08] text-[#0E4A4F]">
                  {service.title}
                </h3>
                <p className="mt-5 max-w-[720px] text-[1rem] leading-[1.8] text-[#5C7078]">
                  {service.description}
                </p>

                <div className="mt-8">
                  <p className="text-[0.78rem] font-bold tracking-[0.16em] text-[#2E7C82] uppercase">
                    Services include
                  </p>
                  <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {service.items.map((item) => (
                      <div className="flex items-start gap-3" key={item}>
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1F9AAA]" />
                        <p className="text-[0.98rem] font-medium leading-[1.55] text-[#1F9AAA]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
