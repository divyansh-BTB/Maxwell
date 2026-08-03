const iconProps = {
  className: "h-5 w-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function IconLeaf() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path d="M20 4C10 4 4 10 4 20c10 0 16-6 16-16Z" />
      <path d="M4 20 14 10" />
    </svg>
  );
}

function IconSparkle() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path d="M12 3l1.7 5.6L19 10l-5.3 1.4L12 17l-1.7-5.6L5 10l5.3-1.4L12 3Z" />
      <path d="M19 15l.6 2 .4.1-2 .6L17.4 20l-.6-2-2-.6 2-.6.6-1.2Z" />
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

function IconBulb() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path d="M9.5 18h5" />
      <path d="M10 21h4" />
      <path d="M12 3a6 6 0 0 0-4 10.5c.6.6 1 1.4 1 2.5h6c0-1.1.4-1.9 1-2.5A6 6 0 0 0 12 3Z" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconSeal() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3.5 14 5l2.5-.3.8 2.4 2.1 1.4-1 2.3 1 2.3-2.1 1.4-.8 2.4L14 19l-2 1.5L10 19l-2.5.3-.8-2.4-2.1-1.4 1-2.3-1-2.3 2.1-1.4.8-2.4L10 5l2-1.5Z" />
      <path d="m9.6 12 1.7 1.7 3.1-3.4" />
    </svg>
  );
}

const commitments = [
  {
    keyword: "Nutrition & Safety",
    statement: "Deliver safe and nutritious food.",
    Icon: IconLeaf,
  },
  {
    keyword: "Guest Experience",
    statement: "Create exceptional guest experiences.",
    Icon: IconSparkle,
  },
  {
    keyword: "Hygiene & Compliance",
    statement: "Maintain the highest standards of hygiene and compliance.",
    Icon: IconShield,
  },
  {
    keyword: "Innovation",
    statement: "Drive innovation in hospitality and food services.",
    Icon: IconBulb,
  },
  {
    keyword: "Partnership",
    statement:
      "Build long-term partnerships with organizations and communities.",
    Icon: IconUsers,
  },
];

export function AboutMission() {
  return (
    <section
      className="bg-white px-[clamp(20px,5vw,72px)] py-[clamp(40px,5vw,76px)]"
      id="mission"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-[clamp(44px,6vw,80px)] lg:grid-cols-[0.82fr_1.18fr]">
        {/* --- LEFT: sticky intro + signed pledge --- */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="mb-4 flex items-center gap-3 text-sm font-bold tracking-[0.15em] text-[#758696] uppercase">
            <span className="h-[2px] w-8 bg-[#758696]" />
            Our Mission
          </span>
          <h2 className="m-0 section-title text-[#0B1F33]">
            Operational commitments.
          </h2>
          <p className="mt-6 max-w-[460px] section-copy text-[#5D6C7B]">
            Every MHPL operation is shaped by practical commitments that keep
            food safe, service consistent, and hospitality dependable.
          </p>

          {/* Signed pledge plaque */}
          <div className="relative mt-9 overflow-hidden rounded-[1.5rem] bg-[#0B1F33] p-8 text-white shadow-2xl shadow-[#0B1F33]/20">
            <div className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full bg-[#0D2B44] opacity-60 blur-3xl" />
            <div className="relative z-10">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C6A15B]/40 bg-[#C6A15B]/10 text-[#C6A15B]">
                  <IconSeal />
                </span>
                <span className="text-[0.68rem] font-black tracking-[0.18em] text-white/55 uppercase">
                  Our Pledge
                </span>
              </div>
              <p className="text-[1.12rem] font-medium leading-[1.55] text-white/90">
                Every promise here is backed by daily systems, audits, and
                accountable teams — not words on a wall.
              </p>
              <div className="mt-7 flex items-end justify-between gap-4 border-t border-white/12 pt-6">
                <div>
                  <p className="font-heading text-[1.6rem] leading-none text-white">
                    Maxwell Hospitality
                  </p>
                  <p className="mt-2 text-[0.68rem] tracking-[0.18em] text-white/45 uppercase">
                    Private Limited
                  </p>
                </div>
                <span className="font-mono text-xs text-[#C6A15B]">
                  05 / 05
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT: the commitment ledger --- */}
        <div>
          <div className="flex items-center justify-between border-b border-[#0B1F33]/12 pb-4">
            <span className="text-[0.72rem] font-black tracking-[0.16em] text-[#0B1F33] uppercase">
              The Maxwell Commitment
            </span>
            <span className="font-mono text-xs text-[#758696]">
              Five promises
            </span>
          </div>

          {commitments.map((commitment, index) => (
            <article
              key={commitment.statement}
              className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-[#EDEFF2] py-7 transition-colors duration-500 hover:border-[#0B1F33]/30 sm:gap-7"
            >
              {/* Left accent rail that grows on hover */}
              <span className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-[#C6A15B] transition-transform duration-500 ease-out group-hover:scale-y-100" />

              {/* Serif index */}
              <span className="pl-3 font-heading text-[clamp(2rem,3.4vw,3rem)] leading-none text-[#D3DBE3] transition-all duration-500 group-hover:-translate-y-0.5 group-hover:text-[#0B1F33] sm:pl-5">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Content */}
              <div className="transition-transform duration-500 ease-out group-hover:translate-x-1">
                <p className="mb-1.5 text-[0.66rem] font-black tracking-[0.16em] text-[#C6A15B] uppercase">
                  {commitment.keyword}
                </p>
                <p className="text-[clamp(1.05rem,1.5vw,1.3rem)] font-medium leading-[1.35] text-[#0B1F33]">
                  {commitment.statement}
                </p>
              </div>

              {/* Icon chip that fills on hover */}
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#EDEFF2] bg-[#F6F7F8] text-[#0D2B44] transition-all duration-500 ease-out group-hover:-translate-y-0.5 group-hover:border-[#0B1F33] group-hover:bg-[#0B1F33] group-hover:text-white">
                <commitment.Icon />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
