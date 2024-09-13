import { Link } from "react-router-dom";
import "../style/Header.css";
import logo from "../assets/logo/logo.png";

function Header() {
  return (
    <header className="Header">
      <figure className="rounded-img">
        <img className="logo" src={logo} alt="Logo" />
      </figure>

      <nav className="navbar">
        <Link to="/acceuil">Accueil</Link>
        <Link to="/services">Services</Link>
        <Link to="/entreprise">L'entreprise</Link>
        <Link to="/machines">Nos machines</Link>
      </nav>
      <nav>
        <Link className="contactbtn" to="/contact">
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;
