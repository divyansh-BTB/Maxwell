import { SiteHeader } from "@/components/SiteHeader";
import { clients } from "@/lib/site-content";

export default function ClientsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="bg-white px-[clamp(20px,5vw,72px)] pt-[clamp(150px,16vw,210px)] pb-[clamp(72px,10vw,120px)]">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-[clamp(40px,7vw,84px)] grid grid-cols-1 gap-6 lg:grid-cols-[0.82fr_1fr] lg:items-end">
            <div>
              <span className="mb-4 flex items-center gap-3 text-sm font-bold tracking-[0.15em] text-[#758696] uppercase">
                <span className="h-[2px] w-8 bg-[#758696]" />
                Featured Clients
              </span>
              <h1 className="max-w-[780px] text-[clamp(2.5rem,5vw,5rem)] leading-[0.98] text-[#0B1F33]">
                Trusted by leading organizations.
              </h1>
            </div>
            <p className="max-w-[640px] text-[1.06rem] leading-[1.85] text-[#5D6C7B] lg:justify-self-end">
              A dedicated logo grid for healthcare partners, institutions,
              corporate clients, and group organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {clients.map((client) => (
              <article
                className="flex min-h-[170px] items-end rounded-[1.35rem] border border-[#F6F7F8] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0D2B44] hover:shadow-xl hover:shadow-[#0B1F33]/10"
                key={client}
              >
                <h2 className="text-[1.55rem] leading-[1.05] text-[#0B1F33]">
                  {client}
                </h2>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
