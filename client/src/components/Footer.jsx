import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"; // Import des icônes de réseaux sociaux
import { Link } from "react-router-dom";
import "../style/Footer.css";
import logo from "../assets/logo/logo.png";

function Footer() {
  return (
    <>
      {/* Nouveau conteneur avec les informations demandées */}
      <div className="secondary-footer">
        <div className="info-container">
          <div className="info-left">
            <h4>LAXER 5</h4>
            <p>
              Spécialiste découpe laser 3 et 5 axes
              <br />
              et pliage de haute précision près de Cholet.
            </p>
            <p>
              ZI de Maunit - 134 rue des Pâtis Mortagne-sur-Sèvre
              <br />
              Horaires : Lundi - Vendredi: 8h - 12h / 13h - 18h
              <br />
              Téléphone : <a href="tel:+0251575156">02 51 57 65 15</a>
            </p>
          </div>
          <nav className="footer-links">
            <Link to="/accueil">Accueil</Link>
            <Link to="/services">Services</Link>
            <Link to="/entreprise">L'entreprise</Link>
            <Link to="/nosmachines">Nos machines</Link>
          </nav>
          <div className="info-right">
            <p>Suivez-nous :</p>
            <div className="social-icons">
              <div className="social-row">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
              <div className="social-row">
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer existant */}
      <footer className="footer">
        <img className="logofooter" src={logo} alt="Logo" />
        <div className="footer-content">
          <p className="textfooter">
            Copyright © 2025 Laxer 5 | Tous droits réservés. Voir les{" "}
            <Link className="lienmentionslegales" to="/mentions-legales">
              mentions légales
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
