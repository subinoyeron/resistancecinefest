"use client";

import { motion, useReducedMotion } from "framer-motion";

const TEXT_CARDS = [
  {
    number: "1",
    title: "Witness",
    text: "Film and artivism offer something invaluable: a form of bearing witness that is harder to shut down. They create space for difficult truths that formal processes often cannot hold.",
    bg: "bg-cream",
  },
  {
    number: "2",
    title: "Solidarity",
    text: "Stories of struggle travel across borders. They remind communities they are not alone — that others have resisted, survived, and fought for justice.",
    bg: "bg-soft-gray",
  },
  {
    number: "3",
    title: "Intervention",
    text: "Resistance Cinema Fest is not simply a screening programme. It is a structured public intervention for dialogue, memory, and accountability.",
    bg: "bg-orange text-white",
  },
] as const;

const QUOTE =
  "A film does not make demands of authority. It makes demands of an audience.";

const cardHover =
  "transition-transform duration-300 ease-out hover:-translate-y-1";

function CardHeader({ number }: { number: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red text-sm font-bold text-white"
        aria-hidden
      >
        {number}
      </span>
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-charcoal text-cream"
        aria-hidden
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 10L10 3M10 3H4.5M10 3V8.5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  );
}

export function WhyFilmWhyNow() {
  const reduce = useReducedMotion();

  const fadeUp = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-5%" as const },
          transition: {
            duration: 0.5,
            delay,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        };

  return (
    <section
      id="why-film"
      aria-labelledby="why-film-heading"
      className="w-full bg-cream py-16 md:py-24"
    >
      <div className="mx-auto max-w-[95vw]">
        <motion.h2
          id="why-film-heading"
          className="mb-20 text-5xl font-bold text-charcoal md:mb-32 md:text-7xl"
          {...fadeUp()}
        >
          Why Film? Why Now?
        </motion.h2>

        <div className="grid grid-cols-1 gap-1 md:grid-cols-3">
          {TEXT_CARDS.map((card, index) => (
            <motion.article
              key={card.title}
              className={`flex min-h-[200px] flex-col rounded-[20px] p-4 md:min-h-[220px] md:p-5 ${card.bg} ${cardHover}`}
              {...fadeUp(0.04 + index * 0.04)}
            >
              <CardHeader number={card.number} />
              <h3
                className={`mt-3 text-[32px] font-bold leading-none ${
                  card.bg.includes("text-white") ? "text-white" : "text-charcoal"
                }`}
              >
                {card.title}
              </h3>
              <p
                className={`mt-2 text-[18px] leading-[1.3] ${
                  card.bg.includes("text-white") ? "text-white/90" : "text-charcoal"
                }`}
              >
                {card.text}
              </p>
            </motion.article>
          ))}

          <motion.div
            className={`relative min-h-[380px] overflow-hidden rounded-[20px] md:min-h-[440px] ${cardHover}`}
            {...fadeUp(0.16)}
          >
            <div
              className="absolute inset-0 bg-gradient-to-br from-charcoal via-red to-orange"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"
              aria-hidden
            />
            <span className="sr-only">Protest archive image placeholder</span>
          </motion.div>

          <motion.blockquote
            className={`flex min-h-[380px] items-center justify-center overflow-hidden rounded-[20px] bg-red px-4 md:min-h-[440px] md:px-6 ${cardHover}`}
            {...fadeUp(0.2)}
          >
            <p className="text-center text-[28px] font-bold leading-[1.05] tracking-[-0.02em] text-cream md:text-[36px] lg:text-[42px]">
              {QUOTE}
            </p>
          </motion.blockquote>

          <motion.div
            className={`relative min-h-[380px] overflow-hidden rounded-[20px] bg-cream md:min-h-[440px] ${cardHover}`}
            {...fadeUp(0.24)}
          >
            <div
              className="absolute inset-0 bg-gradient-to-br from-orange/90 via-red to-charcoal/70"
              aria-hidden
            />
            <div
              className="absolute -left-4 top-6 h-[45%] w-[55%] rotate-[-4deg] bg-cream/20"
              aria-hidden
            />
            <div
              className="absolute bottom-8 right-2 h-[38%] w-[48%] rotate-[6deg] bg-yellow/35"
              aria-hidden
            />
            <div
              className="absolute left-[18%] top-[38%] h-[32%] w-[42%] rotate-[2deg] bg-charcoal/25"
              aria-hidden
            />
            <span className="sr-only">
              Memory, resistance, and justice collage placeholder
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
