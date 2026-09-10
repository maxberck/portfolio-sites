import Link from "next/link";

import { atelierNoirSite } from "../src/data/site";

export function HomePage() {
  const featured = atelierNoirSite.services.slice(0, 4);

  return (
    <div className="an-page">
      <section className="an-hero">
        <div className="an-shell an-hero__grid">
          <div className="an-hero__copy">
            <p className="an-kicker">{atelierNoirSite.hero.eyebrow}</p>
            <h1>{atelierNoirSite.hero.title}</h1>
            <p className="an-hero__body">{atelierNoirSite.hero.body}</p>
            <div className="an-hero__actions">
              <Link className="an-action" href="/sites/garage-01/services">Voir les services <span>↗</span></Link>
              <Link className="an-action an-action--quiet" href="/sites/garage-01/contact">Nous trouver</Link>
            </div>
          </div>

          <div className="an-hero__visual">
            <div className="an-control-rail" aria-hidden="true"><span>00</span><span>25</span><span>50</span><span>75</span><span>100</span></div>
            <figure className="an-photo an-hero__photo">
              <img src={atelierNoirSite.hero.image.src} alt={atelierNoirSite.hero.image.alt} width={atelierNoirSite.hero.image.width} height={atelierNoirSite.hero.image.height} />
              <figcaption>BAIE 02 · CONTRÔLE / INTERVENTION</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <div className="an-diagnostic-strip" aria-label="Domaines d’intervention">
        <div className="an-shell">
          <span>DIAG / 12V</span><span>FREIN / ABS</span><span>PNEU / TPMS</span><span>MOTEUR / ENTRETIEN</span><span>CLIM / HVAC</span>
        </div>
      </div>

      <section className="an-section an-services-home">
        <div className="an-shell">
          <div className="an-section-heading">
            <p className="an-kicker">Interventions courantes</p>
            <h2>Ce qu’on contrôle avant de remplacer.</h2>
          </div>
          <div className="an-service-grid">
            {featured.map((service) => (
              <article className="an-service-card" key={service.code}>
                <span>{service.code}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
          <Link className="an-action" href="/sites/garage-01/services">Tous les services <span>↗</span></Link>
        </div>
      </section>

      <section className="an-section an-method">
        <div className="an-shell an-method__grid">
          <figure className="an-photo an-method__photo">
            <img src={atelierNoirSite.images.engine.src} alt={atelierNoirSite.images.engine.alt} width={atelierNoirSite.images.engine.width} height={atelierNoirSite.images.engine.height} />
          </figure>
          <div className="an-method__copy">
            <p className="an-kicker">Méthode</p>
            <h2>Mesurer d’abord. Expliquer ensuite.</h2>
            <p>Un défaut affiché n’est pas un diagnostic. Atelier Noir met en scène une façon de travailler où la lecture des symptômes, le contrôle physique et la transparence précèdent l’intervention.</p>
            <Link className="an-action" href="/sites/garage-01/atelier">Voir l’atelier <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="an-section an-recent">
        <div className="an-shell an-recent__grid">
          <div>
            <p className="an-kicker">Cas illustratifs</p>
            <h2>Des problèmes ordinaires, traités proprement.</h2>
          </div>
          <div className="an-log-list">
            <p><span>COMPACTE</span> Vibrations au freinage <b>Disques / contrôle moyeux</b></p>
            <p><span>BREAK</span> Voyant moteur intermittent <b>Diagnostic / faisceau</b></p>
            <p><span>UTILITAIRE</span> Usure pneumatique irrégulière <b>Train roulant / pression</b></p>
          </div>
          <Link className="an-action" href="/sites/garage-01/realisations">Voir les réalisations <span>↗</span></Link>
        </div>
      </section>
    </div>
  );
}
