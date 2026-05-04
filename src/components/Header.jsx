import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "../style/Header.css";
import logoheader from "../assets/logo/logo-header.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") toggleMenu();
  };

  const isActive = (path) => location.pathname === path;

  const closeMenu = () => {
    setIsMenuOpen(false);
    setServicesOpen(false);
  };

  const services = [
    { label: "Découpe laser 2D", href: "/decoupe-laser-2d" },
    { label: "Découpe laser 3D", href: "/decoupe-laser-3d" },
    { label: "Pliage tôle", href: "/pliage-tole" },
    { label: "Découpe laser métal", href: "/decoupe-laser-metal" },
  ];

  return (
    <header className="Header">
      <figure className="rounded-img">
        <div>
          <Link to="/accueil" className="logo-link">
            <img src={logoheader} alt="Laxer 5" className="logo" />
          </Link>
        </div>
      </figure>

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

      <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
        <Link className={isActive("/accueil") ? "active" : ""} to="/accueil" onClick={closeMenu}>
          Accueil
        </Link>

        {/* ── DROPDOWN SERVICES ── */}
        <div
          className={`navDropdown ${servicesOpen ? "isOpen" : ""}`}
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <button
            className={`navDropdownBtn ${services.some(s => isActive(s.href)) ? "active" : ""}`}
            onClick={() => setServicesOpen(!servicesOpen)}
            aria-expanded={servicesOpen}
          >
            Services <span className="navDropdownArrow">▾</span>
          </button>
          <div className="navDropdownMenu">
            {services.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className={isActive(s.href) ? "active" : ""}
                onClick={closeMenu}
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        <Link className={isActive("/entreprise") ? "active" : ""} to="/entreprise" onClick={closeMenu}>
          L'entreprise
        </Link>
        <Link className={isActive("/nosmachines") ? "active" : ""} to="/nosmachines" onClick={closeMenu}>
          Nos machines
        </Link>
      </nav>

      <nav className="contact-nav">
        <Link className={`contactbtn ${isActive("/contact") ? "active" : ""}`} to="/contact" onClick={closeMenu}>
          Contact
        </Link>
      </nav>
    </header>
  );
}