import "../style/BodyNosMachines.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import prcn1 from "../assets/Image/prcn1.jpg";
import tetebystar from "../assets/Image/tetebystar.jpg";
import tetebysprint from "../assets/Image/tetebysprint.jpg";
import tetealfa3 from "../assets/Image/tetealfa3.jpg";

function BodyNosMachines() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="laser-cutting-container">
      {/* Conteneur pour la découpe laser */}
      <div className="laser-cutting-content-2d">
        <div className="laser-cutting-text-2d">
          <h1>Tables de découpe Laser à commande numérique</h1>
          <p>
            C'est un travail de haute précision, une puissance élevée et une
            qualité de coupe sans équivalent. Un ensemble complet parfait pour
            la production de vos pièces coupées au laser avec les meilleures
            arrêts réalisables.
          </p>

          <div className="specification">
            <div className="spec-items machines">
              <span className="spec-title">Machines</span>
              <div>
                <p>BYSTRONIC BYSTAR 4020 4400W</p>
                <p>BYSTRONIC BYSPRINT 3015 2200W</p>
              </div>
            </div>

            <div className="spec-items">
              <span className="spec-title">Dimension maximum</span>
              <p>2 000 × 4 000 mm</p>
            </div>

            <div className="spec-items capacity2d">
              <span className="spec-title">Capacité de découpe maximum</span>
              <p>
                Acier : 25 mm / Inox : 15 mm / Aluminium : 12 mm / Galva : 4 mm
              </p>
            </div>

            <div className="spec-items files2d">
              <span className="spec-title">Fichiers nécessaires</span>
              <p>
                DXF, DWG, STEP ou autres supports : de la pièce unitaire à la
                petite série.
              </p>
            </div>
          </div>
        </div>

        <div className="laser-cutting-image-2d">
          <Carousel responsive={responsive} infinite showDots autoPlay>
            <div>
              <img src={tetebysprint} alt="Machine TruLaser 1" />
            </div>
            <div>
              <img src={tetebystar} alt="Machine TruLaser 2" />
            </div>
          </Carousel>
        </div>
      </div>

      <div className="two-col equipment flex justify-evenly align-center mt-5">
        <div className="l-col txt-col">
          <h3 className="ttl_2 slices-in text-cut-up">
            Tables de découpe Laser
          </h3>
          <div>à commande numérique</div>
          <p>
            C'est un travail de haute précision, une puissance élevée et une
            qualité de coupe sans équivalent.
            <br />
            <br />
            Un ensemble complet parfait pour la production de vos pièces coupées
            au laser avec les meilleures arrêts réalisables.
          </p>
          <div className="technical-details mt-2">
            <div className="row">
              <div>Machines</div>
              <div>
                Trumpf Truflow 3030 L20 6000W
                <br />
                Trumpf Truflow 3030 L20 5000W
              </div>
            </div>
            <div className="row">
              <div>
                Dimension <br /> maximum
              </div>
              <div>1 500 × 3 000 mm</div>
            </div>
            <div className="row">
              <div>
                Capacité de <br /> découpe <br /> maximum
              </div>
              <div>
                Acier : 25 mm / Inox : 15 mm / Aluminium : 12 mm / Galva : 4 mm
              </div>
            </div>
            <div className="row">
              <div>Fichiers nécessaires</div>
              <div>
                DXF, DWG, STEP ou autres supports : de la pièce unitaire à la
                petite série.
              </div>
            </div>
          </div>
        </div>
        <div className="r-col img-col">
          <span>
            <img src={tetealfa3} alt="Table de découpe verticale" />
          </span>
        </div>
      </div>

      {/* Conteneur pour la découpe 5 axes */}
      <div className="laser-cutting-content-3d">
        <div className="laser-cutting-text_3d">
          <h1>Tables de découpe 5 axes</h1>
          <p>Détails sur les machines de découpe 5 axes.</p>

          <div className="specification">
            <div className="spec-items machines">
              <span className="spec-title">Machines</span>
              <div>
                <p>Machine 5 axes A</p>
                <p>Machine 5 axes B</p>
              </div>
            </div>

            <div className="spec-items">
              <span className="spec-title">Dimension maximum</span>
              <p>1 000 × 2 000 mm</p>
            </div>

            <div className="spec-items capacity3d">
              <span className="spec-title">Capacité de découpe maximum</span>
              <p>Acier : 20 mm / Inox : 10 mm / Aluminium : 8 mm</p>
            </div>

            <div className="spec-items files3d">
              <span className="spec-title">Fichiers nécessaires</span>
              <p>DXF, DWG, STEP ou autres supports.</p>
            </div>
          </div>
        </div>

        <div className="laser-cutting-image-3d">
          <img src={tetealfa3} alt="Machine 5 axes" />
        </div>
      </div>

      {/* Conteneur pour les plieuses */}
      <div className="bending-content">
        <div className="bending-text">
          <h1>Plieuses</h1>
          <p>Informations sur les machines plieuses.</p>

          <div className="specification">
            <div className="spec-items machines">
              <span className="spec-title">Machines</span>
              <div>
                <p>Plieuse A</p>
                <p>Plieuse B</p>
              </div>
            </div>

            <div className="spec-items">
              <span className="spec-title">Dimension maximum</span>
              <p>1 500 × 3 500 mm</p>
            </div>

            <div className="spec-items capacity">
              <span className="spec-title">Capacité de pliage maximum</span>
              <p>Acier : 12 mm / Inox : 8 mm</p>
            </div>

            <div className="spec-items files">
              <span className="spec-title">Fichiers nécessaires</span>
              <p>DXF, DWG ou autres formats.</p>
            </div>
          </div>
        </div>

        <div className="bending-image">
          <img src={prcn1} alt="Machine Plieuse" />
        </div>
      </div>
    </div>
  );
}

export default BodyNosMachines;
