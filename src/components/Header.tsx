import logo from '../assets/gato.png';

//PascalCasing
function Header() {
    //JSX
  return (
    <header className="header">
        <img src={logo} alt="Logo" className="logo"/>
        <nav className="navbar">
        <a href="#about">Sobre mi</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contact">Contacto</a>
        </nav>
    </header>
  );
}

export default Header;