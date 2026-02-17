import "./Header.css";
import Logo from "../images/Plogo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-md header align-items-stretch">
      
      <img src={Logo} className="headerLogo" alt="Logo"/>

      <button className="navbar-toggler burgerButton" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="mainNavbar">
        <ul className="navbar-nav ms-auto h-100">
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