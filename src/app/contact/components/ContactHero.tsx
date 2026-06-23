export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-white px-[clamp(20px,5vw,72px)] pt-[clamp(150px,16vw,210px)] pb-[clamp(72px,10vw,124px)] text-[#0E4A4F]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#F7FBFC_0%,#EEF8FB_100%)]" />
      <div className="relative z-10 mx-auto grid max-w-[1280px] grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
        <div>
          <span className="mb-5 flex items-center gap-3 text-sm font-bold tracking-[0.18em] text-[#2E7C82] uppercase">
            <span className="h-[2px] w-8 bg-[#2E7C82]" />
            Contact
          </span>
          <h1 className="max-w-[760px] text-[clamp(2.8rem,6vw,6rem)] font-bold leading-[0.96] text-[#0E4A4F]">
            Get In Touch
          </h1>
        </div>
        <p className="max-w-[720px] text-[clamp(1.05rem,1.5vw,1.25rem)] leading-[1.8] text-[#5C7078] lg:justify-self-end">
          Let's create exceptional hospitality experiences together. Share your
          corporate, healthcare, catering, banquet, or brand requirement with
          the Maxwell team.
        </p>
      </div>
    </section>
  );
}
