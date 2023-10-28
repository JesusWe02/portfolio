import imgLogo from '../imgs/tsmWhiteLogo.png';
import './NavBar.css';

export function NavBar() {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home">
            <img src={imgLogo} alt="logoTsm" />
          </a>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
