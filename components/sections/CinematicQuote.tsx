"use client";

import { motion, useReducedMotion } from "framer-motion";

const BACKGROUND_IMAGE = "/images/bannerprotest2.jpg";

export function CinematicQuote() {
  const reduce = useReducedMotion();

  const fadeUp = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-5%" as const },
          transition: {
            duration: 0.55,
            delay,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        };

  return (
    <section
      aria-label="Festival quote"
      className="relative min-h-screen w-full overflow-hidden"
    >
      <div
        className="absolute inset-0 scale-110 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-8">
        <motion.blockquote
          className="max-w-[900px] text-center text-3xl font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-6xl"
          {...fadeUp()}
        >
          <span className="block">A film does not</span>
          <span className="block">make demands of authority.</span>
          <span className="block">It makes demands</span>
          <span className="block">of an audience.</span>
        </motion.blockquote>
      </div>
    </section>
  );
}
