import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import "../style/BodyNosMachines.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useMediaQuery } from "react-responsive";

import BysPrintExt from "../assets/Image/BysPrintExt.jpg";
import BysPrintExt2 from "../assets/Image/BysPrintExt2.jpg";
import BysPrintFront from "../assets/Image/BysPrintFront.jpg";
import BystarExt from "../assets/Image/BystarExt.jpg";
import AlphaOpen from "../assets/Image/AlphaOpen.jpg";
import AlphaClosed from "../assets/Image/AlphaClosed.jpg";
import Rapido from "../assets/Image/Rapido.jpg";
import Rapidofermé from "../assets/Image/Rapidofermé.jpg";
import prcn1 from "../assets/Image/prcn1.jpg";
import pieceplié8 from "../assets/Image/pieceplié8.png";
import ErmackExt from "../assets/Image/ErmackExt.jpg";
import ErmackInt from "../assets/Image/ErmackInt.jpg";
import ChariotsDroite from "../assets/Image/ChariotsDroite.jpg";
import ChariotsGauche from "../assets/Image/ChariotsGauche.jpg";
import PontRoulant from "../assets/Image/PontRoulant.jpg";
import Bureau from "../assets/Image/Bureau.jpg";

const responsive = {
  all: { breakpoint: { max: 4000, min: 0 }, items: 1 },
};

const machines = [
  {
    id: "laser3d",
    eyebrow: "Découpe 5 axes",
    title: "Tables de découpe\n5 axes",
    sub: "Une technologie de découpe laser alliant précision, polyvalence et qualité de coupe sur les formes les plus complexes.",
    specs: [
      { label: "Machines", value: "Alpha Cube 3020 2200 W\nPrima Rapido 2500 W" },
      { label: "Dimension max.", value: "X 3000 · Y 2000 · Z 750 mm" },
      { label: "Capacité max.", value: "Acier : 4 mm / Inox : 4 mm / Alu : 3 mm" },
      { label: "Fichiers", value: "DXF, IGES, STEP" },
    ],
    images: [
      { src: Rapido, alt: "Prima Rapido" },
      { src: Rapidofermé, alt: "Prima Rapido fermé" },
      { src: AlphaOpen, alt: "Alpha Cube ouvert" },
      { src: AlphaClosed, alt: "Alpha Cube fermé" },
    ],
    reverse: false,
    dark: true,
  },
  {
    id: "laser2d",
    eyebrow: "Découpe 3 axes",
    title: "Tables de découpe\nLaser 3 axes",
    sub: "À commande numérique. Capable de traiter des tôles de différentes épaisseurs avec une qualité de coupe nette et précise.",
    specs: [
      { label: "Machines", value: "Bystronic / Bystar 4020 — 4400 W\nBystronic / Bysprint 3015 — 2200 W" },
      { label: "Dimension max.", value: "2 000 × 4 000 mm" },
      { label: "Capacité max.", value: "Acier : 20 mm / Inox : 12 mm / Alu : 10 mm" },
      { label: "Fichiers", value: "DXF, IGES, STEP" },
    ],
    images: [
      { src: BystarExt, alt: "Bystar extérieur" },
      { src: BysPrintFront, alt: "Bysprint face" },
      { src: BysPrintExt, alt: "Bysprint extérieur" },
      { src: BysPrintExt2, alt: "Bysprint extérieur 2" },
    ],
    reverse: true,
    dark: false,
  },
  {
    id: "pliage",
    eyebrow: "Pliage tôle",
    title: "Presses plieuses\nà commande numérique",
    sub: "Réalisation de formes complexes sur une large gamme de matériaux, du prototype à la grande série, dans les tolérances les plus exigeantes.",
    specs: [
      { label: "Machines", value: "Rico prcn C-line\nErmaksan CNCAP 3100 — 160" },
      { label: "Longueur max.", value: "3 100 mm" },
      { label: "Puissance max.", value: "160 tonnes" },
      { label: "Fichiers", value: "DXF, IGES, STEP" },
    ],
    images: [
      { src: prcn1, alt: "Rico prcn" },
      { src: pieceplié8, alt: "Pièce pliée" },
      { src: ErmackExt, alt: "Ermaksan extérieur" },
      { src: ErmackInt, alt: "Ermaksan intérieur" },
    ],
    reverse: false,
    dark: true,
  },
  {
    id: "manutention",
    eyebrow: "Manutention & levage",
    title: "Chariots &\npont roulant",
    sub: "Un ensemble complet pour la manutention et le levage de charges lourdes en toute sécurité.",
    specs: [
      { label: "Matériels", value: "Chariot STILL RX60-35\nChariot MANITOU\nFENWICK-LINDE L10" },
      { label: "Charges max. chariots", value: "3 500 kg / 1 500 kg / 1 000 kg" },
      { label: "Charge max. pont", value: "1 250 kg" },
    ],
    images: [
      { src: ChariotsDroite, alt: "Chariot droite" },
      { src: ChariotsGauche, alt: "Chariot gauche" },
      { src: PontRoulant, alt: "Pont roulant" },
    ],
    reverse: true,
    dark: false,
  },
  {
    id: "programmation",
    eyebrow: "CAO / FAO",
    title: "Programmation\n2D / 3D & pliage",
    sub: "Simulation complète avant fabrication pour optimiser les parcours de coupe, organiser les séquences de pliage et prévenir les risques de collision.",
    specs: [
      { label: "Logiciels", value: "Tebis\nBysoft\nProfil-60s-Delem" },
      { label: "Usage", value: "3D\n2D\nPliage" },
      { label: "Fichiers", value: "DXF, IGES, STEP" },
    ],
    images: [
      { src: Bureau, alt: "Bureau programmation" },
    ],
    reverse: false,
    dark: true,
  },
];

