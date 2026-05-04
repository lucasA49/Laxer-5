import "../style/BodydecoupeLaser2D.css";
import StickyContactForm from "./StickyContactForm";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import img1 from "../assets/Image/BystarInox.jpg";
import imgIntro from "../assets/Image/Bystar3.jpg";
import Bystar2 from "../assets/Image/Bystar2.jpg";
import imgHero from "../assets/Image/BystarInox.jpg";
import découpe2dpcs from "../assets/Image/découpe2dpcs.jpg";

import googleIcon from "../assets/icone/google-icon.svg";

import tetealfa3 from "../assets/Image/tetealfa3.jpg";
import pieceplié from "../assets/Image/pieceplié.jpg";

export default function DecoupeLaser2DBody() {
  const [openAcc, setOpenAcc] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const fab = document.querySelector('.fabDevis');
      if (!fab) return;
      const footer = document.querySelector('footer');
      if (!footer) { fab.style.bottom = '24px'; return; }
      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      fab.style.bottom = (footerTop < windowHeight ? windowHeight - footerTop + 40 : 24) + 'px';
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const accordion = [
    {
      title: "Découpe laser 2D et pliage : une solution complète",
      text: "Le procédé de découpe laser 2D donne l'occasion de réaliser efficacement des pièces plates aux formes simples et complexes. Les plaques métalliques, indépendamment de leur épaisseur, font l'objet d'un usinage soigné. Basé en France, notre site de production concrétise vos demandes avec agilité, qu'il s'agisse d'un exemplaire isolé, d'une maquette ou d'un lot complet. Vous avez la garantie d'avoir une prestation irréprochable à moindre coût, y compris sur de faibles quantités.",
    },
    {
      title: "Quels fichiers fournir pour un devis de découpe 2D ?",
      text: "À COMPLÉTER — formats acceptés : DXF, DWG, PDF coté, STEP…",
    },
  ];

  const blocks = [
    {
      title: "Le processus de découpe laser 2D",
      text: "Dans un premier temps, vous nous envoyez votre fichier vectoriel ou dessin technique. Après avoir étudié votre dossier, nous vous transmettons un devis. Notre équipe vous accompagne dans le choix des matériaux appropriés selon les besoins de votre projet.",
    },
    {
      title: "La spécificité de la découpe laser 2D",
      text: "La découpe laser 2D permet de façonner des tôles de petites, moyennes et grandes tailles avec une précision remarquable. Cette technique travaille rapidement et proprement différents métaux, avec une finition impeccable.",
    },
    {
      title: "Les secteurs qui bénéficient de la découpe laser ",
      text: "La découpe laser 2D est employée de nos jours dans toutes sortes de domaines. On la retrouve notamment dans l'automobile et l'aéronautique pour des pièces de structure, des panneaux ou des accessoires. Cette technique est aussi fréquemment utilisée pour la création artistique, la signalétique, la fabrication de mobilier ou encore celle d'objets personnalisés.",
    },
    {
      title: "Les avantages de la découpe laser 2D",
      text: "Le coût de la découpe laser 2D est très accessible, que ce soit pour des maquettes ou des fabrications personnalisées. La mise en production ne demande pas d'outillage particulier.",
    },
  ];

  const typeCards = [
    {
      id: "laser",
      modifier: "d2TypeCard--laser",
      watermark: "LASER",
      title: "La découpe laser",
      badges: [
        { label: "Acier · Inox · Alu", accent: false },
        { label: "Polyvalence", accent: true },
      ],
      text: "La découpe laser présente une grande souplesse pour la fabrication industrielle comme pour les projets sur mesure. La qualité reste constante et les coûts maîtrisés, quelle que soit la quantité commandée.",
    },
    {
      id: "d2",
      modifier: "d2TypeCard--d2",
      watermark: "2D",
      title: "La découpe laser 2D",
      badges: [
        { label: "Tôle plate", accent: false },
        { label: "Précision", accent: true },
      ],
      text: "La découpe laser 2D aboutit à des découpes nettes et précises sur des tôles de différentes épaisseurs. Grâce à elle, il est possible de fabriquer des pièces aux formes simples ou complexes avec une finition impeccable.",
    },
    {
      id: "d3",
      modifier: "d2TypeCard--d3",
      watermark: "3D",
      title: "La découpe laser 3D",
      badges: [
        { label: "Profilés · Emboutis", accent: false },
        { label: "Haute précision", accent: true },
      ],
      text: "La découpe laser 3D est une technologie avancée qui travaille avec la plus haute précision les pièces embouties, les profilés ainsi que les géométries complexes.",
    },
  ];


  const stats = [
    { num: "50 000+", label: "Pièces découpées" },
    { num: "800T", label: "Tôle traitée" },
    { num: "15+", label: "Ans d'expérience" },
    { num: "200+", label: "Clients satisfaits" },
  ];

  const services = [
    { title: "Découpe laser 3D", img: tetealfa3, href: "/decoupe-laser-3d" },
    { title: "Pliage tôle", img: pieceplié, href: "/pliage-tole" },
    { title: "Découpe laser métal", img: img1, href: "/decoupe-laser-metal" },
  ];

  const faq = [
    {
      q: "Quelles formes de pièces peuvent être réalisées avec la découpe laser 2D ? ",
      a: "Avec cette technique, il est autant possible de réaliser des formes géométriques simples (cercles, carrés, rectangles) que des contours complexes avec des courbes, des angles précis ou des motifs très détaillés. Ainsi, nous pouvons notamment utiliser la découpe laser 2D pour fabriquer des supports, des plaques ajourées, des éléments décoratifs, des pièces de fixation, et bien d'autres composants selon vos besoins.",
    },
    {
      q: "Quels matériaux pouvez-vous découper en 2D ? ",
      a: "Chez LAXER 5, nous travaillons exclusivement l'acier, l'inox et l'aluminium.",
    },
    {
      q: "Quelles sont les dimensions maximales pour la découpe laser 2D ? ",
      a: "Les dimensions maximales de la découpe laser 2D sont 4 000 x 2 000 mm.",
    },
    {
      q: "Quelle est la capacité de votre machine pour des épaisseurs importantes ?",
      a: "Nos machines peuvent travailler des feuilles métalliques de différentes épaisseurs selon les matériaux. La précision reste excellente quelle que soit l'épaisseur des tôles, cela vous garantit ainsi un résultat de qualité.",
    },
    {
      q: "Comment être aidé pour réaliser mon projet de découpe laser 2D ? ",
      a: "Nos collaborateurs peuvent vous guider tout au long de votre projet et vous orienter dans vos choix. Transmettez-nous vos plans ou croquis pour que nous puissions vous proposer des solutions adaptées.",
    },
  ];

  const ServiceCard = ({ s }) => (
    <a className="d2ServiceCard" href={s.href}>
      <div className="d2ServiceCardImg"><img src={s.img} alt={s.title} /></div>
      <div className="d2ServiceCardBody">
        <h3>{s.title}</h3>
        <span className="d2BtnOutline">En savoir plus</span>
      </div>
    </a>
  );

  return (
    <>
      <Helmet>
        <title>Découpe laser 2D en Vendée | LAXER 5</title>
        <meta name="description" content="Spécialiste de la découpe laser 2D, LAXER 5 réalise vos pièces métalliques sur mesure avec précision et réactivité." />
        <link rel="canonical" href="https://www.laxer5.fr/decoupe-laser-2d" />
      </Helmet>

      <div className="d2Page">

        {/* ── HERO ── */}
        <section className="d2Hero">
          <div className="d2HeroWrap">
            <div className="d2HeroBg" />
            <h1 className="d2HeroTitle">
              Découpe laser 2D
              <br />pour vos projets en métal
            </h1>

            <div className="d2HeroLeft">
              <p className="d2HeroDesc">
                Chez LAXER 5, nous utilisons la découpe laser 2D pour travailler vos tôles d'acier, d'inox et d'aluminium avec précision.
                Le faisceau laser découpe la matière de manière nette et rapide, ainsi nous pouvons réaliser des pièces aux formes diverses et variées.
              </p>
              <a className="d2BtnRed" href="/contact">Lancer mon projet</a>
            </div>

            <div className="d2HeroRight">
              <div className="d2HeroImg">
                <img src={imgHero} alt="Découpe laser 2D industrielle" />
              </div>
            </div>
            <a className="d2BtnRed d2BtnHeroMobile" href="/contact">Lancer mon projet</a>
          </div>
        </section>

        {/* ── BODY ── */}
        <section className="d2PageBody">
          <div className="d2PageGrid">
            <div>
              <nav className="d2Breadcrumb">
                <a href="/">Accueil</a> <span>›</span>{" "}
                <a href="/services">Services</a> <span>›</span>{" "}
                <span>Découpe laser 2D</span>
              </nav>

              <section className="d2Section">
                <div className="d2IntroGrid">
                  <div>
                    <h2 className="d2TitleXl">Nos services de découpe laser 2D</h2>
                    <p className="d2TextBody">
                      On propose une solution de découpe laser en deux dimensions, elle convient tant aux fabrications industrielles qu'aux réalisations personnalisées.
                      Les métaux et alliages tels que l'acier, l'inox et l'aluminium sont façonnés avec des machines d'usinage qui assurent la précision de la moindre pièce.
                      Grâce à nos équipements récents, nous pouvons prendre en charge des matières de différentes épaisseurs à un coût attractif.
                      Sachez que LAXER 5 assure une vitesse de production rapide, quel que soit le volume commandé.
                      Contactez-nous via notre formulaire pour présenter vos besoins et recevoir une réponse dans les plus brefs délais.
                    </p>
                    <div className="d2AccList">
                      {accordion.map((a, i) => {
                        const isOpen = openAcc === i;
                        return (
                          <div className="d2AccItem" key={a.title}>
                            <button type="button" className="d2AccBtn" onClick={() => setOpenAcc(isOpen ? null : i)} aria-expanded={isOpen}>
                              <span className="d2AccTitle">{a.title}</span>
                              <span className="d2AccIcon">{isOpen ? "–" : "+"}</span>
                            </button>
                            <div className={`d2AccPanel${isOpen ? " isOpen" : ""}`}>
                              <p className="d2AccText">{a.text}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="d2IntroImgCol">
                    <div className="d2IntroImg">
                      <img src={imgIntro} alt="Machine découpe laser 2D" />
                    </div>
                  </div>
                </div>
              </section>

              <section className="d2Section">
                <div className="d2ColsGrid">
                  {blocks.map((b, i) => (
                    <div key={i}>
                      <h3 className="d2TitleMd">{b.title}</h3>
                      <p className="d2TextBody">{b.text}</p>
                    </div>
                  ))}
                </div>
                <a className="d2BtnRed" href="/contact">Obtenir un devis</a>
              </section>

              <section className="d2Section">
                <h2 className="d2TitleXl">Nos réalisations en découpe laser 2D</h2>
                <p className="d2TextBody">Découvrez quelques exemples de pièces réalisées dans notre atelier.</p>
                <div className="d2Gallery">
                  <div className="d2GalleryItem"><img src={découpe2dpcs} alt="Réalisation découpe laser 2D" /></div>
                  <div className="d2GalleryItem"><img src={Bystar2} alt="Réalisation découpe laser 2D" /></div>
                </div>
              </section>

              <section className="d2Section">
                <div className="d2StatsBand">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <div className="d2StatsNum">{s.num}</div>
                      <div className="d2StatsLabel">{s.label}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="d2Section">
                <h2 className="d2TitleXl">L'opération de découpe laser </h2>
                <p className="d2TextBody">
                  La découpe laser façonne l'acier, l'inox et l'aluminium avec une grande précision. Un faisceau laser puissant vient découper la matière de manière nette et rapide, permettant la réalisation de pièces aux formes diverses et variées. Nos équipements modernes ont la faculté de traiter différentes épaisseurs de tôle avec un processus optimisé qui garantit un excellent rapport qualité-prix.
                </p>
                <div className="d2TypeGrid">
                  {typeCards.map((c) => (
                    <article className={`d2TypeCard ${c.modifier}`} key={c.id}>
                      <div className="d2TypeCard__watermarkWrap">
                        <div className="d2TypeCard__watermark">{c.watermark}</div>
                      </div>
                      <div className="d2TypeCardTop">
                        <div className="d2TypeCard__bar" />
                        <h3 className="d2TypeCard__title">{c.title}</h3>
                      </div>
                      <div className="d2TypeCardBot">
                        <div className="d2TypeCard__badges">
                          {c.badges.map((b) => (
                            <span
                              key={b.label}
                              className={`d2TypeCard__badge ${b.accent ? "d2TypeCard__badge--accent" : "d2TypeCard__badge--neutral"}`}
                            >
                              {b.label}
                            </span>
                          ))}
                        </div>
                        <p className="d2TypeCard__text">{c.text}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className="d2Section">
                <div className="d2Cta">
                  <div className="d2CtaLeft">
                    <h2>Vous envisagez d'exploiter la découpe laser 2D ? </h2>
                    <p>
                      Remplissez notre formulaire web pour recevoir un chiffrage détaillé de votre projet d'usinage. Vous nous transmettez à distance vos documents 2D en indiquant vos paramètres : nature du métal, épaisseur souhaitée, nombre d'unités.
                      Grâce à nos machines performantes et notre savoir-faire, nous réalisons des pièces sur mesure, des prototypes et des séries complètes avec une qualité optimale.
                    </p>
                    <div className="d2CtaBtns">
                      <a className="d2BtnBlack" href="/contact">Obtenir un devis</a>
                      <a className="d2BtnTel" href="tel:+33251576515">02 51 57 65 15</a>
                    </div>
                  </div>
                  <div className="d2CtaRight">
                    <a href="https://maps.app.goo.gl/NgrLXPqanHTcUU7q6" target="_blank" rel="noopener noreferrer" className="d2RatingPill">
                      <img src={googleIcon} alt="Google" className="d2RatingLogo" />
                      <span className="d2RatingStar">★</span>
                      <strong className="d2RatingScore">4.5</strong>
                      <span>•</span>
                      <span className="d2RatingCount">4 avis</span>
                    </a>
                  </div>
                </div>
              </section>

              <section className="d2Section">
                <h2 className="d2TitleXl">FAQ</h2>
                <p className="d2TextBody">Questions fréquentes sur notre service de découpe laser 2D.</p>
                <div className="d2FaqList">
                  {faq.map((item, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div className="d2FaqItem" key={item.q}>
                        <button type="button" className="d2FaqBtn" onClick={() => setOpenFaq(isOpen ? null : idx)} aria-expanded={isOpen}>
                          <span className="d2FaqQuestion">{item.q}</span>
                          <span className="d2FaqIcon">{isOpen ? "–" : "+"}</span>
                        </button>
                        <div className="d2FaqAnswer" style={{ display: isOpen ? "block" : "none" }}>
                          <p>{item.a}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              <section className="d2Section">
                <h2 className="d2TitleXl">Aller plus loin</h2>
                <p className="d2TextBody">Nos pages dédiées à la découpe laser globale, la découpe laser 3D et le pliage de précision vous apporteront plus d'informations sur ces procédés.</p>
                <div className="d2ServiceGrid">{services.map((s) => <ServiceCard key={s.title} s={s} />)}</div>
                <div className="d2ServiceCarousel">{services.map((s) => <ServiceCard key={s.title} s={s} />)}</div>
              </section>
            </div>

            <StickyContactForm />
          </div>

          <button className="fabDevis" onClick={() => setModalOpen(true)} aria-label="Demander un devis">
            ✉ Devis rapide
          </button>
        </section>

        {/* ── MODAL ── */}
        <div
          className={`formModal${modalOpen ? " isOpen" : ""}`}
          onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false); }}
        >
          <div className="formModalInner">
            <div
              className="formModalHandle"
              onPointerDown={(e) => {
                const startY = e.clientY;
                const inner = e.currentTarget.closest('.formModalInner');
                const onMove = (ev) => { const dy = ev.clientY - startY; if (dy > 0) inner.style.transform = `translateY(${dy}px)`; };
                const onUp = (ev) => { const dy = ev.clientY - startY; inner.style.transform = ''; if (dy > 80) setModalOpen(false); window.removeEventListener('pointermove', onMove); window.removeEventListener('pointerup', onUp); };
                window.addEventListener('pointermove', onMove);
                window.addEventListener('pointerup', onUp);
              }}
            />
            <button className="formModalClose" onClick={() => setModalOpen(false)} aria-label="Fermer">✕</button>
            <StickyContactForm />
          </div>
        </div>

      </div>
    </>
  );
}