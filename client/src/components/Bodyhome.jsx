import { Link } from "react-router-dom";
import "../style/Bodyhome.css";
import Acceuil1 from "../assets/Image/Acceuil.png";
import Decoupe from "../assets/Image/Decoupe.jpg";
import decoupealfa from "../assets/Image/decoupealfa.png";
import pieceplié from "../assets/Image/pieceplié.jpg";
import scrolldownicon from "../assets/Image/scrolldownicon.png";

function Bodyhome() {
  return (
    <div className="bodyhome">
      <div className="header">
        <div className="text-content">
          <h1 className="typewriter">LAXER 5,</h1>
          <h2 className="typewriter delay-1">Spécialiste</h2>
          <h2 className="typewriter delay-2">
            <span className="highlight">Découpe laser 2D / 3D</span>
          </h2>
          <h2 className="typewriter delay-3">Pliage de haute précision.</h2>
          <h2 className="typewriter delay-4">Près de Nantes</h2>
        </div>

        <div className="header-images">
          <img className="Acceuil1" src={Acceuil1} alt="Découpe laser pliage" />
        </div>
      </div>

      <div className="scrolldown">
        <img
          className="scrolldown"
          src={scrolldownicon}
          alt="défilement vers le bas"
        />
      </div>

      <h2 className="services-title">Nos Services</h2>

      <div className="card-container">
        <div className="card">
          <div className="img-content">
            <img src={decoupealfa} alt="Découpe Laser 3D" />
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
            <img src={Decoupe} alt="Découpe Laser 2D" />
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
  );
}

export default Bodyhome;
