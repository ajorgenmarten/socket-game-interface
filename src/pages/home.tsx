import { HeroText } from "../components/hero-text";
import { HomeCard } from "../components/home-card";
import { Navbar } from "../components/navbar";

export function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-purple-950 to-gray-900 ">
      <Navbar />
      <div className="px-8 py-4">
        <HeroText />
        <HomeCard />
      </div>
    </main>
  );
}
