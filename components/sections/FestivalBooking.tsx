"use client";

import { motion, useReducedMotion } from "framer-motion";

const TICKET_URL =
  "https://tickify.live/event/resistance-cinema-fest-2nd-edition/";

const BACKGROUND_IMAGE = "/images/132A3066.jpg";

function LocationIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M9 16.5C9 16.5 14.25 11.55 14.25 7.875C14.25 4.768 11.757 2.25 9 2.25C6.243 2.25 3.75 4.768 3.75 7.875C3.75 11.55 9 16.5 9 16.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 9.375C10.0355 9.375 10.875 8.53553 10.875 7.5C10.875 6.46447 10.0355 5.625 9 5.625C7.96447 5.625 7.125 6.46447 7.125 7.5C7.125 8.53553 7.96447 9.375 9 9.375Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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

export function FestivalBooking() {
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
      id="join"
      aria-labelledby="join-festival-heading"
      className="relative min-h-screen w-full"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/35" aria-hidden />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-12">
        <motion.div
          className="flex w-[460px] max-w-[90vw] flex-col gap-[2px]"
          {...fadeUp()}
        >
            <div className="rounded-[20px] bg-white px-5 py-5 sm:px-6 sm:py-6">
              <h2
                id="join-festival-heading"
                className="text-[48px] font-bold leading-[1.05] tracking-[-0.02em] text-charcoal"
              >
                Join the Festival
              </h2>
            </div>

            <div className="rounded-[20px] bg-white px-5 py-4 sm:px-6 sm:py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-charcoal/50">
                Date &amp; Time
              </p>
              <p className="mt-1.5 text-2xl font-bold leading-tight text-charcoal">
                26th June 2026
              </p>
              <p className="text-xl font-bold leading-tight text-charcoal">
                2:30 PM to 8:00 PM
              </p>
            </div>

            <div className="rounded-[20px] bg-white px-5 py-4 sm:px-6 sm:py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-charcoal/50">
                Venue
              </p>
              <p className="mt-1.5 flex items-center gap-2 text-xl font-bold text-charcoal">
                <LocationIcon />
                TSC, Dhaka University
              </p>
            </div>

            <div className="rounded-[20px] bg-white px-5 py-4 sm:px-6 sm:py-5">
              <p className="text-[17px] leading-[1.35] text-charcoal/85">
                Resistance Cinema Fest 2nd Edition brings together films,
                conversations, and artivism on torture prevention, memory, and
                justice.
              </p>
            </div>

            <motion.a
              href={TICKET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[72px] items-center justify-between rounded-full bg-red px-6 font-bold text-white transition-[transform,box-shadow,background-color] duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#d11e17] hover:shadow-[0_16px_40px_rgb(241_35_27_/_30%)]"
              {...fadeUp(0.12)}
            >
              <span className="text-lg">Get Tickets</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-charcoal">
                <ArrowIcon />
              </span>
            </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
