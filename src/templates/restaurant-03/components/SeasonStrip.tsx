import { terraSite } from "@/src/templates/restaurant-03/src/data/site";

export function SeasonStrip() {
  return (
    <section className="terra-season" aria-label="En ce moment">
      <p className="terra-season__note">{terraSite.season.note}</p>
      <ul className="terra-season__ingredients" aria-label="Ingrédients de saison">
        {terraSite.season.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </section>
  );
}
