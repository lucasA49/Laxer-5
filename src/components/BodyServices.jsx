import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import "../style/BodyServices.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useMediaQuery } from "react-responsive";
import Bystar2 from "../assets/Image/Bystar2.jpg";
import Bystar3 from "../assets/Image/Bystar3.jpg";
import pieceplié2 from "../assets/Image/pieceplié2.png";
import pieceplié3 from "../assets/Image/pieceplié3.png";
import pieceplié4 from "../assets/Image/pieceplié4.png";
import pieceplié5 from "../assets/Image/pieceplié5.png";
import pieceplié6 from "../assets/Image/pieceplié6.png";
import tetealfa1 from "../assets/Image/tetealfa1.jpg";
import tetealfa2 from "../assets/Image/tetealfa2.jpg";
import tetealfa3 from "../assets/Image/tetealfa3.jpg";
import découpe2dpcs from "../assets/Image/découpe2dpcs.jpg";

function AnimatedNumber({ targetValue, duration }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = targetValue / (duration / 10);
    const interval = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setValue(targetValue);
        clearInterval(interval);
      } else {
        setValue(Math.floor(start));
      }
    }, 10);

    return () => clearInterval(interval);
  }, [targetValue, duration]);

  return <span>{value}</span>;
}

AnimatedNumber.propTypes = {
  targetValue: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
};

