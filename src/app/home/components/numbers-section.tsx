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
      className="relative overflow-hidden bg-gradient-to-br from-[#F6F7F8] via-[#E2E8F0]/40 to-[#F6F7F8] px-[clamp(20px,5vw,72px)] py-[clamp(50px,6vw,84px)]"
      id="numbers"
    >
      {/* Soft Ambient Mesh Background for Optical Glass Refraction */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-200/40 via-transparent to-amber-100/50 opacity-80"
      />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        {/* --- SECTION HEADER --- */}
        <div className="mb-[clamp(40px,6vw,72px)] flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <span className="mb-4 flex items-center gap-3 text-sm font-bold tracking-[0.15em] text-[#758696] uppercase">
              <span className="h-[2px] w-8 bg-[#758696]" />
              By The Numbers
            </span>
            <h2 className="max-w-[620px] section-title text-[#0B1F33]">
              Trusted scale, delivered every single day.
            </h2>
          </div>
          <p className="max-w-[560px] section-copy text-[#5D6C7B] lg:justify-self-end">
            Consistent, high-volume food service across corporate workplaces and
            healthcare institutions — thousands of meals prepared and served
            daily with disciplined quality.
          </p>
        </div>

        {/* --- TRUE LIGHT GLASSMORPHISM CARDS GRID --- */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, index) => (
            <div
              className={`group relative flex flex-col justify-between overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/50 p-6 text-left shadow-[0_8px_32px_0_rgba(11,31,51,0.08)] backdrop-blur-xl backdrop-saturate-150 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-[#C6A15B]/70 hover:bg-white/80 hover:shadow-[0_20px_45px_rgba(198,161,91,0.2)] ${
                index === stats.length - 1 && stats.length % 2 !== 0
                  ? "col-span-2 md:col-span-1"
                  : ""
              }`}
              key={stat.label}
            >
              {/* Top Row: Icon Badge & Gold Unit Pill (No dot/blob) */}
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B1F33] text-white shadow-md transition-colors duration-500 group-hover:bg-[#C6A15B]">
                  <stat.Icon />
                </span>
                {stat.unit ? (
                  <span className="rounded-md border border-[#C6A15B]/40 bg-[#C6A15B]/15 px-2 py-0.5 text-[0.62rem] font-black tracking-[0.1em] text-[#B38D46] uppercase backdrop-blur-sm">
                    {stat.unit}
                  </span>
                ) : null}
              </div>

              {/* Middle & Bottom: Stat Number & Label */}
              <div className="mt-8">
                <p className="font-heading text-[clamp(2.1rem,3vw,2.75rem)] font-extrabold leading-none tracking-tight text-[#0B1F33]">
                  {stat.value}
                </p>
                <p className="mt-3 text-[0.72rem] font-bold leading-[1.35] tracking-[0.08em] text-[#5D6C7B] uppercase transition-colors duration-300 group-hover:text-[#0B1F33]">
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
