"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowCircle } from "./ArrowCircle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-maxwell" },
  { label: "Brands", href: "/our-brands" },
  { label: "Solutions", href: "/solutions" },
  { label: "Gallery", href: "/gallery" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const lastScrollY = useRef(0);
  const [isHidden, setIsHidden] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;

      setIsAtTop(currentScrollY < 16);
      setIsHidden(scrollingDown && currentScrollY > 120 && !isMobileMenuOpen);
      lastScrollY.current = currentScrollY;
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`pointer-events-none fixed inset-x-0 top-0 z-40 px-4 pt-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isHidden ? "-translate-y-[130%]" : "translate-y-0"
      }`}
    >
      <div
        className={`pointer-events-auto mx-auto flex w-full max-w-[1180px] flex-wrap items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 md:px-5 ${
          isAtTop && !isMobileMenuOpen
            ? "border-white/55 bg-white/88 shadow-[0_18px_48px_rgba(11,31,51,0.08)] backdrop-blur-xl"
            : "border-[#D9D9D9] bg-white/96 shadow-[0_18px_48px_rgba(11,31,51,0.12)] backdrop-blur-2xl"
        }`}
      >
        <Link
          aria-label="Maxwell Hospitality home"
          className="relative flex h-11 w-32 shrink-0 items-center"
          href="/"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Image
            alt="Maxwell Hospitality"
            className="object-contain"
            fill
            priority
            sizes="128px"
            src="/logo.png"
          />
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 rounded-full p-1 min-[901px]:flex"
        >
          {navItems.map((item) => {
            const isActive =
              (!item.href.includes("#") && pathname === item.href) ||
              (item.href === "/" && pathname === "/");

            return (
              <Link
                className={`rounded-full px-4 py-2 text-[0.72rem] font-black tracking-[0.12em] uppercase transition-colors ${
                  isActive
                    ? "bg-[#0B1F33] text-white"
                    : "text-[#5D6C7B] hover:bg-white hover:text-[#0D2B44]"
                }`}
                href={item.href}
                key={`${item.label}-${item.href}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 min-[901px]:flex">
          <Link
            className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#0D2B44] bg-[#0D2B44] py-1.5 pr-1.5 pl-5 text-[0.72rem] font-black tracking-[0.12em] text-white uppercase transition-colors duration-300 hover:bg-white hover:text-[#0D2B44]"
            href="/contact-us#inquiry-form"
          >
            <span>Request a Proposal</span>
            <ArrowCircle />
          </Link>
        </div>

        <button
          aria-label="Toggle mobile menu"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D9D9D9] bg-white text-[#0B1F33] transition-colors hover:bg-white min-[901px]:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          type="button"
        >
          {isMobileMenuOpen ? (
            <svg
              aria-hidden="true"
              fill="none"
              height="22"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="22"
            >
              <line x1="18" x2="6" y1="6" y2="18" />
              <line x1="6" x2="18" y1="6" y2="18" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              fill="none"
              height="22"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="22"
            >
              <line x1="4" x2="20" y1="8" y2="8" />
              <line x1="4" x2="20" y1="16" y2="16" />
            </svg>
          )}
        </button>

        <div
          className={`basis-full overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] min-[901px]:hidden ${
            isMobileMenuOpen
              ? "mt-4 max-h-[520px] opacity-100"
              : "mt-0 max-h-0 opacity-0"
          }`}
        >
          <nav
            aria-label="Mobile navigation"
            className="grid gap-1 border-t border-[#F6F7F8] pt-4 pb-2"
          >
            {navItems.map((item) => {
              const isActive =
                (!item.href.includes("#") && pathname === item.href) ||
                (item.href === "/" && pathname === "/");

              return (
                <Link
                  className={`flex min-h-12 items-center justify-between rounded-2xl px-4 text-sm font-black tracking-[0.12em] uppercase transition-colors ${
                    isActive
                      ? "bg-[#0B1F33] text-white"
                      : "text-[#5D6C7B] hover:bg-white hover:text-[#0D2B44]"
                  }`}
                  href={item.href}
                  key={`${item.label}-${item.href}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                  <span aria-hidden="true">+</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
