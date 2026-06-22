"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";

const FEATURED_FILMS = [
  {
    title: "The Trial of the Chicago 7",
    poster: "/images/film_posters/chicagotrialposter.jpg",
    screeningTime: "11:00 AM – 1:10 PM",
    year: "2020",
    runtime: "130 min",
    director: "Aaron Sorkin",
    country: "USA",
  },
  {
    title: "Nostalgia for the Light",
    poster: "/images/film_posters/nostalgiafilmposter.jpg",
    screeningTime: "2:30 PM – 4:00 PM",
    year: "2010",
    runtime: "90 min",
    director: "Patricio Guzmán",
    country: "Chile",
  },
  {
    title: "Reborn Eyes: Story of a Movement in Resistance",
    poster: "/images/film_posters/Reborn Eyesposter.jpg",
    screeningTime: "4:00 PM – 4:35 PM",
    year: "2023",
    runtime: "35 min",
    director: "Lucía Guerrero",
    country: "Colombia",
  },
  {
    title: "Baba Taifa: Hip Hop as Resistance in Kenya — The Story of Bahati Hezborn",
    poster: "/images/film_posters/Hip Hop as Resistance in Kenya poster.jpg",
    screeningTime: "4:35 PM – 4:45 PM",
    year: "",
    runtime: "10 min",
    director: "Annasofie Flamand & Calvin Onvango",
    country: "Kenya",
  },
  {
    title: "Eyes That Speak",
    poster: "/images/film_posters/eyesthatspeakposter.jpg",
    screeningTime: "4:45 PM – 5:01 PM",
    year: "",
    runtime: "16 min",
    director: "Mosfiqur Rahman Johan",
    country: "Bangladesh",
  },
  {
    title: "A Taxi Driver",
    poster: "/images/film_posters/taxidriverfilmposter.jpg",
    screeningTime: "5:01 PM – 7:18 PM",
    year: "2017",
    runtime: "137 min",
    director: "Jang Hoon",
    country: "South Korea",
  },
  {
    title: "No Fire Zone: The Killing Fields of Sri Lanka",
    poster: "/images/film_posters/nofirezoneposter.jpg",
    screeningTime: "7:18 PM – 8:51 PM",
    year: "2013",
    runtime: "93 min",
    director: "Callum Macrae",
    country: "Sri Lanka / UK",
  },
];

const cardHover =
  "transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_48px_rgb(241_35_27_/_20%)]";

export function FeaturedFilmsGrid() {
  const reduce = useReducedMotion();

  const fadeUp = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
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
      id="featured-films"
      aria-labelledby="featured-films-heading"
      className="relative w-full overflow-hidden bg-cream px-8 py-24 md:px-16 md:py-32 lg:px-20"
    >
      <NoiseOverlay />

      <div className="relative z-10">
      <motion.div className="mb-12 md:mb-14" {...fadeUp()}>
        <h2
          id="featured-films-heading"
          className="text-5xl font-bold text-charcoal md:text-6xl"
        >
          Featured Films
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-snug text-charcoal/75 md:text-xl">
          Films that document memory, resistance, justice, and political violence
          across histories and geographies.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {FEATURED_FILMS.map((film, index) => (
          <motion.article
            key={film.title}
            className={`overflow-hidden rounded-[28px] border border-black/12 bg-white shadow-[0_8px_32px_rgb(24_24_24_/_6%)] ${cardHover} ${
              index === FEATURED_FILMS.length - 1 &&
              FEATURED_FILMS.length % 3 === 1
                ? "lg:col-start-2"
                : ""
            }`}
            {...fadeUp(0.06 + index * 0.04)}
          >
            <div className="relative h-[520px] w-full">
              <Image
                src={film.poster}
                alt={`Poster for ${film.title}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            <div className="p-6">
              <h3 className="text-3xl font-bold text-charcoal">{film.title}</h3>

              <div className="mt-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-charcoal/55">
                  Screening
                </p>
                <p className="text-sm font-bold text-charcoal">
                  {film.screeningTime}
                </p>
              </div>

              <dl className="mt-2 space-y-1">
                {(film.year || film.runtime) && (
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm uppercase tracking-wide text-charcoal/70">
                    {film.year ? <span>{film.year}</span> : null}
                    {film.year && film.runtime ? (
                      <span aria-hidden>·</span>
                    ) : null}
                    {film.runtime ? <span>{film.runtime}</span> : null}
                  </div>
                )}
                <div className="text-sm uppercase tracking-wide text-charcoal/70">
                  <span className="sr-only">Director: </span>
                  {film.director}
                </div>
                <div className="text-sm uppercase tracking-wide text-charcoal/70">
                  <span className="sr-only">Country: </span>
                  {film.country}
                </div>
              </dl>
            </div>
          </motion.article>
        ))}
      </div>
      </div>
    </section>
  );
}
