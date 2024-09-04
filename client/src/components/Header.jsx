import { NavLink, Link } from "react-router-dom"; // Une seule importation de react-router-dom
import "../style/Header.css";
import logo from "../assets/logo/logo.png";

function Header() {
  return (
    <header className="Header">
      <NavLink to="/map">
        <figure className="rounded-img">
          <img className="logo" src={logo} alt="Logo" />
        </figure>
      </NavLink>

      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/services">Services</Link>
        <Link to="/entreprise">L'entreprise</Link>
        <Link to="/machines">Nos machines</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
