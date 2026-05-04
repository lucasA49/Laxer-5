import "../style/BodypliageTole.css";
import StickyContactForm from "./StickyContactForm";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import pieceplie2 from "../assets/Image/pieceplié2.png";
import pieceplie3 from "../assets/Image/pieceplié3.png";
import pieceplie4 from "../assets/Image/pieceplié4.png";
import pieceplie6 from "../assets/Image/pieceplié6.png";

import googleIcon from "../assets/icone/google-icon.svg";

import BystarInox from "../assets/Image/BystarInox.jpg";
import tetealfa3 from "../assets/Image/tetealfa3.jpg";
import pieceplié from "../assets/Image/pieceplié.jpg";

export default function PliageTole() {
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
      title: "Pliage tôle et découpe laser : une solution complète",
      text: "Le pliage tôle est le complément idéal à la découpe laser 2D pour obtenir des pièces fonctionnelles en trois dimensions. Les feuilles métalliques sont façonnées avec exactitude afin de leur donner les formes spécifiques dont vous avez besoin. Grâce à notre plieuse à commande numérique, vous bénéficiez d'une qualité constante à un tarif compétitif, même pour de petites quantités.",
    },
    {
      title: "Quels fichiers fournir pour un devis de pliage ?",
      text: "Idéalement : un plan PDF coté (matière, épaisseur, angles, quantités) et, si possible, un fichier 3D (STEP) ou un plan détaillé. Si la découpe est à faire chez nous, vous pouvez joindre un DXF.",
    },
  ];

  const blocks = [
    {
      title: "Le processus de pliage",
      text: "Vous nous envoyez vos fichiers de découpe (DXF) , vos plans cotés indiquant la matière, l'épaisseur et les pliages souhaités. Lorsque cela est possible, les fichiers 3D (STEP) permettent une intégration directe en programmation et une préparation optimisée du pliage. Après étude de votre demande, nous vous transmettons un devis détaillé. L'équipe de LAXER 5 vous guide dans le choix des matériaux et des angles adaptés selon les contraintes techniques de votre projet.",
    },
    {
      title: "La spécificité du pliage tôle",
      text: "Le pliage tôle transforme des pièces planes en métal découpées au laser en éléments tridimensionnels fonctionnels. Notre plieuse à commande numérique offre une grande liberté de conception et travaille avec précision une large gamme de matériaux, créant des plis en L, en U, en Z ou des formes plus complexes selon vos besoins.",
    },
    {
      title: "Les secteurs qui bénéficient du pliage tôle",
      text: "Le pliage de tôle en métal répond aux exigences de nombreux secteurs industriels nécessitant des pièces métalliques formées avec précision. On retrouve cette technique dans la construction métallique, la fabrication de boîtiers et d'armoires électriques, l'industrie du bâtiment pour les éléments de couverture, la création de supports et châssis, ainsi que dans la production de mobilier métallique et d'équipements sur mesure. Elle est également très présente dans l'automobile qui l'utilise sur les composants de carrosserie et de châssis, l'aéronautique et l'aérospatiale qui en ont besoin sur des éléments légers et résistants, les transports pour des structures robustes comme des longerons et passerelles, etc.",
    },
    {
      title: "Les avantages du pliage tôle",
      text: "Le pliage de précision offre une grande flexibilité de fabrication, sans nécessiter la réalisation d'outillages dédiés pour chaque pièce. Il permet aussi de réduire le nombre de pièces à assembler. En intégrant des formes directement dans la tôle, il limite les opérations d'assemblage et de soudure, ce qui contribue à des gains de temps, son coût reste donc très attractif.En outre, les délais de fabrication sont rapides et la commande numérique assure la production de pièces identiques les unes aux autres. ",
    },
  ];

  const matCards = [
    {
      title: "Pliage tôle acier",
      text: "L'acier se prête parfaitement au pliage grâce à sa résistance mécanique, permettant la réalisation de pièces robustes pour toutes sortes d'applications.",
      keyword: "ACIER",
      mod: "acier",
      nuances: "Acier noir · Galva · Larmé · Corten",
      epaisseur: "0.5 → 20 mm",
      badge: ["Robustesse"],
    },
    {
      title: "Pliage tôle inox",
      text: "L'inox conserve ses propriétés après le pliage, c'est donc un matériau de choix pour les environnements exigeants ou les finitions esthétiques soignées.",
      keyword: "INOX",
      mod: "inox",
      nuances: "304 · 316L · Brossé",
      epaisseur: "0.5 → 20 mm",
      badge: ["Finition", "Inoxydable"],
    },
    {
      title: "Pliage tôle alu",
      text: "L'aluminium apporte une légèreté appréciable et une facilité de mise en forme. Il convient particulièrement aux projets nécessitant un poids réduit sans compromettre la solidité de l'ensemble.",
      keyword: "ALU",
      mod: "alu",
      nuances: "Aluminium",
      epaisseur: "0.5 → 20 mm",
      badge: ["Légèreté"],
    },
  ];

  const stats = [
    { num: "50 000+", label: "Pièces pliées" },
    { num: "800T", label: "Tôle traitée" },
    { num: "15+", label: "Ans d'expérience" },
    { num: "200+", label: "Clients satisfaits" },
  ];

  const services = [
    { title: "Découpe laser 2D", img: BystarInox, href: "/decoupe-laser-2d" },
    { title: "Découpe laser 3D", img: tetealfa3, href: "/decoupe-laser-3d" },
    { title: "Pliage", img: pieceplié, href: "/realisations" },
  ];

  const faq = [
    {
      q: "Quels sont les matériaux compatibles avec vos services de pliage de tôle ?",
      a: "Chez LAXER 5, nous procédons au pliage de tôles en acier, en inox et en aluminium.",
    },
    {
      q: "Comment est calculé le coût d'un projet de pliage de tôle ?",
      a: "Le tarif se calcule selon le type de métal, son épaisseur, la quantité et la complexité des plis à réaliser. Transmettez-nous vos plans pour recevoir un devis correspondant à votre projet.",
    },
    {
      q: "Quelles sont les capacités maximales de vos machines pour le pliage de tôle ?",
      a: "Notre plieuse assure une longueur de pliage maximum de 3100 mm et une force de pliage maximum de 160 tonnes. Nous pouvons travailler différentes épaisseurs de tôle selon les matériaux utilisés.",
    },
    {
      q: "Quels formats de fichier acceptez-vous pour préparer les opérations de pliage ?",
      a: "Nous acceptons les plans cotés et les fichiers 3D au format STEP pour préparer les opérations de pliage.",
    },
    {
      q: "Quelles pièces peuvent être fabriquées avec le pliage de tôle ?",
      a: "Le pliage de tôle permet de fabriquer une grande variété de pièces métalliques, telles que des éléments de mobilier urbain, des pièces de structure pliées, des supports et consoles de fixation, des capots et habillages pour équipements industriels, conduits de ventilation, rampes d'accès, etc.",
    },
  ];

  const ServiceCard = ({ s }) => (
    <a className="serviceCard" href={s.href}>
      <div className="serviceCardImg"><img src={s.img} alt={s.title} /></div>
      <div className="serviceCardBody">
        <h3>{s.title}</h3>
        <span className="btnOutline">En savoir plus</span>
      </div>
    </a>
  );

  return (
    <>
      <Helmet>
        <title>Pliage tôle industriel en Vendée | LAXER 5</title>
        <meta name="description" content="Faites appel à LAXER 5 pour vos opérations de pliage tôle et vos fabrications de pièces métalliques au meilleur prix." />
        <link rel="canonical" href="https://www.laxer5.fr/pliage-tole" />
      </Helmet>

      <div className="pliage">

        {/* ── HERO ── même structure que 2D/3D ── */}
        <section className="hero">
          <div className="heroWrap">
            <div className="heroBg" />
            <h1 className="heroTitle">
              Pliage de précision industriel
              <br />pour tous vos projets
              <br />métalliques
            </h1>

            <div className="heroLeft">
              <p className="heroDesc">
                Vous pouvez faire appel à notre service de pliage tôle de haute précision pour transformer vos pièces découpées en produits finis.
                Depuis 2019, notre plieuse à commande numérique travaille l'acier, l'inox et l'aluminium pour donner forme à vos projets, qu'il s'agisse de prototypes ou de séries complètes.
              </p>
              {/* Bouton caché sur mobile */}
              <a className="btnRed" href="/contact">Lancer mon projet</a>
            </div>

            <div className="heroRight">
              <div className="heroImg">
                <img src={pieceplie4} alt="Pliage tôle industriel" />
              </div>
            </div>

            {/* Bouton mobile uniquement — après l'image */}
            <a className="btnRed btnHeroMobile" href="/contact">Lancer mon projet</a>
          </div>
        </section>

        {/* ── BODY ── */}
        <section className="pageBody">
          <div className="pageGrid">
            <div>

              <nav className="breadcrumb">
                <a href="/">Accueil</a> <span>›</span>{" "}
                <a href="/services">Services</a> <span>›</span>{" "}
                <span>Pliage tôle</span>
              </nav>

              {/* ── Intro ── */}
              <section className="section">
                <div className="introGrid">
                  <div>
                    <h2 className="titleXl">Nos services de pliage tôle</h2>
                    <p className="textBody">
                      LAXER 5 offre une solution de pliage métal intégrée à nos services de découpe laser 2D et 3D.
                      Spécialisés dans la tôlerie depuis 2008, nous réalisons le pliage directement dans notre atelier, aussi bien sur les pièces issues de nos découpes que sur des pièces fournies par nos clients.
                      Ainsi, il est possible de vous fournir des produits prêts à l'emploi.
                      Nos équipements modernes permettent de réaliser des pliages complexes avec la plus haute précision. Nous traitons avec la même rigueur les petites séries et les productions importantes, en respectant des tolérances strictes.
                      Contactez-nous via notre formulaire pour nous exposer vos attentes et recevoir une réponse rapide.
                    </p>

                    <div className="accList">
                      {accordion.map((a, i) => {
                        const isOpen = openAcc === i;
                        return (
                          <div className="accItem" key={a.title}>
                            <button type="button" className="accBtn" onClick={() => setOpenAcc(isOpen ? null : i)} aria-expanded={isOpen}>
                              <span className="accTitle">{a.title}</span>
                              <span className="accIcon">{isOpen ? "–" : "+"}</span>
                            </button>
                            <div className={`accPanel${isOpen ? " isOpen" : ""}`}>
                              <p className="accText">{a.text}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="introImgCol">
                    <div className="introImg">
                      <img src={pieceplie6} alt="Pièce pliée" />
                    </div>
                  </div>
                </div>
              </section>

              {/* ── Blocs 2 colonnes ── */}
              <section className="section">
                <div className="colsGrid">
                  {blocks.map((b, i) => (
                    <div key={i}>
                      <h3 className="titleMd">{b.title}</h3>
                      <p className="textBody">{b.text}</p>
                    </div>
                  ))}
                </div>
                <a className="btnRed" href="/contact">Obtenir un devis</a>
              </section>

              {/* ── Galerie ── */}
              <section className="section">
                <h2 className="titleXl">Nos réalisations en pliage tôle</h2>
                <p className="textBody">
                  Découvrez quelques exemples de pièces réalisées dans notre atelier.
                  Chaque projet est traité avec la même rigueur, qu'il s'agisse d'une
                  pièce unique ou d'une série.
                </p>
                <div className="gallery">
                  <div className="galleryItem"><img src={pieceplie2} alt="Pièce pliée" /></div>
                  <div className="galleryItem"><img src={pieceplie3} alt="Pièce pliée" /></div>
                </div>
              </section>

              {/* ── Stats ── */}
              <section className="section">
                <div className="statsBand">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <div className="statsNum">{s.num}</div>
                      <div className="statsLabel">{s.label}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── Matériaux ── */}
              <section className="section">
                <h2 className="titleXl">L'opération de pliage</h2>
                <p className="textBody">
                  Après la découpe laser, une étape de pliage transforme les tôles planes en
                  pièces finies aux formes définitives. Cette opération permet de donner du
                  volume aux éléments découpés et de créer des structures tridimensionnelles
                  fonctionnelles. Nous travaillons plusieurs matériaux, chacun avec ses propriétés spécifiques selon les exigences de votre projet.
                </p>
                <div className="matGrid">
                  {matCards.map((c) => (
                    <article key={c.title} className={`matCard matCard--${c.mod}`}>
                      <div className="matCard__watermarkWrap">
                        <span className="matCard__watermark">{c.keyword}</span>
                      </div>
                      <div className="matCardTop">
                        <div className="matCard__bar" />
                        <h3 className="matCard__title">{c.title}</h3>
                      </div>
                      <div className="matCardBot">
                        <p className="matCard__nuances">{c.nuances}</p>
                        <div className="matCard__badges">
                          <span className="matCard__badge matCard__badge--neutral">{c.epaisseur}</span>
                          {c.badge.map((b) => (
                            <span key={b} className="matCard__badge matCard__badge--accent">{b}</span>
                          ))}
                        </div>
                        <p className="matCard__text">{c.text}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* ── CTA ── */}
              <section className="section">
                <div className="cta">
                  <div className="ctaLeft">
                    <h2>Comment initier un projet de pliage tôle ?</h2>
                    <p>
                      Renseignez notre formulaire en ligne pour obtenir une estimation
                      transparente de votre projet de pliage. Transmettez-nous vos fichiers
                      en spécifiant le matériau, l'épaisseur, les angles souhaités et la quantité.
                    </p>
                    <div className="ctaBtns">
                      <a className="btnBlack" href="/contact">Obtenir un devis</a>
                      <a className="btnTel" href="tel:+33251576515">02 51 57 65 15</a>
                    </div>
                  </div>
                  <div className="ctaRight">
                    <a href="https://maps.app.goo.gl/NgrLXPqanHTcUU7q6" target="_blank" rel="noopener noreferrer" className="ratingPill">
                      <img src={googleIcon} alt="Google" className="ratingLogo" />
                      <span className="ratingStar">★</span>
                      <strong className="ratingScore">4.5</strong>
                      <span>•</span>
                      <span className="ratingCount">4 avis</span>
                    </a>
                  </div>
                </div>
              </section>

              {/* ── FAQ ── */}
              <section className="section">
                <h2 className="titleXl">FAQ</h2>
                <p className="textBody">Questions fréquentes sur notre service de pliage tôle.</p>
                <div className="faqList">
                  {faq.map((item, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div className="faqItem" key={item.q}>
                        <button type="button" className="faqBtn" onClick={() => setOpenFaq(isOpen ? null : idx)} aria-expanded={isOpen}>
                          <span className="faqQuestion">{item.q}</span>
                          <span className="faqIcon">{isOpen ? "–" : "+"}</span>
                        </button>
                        <div className="faqAnswer" style={{ display: isOpen ? "block" : "none" }}>
                          <p>{item.a}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* ── Services liés ── */}
              <section className="section">
                <h2 className="titleXl">Aller plus loin</h2>
                <p className="textBody">
                  Découvrez nos autres prestations : la découpe laser 2D et 3D, utiles pour
                  réaliser des découpes précises sur tôles plates ou déjà formées.
                </p>
                <div className="serviceGrid">{services.map((s) => <ServiceCard key={s.title} s={s} />)}</div>
                <div className="serviceCarousel">{services.map((s) => <ServiceCard key={s.title} s={s} />)}</div>
              </section>

            </div>

            <StickyContactForm />
          </div>
        </section>

        {/* ── BOUTON FLOTTANT ── */}
        <button className="fabDevis" onClick={() => setModalOpen(true)} aria-label="Demander un devis">
          ✉ Devis rapide
        </button>

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