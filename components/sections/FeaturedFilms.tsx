"use client";

import { films } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { DragScroll } from "@/components/ui/DragScroll";
import { FadeIn, HoverBounce } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Blob, SectionShell } from "@/components/ui/SectionShell";
import { motion, useReducedMotion } from "framer-motion";

export function FeaturedFilms() {
  const reduce = useReducedMotion();

  return (
    <SectionShell id="films" variant="yellow">
      <Blob color="orange" className="left-0 top-0 h-80 w-80" />

      <Container size="wide" className="relative">
        <FadeIn>
          <SectionHeading
            eyebrow="Featured films"
            title="On the programme"
            description="Documentary and essay films selected for evidentiary rigour and ethical witness."
          />
        </FadeIn>

        <FadeIn delay={0.15} className="mt-16 -mx-4 lg:-mx-8">
          <DragScroll className="px-4 lg:px-8">
            {films.map((film, i) => (
              <HoverBounce key={film.title}>
                <motion.article
                  className="card-base w-[min(88vw,22rem)] overflow-hidden lg:w-[20rem]"
                  whileHover={reduce ? undefined : { scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ rotate: i % 2 === 0 ? -1 : 1 }}
                >
                  <div
                    className="aspect-[2/3] bg-cover bg-center"
                    style={{ backgroundImage: `url('${film.poster}')` }}
                    role="img"
                    aria-label={`Poster for ${film.title}`}
                  />
                  <div className="p-8">
                    <p className="text-sm font-semibold uppercase tracking-widest text-teal">
                      {film.theme}
                    </p>
                    <h3 className="type-card-title mt-3">{film.title}</h3>
                    <dl className="type-body mt-4 space-y-2 text-charcoal/65">
                      <div className="flex justify-between gap-4">
                        <dt>Country</dt>
                        <dd className="font-semibold text-charcoal">{film.country}</dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt>Runtime</dt>
                        <dd className="font-semibold text-charcoal">{film.runtime}</dd>
                      </div>
                    </dl>
                  </div>
                </motion.article>
              </HoverBounce>
            ))}
          </DragScroll>
        </FadeIn>
      </Container>
    </SectionShell>
  );
}
