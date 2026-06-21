import Image from "next/image";
import { type ReactNode } from "react";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";

const MIDDLE_TEXT =
  "Resistance Cinema Fest is a creative intervention on torture prevention, transitional justice, and solidarity — bringing together films, conversations, and artivism to build collective memory and imagine accountability.";

const BIOSCOPE_EMBLEM_SRC = "/images/bioscopecinefest.webp";

const PARTNER_LOGO_BASE = "/partnerlogos";

const PARTNER_LOGO_OPTICAL: Record<string, string> = {
  // Whitespace-heavy wordmark — boost presence without cropping.
  "activaterightslogo.svg": "max-h-[86px] max-w-[220px] scale-[1.12]",
  // Circle mark reads heavier at equal bounds — keep restrained.
  "omega_logo_dark.svg": "max-h-[76px] max-w-[192px] scale-[1.0]",
  // Dense crest + heavy type — pull back so it does not dominate.
  "dufs_logo.webp": "max-h-[50px] max-w-[150px] scale-[0.86]",
  // Tall mark with subtitle — give the symbol more room.
  "irct_logo.svg": "max-h-[86px] max-w-[210px] scale-[1.06]",
  // Compact Bengali lockup — lift optical weight without crowding neighbors.
  "sapranlogo.svg": "max-h-[72px] max-w-[196px] scale-[1.02]",
  // Wide wave mark — balanced mid-weight.
  "Surgelogo.webp": "max-h-[72px] max-w-[198px]",
  // Ticketing hero, harmonized with the wall — slightly restrained.
  "tickifylogo.svg": "max-h-[92px] max-w-[228px]",
  // Icon + stacked type — moderate lift on the mark.
  "United Against Torture logo.webp": "max-h-[74px] max-w-[204px] scale-[1.05]",
  // Ultra-wide EU banner — full width, low height to match row weight.
  "EN_FundedbytheEU_RGB_POS copy.webp": "max-h-[54px] max-w-[220px] scale-[1.04]",
};

function partnerLogoSrc(filename: string): string {
  return `${PARTNER_LOGO_BASE}/${filename.replace(/ /g, "%20")}`;
}

function PartnerLogoItem({
  name,
  filename,
  variant = "default",
}: {
  name: string;
  filename: string;
  variant?: "default" | "large";
}) {
  const src = partnerLogoSrc(filename);
  const isLarge = variant === "large";
  const width = isLarge ? 260 : 220;
  const height = isLarge ? 110 : 90;
  const containerClassName = isLarge
    ? "flex h-[110px] w-[260px] items-center justify-center overflow-hidden"
    : "flex h-[90px] w-[220px] items-center justify-center overflow-hidden";
  const imageClassName = [
    "h-auto w-auto object-contain",
    PARTNER_LOGO_OPTICAL[filename] ?? "max-h-full max-w-full",
  ].join(" ");

  return (
    <div className={containerClassName}>
      {filename.endsWith(".svg") ? (
        <img
          src={src}
          alt={name}
          width={width}
          height={height}
          className={imageClassName}
        />
      ) : (
        <Image
          src={src}
          alt={name}
          width={width}
          height={height}
          className={imageClassName}
        />
      )}
    </div>
  );
}

function PartnerGroup({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-16 flex flex-col items-center text-center">
      <h3 className="mb-2 text-sm uppercase tracking-widest text-charcoal/60">
        {title}
      </h3>
      {children}
    </div>
  );
}

export function SiteClosing() {
  return (
    <section
      id="closing"
      aria-label="Partners and footer"
      className="relative w-full overflow-hidden bg-cream px-8 py-24 md:px-16 md:py-28 lg:px-20"
    >
      <NoiseOverlay />

      <div className="relative z-10 flex w-full items-center justify-center text-center">
        <div className="w-full max-w-[1100px]">
          <PartnerGroup title="Conveyed by">
            <ul className="flex flex-wrap items-center justify-center gap-12">
              <li>
                <PartnerLogoItem
                  name="Activate Rights"
                  filename="activaterightslogo.svg"
                />
              </li>
              <li>
                <PartnerLogoItem
                  name="Omega Research Foundation"
                  filename="omega_logo_dark.svg"
                />
              </li>
              <li>
                <PartnerLogoItem name="DUFS" filename="dufs_logo.webp" />
              </li>
            </ul>
          </PartnerGroup>

          <PartnerGroup title="In collaboration with">
            <ul className="flex flex-wrap items-center justify-center gap-12">
              <li>
                <PartnerLogoItem name="IRCT" filename="irct_logo.svg" />
              </li>
              <li>
                <PartnerLogoItem name="Sapran" filename="sapranlogo.svg" />
              </li>
              <li>
                <PartnerLogoItem
                  name="Surge Bangladesh"
                  filename="Surgelogo.webp"
                />
              </li>
            </ul>
          </PartnerGroup>

          <PartnerGroup title="Ticketing partner">
            <div className="flex flex-wrap items-center justify-center gap-12">
              <PartnerLogoItem
                name="Tickify"
                filename="tickifylogo.svg"
                variant="large"
              />
            </div>
          </PartnerGroup>

          <PartnerGroup title="Supported by">
            <ul className="flex flex-wrap items-center justify-center gap-12">
              <li>
                <PartnerLogoItem
                  name="United Against Torture"
                  filename="United Against Torture logo.webp"
                />
              </li>
              <li>
                <PartnerLogoItem
                  name="European Union"
                  filename="EN_FundedbytheEU_RGB_POS copy.webp"
                />
              </li>
            </ul>
          </PartnerGroup>
        </div>
      </div>

      <div className="relative -mx-8 -mb-24 mt-16 md:-mx-16 md:-mb-28 md:mt-20 lg:-mx-20">
        <div className="relative z-20 flex justify-center">
          <Image
            src={BIOSCOPE_EMBLEM_SRC}
            alt="Bioscope Cine Fest emblem"
            width={220}
            height={172}
            className="relative h-auto w-[220px] -mb-[86px] object-contain"
          />
        </div>

        <footer
          aria-label="Festival information and contact"
          className="relative w-full min-h-[520px] overflow-hidden rounded-t-[24px] bg-[#181818] px-8 pb-20 pt-28 text-white md:px-16 md:pb-24 md:pt-32 lg:px-20"
        >
          <NoiseOverlay />

          <div className="relative z-10 grid grid-cols-1 gap-40 md:grid-cols-2 md:gap-56">
            <div>
              <p className="max-w-[700px] text-xl font-medium leading-[1.2] md:text-3xl">
                {MIDDLE_TEXT}
              </p>
            </div>

            <div className="justify-self-end text-base leading-relaxed opacity-80 md:text-lg">
              <div className="space-y-1">
                <p>26 June 2026</p>
                <p>2:30 PM – 8:00 PM</p>
                <p>TSC, Dhaka University</p>
              </div>

              <div className="mt-10 space-y-1">
                <p>© 2026 Resistance Cinema Fest</p>
                <a
                  href="mailto:shoeb@activaterights.org"
                  className="transition-colors hover:text-white hover:underline"
                >
                  email: shoeb@activaterights.org
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
