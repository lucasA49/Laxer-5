import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "../style/Bodyhome.css";

import logoBlancSvg from "../assets/logo/logo-laxer5-blanc.svg";
import Vidéotest from "../assets/Image/Vidéotest.mp4";
import BystarInox from "../assets/Image/BystarInox.jpg";
import tetealfa3 from "../assets/Image/tetealfa3.jpg";
import pieceplié from "../assets/Image/pieceplié.jpg";
import scrolldownicon from "../assets/Image/scrolldownicon.png";
import logolauréatREvendée from "../assets/Image/logolauréatREvendée.png";

/* ── DATA ── */
const SERVICES = [
  { href: "/decoupe-laser-2d", num: "01", label: "Découpe laser 2D", desc: "Acier, inox, aluminium — découpe haute vitesse sur tôle plane avec une précision au dixième de millimètre.", tag: "Jusqu'à 15 mm", img: BystarInox },
  { href: "/decoupe-laser-3d", num: "02", label: "Découpe laser 3D", desc: "Technologie 5 axes pour l'usinage de pièces embouties, repoussées ou à géométries non planes.", tag: "3 000 × 2 000 × 750 mm", img: tetealfa3 },
  { href: "/pliage-tole", num: "03", label: "Pliage tôle", desc: "Plieuse CNC pour transformer vos découpes en pièces finies, prototypes ou séries complètes.", tag: "Commande numérique", img: pieceplié },
];

const STATS = [
  { num: "2008", label: "Année de fondation" },
  { num: "15+", label: "Ans d'expertise" },
  { num: "250k+", label: "Pièces produites" },
  { num: "200+", label: "Clients actifs" },
];

const MATERIAUX = ["Acier", "Inox", "Aluminium", "XC70", "DC01 / DC04", "Acier Corten"];

const AVANTAGES = [
  { icon: "⚡", title: "Réactivité", desc: "Devis sous 24 h, lancement rapide. Nous savons que vos délais sont serrés." },
  { icon: "🎯", title: "Précision < 0,1 mm", desc: "Nos machines à commande numérique garantissent une répétabilité parfaite sur chaque pièce." },
  { icon: "🔧", title: "Du proto à la série", desc: "Une pièce unique ou des milliers — notre atelier s'adapte à tous les volumes." },
  { icon: "🤝", title: "Accompagnement", desc: "Nos techniciens analysent vos plans et vous conseillent pour optimiser faisabilité et coût." },
];

const PROCESS = [
  { num: "01", title: "Envoi de vos plans", desc: "Transmettez vos fichiers DXF, STEP ou IGES via notre formulaire en ligne ou par email." },
  { num: "02", title: "Analyse & devis", desc: "Nos techniciens étudient la faisabilité et vous envoient un devis détaillé sous 24 h." },
  { num: "03", title: "Production", desc: "Vos pièces sont découpées et pliées dans notre atelier de Mortagne-sur-Sèvre avec un contrôle qualité rigoureux." },
  { num: "04", title: "Livraison", desc: "Enlèvement sur place ou livraison partout en France — dans les délais convenus." },
];

const MATIERES = [
  { label: "S235 / S355", epaisseur: "0,5 → 15 mm", color: "#4a4a4a" },
  { label: "DC01 / DC04", epaisseur: "0,5 → 15 mm", color: "#5a5a5a" },
  { label: "Inox 304/316", epaisseur: "0,5 → 10 mm", color: "#7a8a96" },
  { label: "Aluminium", epaisseur: "0,5 → 8 mm", color: "#a8b4bc" },
  { label: "XC70", epaisseur: "0,5 → 15 mm", color: "#3a3a3a" },
  { label: "Corten", epaisseur: "0,5 → 15 mm", color: "#8b5e3c" },
];

const FAQ = [
  { q: "Quel format de fichier fournir ?", a: "Nous acceptons les formats DXF, STEP et IGES. Un PDF technique en complément est toujours utile pour les cotes critiques." },
  { q: "Quels sont vos délais habituels ?", a: "Devis sous 24 h ouvrées. La production varie selon la complexité et le volume, généralement entre 3 et 10 jours ouvrés." },
  { q: "Avec quels types de clients travaillez-vous ?", a: "Nous travaillons exclusivement avec des professionnels : industriels, bureaux d'études, constructeurs et donneurs d'ordre qui nous confient la découpe et le pliage de leurs pièces. Nous intervenons en sous-traitance pour tous types de secteurs industriels." },
];

