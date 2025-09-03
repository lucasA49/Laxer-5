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
          <h2>Spécialiste en découpe laser 2D, 3D et pliage en Vendée</h2>
          <h3>Prototypes, petites, moyennes et grandes séries</h3>
          <p>
            LAXER 5 est une entreprise spécialisée dans la découpe et le pliage
            de métaux, offrant des solutions sur mesure en tôlerie et découpe 3D
            métal. Fondée en 2008 et basée en Vendée, notre société s'impose
            comme un acteur clé dans l'industrie du travail des métaux.
            <br />
            Forte de son expertise et de son savoir-faire, LAXER 5 se distingue
            par sa <span className="réactivité-bold">réactivité</span>, la
            qualité de ses prestations, et son engagement à satisfaire les
            besoins spécifiques de chaque client.
            <br />
            Nous sommes une entreprise à taille humaine, orientée vers
            l'innovation et la précision, avec une équipe dédiée qui met tout en
            œuvre pour garantir un service efficace et personnalisé.
          </p>
          <div className="cta-container">
            <NavLink to="/contact" className="cta-button">
              Demander un Devis
            </NavLink>
            <img
              className="scrolldowncomp"
              src={scrolldownicon}
              alt="défilement vers le bas"
            />
          </div>
        </div>
      </div>
      <div className="nos-points-forts" />
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
              <div className="timeline-year">2009</div>
              <div className="timeline-details">
                <h3>Expansion des services</h3>
                <p>
                  LAXER 5 élargit son portefeuille de services en ajoutant la
                  découpe laser 2D, augmentant ainsi sa capacité de production
                  permettant de mieux répondre à la demande croissante.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-year">2017</div>
              <div className="timeline-details">
                <h3>Extension de l'atelier et renforcement des équipements</h3>
                <p>
                  Doublement de la superficie de l'atelier afin d’accueillir un
                  second laser de découpe 2D, renforçant ainsi notre capacité de
                  production et notre réactivité.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Item 4 */}
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-year">2019</div>
              <div className="timeline-details">
                <h3>Ajout du service de pliage et Évolution des équipements</h3>
                <p>
                  Mise en place d’un nouveau service de pliage grâce à
                  l’acquisition d’une plieuse. Venant compléter les besoins de
                  nos clients en offrant la possibilité de plier directement les
                  pièces découpées en 2D dans notre atelier. Cette même année,
                  le laser de découpe 2D acquis en 2009 est remplacé par une
                  version plus récente, assurant une continuité de production
                  performante.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Item 5 */}
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-year">2021</div>
              <div className="timeline-details">
                <h3>Second agrandissement des locaux</h3>
                <p>
                  LAXER 5 réalise un second agrandissement en 2021 afin de
                  répondre à la croissance de l’activité, et d’accompagner le
                  développement continu de l’entreprise
                </p>
              </div>
            </div>
          </div>
          {/* Timeline Item 6 */}
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-year">2022</div>
              <div className="timeline-details">
                <h3>Renforcement de la découpe 3D</h3>
                <p>
                  En 2022, LAXER 5 fait l’acquisition d’un nouveau laser de
                  découpe 5 axes plus puissant et plus rapide, permettant
                  d’optimiser la précision et les délais sur les pièces
                  complexes en 3D.
                </p>
              </div>
            </div>
          </div>
          {/* Timeline Item 7 */}
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-year">2024</div>
              <div className="timeline-details">
                <h3>Acquisition d’une nouvelle plieuse</h3>
                <p>
                  En 2024, LAXER 5 renforce ses capacités avec l’acquisition
                  d’une nouvelle plieuse, afin d’accompagner la montée en charge
                  de l’activité et de répondre à une demande toujours plus
                  soutenue.
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
