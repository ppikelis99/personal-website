import "./Header.css";
import Logo from "../images/Plogo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    const root = document.documentElement;

    if (darkMode) {
      root.style.setProperty('--primary-color', '#99cce0');
      root.style.setProperty('--background-color', '#ececec');
      root.style.setProperty('--text-color', '#000000');
      root.style.setProperty('--container-color', '#6b95b4');
      root.style.setProperty('--shadows-color', '#EAE0CF');
      root.style.setProperty('--logo-color', '#93a5a1');
    } else {
      root.style.setProperty('--primary-color', '#547792');
      root.style.setProperty('--background-color', '#213448');
      root.style.setProperty('--text-color', '#EAE0CF');
      root.style.setProperty('--container-color', '#47667e');
      root.style.setProperty('--shadows-color', '#7b7f81');
      root.style.setProperty('--logo-color', '#EAE0CF');
    }
    setDarkMode(!darkMode);
  }

  return (
    <nav className="navbar navbar-expand-md header align-items-stretch">
      
      <Link className="headerLogo" to="/">P</Link>

      <button className="navbar-toggler burgerButton" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="mainNavbar">
        <ul className="navbar-nav ms-auto h-100">
          <li onClick={toggleTheme} className="nav-link headerLink d-flex align-items-center px-3 justify-content-center">{darkMode ? "🌙" : "☀️"}</li>
          <li className="nav-item d-flex align-items-stretch">
            <Link className="nav-link headerLink d-flex align-items-center px-3 justify-content-center" to="/">Home</Link>
          </li>
          <li className="nav-item d-flex align-items-stretch">
            <Link className="nav-link headerLink d-flex align-items-center px-3 justify-content-center" to="/works">Works</Link>
          </li>
          <li className="nav-item d-flex align-items-stretch">
            <Link className="nav-link headerLink d-flex align-items-center px-3 justify-content-center" to="/contact">Contact</Link>
          </li>
        </ul>

      </div>

    </nav>
  );
}