"use client";

import Image from "next/image";

const stats = [
  "Multiple Healthcare Facilities Served",
  "Thousands of Meals Delivered",
  "High Quality Standards",
  "Dedicated Service Teams",
];

export function HealthcareExcellence() {
  return (
    <section
      className="overflow-hidden bg-[#FAFAF8] px-[clamp(20px,5vw,72px)] py-[clamp(72px,10vw,132px)]"
      id="healthcare"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-[clamp(40px,8vw,100px)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        
        {/* --- LEFT: CINEMATIC IMAGE WITH OFFSET FRAME --- */}
        <div className="relative w-full max-w-[500px] mx-auto lg:max-w-none">
          {/* Decorative Offset Gold Frame */}
          <div className="absolute -bottom-6 -right-6 top-6 left-6 rounded-[2rem] border-[1.5px] border-[#C9A86A]/40 transition-transform duration-700 hover:translate-x-2 hover:translate-y-2 lg:-bottom-8 lg:-right-8 lg:top-8 lg:left-8" />
          
          {/* Main Image Container */}
          <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-2xl shadow-[#3F6F63]/10">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=85"
              alt="Healthcare environment representing patient-focused food service"
              className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            {/* Subtle dark overlay for richer contrast */}
            <div className="absolute inset-0 bg-[#3F6F63]/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
          </div>
        </div>

        {/* --- RIGHT: CONTENT & INTERACTIVE STATS --- */}
        <div className="flex flex-col justify-center">
          
          {/* Refined Header */}
          <div className="mb-10 lg:mb-14">
            <span className="mb-4 flex items-center gap-3 text-sm font-bold tracking-[0.15em] text-[#C9A86A] uppercase">
              <span className="h-[2px] w-8 bg-[#C9A86A]" />
              Healthcare Excellence
            </span>
            <h2 className="mb-6 text-[clamp(2rem,3.5vw,3rem)] font-bold leading-[1.15] text-[#3F6F63]">
              Patient-focused dining backed by quality, hygiene, and care
            </h2>
            <p className="max-w-[90%] text-[1.05rem] leading-[1.8] text-[#6D706B]">
              Healthcare food service requires more than preparation. MHPL
              supports institutions with nutrition awareness, timely delivery,
              service discipline, and a calm hospitality approach.
            </p>
          </div>

          {/* Interactive Stat Cards Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
            {stats.map((stat, index) => (
              <div
                className="group relative flex min-h-[140px] cursor-default flex-col justify-end overflow-hidden rounded-2xl border border-[#E5DED1] bg-white p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#3F6F63] hover:bg-[#3F6F63] hover:shadow-xl hover:shadow-[#3F6F63]/20"
                key={stat}
              >
                {/* Accent Corner that expands on hover */}
                <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-[#FAFAF8] transition-all duration-500 ease-out group-hover:scale-[15] group-hover:bg-[#2E5A50] z-0" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Small gold indicator line */}
                  <div className="mb-4 h-1 w-8 rounded-full bg-[#E5DED1] transition-all duration-500 group-hover:w-12 group-hover:bg-[#C9A86A]" />
                  
                  <strong className="block pr-4 text-[1.15rem] leading-[1.3] text-[#3F6F63] transition-colors duration-500 group-hover:text-white">
                    {stat}
                  </strong>
                </div>
                
                {/* Background Watermark Number - Now visible by default and glows on hover */}
                <span className="absolute bottom-2 right-4 z-0 text-6xl font-black text-[#3F6F63]/10 transition-colors duration-500 group-hover:text-white/15">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
