import { type ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {eyebrow && (
        <p
          className={`mb-4 text-base font-semibold uppercase tracking-[0.2em] ${
            light ? "text-red" : "text-teal"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`type-section ${light ? "text-cream" : "text-charcoal"} ${
          align === "center" ? "mx-auto max-w-4xl" : "max-w-3xl"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`type-body mt-6 max-w-2xl ${
            light ? "text-cream/85" : "text-charcoal/70"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
