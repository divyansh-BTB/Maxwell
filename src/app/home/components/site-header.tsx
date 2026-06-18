"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const leftNavItems = [
  { label: "Home", href: "/" },
  { label: "Service", href: "/service" },
];

const rightNavItems = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// Combined for the mobile menu
const allNavItems = [...leftNavItems, ...rightNavItems];

export function SiteHeader() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll progress for the glass header
  useEffect(() => {
    const updateHeader = () => {
      const progress = Math.min(window.scrollY / 100, 1);
      setScrollProgress(progress);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  // Prevent body scrolling when mobile menu is open
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

  // --- Dynamic Visual Calculations ---
  const containerMaxWidth = 900 - 200 * scrollProgress;
  const gapSpacing = 2.5 - 1 * scrollProgress; 
  
  // If menu is open, force a solid readable background, otherwise use scroll math
  const backgroundOpacity = isMobileMenuOpen ? 0.98 : scrollProgress * 0.75; 
  const shadowOpacity = isMobileMenuOpen ? 0.2 : scrollProgress * 0.12;
  const blurAmount = isMobileMenuOpen ? 32 : scrollProgress * 24; 
  
  // If menu is open, force text to dark grey so it's readable against the white expanded menu
  const textValue = isMobileMenuOpen ? 25 : Math.round(255 - 240 * scrollProgress);
  const textColor = `rgb(${textValue} ${textValue} ${textValue})`;

  // If menu is open, force logo to black (0 invert)
  const logoInvert = isMobileMenuOpen ? 0 : Math.round(100 - (100 * scrollProgress));

  return (
    <header 
      className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 transition-all duration-300 pointer-events-none"
      style={{ paddingTop: `${16 + (16 * scrollProgress)}px` }}
    >
      <div
        // Added flex-wrap so the mobile menu can break to the next line naturally inside the parent
        className="pointer-events-auto flex flex-wrap w-full items-center justify-between border border-transparent transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          maxWidth: `${containerMaxWidth}px`,
          padding: `${20 - 8 * scrollProgress}px 32px`,
          backgroundColor: `rgba(250, 250, 248, ${backgroundOpacity})`,
          borderColor: `rgba(255, 255, 255, ${scrollProgress * 0.4})`,
          // Relax the border radius to look more like a panel when expanded
          borderRadius: isMobileMenuOpen ? "32px" : `${16 + (40 * scrollProgress)}px`,
          boxShadow: `0 20px 40px rgba(0, 0, 0, ${shadowOpacity})`,
          backdropFilter: `blur(${blurAmount}px) saturate(150%)`,
          WebkitBackdropFilter: `blur(${blurAmount}px) saturate(150%)`,
        }}
      >
        {/* Left Navigation (Desktop) */}
        <nav
          className="flex items-center max-[900px]:hidden"
          style={{ gap: `${gapSpacing}rem` }}
          aria-label="Primary left navigation"
        >
          {leftNavItems.map((item) => (
            <Link
              className="text-[0.75rem] font-bold tracking-[0.15em] uppercase transition-all duration-300 hover:opacity-60"
              href={item.href}
              key={item.href}
              style={{ color: textColor }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Center Logo */}
        <Link
          className="group relative flex items-center justify-center transition-transform duration-500 ease-out hover:scale-105"
          href="/"
          aria-label="Maxwell Hospitality home"
          style={{
            transform: `scale(${1 - 0.1 * scrollProgress})`,
          }}
          onClick={() => setIsMobileMenuOpen(false)} // Close menu if logo clicked
        >
          <div 
            className="relative flex h-12 w-32 items-center justify-center overflow-hidden transition-all duration-300"
            style={{ filter: `invert(${logoInvert}%)` }}
          >
            <Image
              src="/logo.png"
              alt="Maxwell Hospitality"
              fill
              className="object-contain"
              sizes="128px"
              priority
            />
          </div>
        </Link>

        {/* Right Navigation (Desktop) */}
        <nav
          className="flex items-center justify-end max-[900px]:hidden"
          style={{ gap: `${gapSpacing}rem` }}
          aria-label="Primary right navigation"
        >
          {rightNavItems.map((item) => (
            <Link
              className="text-[0.75rem] font-bold tracking-[0.15em] uppercase transition-all duration-300 hover:opacity-60"
              href={item.href}
              key={item.href}
              style={{ color: textColor }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger / Close Button */}
        <button
          className="hidden items-center justify-center transition-transform duration-300 hover:opacity-70 max-[900px]:flex"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
          style={{ 
            color: textColor,
            transform: isMobileMenuOpen ? "rotate(90deg)" : "rotate(0deg)" 
          }}
        >
          {isMobileMenuOpen ? (
            // Close 'X' Icon
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            // Hamburger Icon
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        {/* --- MOBILE EXPANDING MENU AREA --- */}
        {/* Because the parent is flex-wrap, this w-full div breaks to a new line and expands downwards */}
        <div
          className={`w-full overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
            isMobileMenuOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <nav className="flex flex-col border-t border-black/5 pt-4 pb-4">
            {allNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="group relative flex w-full items-center justify-between py-4"
              >
                <span className="text-[0.85rem] font-bold tracking-[0.15em] text-[#1a1a1a] uppercase transition-colors group-hover:text-[#C9A86A]">
                  {item.label}
                </span>
                {/* A subtle arrow indicator for each link */}
                <svg className="h-4 w-4 text-[#C9A86A] opacity-0 transition-all duration-300 group-hover:-translate-x-2 group-hover:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            ))}
          </nav>
        </div>

      </div>
    </header>
  );
}