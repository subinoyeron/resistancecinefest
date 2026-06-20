"use client";

import { motion, useReducedMotion } from "framer-motion";

const TICKET_URL =
  "https://tickify.live/event/resistance-cinema-fest-2nd-edition/";

const VIDEO_SRC = "/resistancevideoheader.mp4";
const LOGO_SRC = "/logo/Cinema Fest Logo.svg";

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M3 10L10 3M10 3H4.5M10 3V8.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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

      <motion.a
        href={TICKET_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group absolute bottom-16 left-1/2 z-10 inline-flex w-auto -translate-x-1/2 items-center gap-4 rounded-full bg-white px-6 py-4 font-bold text-[#181818] transition-[transform,box-shadow,background-color] duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#F7F7F7] hover:shadow-[0_16px_40px_rgb(24_24_24_/_25%)]"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.55, ease: "easeOut" }}
      >
        <span className="text-lg">Get the Ticket</span>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F1231B] text-white transition-transform duration-300 ease-out group-hover:scale-105">
          <ArrowIcon />
        </span>
      </motion.a>
    </section>
  );
}
