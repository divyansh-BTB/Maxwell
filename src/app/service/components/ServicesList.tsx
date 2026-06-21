import Image from "next/image";

const services = [
  {
    title: "Healthcare Food Services",
    description:
      "Patient-focused dining programs shaped around nutrition, hygiene, and delivery discipline.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1400&auto=format&fit=crop",
    items: [
      "Patient Meal Services",
      "Diet Planning Coordination",
      "Staff Cafeteria Management",
      "Nutrition-Focused Meal Programs",
      "Hygienic Food Preparation",
      "Timely Meal Delivery",
    ],
  },
  {
    title: "Food Court Management",
    description:
      "Managed multi-brand food court operations with coordinated vendors and customer-first service.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1400&auto=format&fit=crop",
    items: [
      "Multi-Brand Food Court Operations",
      "Vendor Coordination",
      "Customer Experience Management",
      "Food Safety Compliance",
      "Revenue Optimization",
    ],
  },
  {
    title: "Restaurant Operations",
    description:
      "Complete restaurant management support for memorable dining and operational excellence.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1400&auto=format&fit=crop",
    items: [
      "Restaurant Management",
      "Menu Development",
      "Guest Experience Enhancement",
      "Operational Excellence",
      "Staff Training",
    ],
  },
  {
    title: "Indoor Catering",
    description:
      "Professional indoor catering solutions for corporate and institutional environments.",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1400&auto=format&fit=crop",
    items: [
      "Corporate Events",
      "Institutional Functions",
      "Meetings & Conferences",
      "Employee Dining Solutions",
    ],
  },
  {
    title: "Outdoor Catering",
    description:
      "Large-scale outdoor catering for weddings, celebrations, and private gatherings.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1400&auto=format&fit=crop",
    items: [
      "Weddings",
      "Social Events",
      "Celebrations",
      "Private Gatherings",
      "Large-Scale Catering",
    ],
  },
];

export function ServicesList() {
  return (
    <section className="bg-white px-[clamp(20px,5vw,72px)] py-[clamp(72px,9vw,116px)]">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-[clamp(36px,6vw,72px)] grid grid-cols-1 gap-6 lg:grid-cols-[0.86fr_1fr] lg:items-end">
          <div>
            <span className="mb-4 flex items-center gap-3 text-sm font-bold tracking-[0.15em] text-[#758696] uppercase">
              <span className="h-[2px] w-8 bg-[#758696]" />
              What We Provide
            </span>
            <h2 className="max-w-[680px] text-[clamp(2rem,4vw,3.7rem)] font-bold leading-[1.05] text-[#0B1F33]">
              Service programs built for real operations.
            </h2>
          </div>
          <p className="max-w-[640px] text-[1.04rem] leading-[1.8] text-[#5D6C7B] lg:justify-self-end">
            Each service vertical is planned around the audience, site
            requirements, food safety expectations, and daily delivery rhythm.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10">
          {services.map((service, index) => (
            <article
              className="sticky grid grid-cols-1 overflow-hidden rounded-[1.75rem] border border-[#EAE8E3] bg-white shadow-2xl shadow-[#0B1F33]/10 transition-all duration-300 hover:border-[#0D2B44] lg:grid-cols-[0.8fr_1.2fr]"
              key={service.title}
              style={{ top: `${96 + index * 18}px`, zIndex: index + 1 }}
            >
              <div className="relative min-h-[280px] bg-[#0D2B44] lg:min-h-[420px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/32 via-transparent to-transparent" />
                <span className="absolute left-6 top-6 rounded-full bg-white/92 px-4 py-2 text-xs font-black tracking-[0.12em] text-[#0B1F33]">
                  SERVICE {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="p-[clamp(24px,4vw,48px)]">
                <h3 className="max-w-[680px] text-[clamp(1.8rem,3vw,3rem)] font-bold leading-[1.08] text-[#0B1F33]">
                  {service.title}
                </h3>
                <p className="mt-5 max-w-[720px] text-[1rem] leading-[1.8] text-[#5D6C7B]">
                  {service.description}
                </p>

                <div className="mt-8">
                  <p className="text-[0.78rem] font-bold tracking-[0.16em] text-[#758696] uppercase">
                    Services include
                  </p>
                  <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {service.items.map((item) => (
                      <div className="flex items-start gap-3" key={item}>
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#0D2B44]" />
                        <p className="text-[0.98rem] font-medium leading-[1.55] text-[#0D2B44]">
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
