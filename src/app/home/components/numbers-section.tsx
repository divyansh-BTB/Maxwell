import Image from "next/image";

const iconClass = "h-7 w-7";
const iconProps = {
  className: iconClass,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function IconBuilding() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path d="M3 21h18" />
      <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
      <path d="M10 8h4M10 12h4M10 16h4" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M3 9h18M8 2v4M16 2v4" />
      <path d="m9 15 2 2 4-4" />
    </svg>
  );
}

function IconUtensils() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path d="M3 2v7c0 1.1.9 2 2 2s2-.9 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
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

function IconChefHat() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
      <path d="M6 17h12" />
    </svg>
  );
}

const stats = [
  { value: "5+", unit: "", label: "Corporate Clients", Icon: IconBuilding },
  { value: "500+", unit: "", label: "Successful Events", Icon: IconCalendar },
  {
    value: "1500+",
    unit: "/day",
    label: "Patient Meals Served",
    Icon: IconUtensils,
  },
  {
    value: "1000+",
    unit: "/day",
    label: "Attendant Meals Served",
    Icon: IconUsers,
  },
  {
    value: "2000+",
    unit: "/day",
    label: "Staff Meals Served",
    Icon: IconChefHat,
  },
];

export function NumbersSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#0B1F33] px-[clamp(20px,5vw,72px)] py-[clamp(40px,5vw,76px)]"
      id="numbers"
    >
      {/* Immersive background */}
      <Image
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000&auto=format&fit=crop"
        alt=""
        fill
        className="object-cover opacity-70"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F33]/80 via-[#0B1F33]/60 to-[#0B1F33]/85" />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="mb-[clamp(40px,6vw,72px)] flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <span className="mb-5 flex items-center gap-3 text-sm font-bold tracking-[0.15em] text-white/55 uppercase">
              <span className="h-[2px] w-8 bg-white/45" />
              By The Numbers
            </span>
            <h2 className="max-w-[620px] section-title text-white">
              Trusted scale, delivered every single day.
            </h2>
          </div>
          <p className="max-w-[560px] section-copy text-white/65 lg:justify-self-end">
            Consistent, high-volume food service across corporate workplaces and
            healthcare institutions — thousands of meals prepared and served
            daily with disciplined quality.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, index) => (
            <div
              className={`group relative flex min-h-[clamp(240px,23vw,320px)] flex-col justify-between overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/[0.04] p-[clamp(20px,2vw,30px)] text-left backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-[#C6A15B] hover:bg-[#C6A15B] hover:shadow-[0_28px_60px_rgba(198,161,91,0.3)] ${
                index === stats.length - 1 && stats.length % 2 !== 0
                  ? "col-span-2 md:col-span-1"
                  : ""
              }`}
              key={stat.label}
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors duration-500 group-hover:border-[#0B1F33]/25 group-hover:bg-[#0B1F33]/10 group-hover:text-[#0B1F33]">
                <stat.Icon />
              </span>

              <div>
                <p className="flex flex-wrap items-baseline font-heading text-[clamp(1.7rem,6vw,3rem)] leading-none tracking-[-0.01em] text-white transition-colors duration-500 group-hover:text-[#0B1F33]">
                  {stat.value}
                  {stat.unit && (
                    <span className="ml-1.5 font-sans text-[0.72rem] font-bold tracking-[0.06em] text-white/50 uppercase transition-colors duration-500 group-hover:text-[#0B1F33]/65">
                      {stat.unit}
                    </span>
                  )}
                </p>

                <p className="mt-4 text-[0.64rem] font-black tracking-[0.08em] text-white/60 uppercase transition-colors duration-500 group-hover:text-[#0B1F33]/80 md:whitespace-nowrap">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
