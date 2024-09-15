import { Link } from "react-router-dom";
import "../style/Bodyhome.css";
import tetealfa from "../assets/Image/tetealfa.png";
import prcn from "../assets/Image/prcn.png";

function Bodyhome() {
  return (
    <div className="bodyhome">
      <div className="header">
        <h1>LAXER 5,</h1>
        <h2>
          <br />
          Spécialiste
          <span className="highlight">
            <br />
            Découpe laser 2D / 3D
            <br /> Pliage de haute précision
          </span>
          <br /> Près de Nantes
        </h2>
        <div className="header-images">
          <img className="tetealfa1" src={tetealfa} alt="Découpe laser" />
          <img className="prcn" src={prcn} alt="Machine de pliage" />
        </div>
      </div>

      <h2 className="services-title">Nos Services</h2>

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
            <Link to="/découpelaser"> Découvrir →</Link>
          </nav>
        </div>
        <img src="laser-service.jpg" alt="Découpe Laser" />
      </div>

      <div className="service-card pliage">
        <div className="service-content">
          <h3>Pliage</h3>
          <p>
            En complément de la découpe laser, nous couvrons également vos
            besoins en pliage de tôle sur mesure grâce à notre parc de machines
            dédiées.
          </p>
          <nav className="arrow">
            <Link to="/pliage"> Découvrir →</Link>
          </nav>
        </div>
        <img src="pliage-service.jpg" alt="Pliage" />
      </div>
    </div>
  );
}
export default Bodyhome;
