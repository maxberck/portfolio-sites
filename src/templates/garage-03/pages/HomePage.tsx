import Image from "next/image";
import Link from "next/link";

import { relais24Site } from "@/src/templates/garage-03/src/data/site";

export function HomePage() {
  return (
    <>
      <section className="r24-home-hero">
        <div className="r24-home-hero__copy">
          <div className="r24-status-row">
            <span>ASSISTANCE ROUTIÈRE</span>
            <span>BRUXELLES · SITE DÉMO</span>
          </div>
          <h1>{relais24Site.hero.title}</h1>
          <p>{relais24Site.hero.body}</p>
          <div className="r24-actions">
            <Link className="r24-btn r24-btn--signal" href="/sites/garage-03/depannage">Voir le dépannage</Link>
            <a className="r24-btn r24-btn--ghost" href={`tel:${relais24Site.contact.phone.replace(/\s/g, "")}`}>Appeler {relais24Site.contact.phone}</a>
          </div>
        </div>
        <div className="r24-home-hero__media">
          <Image
            src={relais24Site.hero.image.src}
            alt={relais24Site.hero.image.alt}
            width={relais24Site.hero.image.width}
            height={relais24Site.hero.image.height}
            priority
          />
          <div className="r24-route-badge" aria-hidden="true">
            <span>R24</span>
            <strong>INTERVENTION</strong>
            <small>ROUTE / ATELIER</small>
          </div>
        </div>
      </section>

      <section className="r24-service-band" aria-label="Services principaux">
        {relais24Site.services.slice(0, 4).map((service) => (
          <div key={service.code} className="r24-service-band__item">
            <span>{service.code}</span>
            <strong>{service.title}</strong>
            <small>{service.status}</small>
          </div>
        ))}
      </section>

      <section className="r24-section r24-section--cream">
        <div className="r24-section__heading">
          <span className="r24-kicker">INTERVENTIONS / 01—05</span>
          <h2>Une panne n’a pas besoin d’un faux tableau de bord. Elle a besoin d’une décision claire.</h2>
          <p>Chaque intervention commence par le symptôme et la situation réelle du véhicule. Le but est de savoir ce qui peut être traité sur place et ce qui doit être transféré.</p>
        </div>

        <div className="r24-dispatch-grid">
          {relais24Site.services.map((service) => (
            <article className="r24-dispatch-card" key={service.code}>
              <div className="r24-dispatch-card__top">
                <span>{service.code}</span>
                <small>{service.status}</small>
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="r24-section r24-section--night r24-process-section">
        <div className="r24-process-section__media">
          <Image
            src={relais24Site.images.roadside.src}
            alt={relais24Site.images.roadside.alt}
            width={relais24Site.images.roadside.width}
            height={relais24Site.images.roadside.height}
          />
          <span className="r24-photo-label">ZONE / INTERVENTION</span>
        </div>
        <div className="r24-process-section__content">
          <span className="r24-kicker">COMMENT ÇA SE PASSE</span>
          <h2>Appel → Localisation → Diagnostic → Action</h2>
          <div className="r24-process-list">
            {relais24Site.process.map((step) => (
              <div className="r24-process-step" key={step.code}>
                <span>{step.code}</span>
                <div>
                  <strong>{step.label}</strong>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="r24-cta-strip">
        <div>
          <span className="r24-kicker">VÉHICULE IMMOBILISÉ ?</span>
          <h2>Décrire le symptôme. Sécuriser la situation. Choisir la bonne suite.</h2>
        </div>
        <div className="r24-cta-strip__actions">
          <Link className="r24-btn r24-btn--signal" href="/sites/garage-03/contact">Contact</Link>
          <Link className="r24-text-link" href="/sites/garage-03/remorquage">Voir le remorquage →</Link>
        </div>
      </section>
    </>
  );
}
