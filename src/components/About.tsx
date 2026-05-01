import FloatingIcons from "./FloatingIcons";

function About() {
  return (
    <section id="about" className="about-section" data-aos="fade-up-right" data-aos-delay="300">
      <FloatingIcons />
      <div className="container about" style={{ position: "relative", zIndex: 2 }}>
        <h2>Sobre mí</h2>
        <p>
          Soy desarrollador de software de Mérida, Yucatán. Siempre tuve facilidad con la
          tecnología — entender cómo funciona algo y cómo hacerlo más simple es lo que me
          llevó al desarrollo.
        </p>
        <p>
          Me gusta experimentar: gráficos, interfaces, ideas que todavía no sé si van a
          funcionar. Lo que más disfruto es tomar algo complejo y reducirlo a algo que
          cualquier persona pueda usar sin pensarlo dos veces.
        </p>
        <p>
          Tengo experiencia construyendo aplicaciones web fullstack con Angular, React y
          Node.js, trabajando con bases de datos SQL y desarrollando APIs. También he
          explorado Python, C#, Unity y Blender.
        </p>
      </div>
    </section>
  );
}

export default About;