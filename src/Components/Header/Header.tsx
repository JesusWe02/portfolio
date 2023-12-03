import "./Header.css";
import logo from "../../imgs/tsmWhiteLogo.png";
import { useState } from "react";

export function Header() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={logo} alt="logoHeader" />
      </div>
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
            <a href="#AboutMe">About Me</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
