import { NavLink } from "react-router-dom";
import "../style/Bodycompany.css";
import logoentreprise from "../assets/Image/entreprise.jpg";
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
          <h3>Prototypes, Petite, moyenne et grande série</h3>
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
    </div>
  );
}

export default Bodycompany;
