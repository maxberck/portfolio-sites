import { MenuBoard } from "@/src/templates/restaurant-02/components/MenuBoard";
import { district88Menu } from "@/src/templates/restaurant-02/src/data/menu";

export function MenuPage() {
  return (
    <div className="d88-page d88-menu-page" data-d88-page="menu-board">
      <header className="d88-page-hero d88-page-hero--acid">
        <p className="d88-kicker">ORDER BOARD / PRICES IN EUR</p>
        <h1>MENU / 88</h1>
        <div className="d88-menu-index" aria-label="Catégories du menu">
          {district88Menu.map((section) => <a key={section.id} href={`#${section.id}`}>{section.label}</a>)}
        </div>
      </header>

      <MenuBoard sections={district88Menu} />

      <aside className="d88-menu-note">
        <strong>ALLERGENS / DEMO</strong>
        <p>Informations allergènes fictives pour la démonstration. Demandez toujours l’information réelle au restaurant concerné.</p>
      </aside>
    </div>
  );
}
