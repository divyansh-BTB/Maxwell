"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// Beautiful placeholder images from Unsplash matching your hospitality theme
const features = [
  {
    id: "quality",
    eyebrow: "Quality",
    title: "Nutrition-led food programs",
    description:
      "At MHPL, quality is our foundation. We are committed to delivering exceptional dining experiences and reliable food solutions across healthcare institutions, food courts, and catering operations. We focus on nutrition-led menus designed to cater to diverse dietary requirements without compromising on flavor, ensuring that every meal supports well-being.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop", 
  },
  {
    id: "hygiene",
    eyebrow: "Hygiene",
    title: "Controlled kitchen standards",
    description:
      "With a strong focus on safety and cleanliness, our kitchens follow stringent hygiene protocols at every step—from procurement and storage to preparation and dispatch. Every dish is prepared daily in controlled batches to lock in freshness and taste, ensuring every plate meets our absolute highest standards of food safety.",
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1200&auto=format&fit=crop", 
  },
  {
    id: "service",
    eyebrow: "Service",
    title: "Reliable hospitality teams",
    description:
      "Service is at the heart of our operations. MHPL continues to create meaningful food experiences that comfort, nourish, and inspire. Our reliable hospitality teams are trained to deliver seamless service, whether operating bustling food courts, managing fine dining restaurants, or catering large-scale events with warmth and professionalism.",
    image:
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1200&auto=format&fit=crop", 
  },
];

export function AboutPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  // This observer detects which image is currently in the middle of the screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Tell TypeScript this target is specifically an HTMLDivElement
            const index = imageRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        // Triggers when the image hits the vertical center of the viewport
        rootMargin: "-40% 0px -40% 0px", 
      }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#FAFAF8] px-[clamp(20px,5vw,72px)] py-[clamp(72px,10vw,132px)]" id="about">
      <div className="mx-auto max-w-[1280px]">
        
        {/* Responsive Heading: Left on mobile, Centered on desktop */}
        <div className="mb-[clamp(40px,8vw,80px)] text-left md:text-center">
          <span className="mb-3 block text-sm font-bold tracking-[0.15em] text-[#C9A86A] uppercase">
            Who We Are
          </span>
          <h2 className="mx-auto max-w-[800px] text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.1] text-[#23443D]">
            Purposeful hospitality for institutions, diners, and events
          </h2>
        </div>

        {/* --- DESKTOP VIEW: Sticky Text with Blur Fade & Scrolling Images --- */}
        <div className="hidden md:flex items-start relative w-full gap-16">
          
          {/* Left Column - Pinned Text Container */}
          <div className="w-1/2 sticky top-0 flex h-screen items-center">
            
            {/* Animated Progress Dots */}
            <div className="mr-8 flex flex-col items-center gap-4">
              {features.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 w-2 rounded-full transition-all duration-500 ${
                    activeIndex === idx
                      ? "h-8 bg-[#C9A86A]" 
                      : "bg-[#23443D]/20"
                  }`}
                />
              ))}
            </div>

            <div className="relative h-[400px] w-full">
              {features.map((feature, idx) => (
                <div
                  key={feature.id}
                  className={`absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    activeIndex === idx
                      ? "opacity-100 blur-none translate-y-0 pointer-events-auto"
                      : "opacity-0 blur-md translate-y-8 pointer-events-none"
                  }`}
                >
                  <span className="mb-4 block text-sm font-bold tracking-[0.12em] text-[#C9A86A] uppercase">
                    {feature.eyebrow}
                  </span>
                  <h3 className="mb-6 text-[clamp(1.8rem,2.5vw,2.5rem)] font-bold leading-[1.1] text-[#23443D]">
                    {feature.title}
                  </h3>
                  <p className="mb-8 text-[1.05rem] leading-[1.8] text-[#6D706B] max-w-[90%]">
                    {feature.description}
                  </p>
                  
                  {idx === features.length - 1 && (
                    <div>
                      {/* Premium Sliding Underline Link using Next.js Link */}
                      <Link
                        className="group relative inline-flex overflow-hidden pb-[5px] text-[1.05rem] font-bold text-[#23443D] transition-opacity hover:opacity-80"
                        href="#services"
                      >
                        Learn More
                        {/* Line 1: Slides much further out to the right (125%) */}
                        <span className="absolute bottom-0 left-0 h-[1.5px] w-full bg-[#C9A86A] transition-transform duration-500 ease-in-out group-hover:translate-x-[125%]" />
                        {/* Line 2: Starts much further back on the left (-125%) */}
                        <span className="absolute bottom-0 left-0 h-[1.5px] w-full -translate-x-[125%] bg-[#C9A86A] transition-transform duration-500 ease-in-out group-hover:translate-x-0" />
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Scrolling Images (REMOVED THE HUGE PADDING WRAPPER) */}
          <div className="w-1/2 flex flex-col">
            {features.map((feature, idx) => (
              <div
                key={`${feature.id}-image`}
                ref={(el) => { imageRefs.current[idx] = el; }}
                className="flex h-screen items-center justify-center py-10"
              >
                <div className="relative h-[70vh] w-full overflow-hidden rounded-[2rem] bg-[#1f3d37] shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#23443D]/40 to-transparent mix-blend-multiply" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- MOBILE VIEW: Elegant Stacked Layout --- */}
        <div className="flex flex-col gap-[80px] md:hidden">
          {features.map((feature, idx) => (
            <div key={feature.id} className="flex flex-col gap-6">
              <div className="relative h-[400px] w-full overflow-hidden rounded-[1.5rem] bg-[#1f3d37] shadow-xl">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-left">
                <span className="mb-3 block text-xs font-bold tracking-[0.12em] text-[#C9A86A] uppercase">
                  {feature.eyebrow}
                </span>
                <h3 className="mb-4 text-[1.8rem] font-bold leading-[1.2] text-[#23443D]">
                  {feature.title}
                </h3>
                <p className="text-[1.02rem] leading-[1.8] text-[#6D706B]">
                  {feature.description}
                </p>
                {idx === features.length - 1 && (
                  <div className="mt-6">
                    {/* Premium Sliding Underline Link using Next.js Link (Mobile) */}
                    <Link
                      className="group relative inline-flex overflow-hidden pb-[5px] text-[1.05rem] font-bold text-[#23443D] transition-opacity hover:opacity-80"
                      href="#services"
                    >
                      Learn More
                      <span className="absolute bottom-0 left-0 h-[1.5px] w-full bg-[#C9A86A] transition-transform duration-500 ease-in-out group-hover:translate-x-[125%]" />
                      <span className="absolute bottom-0 left-0 h-[1.5px] w-full -translate-x-[125%] bg-[#C9A86A] transition-transform duration-500 ease-in-out group-hover:translate-x-0" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}