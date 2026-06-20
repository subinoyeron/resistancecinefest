"use client";

import { archive } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { FadeIn, HoverBounce } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Blob, SectionShell } from "@/components/ui/SectionShell";

const collageLayout = [
  { className: "left-0 top-0 w-[55%] rotate-[-4deg] z-10", aspect: "aspect-[4/5]" },
  { className: "right-0 top-8 w-[48%] rotate-[3deg] z-20", aspect: "aspect-square" },
  { className: "left-[8%] top-[42%] w-[42%] rotate-[2deg] z-30", aspect: "aspect-[3/4]" },
  { className: "right-[5%] bottom-0 w-[50%] rotate-[-2deg] z-40", aspect: "aspect-[5/4]" },
];

export function ArchiveOfMemory() {
  return (
    <SectionShell id="archive" variant="white">
      <Blob color="yellow" className="left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2" />

      <Container className="relative">
        <FadeIn>
          <SectionHeading
            eyebrow="Archive of memory"
            title="What we preserve together"
            description="Survivor testimonies, protest graffiti, documentary stills, and visual evidence."
            align="center"
          />
        </FadeIn>

        <div className="relative mx-auto mt-20 min-h-[36rem] max-w-4xl lg:min-h-[42rem]">
          {archive.map((item, i) => {
            const layout = collageLayout[i];
            return (
              <HoverBounce
                key={item.label}
                className={`absolute ${layout.className}`}
              >
                <figure className="card-base overflow-hidden p-0 shadow-[0_20px_60px_rgb(30_30_30_/_15%)]">
                  <div
                    className={`${layout.aspect} bg-cover bg-center`}
                    style={{ backgroundImage: `url('${item.image}')` }}
                    role="img"
                    aria-label={item.label}
                  />
                  <figcaption className="p-5 lg:p-6">
                    <p className="type-card-title text-base">{item.label}</p>
                  </figcaption>
                </figure>
              </HoverBounce>
            );
          })}
        </div>
      </Container>
    </SectionShell>
  );
}
