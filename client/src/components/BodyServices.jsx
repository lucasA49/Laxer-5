import "../style/BodyServices.css";
import decoupealfa from "../assets/Image/decoupealfa.png";
import Decoupe from "../assets/Image/Decoupe.jpg";
import pieceplié from "../assets/Image/pieceplié.jpg";

function BodyNosServices() {
  return (
    <div className="services-contener">
      <div className="service-item">
        <div className="specifications">
          <ul>
            <li>1,500 mm de largeur de Tôle</li>
            <li>3,000 mm de longueur de Tole</li>
            <li>20 mm d'épaisseur de découpe sur de l'acier</li>
            <li>12 mm d'épaisseur de découpe sur de l'inox</li>
            <li>10 mm d'épaisseur de découpe sur de l'alu</li>
          </ul>
        </div>
        <div className="service-text">
          <h2>Découpe Laser 3D</h2>
          <p>
            Our 3D laser cutting workshop allows precise and customized cuts...
          </p>
        </div>
        <div className="service-image">
          <img src={decoupealfa} alt="Laser Cutting" />
        </div>
      </div>

      <div className="service-item">
        <div className="specifications">
          <ul>
            <li>1,500 mm de largeur de Tôle</li>
            <li>3,000 mm de longueur de Tole</li>
            <li>20 mm d'épaisseur de découpe sur de l'acier</li>
            <li>12 mm d'épaisseur de découpe sur de l'inox</li>
            <li>10 mm d'épaisseur de découpe sur de l'alu</li>
          </ul>
        </div>
        <div className="service-text">
          <h2>Découpe Laser</h2>
          <p>
            Our 3D laser cutting workshop allows precise and customized cuts...
          </p>
        </div>
        <div className="service-image">
          <img src={Decoupe} alt="Laser Cutting" />
        </div>
      </div>

      <div className="service-item">
        <div className="specifications">
          <ul>
            <li>1,500 mm de largeur de Tôle</li>
            <li>3,000 mm de longueur de Tole</li>
            <li>20 mm d'épaisseur de découpe sur de l'acier</li>
            <li>12 mm d'épaisseur de découpe sur de l'inox</li>
            <li>10 mm d'épaisseur de découpe sur de l'alu</li>
          </ul>
        </div>
        <div className="service-text">
          <h2>Pliage</h2>
          <p>
            Our 3D laser cutting workshop allows precise and customized cuts...
          </p>
        </div>
        <div className="service-image">
          <img src={pieceplié} alt="Laser Cutting" />
        </div>
      </div>
    </div>
  );
}

export default BodyNosServices;
