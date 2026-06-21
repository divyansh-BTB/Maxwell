import Link from "next/link";

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
    <footer className="bg-[#3F6F63] px-[clamp(20px,5vw,72px)] pt-[clamp(72px,9vw,104px)] pb-7 text-white">
      <div className="mx-auto max-w-[1280px]">
        <div className="rounded-[2rem] border border-white/18 px-[clamp(24px,4vw,56px)] py-[clamp(36px,5vw,64px)]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div>
              <Link
                className="inline-flex text-[clamp(2.4rem,5vw,4.4rem)] font-black leading-[0.86] tracking-[-0.03em] text-white"
                href="/home"
              >
                Maxwell
                <br />
                Hospitality
              </Link>
              <p className="mt-7 max-w-[620px] text-[1.02rem] leading-[1.8] text-white/76">
                Premium hospitality and food service solutions across healthcare
                institutions, food courts, restaurants, and catering operations.
              </p>

              <form className="mt-8 flex max-w-[640px] flex-col gap-4 sm:flex-row">
                <label className="sr-only" htmlFor="footer-email">
                  Email address
                </label>
                <input
                  className="min-h-13 flex-1 rounded-xl border border-white/22 bg-white/8 px-4 text-white outline-none placeholder:text-white/62 focus:border-[#C9A86A]"
                  id="footer-email"
                  placeholder="Enter your email"
                  type="email"
                />
                <button
                  className="min-h-13 rounded-full border border-[#C9A86A]/70 px-7 text-sm font-bold text-white transition-colors hover:bg-[#C9A86A] hover:text-[#244C43]"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>

              <p className="mt-4 max-w-[560px] text-xs leading-[1.7] text-white/62">
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
                        className="text-[0.96rem] text-white/78 transition-colors hover:text-[#C9A86A]"
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

        <div className="mt-8 flex flex-col gap-4 text-sm text-white/74 md:flex-row md:items-center md:justify-between">
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
