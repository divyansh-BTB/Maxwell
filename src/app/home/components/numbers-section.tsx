const numbers = [
  { value: "XX+", label: "Corporate Clients" },
  { value: "XX+", label: "Events Successfully Managed" },
  { value: "XX+", label: "Catering Projects Delivered" },
  { value: "XX Million+", label: "Meals Served" },
  { value: "XX+", label: "Healthcare Institutions Supported" },
  { value: "XX+", label: "Years of Hospitality Excellence" },
];

export function NumbersSection() {
  return (
    <section
      className="bg-[#EAE8E3] px-[clamp(20px,5vw,72px)] py-[clamp(64px,8vw,104px)]"
      id="numbers"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-[0.75fr_1fr] lg:items-end">
          <div>
            <span className="mb-4 flex items-center gap-3 text-sm font-bold tracking-[0.15em] text-[#758696] uppercase">
              <span className="h-[2px] w-8 bg-[#758696]" />
              By The Numbers
            </span>
            <h2 className="max-w-[620px] text-[clamp(2rem,3.8vw,3.4rem)] font-bold leading-[1.08] text-[#0B1F33]">
              Built for volume, trust, and repeatable quality.
            </h2>
          </div>
          <p className="max-w-[620px] text-[1.04rem] leading-[1.8] text-[#5D6C7B] lg:justify-self-end">
            These counters are ready for final business numbers while preserving
            the structure for corporate, healthcare, catering, and events scale.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {numbers.map((item, index) => (
            <article
              className="group rounded-[1.35rem] border border-[#D9D9D9] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#0D2B44] hover:bg-[#0D2B44]"
              key={item.label}
            >
              <p className="text-[0.76rem] font-bold tracking-[0.16em] text-[#758696] uppercase transition-colors group-hover:text-white/62">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-5 text-[clamp(2.4rem,5vw,4.5rem)] font-black leading-none text-[#0B1F33] transition-colors group-hover:text-white">
                {item.value}
              </p>
              <p className="mt-5 text-[1rem] font-bold leading-[1.45] text-[#5D6C7B] transition-colors group-hover:text-white/78">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
