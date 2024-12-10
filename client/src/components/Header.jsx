import { Link } from "react-router-dom";
import { useState } from "react";
import "../style/Header.css";
import logoheader from "../assets/logo/logo-header.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      // Autorise les actions avec "Enter" ou "Space"
      toggleMenu();
    }
  };

  return (
    <header className="Header">
      <figure className="rounded-img">
        <div>
          <Link to="/accueil">
            <img className="logo" src={logoheader} alt="Logo" />
          </Link>
        </div>
      </figure>

      {/* Burger Menu Icon */}
      <div
        className={`burger-menu ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        onKeyDown={handleKeyDown} // Ajouter le gestionnaire d'événements clavier
        role="button" // Indique que cet élément est un bouton
        tabIndex="0" // Permet l'interaction au clavier
        aria-label="Toggle menu" // Améliore l'accessibilité
      >
        <div className="burger-line"> </div>
        <div className="burger-line"> </div>
        <div className="burger-line"> </div>
      </div>

      {/* Navigation Menu */}
      <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
        <Link to="/accueil">Accueil</Link>
        <Link to="/services">Services</Link>
        <Link to="/entreprise">L'entreprise</Link>
        <Link to="/nosmachines">Nos machines</Link>
      </nav>

      {/* Contact Button */}
      <nav className="contact-nav">
        <Link className="contactbtn" to="/contact">
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;
