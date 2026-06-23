import { ArrowCircle } from "@/components/ArrowCircle";

const serviceOptions = [
  "Corporate Catering",
  "Corporate Events",
  "Workplace Cafeteria Management",
  "Corporate Gifting",
  "Healthcare Food Services",
  "Hospital Cafeteria Management",
  "Patient Meal Management",
  "Food Court Management",
  "Restaurant Operations",
  "Events & Banquets",
  "Baker Street",
  "Street Cafe",
  "Nutriverse",
  "General Inquiry",
];

export function ContactFormSection() {
  return (
    <section className="bg-white px-[clamp(20px,5vw,72px)] pb-[clamp(72px,9vw,112px)]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 rounded-[1.75rem] border border-[#D9D9D9] bg-white p-[clamp(24px,4vw,48px)] shadow-2xl shadow-[#0B1F33]/8 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="flex flex-col justify-between text-[#0B1F33]">
          <div>
            <span className="mb-4 flex items-center gap-3 text-sm font-bold tracking-[0.15em] text-[#758696] uppercase">
              <span className="h-[2px] w-8 bg-[#758696]" />
              Contact Form
            </span>
            <h2 className="max-w-[460px] text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.05] text-[#0B1F33]">
              Request a proposal.
            </h2>
            <p className="mt-6 max-w-[460px] text-[1rem] leading-[1.8] text-[#5D6C7B]">
              Share a few details and our team can understand your service
              requirement, guest count, and timeline before starting the
              conversation.
            </p>
          </div>

          <div className="mt-10 rounded-[1.25rem] border border-[#D9D9D9] bg-white p-6">
            <p className="text-[0.78rem] font-bold tracking-[0.16em] text-[#758696] uppercase">
              Maxwell Hospitality Private Limited
            </p>
            <p className="mt-3 text-[0.96rem] leading-[1.75] text-[#5D6C7B]">
              Corporate catering, hospital food services, banquets, cafes,
              bakeries, food courts, and event operations.
            </p>
          </div>
        </div>

        <form className="grid grid-cols-1 gap-4 rounded-[1.5rem] border border-[#F6F7F8] bg-white p-5 md:grid-cols-2 md:p-7">
          <label className="grid gap-2">
            <span className="text-sm font-bold text-[#0B1F33]">Full Name</span>
            <input
              className="min-h-12 rounded-xl border border-[#F6F7F8] bg-white px-4 text-[#0B1F33] outline-none transition-colors focus:border-[#0D2B44]"
              name="fullName"
              type="text"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-bold text-[#0B1F33]">
              Company Name
            </span>
            <input
              className="min-h-12 rounded-xl border border-[#F6F7F8] bg-white px-4 text-[#0B1F33] outline-none transition-colors focus:border-[#0D2B44]"
              name="companyName"
              type="text"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-bold text-[#0B1F33]">
              Email Address
            </span>
            <input
              className="min-h-12 rounded-xl border border-[#F6F7F8] bg-white px-4 text-[#0B1F33] outline-none transition-colors focus:border-[#0D2B44]"
              name="email"
              type="email"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-bold text-[#0B1F33]">
              Mobile Number
            </span>
            <input
              className="min-h-12 rounded-xl border border-[#F6F7F8] bg-white px-4 text-[#0B1F33] outline-none transition-colors focus:border-[#0D2B44]"
              name="phone"
              type="tel"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-bold text-[#0B1F33]">
              Service Required
            </span>
            <select
              className="min-h-12 rounded-xl border border-[#F6F7F8] bg-white px-4 text-[#0B1F33] outline-none transition-colors focus:border-[#0D2B44]"
              name="service"
            >
              {serviceOptions.map((service) => (
                <option key={service}>{service}</option>
              ))}
            </select>
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-bold text-[#0B1F33]">
              Number of Guests
            </span>
            <input
              className="min-h-12 rounded-xl border border-[#F6F7F8] bg-white px-4 text-[#0B1F33] outline-none transition-colors focus:border-[#0D2B44]"
              name="guests"
              type="number"
            />
          </label>

          <label className="grid gap-2 md:col-span-2">
            <span className="text-sm font-bold text-[#0B1F33]">Event Date</span>
            <input
              className="min-h-12 rounded-xl border border-[#F6F7F8] bg-white px-4 text-[#0B1F33] outline-none transition-colors focus:border-[#0D2B44]"
              name="eventDate"
              type="date"
            />
          </label>

          <label className="grid gap-2 md:col-span-2">
            <span className="text-sm font-bold text-[#0B1F33]">Message</span>
            <textarea
              className="min-h-36 resize-y rounded-xl border border-[#F6F7F8] bg-white px-4 py-3 text-[#0B1F33] outline-none transition-colors focus:border-[#0D2B44]"
              name="message"
            />
          </label>

          <div className="md:col-span-2">
            <button
              className="group inline-flex min-h-[58px] items-center justify-center gap-4 rounded-full border border-[#0D2B44] bg-[#0D2B44] py-2 pr-2 pl-7 text-sm font-black tracking-[0.08em] text-white uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#0D2B44]"
              type="submit"
            >
              <span>Request a Proposal</span>
              <ArrowCircle />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
