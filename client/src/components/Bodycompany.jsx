import { NavLink, Link } from "react-router-dom";
import "../style/Bodycompany.css";
import logoentreprise from "../assets/Image/entreprise.jpg";
import instagram from "../assets/icone/instagram.png";
import linkedin from "../assets/icone/linkedin.png";
import facebook from "../assets/icone/facebook.png";
import scrolldownicon from "../assets/Image/scrolldownicon.png";

function Bodycompany() {
  return (
    <div className="body-entreprise">
      <div className="top-section">
        <div className="left-side">
          <img
            src={logoentreprise}
            alt="LAXER 5 Building"
            className="company-image"
          />
        </div>
        <div className="right-side">
          <h1>LAXER 5</h1>
          <h2>Spécialiste en usinage laser 2D, 3D et pliage en Vendée</h2>
          <h3>Petite, moyenne et grande série</h3>
          <p>
            LAXER 5 est une entreprise spécialisée dans la découpe et le pliage
            de métaux, offrant des solutions sur mesure en tôlerie et découpe 3D
            métal. Fondée en 2008 et basée en Vendée, notre société s'impose
            comme un acteur clé dans l'industrie du travail des métaux.
            <br />
            Forte de son expertise et de son savoir-faire, LAXER 5 se distingue
            par sa réactivité, la qualité de ses prestations, et son engagement
            à satisfaire les besoins spécifiques de chaque client.
            <br />
            Nous sommes une entreprise à taille humaine, orientée vers
            l'innovation et la précision, avec une équipe dédiée qui met tout en
            œuvre pour garantir un service efficace et personnalisé.
          </p>
          <NavLink to="/contact" className="cta-button">
            {" "}
            Demander un Devis{" "}
          </NavLink>
        </div>
      </div>

      <div className="scrolldown">
        <img
          className="scrolldown"
          src={scrolldownicon}
          alt="defile vers le bas"
        />
      </div>

      {/* Header Buttons */}
      <header className="header-qualité">
        <div className="header-buttons">
          <div className="header-button">Réactivité</div>
          <div className="header-button">Précision</div>
          <div className="header-button">Qualité</div>
        </div>
      </header>

      {/* Timeline Section */}
      <div className="timeline-section">
        <h2>Notre histoire</h2>
        <div className="timeline-line">
          {/* Timeline Item 1 */}
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-year">2008</div>
              <div className="timeline-details">
                <h3>Création de l'entreprise LAXER 5</h3>
                <p>
                  LAXER 5 est une entreprise spécialisée dans la découpe 5 axes
                  et s'installe à Mortagne-sur-Sèvre, proche des grands axes.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-year">2010</div>
              <div className="timeline-details">
                <h3>Expansion des services</h3>
                <p>
                  LAXER 5 élargit son portefeuille de services en ajoutant des
                  solutions de pliage 3D pour les métaux, augmentant sa capacité
                  de production.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-year">2015</div>
              <div className="timeline-details">
                <h3>Nouvelle technologie laser</h3>
                <p>
                  Acquisition de la dernière technologie laser 3D, permettant
                  une précision accrue dans les processus de découpe.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Item 4 */}
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-year">2020</div>
              <div className="timeline-details">
                <h3>Élargissement de l'usine</h3>
                <p>
                  LAXER 5 agrandit ses installations avec une nouvelle unité de
                  production pour répondre à la demande croissante de ses
                  clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer2">
        <div className="footer-background">hi</div>
        <div className="footer-content2">
          <div className="footer-info">
            <h4>LAXER 5</h4>
            <p>
              Spécialiste découpe laser 5 axes
              <br />
              et pliage de haute précision près de Cholet.
            </p>
            <address>
              ZI de Maunit - 134 rue des Pâtis Mortagne-sur-Sèvre
              <br />
              Horaires : Lundi - Vendredi: 8h - 12h / 13h - 18h
              <br />
              Téléphone : 02 51 57 51 56
              <br />
            </address>
          </div>

          <nav className="footer-links">
            <Link to="/accueil">Accueil</Link>
            <Link to="/services">Services</Link>
            <Link to="/entreprise">L'entreprise</Link>
            <Link to="/nosmachines">Nos machines</Link>
          </nav>

          <div className="footer-socials">
            <h4>Suivez Nous</h4>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/tonprofil"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="facebookicone"
                    src={facebook}
                    alt="Icône facebook"
                  />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/tonprofil"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="linkedinicone"
                    src={linkedin}
                    alt="Icône linkedin"
                  />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/tonprofil"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="instagramicone"
                    src={instagram}
                    alt="Icône instagram"
                  />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Bodycompany;
