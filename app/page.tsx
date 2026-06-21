import { CinematicQuote } from "@/components/sections/CinematicQuote";
import { FeaturedFilmsGrid } from "@/components/sections/FeaturedFilmsGrid";
import { FestivalBooking } from "@/components/sections/FestivalBooking";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { SiteClosing } from "@/components/sections/SiteClosing";

export default function Home() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <FestivalBooking />
      <FeaturedFilmsGrid />
      <CinematicQuote />
      <SiteClosing />
    </main>
  );
}
