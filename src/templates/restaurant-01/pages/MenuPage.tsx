import { silexMenu, silexMenuNote, silexMenuPrice, silexPairingPrice } from "../src/data/menu";

export function MenuPage() {
  return (
    <div className="silex-menu-page" data-silex-page="menu-poster">
      <section className="silex-menu-stage">
        <span>La carte du soir</span>
        <h1><em>Menu</em></h1>
        <div>
          <p>Six temps guidés par les arrivages et les maturités du moment.</p>
          <strong>{silexMenuPrice}</strong>
        </div>
      </section>

      <section className="silex-menu-paper" aria-label="Détail du menu">
        <div className="silex-menu-paper__heading">
          <p>Menu dégustation</p>
          <span>Bruxelles · Service du soir</span>
        </div>

        <div className="silex-menu-acts">
          {silexMenu.map((section, sectionIndex) => (
            <article className="silex-menu-act" key={section.title}>
              <div className="silex-menu-act__head">
                <span>0{sectionIndex + 1}</span>
                <div>
                  <h2>{section.title}</h2>
                  {section.intro ? <p>{section.intro}</p> : null}
                </div>
              </div>
              <div className="silex-menu-act__items">
                {section.items.map((item) => (
                  <div key={item.name}>
                    <p><strong>{item.name}</strong>{item.price ? <span>{item.price}</span> : null}</p>
                    <span>{item.description}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="silex-menu-price-poster">
          <span>Menu dégustation</span>
          <strong>{silexMenuPrice}</strong>
          <span>Accord vins</span>
          <strong>{silexPairingPrice}</strong>
        </div>

        <p className="silex-menu-note">{silexMenuNote}</p>
      </section>
    </div>
  );
}
