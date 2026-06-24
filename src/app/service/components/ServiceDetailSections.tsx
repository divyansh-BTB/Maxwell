import Image from "next/image";

const challenges = [
  {
    title: "Supply Chain Disruptions",
    description:
      "Ensuring uninterrupted availability of quality ingredients through robust procurement systems.",
  },
  {
    title: "Food Safety Risks",
    description:
      "Strict HACCP-based food safety protocols and compliance monitoring.",
  },
  {
    title: "Poor Patient Food Experience",
    description:
      "Enhancing patient satisfaction through personalized meal services and improved food quality.",
  },
  {
    title: "Inefficient Diet Planning",
    description:
      "Technology-driven nutrition management and dietician-led meal planning.",
  },
  {
    title: "Operational Inefficiencies",
    description:
      "Standardized processes ensuring consistency and cost optimization.",
  },
  {
    title: "Quality Control Issues",
    description: "Multi-level quality assurance systems across all operations.",
  },
];

const categories = [
  {
    title: "Corporate Catering",
    items: [
      "Office Events",
      "Conferences",
      "Leadership Meetings",
      "Product Launches",
    ],
  },
  {
    title: "Healthcare Catering",
    items: ["Hospitals", "Medical Colleges", "Wellness Centers"],
  },
  {
    title: "Social Catering",
    items: ["Weddings", "Birthdays", "Family Celebrations"],
  },
  {
    title: "Institutional Catering",
    items: ["Educational Institutions", "Hostels", "Industrial Facilities"],
  },
];

const eventTypes = [
  "Corporate Conferences",
  "Annual Day Celebrations",
  "Product Launches",
  "Medical Conferences",
  "Healthcare Events",
  "Award Functions",
  "Weddings",
  "Social Gatherings",
  "Cultural Events",
  "Community Festivals",
];

const packages = [
  {
    title: "Silver Package",
    description: "Suitable for team meetings and small gatherings.",
  },
  {
    title: "Gold Package",
    description: "Ideal for conferences and corporate celebrations.",
  },
  {
    title: "Platinum Package",
    description:
      "Premium experience for leadership events and large-scale functions.",
  },
  {
    title: "Banquet Packages",
    description:
      "Social events, corporate events, and wedding packages available on request.",
  },
];

export function ServiceDetailSections() {
  return (
    <>
      <section
        className="bg-[#F6F7F8] px-[clamp(20px,5vw,72px)] py-[clamp(72px,9vw,112px)]"
        id="challenges-we-solve"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <div>
              <span className="mb-4 flex items-center gap-3 text-sm font-bold tracking-[0.15em] text-[#758696] uppercase">
                <span className="h-[2px] w-8 bg-[#758696]" />
                Challenges We Solve
              </span>
              <h2 className="max-w-[680px] section-title text-[#0B1F33]">
                Common industry challenges, handled with systems.
              </h2>
            </div>
            <p className="max-w-[620px] section-copy text-[#5D6C7B] lg:justify-self-end">
              Maxwell helps institutions and companies remove friction from
              procurement, food safety, diet planning, operations, and guest
              experience.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {challenges.map((challenge, index) => (
              <article
                className="group min-h-[220px] rounded-[1.35rem] border border-[#D9D9D9] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0D2B44] hover:bg-[#0D2B44]"
                key={challenge.title}
              >
                <p className="text-sm font-mono text-[#758696] transition-colors group-hover:text-white/58">
                  0{index + 1}
                </p>
                <h3 className="mt-8 text-[1.22rem] font-black leading-tight text-[#0B1F33] transition-colors group-hover:text-white">
                  {challenge.title}
                </h3>
                <p className="mt-4 section-copy text-[#5D6C7B] transition-colors group-hover:text-white/74">
                  {challenge.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-white px-[clamp(20px,5vw,72px)] py-[clamp(72px,9vw,112px)]"
        id="catering-solutions"
      >
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-[clamp(40px,7vw,90px)] lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <span className="mb-4 flex items-center gap-3 text-sm font-bold tracking-[0.15em] text-[#758696] uppercase">
              <span className="h-[2px] w-8 bg-[#758696]" />
              Catering & Events
            </span>
            <h2 className="max-w-[620px] section-title text-[#0B1F33]">
              Catering for every occasion.
            </h2>
            <p className="mt-6 max-w-[560px] section-copy text-[#5D6C7B]">
              Corporate, healthcare, social, and institutional catering mapped
              together with the event categories Maxwell manages.
            </p>
            <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#0D2B44]">
              <Image
                alt="Event catering setup"
                className="object-cover"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1400&auto=format&fit=crop"
              />
            </div>
          </div>

          <div className="grid gap-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {categories.map((category) => (
                <article
                  className="rounded-[1.25rem] border border-[#F6F7F8] bg-white p-6 shadow-sm"
                  key={category.title}
                >
                  <h3 className="text-[1.1rem] font-black text-[#0B1F33]">
                    {category.title}
                  </h3>
                  <div className="mt-4 grid gap-2">
                    {category.items.map((item) => (
                      <p
                        className="text-[0.95rem] leading-[1.55] text-[#5D6C7B]"
                        key={item}
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div
              className="rounded-[1.5rem] border border-[#F6F7F8] bg-[#F6F7F8] p-6"
              id="event-categories"
            >
              <p className="text-[0.78rem] font-bold tracking-[0.16em] text-[#758696] uppercase">
                Event Categories
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {eventTypes.map((event) => (
                  <span
                    className="rounded-full border border-[#D9D9D9] bg-white px-4 py-2 text-sm font-bold text-[#0B1F33]"
                    key={event}
                  >
                    {event}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-white px-[clamp(20px,5vw,72px)] pb-[clamp(72px,9vw,112px)]"
        id="packages-section"
      >
        <div className="mx-auto max-w-[1280px] rounded-[1.75rem] border border-[#D9D9D9] bg-[#0B1F33] p-[clamp(24px,4vw,48px)] text-white">
          <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <div>
              <span className="mb-4 flex items-center gap-3 text-sm font-bold tracking-[0.15em] text-white/55 uppercase">
                <span className="h-[2px] w-8 bg-white/45" />
                Packages
              </span>
              <h2 className="max-w-[640px] section-title ">
                Corporate catering and banquet packages.
              </h2>
            </div>
            <p className="max-w-[620px] section-copy text-white/68 lg:justify-self-end">
              Silver, Gold, Platinum, and Banquet packages are structured for
              different event formats. Detailed menus and pricing are available
              on request.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {packages.map((item) => (
              <article
                className="rounded-[1.25rem] border border-white/14 bg-white/8 p-6"
                key={item.title}
              >
                <h3 className="text-[1.15rem] font-black">{item.title}</h3>
                <p className="mt-4 section-copy text-white/70">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
