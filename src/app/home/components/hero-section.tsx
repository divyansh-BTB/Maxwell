export function HeroSection() {
  return (
    <section className="relative grid min-h-screen place-items-center overflow-hidden px-[clamp(20px,5vw,72px)] py-36 text-center text-white max-[760px]:min-h-[820px]">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=2200&q=85"
      >
        <source
          src="https://videos.pexels.com/video-files/3195650/3195650-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
        <source
          src="https://videos.pexels.com/video-files/3195369/3195369-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
      </video>
      <div className="relative z-[2] mx-auto max-w-[850px] pt-10">
        <p className="mb-6 text-[0.82rem] font-black tracking-[0.28em] text-[#F5F1EA] uppercase">
          Premium Hospitality
        </p>
        <h1 className="m-0 text-[clamp(3rem,6.5vw,6.6rem)] leading-[0.94] font-medium tracking-normal text-white">
          Delivering Exceptional{" "}
          <em className="font-normal text-[#F5F1EA]">Hospitality & Food</em>{" "}
          Experiences
        </h1>
        <p className="mx-auto mt-7 max-w-[720px] text-[clamp(1rem,1.35vw,1.22rem)] leading-[1.72] text-white/86">
          From healthcare food services and premium food courts to restaurants
          and catering solutions, Maxwell Hospitality Private Limited brings
          culinary excellence and operational reliability to every dining
          experience.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#C9A86A] px-9 text-[0.76rem] font-black tracking-[0.04em] text-[#18342E] uppercase transition-transform duration-200 hover:-translate-y-0.5"
            href="#contact"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
      <div className="absolute right-0 bottom-[-1px] left-0 z-[2] h-11 rounded-t-[48px] bg-[#FAFAF8]" />
    </section>
  );
}
