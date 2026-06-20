import { type ReactNode } from "react";

const rotations = ["rotate-0", "-rotate-2", "rotate-1", "rotate-2", "-rotate-1", "rotate-3"];

export function Card({
  children,
  className = "",
  padding = "p-8 lg:p-10",
  tilt = false,
  tiltIndex = 0,
}: {
  children: ReactNode;
  className?: string;
  padding?: string;
  tilt?: boolean;
  tiltIndex?: number;
}) {
  const tiltClass = tilt ? rotations[tiltIndex % rotations.length] : "";

  return (
    <div
      className={`card-base card-hover ${padding} ${tiltClass} ${className}`}
    >
      {children}
    </div>
  );
}

export function IconCard({
  icon,
  title,
  description,
  className = "",
  tiltIndex = 0,
}: {
  icon: string;
  title: string;
  description: string;
  className?: string;
  tiltIndex?: number;
}) {
  return (
    <Card tilt tiltIndex={tiltIndex} className={`flex flex-col gap-5 ${className}`}>
      <span
        className="flex h-16 w-16 -rotate-6 items-center justify-center rounded-[24px] bg-yellow/30 text-4xl"
        aria-hidden
      >
        {icon}
      </span>
      <h3 className="type-card-title">{title}</h3>
      <p className="type-body text-charcoal/70">{description}</p>
    </Card>
  );
}
