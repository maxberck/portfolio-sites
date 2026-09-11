import Link from "next/link";

import { PageHero } from "../components/PageHero";
import { atelierNoirSite } from "../src/data/site";

export function WorkshopPage() {
  return (
    <div className="an-page">
      <PageHero eyebrow="Méthode & espace de travail" title="L’ATELIER" intro="Un atelier fictif pensé pour le travail réel : circulation claire, postes identifiés et explications simples avant intervention." />

      <section className="an-section an-section--tight an-workshop-page">
        <div className="an-shell an-workshop-gallery">
          <figure className="an-photo an-workshop-gallery__main">
            <img src={atelierNoirSite.images.workshop.src} alt={atelierNoirSite.images.workshop.alt} width={atelierNoirSite.images.workshop.width} height={atelierNoirSite.images.workshop.height} />
            <figcaption>ZONE 01 · ATELIER GÉNÉRAL</figcaption>
          </figure>
          <div className="an-workshop-gallery__statement"><span>ATELIER / 01</span><h2>Moins de décor.<br />Plus d’espace utile.</h2></div>
          <figure className="an-photo an-workshop-gallery__detail">
            <img src={atelierNoirSite.images.detail.src} alt={atelierNoirSite.images.detail.alt} width={atelierNoirSite.images.detail.width} height={atelierNoirSite.images.detail.height} />
            <figcaption>BAIE 03 · FREINAGE</figcaption>
          </figure>
          <div className="an-workshop-gallery__zone" aria-hidden="true"><span>ZONE</span><strong>03</strong><small>CONTRÔLE / MESURE</small></div>
          <figure className="an-photo an-workshop-gallery__engine">
            <img src={atelierNoirSite.images.engine.src} alt={atelierNoirSite.images.engine.alt} width={atelierNoirSite.images.engine.width} height={atelierNoirSite.images.engine.height} />
          </figure>
        </div>
      </section>

      <section className="an-workshop-principles">
        <div className="an-shell an-workshop-principles__grid">
          <article><span>01</span><h2>Précision</h2><p>Partir du symptôme, mesurer et contrôler avant d’engager une intervention.</p></article>
          <article><span>02</span><h2>Clarté</h2><p>Distinguer ce qui est nécessaire maintenant, ce qui peut attendre et ce qui mérite d’être surveillé.</p></article>
          <article><span>03</span><h2>Soin</h2><p>Un poste lisible, des opérations propres et aucun faux label utilisé pour donner une impression de compétence.</p></article>
        </div>
        <div className="an-shell an-workshop-principles__action"><Link className="an-text-link an-text-link--light" href="/sites/garage-01/contact">CONTACTER L’ATELIER <span>↗</span></Link></div>
      </section>
    </div>
  );
}
