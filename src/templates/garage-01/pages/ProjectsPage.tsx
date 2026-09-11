import { PageHero } from "../components/PageHero";
import { atelierNoirSite } from "../src/data/site";

const cases = [
  ["DOSSIER 01", "Compacte essence", "Freinage", "Vibration au freinage", "Contrôle disques, portées et jeu du train avant."],
  ["DOSSIER 02", "Break diesel", "Diagnostic", "Voyant moteur intermittent", "Lecture défauts, contrôle connectique et valeurs en fonctionnement."],
  ["DOSSIER 03", "Utilitaire léger", "Pneumatiques", "Usure intérieure rapide", "Pression, état des pneus et inspection visuelle du train roulant."],
  ["DOSSIER 04", "Citadine", "Entretien", "Révision périodique", "Fluides, filtres et points de sécurité selon le plan prévu."],
] as const;

export function ProjectsPage() {
  return (
    <div className="an-page">
      <PageHero eyebrow="Journal d’atelier · cas fictifs" title="RÉALISATIONS" intro="Des exemples d’intervention présentés comme des dossiers de travail. Aucun avis client inventé, aucun résultat spectaculaire ajouté pour faire marketing." />

      <section className="an-section an-section--tight an-records-page">
        <div className="an-shell an-records">
          <div className="an-records__head" aria-hidden="true"><span>DOSSIER</span><span>VÉHICULE / SYMPTÔME</span><span>ZONE</span><span>CONTRÔLE</span></div>
          {cases.map(([record, vehicle, type, issue, action]) => (
            <article className="an-record" key={record}>
              <span className="an-record__id">{record}</span>
              <div><span>{vehicle}</span><h2>{issue}</h2></div>
              <strong>{type}</strong>
              <p>{action}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="an-record-photo-section">
        <div className="an-shell an-record-photo-grid">
          <figure className="an-photo an-record-photo"><img src={atelierNoirSite.images.car.src} alt={atelierNoirSite.images.car.alt} width={atelierNoirSite.images.car.width} height={atelierNoirSite.images.car.height} /><figcaption>IMAGE D’AMBIANCE · DÉMONSTRATION</figcaption></figure>
          <div className="an-record-note"><span>NOTE / PORTFOLIO</span><h2>Montrer le travail sans inventer la preuve.</h2><p>Ces dossiers illustrent la structure éditoriale du site. Ils ne représentent pas de vrais clients, kilométrages ou résultats d’intervention.</p></div>
        </div>
      </section>
    </div>
  );
}
