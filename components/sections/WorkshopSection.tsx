import { workshop } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn, Float } from "@/components/ui/FadeIn";
import { Blob, SectionShell } from "@/components/ui/SectionShell";

export function WorkshopSection() {
  return (
    <SectionShell id="workshop" variant="charcoal">
      <Blob color="orange" className="right-0 top-0 h-96 w-96 opacity-40" />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <FadeIn>
            <p className="mb-4 text-base font-semibold uppercase tracking-[0.2em] text-yellow">
              Workshop
            </p>
            <h2 className="type-section text-cream">{workshop.title}</h2>
            <p className="type-body mt-6 text-cream/85">{workshop.description}</p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <Float duration={6} distance={10}>
              <div className="card-base rotate-1 bg-white/10 p-10 backdrop-blur-md lg:p-12">
                <p className="mb-6 text-base font-semibold uppercase tracking-widest text-yellow">
                  Topics
                </p>
                <ul className="space-y-5">
                  {workshop.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-start gap-4 text-cream"
                    >
                      <span
                        className="mt-2 h-3 w-3 shrink-0 rounded-full bg-orange"
                        aria-hidden
                      />
                      <span className="type-body font-medium">{topic}</span>
                    </li>
                  ))}
                </ul>
                <Button href="#register" className="mt-10">
                  {workshop.cta}
                </Button>
              </div>
            </Float>
          </FadeIn>
        </div>
      </Container>
    </SectionShell>
  );
}
