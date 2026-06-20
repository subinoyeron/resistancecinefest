"use client";

import { brand, nav } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="pointer-events-none fixed top-6 right-0 left-0 z-50 flex justify-center px-4 lg:top-8">
      <header
        className={`nav-pill pointer-events-auto w-full max-w-5xl transition-all duration-500 ${
          scrolled || open
            ? "bg-white/95 shadow-[0_16px_48px_rgb(30_30_30_/_12%)]"
            : "bg-white/85"
        }`}
      >
        <div className="flex min-h-[4.5rem] items-center justify-between gap-4 px-6 py-3 lg:min-h-[5rem] lg:px-10">
          <a
            href="#top"
            className="font-display shrink-0 text-xl font-semibold tracking-tight text-charcoal lg:text-2xl"
            onClick={() => setOpen(false)}
          >
            {brand.shortName}
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center justify-center gap-8 lg:flex"
          >
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-charcoal/70 transition-colors hover:text-orange"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="#register" className="!min-h-12 !px-8 !text-base">
              {nav.cta}
            </Button>
          </div>

          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-cream-dark text-xl lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? "×" : "☰"}
          </button>
        </div>

        {open && (
          <nav
            aria-label="Mobile"
            className="border-t border-charcoal/8 px-6 py-6 lg:hidden"
          >
            <ul className="flex flex-col gap-2">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-2xl px-4 py-3 text-lg font-medium text-charcoal hover:bg-cream"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <Button href="#register" className="w-full">
                  {nav.cta}
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </div>
  );
}
