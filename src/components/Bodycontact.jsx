const API_URL = import.meta.env.VITE_API_URL ?? "https://api.laxer5.fr";
import { useRef, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import "../style/bodycontact.css";

const MAX_FILES = 10;

export default function BodyContact() {
  const fileInputRef = useRef(null);
  const obsRefs = useRef({});
  const [visible, setVisible] = useState({});
  const [notification, setNotification] = useState("");
  const [formData, setFormData] = useState({
    firstName: "", email: "", phone: "", message: "", fichiers: [],
  });

  /* Intersection Observer */
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) setVisible(v => ({ ...v, [e.target.dataset.id]: true }));
      }),
      { threshold: 0.1 }
    );
    Object.values(obsRefs.current).forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const reg = (id, el) => { obsRefs.current[id] = el; el?.setAttribute("data-id", id); };
  const v = (id) => visible[id] ? " is-visible" : "";

  /* Handlers */
  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFormData(p => ({ ...p, [name]: value }));
  };

  const handleFileChange = (e) => {
    const selected = Array.from(e.target.files || []);
    const merged = [...formData.fichiers, ...selected];
    const seen = new Set();
    const dedup = [];
    for (const f of merged) {
      const key = `${f.name}-${f.size}`;
      if (!seen.has(key)) { seen.add(key); dedup.push(f); }
    }
    const capped = dedup.slice(0, MAX_FILES);
    if (dedup.length > MAX_FILES) setNotification(`Maximum ${MAX_FILES} fichiers.`);
    else setNotification("");
    setFormData(p => ({ ...p, fichiers: capped }));
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleRemoveFile = (index) => {
    setFormData(p => ({ ...p, fichiers: p.fichiers.filter((_, i) => i !== index) }));
    if (fileInputRef.current) fileInputRef.current.value = "";
    setNotification("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("firstName", formData.firstName);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("message", formData.message);
    formData.fichiers.forEach(f => form.append("fichiers", f));
    try {
      const res = await fetch(`${API_URL}/api/contact`, { method: "POST", body: form });
      const data = await res.json();
      setNotification(data.message || "Message envoyé avec succès.");
      e.target.reset();
      if (fileInputRef.current) fileInputRef.current.value = "";
      setFormData({ firstName: "", email: "", phone: "", message: "", fichiers: [] });
    } catch {
      setNotification("Échec de l'envoi. Veuillez réessayer.");
    }
    setTimeout(() => setNotification(""), 5000);
  };

  const formatTelFR = (digits) => {
    const d = (digits || "").replace(/\D/g, "").slice(0, 10);
    return d.replace(/(\d{2})(?=\d)/g, "$1 ").trim();
  };

  return (
    <>
      <Helmet>
        <title>Contact — LAXER 5 | Découpe laser & pliage Vendée</title>
        <meta name="description" content="Contactez LAXER 5 pour un devis de découpe laser ou pliage. Réponse sous 24h." />
        <link rel="canonical" href="https://www.laxer5.fr/contact" />
      </Helmet>

      <main className="contact-page">

        {/* ══ HERO ══ */}
        <section className="cp-hero">
          <div className="cp-hero__inner">
            <span className="cp-eyebrow">Mortagne-sur-Sèvre · Vendée</span>
            <h1 className="cp-hero__title">Parlons de<br /><em>votre projet</em></h1>
            <p className="cp-hero__sub">Devis gratuit · Réponse sous 24 h · Du prototype à la série</p>
          </div>
          <div className="cp-hero__line" />
        </section>

        {/* ══ CORPS ══ */}
        <section className="cp-body" ref={el => reg("body", el)}>

          {/* Colonne gauche */}
          <div className={`cp-left${v("body")}`}>

            {/* Infos */}
            <div className="cp-info-block">
              <span className="cp-eyebrow cp-eyebrow--red">Nous trouver</span>
              <h2 className="cp-block-title">Coordonnées</h2>
              <ul className="cp-info-list">
                <li>
                  <div className="cp-info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#d10101" strokeWidth="2" width="16" height="16">
                      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <strong>Adresse</strong>
                    <span>ZI de Maunit — 134 rue des Pâtis<br />85290 Mortagne-sur-Sèvre</span>
                  </div>
                </li>
                <li>
                  <div className="cp-info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#d10101" strokeWidth="2" width="16" height="16">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <strong>Téléphone</strong>
                    <a href="tel:+33251576515">02 51 57 65 15</a>
                  </div>
                </li>
                <li>
                  <div className="cp-info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#d10101" strokeWidth="2" width="16" height="16">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:jp.graton@laxer5.fr">jp.graton@laxer5.fr</a>
                  </div>
                </li>
                <li>
                  <div className="cp-info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#d10101" strokeWidth="2" width="16" height="16">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <strong>Horaires</strong>
                    <span>Lundi–Vendredi · 8h–18h</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Carte */}
            <div className="cp-map-block">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3370.290067219896!2d-0.9327339232179104!3d46.98627533060736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480643263460aa87%3A0x2293ea6c16d4474b!2sLaxer%205!5e1!3m2!1sfr!2sfr!4v1733217247972!5m2!1sfr!2sfr"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Laxer 5 - Mortagne-sur-Sèvre"
                allowFullScreen
              />
            </div>

          </div>

          {/* Formulaire */}
          <div className={`cp-form-wrap${v("body")}`} style={{ transitionDelay: "120ms" }}>
            <div className="cp-form-header">
              <span className="cp-eyebrow cp-eyebrow--light">Formulaire de contact</span>
              <h2 className="cp-form-title">Demande de devis<br /><em>ou renseignement</em></h2>
              <p className="cp-form-sub">Décrivez votre projet, joignez vos plans (DXF, STEP, PDF) — nous revenons vers vous sous 24 h.</p>
            </div>

            <form className="cp-form" onSubmit={handleSubmit} noValidate>

              <div className="cp-form__row">
                <div className="cp-field">
                  <label htmlFor="firstName">Nom &amp; Prénom *</label>
                  <input
                    id="firstName" type="text" name="firstName"
                    placeholder="Jean Dupont"
                    value={formData.firstName}
                    onChange={handleTextChange}
                    required
                  />
                </div>
                <div className="cp-field">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email" type="email" name="email"
                    placeholder="jean@entreprise.fr"
                    value={formData.email}
                    onChange={handleTextChange}
                    required
                  />
                </div>
              </div>

              <div className="cp-field">
                <label htmlFor="phone">Téléphone</label>
                <input
                  id="phone" type="tel" name="phone"
                  placeholder="02 51 57 65 15"
                  value={formatTelFR(formData.phone)}
                  autoComplete="tel"
                  inputMode="tel"
                  onChange={(e) => {
                    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                    setFormData(p => ({ ...p, phone: digits }));
                  }}
                />
              </div>

              <div className="cp-field">
                <label htmlFor="message">Votre message *</label>
                <textarea
                  id="message" name="message"
                  placeholder="Décrivez votre projet, matière, épaisseur, quantité..."
                  value={formData.message}
                  onChange={handleTextChange}
                  required
                />
              </div>

              {/* Fichiers */}
              <div className="cp-field">
                <label>Fichiers joints <span className="cp-field__hint">(PDF, DXF, STEP, images — max {MAX_FILES})</span></label>
                <input
                  id="file" ref={fileInputRef} type="file" name="fichiers"
                  multiple accept=".pdf,.dxf,.step,.stp,.iges,.igs,.jpg,.jpeg,.png,.gif,.svg"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
                <label htmlFor="file" className="cp-file-btn">
                  <span>+</span> Ajouter des fichiers
                </label>

                {formData.fichiers.length > 0 && (
                  <div className="cp-file-list">
                    {formData.fichiers.map((f, i) => (
                      <div key={`${f.name}-${f.size}-${i}`} className="cp-file-item">
                        <span className="cp-file-name">{f.name}</span>
                        <button
                          type="button"
                          className="cp-file-remove"
                          onClick={() => handleRemoveFile(i)}
                          aria-label={`Supprimer ${f.name}`}
                        >×</button>
                      </div>
                    ))}
                  </div>
                )}

                <span className="cp-file-count">
                  {formData.fichiers.length} / {MAX_FILES} fichiers
                </span>
              </div>

              <button type="submit" className="cp-submit">
                Envoyer ma demande →
              </button>

              {notification && (
                <div className={`cp-notif${notification.includes("Échec") || notification.includes("maximum") ? " cp-notif--error" : " cp-notif--success"}`}>
                  {notification}
                </div>
              )}

            </form>
          </div>

        </section>

        {/* ══ BANDE INFO ══ */}
        <section className="cp-band" ref={el => reg("band", el)}>
          {[
            { num: "24h", label: "Délai de réponse" },
            { num: "100%", label: "Devis gratuit" },
            { num: "15+", label: "Ans d'expertise" },
            { num: "200+", label: "Clients actifs" },
          ].map((s, i) => (
            <div key={s.label} className={`cp-band__item${v("band")}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="cp-band__num">{s.num}</span>
              <span className="cp-band__label">{s.label}</span>
            </div>
          ))}
        </section>

      </main>
    </>
  );
}