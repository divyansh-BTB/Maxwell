const processSteps = [
  {
    title: "Requirement Assessment",
    description: "We understand the site, audience, service volume, and goals.",
  },
  {
    title: "Planning & Customization",
    description:
      "Menus, manpower, workflows, and service standards are shaped.",
  },
  {
    title: "Operations Setup",
    description: "Teams, equipment, vendors, and daily routines are aligned.",
  },
  {
    title: "Quality Assurance",
    description: "Food safety, hygiene, and delivery checks are put in place.",
  },
  {
    title: "Service Delivery",
    description: "The operation runs with trained teams and clear supervision.",
  },
  {
    title: "Continuous Improvement",
    description:
      "Feedback and performance insights guide refinements over time.",
  },
];

export function ServicesProcess() {
  return (
    <section className="relative overflow-hidden bg-[#3F6F63] px-[clamp(20px,5vw,72px)] py-[clamp(72px,9vw,112px)] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgb(201_168_106_/_0.12),transparent_30%)]" />
      <div className="relative z-10 mx-auto grid max-w-[1280px] grid-cols-1 gap-[clamp(40px,7vw,92px)] lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div className="lg:sticky lg:top-32">
          <div className="max-w-[560px]">
            <span className="mb-4 flex items-center gap-3 text-sm font-bold tracking-[0.15em] text-[#C9A86A] uppercase">
              <span className="h-[2px] w-8 bg-[#C9A86A]" />
              How We Work
            </span>
            <h2 className="text-[clamp(2rem,4vw,3.8rem)] font-bold leading-[1.05]">
              A clear process from brief to daily delivery.
            </h2>
            <p className="mt-7 text-[1.04rem] leading-[1.85] text-white/72">
              We align expectations early, build the operating model, and
              improve continuously after service begins.
            </p>

            <div className="mt-10 rounded-[1.25rem] border border-white/12 bg-white/8 p-6">
              <p className="text-[0.78rem] font-bold tracking-[0.16em] text-[#C9A86A] uppercase">
                Operating Rhythm
              </p>
              <p className="mt-3 text-[1.35rem] font-bold leading-tight">
                Plan carefully. Set up cleanly. Deliver consistently.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-[22px] top-8 bottom-8 hidden w-px bg-white/16 md:block" />

          <div className="grid grid-cols-1 gap-5">
            {processSteps.map((step, index) => (
              <article
                className="group relative grid grid-cols-1 gap-5 rounded-[1.5rem] border border-white/12 bg-[#2F5F55] p-6 shadow-2xl shadow-black/8 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A86A]/70 hover:bg-[#244C43] md:grid-cols-[74px_1fr]"
                key={step.title}
                style={{
                  marginLeft: index % 2 === 1 ? "clamp(0px, 4vw, 56px)" : 0,
                }}
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A86A]/50 bg-[#3F6F63] text-sm font-black text-[#C9A86A] transition-colors duration-300 group-hover:bg-[#C9A86A] group-hover:text-[#244C43]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-[1.35rem] font-bold leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[680px] text-[0.98rem] leading-[1.75] text-white/70">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
