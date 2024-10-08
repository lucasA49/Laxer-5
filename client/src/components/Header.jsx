import { Link } from "react-router-dom";
import "../style/Header.css";
import logoheader from "../assets/logo/logo-header.png";

function Header() {
  return (
    <header className="Header">
      <figure className="rounded-img">
        <div>
          <Link to="/accueil">
            <img className="logo" src={logoheader} alt="Logo" />
          </Link>
        </div>
      </figure>

      <nav className="navbar">
        <Link to="/accueil">Accueil</Link>
        <Link to="/services">Services</Link>
        <Link to="/entreprise">L'entreprise</Link>
        <Link to="/nosmachines">Nos machines</Link>
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
