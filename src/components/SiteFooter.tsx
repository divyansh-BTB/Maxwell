import Link from "next/link";
import { ArrowCircle } from "@/components/ArrowCircle";

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/home" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Core Values", href: "/about#values" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Healthcare Food Services", href: "/service" },
      { label: "Food Court Management", href: "/service" },
      { label: "Restaurant Operations", href: "/service" },
      { label: "Indoor Catering", href: "/service" },
      { label: "Outdoor Catering", href: "/service" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#0B1F33] px-[clamp(20px,5vw,72px)] pt-[clamp(72px,9vw,104px)] pb-7 text-white">
      <div className="mx-auto max-w-[1280px]">
        <div className="rounded-[2rem] border border-white/16 bg-white/6 px-[clamp(24px,4vw,56px)] py-[clamp(36px,5vw,64px)]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div>
              <Link
                className="inline-flex text-[clamp(2.4rem,5vw,4.4rem)] font-black leading-[1.02] tracking-[-0.03em] text-white"
                href="/home"
              >
                Maxwell
                <br />
                Hospitality
              </Link>
              <p className="mt-7 max-w-[620px] text-[1.02rem] leading-[1.8] text-white/70">
                Premium hospitality and food service solutions across healthcare
                institutions, food courts, restaurants, and catering operations.
              </p>

              <form className="mt-8 flex max-w-[640px] flex-col gap-4 sm:flex-row">
                <label className="sr-only" htmlFor="footer-email">
                  Email address
                </label>
                <input
                  className="min-h-13 flex-1 rounded-xl border border-white/18 bg-white/10 px-4 text-white outline-none placeholder:text-white/55 focus:border-white/60"
                  id="footer-email"
                  placeholder="Enter your email"
                  type="email"
                />
                <button
                  className="group inline-flex min-h-[58px] items-center justify-center gap-4 rounded-full border border-white bg-white py-2 pr-2 pl-7 text-sm font-bold text-[#0B1F33] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0D2B44] hover:text-white"
                  type="submit"
                >
                  <span>Subscribe</span>
                  <ArrowCircle dark />
                </button>
              </form>

              <p className="mt-4 max-w-[560px] text-xs leading-[1.7] text-white/55">
                By subscribing you agree to receive updates from Maxwell
                Hospitality Private Limited.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h2 className="text-[0.85rem] font-black tracking-[0.16em] text-white uppercase">
                    {column.title}
                  </h2>
                  <nav className="mt-5 grid gap-4" aria-label={column.title}>
                    {column.links.map((link) => (
                      <Link
                        className="text-[0.96rem] text-white/68 transition-colors hover:text-white"
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
        </div>

        <div className="mt-8 flex flex-col gap-4 text-sm text-white/58 md:flex-row md:items-center md:justify-between">
          <p>© Maxwell Hospitality Private Limited. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-x-7 gap-y-2">
            <Link
              className="underline-offset-4 hover:underline"
              href="/contact"
            >
              Contact
            </Link>
            <Link
              className="underline-offset-4 hover:underline"
              href="/service"
            >
              Services
            </Link>
            <Link className="underline-offset-4 hover:underline" href="/about">
              Company
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
