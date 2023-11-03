import { useState } from 'react';
import imgLogo from '../imgs/tsmWhiteLogo.png';
import './NavBar.css';

export function NavBar() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <header className="header-container">
      <a href="#" className="header-a">
        <img src={imgLogo} alt="imgNav" />
      </a>
      <button onClick={toggleMenu} className="header-button">
        X
      </button>
      <nav className={`nav-container ${menu ? 'isActive' : ''}`}>
        <ul className="nav-ul">
          <li className="nav-li">
            <a href="#" className="nav-a">
              Inicio
            </a>
          </li>
          <li className="nav-li">
            <a href="#" className="nav-a">
              Habilidades
            </a>
          </li>
          <li className="nav-li">
            <a href="#" className="nav-a">
              Proyectos
            </a>
          </li>
          <li className="nav-li">
            <a href="#" className="nav-a">
              Contactame
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
