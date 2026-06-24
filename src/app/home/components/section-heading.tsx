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
        <p className="mb-3.5 text-xs font-bold tracking-[0.16em] text-[#758696] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="m-0 section-title font-semibold tracking-normal text-[#0B1F33]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 section-copy text-[#5D6C7B]">{description}</p>
      ) : null}
    </div>
  );
}