export default function BodyNosServices() {
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

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="body-contener">
      <div className="services-contener">
        {/* Découpe laser 3D */}
        <div className="subheader">
          <div className="title-specifications">
            <p>Spécifications</p>
          </div>
          <div className="service-title" id="decoupe-laser-3d">
            <h2>Découpe Laser 3D</h2>
          </div>
        </div>

        <div className="service-item">
          <div className="specifications">
            <ul>
              <li className="with-offset-border-3d">
                <span className="animated-number">
                  <AnimatedNumber targetValue={3000} duration={2000} />
                </span>{" "}
                mm de longueur en X
              </li>
              <li>
                <span className="animated-number">
                  <AnimatedNumber targetValue={2000} duration={2000} />
                </span>{" "}
                mm de largeur en Y
              </li>
              <li>
                <span className="animated-number">
                  <AnimatedNumber targetValue={750} duration={2000} />
                </span>{" "}
                mm de hauteur en Z
              </li>
            </ul>
          </div>

          <div className="service-text">
            <p>
              Depuis 2008, nous sommes spécialisés dans la découpe laser 3D 5 axes,
              une technologie avancée qui permet de réaliser des découpes complexes
              avec une grande précision. Grâce à plus de 15 ans d&apos;expérience
              et à un parc machines moderne, nous répondons aux besoins les plus
              exigeants, qu&apos;il s&apos;agisse de pièces unitaires ou de grandes
              séries. Nous intervenons dans divers secteurs, tels que l&apos;automobile,
              le prototypage et l&apos;industrie en général, pour la découpe de pièces
              embouties, profilés et géométries complexes. Basés à Mortagne-sur-Sèvre,
              entre Cholet et Nantes (Vendée), nous accompagnons des clients dans le
              Grand Ouest et dans toute la France.
            </p>
          </div>

          <div className="carousel-container">
            <Carousel
              responsive={responsive}
              infinite
              showDots={false}
              autoPlay
              arrows={!isMobile}
              swipeable
            >
              <div>
                <div className="carousel-image">
                  <img
                    src={tetealfa1}
                    alt="Découpe laser 3D 5 axes sur pièce emboutie"
                  />
                </div>
              </div>
              <div>
                <div className="carousel-image">
                  <img
                    src={tetealfa3}
                    alt="Vue détaillée de la tête de découpe laser 3D"
                  />
                </div>
              </div>
              <div>
                <div className="carousel-image">
                  <img
                    src={tetealfa2}
                    alt="Machine de découpe laser 3D en production"
                  />
                </div>
              </div>
            </Carousel>
          </div>

          <div className="title-specification-mobile">
            <p>Spécifications</p>
          </div>
        </div>

        {/* Découpe laser 2D */}
        <div className="subheader">
          <div className="title-specifications">
            <p>Spécifications</p>
          </div>
          <div className="service-title" id="decoupe-laser-2d">
            <h2>Découpe Laser 2D</h2>
          </div>
        </div>

        <div className="service-item">
          <div className="specifications-2d">
            <ul>
              <li>
                <span className="animated-number">
                  <AnimatedNumber targetValue={2000} duration={2000} />
                </span>{" "}
                mm de largeur de tôle
              </li>
              <li>
                <span className="animated-number">
                  <AnimatedNumber targetValue={4000} duration={2000} />
                </span>{" "}
                mm de longueur de tôle
              </li>
              <li>
                <span className="animated-number">
                  <AnimatedNumber targetValue={20} duration={2000} />
                </span>{" "}
                mm d&apos;épaisseur de découpe sur acier
              </li>
              <li>
                <span className="animated-number">
                  <AnimatedNumber targetValue={12} duration={2000} />
                </span>{" "}
                mm d&apos;épaisseur de découpe sur inox
              </li>
              <li>
                <span className="animated-number">
                  <AnimatedNumber targetValue={10} duration={2000} />
                </span>{" "}
                mm d&apos;épaisseur de découpe sur aluminium
              </li>
            </ul>
          </div>

          <div className="service-text">
            <p>
              Spécialisés dans la découpe laser 2D depuis plusieurs années, nous
              offrons des solutions de découpe précises et rapides sur une large
              gamme de matériaux, tels que l&apos;acier, l&apos;inox et l&apos;aluminium.
              Nos équipements modernes permettent de traiter des tôles de différentes
              épaisseurs avec une grande précision, garantissant des résultats de
              haute qualité pour des pièces unitaires ou des séries.
              La découpe 2D est idéale pour des applications nécessitant des découpes
              nettes et rapides, avec une finition soignée et conforme aux spécifications techniques de chaque projet.
              Installés à Mortagne-sur-Sèvre, nous travaillons autant pour
              des entreprises locales autour de Cholet et Nantes que pour des clients
              partout en France.
            </p>
          </div>

          <div className="carousel-container">
            <Carousel
              responsive={responsive}
              infinite
              showDots={false}
              autoPlay
              arrows={!isMobile}
              swipeable
            >
              <div>
                <div className="carousel-image">
                  <img
                    src={Bystar2}
                    alt="Découpe laser 2D de tôle acier sur machine Bystar"
                  />
                </div>
              </div>
              <div>
                <div className="carousel-image">
                  <img
                    src={Bystar3}
                    alt="Table de découpe laser 2D en production"
                  />
                </div>
              </div>
              <div>
                <div className="carousel-image">
                  <img
                    src={découpe2dpcs}
                    alt="Pièces 2D découpées au laser prêtes pour la tôlerie"
                  />
                </div>
              </div>
            </Carousel>
          </div>

          <div className="title-specification-mobile">
            <p>Spécifications</p>
          </div>
        </div>

        {/* Pliage */}
        <div className="subheader">
          <div className="title-specifications">
            <p>Spécifications</p>
          </div>
          <div className="service-title" id="pliage">
            <h2>Pliage</h2>
          </div>
        </div>

        <div className="service-item">
          <div className="specifications-pliage">
            <ul>
              <li className="with-offset-border-pliage">
                <span className="animated-number">
                  <AnimatedNumber targetValue={3100} duration={2000} />
                </span>{" "}
                mm de longueur de pliage maximum
              </li>

              <li>
                <span className="animated-number">
                  <AnimatedNumber targetValue={160} duration={2000} />
                </span>{" "}
                tonnes de pliage maximum
              </li>
            </ul>
          </div>

          <div className="service-text">
            <p>
              Notre service de pliage complète idéalement la découpe laser 2D,
              vous offrant des pièces découpées et pliées dans un état fini, prêtes
              à l&apos;emploi. Grâce à des équipements modernes, nous réalisons des
              pliages complexes avec une grande précision, qu&apos;il s&apos;agisse de
              petites séries ou de productions plus importantes. Le pliage permet de
              donner aux pièces métalliques des formes spécifiques tout en respectant
              des tolérances strictes. Nous assurons une parfaite coordination entre
              la découpe laser 2D et le pliage pour des sous-ensembles de tôlerie
              industrielle conformes aux exigences de vos projets.
            </p>
          </div>

          <div className="carousel-container">
            <Carousel
              responsive={responsive}
              infinite
              showDots={false}
              autoPlay
              arrows={!isMobile}
              swipeable
            >
              <div>
                <div className="carousel-image">
                  <img
                    src={pieceplié2}
                    alt="Pièce de tôlerie pliée sur presse plieuse"
                  />
                </div>
              </div>
              <div>
                <div className="carousel-image">
                  <img
                    src={pieceplié3}
                    alt="Série de pièces pliées pour l'industrie"
                  />
                </div>
              </div>
              <div>
                <div className="carousel-image">
                  <img
                    src={pieceplié4}
                    alt="Détail d'une pièce pliée de précision"
                  />
                </div>
              </div>
              <div>
                <div className="carousel-image">
                  <img
                    src={pieceplié5}
                    alt="Pièces métalliques pliées prêtes à l'assemblage"
                  />
                </div>
              </div>
              <div>
                <div className="carousel-image">
                  <img
                    src={pieceplié6}
                    alt="Exemple de pliage complexe de tôle"
                  />
                </div>
              </div>
            </Carousel>
          </div>

          <div className="title-specification-mobile">
            <p>Spécifications</p>
          </div>
        </div>
      </div>
    </div>
  );
}