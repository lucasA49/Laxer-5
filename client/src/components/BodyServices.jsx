import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../style/BodyServices.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useMediaQuery } from "react-responsive";
import bystarinox from "../assets/Image/BystarInox.jpg";
import pieceplié2 from "../assets/Image/pieceplié2.jpg";
import pieceplié3 from "../assets/Image/pieceplié3.jpg";
import pieceplié4 from "../assets/Image/pieceplié4.jpg";
import pieceplié5 from "../assets/Image/pieceplié5.jpg";
import pieceplié6 from "../assets/Image/pieceplié6.jpg";
import pieceplié7 from "../assets/Image/pieceplié7.jpg";
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
    <div className="body-contener">
      <div className="services-contener">
        <div className="subheader">
          <div className="title-specifications">
            <p>Spécifications</p>
          </div>
          <div className="service-title">
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
              Depuis 2008, nous sommes spécialisés dans la découpe laser 3D, une
              technologie avancée qui permet de réaliser des découpes complexes
              avec une précision exceptionnelle. Grâce à plus de 15 ans
              d'expérience et à un parc machines moderne, nous répondons aux
              besoins les plus exigeants, qu'il s'agisse de pièces unitaires ou
              de grandes séries. Nous intervenons dans divers secteurs, tels que
              l’automobile, le prototypage, l’industrie mécanique etc. Nous
              garantissons des résultats impeccables, parfaitement adaptés aux
              spécifications de chaque projet. Faites confiance à notre
              expertise pour vos besoins en découpe laser 3D et bénéficiez de
              solutions sur mesure.{" "}
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
          <div className="title-specification-mobile">
            <p>Spécifications</p>
          </div>
        </div>

        {/* Deuxième élément */}
        <div className="subheader">
          <div className="title-specifications">
            <p>Spécifications</p>
          </div>
          <div className="service-title">
            <p>Découpe Laser 3 Axes</p>
          </div>
        </div>
        <div className="service-item">
          <div className="specifications">
            <ul>
              <li>
                <span className="animated-number">
                  <AnimatedNumber targetValue={2000} duration={2000} />
                </span>{" "}
                mm de largeur de Tôle
              </li>
              <li>
                <span className="animated-number">
                  <AnimatedNumber targetValue={4000} duration={2000} />
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
              Spécialisés dans la découpe 2D depuis plusieurs années, nous
              offrons des solutions de découpe laser précises et rapides sur une
              large gamme de matériaux, tels que l’acier, l’acier inoxydable,
              l’aluminium et d’autres métaux non ferreux. Nos équipements
              modernes permettent de traiter des tôles de différentes épaisseurs
              avec une grande précision, garantissant des résultats de haute
              qualité pour des pièces unitaires ou des séries. La découpe 2D est
              idéale pour des applications nécessitant des découpes nettes et
              rapides, avec une finition soignée et conforme aux spécifications
              techniques de chaque projet.
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
          <div className="title-specification-mobile">
            <p>Spécifications</p>
          </div>
        </div>

        {/* Troisième élément */}
        <div className="subheader">
          <div className="title-specifications">
            <p>Spécifications</p>
          </div>
          <div className="service-title">
            <p>Pliage</p>
          </div>
        </div>
        <div className="service-item">
          <div className="specifications-pliage">
            <ul>
              <li>
                <span className="animated-number">
                  <AnimatedNumber targetValue={3000} duration={2000} />
                </span>{" "}
                mm de longeur de Tôle
              </li>

              <li>
                <span className="animated-number">
                  <AnimatedNumber targetValue={20} duration={2000} />
                </span>{" "}
                mm d'épaisseur de pliage sur de l'acier
              </li>
              <li>
                <span className="animated-number">
                  <AnimatedNumber targetValue={12} duration={2000} />
                </span>{" "}
                mm d'épaisseur de pliage sur de l'inox
              </li>
              <li>
                <span className="animated-number">
                  <AnimatedNumber targetValue={10} duration={2000} />
                </span>{" "}
                mm d'épaisseur de pliage sur de l'alu
              </li>
            </ul>
          </div>
          <div className="service-text">
            <p>
              Notre service de pliage complète idéalement la découpe 2D, vous
              offrant des pièces découpées et pliées dans un état fini, prêtes à
              l’emploi. Grâce à des équipements modernes, nous réalisons des
              pliages complexes avec une grande précision, qu’il s’agisse de
              petites séries ou de productions plus importantes. Le pliage
              permet de donner aux pièces métalliques des formes spécifiques,
              tout en respectant des tolérances strictes et en garantissant une
              finition impeccable. Nous assurons une parfaite coordination entre
              la découpe 2D et le pliage pour des résultats de qualité, rapides
              et conformes aux exigences de votre projet.
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
                  <img src={pieceplié2} alt="Pièce pliée avec précision" />
                </div>
              </div>
              <div>
                <div className="carousel-image">
                  <img src={pieceplié3} alt="Pièce pliée avec précision" />
                </div>
              </div>
              <div>
                <div className="carousel-image">
                  <img src={pieceplié4} alt="Pièce pliée avec précision" />
                </div>
              </div>
              <div>
                <div className="carousel-image">
                  <img src={pieceplié5} alt="Pièce pliée avec précision" />
                </div>
              </div>
              <div>
                <div className="carousel-image">
                  <img src={pieceplié6} alt="Pièce pliée avec précision" />
                </div>
              </div>
              <div>
                <div className="carousel-image">
                  <img src={pieceplié7} alt="Pièce pliée avec précision" />
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

export default BodyNosServices;
