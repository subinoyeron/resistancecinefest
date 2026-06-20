import { FeaturedFilmsGrid } from "@/components/sections/FeaturedFilmsGrid";
import { FestivalBooking } from "@/components/sections/FestivalBooking";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { SiteClosing } from "@/components/sections/SiteClosing";
import { WhyFilmWhyNow } from "@/components/sections/WhyFilmWhyNow";

export default function Home() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <WhyFilmWhyNow />
      <FestivalBooking />
      <FeaturedFilmsGrid />
      <SiteClosing />
    </main>
  );
}
