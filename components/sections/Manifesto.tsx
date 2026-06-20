"use client";

import { motion, useReducedMotion } from "framer-motion";

const MANIFESTO_TEXT =
  "Join us for films, conversations, and artivism centering resistance, memory, and justice.";

const BADGES = [
  { label: "RESIST", className: "lg:translate-x-0 lg:-rotate-2" },
  { label: "REMEMBER", className: "lg:translate-x-6 lg:-translate-y-1 lg:rotate-1" },
  { label: "JUSTICE", className: "lg:translate-x-3 lg:translate-y-2 lg:-rotate-1" },
] as const;

export function Manifesto() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-label="Festival manifesto"
      className="relative w-full min-h-[70vh] border-t border-black/25 bg-cream px-8 py-20 md:px-16 md:py-28 lg:px-20"
    >
      <div className="relative mx-auto flex min-h-[calc(70vh-10rem)] flex-col justify-end md:min-h-[calc(70vh-14rem)] lg:min-h-[50vh] lg:justify-center">
        <motion.div
          className="mb-10 flex flex-col items-start gap-2 lg:absolute lg:right-8 lg:top-0 lg:mb-0 lg:items-end xl:right-20"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {BADGES.map((badge, index) => (
            <span
              key={badge.label}
              className={`inline-block rounded-md bg-red px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-[0_4px_16px_rgb(24_24_24_/_18%)] md:text-sm ${badge.className}`}
              style={{
                marginLeft: index === 1 ? "1.25rem" : index === 2 ? "0.5rem" : undefined,
              }}
            >
              {badge.label}
            </span>
          ))}
        </motion.div>

        <motion.blockquote
          className="max-w-[1200px] text-left text-[48px] font-bold leading-[0.95] tracking-[-0.03em] text-charcoal md:text-[72px] lg:text-[110px]"
          initial={reduce ? false : { opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{
            duration: 0.85,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {MANIFESTO_TEXT}
        </motion.blockquote>
      </div>
    </section>
  );
}
