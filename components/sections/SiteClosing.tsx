const PARTNERS = [
  "Activate Rights",
  "Omega Research Foundation",
  "UNDP Bangladesh",
  "WITNESS",
  "Bangladesh Protest Archive",
] as const;

const MIDDLE_TEXT =
  "Resistance Cinema Fest is a creative intervention on torture prevention, transitional justice, and solidarity — bringing together films, conversations, and artivism to build collective memory and imagine accountability.";

export function SiteClosing() {
  return (
    <section
      id="closing"
      aria-labelledby="partners-heading"
      className="w-full bg-cream px-8 py-24 md:px-16 md:py-28 lg:px-20"
    >
      <div className="mb-20">
        <h2
          id="partners-heading"
          className="text-5xl font-bold text-charcoal md:text-7xl"
        >
          In solidarity with
        </h2>
        <p className="mt-4 max-w-[900px] text-xl text-charcoal/70">
          Resistance Cinema Fest is made possible through collaboration, support,
          and collective commitment to memory, justice, and accountability.
        </p>
      </div>

      <ul className="grid grid-cols-2 items-center justify-items-center gap-12 md:grid-cols-3 lg:grid-cols-5">
        {PARTNERS.map((partner) => (
          <li key={partner}>
            <div
              className="flex h-20 max-h-[80px] w-full max-w-[180px] items-center justify-center grayscale transition-[filter,color] duration-300 hover:grayscale-0"
              aria-label={`${partner} logo placeholder`}
            >
              <span className="text-center text-sm font-semibold uppercase tracking-wide text-charcoal/60 transition-colors duration-300 hover:text-red md:text-base">
                {partner}
              </span>
            </div>
          </li>
        ))}
      </ul>

      <hr className="my-16 border-t border-black/15" />

      <p className="mx-auto max-w-[900px] text-center text-lg leading-relaxed text-charcoal/75 md:text-xl">
        {MIDDLE_TEXT}
      </p>

      <hr className="my-16 border-t border-black/15" />

      <footer className="grid grid-cols-1 gap-10 text-sm text-charcoal/70 md:grid-cols-3 md:gap-8 md:text-base">
        <div className="space-y-1 md:text-left">
          <p>26 June 2026</p>
          <p>2:30 PM – 8:00 PM</p>
          <p>TSC, Dhaka University</p>
        </div>

        <div className="space-y-1 text-center">
          <p>© 2026 Resistance Cinema Fest</p>
          <p>Organised by Activate Rights</p>
        </div>

        <nav
          aria-label="Social and contact links"
          className="flex flex-col gap-2 md:items-end md:text-right"
        >
          <a
            href="#"
            className="text-charcoal transition-colors hover:text-red hover:underline"
          >
            Instagram
          </a>
          <a
            href="#"
            className="text-charcoal transition-colors hover:text-red hover:underline"
          >
            Facebook
          </a>
          <a
            href="mailto:shoeb@activaterights.org"
            className="text-charcoal transition-colors hover:text-red hover:underline"
          >
            Email
          </a>
          <a
            href="mailto:shoeb@activaterights.org"
            className="text-charcoal transition-colors hover:text-red hover:underline"
          >
            shoeb@activaterights.org
          </a>
        </nav>
      </footer>
    </section>
  );
}
