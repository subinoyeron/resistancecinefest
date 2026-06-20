import { type ReactNode } from "react";

const widths = {
  default: "max-w-6xl",
  wide: "max-w-[90rem]",
  narrow: "max-w-4xl",
} as const;

export function Container({
  children,
  className = "",
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: keyof typeof widths;
}) {
  return (
    <div className={`mx-auto w-full ${widths[size]} ${className}`}>
      {children}
    </div>
  );
}
