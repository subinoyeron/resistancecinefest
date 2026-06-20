import { partners } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Stagger, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Blob, SectionShell } from "@/components/ui/SectionShell";

const tilts = ["-rotate-1", "rotate-2", "-rotate-2"];

export function PartnersSection() {
  return (
    <SectionShell id="partners" variant="white">
      <Blob color="yellow" className="right-0 top-1/2 h-72 w-72 -translate-y-1/2" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Partners"
          title="Standing with us"
          description="Organisations that treat memory as practice — not slogan."
          align="center"
        />

        <Stagger
          className="mt-16 flex flex-wrap justify-center gap-10"
          stagger={0.12}
        >
          {partners.map((partner, i) => (
            <StaggerItem key={partner.name} className="w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(33%-1.25rem)]">
              <div
                className={`card-base card-hover flex min-h-[12rem] flex-col items-center justify-center gap-5 p-10 text-center ${tilts[i]}`}
              >
                <span
                  className="flex h-20 w-20 rotate-3 items-center justify-center rounded-[28px] bg-teal/15 font-display text-3xl font-bold text-teal"
                  aria-hidden
                >
                  {partner.logo}
                </span>
                <p className="type-body font-semibold text-charcoal">
                  {partner.name}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </SectionShell>
  );
}
