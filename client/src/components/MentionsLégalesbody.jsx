import { Link } from "react-router-dom";
import "../style/MentionsLégales.css";

function MentionsLégalesbody() {
  return (
    <div className="container-central">
      <div className="mentions-legales">
        <h2>Mentions légales</h2>
        <p>
          LAXER 5 - ZI de Maunit - 134 rue des Pâtis - 85290 Mortagne-sur-Sèvre
        </p>
        <p>
          GRATON Jean-Paul
          <br />
          RCS : 504860206
          <br />
          Tribunal compétent : LA ROCHE SUR YON
          <br />
          TVA Intracommunautaire : FR29504860206
        </p>
        <p>
          Tél. 02 51 57 65 15
          <br />
          Email :{" "}
          <Link to="mailto:jp.graton@laxer5.fr">jp.graton@laxer5.fr</Link>
        </p>
        <h3>Hébergeur :</h3>
        <p>
          ADISTA - 1 rue de la Presse - 42950 Saint-Etienne
          <br />
          Tél. : (33) 0811 856 810*
          <br />
          *Prix d’un appel local
        </p>
        <p>Propriété du site Laxer 5 ou son cessionnaire</p>
      </div>
    </div>
  );
}

export default MentionsLégalesbody;
