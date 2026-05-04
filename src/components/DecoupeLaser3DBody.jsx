import "../style/BodydecoupeLaser3D.css";
import StickyContactForm from "./StickyContactForm";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import imgHero from "../assets/Image/tetealfa3.jpg";
import img1 from "../assets/Image/tetealfa1.jpg";
import img2 from "../assets/Image/tetealfa2.jpg";
import img3 from "../assets/Image/tetealfa3.jpg";

import googleIcon from "../assets/icone/google-icon.svg";

import BystarInox from "../assets/Image/BystarInox.jpg";
import pieceplié from "../assets/Image/pieceplié.jpg";

export default function DecoupeLaser3DBody() {
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
    { title: "Découpe laser 3D une solution complète", text: "La découpe laser 3D est une technologie de pointe pour l'usinage de pièces aux formes tridimensionnelles. Les éléments métalliques, quelle que soit leur géométrie, sont découpés avec précision au sein de notre atelier de production basé en France. Nous honorons chaque demande, qu'il s'agisse d'une pièce prototype, d'un exemplaire unique ou d'une production en série." },
    { title: "Quels fichiers fournir pour un devis de découpe 3D ?", text: "À COMPLÉTER — formats acceptés : STEP, IGES, SolidWorks…" },
  ];

  const blocks = [
    { title: "L'étape initiale du projet", text: "Vous commencez par nous envoyer votre fichier 3D au format STEP ou IGES, ainsi que les plans techniques associés (PDF). Après analyse de votre dossier et validation de la faisabilité, nous établissons un devis détaillé. Notre équipe s'assure de la conformité des découpes à réaliser en fonction de la géométrie de la pièce et des contraintes techniques existantes." },
    { title: "L'intérêt de la découpe laser 3D", text: "Avec la découpe laser 3D, il est possible d'usiner des pièces aux formes tridimensionnelles avec une précision remarquable. Elle peut être employée sur des pièces embouties, des pièces repoussées ainsi que des géométries complexes." },
    { title: "Les avantages de la découpe laser 3D", text: "La découpe laser 3D permet d'intervenir directement sur des pièces métalliques déjà mises en forme, là où une découpe 2D ou un laser tube ne sont plus adaptés. Grâce à la technologie 5 axes, la tête de coupe s'oriente afin de rester perpendiculaire à la surface de la pièce, assurant des découpes précises sur des surfaces non planes." },
    { title: "Les domaines d'activité qui utilisent la découpe laser 3D", text: "Ce procédé répond aux besoins de nombreux secteurs industriels qui nécessitent l'usinage de pièces tridimensionnelles complexes. On retrouve notamment la découpe laser 3D dans l'automobile et l'aéronautique pour des châssis, des éléments de carrosserie ou des supports structurels, mais aussi dans la construction métallique, l'architecture, la fabrication de machines spéciales et la production d'équipements sur mesure." },
  ];

  const typeCards = [
    {
      id: "laser",
      modifier: "d3TypeCard--laser",
      watermark: "LASER",
      title: "La découpe laser",
      badges: [
        { label: "Acier · Inox · Alu", accent: false },
        { label: "Polyvalence", accent: true },
      ],
      text: "Cette technologie s'adapte aussi bien à la fabrication industrielle qu'aux projets sur mesure, pour un coût très attractif.",
    },
    {
      id: "d2",
      modifier: "d3TypeCard--d2",
      watermark: "2D",
      title: "La découpe laser 2D",
      badges: [
        { label: "Tôle plate", accent: false },
        { label: "Précision", accent: true },
      ],
      text: "La découpe laser 2D assure des découpes rapides et précises sur une large gamme d'épaisseurs de tôle, offrant des pièces aux formes variées avec une finition soignée.",
    },
    {
      id: "d3",
      modifier: "d3TypeCard--d3",
      watermark: "3D",
      title: "La découpe laser 3D",
      badges: [
        { label: "Profilés · Emboutis", accent: false },
        { label: "Haute précision", accent: true },
      ],
      text: "Ce procédé représente une solution de découpe avancée pour l'usinage de pièces aux formes tridimensionnelles.",
    },
  ];

  const stats = [
    { num: "50 000+", label: "Pièces découpées" },
    { num: "800T", label: "Tôle traitée" },
    { num: "15+", label: "Ans d'expérience" },
    { num: "200+", label: "Clients satisfaits" },
  ];

  const services = [
    { title: "Découpe laser 2D", img: BystarInox, href: "/decoupe-laser-2d" },
    { title: "Pliage tôle", img: pieceplié, href: "/pliage-tole" },
    { title: "Découpe laser métal", img: img1, href: "/decoupe-laser-metal" },
  ];

  const faq = [
    { q: "Quelles matières peuvent être modifiées avec la découpe laser 3D ?", a: "Chez LAXER 5, la découpe laser 3D est réalisée sur des pièces en acier, en inox et en aluminium." },
    { q: "Quelles formes de pièces peuvent être façonnées avec cette technique ?", a: "La découpe laser 3D permet de réaliser des découpes précises sur des pièces métalliques tridimensionnelles déjà mises en forme. Elle est particulièrement adaptée aux pièces embouties ou repoussées, aux éléments de carrosserie, aux châssis, ainsi qu'à toutes sortes de pièces présentant des surfaces courbes ou des formes tridimensionnelles complexes." },
    { q: "Comment créer un projet de découpe laser 3D sans compétences ?", a: "Nos techniciens sont là pour vous guider et vous conseiller sur les aspects techniques. Transmettez-nous vos plans, croquis ou spécifications, nous analysons la faisabilité de votre projet de découpe laser 3D et vous orientons vers les solutions les plus adaptées." },
    { q: "Quelles sont les dimensions maximales possibles avec la découpe laser 3D ?", a: "Les dimensions maximales de la découpe laser 3D sont 3 000 x 2 000 x 750 mm." },
    { q: "Vos machines sont-elles capables de découper des tôles très épaisses ?", a: "Nos équipements peuvent traiter des pièces métalliques de différentes épaisseurs selon les matériaux utilisés. La qualité de découpe reste identique quelle que soit l'épaisseur de la tôle usinée." },
  ];

  const ServiceCard = ({ s }) => (
    <a className="d3ServiceCard" href={s.href}>
      <div className="d3ServiceCardImg"><img src={s.img} alt={s.title} /></div>
      <div className="d3ServiceCardBody">
        <h3>{s.title}</h3>
        <span className="d3BtnOutline">En savoir plus</span>
      </div>
    </a>
  );

  return (
    <>
      <Helmet>
        <title>Découpe laser 3D en Vendée | LAXER 5</title>
        <meta name="description" content="LAXER 5 se charge de tous vos projets nécessitant une découpe laser 3D efficace et à moindre coût." />
        <link rel="canonical" href="https://www.laxer5.fr/decoupe-laser-3d" />
      </Helmet>

      <div className="d3Page">

        {/* ── HERO ── */}
        <section className="d3Hero">
          <div className="d3HeroWrap">
            <div className="d3HeroBg" />

            <h1 className="d3HeroTitle">
              Découpe laser 3D
              <br />pour vos réalisations en métal
            </h1>

            <div className="d3HeroLeft">
              <p className="d3HeroDesc">
                Nous tirons parti de la découpe laser 3D pour usiner vos pièces métalliques avec une haute précision.
                Grâce à la technologie 5 axes, la tête de coupe s'oriente en permanence afin de rester perpendiculaire à la surface de la pièce, permettant la réalisation de découpes précises sur des pièces embouties, repoussées ou mises en forme, présentant des géométries non planes.
              </p>
              {/* Bouton caché sur mobile, visible desktop + tablette */}
              <a className="d3BtnRed" href="/contact">Lancer mon projet</a>
            </div>

            <div className="d3HeroRight">
              <div className="d3HeroImg">
                <img src={imgHero} alt="Découpe laser 3D industrielle" />
              </div>
            </div>

            {/* Bouton mobile uniquement — après l'image */}
            <a className="d3BtnRed d3BtnHeroMobile" href="/contact">Lancer mon projet</a>
          </div>
        </section>

        {/* ── BODY ── */}
        <section className="d3PageBody">
          <div className="d3PageGrid">
            <div>
              <nav className="d3Breadcrumb">
                <a href="/">Accueil</a> <span>›</span>{" "}
                <a href="/services">Services</a> <span>›</span>{" "}
                <span>Découpe laser 3D</span>
              </nav>

              <section className="d3Section">
                <div className="d3IntroGrid">
                  <div>
                    <h2 className="d3TitleXl">Notre service de découpe laser 3D</h2>
                    <p className="d3TextBody">
                      Notre entreprise LAXER 5 présente une solution de découpe laser tridimensionnelle. En travaillant l'acier, l'inox ou l'aluminium sur des géométries complexes, nous répondons aux besoins industriels exigeants comme aux projets spécifiques grâce à des machines à commande numérique qui garantissent une précision constante.
                      Avec nos équipements modernes, nous travaillons vos pièces à moindre coût, quelle que soit leur complexité. La qualité est identique pour une pièce unique ou pour une série complète.
                      Il vous suffit de renseigner notre formulaire en ligne pour nous exposer votre projet et nous traiterons votre demande rapidement.
                    </p>
                    <div className="d3AccList">
                      {accordion.map((a, i) => {
                        const isOpen = openAcc === i;
                        return (
                          <div className="d3AccItem" key={a.title}>
                            <button type="button" className="d3AccBtn" onClick={() => setOpenAcc(isOpen ? null : i)} aria-expanded={isOpen}>
                              <span className="d3AccTitle">{a.title}</span>
                              <span className="d3AccIcon">{isOpen ? "–" : "+"}</span>
                            </button>
                            <div className={`d3AccPanel${isOpen ? " isOpen" : ""}`}>
                              <p className="d3AccText">{a.text}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="d3IntroImgCol">
                    <div className="d3IntroImg">
                      <img src={img1} alt="Machine découpe laser 3D" />
                    </div>
                  </div>
                </div>
              </section>

              <section className="d3Section">
                <div className="d3ColsGrid">
                  {blocks.map((b, i) => (
                    <div key={i}>
                      <h3 className="d3TitleMd">{b.title}</h3>
                      <p className="d3TextBody">{b.text}</p>
                    </div>
                  ))}
                </div>
                <a className="d3BtnRed" href="/contact">Obtenir un devis</a>
              </section>

              <section className="d3Section">
                <h2 className="d3TitleXl">Nos réalisations en découpe laser 3D</h2>
                <p className="d3TextBody">Découvrez quelques exemples de pièces réalisées dans notre atelier.</p>
                <div className="d3Gallery">
                  <div className="d3GalleryItem"><img src={img2} alt="Réalisation découpe laser 3D" /></div>
                  <div className="d3GalleryItem"><img src={img3} alt="Réalisation découpe laser 3D" /></div>
                </div>
              </section>

              <section className="d3Section">
                <div className="d3StatsBand">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <div className="d3StatsNum">{s.num}</div>
                      <div className="d3StatsLabel">{s.label}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="d3Section">
                <h2 className="d3TitleXl">L'opération de découpe laser 3D</h2>
                <p className="d3TextBody">À COMPLÉTER — intro type de découpes laser 3D.</p>
                <div className="d3TypeGrid">
                  {typeCards.map((c) => (
                    <article className={`d3TypeCard ${c.modifier}`} key={c.id}>
                      <div className="d3TypeCard__watermarkWrap">
                        <div className="d3TypeCard__watermark">{c.watermark}</div>
                      </div>
                      <div className="d3TypeCardTop">
                        <div className="d3TypeCard__bar" />
                        <h3 className="d3TypeCard__title">{c.title}</h3>
                      </div>
                      <div className="d3TypeCardBot">
                        <div className="d3TypeCard__badges">
                          {c.badges.map((b) => (
                            <span
                              key={b.label}
                              className={`d3TypeCard__badge ${b.accent ? "d3TypeCard__badge--accent" : "d3TypeCard__badge--neutral"
                                }`}
                            >
                              {b.label}
                            </span>
                          ))}
                        </div>
                        <p className="d3TypeCard__text">{c.text}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className="d3Section">
                <div className="d3Cta">
                  <div className="d3CtaLeft">
                    <h2>Vous aimeriez profiter de la découpe laser 3D ?</h2>
                    <p>Complétez notre formulaire en ligne pour obtenir une estimation détaillée de votre projet d'usinage tridimensionnel.</p>
                    <div className="d3CtaBtns">
                      <a className="d3BtnBlack" href="/contact">Obtenir un devis</a>
                      <a className="d3BtnTel" href="tel:+33251576515">02 51 57 65 15</a>
                    </div>
                  </div>
                  <div className="d3CtaRight">
                    <a href="https://maps.app.goo.gl/NgrLXPqanHTcUU7q6" target="_blank" rel="noopener noreferrer" className="d3RatingPill">
                      <img src={googleIcon} alt="Google" className="d3RatingLogo" />
                      <span className="d3RatingStar">★</span>
                      <strong className="d3RatingScore">4.5</strong>
                      <span>•</span>
                      <span className="d3RatingCount">4 avis</span>
                    </a>
                  </div>
                </div>
              </section>

              <section className="d3Section">
                <h2 className="d3TitleXl">FAQ</h2>
                <p className="d3TextBody">Questions fréquentes sur notre service de découpe laser 3D.</p>
                <div className="d3FaqList">
                  {faq.map((item, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div className="d3FaqItem" key={item.q}>
                        <button type="button" className="d3FaqBtn" onClick={() => setOpenFaq(isOpen ? null : idx)} aria-expanded={isOpen}>
                          <span className="d3FaqQuestion">{item.q}</span>
                          <span className="d3FaqIcon">{isOpen ? "–" : "+"}</span>
                        </button>
                        <div className="d3FaqAnswer" style={{ display: isOpen ? "block" : "none" }}>
                          <p>{item.a}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              <section className="d3Section">
                <h2 className="d3TitleXl">Aller plus loin</h2>
                <p className="d3TextBody">Pour en savoir davantage sur les autres procédés de fabrication, on vous invite à consulter nos pages dédiées à la découpe laser globale, la découpe laser 2D et le pliage de précision.</p>
                <div className="d3ServiceGrid">{services.map((s) => <ServiceCard key={s.title} s={s} />)}</div>
                <div className="d3ServiceCarousel">{services.map((s) => <ServiceCard key={s.title} s={s} />)}</div>
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