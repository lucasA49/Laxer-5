import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "../style/Header.css";
import logoheader from "../assets/logo/logo-header.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Permet de récupérer le chemin actuel

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      toggleMenu();
    }
  };

  // Fonction pour vérifier si le lien est actif
  const isActive = (path) => location.pathname === path;

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
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex="0"
        aria-label="Toggle menu"
      >
        <div className="burger-line"> </div>
        <div className="burger-line"> </div>
        <div className="burger-line"> </div>
      </div>

      {/* Navigation Menu */}
      <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
        <Link className={isActive("/accueil") ? "active" : ""} to="/accueil">
          Accueil
        </Link>
        <Link className={isActive("/services") ? "active" : ""} to="/services">
          Services
        </Link>
        <Link
          className={isActive("/entreprise") ? "active" : ""}
          to="/entreprise"
        >
          L'entreprise
        </Link>
        <Link
          className={isActive("/nosmachines") ? "active" : ""}
          to="/nosmachines"
        >
          Nos machines
        </Link>
      </nav>

      {/* Contact Button */}
      <nav className="contact-nav">
        <Link
          className={`contactbtn ${isActive("/contact") ? "active" : ""}`}
          to="/contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;
