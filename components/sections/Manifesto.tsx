"use client";

import { motion, useReducedMotion } from "framer-motion";

const MANIFESTO_TEXT =
  "Join us for films, conversations, and artivism centering resistance, memory, and justice.";

const NOISE_TEXTURE =
  "url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxODAnIGhlaWdodD0nMTgwJz48ZmlsdGVyIGlkPSdnoSc+PGZlVHVyYnVsZW5jZSB0eXBlPSdmcmFjdGFsTm9pc2UnIGJhc2VGcmVxdWVuY3k9JzAuOTInIG51bU9jdGF2ZXM9JzQnIHN0aXRjaFRpbGVzPSdzdGl0Y2gnLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWx0ZXI9J3VybCgjZ24pJy8+PC9zdmc+\")";

export function Manifesto() {
  const reduce = useReducedMotion();

  return (
    <>
      <style>{`
        @keyframes grain {
          0% { transform: translate(0, 0); }
          25% { transform: translate(-5%, 5%); }
          50% { transform: translate(5%, -5%); }
          75% { transform: translate(-3%, 3%); }
          100% { transform: translate(0, 0); }
        }

        .manifesto-grain-overlay {
          animation: grain 8s steps(10) infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .manifesto-grain-overlay {
            animation: none;
          }
        }
      `}</style>

      <section
        aria-label="Festival manifesto"
        className="relative w-full min-h-[70vh] overflow-hidden border-t border-black/25 bg-[#F1231B] px-8 py-20 md:px-16 md:py-28 lg:px-20"
      >
        <div
          className="manifesto-grain-overlay pointer-events-none absolute inset-0 mix-blend-overlay opacity-[0.12]"
          style={{
            backgroundImage: NOISE_TEXTURE,
            backgroundRepeat: "repeat",
            backgroundSize: "180px 180px",
          }}
          aria-hidden
        />

        <div className="relative mx-auto flex min-h-[calc(70vh-10rem)] flex-col justify-end md:min-h-[calc(70vh-14rem)] lg:min-h-[50vh] lg:justify-center">
          <motion.blockquote
            className="relative z-10 max-w-[1100px] text-left text-[38px] font-bold leading-[0.95] tracking-[-0.03em] text-[#FFFFFF] md:text-[58px] lg:text-[78px]"
            initial={reduce ? false : { opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              duration: 0.85,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {MANIFESTO_TEXT}
          </motion.blockquote>
        </div>
      </section>
    </>
  );
}
