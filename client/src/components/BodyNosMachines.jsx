import "../style/BodyNosMachines.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import prcn1 from "../assets/Image/prcn1.jpg";
import pièces2d from "../assets/Image/pièces2d.jpg";
import decoupe2d from "../assets/Image/decoupe2d.jpg";
import Alphalaser from "../assets/Image/Alphalaser.jpg";
import Rapido from "../assets/Image/Rapido.jpg";
import pieceplié from "../assets/Image/pieceplié.jpg";
import ChariotsDroite from "../assets/Image/ChariotsDroite.jpg";
import ChariotsGauche from "../assets/Image/ChariotsGauche.jpg";

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
    <div className="body-container">
      {/* Conteneur global pour la découpe laser 5 axes */}
      <div className="laser3d-section">
        <div className="two-col equipment flex justify-evenly align-center mt-5">
          <div className="l-col txt-col">
            <h3 className="ttl_2 slices-in text-cut-up">
              Tables de découpe 5 axes
            </h3>
            <p>
              C'est un travail de haute précision, une puissance élevée et une
              qualité de coupe sans équivalent.
              <br />
              <br />
              Un ensemble complet parfait pour la production de vos pièces
              coupées au laser avec les meilleures arrêts réalisables.
            </p>
            <div className="technical-details mt-2">
              <div className="row">
                <div>Machines</div>
                <div>
                  Alpha Cube 3020
                  <br />
                  Prima Rapido
                </div>
              </div>
              <div className="row">
                <div>
                  Dimension <br /> maximum
                </div>
                <div>X 3000 Y 2000 Z 750 mm</div>
              </div>
              <div className="row">
                <div>
                  Capacité de <br /> découpe <br /> maximum
                </div>
                <div>
                  Acier : 8 mm / Inox : 2 mm / Aluminium : 3 mm / Galva : 2 mm
                </div>
              </div>
              <div className="row">
                <div>Fichiers nécessaires</div>
                <div>
                  DXF, DWG, STEP ou autres supports : de la pièce unitaire à la
                  grande série.
                </div>
              </div>
            </div>
          </div>
          <div className="laser-cutting-image-2d">
            <Carousel responsive={responsive} infinite showDots autoPlay>
              <div>
                <img src={Rapido} alt="Machine TruLaser 1" />
              </div>
              <div>
                <img src={Alphalaser} alt="Machine TruLaser 2" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      {/* Conteneur global pour la découpe laser à plat avec disposition inversée */}
      <div className="laser2d-section">
        <div className="two-col equipment flex justify-evenly align-center mt-5 reverse-layout">
          <div className="laser-cutting-image-2d">
            <Carousel responsive={responsive} infinite showDots autoPlay>
              <div>
                <img src={pièces2d} alt="Machine TruLaser 1" />
              </div>
              <div>
                <img src={decoupe2d} alt="Machine TruLaser 2" />
              </div>
            </Carousel>
          </div>
          <div className="l-col txt-col">
            <h3 className="ttl_2 slices-in text-cut-up">
              Tables de découpe Laser
            </h3>
            <p>à commande numérique</p>
            <p>
              C'est un travail de haute précision, une puissance élevée et une
              qualité de coupe sans équivalent.
              <br />
              <br />
              Un ensemble complet parfait pour la production de vos pièces
              coupées au laser avec les meilleurs arrêts réalisables.
            </p>
            <div className="technical-details mt-2">
              <div className="row">
                <div>Machines</div>
                <div>
                  Bystronic / Bystar 4020
                  <br />
                  Bystronic / Bysprint 3015
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
                  Acier : 25 mm / Inox : 15 mm / Aluminium : 12 mm / Galva : 4
                  mm
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
        </div>
      </div>

      {/* Conteneur global pour la découpe laser à plat */}
      <div className="bending-section">
        <div className="two-col equipment flex justify-evenly align-center mt-5">
          <div className="l-col txt-col">
            <h3 className="ttl_2 slices-in text-cut-up">Pliage</h3>
            <p>à commande numérique</p>
            <p>
              C'est un travail de haute précision, une puissance élevée et une
              qualité de coupe sans équivalent.
              <br />
              <br />
              Un ensemble complet parfait pour la production de vos pièces
              coupées au laser avec les meilleurs arrêts réalisables.
            </p>
            <div className="technical-details mt-2">
              <div className="row">
                <div>Machines</div>
                <div>
                  Rico prcn C-line
                  <br />
                  Ermaksan CNCAP 3100 - 160
                </div>
              </div>
              <div className="row">
                <div>
                  Dimension <br /> maximum
                </div>
                <div> 3 100 mm</div>
              </div>
              <div className="row">
                <div>
                  Puissance <br /> maximum
                </div>
                <div> 160 tonnes</div>
              </div>
              <div className="row">
                <div>
                  Capacité de <br /> découpe <br /> maximum
                </div>
                <div>
                  Acier : 25 mm / Inox : 15 mm / Aluminium : 12 mm / Galva : 4
                  mm
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
          <div className="bending-image-2d">
            <Carousel responsive={responsive} infinite showDots autoPlay>
              <div>
                <img src={prcn1} alt="Machine TruLaser 1" />
              </div>
              <div>
                <img src={pieceplié} alt="Machine TruLaser 2" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      {/* Conteneur global pour la découpe laser à plat avec disposition inversée */}
      <div className="manutention-section">
        <div className="two-col equipment flex justify-evenly align-center mt-5 reverse-layout">
          <div className="manutention-image-2d">
            <Carousel responsive={responsive} infinite showDots autoPlay>
              <div>
                <img src={ChariotsDroite} alt="Chariots 1" />
              </div>
              <div>
                <img src={ChariotsGauche} alt="Chariots 2" />
              </div>
            </Carousel>
          </div>
          <div className="l-col txt-col">
            <h3 className="ttl_2 slices-in text-cut-up">
              Matériel de Manutention et de Levage
            </h3>
            <p>Nos Chariots et Pont roulant</p>
            <p>Un ensemble complet parfait pour la manutention et le levage</p>
            <div className="technical-details mt-2">
              <div className="row">
                <div>Matériels</div>
                <div>
                  Chariot STILL RX60-35
                  <br />
                  Chariot MANITOU
                  <br />
                  FENWICK-LINDE L10
                </div>
              </div>
              <div className="row">
                <div>
                  Charges <br /> maximales <br /> Chariots
                </div>
                <div>
                  3 500 kg
                  <br />
                  1 500 kg
                  <br />1 000 kg
                </div>
              </div>
              <div className="row">
                <div>
                  Charges
                  <br />
                  Maximal
                  <br />
                  Pont Roulant
                </div>
                <div>1 500 kg</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyNosMachines;
