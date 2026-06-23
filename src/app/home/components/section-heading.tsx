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
        <p className="mb-3.5 text-xs font-bold tracking-[0.16em] text-[#2E7C82] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="m-0 text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] font-semibold tracking-normal text-[#0E4A4F]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-[1.02rem] leading-[1.8] text-[#5C7078]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
