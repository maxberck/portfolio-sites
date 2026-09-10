import type { SilexMenuSection } from "../types";

type MenuLinesProps = {
  sections: SilexMenuSection[];
};

export function MenuLines({ sections }: MenuLinesProps) {
  return (
    <div className="silex-menu-lines">
      {sections.map((section) => (
        <section className="silex-menu-section" key={section.title}>
          <div className="silex-menu-section__heading">
            <h2>{section.title}</h2>
            {section.intro ? <p>{section.intro}</p> : null}
          </div>

          <div className="silex-menu-section__items">
            {section.items.map((item) => (
              <article className="silex-menu-item" key={`${section.title}-${item.name}`}>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
                {item.price ? <strong>{item.price}</strong> : null}
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
