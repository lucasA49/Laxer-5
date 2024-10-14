import "../style/BodyNosMachines.css";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "react";
import prcn1 from "../assets/Image/prcn1.jpg";
import tetebystar from "../assets/Image/tetebystar.jpg";
import tetebysprint from "../assets/Image/tetebysprint.jpg";
import tetealfa3 from "../assets/Image/tetealfa3.jpg";

function BodyNosMachines() {
  return (
    <div className="laser-cutting-container">
      {/* Conteneur pour la découpe laser */}
      <div className="laser-cutting-content">
        <div className="laser-cutting-text">
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

            <div className="spec-items capacity">
              <span className="spec-title">Capacité de découpe maximum</span>
              <p>
                Acier : 25 mm / Inox : 15 mm / Aluminium : 12 mm / Galva : 4 mm
              </p>
            </div>

            <div className="spec-items files">
              <span className="spec-title">Fichiers nécessaires</span>
              <p>
                DXF, DWG, STEP ou autres supports : de la pièce unitaire à la
                petite série.
              </p>
            </div>
          </div>
        </div>

        <div className="laser-cutting-image">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <img src={tetebysprint} alt="Machine TruLaser 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={tetebystar} alt="Machine TruLaser 2" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Conteneur pour la découpe 5 axes */}
      <div className="laser-cutting-content">
        <div className="laser-cutting-text">
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

            <div className="spec-items capacity">
              <span className="spec-title">Capacité de découpe maximum</span>
              <p>Acier : 20 mm / Inox : 10 mm / Aluminium : 8 mm</p>
            </div>

            <div className="spec-items files">
              <span className="spec-title">Fichiers nécessaires</span>
              <p>DXF, DWG, STEP ou autres supports.</p>
            </div>
          </div>
        </div>

        <div className="laser-cutting-image">
          <img src={tetealfa3} alt="Machine 5 axes" />
        </div>
      </div>

      {/* Conteneur pour les plieuses */}
      <div className="laser-cutting-content">
        <div className="laser-cutting-text">
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

        <div className="laser-cutting-image">
          <img src={prcn1} alt="Machine Plieuse" />
        </div>
      </div>
    </div>
  );
}

export default BodyNosMachines;
