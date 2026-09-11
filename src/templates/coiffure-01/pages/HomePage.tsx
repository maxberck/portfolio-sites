import Link from "next/link";

import { EditorialImage } from "../components/EditorialImage";
import { maisonEliseSite } from "../src/data/site";

export function HomePage() {
  const serviceGroups = maisonEliseSite.services.slice(0, 3);

  return (
    <>
      <section className="elise-hero">
        <div className="elise-hero__copy">
          <p className="elise-label">{maisonEliseSite.hero.eyebrow}</p>
          <h1>{maisonEliseSite.hero.title}</h1>
          <p className="elise-hero__body">{maisonEliseSite.hero.body}</p>
          <div className="elise-hero__actions">
            <Link href="/sites/coiffure-01/prestations">Voir les prestations</Link>
            <Link href="/sites/coiffure-01/contact">Nous contacter</Link>
          </div>
        </div>
        <EditorialImage image={maisonEliseSite.images.hero} className="elise-hero__portrait" preload sizes="(max-width: 767px) 100vw, 42vw" />
        <EditorialImage image={maisonEliseSite.images.detail} className="elise-hero__detail" sizes="(max-width: 767px) 42vw, 18vw" />
        <p className="elise-hero__note">Coupe · couleur · soin<br />Bruxelles</p>
      </section>

      <section className="elise-intro">
        <p className="elise-label">{maisonEliseSite.introduction.eyebrow}</p>
        <h2>{maisonEliseSite.introduction.title}</h2>
        <p>{maisonEliseSite.introduction.body}</p>
      </section>

      <section className="elise-service-chapters" aria-labelledby="elise-services-title">
        <div className="elise-service-chapters__head">
          <p className="elise-label">Prestations essentielles</p>
          <h2 id="elise-services-title">Le service suit la matière.</h2>
          <Link href="/sites/coiffure-01/prestations">Toutes les prestations ↗</Link>
        </div>
        {serviceGroups.map((group, index) => (
          <article className="elise-service-chapter" key={group.title}>
            <span className="elise-service-chapter__index">0{index + 1}</span>
            <h3>{group.title}</h3>
            <p>{group.intro}</p>
            <span>{group.items[0].price}</span>
          </article>
        ))}
      </section>

      <section className="elise-craft">
        <div className="elise-craft__copy">
          <p className="elise-label">Le geste</p>
          <h2>Observer avant de transformer.</h2>
          <p>{maisonEliseSite.philosophy.consultation}</p>
          <p>{maisonEliseSite.philosophy.craft}</p>
          <Link href="/sites/coiffure-01/maison">Découvrir la Maison ↗</Link>
        </div>
        <EditorialImage image={maisonEliseSite.images.consultation} className="elise-craft__wide" sizes="(max-width: 767px) 100vw, 54vw" />
        <EditorialImage image={maisonEliseSite.images.highlights} className="elise-craft__small" sizes="(max-width: 767px) 60vw, 24vw" />
      </section>

      <section className="elise-process" aria-label="Processus Maison Élise">
        {maisonEliseSite.process.map((step, index) => (
          <article key={step.label}>
            <span>0{index + 1}</span>
            <h3>{step.label}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </section>

      <section className="elise-gallery-teaser">
        <div className="elise-gallery-teaser__copy">
          <p className="elise-label">Galerie</p>
          <h2>Texture, lumière, mouvement.</h2>
          <Link href="/sites/coiffure-01/galerie">Voir la galerie ↗</Link>
        </div>
        <EditorialImage image={maisonEliseSite.images.precision} className="elise-gallery-teaser__portrait" sizes="(max-width: 767px) 70vw, 29vw" />
        <EditorialImage image={maisonEliseSite.images.interior} className="elise-gallery-teaser__landscape" sizes="(max-width: 767px) 100vw, 48vw" />
      </section>

      <section className="elise-contact-cta">
        <p className="elise-label">Maison Élise · Bruxelles</p>
        <h2>Parler de vos cheveux avant de parler technique.</h2>
        <div>
          <a href={`tel:${maisonEliseSite.contact.phone.replace(/\s/g, "")}`}>{maisonEliseSite.contact.phone}</a>
          <Link href="/sites/coiffure-01/contact">Contact & horaires ↗</Link>
        </div>
      </section>
    </>
  );
}
