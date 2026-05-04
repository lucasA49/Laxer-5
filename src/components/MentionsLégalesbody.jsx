import { Helmet } from "react-helmet-async";
import "../style/MentionsLégales.css";

export default function MentionsLégalesbody() {
  return (
    <>
      <Helmet>
        <title>Mentions légales | LAXER 5</title>
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.laxer5.fr/mentions-legales" />
      </Helmet>
      <main className="ml-page">

        <section className="ml-hero">
          <div className="ml-hero__inner">
            <span className="ml-eyebrow">Informations légales</span>
            <h1 className="ml-hero__title">MENTIONS<br />LÉGALES</h1>
          </div>
          <div className="ml-hero__watermark" aria-hidden="true">LAXER 5</div>
        </section>

        <section className="ml-body">
          <div className="ml-container">

            <p className="ml-intro">
              Ce site est édité par la société <strong>LAXER{"\u00A0"}5</strong>,
              spécialisée dans la découpe laser et le pliage de tôle en Vendée.
              Les informations ci-dessous sont publiées conformément à l'article 6
              de la loi n°2004-575 du 21 juin 2004 pour la confiance dans
              l'économie numérique.
            </p>

            <div className="ml-divider" />

            <div className="ml-block">
              <h2 className="ml-block__title">Éditeur du site</h2>
              <div className="ml-block__content">
                <p><strong>LAXER 5</strong></p>
                <p>
                  ZI de Maunit — 134 rue des Pâtis<br />
                  85290 Mortagne-sur-Sèvre
                </p>
                <p>
                  Numéro de SIRET : 504 860 206 00011<br />
                  RCS : 504 860 206 — Tribunal de La Roche-sur-Yon<br />
                  TVA Intracommunautaire : FR29504860206
                </p>
                <p>
                  Responsable éditorial : GRATON Jean-Paul<br />
                  Tél. : <a href="tel:0251576515">02 51 57 65 15</a><br />
                  Email : <a href="mailto:jp.graton@laxer5.fr">jp.graton@laxer5.fr</a><br />
                  Site web : www.laxer5.fr
                </p>
              </div>
            </div>

            <div className="ml-divider" />

            <div className="ml-block">
              <h2 className="ml-block__title">Hébergement</h2>
              <div className="ml-block__content">
                <p><strong>OVH SAS</strong></p>
                <p>
                  2 rue Kellermann<br />
                  59100 Roubaix — France
                </p>
                <p>Tél. : +33 (0)9 72 10 10 07</p>
                <p>
                  Site web :{" "}
                  <a href="https://www.ovhcloud.com" target="_blank" rel="noopener noreferrer">
                    www.ovhcloud.com
                  </a>
                </p>
              </div>
            </div>

            <div className="ml-divider" />

            <div className="ml-block">
              <h2 className="ml-block__title">Conditions d'utilisation</h2>
              <div className="ml-block__content">
                <p>
                  Ce site est proposé en différents langages web (HTML5, JavaScript, CSS, etc.)
                  pour un meilleur confort d'utilisation. Nous vous recommandons de recourir
                  à des navigateurs modernes comme Chrome, Firefox, Safari ou Edge.
                </p>
                <p>
                  LAXER 5 met en oeuvre tous les moyens dont elle dispose pour assurer
                  une information fiable et une mise à jour régulière de son site internet.
                  Toutefois, des erreurs ou omissions peuvent survenir. L'internaute devra
                  s'assurer de l'exactitude des informations et signaler toute modification
                  qu'il jugerait utile.
                </p>
              </div>
            </div>

            <div className="ml-divider" />

            <div className="ml-block">
              <h2 className="ml-block__title">Propriété intellectuelle</h2>
              <div className="ml-block__content">
                <p>
                  Tout le contenu du présent site — incluant, de façon non limitative,
                  les graphismes, images, textes, logos et icônes ainsi que leur mise en forme —
                  est la propriété exclusive de <strong>LAXER{"\u00A0"}5</strong>.
                </p>
                <p>
                  Toute reproduction, distribution, modification ou publication, même partielle,
                  de ces éléments est strictement interdite sans accord écrit préalable de LAXER 5.
                  Cette représentation ou reproduction constitue une contrefaçon sanctionnée
                  par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
                </p>
              </div>
            </div>

            <div className="ml-divider" />

            <div className="ml-block">
              <h2 className="ml-block__title">Données personnelles</h2>
              <div className="ml-block__content">
                <p>
                  Les données collectées via le formulaire de contact (nom, email, téléphone)
                  sont utilisées uniquement pour traiter votre demande et ne sont jamais
                  transmises à des tiers. Conformément au RGPD, vous disposez d'un droit
                  d'accès, de rectification et de suppression en nous contactant à :{" "}
                  <a href="mailto:jp.graton@laxer5.fr">jp.graton@laxer5.fr</a>
                </p>
              </div>
            </div>

          </div>
        </section>

      </main>
    </>
  );
}