import { DishList } from "../components/DishList";
import { SectionIntro } from "../components/SectionIntro";
import { kuroMenu } from "../src/data/menu";

export function MenuPage() {
  return (
    <div className="kuro-page kuro-menu-page">
      <section className="kuro-page-hero">
        <div className="kuro-shell kuro-page-hero__grid">
          <SectionIntro
            eyebrow="La carte"
            title="Menu"
            body="Une cuisine courte et saisonnière. Les compositions et disponibilités sont fictives et servent uniquement à cette démonstration."
            as="h1"
          />
          <p className="kuro-page-hero__aside">
            Omakase, petites assiettes, sushi, plats chauds et boissons. Les prix affichés sont des données de démonstration.
          </p>
        </div>
      </section>

      <div className="kuro-shell">
        {kuroMenu.map((section) => (
          <section className="kuro-menu-section" key={section.title}>
            <div className="kuro-menu-section__heading">
              <h2>{section.title}</h2>
              {section.intro ? <p>{section.intro}</p> : null}
            </div>
            <DishList items={section.items} />
          </section>
        ))}
      </div>
    </div>
  );
}
