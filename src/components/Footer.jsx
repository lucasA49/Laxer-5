import { Link } from "react-router-dom";
import "../style/Footer.css";
import logoWhite from "../assets/logo/logo-laxer5-blanc.svg";

export default function Footer() {
  return (
    <>
      {/* ── FOOTER PRINCIPAL ── */}
      <div className="footerMain">

        {/* Colonne gauche noire */}
        <div className="footerBrand">
          <img src={logoWhite} alt="Laxer 5" className="footerLogo" />
          <p className="footerAddr">
            ZI de Maunit - 134 rue des Pâtis<br />
            85290 Mortagne-sur-Sèvre
          </p>
          <p className="footerInfo">
            <strong>Horaires</strong> : Lundi - Vendredi : 8h - 12h / 13h - 18h
          </p>
          <p className="footerInfo">
            <strong>Téléphone</strong> : <a href="tel:+0251576515">02 51 57 65 15</a>
          </p>
        </div>

        {/* Colonnes droite grise */}
        <div className="footerCols">
          <div className="footerCol">
            <h4 className="footerColTitle">Découpe laser</h4>
            <nav className="footerNav">
              <Link to="/decoupe-laser-2d">Découpe laser 2D</Link>
              <Link to="/decoupe-laser-3d">Découpe laser 3D</Link>
              <Link to="/decoupe-laser-metal">Découpe laser métal</Link>
            </nav>
          </div>

          <div className="footerCol">
            <h4 className="footerColTitle">Pliage tôle</h4>
            <nav className="footerNav">
              <Link to="/pliage-tole">Pliage tôle</Link>
            </nav>
          </div>

          <div className="footerCol">
            <h4 className="footerColTitle">Mais aussi</h4>
            <nav className="footerNav">
              <Link to="/accueil">Accueil</Link>
              <Link to="/entreprise">L'entreprise</Link>
              <Link to="/nosmachines">Nos machines</Link>
            </nav>
          </div>
        </div>

      </div>

      {/* ── FOOTER BAS ── */}
      <footer className="footer">
        <div className="footer-content">
          <p className="textfooter">
            Copyright © {new Date().getFullYear()} Laxer 5 | Tous droits réservés. Voir les{" "}
            <Link className="lienmentionslegales" to="/mentions-legales">
              mentions légales
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}