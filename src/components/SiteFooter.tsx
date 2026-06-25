import Link from "next/link";
import { ArrowCircle } from "@/components/ArrowCircle";

const footerColumns = [
  {
    title: "Main Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About Maxwell", href: "/about-maxwell" },
      { label: "Our Brands", href: "/our-brands" },
      { label: "Solutions", href: "/solutions" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Corporate Solutions", href: "/solutions#corporate-solutions" },
      {
        label: "Healthcare & Hospital Food Services",
        href: "/solutions#healthcare-hospital-food-services",
      },
      { label: "Challenges We Solve", href: "/solutions#challenges-we-solve" },
      { label: "Catering Solutions", href: "/solutions#catering-solutions" },
      { label: "Event Categories", href: "/solutions#event-categories" },
      { label: "Packages Section", href: "/solutions#packages-section" },
    ],
  },
  {
    title: "Our Brands",
    links: [
      { label: "Street Hub", href: "/our-brands#street-hub" },
      { label: "Dice N Sip", href: "/our-brands#dice-n-sip" },
      { label: "Street Cafe", href: "/our-brands#street-cafe" },
      { label: "Baker Street", href: "/our-brands#baker-street" },
      { label: "Nutriverse", href: "/our-brands#nutriverse" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Featured Clients", href: "/clients" },
      { label: "Careers", href: "/careers" },
      { label: "By The Numbers", href: "/about-maxwell#by-the-numbers" },
      {
        label: "Why Choose Maxwell",
        href: "/about-maxwell#why-choose-maxwell",
      },
      { label: "Kitchen Excellence", href: "/gallery#kitchen-excellence" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { label: "Maxwell Hospitality Services", href: "/contact-us" },
      { label: "Phone Number", href: "/contact-us" },
      {
        label: "Services@maxwellhotels.in",
        href: "mailto:Services@maxwellhotels.in",
      },
      { label: "Website", href: "/" },
      { label: "Office Address", href: "/contact-us" },
    ],
  },
  {
    title: "Social Media",
    links: [
      { label: "Instagram", href: "/contact-us" },
      { label: "Facebook", href: "/contact-us" },
      { label: "LinkedIn", href: "/contact-us" },
      { label: "YouTube", href: "/contact-us" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#0B1F33] px-[clamp(20px,5vw,72px)] py-[clamp(42px,6vw,68px)] text-white">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-10 border-b border-white/12 pb-10 lg:grid-cols-[0.9fr_1.35fr] lg:gap-14">
          <div>
            <Link
              className="inline-flex text-[clamp(1.7rem,3vw,2.5rem)] font-black leading-[1.02] tracking-[-0.03em] text-white"
              href="/"
            >
              Maxwell
              <br />
              Hospitality
            </Link>
            <p className="mt-5 max-w-[520px] text-[0.98rem] leading-[1.7] text-white/68">
              Integrated hospitality, catering, healthcare food service,
              banquets, cafes, bakeries, and event management under one roof.
            </p>

            <form className="mt-6 flex max-w-[560px] flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="footer-email">
                Email address
              </label>
              <input
                className="min-h-12 flex-1 rounded-xl border border-white/18 bg-white/8 px-4 text-white outline-none placeholder:text-white/55 focus:border-white/60"
                id="footer-email"
                placeholder="Enter your email"
                type="email"
              />
              <button
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white bg-white py-1.5 pr-1.5 pl-5 text-sm font-bold text-[#0B1F33] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0D2B44] hover:text-white"
                type="submit"
              >
                <span>Subscribe</span>
                <ArrowCircle dark />
              </button>
            </form>

            <p className="mt-3 max-w-[520px] text-xs leading-[1.6] text-white/48">
              By subscribing you agree to receive updates from Maxwell
              Hospitality Private Limited.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h2 className="text-[0.72rem] font-black tracking-[0.15em] text-white uppercase">
                  {column.title}
                </h2>
                <nav className="mt-4 grid gap-2.5" aria-label={column.title}>
                  {column.links.map((link) => (
                    <Link
                      className="text-[0.9rem] leading-[1.45] text-white/62 transition-colors hover:text-white"
                      href={link.href}
                      key={`${column.title}-${link.label}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 text-sm text-white/52 md:flex-row md:items-center md:justify-between">
          <p>© Maxwell Hospitality Private Limited. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-x-7 gap-y-2">
            <Link
              className="underline-offset-4 hover:underline"
              href="/contact-us"
            >
              Contact
            </Link>
            <Link
              className="underline-offset-4 hover:underline"
              href="/solutions"
            >
              Services
            </Link>
            <Link
              className="underline-offset-4 hover:underline"
              href="/about-maxwell"
            >
              Company
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
