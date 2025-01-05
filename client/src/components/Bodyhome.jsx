import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import "../style/Bodyhome.css";
import BystarInox from "../assets/Image/BystarInox.jpg";
import tetealfa3 from "../assets/Image/tetealfa3.jpg";
import pieceplié from "../assets/Image/pieceplié.jpg";
import scrolldownicon from "../assets/Image/scrolldownicon.png";
import logolauréatREvendée from "../assets/Image/logolauréatREvendée.png";

function Bodyhome() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.muted = true;
      video.autoplay = true;
      video.loop = true;

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Autoplay bloqué. Tentative après interaction :", error);

          const enableAutoplay = () => {
            video
              .play()
              .catch((err) => console.error("Échec de lecture :", err));
            window.removeEventListener("click", enableAutoplay);
            window.removeEventListener("scroll", enableAutoplay);
          };

          window.addEventListener("click", enableAutoplay);
          window.addEventListener("scroll", enableAutoplay);
        });
      }
    }
  }, []);

  return (
    <div className="bodyhome">
      <div className="header">
        <div className="intro-container">
          <div className="text-section">
            <h1>LAXER 5</h1>
            <h2>Spécialiste</h2>
            <h2>
              <span className="highlight">Découpe laser 2D / 3D</span>
            </h2>
            <h2>Pliage de haute précision.</h2>
            <h2>Près de Nantes</h2>
            <img
              className="scrolldown"
              src={scrolldownicon}
              alt="défilement vers le bas"
            />
          </div>
        </div>
      </div>

      <h2 className="services-title">Découvrez Nos Services</h2>
      <div className="cards-container">
        <div className="card-container">
          <div className="card">
            <div className="img-content">
              <img src={tetealfa3} alt="Découpe Laser 3D" />
            </div>
            <div className="content">
              <h3 className="heading">Découpe Laser 3D</h3>
              <p>
                Nous proposons des solutions de découpe laser de haute précision
                sur tous types de métaux : acier, aluminium, etc.
              </p>
            </div>
            <div className="button-container">
              <Link to="/services" className="discover-button">
                Découvrir ➜
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="img-content">
              <img src={BystarInox} alt="Découpe Laser 2D" />
            </div>
            <div className="content">
              <h3 className="heading">Découpe Laser 2D</h3>
              <p>
                Prototypage à la production en série, même pour les projets les
                plus complexes.
              </p>
            </div>
            <div className="button-container">
              <Link to="/services" className="discover-button">
                Découvrir ➜
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="img-content">
              <img src={pieceplié} alt="Pliage de tôle" />
            </div>
            <div className="content">
              <h3 className="heading">Pliage</h3>
              <p>
                En complément de la découpe laser, nous couvrons vos besoins en
                pliage sur mesure grâce à notre parc de machines dédiées.
              </p>
            </div>
            <div className="button-container">
              <Link to="/services" className="discover-button">
                Découvrir ➜
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Conteneur Réseau Entreprendre */}
      <div className="MainContainer">
        {/* Conteneur principal avec le texte et bouton */}
        {/* Conteneur Réseau Entreprendre */}
        <div className="ContainerREntreprendre">
          <div className="ContentREntreprendre">
            <h2>EN 2008, LAXER 5 FUT LAURÉAT DU RÉSEAU ENTREPRENDRE :</h2>
            <p>
              Un réseau reconnu d'utilité publique, des chefs d'entreprise
              bénévoles et une équipe opérationnelle au service de l'emploi et
              du développement économique.
            </p>
            <a
              href="https://www.reseau-entreprendre.org"
              target="_blank"
              rel="noopener noreferrer"
              className="buttonEntreprendre"
            >
              RESEAU-ENTREPRENDRE.ORG
            </a>
          </div>
          <div className="logoEntreprendre">
            <img
              src={logolauréatREvendée}
              alt="Lauréat Réseau Entreprendre Vendée"
            />
          </div>
        </div>

        {/* Conteneur à droite avec la map et texte */}
        <div className="ContainerMap">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3370.290067219896!2d-0.9327339232179104!3d46.98627533060736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480643263460aa87%3A0x2293ea6c16d4474b!2sLaxer%205!5e1!3m2!1sfr!2sfr!4v1733217247972!5m2!1sfr!2sfr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Laxer 5 Location"
            >
              {" "}
            </iframe>
          </div>
          <div className="callToAction">
            <h3>Vous avez un projet  ?</h3>
            <p>
              Contactez-nous dès aujourd’hui pour discuter de vos besoins
              <br />
              et découvrir comment nous pouvons vous accompagner
              <br />
              dans vos ambitions !
            </p>
            <a href="/contact" className="ctbutton">
              Contactez-nous ➜
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bodyhome;
