import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "../style/Bodycompany.css";
import logoentreprise from "../assets/Image/entreprise.jpg";

const POINTS = [
  { label: "Réactivité", desc: "Devis sous 24 h, lancement rapide — vos délais sont les nôtres." },
  { label: "Précision", desc: "Moins de 0,1 mm de tolérance, répétabilité parfaite série après série." },
  { label: "Qualité", desc: "Contrôle rigoureux à chaque étape, du fichier à la pièce finie." },
];

const TIMELINE = [
  { year: "2008", title: "Création de l'entreprise LAXER 5", text: "LAXER 5 est une entreprise spécialisée dans la découpe 5 axes et s'installe à Mortagne-sur-Sèvre, proche des grands axes." },
  { year: "2009", title: "Expansion des services", text: "LAXER 5 élargit son portefeuille de services en ajoutant la découpe laser 2D, augmentant ainsi sa capacité de production permettant de mieux répondre à la demande croissante." },
  { year: "2017", title: "Extension de l'atelier et renforcement des équipements", text: "Doublement de la superficie de l'atelier afin d'accueillir un second laser de découpe 2D, renforçant ainsi notre capacité de production et notre réactivité." },
  { year: "2019", title: "Ajout du service de pliage et évolution des équipements", text: "Mise en place d'un nouveau service de pliage grâce à l'acquisition d'une plieuse. Cette même année, le laser de découpe 2D acquis en 2009 est remplacé par une version plus récente, assurant une continuité de production performante." },
  { year: "2021", title: "Second agrandissement des locaux", text: "LAXER 5 réalise un second agrandissement afin de répondre à la croissance de l'activité et d'accompagner le développement continu de l'entreprise." },
  { year: "2022", title: "Renforcement de la découpe 3D", text: "LAXER 5 fait l'acquisition d'un nouveau laser de découpe 5 axes plus puissant et plus rapide, permettant d'optimiser la précision et les délais sur les pièces complexes en 3D." },
  { year: "2024", title: "Acquisition d'une nouvelle plieuse", text: "LAXER 5 renforce ses capacités avec l'acquisition d'une nouvelle plieuse, afin d'accompagner la montée en charge de l'activité et de répondre à une demande toujours plus soutenue." },
];

