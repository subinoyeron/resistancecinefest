import { finalCta } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn, Float } from "@/components/ui/FadeIn";
import { Blob } from "@/components/ui/SectionShell";

export function FinalCta() {
  return (
    <section id="register" className="relative px-4 py-8 lg:px-8">
      <Container size="narrow">
        <FadeIn>
          <div className="section-chunk relative overflow-hidden bg-gradient-to-br from-orange via-orange to-red p-12 text-center text-white lg:p-20">
            <Blob color="yellow" className="left-0 top-0 h-64 w-64 opacity-50" />
            <Blob color="red" className="right-0 bottom-0 h-72 w-72 opacity-40" />

            <Float duration={5} distance={10} className="relative z-10">
              <h2 className="type-section text-white">{finalCta.headline}</h2>
            </Float>

            <p className="type-body relative z-10 mx-auto mt-6 max-w-xl text-white/90">
              {finalCta.sub}
            </p>

            <div className="relative z-10 mt-12">
              <Button
                href="#register"
                className="!bg-white !text-charcoal hover:!bg-cream"
              >
                {finalCta.button}
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
