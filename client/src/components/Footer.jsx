import { Link } from "react-router-dom";
import "../style/Footer.css";
import logo from "../assets/logo/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <img className="logofooter" src={logo} alt="Logo" />
      <div className="footer-content">
        <p className="textfooter">
          Copyright © 2024 Laxer 5 | Tous droits réservés. Voir les{" "}
          <Link className="lienmentionslegales" to="/mentions-legales">
            mentions légales
          </Link>
        </p>
      </div>
    </footer>
  );
}
export default Footer;
