import Link from "next/link";

import { atelierNoirSite } from "../src/data/site";

export function HomePage() {
  const featured = atelierNoirSite.services.slice(0, 5);

  return (
    <div className="an-page">
      <section className="an-hero">
        <div className="an-hero__media" aria-hidden="true">
          <img src={atelierNoirSite.hero.image.src} alt="" />
        </div>
        <div className="an-hero__shade" aria-hidden="true" />
        <div className="an-shell an-hero__content">
          <p className="an-kicker an-kicker--light">{atelierNoirSite.hero.eyebrow}</p>
          <h1>{atelierNoirSite.hero.title}</h1>
          <p className="an-hero__body">{atelierNoirSite.hero.body}</p>
          <div className="an-hero__actions">
            <Link className="an-button an-button--signal" href="/sites/garage-01/services">VOIR LES SERVICES</Link>
            <Link className="an-button an-button--ghost" href="/sites/garage-01/contact">NOUS TROUVER</Link>
          </div>
        </div>
        <div className="an-hero__bay" aria-hidden="true"><span>BAIE</span><strong>01</strong></div>
      </section>

      <section className="an-utility" aria-label="Informations principales">
        <div className="an-shell an-utility__grid">
          <div><span>VÉHICULES</span><strong>Garage multimarque</strong></div>
          <div><span>ATELIER</span><strong>Bruxelles · adresse fictive</strong></div>
          <div><span>HORAIRES</span><strong>Lun–Ven · 08:00–18:00</strong></div>
          <div><span>TÉLÉPHONE</span><strong>{atelierNoirSite.contact.phone}</strong></div>
        </div>
      </section>

      <section className="an-section an-services-home">
        <div className="an-shell">
          <div className="an-section-heading">
            <div><p className="an-kicker">SERVICES ATELIER</p><span className="an-section-index">01 / 05</span></div>
            <h2>Ce qu’il faut, quand il le faut.</h2>
            <p>Chaque intervention part d’un besoin concret, d’un contrôle et d’une explication claire. Pas d’empilement de forfaits pour remplir une page.</p>
          </div>
          <div className="an-service-bays">
            {featured.map((service) => (
              <article className="an-service-bay" key={service.code}>
                <div className="an-service-bay__rail"><span>{service.code}</span><span aria-hidden="true">→</span></div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <Link href="/sites/garage-01/services">INTERVENTIONS <span aria-hidden="true">↗</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="an-section an-method">
        <div className="an-shell an-method__grid">
          <div className="an-method__copy">
            <p className="an-kicker an-kicker--light">MÉTHODE / DIAGNOSTIC</p>
            <h2>Comprendre avant d’intervenir.</h2>
            <p>Un voyant ou un bruit donne une piste, pas une conclusion. Le contrôle physique, la mesure et l’explication précèdent le remplacement d’une pièce.</p>
            <div className="an-method__steps">
              <span><b>01</b> ÉCOUTER</span><span><b>02</b> MESURER</span><span><b>03</b> CONTRÔLER</span><span><b>04</b> EXPLIQUER</span>
            </div>
            <Link className="an-text-link an-text-link--light" href="/sites/garage-01/atelier">VOIR NOTRE MÉTHODE <span>↗</span></Link>
          </div>
          <figure className="an-photo an-method__photo">
            <img src={atelierNoirSite.images.engine.src} alt={atelierNoirSite.images.engine.alt} width={atelierNoirSite.images.engine.width} height={atelierNoirSite.images.engine.height} />
            <figcaption>ZONE CONTRÔLE · TRAIN AVANT</figcaption>
          </figure>
        </div>
      </section>

      <section className="an-section an-workshop-preview">
        <div className="an-shell">
          <div className="an-workshop-preview__head">
            <div><p className="an-kicker">L’ATELIER</p><h2>Pas un showroom.<br />Un lieu fait pour travailler.</h2></div>
            <Link className="an-text-link" href="/sites/garage-01/atelier">ENTRER DANS L’ATELIER <span>↗</span></Link>
          </div>
          <div className="an-workshop-preview__grid">
            <figure className="an-photo an-workshop-preview__main"><img src={atelierNoirSite.images.workshop.src} alt={atelierNoirSite.images.workshop.alt} width={atelierNoirSite.images.workshop.width} height={atelierNoirSite.images.workshop.height} /></figure>
            <figure className="an-photo an-workshop-preview__detail"><img src={atelierNoirSite.images.detail.src} alt={atelierNoirSite.images.detail.alt} width={atelierNoirSite.images.detail.width} height={atelierNoirSite.images.detail.height} /><figcaption>BAIE 03 · FREINAGE</figcaption></figure>
            <div className="an-zone-block" aria-hidden="true"><span>ZONE</span><strong>03</strong><small>CONTRÔLE / INTERVENTION</small></div>
          </div>
        </div>
      </section>

      <section className="an-contact-strip">
        <div className="an-shell an-contact-strip__grid">
          <div><p className="an-kicker an-kicker--light">BESOIN D’UN CONTRÔLE ?</p><h2>Parlez-nous simplement de ce que fait la voiture.</h2></div>
          <div><span>TÉLÉPHONE</span><strong>{atelierNoirSite.contact.phone}</strong><span>ADRESSE FICTIVE</span><strong>{atelierNoirSite.contact.location}</strong></div>
          <Link className="an-button an-button--signal" href="/sites/garage-01/contact">CONTACT & HORAIRES</Link>
        </div>
      </section>
    </div>
  );
}
