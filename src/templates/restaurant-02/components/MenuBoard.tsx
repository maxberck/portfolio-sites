import type { District88MenuSection } from "@/src/templates/restaurant-02/types";

interface MenuBoardProps {
  sections: District88MenuSection[];
  compact?: boolean;
}

export function MenuBoard({ sections, compact = false }: MenuBoardProps) {
  return (
    <div className={`d88-menu-board${compact ? " d88-menu-board--compact" : ""}`}>
      {sections.map((section) => (
        <section className="d88-menu-section" key={section.id} id={section.id}>
          <div className="d88-menu-section__heading">
            <h2>{section.label}</h2>
            <span>{String(section.items.length).padStart(2, "0")} ITEMS</span>
          </div>
          <div className="d88-menu-section__rows">
            {section.items.map((item) => (
              <article className="d88-menu-row" key={item.name}>
                <div className="d88-menu-row__name">
                  {item.signature ? <span aria-label="Signature District 88">■</span> : null}
                  <h3>{item.name}</h3>
                </div>
                <p>{item.description}</p>
                <strong>{item.price}€</strong>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