export default function BodyNosMachines() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const obsRefs = useRef({});
  const [visible, setVisible] = useState({});

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting)
            setVisible((v) => ({ ...v, [e.target.dataset.id]: true }));
        }),
      { threshold: 0.1 }
    );
    Object.values(obsRefs.current).forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const reg = (id, el) => {
    obsRefs.current[id] = el;
    el?.setAttribute("data-id", id);
  };

  return (
    <>
      <Helmet>
        <title>Nos Machines — LAXER 5 | Découpe laser & pliage Vendée</title>
        <meta name="description" content="Découvrez le parc machines de LAXER 5 : tables laser 3 et 5 axes, presses plieuses, chariots et logiciels CAO/FAO." />
        <link rel="canonical" href="https://www.laxer5.fr/nosmachines" />
      </Helmet>

      <main className="nm-page">

        {/* ── HERO ── */}
        <section className="nm-hero">
          <div className="nm-hero__inner">
            <span className="nm-eyebrow">Parc machines</span>
            <h1 className="nm-hero__title">NOS<br />MACHINES</h1>
            <p className="nm-hero__sub">Laser 5 axes · Laser 3 axes · Pliage CNC · Manutention · CAO/FAO</p>
          </div>
          <div className="nm-hero__watermark" aria-hidden="true">PARC MACHINE</div>
        </section>

        {/* ── MACHINES ── */}
        {machines.map((m, i) => (
          <section
            key={m.id}
            className={`nm-section${m.dark ? " nm-section--dark" : " nm-section--light"}`}
            ref={(el) => reg(m.id, el)}
          >
            <div className={`nm-row${m.reverse ? " nm-row--reverse" : ""}${visible[m.id] ? " is-visible" : ""}`}>

              {/* Texte */}
              <div className="nm-col nm-col--text">
                <span className={`nm-eyebrow${m.dark ? " nm-eyebrow--red" : " nm-eyebrow--red"}`}>
                  {m.eyebrow}
                </span>
                <h2 className="nm-title">
                  {m.title.split("\n").map((line, j) => (
                    <span key={j}>{line}<br /></span>
                  ))}
                </h2>
                <p className="nm-sub">{m.sub}</p>

                <div className="nm-specs">
                  {m.specs.map((s) => (
                    <div key={s.label} className="nm-spec-row">
                      <span className="nm-spec-label">{s.label}</span>
                      <span className="nm-spec-value">
                        {s.value.split("\n").map((v, j) => (
                          <span key={j}>{v}<br /></span>
                        ))}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Images */}
              <div className="nm-col nm-col--media">
                {m.images.length > 1 ? (
                  <Carousel
                    responsive={{ all: { breakpoint: { max: 4000, min: 0 }, items: 1 } }}
                    infinite
                    autoPlay
                    autoPlaySpeed={3500}
                    arrows={!isMobile}
                    swipeable
                    showDots={false}
                    className="nm-carousel"
                  >
                    {m.images.map((img) => (
                      <div key={img.alt} className="nm-carousel__slide">
                        <img src={img.src} alt={img.alt} />
                      </div>
                    ))}
                  </Carousel>
                ) : (
                  <div className="nm-single-img">
                    <img src={m.images[0].src} alt={m.images[0].alt} />
                  </div>
                )}
              </div>

            </div>
          </section>
        ))}

      </main>
    </>
  );
}