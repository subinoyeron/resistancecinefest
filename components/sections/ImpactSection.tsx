import { impact } from "@/lib/content";
import { IconCard } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Stagger, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Blob, SectionShell } from "@/components/ui/SectionShell";

export function ImpactSection() {
  return (
    <SectionShell id="impact" variant="cream">
      <Blob color="red" className="left-0 top-0 h-64 w-64 opacity-30" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Impact"
          title="Why it matters"
          description="Six outcomes we work toward — from awareness to justice."
          align="center"
        />

        <Stagger
          className="mt-16 flex flex-wrap justify-center gap-8"
          stagger={0.08}
        >
          {impact.map((item, i) => (
            <StaggerItem
              key={item.title}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33%-1rem)]"
            >
              <IconCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                tiltIndex={i}
                className="h-full min-h-[14rem]"
              />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </SectionShell>
  );
}
