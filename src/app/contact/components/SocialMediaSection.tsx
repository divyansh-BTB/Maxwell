import Link from "next/link";

const channels = [
  {
    title: "Instagram",
    description: "Showcase Banquets, Catering, Baker Street, and Dice N Sip.",
    href: "/contact-us",
  },
  {
    title: "Facebook",
    description: "Share Maxwell Hospitality updates and community moments.",
    href: "/contact-us",
  },
  {
    title: "LinkedIn",
    description: "Corporate, healthcare, hiring, and partnership updates.",
    href: "/contact-us",
  },
  {
    title: "YouTube",
    description: "Kitchen tours, food preparation, quality checks, and events.",
    href: "/contact-us",
  },
];

export function SocialMediaSection() {
  return (
    <section className="bg-white px-[clamp(20px,5vw,72px)] pb-[clamp(72px,9vw,112px)]">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-8">
          <span className="mb-4 flex items-center gap-3 text-sm font-bold tracking-[0.15em] text-[#758696] uppercase">
            <span className="h-[2px] w-8 bg-[#758696]" />
            Social Media
          </span>
          <h2 className="max-w-[720px] section-title text-[#0B1F33]">
            Follow Maxwell Hospitality.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel) => (
            <Link
              className="group min-h-[210px] rounded-[1.35rem] border border-[#F6F7F8] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0D2B44] hover:bg-[#0D2B44]"
              href={channel.href}
              key={channel.title}
            >
              <p className="text-[1.25rem] font-black text-[#0B1F33] transition-colors group-hover:text-white">
                {channel.title}
              </p>
              <p className="mt-5 section-copy text-[#5D6C7B] transition-colors group-hover:text-white/74">
                {channel.description}
              </p>
              <span className="mt-7 inline-flex text-sm font-black tracking-[0.12em] text-[#0D2B44] uppercase transition-colors group-hover:text-white">
                Add Handle
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