export default function Bodycompany() {
  const [visible, setVisible] = useState({});
  const [tlVisible, setTlVisible] = useState([]);
  const obsRefs = useRef({});
  const tlRefs = useRef([]);

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

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          const idx = Number(e.target.dataset.tlIdx);
          setTlVisible(prev => { const next = [...prev]; next[idx] = true; return next; });
        }
      }),
      { threshold: 0.25 }
    );
    tlRefs.current.forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const reg = (id, el) => { obsRefs.current[id] = el; el?.setAttribute("data-id", id); };
  const v = id => visible[id] ? " is-visible" : "";

  return (
    <>
      <Helmet>
        <title>Notre entreprise | LAXER 5 — Tôlerie laser industrielle</title>
        <meta name="description" content="Découvrez LAXER 5, spécialiste de la découpe laser et du pliage tôle depuis 2008. Savoir-faire, équipements modernes et fabrication sur mesure." />
        <link rel="canonical" href="https://www.laxer5.fr/entreprise" />
      </Helmet>

      <main className="co-page">

        {/* ══ 1. HERO NOIR STANDARD ══ */}
        <section className="co-hero">
          <div className="co-hero__inner">
            <span className="co-eyebrow co-eyebrow--hero">Mortagne-sur-Sèvre · Vendée · Depuis 2008</span>
            <h1 className="co-hero__title">
              <span className="co-hero__title-line">L'ENTREPRISE</span>
              <span className="co-hero__title-line co-hero__title-line--red">LAXER 5</span>
            </h1>
            <p className="co-hero__sub">
              Spécialiste en découpe laser 2D, 3D et pliage en Vendée depuis 2008
            </p>
            <div className="co-hero__meta">
              <div className="co-hero__meta-item">
                <span className="co-hero__meta-num">2008</span>
                <span className="co-hero__meta-label">Fondée en</span>
              </div>
              <div className="co-hero__meta-sep" />
              <div className="co-hero__meta-item">
                <span className="co-hero__meta-num">15+</span>
                <span className="co-hero__meta-label">Ans d'expertise</span>
              </div>
              <div className="co-hero__meta-sep" />
              <div className="co-hero__meta-item">
                <span className="co-hero__meta-num">200+</span>
                <span className="co-hero__meta-label">Clients actifs</span>
              </div>
            </div>
          </div>
          <div className="co-hero__watermark" aria-hidden="true">LAXER 5</div>
        </section>

        {/* ══ 2. IMAGE + TEXTE ══ */}
        <section className="co-intro" ref={el => reg("intro", el)}>
          <div className="co-intro__inner">
            <div className={`co-intro__img-wrap${v("intro")}`}>
              <img src={logoentreprise} alt="Atelier LAXER 5" className="co-intro__img" />
            </div>
            <div className={`co-intro__text${v("intro")}`} style={{ transitionDelay: "120ms" }}>
              <span className="co-eyebrow">L'entreprise</span>
              <h2 className="co-intro__title">Spécialiste du<br /><em>travail des métaux</em></h2>
              <p>
                LAXER 5 est une entreprise spécialisée dans la découpe et le pliage
                de métaux, offrant des solutions sur mesure en tôlerie et découpe 3D métal.
                Fondée en 2008 et basée en Vendée, notre société s'impose comme un acteur clé
                dans l'industrie du travail des métaux.
              </p>
              <p>
                Forte de son expertise, LAXER 5 se distingue par sa <strong>réactivité</strong>,
                la qualité de ses prestations, et son engagement à satisfaire chaque client.
              </p>
              <div className="co-intro__cta">
                <Link to="/contact" className="co-btn co-btn--red">Demander un devis</Link>
                <Link to="/decoupe-laser-2d" className="co-btn co-btn--outline">Nos services</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 3. CE QUI NOUS DÉFINIT ══ */}
        <section className="co-points" ref={el => reg("points", el)}>
          <div className="co-points__inner">
            <div className={`co-points__header${v("points")}`}>
              <span className="co-eyebrow co-eyebrow--light">Nos engagements</span>
              <h2 className="co-points__title">Ce qui nous<br /><em>définit</em></h2>
            </div>
            <div className="co-points__grid">
              {POINTS.map((p, i) => (
                <div
                  key={p.label}
                  className={`co-point-card${v("points")}`}
                  style={{ transitionDelay: `${i * 120 + 100}ms` }}
                >
                  <span className="co-point-card__num">0{i + 1}</span>
                  <span className="co-point-card__label">{p.label}</span>
                  <p className="co-point-card__desc">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 4. À TAILLE HUMAINE ══ */}
        <section className="co-about" ref={el => reg("about", el)}>
          <div className="co-about__inner">
            <div className={`co-about__left${v("about")}`}>
              <span className="co-eyebrow">Qui sommes-nous</span>
              <h2 className="co-about__title">Une entreprise<br /><em>à taille humaine</em></h2>
            </div>
            <div className={`co-about__right${v("about")}`} style={{ transitionDelay: "120ms" }}>
              <p>
                Nous sommes une entreprise à taille humaine, orientée vers
                l'innovation et la précision, avec une équipe dédiée qui met tout en
                oeuvre pour garantir un service efficace et personnalisé.
              </p>
              <p>
                Prototypes, petites, moyennes et grandes séries — notre atelier
                s'adapte à tous les volumes avec la même rigueur et les mêmes
                exigences de qualité. Basés à Mortagne-sur-Sèvre en Vendée,
                nous rayonnons sur tout le Grand Ouest.
              </p>
            </div>
          </div>
        </section>

        {/* ══ 5. TIMELINE ══ */}
        <section className="co-timeline">
          <div className="co-timeline__inner">
            <div className="co-timeline__header" ref={el => reg("tl-header", el)}>
              <span className={`co-eyebrow${v("tl-header")}`}>Depuis 2008</span>
              <h2 className={`co-timeline__title${v("tl-header")}`}>Notre histoire</h2>
              <p className={`co-timeline__intro${v("tl-header")}`}>
                16 ans de croissance continue, d'investissements et de passion pour la métallurgie de précision.
              </p>
            </div>
            <div className="co-timeline__track">
              {TIMELINE.map((item, i) => {
                const isRight = i % 2 === 0;
                return (
                  <div
                    key={item.year}
                    className={`co-tl-item co-tl-item--${isRight ? "right" : "left"}${tlVisible[i] ? " is-visible" : ""}`}
                    ref={el => { tlRefs.current[i] = el; el?.setAttribute("data-tl-idx", i); }}
                  >
                    <div className="co-tl-item__year">{item.year}</div>
                    <div className="co-tl-item__dot" />
                    <div className="co-tl-item__card">
                      <div className="co-tl-item__card-inner">
                        <h3 className="co-tl-item__title">{item.title}</h3>
                        <p className="co-tl-item__text">{item.text}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="co-tl-line" aria-hidden="true" />
            </div>
          </div>
        </section>

        {/* ══ 6. CTA FINAL ══ */}
        <section className="co-cta" ref={el => reg("cta", el)}>
          <div className={`co-cta__inner${v("cta")}`}>
            <h2 className="co-cta__title">Un projet en tête ?</h2>
            <p className="co-cta__sub">Devis gratuit · Réponse sous 24 h</p>
            <div className="co-cta__actions">
              <Link to="/contact" className="co-btn co-btn--white">Demander un devis</Link>
              <a href="tel:+33251576515" className="co-btn co-btn--ghost-light">02 51 57 65 15</a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}