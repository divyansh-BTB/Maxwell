import Image from "next/image";
import Link from "next/link";
import { ArrowCircle } from "@/components/ArrowCircle";

const solutionGroups = [
  {
    title: "Corporate Catering",
    items: [
      "Daily meal programs",
      "Executive dining",
      "Meeting refreshments",
      "Conference catering",
      "Employee meal plans",
    ],
  },
  {
    title: "Corporate Events",
    items: [
      "Annual Day",
      "Town Halls",
      "Leadership Meets",
      "Product Launches",
      "Award Ceremonies",
    ],
  },
  {
    title: "Workplace Cafeteria Management",
    items: [
      "End-to-end cafeteria operations",
      "Smart menu planning",
      "Cashless operations",
      "Nutrition-focused meal options",
    ],
  },
  {
    title: "Corporate Gifting",
    items: ["Bakery hampers", "Festival gifting", "Customized food packages"],
  },
];

export function CorporateSolutions() {
  return (
    <section
      className="bg-white px-[clamp(20px,5vw,72px)] py-[clamp(72px,10vw,124px)]"
      id="corporate"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-[clamp(40px,7vw,88px)] lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <div className="relative">
          <div className="absolute -left-5 top-5 h-full w-full rounded-[1.75rem] border border-[#D9D9D9] max-sm:hidden" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-[#0D2B44] shadow-2xl shadow-[#0B1F33]/12 lg:aspect-[5/6]">
            <Image
              alt="Corporate dining and catering service"
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1400&auto=format&fit=crop"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/62 via-transparent to-transparent" />
          </div>
        </div>

        <div>
          <span className="mb-4 flex items-center gap-3 text-sm font-bold tracking-[0.15em] text-[#758696] uppercase">
            <span className="h-[2px] w-8 bg-[#758696]" />
            Corporate Solutions
          </span>
          <h2 className="max-w-[760px] text-[clamp(2rem,3.8vw,3.6rem)] font-bold leading-[1.08] text-[#0B1F33]">
            Trusted hospitality partner for corporate organizations.
          </h2>
          <p className="mt-6 max-w-[720px] text-[1.04rem] leading-[1.85] text-[#5D6C7B]">
            Maxwell provides customized food and hospitality solutions for
            businesses of all sizes, from daily workplace meals to large-format
            corporate events and gifting.
          </p>

          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {solutionGroups.map((group) => (
              <article
                className="rounded-[1.25rem] border border-[#F6F7F8] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0D2B44] hover:shadow-xl hover:shadow-[#0B1F33]/8"
                key={group.title}
              >
                <h3 className="text-[1.04rem] font-black leading-tight text-[#0B1F33]">
                  {group.title}
                </h3>
                <div className="mt-4 grid gap-2">
                  {group.items.map((item) => (
                    <p
                      className="flex items-start gap-2 text-[0.9rem] leading-[1.5] text-[#5D6C7B]"
                      key={item}
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0D2B44]" />
                      {item}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <Link
            className="group mt-8 inline-flex min-h-[58px] items-center justify-center gap-4 rounded-full border border-[#0D2B44] bg-[#0D2B44] py-2 pr-2 pl-7 text-sm font-black tracking-[0.08em] text-white uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#0D2B44]"
            href="/solutions#corporate-solutions"
          >
            <span>View Corporate Services</span>
            <ArrowCircle />
          </Link>
        </div>
      </div>
    </section>
  );
}
