"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const FEATURED_FILMS = [
  {
    title: "Nostalgia for the Light",
    poster: "/images/film_posters/nostalgiafilmposter.jpg",
    year: "2010",
    runtime: "90 min",
    director: "Patricio Guzmán",
    country: "Chile",
    theme:
      "Memory, disappearance, and the search for truth in the Atacama Desert.",
  },
  {
    title: "A Taxi Driver",
    poster: "/images/film_posters/taxidriverfilmposter.jpg",
    year: "2017",
    runtime: "137 min",
    director: "Jang Hoon",
    country: "South Korea",
    theme:
      "A civilian’s accidental witness to the Gwangju Uprising and state violence.",
  },
  {
    title: "The Trial of the Chicago 7",
    poster: "/images/film_posters/chicagotrialposter.jpg",
    year: "2020",
    runtime: "130 min",
    director: "Aaron Sorkin",
    country: "United States",
    theme:
      "Protest, criminalisation, and political trials in democratic systems.",
  },
  {
    title: "The Act of Killing",
    poster: "/images/film_posters/actofkilling poster.jpg",
    year: "2012",
    runtime: "122 min",
    director: "Joshua Oppenheimer",
    country: "Indonesia / Denmark",
    theme: "Perpetrators of mass violence confront their own histories.",
  },
  {
    title: "When the Day Comes",
    poster: "/images/film_posters/whenthedaycomes.jpg",
    year: "2017",
    runtime: "129 min",
    director: "Jang Joon-hwan",
    country: "South Korea",
    theme: "State torture, resistance, and the democratic struggle of 1987.",
  },
  {
    title: "Muktir Gaan",
    poster: "/images/film_posters/muktirgan.jpg",
    year: "1995",
    runtime: "70 min",
    director: "Tareque Masud & Catherine Masud",
    country: "Bangladesh",
    theme: "Liberation, collective memory, and revolutionary cultural resistance.",
  },
] as const;

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
      className="w-full bg-cream px-8 py-24 md:px-16 md:py-32 lg:px-20"
    >
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
            className={`overflow-hidden rounded-[28px] border border-black/12 bg-white shadow-[0_8px_32px_rgb(24_24_24_/_6%)] ${cardHover}`}
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

              <dl className="mt-3 space-y-1">
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm uppercase tracking-wide text-charcoal/70">
                  <span>{film.year}</span>
                  <span aria-hidden>·</span>
                  <span>{film.runtime}</span>
                </div>
                <div className="text-sm uppercase tracking-wide text-charcoal/70">
                  <span className="sr-only">Director: </span>
                  {film.director}
                </div>
                <div className="text-sm uppercase tracking-wide text-charcoal/70">
                  <span className="sr-only">Country: </span>
                  {film.country}
                </div>
              </dl>

              <p className="mt-4 text-lg leading-tight text-charcoal">
                {film.theme}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
