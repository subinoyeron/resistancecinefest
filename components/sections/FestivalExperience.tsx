import { experience } from "@/lib/content";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Stagger, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Blob, SectionShell } from "@/components/ui/SectionShell";

export function FestivalExperience() {
  return (
    <SectionShell id="experience" variant="cream">
      <Blob color="orange" className="right-0 top-1/2 h-64 w-64 -translate-y-1/2" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Festival experience"
          title="What you'll find here"
          description="Five ways to engage — from screenings to solidarity."
        />

        <Stagger
          className="mt-16 flex flex-wrap justify-center gap-8"
          stagger={0.1}
        >
          {experience.map((item, i) => (
            <StaggerItem
              key={item.title}
              className={`w-full sm:w-[calc(50%-1rem)] ${i === 4 ? "lg:w-[calc(33%-1rem)]" : "lg:w-[calc(33%-1rem)]"}`}
            >
              <Card tilt tiltIndex={i} className="flex h-full min-h-[16rem] flex-col gap-5">
                <span className="flex h-16 w-16 rotate-6 items-center justify-center rounded-[24px] bg-orange/15 text-4xl">
                  {item.icon}
                </span>
                <h3 className="type-card-title">{item.title}</h3>
                <p className="type-body text-charcoal/70">{item.description}</p>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </SectionShell>
  );
}
