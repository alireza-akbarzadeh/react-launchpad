import { Hero, Highlights, Navbar } from "./components";
import { Model } from "./components/Model";

export const Home = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  );
};
