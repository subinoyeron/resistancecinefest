import { participants } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Stagger, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Blob, SectionShell } from "@/components/ui/SectionShell";

const tilts = ["-rotate-2", "rotate-2", "-rotate-1", "rotate-3", "-rotate-2", "rotate-1"];

export function Participants() {
  return (
    <SectionShell id="participants" variant="orange">
      <Blob color="teal" className="right-0 bottom-0 h-72 w-72" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Participants"
          title="Who gathers here"
          description="Victims, survivors, filmmakers, lawyers, journalists, and activists — a public built on shared witness."
          align="center"
        />

        <Stagger
          className="mt-16 flex flex-wrap justify-center gap-8"
          stagger={0.08}
        >
          {participants.map((person, i) => (
            <StaggerItem
              key={person.role}
              className="w-[calc(50%-1rem)] sm:w-[calc(33%-1rem)] lg:w-[calc(16%-1rem)]"
            >
              <article
                className={`card-base card-hover overflow-hidden p-0 text-center ${tilts[i]}`}
              >
                <div
                  className="aspect-square bg-cover bg-center"
                  style={{ backgroundImage: `url('${person.image}')` }}
                  role="img"
                  aria-label={`Representing ${person.role}`}
                />
                <p className="p-5 text-lg font-semibold text-charcoal">
                  {person.role}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </SectionShell>
  );
}
