import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Resumo from "./components/Resumo/Resumo";
import Personagens from "./components/Personagens/Personagens"

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Resumo />
      <Personagens/>
    </div>
  );
}