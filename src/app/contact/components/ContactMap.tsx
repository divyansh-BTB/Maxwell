export function ContactMap() {
  return (
    <section className="bg-[#FAFAF8] px-[clamp(20px,5vw,72px)] pb-[clamp(72px,9vw,112px)]">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-8">
          <span className="mb-4 flex items-center gap-3 text-sm font-bold tracking-[0.15em] text-[#C9A86A] uppercase">
            <span className="h-[2px] w-8 bg-[#C9A86A]" />
            Principal Place of Business
          </span>
          <h2 className="max-w-[720px] text-[clamp(2rem,3.5vw,3.2rem)] font-bold leading-[1.08] text-[#3F6F63]">
            Visit our Greater Noida business location.
          </h2>
        </div>

        <div className="overflow-hidden rounded-[1.75rem] border border-[#E5DED1] bg-white shadow-2xl shadow-[#3F6F63]/10">
          <iframe
            className="h-[520px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Basement%2C%20Block%2010A%2C%20Sharda%20University%20%26%20Hospital%2C%20Plot%20No.%2032%20%26%2034%2C%20Knowledge%20Park%20III%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%2C%20India&output=embed"
            title="Principal Place of Business location map"
          />
        </div>
      </div>
    </section>
  );
}
