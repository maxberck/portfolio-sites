import Link from "next/link";

import { carrosserie42Site } from "@/src/templates/garage-04/src/data/site";

export function HomePage() {
  return (
    <>
      <section className="c42-hero">
        <div className="c42-hero__copy">
          <span className="c42-kicker">{carrosserie42Site.hero.eyebrow}</span>
          <h1>{carrosserie42Site.hero.title}</h1>
          <p>{carrosserie42Site.hero.body}</p>
          <div className="c42-actions">
            <Link className="c42-button c42-button--dark" href="/sites/garage-04/carrosserie">VOIR LA CARROSSERIE</Link>
            <Link className="c42-button c42-button--line" href="/sites/garage-04/contact">NOUS CONTACTER</Link>
          </div>
        </div>
        <figure className="c42-hero__media">
          <img src={carrosserie42Site.hero.image.src} alt={carrosserie42Site.hero.image.alt} />
          <figcaption><span>ZONE 42</span><strong>CONTRÔLE / PRÉPARATION / FINITION</strong></figcaption>
        </figure>
      </section>

      <section className="c42-process" aria-label="Processus de remise en état">
        {carrosserie42Site.process.map((step) => (
          <article key={step.code}>
            <span>{step.code}</span>
            <strong>{step.label}</strong>
            <p>{step.text}</p>
          </article>
        ))}
      </section>

      <section className="c42-services">
        <div className="c42-section-head">
          <span className="c42-kicker">INTERVENTIONS / CARROSSERIE 42</span>
          <h2>La pièce dicte le travail.</h2>
          <p>Chaque intervention commence par l’état réel du support : pas par une formule standard ou une promesse de résultat avant inspection.</p>
        </div>
        <div className="c42-services__layout">
          <div className="c42-service c42-service--featured">
            <span>{carrosserie42Site.services[0].code}</span>
            <h3>{carrosserie42Site.services[0].title}</h3>
            <p>{carrosserie42Site.services[0].text}</p>
            <Link href="/sites/garage-04/carrosserie">DÉTAIL CARROSSERIE →</Link>
          </div>
          <div className="c42-services__stack">
            {carrosserie42Site.services.slice(1, 4).map((service) => (
              <article className="c42-service" key={service.code}>
                <span>{service.code}</span><h3>{service.title}</h3><p>{service.text}</p>
              </article>
            ))}
          </div>
          <div className="c42-service c42-service--oxide">
            <span>{carrosserie42Site.services[4].code}</span>
            <h3>{carrosserie42Site.services[4].title}</h3>
            <p>{carrosserie42Site.services[4].text}</p>
          </div>
          <div className="c42-service c42-service--paper">
            <span>{carrosserie42Site.services[5].code}</span>
            <h3>{carrosserie42Site.services[5].title}</h3>
            <p>{carrosserie42Site.services[5].text}</p>
          </div>
        </div>
      </section>

      <section className="c42-finish-feature">
        <div className="c42-finish-feature__media">
          <img src={carrosserie42Site.images.prep.src} alt={carrosserie42Site.images.prep.alt} />
          <div className="c42-image-label"><span>PRÉPA / 03</span><strong>MASQUAGE & SURFACE</strong></div>
        </div>
        <div className="c42-finish-feature__copy">
          <span className="c42-kicker">PEINTURE / FINITION</span>
          <h2>Une bonne finition commence avant la cabine.</h2>
          <p>Nettoyage, ponçage, apprêt et masquage construisent le support. La teinte et la finition viennent ensuite, avec un contrôle visuel de la zone réellement travaillée.</p>
          <ul>
            <li><span>01</span> Préparation de surface</li>
            <li><span>02</span> Masquage propre</li>
            <li><span>03</span> Mise en peinture</li>
            <li><span>04</span> Inspection finale</li>
          </ul>
          <Link className="c42-text-link" href="/sites/garage-04/peinture">VOIR LE PROCESSUS PEINTURE →</Link>
        </div>
      </section>

      <section className="c42-contact-strip">
        <div><span className="c42-kicker">UN ÉLÉMENT À CONTRÔLER ?</span><h2>Décrire le dommage. Voir la pièce. Décider ensuite.</h2></div>
        <div className="c42-contact-strip__actions">
          <a href={`tel:${carrosserie42Site.contact.phone.replace(/\s/g, "")}`}>{carrosserie42Site.contact.phone}</a>
          <Link href="/sites/garage-04/contact">CONTACT / ACCÈS →</Link>
        </div>
      </section>
    </>
  );
}
