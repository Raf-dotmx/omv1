import { CgMail  } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function Contacto() {
  return (
    <section id="contact" className="contact container" data-aos="slide-left">
      <h2>Contacto</h2>
      <p className="contact-text">Estoy buscando nuevas oportunidades, si estás interesado en colaborar, no dudes en contactarme! <br />Si no mandame un saludo de todos modos</p>

      <a className="btn btn-outline" href="/Osvaldo_Martinez_Curriculum.pdf" target="_blank" rel="noopener noreferrer">
        Ver CV
      </a>

      <div className="contact-links">
        <a href="mailto:osvaldom1222@gmail.com">
          <CgMail />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>  
        <a href="" target="_blank" rel="noopener noreferrer">
          <FaGithub /> 
        </a>
      </div>
    </section>
  );
}

export default Contacto;