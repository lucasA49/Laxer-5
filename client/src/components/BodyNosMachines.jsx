import "../style/BodyNosMachines.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useMediaQuery } from "react-responsive";
import BysPrintExt from "../assets/Image/BysPrintExt.jpg";
import BysPrintExt2 from "../assets/Image/BysPrintExt2.jpg";
import BysPrintFront from "../assets/Image/BysPrintFront.jpg";
import BystarExt from "../assets/Image/BystarExt.jpg";
import AlphaOpen from "../assets/Image/AlphaOpen.jpg";
import AlphaClosed from "../assets/Image/AlphaClosed.jpg";
import Rapido from "../assets/Image/Rapido.jpg";
import Rapidofermé from "../assets/Image/Rapidofermé.jpg";
import prcn1 from "../assets/Image/prcn1.jpg";
import ErmackExt from "../assets/Image/ErmackExt.jpg";
import ErmackInt from "../assets/Image/ErmackInt.jpg";
import ChariotsDroite from "../assets/Image/ChariotsDroite.jpg";
import ChariotsGauche from "../assets/Image/ChariotsGauche.jpg";
import PontRoulant from "../assets/Image/PontRoulant.jpg";
import Bureau from "../assets/Image/Bureau.jpg";

function BodyNosMachines() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

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
              Une technologie de découpe laser alliant précision, polyvalence et
              qualité de coupe.
              <br />
              <br />
              Un ensemble complet parfait pour la production de vos pièces
              coupées au laser, même sur les formes les plus complexes.
            </p>
            <div className="technical-details mt-2">
              <div className="row">
                <div>Machines</div>
                <div>
                  Alpha Cube 3020 2200 W
                  <br />
                  Prima Rapido 2500 W
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
                <div>Acier : 4 mm / Inox : 4 mm / Aluminium : 3 mm</div>
              </div>
              <div className="row">
                <div>
                  Fichiers <br /> nécessaires
                </div>
                <div>DXF, IGES, STEP ou autres supports</div>
              </div>
            </div>
          </div>
          <div className="laser-cutting-image-2d">
            <Carousel
              responsive={responsive}
              infinite
              showDots={false}
              autoPlay
              arrows={!isMobile}
              swipeable
            >
              <div>
                <img src={Rapido} alt="Machine TruLaser 1" />
              </div>
              <div>
                <img src={Rapidofermé} alt="Machine TruLaser 1" />
              </div>
              <div>
                <img src={AlphaOpen} alt="Machine TruLaser 2" />
              </div>
              <div>
                <img src={AlphaClosed} alt="Machine TruLaser 2" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      {/* Conteneur global pour la découpe laser à plat avec disposition inversée */}
      <div className="laser2d-section">
        <div className="two-col equipment flex justify-evenly align-center mt-5 reverse-layout">
          <div className="laser-cutting-image-2d">
            <Carousel
              responsive={responsive}
              infinite
              showDots={false}
              autoPlay
              arrows={!isMobile}
              swipeable
            >
              <div>
                <img src={BystarExt} alt="Machine TruLaser 1" />
              </div>
              <img src={BysPrintFront} alt="Machine TruLaser 2" />
              <div>
                <img src={BysPrintExt} alt="Machine TruLaser 2" />
              </div>
              <div>
                <img src={BysPrintExt2} alt="Machine TruLaser 2" />
              </div>
            </Carousel>
          </div>
          <div className="l-col txt-col">
            <h3 className="ttl_2 slices-in text-cut-up">
              Tables de découpe Laser 3 axes
            </h3>
            <p>à commande numérique</p>
            <p>
              Capable de traiter des tôles de différentes épaisseurs avec une
              qualité de coupe nette et précise, cela garantit des résultats
              fiables à chaque coupe.
              <br />
              <br />
              Une solution idéale pour les séries, les prototypes ou les
              productions sur mesure.
            </p>
            <div className="technical-details mt-2">
              <div className="row">
                <div>Machines</div>
                <div>
                  Bystronic / Bystar 4020 - 4400 W
                  <br />
                  Bystronic / Bysprint 3015 - 2200 W
                </div>
              </div>
              <div className="row">
                <div>
                  Dimension <br /> maximum
                </div>
                <div>2 000 × 4 000 mm</div>
              </div>
              <div className="row">
                <div>
                  Capacité de <br /> découpe <br /> maximum
                </div>
                <div>Acier : 20 mm / Inox : 12 mm / Aluminium : 10 mm</div>
              </div>
              <div className="row">
                <div>
                  Fichiers <br /> nécessaires
                </div>
                <div>DXF, IGES, STEP ou autres supports</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conteneur global pour le pliage */}
      <div className="bending-section">
        <div className="two-col equipment flex justify-evenly align-center mt-5">
          <div className="l-col txt-col">
            <h3 className="ttl_2 slices-in text-cut-up">Pliage</h3>
            <p>à commande numérique</p>
            <p>
              Le pliage à commande numérique permet de réaliser des formes
              complexes sur une large gamme de matériaux. Elle offre une grande
              liberté de conception, tout en respectant les tolérances et les
              exigences définies par le client.
              <br />
              <br />
              Grâce à notre maîtrise du processus et à des équipements
              performants, nous répondons aux besoins de pliage les plus
              exigeants, du prototype à la grande série.
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
                  Fichiers <br /> nécessaires
                </div>
                <div>DXF, IGES, STEP ou autres supports</div>
              </div>
            </div>
          </div>
          <div className="bending-image">
            <Carousel
              responsive={responsive}
              infinite
              showDots={false}
              autoPlay
              arrows={!isMobile}
              swipeable
            >
              <div>
                <img src={prcn1} alt="Machine TruLaser 1" />
              </div>
              <div>
                <img src={ErmackExt} alt="Machine TruLaser 2" />
              </div>
              <div>
                <img src={ErmackInt} alt="Machine TruLaser 2" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      {/* Conteneur global pour la manutention avec disposition inversée */}
      <div className="manutention-section">
        <div className="two-col equipment flex justify-evenly align-center mt-5 reverse-layout">
          <div className="manutention-image">
            <Carousel
              responsive={responsive}
              infinite
              showDots={false}
              autoPlay
              arrows={!isMobile}
              swipeable
            >
              <div>
                <img src={ChariotsDroite} alt="Chariots 1" />
              </div>
              <div>
                <img src={ChariotsGauche} alt="Chariots 2" />
              </div>
              <div>
                <img src={PontRoulant} alt="Chariots 2" />
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
                <div>1 250 kg</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conteneur global pour la programmation */}
      <div className="prog-section">
        <div className="two-col equipment flex justify-evenly align-center mt-5">
          <div className="l-col txt-col">
            <h3 className="ttl_2 slices-in text-cut-up">
              Programmation 2D / 3D et Pliage
            </h3>
            <p>Sur logiciel de CAO</p>
            <p>
              La programmation des découpes et du pliage est réalisée à l’aide
              de logiciels de CAO, en s’appuyant sur les fichiers fournis par le
              client. Ces outils permettent d’anticiper les contraintes liées
              aux machines, aux matériaux, et aux formes des pièces.
              <br />
              <br />
              Chaque projet est simulé en 2D ou 3D avant fabrication, afin
              d’optimiser les parcours de coupe, d’organiser les séquences de
              pliage et de prévenir les risques de collision. Ce travail
              préparatoire garantit une production fluide, précise et conforme
              aux exigences techniques.
            </p>
            <div className="technical-details mt-2">
              <div className="row">
                <div>Logiciels</div>
                <div>
                  Tebis
                  <br />
                  Bysoft
                  <br />
                  Profil-60s-Delem
                </div>
              </div>
              <div className="row">
                <div>Usage</div>
                <div>
                  {" "}
                  3D
                  <br />
                  2D
                  <br />
                  Pliage
                </div>
              </div>
              <div className="row">
                <div>
                  Fichiers <br /> nécessaires
                </div>
                <div>DXF, DWG, STEP, IGES ou autres supports</div>
              </div>
            </div>
          </div>
          <div className="Prog-image">
            <div>
              <img src={Bureau} alt="Machine TruLaser 1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyNosMachines;
