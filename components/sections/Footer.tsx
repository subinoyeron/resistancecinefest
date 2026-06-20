import { brand, footer } from "@/lib/content";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="px-4 pb-12 pt-4 lg:px-8">
      <Container>
        <div className="section-chunk bg-charcoal p-10 text-cream lg:p-14">
          <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="font-display text-3xl font-semibold">{brand.shortName}</p>
              <p className="type-body mt-4 max-w-sm text-cream/70">
                {footer.tagline}
              </p>
            </div>

            <nav aria-label="Footer" className="flex flex-wrap gap-8">
              {footer.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-lg font-medium text-cream/65 transition-colors hover:text-yellow"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <p className="mt-12 text-base text-cream/45">{footer.legal}</p>
        </div>
      </Container>
    </footer>
  );
}
