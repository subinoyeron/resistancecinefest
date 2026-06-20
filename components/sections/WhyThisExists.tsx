import { whyCards } from "@/lib/content";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Stagger, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Blob, SectionShell } from "@/components/ui/SectionShell";

const accentDots = {
  orange: "bg-orange",
  red: "bg-red",
  teal: "bg-teal",
  yellow: "bg-yellow",
} as const;

export function WhyThisExists() {
  return (
    <SectionShell id="why" variant="orange">
      <Blob color="yellow" className="-right-16 top-0 h-80 w-80" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Why this exists"
          title="Four pillars of the festival"
          description="A human rights film festival built on witness, documentation, resistance, and justice."
        />

        <Stagger className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {whyCards.map((card, i) => (
            <StaggerItem key={card.title}>
              <Card tilt tiltIndex={i} className="relative h-full pt-12">
                <span
                  className={`absolute -top-4 left-8 flex h-14 w-14 items-center justify-center rounded-[20px] ${accentDots[card.color]} text-2xl text-white shadow-lg`}
                  aria-hidden
                >
                  {["👁", "📽", "✊", "⚖"][i]}
                </span>
                <h3 className="type-card-title text-charcoal">{card.title}</h3>
                <p className="type-body mt-4 text-charcoal/70">{card.description}</p>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </SectionShell>
  );
}