const TICKER_ITEMS = ["Acier", "Inox", "Aluminium", "XC70", "DC01 / DC04", "Corten"];

export default function Bodyhome() {
  const videoRef = useRef(null);
  const [matIdx, setMatIdx] = useState(0);
  const [visible, setVisible] = useState({});
  const [openFaq, setOpenFaq] = useState(null);
  const obsRefs = useRef({});

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    const p = v.play();
    if (p !== undefined) p.catch(() => { const u = () => { v.play().catch(() => { }); window.removeEventListener("click", u); }; window.addEventListener("click", u); });
  }, []);

  useEffect(() => {
    const t = setInterval(() => setMatIdx(i => (i + 1) % TICKER_ITEMS.length), 1800);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setVisible(v => ({ ...v, [e.target.dataset.id]: true })); }),
      { threshold: 0.1 }
    );
    Object.values(obsRefs.current).forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const reg = (id, el) => { obsRefs.current[id] = el; el?.setAttribute("data-id", id); };
  const v = (id) => visible[id] ? " is-visible" : "";

  return (
    <>
      <Helmet>
        <title>LAXER 5 • Spécialiste en découpe laser 2D/3D & pliage de haute précision</title>
        <meta name="description" content="LAXER 5 est spécialiste en découpe laser 2D, 3D et pliage de tôle en Vendée. Fabrication de pièces métalliques sur mesure pour l'industrie." />
        <link rel="canonical" href="https://www.laxer5.fr/" />
      </Helmet>

      <main className="home">

        {/* ══ HERO ══ */}
        <section className="h-hero">
          <div className="h-hero__video-wrap">
            <video ref={videoRef} src={Vidéotest} className="h-hero__video" playsInline autoPlay muted loop>
              <track kind="descriptions" label="Aucune description disponible" srcLang="fr" />
            </video>
            <div className="h-hero__video-overlay" />
          </div>

          <div className="h-hero__inner">
            <div className="h-hero__left">
              <span className="h-hero__eyebrow">Mortagne-sur-Sèvre · Vendée · France</span>
              <img src={logoBlancSvg} alt="LAXER 5" className="h-hero__logo" loading="eager" />
              <h1 className="h-hero__title">
                Expert en découpe laser<br />
                <em>&amp; pliage de précision</em>
              </h1>
              <p className="h-hero__sub">
                Solutions industrielles sur mesure depuis 2008 —<br />
                du prototype à la série, proche de Nantes.
              </p>
              <div className="h-hero__actions">
                <Link to="/contact" className="h-btn h-btn--red">Demander un devis</Link>
                <Link to="/decoupe-laser-2d" className="h-btn h-btn--ghost">Nos services</Link>
              </div>
            </div>

            <div className="h-hero__right">
              <div className="h-hero__mat-ticker">
                <span className="h-hero__mat-label">Matières traitées</span>
                <span className="h-hero__mat-value" key={matIdx}>{TICKER_ITEMS[matIdx]}</span>
              </div>
              <div className="h-hero__badge">
                <span className="h-hero__badge-num">15+</span>
                <span className="h-hero__badge-text">ans d'expertise<br />industrielle</span>
              </div>
            </div>
          </div>

          <button className="h-hero__scroll" onClick={() => window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" })} aria-label="Défiler">
            <span>Défiler</span>
            <img src={scrolldownicon} alt="" aria-hidden="true" className="h-hero__scroll-icon" />
          </button>
        </section>

        {/* ══ STATS ══ */}
        <section className="h-stats" ref={el => reg("stats", el)}>
          {STATS.map((s, i) => (
            <div key={s.label} className={`h-stats__item${v("stats")}`} style={{ transitionDelay: `${i * 90}ms` }}>
              <span className="h-stats__num">{s.num}</span>
              <span className="h-stats__label">{s.label}</span>
            </div>
          ))}
        </section>

        {/* ══ SERVICES ══ */}
        <section className="h-services" ref={el => reg("services", el)}>
          <div className="h-services__header">
            <h2 className={`h-section-title${v("services")}`}>Nos <em>expertises</em></h2>
            <p className={`h-services__intro${v("services")}`}>
              Trois savoir-faire complémentaires pour tous vos projets de métallurgie de précision.
            </p>
          </div>
          <div className="h-services__grid">
            {SERVICES.map((s, i) => (
              <Link to={s.href} key={s.num} className={`h-scard${v("services")}`} style={{ transitionDelay: `${i * 130 + 80}ms` }}>
                <div className="h-scard__img-wrap">
                  <img src={s.img} alt={s.label} className="h-scard__img" loading="lazy" />
                  <div className="h-scard__img-overlay" />
                </div>
                <div className="h-scard__content">
                  <span className="h-scard__num">{s.num}</span>
                  <h3 className="h-scard__title">{s.label}</h3>
                  <p className="h-scard__desc">{s.desc}</p>
                  <div className="h-scard__footer">
                    <span className="h-scard__tag">{s.tag}</span>
                    <span className="h-scard__arrow">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ══ POURQUOI NOUS ══ */}
        <section className="h-why" ref={el => reg("why", el)}>
          <div className="h-why__inner">
            <div className={`h-why__header${v("why")}`}>
              <span className="h-eyebrow">Pourquoi LAXER 5</span>
              <h2 className="h-section-title-sm">Ce qui nous distingue</h2>
            </div>
            <div className="h-why__grid">
              {AVANTAGES.map((a, i) => (
                <div key={a.title} className={`h-why__card${v("why")}`} style={{ transitionDelay: `${i * 100 + 100}ms` }}>
                  <span className="h-why__icon">{a.icon}</span>
                  <h3 className="h-why__title">{a.title}</h3>
                  <p className="h-why__desc">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ MATIÈRES ══ */}
        <section className="h-matieres" ref={el => reg("matieres", el)}>
          <div className="h-matieres__inner">
            <div className={`h-matieres__left${v("matieres")}`}>
              <span className="h-eyebrow h-eyebrow--light">Matériaux</span>
              <h2 className="h-section-title-sm h-section-title-sm--light">
                6 matières,<br /><em>une précision.</em>
              </h2>
              <p className="h-matieres__sub">
                Acier, inox, aluminium et plus — nous sélectionnons les paramètres
                de coupe optimaux pour chaque matière et chaque épaisseur.
              </p>
            </div>
            <div className="h-matieres__grid">
              {MATIERES.map((m, i) => (
                <div key={m.label} className={`h-mat-card${v("matieres")}`} style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="h-mat-card__dot" style={{ background: m.color }} />
                  <span className="h-mat-card__label">{m.label}</span>
                  <span className="h-mat-card__ep">{m.epaisseur}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ PROCESSUS ══ */}
        <section className="h-process" ref={el => reg("process", el)}>
          <div className="h-process__inner">
            <div className={`h-process__header${v("process")}`}>
              <span className="h-eyebrow">Comment ça marche</span>
              <h2 className="h-section-title-sm">De la demande<br /><em>à la livraison</em></h2>
            </div>
            <div className="h-process__steps">
              {PROCESS.map((p, i) => (
                <div key={p.num} className={`h-step${v("process")}`} style={{ transitionDelay: `${i * 110 + 80}ms` }}>
                  <span className="h-step__num">{p.num}</span>
                  <div className="h-step__line" />
                  <h3 className="h-step__title">{p.title}</h3>
                  <p className="h-step__desc">{p.desc}</p>
                </div>
              ))}
            </div>
            <div className={`h-process__cta${v("process")}`}>
              <Link to="/contact" className="h-btn h-btn--red">Lancer mon projet →</Link>
            </div>
          </div>
        </section>

        {/* ══ MANIFESTE ══ */}
        <section className="h-manifeste" ref={el => reg("manifeste", el)}>
          <div className={`h-manifeste__inner${v("manifeste")}`}>
            <span className="h-manifeste__label">Notre philosophie</span>
            <blockquote className="h-manifeste__quote">
              "La précision n'est pas une option —<br />
              <em>c'est notre matière première.</em>"
            </blockquote>
            <p className="h-manifeste__body">
              Depuis 2008, LAXER 5 accompagne les professionnels de l'industrie dans la réalisation
              de pièces métalliques complexes. Nos machines à commande numérique garantissent une
              répétabilité parfaite, du prototype à la série. Implantés à Mortagne-sur-Sèvre en Vendée,
              nous intervenons pour des clients partout en France.
            </p>
          </div>
          <div className={`h-manifeste__pills${v("manifeste")}`}>
            {["Précision < 0,1 mm", "Délais maîtrisés", "Devis sous 24 h", "Prototypes & séries", "Grand Ouest", "Vendée (85)"].map(p => (
              <span key={p} className="h-manifeste__pill">{p}</span>
            ))}
          </div>
        </section>

        {/* ══ LAURÉAT ══ */}
        <section className="h-laureat" ref={el => reg("laureat", el)}>
          <div className={`h-laureat__inner${v("laureat")}`}>
            <div className="h-laureat__logo-wrap">
              <img src={logolauréatREvendée} alt="Lauréat Réseau Entreprendre Vendée" className="h-laureat__logo" />
            </div>
            <div className="h-laureat__content">
              <span className="h-laureat__eyebrow">Reconnaissance · 2008</span>
              <h2 className="h-laureat__title">Lauréat du Réseau<br />Entreprendre Vendée</h2>
              <p className="h-laureat__text">
                Dès sa création en 2008, LAXER 5 a été sélectionné par le Réseau Entreprendre —
                réseau reconnu d'utilité publique réunissant des chefs d'entreprise bénévoles
                engagés pour l'emploi et la création d'entreprises à fort potentiel.
              </p>
              <a href="https://www.reseau-entreprendre.org" target="_blank" rel="noopener noreferrer" className="h-btn h-btn--outline-light">
                Découvrir le Réseau Entreprendre →
              </a>
            </div>
          </div>
        </section>

        {/* ══ FAQ ══ */}
        <section className="h-faq" ref={el => reg("faq", el)}>
          <div className="h-faq__inner">
            <div className={`h-faq__header${v("faq")}`}>
              <span className="h-eyebrow">Questions fréquentes</span>
              <h2 className="h-section-title-sm">On répond à<br /><em>vos questions</em></h2>
            </div>
            <div className="h-faq__list">
              {FAQ.map((item, i) => (
                <div key={i} className={`h-faq__item${v("faq")}${openFaq === i ? " is-open" : ""}`} style={{ transitionDelay: `${i * 80 + 80}ms` }}>
                  <button className="h-faq__btn" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span>{item.q}</span>
                    <span className="h-faq__icon">{openFaq === i ? "−" : "+"}</span>
                  </button>
                  <div className="h-faq__answer">
                    <p>{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ LOCALISATION ══ */}
        <section className="h-local" ref={el => reg("local", el)}>
          <div className={`h-local__map${v("local")}`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3370.290067219896!2d-0.9327339232179104!3d46.98627533060736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480643263460aa87%3A0x2293ea6c16d4474b!2sLaxer%205!5e1!3m2!1sfr!2sfr!4v1733217247972!5m2!1sfr!2sfr"
              loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="Laxer 5 - Mortagne-sur-Sèvre" allowFullScreen
            />
          </div>
          <div className={`h-local__cta${v("local")}`}>
            <span className="h-local__eyebrow">Proches de vous</span>
            <h2 className="h-local__title">À 45 min de Nantes &amp;<br />La Roche-sur-Yon</h2>
            <p className="h-local__text">
              Notre atelier est accessible depuis les grands axes de Vendée et du Maine-et-Loire. Les pièces sont disponibles à l'enlèvement sur place.
            </p>
            <div className="h-local__infos">
              <div className="h-local__info"><span>📍</span><span>ZI de Maunit — 134 rue des Pâtis, Mortagne-sur-Sèvre (85)</span></div>
              <div className="h-local__info"><span>📞</span><a href="tel:+33251576515">02 51 57 65 15</a></div>
              <div className="h-local__info"><span>⏰</span><span>Lundi–Vendredi · 8h–18h</span></div>
            </div>
            <Link to="/contact" className="h-btn h-btn--red">Lancer mon projet →</Link>
          </div>
        </section>

        {/* ══ CTA FINAL ══ */}
        <section className="h-cta" ref={el => reg("cta", el)}>
          <div className={`h-cta__inner${v("cta")}`}>
            <h2 className="h-cta__title">Un projet en tête ?</h2>
            <p className="h-cta__sub">Envoyez-nous vos plans — devis gratuit sous 24 h.</p>
            <div className="h-cta__actions">
              <Link to="/contact" className="h-btn h-btn--white">Demander un devis</Link>
              <a href="tel:+33251576515" className="h-btn h-btn--ghost-light">02 51 57 65 15</a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}