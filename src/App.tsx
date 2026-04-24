import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contacto from "./components/Contacto";
import Proyectos from "./components/Proyectos";
import { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="App">
      <Header />         {/* pon un boton tal vez */}
      <Hero /> {/* Hay que poner un scroll reveal */}
      <About /> 
      <Proyectos />
      <Contacto />
    </div>
  );
}

export default App;