"use client";

import { motion, useReducedMotion } from "framer-motion";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";

const MANIFESTO_TEXT =
  "Join us for films, conversations, and artivism centering resistance, memory, and justice.";

export function Manifesto() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-label="Festival manifesto"
      className="relative w-full min-h-[70vh] overflow-hidden border-t border-black/25 bg-[#F1231B] px-8 py-20 md:px-16 md:py-28 lg:px-20"
    >
      <NoiseOverlay />

      <div className="relative z-10 mx-auto flex min-h-[calc(70vh-10rem)] flex-col justify-end md:min-h-[calc(70vh-14rem)] lg:min-h-[50vh] lg:justify-center">
        <motion.blockquote
          className="max-w-[1100px] text-left text-[38px] font-bold leading-[0.95] tracking-[-0.03em] text-[#FFFFFF] md:text-[58px] lg:text-[78px]"
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
