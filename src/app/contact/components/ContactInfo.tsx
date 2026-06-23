const offices = [
  {
    title: "Principal Place of Business",
    address:
      "Basement, Block 10A, Sharda University & Hospital, Plot No. 32 & 34, Knowledge Park III, Greater Noida, Gautam Buddha Nagar, Uttar Pradesh, India",
  },
  {
    title: "Registered Office",
    address:
      "10 Jawahar Nagar, Khandari Bypass Road, Agra, Uttar Pradesh - 282002, India",
  },
];

export function ContactInfo() {
  return (
    <section className="bg-white px-[clamp(20px,5vw,72px)] py-[clamp(72px,9vw,112px)]">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-[clamp(36px,6vw,64px)] grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1fr] lg:items-end">
          <div>
            <span className="mb-4 flex items-center gap-3 text-sm font-bold tracking-[0.15em] text-[#2E7C82] uppercase">
              <span className="h-[2px] w-8 bg-[#2E7C82]" />
              Contact Information
            </span>
            <h2 className="max-w-[620px] text-[clamp(2rem,4vw,3.6rem)] font-bold leading-[1.05] text-[#0E4A4F]">
              Reach the MHPL team.
            </h2>
          </div>
          <p className="max-w-[620px] text-[1.04rem] leading-[1.8] text-[#5C7078] lg:justify-self-end">
            Connect with our offices for hospitality partnerships, institutional
            food service programs, restaurant operations, or catering inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {offices.map((office) => (
            <article
              className="rounded-[1.5rem] border border-[#E7F1F5] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1F9AAA] hover:shadow-xl hover:shadow-[#0E4A4F]/10"
              key={office.title}
            >
              <p className="text-[0.78rem] font-bold tracking-[0.16em] text-[#2E7C82] uppercase">
                {office.title}
              </p>
              <p className="mt-5 text-[1.15rem] font-bold leading-[1.55] text-[#0E4A4F]">
                {office.address}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
