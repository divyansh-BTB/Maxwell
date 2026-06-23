export function ArrowCircle({ dark = false }: { dark?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
        dark
          ? "bg-[#1F9AAA] text-white group-hover:bg-white group-hover:text-[#1F9AAA]"
          : "bg-white text-[#1F9AAA] group-hover:bg-[#1F9AAA] group-hover:text-white"
      }`}
    >
      <svg
        aria-hidden="true"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
        viewBox="0 0 24 24"
      >
        <path d="M7 17 17 7" />
        <path d="M9 7h8v8" />
      </svg>
    </span>
  );
}
