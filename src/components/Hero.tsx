import { TypeAnimation } from "react-type-animation";



function Hero() {
    return (
        <div className="hero">
            <div data-aos="zoom-in-up" data-aos-duration="1000" data-anchor-placement="center-bottom" >
                <h1>Osvaldo Martinez</h1>
                <TypeAnimation
                    sequence={[
                        "Fullstack Developer",
                        1000,
                        "Frontend Developer",
                        1000,
                        "Backend Developer",
                        1000
                    ]}
                    wrapper="h3"
                    speed={50}
                    deletionSpeed={65}
                    cursor={true}
                    repeat={Infinity}
                    className="highlight"
                />
                <p>  Me enfoco en construir cosas que funcionen bien y que sean fáciles de usar — desde aplicaciones internas hasta proyectos propios.</p>
                <div className="hero-buttons">
                    <a className="btn btn-primary" href="#proyectos">Proyectos</a>
                    <a className="btn btn-outline" href="/Osvaldo_Martinez_Curriculum.pdf" target="_blank" rel="noopener noreferrer">Ver CV</a>
                </div>

            </div>
        </div>
    );
}

export default Hero;