import { NavLink } from "react-router-dom";
import "../style/Bodycompany.css";
import logoentreprise from "../assets/Image/entreprise.jpg";

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
          </p>
          <p>
            Forte de son expertise et de son savoir-faire, LAXER 5 se distingue
            par sa réactivité, la qualité de ses prestations, et son engagement
            à satisfaire les besoins spécifiques de chaque client.
          </p>
          <p>
            Nous sommes une entreprise à taille humaine, orientée vers
            l'innovation et la précision, avec une équipe dédiée qui met tout en
            œuvre pour garantir un service efficace et personnalisé.
          </p>
          <NavLink to="/" className="cta-button">
            {" "}
            Demander un Devis{" "}
          </NavLink>
        </div>
      </div>

      <div className="prestations-section">
        <h2>Nos Prestations</h2>
        <div className="prestations">
          <div className="prestation-item">
            <h3>Découpe 2D</h3>
            <NavLink to="/" className="plus-button">
              +
            </NavLink>
          </div>
          <div className="prestation-item">
            <h3>Pliage</h3>
            <NavLink to="/" className="plus-button">
              +
            </NavLink>
          </div>
          <div className="prestation-item">
            <h3>Découpe 3D</h3>
            <NavLink to="/" className="plus-button">
              +
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bodycompany;
