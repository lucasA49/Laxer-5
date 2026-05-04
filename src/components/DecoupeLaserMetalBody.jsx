import "../style/DecoupeLaserMetal.css";
import StickyContactForm from "./StickyContactForm";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import imgHero from "../assets/Image/BystarInox.jpg";
import img1 from "../assets/Image/tetealfa1.jpg";
import img2 from "../assets/Image/tetealfa2.jpg";
import img3 from "../assets/Image/BystarInox.jpg";

import googleIcon from "../assets/icone/google-icon.svg";
import pieceplié from "../assets/Image/pieceplié.jpg";
import tetealfa3 from "../assets/Image/tetealfa3.jpg";

export default function DecoupeLaserMetalBody() {
  const [openAcc, setOpenAcc] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const fab = document.querySelector('.dlmFab');
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
    { title: "La découpe laser métal, une solution industrielle complète", text: "Cette technologie offre une grande souplesse pour la fabrication industrielle. Les feuilles métalliques, quelle que soit leur épaisseur, font l’objet d’un traitement minutieux. Les entreprises industrielles y trouvent un intérêt particulier, notamment pour la qualité homogène des pièces produites et leur excellente résistance. Notre atelier situé en France réalise vos projets avec réactivité, que vous ayez besoin d'une pièce unique, d'un prototype ou d'une série complète. Le procédé employé garantit un résultat optimal et vous fait bénéficier des coûts maîtrisés, y compris lorsque vous commandez de petites quantités" },
    { title: "Proposez-vous des petites séries et prototypes ?", text: "Oui, nous répondons aussi bien aux demandes de pièces uniques et prototypes qu'aux productions en série. Notre parc machine s'adapte à tous les volumes avec la même qualité et les mêmes délais de réponse." },
  ];

  const blocks = [
    { title: "Le processus de découpe", text: "Tout commence par l'envoi de votre fichier vectoriel ou dessin technique. Après validation, vous recevrez rapidement un devis. Notre équipe répond à votre demande rapidement et vous accompagne dans la sélection des matériaux adaptés selon les spécificités de votre projet." },
    { title: "La découpe laser 2D et 3D", text: <>La découpe laser 2D permet de réaliser des découpes précises et rapides sur une large gamme de matériaux tels que l'acier, l'inox et l'aluminium. Les équipements modernes traitent des tôles de différentes épaisseurs avec une grande précision, offrant des découpes nettes et rapides avec une finition soignée.<br /><br />La découpe laser 3D, aussi appelée découpe 5 axes est une technologie avancée qui permet de réaliser des découpes complexes avec une grande précision. Cette technique intervient dans divers secteurs pour la découpe de pièces embouties, profilés et géométries complexes.</> },
    { title: "Les secteurs qui profitent de la découpe laser", text: "L'industrie automobile et l'aéronautique bénéficient particulièrement de ces technologies pour la fabrication d'éléments structuraux, de panneaux et d'accessoires. D'autres domaines profitent de la découpe laser, nous pensons notamment à la création artistique, la signalétique, le mobilier et la fabrication d'objets personnalisés." },
    { title: "Les avantages de la découpe laser", text: "Le coût d’une fabrication de pièces à la découpe laser reste accessible, même pour des prototypes ou des commandes personnalisées. L'énergie laser optimisée limite les déchets de matière et accélère la fabrication." },
  ];

  const typeCards = [
    {
      id: "laser",
      modifier: "dlmTypeCard--laser",
      watermark: "LASER",
      title: "La découpe laser",
      badges: [
        { label: "Acier · Inox · Alu", accent: false },
        { label: "Polyvalence", accent: true },
      ],
      text: "Cette technologie offre une grande souplesse pour la fabrication industrielle, avec une qualité homogène des pièces produites et des coûts maîtrisés, même pour de petites quantités.",
    },
    {
      id: "d2",
      modifier: "dlmTypeCard--d2",
      watermark: "2D",
      title: "La découpe laser 2D",
      badges: [
        { label: "Tôle plate", accent: false },
        { label: "Précision", accent: true },
      ],
      text: "La découpe laser 2D réalise des découpes précises et rapides sur des tôles de différentes épaisseurs, offrant des contours nets avec une finition soignée.",
    },
    {
      id: "d3",
      modifier: "dlmTypeCard--d3",
      watermark: "3D",
      title: "La découpe laser 3D",
      badges: [
        { label: "Profilés · Emboutis", accent: false },
        { label: "Haute précision", accent: true },
      ],
      text: "Aussi appelée la découpe 5 axes, la découpe laser 3D travaille les pièces embouties, les profilés et les géométries complexes avec une grande précision.",
    },
  ];

  const stats = [
    { num: "250k+", label: "Pièces découpées" },
    { num: "800T", label: "Tôle traitée" },
    { num: "15+", label: "Ans d'expérience" },
    { num: "200+", label: "Clients satisfaits" },
  ];

  const services = [
    { title: "Découpe laser 2D", img: img1, href: "/decoupe-laser-2d" },
    { title: "Découpe laser 3D", img: tetealfa3, href: "/decoupe-laser-3d" },
    { title: "Pliage tôle", img: pieceplié, href: "/pliage-tole" },
  ];

  const faq = [
    { q: "Quelles formes de pièces peuvent être façonnées avec la découpe laser ?", a: "La découpe laser permet de réaliser aussi bien des formes géométriques simples (cercles, rectangles, carrés) que des contours complexes avec des courbes, des angles précis ou des motifs détaillés. Ainsi, vous pouvez notamment commander selon vos projets des pièces de protection, des pièces de fixation, des composants d’assemblage etc." },
    { q: "Quels types de matériaux pouvez-vous découper avec votre laser ?", a: "LAXER 5 travaille seulement l’acier, l’inox et l’aluminium." },
    { q: "Quelles sont les dimensions maximales ?", a: "Les dimensions maximales de la découpe laser 2D sont 4 000 x 2 000 mm et celles de la découpe laser 3D sont 3 000 x 2 000 X 750 mm." },
    { q: "Quelle est la capacité de votre machine pour des épaisseurs importantes ?", a: "Les machines de découpe laser traitent différentes épaisseurs de tôle sur des zones adaptées. Les tolérances restent élevées pour garantir un résultat optimal." },
    { q: "Comment obtenir une aide pour la conception ou la création de modèles uniques ?", a: "L'équipe est à votre disposition pour étudier votre projet et vous accompagner dans la définition de vos besoins. Envoyez-nous vos fichiers ou dessins pour obtenir une analyse personnalisée." },
  ];

  const ServiceCard = ({ s }) => (
    <a className="dlmServiceCard" href={s.href}>
      <div className="dlmServiceCardImg"><img src={s.img} alt={s.title} /></div>
      <div className="dlmServiceCardBody">
        <h3>{s.title}</h3>
        <span className="dlmBtnOutline">En savoir plus</span>
      </div>
    </a>
  );

  return (
    <>
      <Helmet>
        <title>Découpe laser métal en Vendée | LAXER 5</title>
        <meta name="description" content="LAXER 5 vous présente ses services de découpe laser, adaptés à tous vos projets, avec une production rapide et professionnelle." />
        <link rel="canonical" href="https://www.laxer5.fr/decoupe-laser-metal" />
      </Helmet>

      <div className="dlmPage">

        {/* ── HERO ── */}
        <section className="dlmHero">
          <div className="dlmHeroWrap">
            <div className="dlmHeroBg" />

            <h1 className="dlmHeroTitle">
              Découpe laser pour tous vos projets métalliques
            </h1>

            <div className="dlmHeroLeft">
              <p className="dlmHeroDesc">
                Chez LAXER 5, nous maîtrisons la découpe laser, mise en œuvre pour travailler avec une précision remarquable différents matériaux métalliques tels que l’acier, l’inox et l’aluminium. Elle consiste en un puissant faisceau laser qui vient découper la matière de façon nette et rapide, rendant possible la fabrication de pièces aux formes complexes.
              </p>
              <a className="dlmBtnRed" href="/contact">Lancer mon projet</a>
            </div>

            <div className="dlmHeroRight">
              <div className="dlmHeroImg">
                <img src={imgHero} alt="Découpe laser métal industrielle" />
              </div>
            </div>

            <a className="dlmBtnRed dlmBtnHeroMobile" href="/contact">Lancer mon projet</a>
          </div>
        </section>

        {/* ── BODY ── */}
        <section className="dlmPageBody">
          <div className="dlmPageGrid">
            <div>
              <nav className="dlmBreadcrumb">
                <a href="/">Accueil</a> <span>›</span>{" "}
                <a href="/services">Services</a> <span>›</span>{" "}
                <span>Découpe laser métal</span>
              </nav>

              <section className="dlmSection">
                <div className="dlmIntroGrid">
                  <div>
                    <h2 className="dlmTitleXl">Découpe laser pour tous vos projets métalliques</h2>
                    <p className="dlmTextBody">
                      Notre entreprise propose un service de découpe, adapté aussi bien aux besoins industriels qu'aux projets sur mesure. Nous travaillons l'acier, l'aluminium et l’inox grâce à des machines laser qui assurent une qualité constante et une grande précision.
                      Différentes épaisseurs de tôle sont traitées par notre parc machine avancé, avec un processus optimisé qui limite les coûts de production. La rapidité d'exécution reste identique quelle que soit la quantité commandée, et les options de personnalisation rendent possible la réalisation de designs vraiment uniques. Contactez-nous via notre formulaire pour évaluer votre projet et recevoir un retour dans les meilleurs délais.
                    </p>
                    <div className="dlmAccList">
                      {accordion.map((a, i) => {
                        const isOpen = openAcc === i;
                        return (
                          <div className="dlmAccItem" key={a.title}>
                            <button type="button" className="dlmAccBtn" onClick={() => setOpenAcc(isOpen ? null : i)} aria-expanded={isOpen}>
                              <span className="dlmAccTitle">{a.title}</span>
                              <span className="dlmAccIcon">{isOpen ? "–" : "+"}</span>
                            </button>
                            <div className={`dlmAccPanel${isOpen ? " isOpen" : ""}`}>
                              <p className="dlmAccText">{a.text}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="dlmIntroImgCol">
                    <div className="dlmIntroImg">
                      <img src={img1} alt="Machine découpe laser métal" />
                    </div>
                  </div>
                </div>
              </section>

              <section className="dlmSection">
                <div className="dlmColsGrid">
                  {blocks.map((b, i) => (
                    <div key={i}>
                      <h3 className="dlmTitleMd">{b.title}</h3>
                      <p className="dlmTextBody">{b.text}</p>
                    </div>
                  ))}
                </div>
                <a className="dlmBtnRed" href="/contact">Obtenir un devis</a>
              </section>

              <section className="dlmSection">
                <h2 className="dlmTitleXl">Nos réalisations</h2>
                <p className="dlmTextBody">Quelques exemples de pièces réalisées dans notre atelier.</p>
                <div className="dlmGallery">
                  <div className="dlmGalleryItem"><img src={img2} alt="Réalisation découpe laser métal" /></div>
                  <div className="dlmGalleryItem"><img src={img3} alt="Réalisation découpe laser métal" /></div>
                </div>
              </section>

              <section className="dlmSection">
                <div className="dlmStatsBand">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <div className="dlmStatsNum">{s.num}</div>
                      <div className="dlmStatsLabel">{s.label}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="dlmSection">
                <h2 className="dlmTitleXl">L’opération de découpe laser</h2>
                <p className="dlmTextBody">La découpe laser travaille l'acier, l'inox et l'aluminium avec une précision remarquable. Un puissant faisceau laser découpe la matière de façon nette et rapide, permettant la fabrication de pièces aux formes complexes. Notre parc machine avancé traite différentes épaisseurs de tôle avec un processus optimisé qui limite les coûts de production.</p>
                <div className="dlmTypeGrid">
                  {typeCards.map((c) => (
                    <article className={`dlmTypeCard ${c.modifier}`} key={c.id}>
                      <div className="dlmTypeCard__watermarkWrap">
                        <div className="dlmTypeCard__watermark">{c.watermark}</div>
                      </div>
                      <div className="dlmTypeCardTop">
                        <div className="dlmTypeCard__bar" />
                        <h3 className="dlmTypeCard__title">{c.title}</h3>
                      </div>
                      <div className="dlmTypeCardBot">
                        <div className="dlmTypeCard__badges">
                          {c.badges.map((b) => (
                            <span
                              key={b.label}
                              className={`dlmTypeCard__badge ${b.accent ? "dlmTypeCard__badge--accent" : "dlmTypeCard__badge--neutral"
                                }`}
                            >
                              {b.label}
                            </span>
                          ))}
                        </div>
                        <p className="dlmTypeCard__text">{c.text}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className="dlmSection">
                <div className="dlmCta">
                  <div className="dlmCtaLeft">
                    <h2>Vous portez un projet nécessitant une découpe au laser ? </h2>
                    <p>Contactez-nous via notre formulaire en ligne pour obtenir une estimation précise du budget à engager. Il vous suffit de nous envoyer vos fichiers et de préciser vos besoins : matériau, épaisseur, quantité. Notre parc machine performant et notre expertise technique permettent la réalisation de pièces personnalisées, de prototypes et de productions en série avec une qualité supérieure et au meilleur coût. </p>
                    <div className="dlmCtaBtns">
                      <a className="dlmBtnBlack" href="/contact">Obtenir un devis</a>
                      <a className="dlmBtnTel" href="tel:+33251576515">02 51 57 65 15</a>
                    </div>
                  </div>
                  <div className="dlmCtaRight">
                    <a href="https://maps.app.goo.gl/NgrLXPqanHTcUU7q6" target="_blank" rel="noopener noreferrer" className="dlmRatingPill">
                      <img src={googleIcon} alt="Google" className="dlmRatingLogo" />
                      <span className="dlmRatingStar">★</span>
                      <strong className="dlmRatingScore">4.5</strong>
                      <span>•</span>
                      <span className="dlmRatingCount">4 avis</span>
                    </a>
                  </div>
                </div>
              </section>

              <section className="dlmSection">
                <h2 className="dlmTitleXl">FAQ</h2>
                <p className="dlmTextBody">Questions fréquentes sur notre service de découpe laser métal.</p>
                <div className="dlmFaqList">
                  {faq.map((item, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div className="dlmFaqItem" key={item.q}>
                        <button type="button" className="dlmFaqBtn" onClick={() => setOpenFaq(isOpen ? null : idx)} aria-expanded={isOpen}>
                          <span className="dlmFaqQuestion">{item.q}</span>
                          <span className="dlmFaqIcon">{isOpen ? "–" : "+"}</span>
                        </button>
                        <div className="dlmFaqAnswer" style={{ display: isOpen ? "block" : "none" }}>
                          <p>{item.a}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              <section className="dlmSection">
                <h2 className="dlmTitleXl">Aller plus loin</h2>
                <p className="dlmTextBody">Vous pouvez en apprendre davantage sur la découpe laser 2D, la découpe laser 3D et le pliage en consultant les pages dédiées à ces techniques.</p>
                <div className="dlmServiceGrid">{services.map((s) => <ServiceCard key={s.title} s={s} />)}</div>
                <div className="dlmServiceCarousel">{services.map((s) => <ServiceCard key={s.title} s={s} />)}</div>
              </section>
            </div>

            <StickyContactForm />
          </div>

          <button className="dlmFab" onClick={() => setModalOpen(true)} aria-label="Demander un devis">
            ✉ Devis rapide
          </button>
        </section>

        {/* ── MODAL ── */}
        <div
          className={`dlmModal${modalOpen ? " isOpen" : ""}`}
          onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false); }}
        >
          <div className="dlmModalInner">
            <div
              className="dlmModalHandle"
              onPointerDown={(e) => {
                const startY = e.clientY;
                const inner = e.currentTarget.closest('.dlmModalInner');
                const onMove = (ev) => { const dy = ev.clientY - startY; if (dy > 0) inner.style.transform = `translateY(${dy}px)`; };
                const onUp = (ev) => { const dy = ev.clientY - startY; inner.style.transform = ''; if (dy > 80) setModalOpen(false); window.removeEventListener('pointermove', onMove); window.removeEventListener('pointerup', onUp); };
                window.addEventListener('pointermove', onMove);
                window.addEventListener('pointerup', onUp);
              }}
            />
            <button className="dlmModalClose" onClick={() => setModalOpen(false)} aria-label="Fermer">✕</button>
            <StickyContactForm />
          </div>
        </div>

      </div>
    </>
  );
}