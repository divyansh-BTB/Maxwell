const challenges = [
  {
    title: "Supply Chain Disruptions",
    description:
      "Ensuring uninterrupted availability of quality ingredients through robust procurement systems.",
  },
  {
    title: "Food Safety Risks",
    description:
      "Strict HACCP-based food safety protocols and compliance monitoring.",
  },
  {
    title: "Poor Patient Food Experience",
    description:
      "Enhancing patient satisfaction through personalized meal services and improved food quality.",
  },
  {
    title: "Inefficient Diet Planning",
    description:
      "Technology-driven nutrition management and dietician-led meal planning.",
  },
  {
    title: "Operational Inefficiencies",
    description:
      "Standardized processes ensuring consistency and cost optimization.",
  },
  {
    title: "Quality Control Issues",
    description: "Multi-level quality assurance systems across all operations.",
  },
];

export function ChallengesPreview() {
  return (
    <section className="bg-white px-[clamp(20px,5vw,72px)] py-[clamp(72px,9vw,112px)]">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <div>
            <span className="mb-4 flex items-center gap-3 text-sm font-bold tracking-[0.15em] text-[#758696] uppercase">
              <span className="h-[2px] w-8 bg-[#758696]" />
              Challenges We Solve
            </span>
            <h2 className="max-w-[680px] section-title text-[#0B1F33]">
              Common industry challenges.
            </h2>
          </div>
          <p className="max-w-[620px] section-copy text-[#5D6C7B] lg:justify-self-end">
            Maxwell brings systems, compliance, and hospitality discipline to
            the recurring operational issues food service teams face every day.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {challenges.map((challenge, index) => (
            <article
              className="rounded-[1.25rem] border border-[#F6F7F8] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0D2B44] hover:shadow-xl hover:shadow-[#0B1F33]/8"
              key={challenge.title}
            >
              <p className="text-sm font-mono text-[#758696]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-8 text-[1.22rem] font-black leading-tight text-[#0B1F33]">
                {challenge.title}
              </h3>
              <p className="mt-4 section-copy text-[#5D6C7B]">
                {challenge.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
