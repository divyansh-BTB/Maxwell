"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/home" },
  { label: "Service", href: "/service" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => {
      const progress = Math.min(window.scrollY / 100, 1);
      setScrollProgress(progress);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const containerMaxWidth = 1180 - 120 * scrollProgress;
  const backgroundOpacity = isMobileMenuOpen ? 0.98 : scrollProgress * 0.75;
  const shadowOpacity = isMobileMenuOpen ? 0.2 : scrollProgress * 0.12;
  const blurAmount = isMobileMenuOpen ? 32 : scrollProgress * 24;
  const textValue = isMobileMenuOpen
    ? 25
    : Math.round(255 - 240 * scrollProgress);
  const textColor = `rgb(${textValue} ${textValue} ${textValue})`;
  const logoInvert = isMobileMenuOpen
    ? 0
    : Math.round(100 - 100 * scrollProgress);
  const ctaColor = scrollProgress > 0.35 ? "#244C43" : textColor;

  return (
    <header
      className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center px-4 transition-all duration-300"
      style={{ paddingTop: `${16 + 16 * scrollProgress}px` }}
    >
      <div
        className="pointer-events-auto flex w-full flex-wrap items-center justify-between border border-transparent transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          maxWidth: `${containerMaxWidth}px`,
          padding: `${16 - 6 * scrollProgress}px ${20 + 6 * scrollProgress}px`,
          backgroundColor: `rgba(250, 250, 248, ${backgroundOpacity})`,
          borderColor: `rgba(255, 255, 255, ${scrollProgress * 0.4})`,
          borderRadius: isMobileMenuOpen
            ? "28px"
            : `${18 + 34 * scrollProgress}px`,
          boxShadow: `0 20px 40px rgba(0, 0, 0, ${shadowOpacity})`,
          backdropFilter: `blur(${blurAmount}px) saturate(150%)`,
          WebkitBackdropFilter: `blur(${blurAmount}px) saturate(150%)`,
        }}
      >
        <Link
          aria-label="Maxwell Hospitality home"
          className="group relative flex items-center gap-3 transition-transform duration-500 ease-out hover:scale-[1.02]"
          href="/home"
          onClick={() => setIsMobileMenuOpen(false)}
          style={{
            transform: `scale(${1 - 0.1 * scrollProgress})`,
          }}
        >
          <div
            className="relative flex h-12 w-32 items-center justify-center overflow-hidden transition-all duration-300"
            style={{ filter: `invert(${logoInvert}%)` }}
          >
            <Image
              alt="Maxwell Hospitality"
              className="object-contain"
              fill
              priority
              sizes="128px"
              src="/logo.png"
            />
          </div>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-white/10 bg-black/6 px-1.5 py-1.5 backdrop-blur-md max-[900px]:hidden min-[901px]:flex"
        >
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href === "/home" && pathname === "/");

            return (
              <Link
                className={`rounded-full px-4 py-2 text-[0.72rem] font-black tracking-[0.12em] uppercase transition-all duration-300 ${
                  isActive ? "bg-[#C9A86A] text-[#244C43]" : "hover:bg-white/12"
                }`}
                href={item.href}
                key={item.href}
                style={{ color: isActive ? undefined : textColor }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          className="hidden min-h-10 items-center justify-center rounded-full border border-[#C9A86A]/70 px-5 text-[0.72rem] font-black tracking-[0.12em] uppercase transition-colors duration-300 hover:bg-[#C9A86A] hover:text-[#244C43] max-[900px]:hidden min-[901px]:inline-flex"
          href="/contact"
          style={{ color: ctaColor }}
        >
          Inquiry
        </Link>

        <button
          aria-label="Toggle mobile menu"
          className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-transform duration-300 hover:opacity-70 max-[900px]:flex"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            color: textColor,
            transform: isMobileMenuOpen ? "rotate(90deg)" : "rotate(0deg)",
          }}
          type="button"
        >
          {isMobileMenuOpen ? (
            <svg
              aria-hidden="true"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
            >
              <line x1="18" x2="6" y1="6" y2="18" />
              <line x1="6" x2="18" y1="6" y2="18" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
            >
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
          )}
        </button>

        <div
          className={`w-full overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
            isMobileMenuOpen
              ? "mt-4 max-h-[500px] opacity-100"
              : "mt-0 max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col border-t border-black/5 pt-4 pb-3">
            {navItems.map((item) => (
              <Link
                className="group relative flex w-full items-center justify-between rounded-2xl px-2 py-4 transition-colors hover:bg-[#3F6F63]/6"
                href={item.href}
                key={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-[0.85rem] font-bold tracking-[0.15em] text-[#1a1a1a] uppercase transition-colors group-hover:text-[#C9A86A]">
                  {item.label}
                </span>
                <svg
                  aria-hidden="true"
                  className="h-4 w-4 text-[#C9A86A] opacity-0 transition-all duration-300 group-hover:-translate-x-2 group-hover:opacity-100"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <line x1="5" x2="19" y1="12" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
