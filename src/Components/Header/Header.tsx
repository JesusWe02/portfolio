import "./Header.css";
import { Link } from "react-scroll";
import logo from "../../imgs/tsmWhiteLogo.png";
import { useState } from "react";

export function Header() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <header className="header-container">
      <Link to="about" smooth={true} duration={500} onClick={closeMenu}>
        <div className="logo-container">
          <img src={logo} alt="logoHeader" />
        </div>
      </Link>
      <div
        className={`icon-container ${menu ? "change" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <nav className={`nav-container ${menu ? "isActive" : ""}`}>
        <ul className="ul-container">
          <li>
            <Link to="about" smooth={true} duration={500} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              offset={-100}
              onClick={closeMenu}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-100}
              onClick={closeMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-100}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
