"use client";

import { type ReactNode, useRef, useState } from "react";

const iconProps = {
  className: "h-7 w-7",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function IconSupplyChain() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path d="M10 17h4V5H2v12h3" />
      <path d="M14 9h4l3 3v5h-3" />
      <circle cx="7.5" cy="17.5" r="1.5" />
      <circle cx="17.5" cy="17.5" r="1.5" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path d="M12 3 5 6v5c0 4 3 7 7 8 4-1 7-4 7-8V6l-7-3Z" />
      <path d="m9.5 12 1.8 1.8 3.2-3.6" />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path d="M12 20s-7-4.4-7-9.3A3.7 3.7 0 0 1 12 8a3.7 3.7 0 0 1 7-2.7c0 4.9-7 9.7-7 9.7Z" />
    </svg>
  );
}

function IconClipboard() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path d="M9 4h6a1 1 0 0 1 1 1v1H8V5a1 1 0 0 1 1-1Z" />
      <path d="M8 6H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-2" />
      <path d="M9 12h6M9 16h4" />
    </svg>
  );
}

function IconGear() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </svg>
  );
}

function IconQuality() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path d="M12 3.5 14 5l2.5-.3.8 2.4 2.1 1.4-1 2.3 1 2.3-2.1 1.4-.8 2.4L14 19l-2 1.5L10 19l-2.5.3-.8-2.4-2.1-1.4 1-2.3-1-2.3 2.1-1.4.8-2.4L10 5l2-1.5Z" />
      <path d="m9.6 12 1.7 1.7 3.1-3.4" />
    </svg>
  );
}

const challenges = [
  {
    title: "Supply Chain Disruptions",
    description:
      "Ensuring uninterrupted availability of quality ingredients through robust procurement systems and predictive analytics.",
    // A large feature block to anchor the bento grid
    gridClass: "md:col-span-2 md:row-span-2 bg-[#0B1F33] text-white",
    textClass: "text-[#9CB3C9]",
    titleClass: "text-white text-2xl lg:text-3xl",
    dark: true,
    Icon: IconSupplyChain,
  },
  {
    title: "Food Safety Risks",
    description:
      "Strict HACCP-based food safety protocols and real-time compliance monitoring.",
    // Wide top-right block
    gridClass: "md:col-span-2 md:row-span-1 bg-[#F6F7F8] border-[#E2E8F0]",
    textClass: "text-[#5D6C7B]",
    titleClass: "text-[#0B1F33] text-xl",
    dark: false,
    Icon: IconShield,
  },
  {
    title: "Poor Visitor Food Experience",
    description:
      "Personalized, restaurant-quality meals that lift guest satisfaction.",
    // Small square 1
    gridClass: "md:col-span-1 md:row-span-1 bg-white border-[#E2E8F0]",
    textClass: "text-[#5D6C7B]",
    titleClass: "text-[#0B1F33] text-lg",
    dark: false,
    Icon: IconHeart,
  },
  {
    title: "Inefficient Menu Planning",
    description:
      "Technology-driven menu management and streamlined meal options for visitors.",
    // Small square 2
    gridClass: "md:col-span-1 md:row-span-1 bg-white border-[#E2E8F0]",
    textClass: "text-[#5D6C7B]",
    titleClass: "text-[#0B1F33] text-lg",
    dark: false,
    Icon: IconClipboard,
  },
  {
    title: "Operational Inefficiencies",
    description:
      "Standardized, scalable processes ensuring consistent service delivery and cost optimization.",
    // Wide bottom-left block
    gridClass:
      "md:col-span-2 md:row-span-1 bg-gradient-to-br from-white to-[#F6F7F8] border-[#E2E8F0]",
    textClass: "text-[#5D6C7B]",
    titleClass: "text-[#0B1F33] text-xl",
    dark: false,
    Icon: IconGear,
  },
  {
    title: "Quality Control Issues",
    description:
      "Multi-level quality assurance systems deployed across all daily kitchen operations.",
    // Wide bottom-right block
    gridClass: "md:col-span-2 md:row-span-1 bg-white border-[#E2E8F0]",
    textClass: "text-[#5D6C7B]",
    titleClass: "text-[#0B1F33] text-xl",
    dark: false,
    Icon: IconQuality,
  },
];

// Maximum rotation (degrees) applied at the card edges
const MAX_TILT = 7;

type TiltCardProps = {
  className: string;
  dark: boolean;
  children: ReactNode;
};

function TiltCard({ className, dark, children }: TiltCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const [transform, setTransform] = useState<string>("");
  const [isHovering, setIsHovering] = useState(false);
  // Glow position (percentages) that follows the pointer
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width; // 0 → 1
    const py = (event.clientY - rect.top) / rect.height; // 0 → 1

    const rotateY = (px - 0.5) * 2 * MAX_TILT;
    const rotateX = -(py - 0.5) * 2 * MAX_TILT;

    setTransform(
      `perspective(1100px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(1.02)`,
    );
    setGlow({ x: px * 100, y: py * 100 });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTransform("perspective(1100px) rotateX(0deg) rotateY(0deg) scale(1)");
  };

  return (
    <article
      ref={cardRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transformStyle: "preserve-3d",
        transition: isHovering
          ? "box-shadow 0.5s ease"
          : "transform 0.6s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s ease",
      }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border p-8 shadow-sm will-change-transform hover:shadow-2xl hover:shadow-[#0B1F33]/15 ${className}`}
    >
      {/* Pointer-following light sheen (stronger 3D read) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(340px circle at ${glow.x}% ${glow.y}%, ${
            dark ? "rgba(255,255,255,0.10)" : "rgba(13,43,68,0.06)"
          }, transparent 60%)`,
        }}
      />

      {/* Content lifted above the surface for depth */}
      <div
        className="relative z-10 flex h-full flex-col justify-between"
        style={{ transform: "translateZ(40px)" }}
      >
        {children}
      </div>
    </article>
  );
}

export function ChallengesPreviewBento() {
  return (
    <section className="bg-white px-[clamp(20px,5vw,72px)] py-[clamp(72px,9vw,112px)]">
      <div className="mx-auto max-w-[1280px]">
        {/* Header Section */}
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-[680px]">
            <span className="mb-4 flex items-center gap-3 text-sm font-bold tracking-[0.15em] text-[#758696] uppercase">
              <span className="h-[2px] w-8 bg-[#758696]" />
              Challenges We Solve
            </span>
            <h2 className="text-4xl font-black leading-tight tracking-tight text-[#0B1F33] md:text-5xl">
              Common industry challenges.
            </h2>
          </div>
          <p className="max-w-[500px] text-lg leading-relaxed text-[#5D6C7B]">
            Maxwell brings systems, compliance, and hospitality discipline to
            the recurring operational issues food service teams face every day.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[minmax(220px,auto)]">
          {challenges.map((challenge, index) => (
            <TiltCard
              key={challenge.title}
              dark={challenge.dark}
              className={challenge.gridClass}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm opacity-60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-500 group-hover:-translate-y-0.5 group-hover:scale-110 ${
                    challenge.dark
                      ? "border-white/15 bg-white/5 text-white/70 group-hover:text-white"
                      : "border-[#E2E8F0] bg-white text-[#0D2B44]/75 group-hover:text-[#0D2B44]"
                  }`}
                >
                  <challenge.Icon />
                </span>
              </div>

              <div className="mt-8">
                <h3
                  className={`font-black leading-tight tracking-tight ${challenge.titleClass}`}
                >
                  {challenge.title}
                </h3>
                <p className={`mt-3 leading-relaxed ${challenge.textClass}`}>
                  {challenge.description}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
