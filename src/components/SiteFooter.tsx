import Link from "next/link";

const footerColumns = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/home" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/service" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Service Verticals",
    links: [
      { label: "Healthcare Food Services", href: "/service" },
      { label: "Food Court Management", href: "/service" },
      { label: "Restaurant Operations", href: "/service" },
      { label: "Indoor Catering", href: "/service" },
      { label: "Outdoor Catering", href: "/service" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Maxwell Hospitality Private Limited", href: "/about" },
      { label: "Core Values", href: "/about#values" },
      { label: "Recognition", href: "/home#recognition" },
      { label: "Gallery", href: "/home#gallery" },
    ],
  },
];

const addresses = [
  "Basement, Block 10A, Sharda University & Hospital, Plot No. 32 & 34, Knowledge Park III, Greater Noida, Gautam Buddha Nagar, Uttar Pradesh, India",
  "10 Jawahar Nagar, Khandari Bypass Road, Agra, Uttar Pradesh - 282002, India",
];

export function SiteFooter() {
  return (
    <footer className="overflow-hidden bg-[#FAFAF8] px-[clamp(20px,5vw,72px)] pt-[clamp(72px,9vw,108px)] pb-8 text-[#2A2A2A]">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[0.8fr_0.95fr_0.75fr_1.2fr] lg:gap-14">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="text-[0.85rem] font-black tracking-[0.16em] text-[#244C43] uppercase">
                {column.title}
              </h2>
              <nav className="mt-5 grid gap-3" aria-label={column.title}>
                {column.links.map((link) => (
                  <Link
                    className="text-[0.98rem] leading-relaxed text-[#3D423F] transition-colors hover:text-[#C9A86A]"
                    href={link.href}
                    key={`${column.title}-${link.label}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}

          <div>
            <h2 className="text-[0.85rem] font-black tracking-[0.16em] text-[#244C43] uppercase">
              Addresses
            </h2>
            <div className="mt-5 grid gap-4">
              {addresses.map((address, index) => (
                <p
                  className="text-[0.95rem] leading-[1.75] text-[#3D423F]"
                  key={address}
                >
                  <span className="mb-1 block font-bold text-[#3F6F63]">
                    {index === 0
                      ? "Principal Place of Business"
                      : "Registered Office"}
                  </span>
                  {address}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-[clamp(56px,8vw,104px)]">
          <p className="select-none text-center text-[clamp(4.4rem,18vw,18rem)] font-black leading-[0.82] tracking-[0.04em] text-[#2B292F] uppercase">
            Maxwell
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 border-t border-[#E5DED1] pt-6 text-sm text-[#4F5551] md:grid-cols-3 md:items-center">
          <p>© Maxwell Hospitality Private Limited. All Rights Reserved.</p>
          <p className="md:text-center">Premium Hospitality & Food Services</p>
          <Link
            className="font-bold text-[#3F6F63] transition-colors hover:text-[#C9A86A] md:text-right"
            href="/contact"
          >
            Contact MHPL
          </Link>
        </div>
      </div>
    </footer>
  );
}
