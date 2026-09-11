import { PageHero } from "@/src/templates/garage-04/components/PageHero";
import { carrosserie42Site } from "@/src/templates/garage-04/src/data/site";

export function ProjectsPage() {
  return (
    <>
      <PageHero index="04" eyebrow="DOSSIERS / EXEMPLES ILLUSTRATIFS" title="RÉALISATIONS" body="Quatre fiches fictives pour montrer comment un dossier peut être présenté : dommage observé, action d’atelier et point de contrôle final." />
      <section className="c42-records">
        {carrosserie42Site.records.map((record, index) => (
          <article className="c42-record" key={record.code}>
            <div className="c42-record__head"><span>{record.code}</span><strong>{String(index + 1).padStart(2, "0")}</strong></div>
            <h2>{record.title}</h2>
            <p className="c42-record__vehicle">{record.vehicle}</p>
            <dl>
              <div><dt>ÉTAT VISIBLE</dt><dd>{record.issue}</dd></div>
              <div><dt>ACTION ATELIER</dt><dd>{record.action}</dd></div>
              <div><dt>CONTRÔLE</dt><dd>{record.control}</dd></div>
            </dl>
          </article>
        ))}
      </section>
      <p className="c42-demo-note">Ces dossiers sont entièrement fictifs et illustratifs. Ils ne constituent ni des témoignages clients, ni des preuves avant/après, ni des promesses de résultat.</p>
    </>
  );
}
