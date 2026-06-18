type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`max-w-[720px] ${isCenter ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p className="mb-3.5 text-xs font-bold tracking-[0.16em] text-[#C9A86A] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="m-0 text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] font-semibold tracking-normal text-[#23443D]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-[1.02rem] leading-[1.8] text-[#6D706B]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
