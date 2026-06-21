"use client";

const missions = [
  "Deliver safe, hygienic, nutritious, and delicious food.",
  "Provide patient-centric healthcare food services.",
  "Develop and manage vibrant food courts featuring premium brands.",
  "Operate restaurants offering exceptional dining experiences.",
  "Deliver professional indoor and outdoor catering services.",
  "Continuously innovate menus, systems, and processes.",
  "Build a culture of integrity, teamwork, and accountability.",
  "Promote sustainability and responsible business practices.",
];

export function AboutMission() {
  return (
    <section
      className="bg-[#FAFAF8] px-[clamp(20px,5vw,72px)] py-[clamp(72px,10vw,120px)]"
      id="mission"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1fr] lg:items-end">
          <div>
            <span className="mb-4 flex items-center gap-3 text-sm font-bold tracking-[0.15em] text-[#C9A86A] uppercase">
              <span className="h-[2px] w-8 bg-[#C9A86A]" />
              Our Mission
            </span>
            <h2 className="m-0 text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.1] text-[#3F6F63]">
              Operational commitments.
            </h2>
          </div>
          <p className="max-w-[640px] text-[1.04rem] leading-[1.8] text-[#6D706B] lg:justify-self-end">
            Every MHPL operation is shaped by practical commitments that keep
            food safe, service consistent, and hospitality dependable.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {missions.map((mission, index) => (
            <div
              key={mission}
              className="group relative flex min-h-[170px] flex-col justify-between overflow-hidden rounded-2xl border border-[#E5DED1] bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A86A] hover:shadow-xl hover:shadow-[#3F6F63]/10"
            >
              <span className="text-sm font-mono text-[#C9A86A] transition-colors group-hover:text-[#3F6F63]">
                0{index + 1}
              </span>
              <p className="text-[1.05rem] font-medium leading-[1.5] text-[#3F6F63] transition-colors group-hover:text-[#244C43]">
                {mission}
              </p>
              {/* Bottom decorative line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#C9A86A] transition-all duration-500 ease-out group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
