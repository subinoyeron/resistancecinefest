"use client";

import { timeline } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Blob, SectionShell } from "@/components/ui/SectionShell";

const tilts = ["-rotate-2", "rotate-2", "-rotate-1", "rotate-3", "-rotate-3", "rotate-1", "-rotate-2"];

export function StoryTimeline() {
  return (
    <SectionShell id="timeline" variant="white">
      <Blob color="teal" className="-left-24 bottom-0 h-72 w-72" />

      <Container size="wide" className="relative">
        <FadeIn>
          <SectionHeading
            eyebrow="Story timeline"
            title="From uprising to justice"
            description="A playful journey through memory, truth, and collective resistance."
            align="center"
          />
        </FadeIn>

        <div className="relative mx-auto mt-20 max-w-4xl">
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            viewBox="0 0 800 1400"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M400 0 C 520 120, 280 240, 400 360 S 520 600, 400 720 S 280 960, 400 1080 S 520 1320, 400 1400"
              fill="none"
              stroke="#C96A3D"
              strokeWidth="4"
              strokeDasharray="12 10"
              opacity="0.35"
            />
          </svg>

          <Stagger className="relative space-y-10 lg:space-y-14" stagger={0.12}>
            {timeline.map((item, i) => (
              <StaggerItem key={item.label}>
                <div
                  className={`flex ${i % 2 === 0 ? "justify-start lg:pr-[45%]" : "justify-end lg:pl-[45%]"}`}
                >
                  <article
                    className={`card-base card-hover relative max-w-md p-8 lg:p-10 ${tilts[i % tilts.length]}`}
                  >
                    <span className="absolute -top-5 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-orange text-lg font-bold text-white shadow-lg">
                      {i + 1}
                    </span>
                    <h3 className="type-card-title mt-4 text-orange">{item.label}</h3>
                    <p className="type-body mt-3 text-charcoal/70">{item.text}</p>
                  </article>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </SectionShell>
  );
}
