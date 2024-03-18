import "./App.css";
import { Hero, Highlights, Navbar } from "./components";

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
    </main>
  );
}

export default App;
