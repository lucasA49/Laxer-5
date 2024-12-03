import { useState } from "react";

import emailjs from "@emailjs/browser";

import "../style/bodycontact.css";
import mail from "../assets/icone/email.png";
import localisation from "../assets/icone/location.png";
import phone from "../assets/icone/phone.png";

function BodyContact() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [notification, setNotification] = useState("");

  const sendFeedback = (serviceId, templateId, variables) => {
    emailjs
      .send(serviceId, templateId, variables, "LniQmCfChS_KX6zQX")
      .then(() => {
        setNotification(
          "Votre demande a bien été envoyée et nous vous répondrons dans les meilleurs délais."
        );
        setTimeout(() => setNotification(""), 5000); // Masquer la notification après 5 secondes
      })
      .catch(() => {
        setNotification(
          "Échec de l'envoi de votre demande. Veuillez réessayer."
        );
        setTimeout(() => setNotification(""), 5000); // Masquer la notification après 5 secondes
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateId = "template_9cygyff";
    const serviceId = "service_w9e9eqs";
    sendFeedback(serviceId, templateId, {
      firstName: formData.firstName,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
    });

    e.target.reset(); // Réinitialiser le formulaire après envoi
  };

  return (
    <div className="container-body">
      <div className="contact-container">
        {/* Section gauche : contact-info et carte */}
        <div className="contact-left">
          <div className="contact-info">
            <h2>Nous Contacter</h2>
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

          {/* Nouvelle section Map */}
          <div className="contact-map">
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
        </div>
        {/* Section droite : formulaire */}
        <div className="contact-form">
          <h2>Contact</h2>

          {notification && <div className="notification">{notification}</div>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="Nom Prénom"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Téléphone"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Votre message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <input type="file" id="file" />
            <button type="submit">Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BodyContact;
