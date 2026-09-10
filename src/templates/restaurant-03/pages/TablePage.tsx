import { EditorialImage } from "@/src/templates/restaurant-03/components/EditorialImage";
import { terraSite } from "@/src/templates/restaurant-03/src/data/site";

export function TablePage() {
  return (
    <div className="terra-page terra-table-page">
      <header className="terra-page-intro terra-table-page__intro">
        <p>La façon de manger</p>
        <h1>LA TABLE</h1>
        <p>{terraSite.table.intro}</p>
      </header>

      <EditorialImage image={terraSite.table.heroImage} className="terra-table-page__hero-image" priority sizes="100vw" />

      <section className="terra-table-principles" aria-label="Principes de Terra">
        {terraSite.table.principles.map((principle) => (
          <article key={principle.title}>
            <h2>{principle.title}</h2>
            <p>{principle.text}</p>
          </article>
        ))}
      </section>

      <section className="terra-table-details" aria-label="Matières et saison">
        <EditorialImage image={terraSite.table.detailImages[0]} className="terra-table-details__first" />
        <div className="terra-table-details__note">
          <p>Terre / verre / lin / huile d’olive</p>
          <blockquote>{terraSite.table.note}</blockquote>
        </div>
        <EditorialImage image={terraSite.table.detailImages[1]} className="terra-table-details__second" />
      </section>
    </div>
  );
}
