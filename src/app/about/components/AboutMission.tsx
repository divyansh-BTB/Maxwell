"use client";

const missions = [
  "Deliver safe and nutritious food.",
  "Create exceptional guest experiences.",
  "Maintain the highest standards of hygiene and compliance.",
  "Drive innovation in hospitality and food services.",
  "Build long-term partnerships with organizations and communities.",
];

export function AboutMission() {
  return (
    <section
      className="bg-white px-[clamp(20px,5vw,72px)] py-[clamp(72px,10vw,120px)]"
      id="mission"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1fr] lg:items-end">
          <div>
            <span className="mb-4 flex items-center gap-3 text-sm font-bold tracking-[0.15em] text-[#758696] uppercase">
              <span className="h-[2px] w-8 bg-[#758696]" />
              Our Mission
            </span>
            <h2 className="m-0 section-title text-[#0B1F33]">
              Operational commitments.
            </h2>
          </div>
          <p className="max-w-[640px] section-copy text-[#5D6C7B] lg:justify-self-end">
            Every MHPL operation is shaped by practical commitments that keep
            food safe, service consistent, and hospitality dependable.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {missions.map((mission, index) => (
            <div
              key={mission}
              className="group relative flex min-h-[170px] flex-col justify-between overflow-hidden rounded-2xl border border-[#F6F7F8] bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#0D2B44] hover:shadow-xl hover:shadow-[#0B1F33]/10"
            >
              <span className="text-sm font-mono text-[#0D2B44] transition-colors group-hover:text-[#0B1F33]">
                0{index + 1}
              </span>
              <p className="text-[1.05rem] font-medium leading-[1.5] text-[#0B1F33] transition-colors group-hover:text-[#0D2B44]">
                {mission}
              </p>
              {/* Bottom decorative line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#0D2B44] transition-all duration-500 ease-out group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
