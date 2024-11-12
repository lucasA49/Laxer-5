import "../style/BodyNosMachines.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import prcn1 from "../assets/Image/prcn1.jpg";
import tetebystar from "../assets/Image/tetebystar.jpg";
import tetebysprint from "../assets/Image/tetebysprint.jpg";
import Alphalaser from "../assets/Image/Alphalaser.jpg";
import Rapido from "../assets/Image/Rapido.jpg";

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
      <div className="laser-cutting-content-2d"> </div>
      {/* Conteneur pour la découpe laser 5 axes */}
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
            Un ensemble complet parfait pour la production de vos pièces coupées
            au laser avec les meilleures arrêts réalisables.
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
      {/* Conteneur pour la découpe laser à plat avec disposition inversée */}
      <div className="two-col equipment flex justify-evenly align-center mt-5 reverse-layout">
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
            au laser avec les meilleurs arrêts réalisables.
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
      </div>

      {/* Conteneur pour la découpe laser à plat */}
      <div className="two-col equipment flex justify-evenly align-center mt-5">
        <div className="l-col txt-col">
          <h3 className="ttl_2 slices-in text-cut-up">Pliage</h3>
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
        <div className="laser-cutting-image-2d">
          <Carousel responsive={responsive} infinite showDots autoPlay>
            <div>
              <img src={prcn1} alt="Machine TruLaser 1" />
            </div>
            <div>
              <img src={tetebystar} alt="Machine TruLaser 2" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default BodyNosMachines;
