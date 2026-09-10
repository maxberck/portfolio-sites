import { MenuLines } from "../components/MenuLines";
import { SectionLabel } from "../components/SectionLabel";
import { silexMenu, silexMenuNote, silexMenuPrice, silexPairingPrice } from "../src/data/menu";

export function MenuPage() {
  return (
    <>
      <section className="silex-page-intro silex-page-intro--menu">
        <SectionLabel>La carte du soir</SectionLabel>
        <h1>Menu dégustation</h1>
        <div className="silex-page-intro__aside">
          <p>Six temps guidés par les arrivages et les maturités du moment.</p>
          <div className="silex-menu-price-block">
            <span>Menu</span>
            <strong>{silexMenuPrice}</strong>
            <span>Accord vins</span>
            <strong>{silexPairingPrice}</strong>
          </div>
        </div>
      </section>

      <section className="silex-menu-page" aria-label="Détail du menu">
        <MenuLines sections={silexMenu} />
        <p className="silex-menu-note">{silexMenuNote}</p>
      </section>
    </>
  );
}
