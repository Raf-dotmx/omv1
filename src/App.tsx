import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contacto from "./components/Contacto";
import Proyectos from "./components/Proyectos";

function App() {
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