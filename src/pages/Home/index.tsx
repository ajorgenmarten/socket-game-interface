import { Navbar } from "../../components/ui/Navbar";
import { HeroText } from "./HeroText";
import { SectionCards } from "./SectionCards";

export function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroText />
      <SectionCards />
    </main>
  );
}
