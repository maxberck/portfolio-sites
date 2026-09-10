import { EditorialImage } from "@/src/templates/restaurant-03/components/EditorialImage";
import { terraMenu } from "@/src/templates/restaurant-03/src/data/menu";
import { terraSite } from "@/src/templates/restaurant-03/src/data/site";

export function MenuPage() {
  return (
    <div className="terra-page terra-menu-page">
      <header className="terra-page-intro terra-menu-page__intro">
        <p>Carte de saison</p>
        <h1>LE MENU</h1>
        <p>
          Des assiettes à poser au centre. La carte est courte, les quantités bougent et les produits changent avec le moment.
        </p>
      </header>

      <div className="terra-menu-page__lead-image">
        <EditorialImage image={terraSite.sharedPlates[0].image} sizes="(max-width: 768px) 100vw, 58vw" />
      </div>

      <div className="terra-menu-page__grid">
        {terraMenu.map((category, index) => (
          <section className="terra-menu-category" data-tone={index % 3 === 0 ? "terracotta" : index % 3 === 1 ? "olive" : "ink"} key={category.name}>
            <h2>{category.name}</h2>
            <div className="terra-menu-category__items">
              {category.items.map((item) => (
                <div className="terra-menu-item" key={item.name}>
                  <div className="terra-menu-item__copy">
                    <p className="terra-menu-item__name">
                      {item.name}
                      {item.marker ? <span aria-label={` · ${item.marker}`}> · {item.marker}</span> : null}
                    </p>
                    <p>{item.description}</p>
                  </div>
                  <span className="terra-menu-item__price">{item.price}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="terra-menu-page__closing">
        <EditorialImage image={terraSite.sharedPlates[1].image} sizes="(max-width: 768px) 100vw, 42vw" />
        <p>
          V = végétarien · VG = végétal. Informations alimentaires présentées à titre de démonstration uniquement.
        </p>
      </div>
    </div>
  );
}
