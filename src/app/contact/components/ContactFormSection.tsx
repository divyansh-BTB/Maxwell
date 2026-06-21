const serviceOptions = [
  "Healthcare Food Services",
  "Food Court Management",
  "Restaurant Operations",
  "Indoor Catering",
  "Outdoor Catering",
  "General Inquiry",
];

export function ContactFormSection() {
  return (
    <section className="bg-[#FAFAF8] px-[clamp(20px,5vw,72px)] pb-[clamp(72px,9vw,112px)]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 rounded-[1.75rem] bg-[#244C43] p-[clamp(24px,4vw,48px)] shadow-2xl shadow-[#3F6F63]/12 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="flex flex-col justify-between text-white">
          <div>
            <span className="mb-4 flex items-center gap-3 text-sm font-bold tracking-[0.15em] text-[#C9A86A] uppercase">
              <span className="h-[2px] w-8 bg-[#C9A86A]" />
              Contact Form
            </span>
            <h2 className="max-w-[460px] text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.05]">
              Submit your inquiry.
            </h2>
            <p className="mt-6 max-w-[460px] text-[1rem] leading-[1.8] text-white/70">
              Share a few details and our team can understand the service you
              need before starting the conversation.
            </p>
          </div>

          <div className="mt-10 rounded-[1.25rem] border border-white/12 bg-white/8 p-6">
            <p className="text-[0.78rem] font-bold tracking-[0.16em] text-[#C9A86A] uppercase">
              Maxwell Hospitality Private Limited
            </p>
            <p className="mt-3 text-[0.96rem] leading-[1.75] text-white/72">
              Healthcare food services, food courts, restaurants, and catering
              operations across India.
            </p>
          </div>
        </div>

        <form className="grid grid-cols-1 gap-4 rounded-[1.5rem] bg-[#FAFAF8] p-5 md:grid-cols-2 md:p-7">
          <label className="grid gap-2">
            <span className="text-sm font-bold text-[#3F6F63]">Full Name</span>
            <input
              className="min-h-12 rounded-xl border border-[#E5DED1] bg-white px-4 text-[#222222] outline-none transition-colors focus:border-[#C9A86A]"
              name="fullName"
              type="text"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-bold text-[#3F6F63]">
              Company Name
            </span>
            <input
              className="min-h-12 rounded-xl border border-[#E5DED1] bg-white px-4 text-[#222222] outline-none transition-colors focus:border-[#C9A86A]"
              name="companyName"
              type="text"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-bold text-[#3F6F63]">
              Email Address
            </span>
            <input
              className="min-h-12 rounded-xl border border-[#E5DED1] bg-white px-4 text-[#222222] outline-none transition-colors focus:border-[#C9A86A]"
              name="email"
              type="email"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-bold text-[#3F6F63]">
              Phone Number
            </span>
            <input
              className="min-h-12 rounded-xl border border-[#E5DED1] bg-white px-4 text-[#222222] outline-none transition-colors focus:border-[#C9A86A]"
              name="phone"
              type="tel"
            />
          </label>

          <label className="grid gap-2 md:col-span-2">
            <span className="text-sm font-bold text-[#3F6F63]">
              Service Required
            </span>
            <select
              className="min-h-12 rounded-xl border border-[#E5DED1] bg-white px-4 text-[#222222] outline-none transition-colors focus:border-[#C9A86A]"
              name="service"
            >
              {serviceOptions.map((service) => (
                <option key={service}>{service}</option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 md:col-span-2">
            <span className="text-sm font-bold text-[#3F6F63]">Message</span>
            <textarea
              className="min-h-36 resize-y rounded-xl border border-[#E5DED1] bg-white px-4 py-3 text-[#222222] outline-none transition-colors focus:border-[#C9A86A]"
              name="message"
            />
          </label>

          <div className="md:col-span-2">
            <button
              className="inline-flex min-h-13 items-center justify-center rounded-full bg-[#C9A86A] px-8 text-sm font-black tracking-[0.08em] text-[#244C43] uppercase transition-transform duration-200 hover:-translate-y-0.5"
              type="submit"
            >
              Submit Inquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
