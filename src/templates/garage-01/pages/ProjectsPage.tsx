import { PageHero } from "../components/PageHero";
import { atelierNoirSite } from "../src/data/site";

const cases = [
  ["Compacte essence", "Freinage", "Vibration au freinage", "Contrôle disques, portées et jeu du train avant."],
  ["Break diesel", "Diagnostic", "Voyant moteur intermittent", "Lecture défauts, contrôle connectique et valeurs en fonctionnement."],
  ["Utilitaire léger", "Pneumatiques", "Usure intérieure rapide", "Pression, état des pneus et inspection visuelle du train roulant."],
  ["Citadine", "Entretien", "Révision périodique", "Fluides, filtres et points de sécurité selon le plan prévu."],
] as const;

export function ProjectsPage() {
  return (
    <div className="an-page">
      <PageHero eyebrow="Journal d’atelier · exemples fictifs" title="RÉALISATIONS" intro="Des cas illustratifs qui montrent comment le site peut raconter le travail sans inventer de résultats clients, d’avis ou de performances mesurées." />
      <section className="an-section an-section--tight">
        <div className="an-shell an-cases">
          {cases.map(([vehicle, type, issue, action], index) => (
            <article className="an-case" key={vehicle}>
              <span className="an-case__index">{String(index + 1).padStart(2, "0")}</span>
              <div><p>{vehicle}</p><h2>{issue}</h2></div>
              <div><span>{type}</span><p>{action}</p></div>
            </article>
          ))}
        </div>
      </section>
      <section className="an-section an-case-photo-section"><div className="an-shell"><figure className="an-photo an-case-photo"><img src={atelierNoirSite.images.car.src} alt={atelierNoirSite.images.car.alt} width={atelierNoirSite.images.car.width} height={atelierNoirSite.images.car.height} /><figcaption>IMAGE D’AMBIANCE · DÉMONSTRATION</figcaption></figure></div></section>
    </div>
  );
}
