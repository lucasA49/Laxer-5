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
          <img className="Acceuil1" src={Acceuil1} alt="Découpe laserpliage" />
        </div>
      </div>

      <div className="scrolldown">
        <img
          className="scrolldown"
          src={scrolldownicon}
          alt="defile vers le bas"
        />
      </div>

      <h2 className="services-title">Nos Services</h2>

      <div className="service-card laser3d">
        <div className="service-content">
          <h3>Découpe Laser 3D</h3>
          <p>
            Nous proposons des solutions de découpe laser de haute précision sur
            tous types de métaux : acier, aluminium. Grâce à la variété du
            prototypage à la production en série du plus standard au plus
            spécifique et complexe.
          </p>
          <nav className="arrow">
            <Link to="/services"> Découvrir ➜</Link>
          </nav>
        </div>
        <img className="Decoupe" src={decoupealfa} alt="Découpe laser" />
      </div>

      <div className="service-card laser">
        <div className="service-content">
          <h3>Découpe Laser</h3>
          <p>
            Nous proposons des solutions de découpe laser de haute précision sur
            tous types de métaux : acier, aluminium. Grâce à la variété du
            prototypage à la production en série du plus standard au plus
            spécifique et complexe.
          </p>
          <nav className="arrow">
            <Link to="/services"> Découvrir ➜</Link>
          </nav>
        </div>
        <img className="Decoupe" src={Decoupe} alt="Découpe laser" />
      </div>

      <div className="service-card pliage">
        <div className="service-content">
          <h3>Pliage</h3>
          <p>
            En complément de la découpe laser, nous couvrons également vos
            besoins en pliage de tôle sur mesure grâce à notre parc de machines
            dédiées.
          </p>
          <nav className="arrow1">
            <Link to="/services"> Découvrir ➜</Link>
          </nav>
        </div>
        <img className="pliage" src={pieceplié} alt="Pliage" />
      </div>
    </div>
  );
}

export default Bodyhome;
