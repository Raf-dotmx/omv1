import logo from '../assets/Logo.svg';

//PascalCasing
function Header() {
    //JSX
  return (
    <header className="header">
        <a href="#" >
          <img src={logo} alt="Logo" className="logo"/>
        </a>
        <nav className="navbar">
        <a href="#about">Sobre mi</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contact">Contacto</a>
        </nav>
    </header>
  );
}

export default Header;