import { PageHero } from "../components/PageHero";
import { atelierNoirSite } from "../src/data/site";

export function WorkshopPage() {
  return (
    <div className="an-page">
      <PageHero eyebrow="Méthode & équipement" title="L’ATELIER" intro="Un espace de travail fictif imaginé autour de trois principes : diagnostic traçable, poste propre et explication compréhensible." />
      <section className="an-section an-section--tight">
        <div className="an-shell an-workshop-grid">
          <figure className="an-photo an-workshop-grid__wide"><img src={atelierNoirSite.images.workshop.src} alt={atelierNoirSite.images.workshop.alt} width={atelierNoirSite.images.workshop.width} height={atelierNoirSite.images.workshop.height} /></figure>
          <div className="an-workshop-note"><span>01 / CONTRÔLER</span><h2>Le symptôme avant la pièce.</h2><p>Essai, inspection et lecture des données servent à isoler la cause probable avant d’engager une intervention.</p></div>
          <figure className="an-photo"><img src={atelierNoirSite.images.engine.src} alt={atelierNoirSite.images.engine.alt} width={atelierNoirSite.images.engine.width} height={atelierNoirSite.images.engine.height} /></figure>
          <div className="an-workshop-note"><span>02 / EXPLIQUER</span><h2>Un constat lisible.</h2><p>La recommandation distingue ce qui est nécessaire maintenant, ce qui peut attendre et ce qui mérite simplement d’être surveillé.</p></div>
          <div className="an-workshop-note"><span>03 / INTERVENIR</span><h2>Faire moins, mais juste.</h2><p>La démonstration évite les faux labels et certifications. Dans un vrai projet, seuls les équipements et agréments réellement détenus seraient affichés.</p></div>
        </div>
      </section>
    </div>
  );
}
