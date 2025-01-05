import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import "../style/Bodyhome.css";
import Vidéotest from "../assets/Image/Vidéotest.mp4";
import BystarInox from "../assets/Image/BystarInox.jpg";
import tetealfa3 from "../assets/Image/tetealfa3.jpg";
import pieceplié from "../assets/Image/pieceplié.jpg";
import scrolldownicon from "../assets/Image/scrolldownicon.png";

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

          <div className="video-section">
            <video
              ref={videoRef}
              src={Vidéotest}
              className="header-video"
              playsInline
              autoPlay
              muted
              loop
            >
              <track
                kind="descriptions"
                label="Aucune description disponible"
                srcLang="fr"
              />
            </video>
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
    </div>
  );
}

export default Bodyhome;
