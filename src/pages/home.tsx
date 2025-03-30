import { HeroText } from "../components/ui/HeroText";
import { CardSection } from "../components/ui/CardSection/index";
import { Navbar } from "../components/ui/navbar";

export function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-purple-950 to-gray-900 ">
      <Navbar />
      <div className="px-8 py-4">
        <HeroText />
        <CardSection />
      </div>
    </main>
  );
}
