import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../style/BodyServices.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bystarinox from "../assets/Image/BystarInox.jpg";
import prcn1 from "../assets/Image/prcn1.jpg";
import pieceplié from "../assets/Image/pieceplié.jpg";
import tetealfa1 from "../assets/Image/tetealfa1.jpg";
import tetealfa2 from "../assets/Image/tetealfa2.jpg";
import tetealfa3 from "../assets/Image/tetealfa3.jpg";
import pièces2d from "../assets/Image/pièces2d.jpg";

function AnimatedNumber({ targetValue, duration }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0; // Début de l'animation
    const increment = targetValue / (duration / 10); // Calcul de l'incrément
    const interval = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setValue(targetValue);
        clearInterval(interval);
      } else {
        setValue(Math.floor(start)); // Arrondir les valeurs intermédiaires
      }
    }, 10);

    return () => clearInterval(interval); // Nettoyer à la fin
  }, [targetValue, duration]);

  return <span>{value}</span>;
}

// Définition des propTypes pour le composant AnimatedNumber
AnimatedNumber.propTypes = {
  targetValue: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
};

function BodyNosServices() {
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
    <div className="body-contener">
      <div className="services-contener">
        <div className="subheader">
          <div className="title-specifications">
            <p>Spécifications</p>
          </div>
          <div className="services-text">
            <p>Découpe Laser 5 Axes</p>
          </div>
        </div>
        <div className="service-item">
          <div className="specifications">
            <ul>
              <li>
                <span className="animated-number">
                  <AnimatedNumber targetValue={1500} duration={2000} />
                </span>{" "}
                mm de largeur de Tôle
              </li>
              <li>
                <span className="animated-number">
                  <AnimatedNumber targetValue={3000} duration={2000} />
                </span>{" "}
                mm de longueur de Tôle
              </li>
              <li>
                <span className="animated-number">
                  <AnimatedNumber targetValue={20} duration={2000} />
                </span>{" "}
                mm d'épaisseur de découpe sur de l'acier
              </li>
              <li>
                <span className="animated-number">
                  <AnimatedNumber targetValue={12} duration={2000} />
                </span>{" "}
                mm d'épaisseur de découpe sur de l'inox
              </li>
              <li>
                <span className="animated-number">
                  <AnimatedNumber targetValue={10} duration={2000} />
                </span>{" "}
                mm d'épaisseur de découpe sur de l'alu
              </li>
            </ul>
          </div>
          <div className="service-text">
            <p>
              Our 3D laser cutting workshop allows precise and customized
              cuts...
            </p>
          </div>
          <div className="carousel-container">
            <Carousel responsive={responsive} infinite showDots autoPlay>
              <div>
                <div className="carousel-image">
                  <img src={tetealfa1} alt="Découpe laser avec tête Alfa" />
                </div>
              </div>
              <div>
                <div className="carousel-image">
                  <img
                    src={tetealfa3}
                    alt="Vue détaillée de la découpe laser"
                  />
                </div>
              </div>
              <div>
                <div className="carousel-image">
                  <img
                    src={tetealfa2}
                    alt="Machine laser en cours d'utilisation"
                  />
                </div>
              </div>
            </Carousel>
          </div>
        </div>

        {/* Deuxième élément */}
        <div className="subheader">
          <div className="title-specifications">
            <p>Spécifications</p>
          </div>
          <div className="services-text">
            <p>Découpe Laser 3 Axes</p>
          </div>
        </div>
        <div className="service-item">
          <div className="specifications">
            <ul>
              <li>
                <span className="animated-number">
                  <AnimatedNumber targetValue={1500} duration={2000} />
                </span>{" "}
                mm de largeur de Tôle
              </li>
              <li>
                <span className="animated-number">
                  <AnimatedNumber targetValue={3000} duration={2000} />
                </span>{" "}
                mm de longueur de Tôle
              </li>
              <li>
                <span className="animated-number">
                  <AnimatedNumber targetValue={20} duration={2000} />
                </span>{" "}
                mm d'épaisseur de découpe sur de l'acier
              </li>
              <li>
                <span className="animated-number">
                  <AnimatedNumber targetValue={12} duration={2000} />
                </span>{" "}
                mm d'épaisseur de découpe sur de l'inox
              </li>
              <li>
                <span className="animated-number">
                  <AnimatedNumber targetValue={10} duration={2000} />
                </span>{" "}
                mm d'épaisseur de découpe sur de l'alu
              </li>
            </ul>
          </div>
          <div className="service-text">
            <p>
              Our 3D laser cutting workshop allows precise and customized
              cuts...
            </p>
          </div>
          <div className="carousel-container">
            <Carousel responsive={responsive} infinite showDots autoPlay>
              <div>
                <div className="carousel-image">
                  <img src={bystarinox} alt="Panneau en acier découpé" />
                </div>
              </div>
              <div>
                <div className="carousel-image">
                  <img src={pièces2d} alt="Pièces 2D découpées au laser" />
                </div>
              </div>
            </Carousel>
          </div>
        </div>

        {/* Troisième élément */}
        <div className="subheader">
          <div className="title-specifications">
            <p>Spécifications</p>
          </div>
          <div className="services-text">
            <p>Pliage</p>
          </div>
        </div>
        <div className="service-item">
          <div className="specifications">
            <ul>
              <li>
                <span className="animated-number">
                  <AnimatedNumber targetValue={1500} duration={2000} />
                </span>{" "}
                mm de largeur de Tôle
              </li>
              <li>
                <span className="animated-number">
                  <AnimatedNumber targetValue={3000} duration={2000} />
                </span>{" "}
                mm de longueur de Tôle
              </li>
              <li>
                <span className="animated-number">
                  <AnimatedNumber targetValue={20} duration={2000} />
                </span>{" "}
                mm d'épaisseur de découpe sur de l'acier
              </li>
              <li>
                <span className="animated-number">
                  <AnimatedNumber targetValue={12} duration={2000} />
                </span>{" "}
                mm d'épaisseur de découpe sur de l'inox
              </li>
              <li>
                <span className="animated-number">
                  <AnimatedNumber targetValue={10} duration={2000} />
                </span>{" "}
                mm d'épaisseur de découpe sur de l'alu
              </li>
            </ul>
          </div>
          <div className="service-text">
            <p>
              Our 3D laser cutting workshop allows precise and customized
              cuts...
            </p>
          </div>
          <div className="carousel-container">
            <Carousel responsive={responsive} infinite showDots autoPlay>
              <div>
                <div className="carousel-image">
                  <img src={pieceplié} alt="Pièce pliée avec précision" />
                </div>
              </div>
              <div>
                <div className="carousel-image">
                  <img src={prcn1} alt="Résultat final d'une pièce pliée" />
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyNosServices;
