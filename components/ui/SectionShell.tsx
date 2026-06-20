"use client";

import { type ReactNode } from "react";

const bgMap = {
  cream: "bg-cream",
  orange: "bg-orange/20",
  white: "bg-white",
  yellow: "bg-yellow/25",
  charcoal: "bg-charcoal text-cream",
} as const;

export function SectionShell({
  children,
  id,
  variant = "cream",
  className = "",
  noChunk = false,
}: {
  children: ReactNode;
  id?: string;
  variant?: keyof typeof bgMap;
  className?: string;
  noChunk?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative px-4 py-6 lg:px-8 lg:py-8 ${className}`}
    >
      <div
        className={`${noChunk ? "" : "section-chunk"} ${bgMap[variant]} section-pad relative overflow-hidden`}
      >
        {children}
      </div>
    </section>
  );
}

export function Blob({
  color,
  className = "",
}: {
  color: "orange" | "yellow" | "teal" | "red";
  className?: string;
}) {
  const colors = {
    orange: "bg-orange/30",
    yellow: "bg-yellow/35",
    teal: "bg-teal/25",
    red: "bg-red/20",
  };

  return (
    <div
      className={`blob ${colors[color]} ${className}`}
      aria-hidden
    />
  );
}
