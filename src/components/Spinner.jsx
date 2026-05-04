import "../style/Spinner.css";

export default function Spinner() {
  return (
    <div className="spinner-container">
      <div className="spinner-inner">
        <div className="spinner-word">
          <span className="spinner-letter">L</span>
          <span className="spinner-letter">A</span>
          <span className="spinner-letter red">X</span>
          <span className="spinner-letter">E</span>
          <span className="spinner-letter">R</span>
          <span className="spinner-letter">&nbsp;</span>
          <span className="spinner-letter red">5</span>
        </div>
        <div className="spinner-bar"></div>
      </div>
    </div>
  );
}