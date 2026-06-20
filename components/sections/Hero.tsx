"use client";

import { motion, useReducedMotion } from "framer-motion";

const HERO_TAGLINE =
  "Join us for films, conversations, and artivism centering resistance, memory, and justice.";

const VIDEO_SRC = "/resistancevideoheader.mp4";
const LOGO_SRC = "/logo/Cinema Fest Logo.svg";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative h-screen w-full overflow-hidden"
      aria-label="Resistance Cinema Fest"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover [filter:brightness(0.85)_contrast(1.075)_saturate(0.95)]"
          aria-hidden
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.4), rgba(0,0,0,0.475))",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 35%, rgba(0,0,0,0.175) 100%)",
          }}
          aria-hidden
        />
      </motion.div>

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <motion.img
          src={LOGO_SRC}
          alt="Resistance Cinema Fest"
          className="h-auto w-[420px] max-w-[calc(100vw-3rem)] object-contain brightness-0 invert md:w-[560px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: reduce ? 0 : [0, -10, 0],
          }}
          transition={{
            opacity: { duration: 0.9, ease: "easeOut" },
            scale: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
            y: reduce
              ? undefined
              : {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.9,
                },
          }}
        />
      </div>

      <motion.p
        className="absolute bottom-16 left-1/2 z-10 max-w-[700px] -translate-x-1/2 px-6 text-center text-xl font-medium leading-relaxed text-white md:text-2xl"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.55, ease: "easeOut" }}
      >
        {HERO_TAGLINE}
      </motion.p>
    </section>
  );
}
