import "../style/bodycontact.css";
import mail from "../assets/icone/email.png";
import localisation from "../assets/icone/location.png";
import phone from "../assets/icone/phone.png";

function Bodycontact() {
  return (
    <div className="container-body">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Nous Contactez</h2>
          <p>Contactez-nous en remplissant le formulaire suivant.</p>
          <ul>
            <li>
              <img
                className="locationicone"
                src={localisation}
                alt="Icône localisation"
              />
              ZI de Maunit - 134 rue des Pâtis
            </li>
            <li className="mortagnesursevre">Mortagne-sur-Sèvre</li>
            <li>
              <img className="mailicone" src={mail} alt="Icône email" />
              jp.graton@laxer5.fr
            </li>
            <li>
              <img className="phoneicone" src={phone} alt="Icône téléphone" />
              02 51 57 65 15
            </li>
          </ul>
        </div>

        <div className="contact-form">
          <h2>Contact</h2>
          <form>
            <input type="text" placeholder="Nom Prénom" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Téléphone" />
            <textarea placeholder="Votre message" />
            {/* <textarea placeholder="Votre message"> </textarea> */}
            <input type="file" id="file" />
            <button type="submit">Envoyé</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Bodycontact;
