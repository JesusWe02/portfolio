import { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../imgs/tsmWhiteLogo.png';
import './Header.css';

const navLinks = [
  { to: 'about', label: 'Home', activeClass: 'active' },
  { to: 'skills', label: 'About Me' },
  { to: 'projects', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
];

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
      <a href="https://jesuswe02.github.io/portfolio/" rel="pageGit">
        <div className="logo-container">
          <img src={logo} alt="logoHeader" />
        </div>
      </a>
      <div
        className={`icon-container ${menu ? 'change' : ''}`}
        onClick={toggleMenu}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <nav className={`nav-container ${menu ? 'isActive' : ''}`}>
        <ul className="ul-container">
          {navLinks.map(({ to, label, activeClass }) => (
            <li key={to}>
              <Link
                to={to}
                smooth={true}
                duration={500}
                offset={-100}
                onClick={closeMenu}
                spy={true}
                activeClass={activeClass}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
