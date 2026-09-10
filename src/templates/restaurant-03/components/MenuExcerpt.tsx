import Link from "next/link";

import { terraMenu } from "@/src/templates/restaurant-03/src/data/menu";

const excerptCategories = ["À partager", "Feu", "Desserts"];

export function MenuExcerpt() {
  const categories = terraMenu.filter((category) => excerptCategories.includes(category.name));

  return (
    <section className="terra-menu-excerpt" aria-labelledby="terra-menu-excerpt-title">
      <div className="terra-section-heading terra-section-heading--menu">
        <p>Quelques assiettes</p>
        <h2 id="terra-menu-excerpt-title">LE MENU BOUGE AVEC LA SAISON.</h2>
      </div>

      <div className="terra-menu-excerpt__columns">
        {categories.map((category) => (
          <div className="terra-menu-excerpt__group" key={category.name}>
            <h3>{category.name}</h3>
            {category.items.slice(0, category.name === "Feu" ? 3 : 2).map((item) => (
              <div className="terra-menu-line" key={item.name}>
                <div>
                  <p className="terra-menu-line__name">{item.name}</p>
                  <p className="terra-menu-line__description">{item.description}</p>
                </div>
                <span>{item.price}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <Link className="terra-text-link" href="/sites/restaurant-03/menu">
        Menu complet →
      </Link>
    </section>
  );
}
