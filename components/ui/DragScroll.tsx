"use client";

import { useRef } from "react";

export function DragScroll({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const pos = useRef({ startX: 0, scrollLeft: 0, dragging: false });

  const onPointerDown = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    pos.current = {
      startX: e.pageX - el.offsetLeft,
      scrollLeft: el.scrollLeft,
      dragging: true,
    };
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!pos.current.dragging || !ref.current) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    ref.current.scrollLeft =
      pos.current.scrollLeft - (x - pos.current.startX) * 1.2;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    pos.current.dragging = false;
    ref.current?.releasePointerCapture(e.pointerId);
  };

  return (
    <div
      ref={ref}
      className={`h-scroll ${className}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {children}
    </div>
  );
}
