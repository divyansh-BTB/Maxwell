import Link from "next/link";

const channels = [
  {
    title: "Instagram",
    description: "Showcase Banquets, Catering, Baker Street, and Street Cafe.",
    href: "/contact",
  },
  {
    title: "Facebook",
    description: "Share Maxwell Hospitality updates and community moments.",
    href: "/contact",
  },
  {
    title: "LinkedIn",
    description: "Corporate, healthcare, hiring, and partnership updates.",
    href: "/contact",
  },
  {
    title: "YouTube",
    description: "Kitchen tours, food preparation, quality checks, and events.",
    href: "/contact",
  },
];

export function SocialMediaSection() {
  return (
    <section className="bg-white px-[clamp(20px,5vw,72px)] pb-[clamp(72px,9vw,112px)]">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-8">
          <span className="mb-4 flex items-center gap-3 text-sm font-bold tracking-[0.15em] text-[#2E7C82] uppercase">
            <span className="h-[2px] w-8 bg-[#2E7C82]" />
            Social Media
          </span>
          <h2 className="max-w-[720px] text-[clamp(2rem,3.5vw,3.2rem)] font-bold leading-[1.08] text-[#0E4A4F]">
            Follow Maxwell Hospitality.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel) => (
            <Link
              className="group min-h-[210px] rounded-[1.35rem] border border-[#E7F1F5] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1F9AAA] hover:bg-[#1F9AAA]"
              href={channel.href}
              key={channel.title}
            >
              <p className="text-[1.25rem] font-black text-[#0E4A4F] transition-colors group-hover:text-white">
                {channel.title}
              </p>
              <p className="mt-5 text-[0.96rem] leading-[1.7] text-[#5C7078] transition-colors group-hover:text-white/74">
                {channel.description}
              </p>
              <span className="mt-7 inline-flex text-sm font-black tracking-[0.12em] text-[#1F9AAA] uppercase transition-colors group-hover:text-white">
                Add Handle
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
