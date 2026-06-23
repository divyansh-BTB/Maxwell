export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-white px-[clamp(20px,5vw,72px)] pt-[clamp(150px,16vw,210px)] pb-[clamp(72px,10vw,124px)] text-[#0B1F33]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f7f7f5_100%)]" />
      <div className="relative z-10 mx-auto grid max-w-[1280px] grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
        <div>
          <span className="mb-5 flex items-center gap-3 text-sm font-bold tracking-[0.18em] text-[#758696] uppercase">
            <span className="h-[2px] w-8 bg-[#758696]" />
            Contact
          </span>
          <h1 className="max-w-[760px] text-[clamp(2.8rem,6vw,6rem)] font-bold leading-[0.96] text-[#0B1F33]">
            Get In Touch
          </h1>
        </div>
        <p className="max-w-[720px] text-[clamp(1.05rem,1.5vw,1.25rem)] leading-[1.8] text-[#5D6C7B] lg:justify-self-end">
          Let's create exceptional hospitality experiences together. Share your
          corporate, healthcare, catering, banquet, or brand requirement with
          the Maxwell team.
        </p>
      </div>
    </section>
  );
}
