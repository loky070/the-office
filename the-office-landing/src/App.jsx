import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Personagens from "./components/Personagens/Personagens"

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Personagens/>
    </div>
  );
}