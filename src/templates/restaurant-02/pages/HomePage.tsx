import Link from "next/link";

import { MenuBoard } from "@/src/templates/restaurant-02/components/MenuBoard";
import { PosterImage } from "@/src/templates/restaurant-02/components/PosterImage";
import { TickerStrip } from "@/src/templates/restaurant-02/components/TickerStrip";
import { UtilityPanel } from "@/src/templates/restaurant-02/components/UtilityPanel";
import { district88Menu } from "@/src/templates/restaurant-02/src/data/menu";
import { district88Site } from "@/src/templates/restaurant-02/src/data/site";

export function HomePage() {
  return (
    <>
      <section className="d88-hero" data-d88-page="home-poster">
        <div className="d88-hero__type">
          <p className="d88-kicker">STREET KITCHEN / BRUXELLES</p>
          <h1 aria-label="EAT LOUD."><span>EAT</span><span>LOUD.</span></h1>
          <div className="d88-hero__actions">
            <Link className="d88-button d88-button--ink" href="/sites/restaurant-02/menu">MENU ↗</Link>
            <span>SMASH / FRIED / LATE</span>
          </div>
        </div>

        <div className="d88-hero__visual">
          <div className="d88-hero__ghost" aria-hidden="true">88</div>
          <PosterImage image={district88Site.hero.image} priority sizes="(max-width: 768px) 88vw, 42vw" />
          <div className="d88-ticket">
            <strong>{district88Site.hero.ticket}</strong>
            <span>12:00 → LATE</span>
            <span>BRUSSELS / BE</span>
          </div>
        </div>
      </section>

      <section className="d88-hot-list" aria-labelledby="hot-list-title">
        <div className="d88-hot-list__intro">
          <p className="d88-kicker">HOT LIST / RIGHT NOW</p>
          <h2 id="hot-list-title">THE FAST FOUR.</h2>
          <p>Quatre choix, servis sans discours. Le reste est sur le mur.</p>
        </div>
        <MenuBoard sections={[{ ...district88Menu[0], items: district88Menu[0].items.slice(0, 4) }]} compact />
      </section>

      <section className="d88-manifesto">
        <TickerStrip text={district88Site.manifesto.strapline} />
        <div className="d88-manifesto__grid">
          {district88Site.manifesto.lines.map((line, index) => (
            <article key={line}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{line}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="d88-flash" aria-label="Séquence photo District 88">
        <PosterImage image={district88Site.gallery[0]} className="d88-flash__one" />
        <div className="d88-flash__stamp" aria-hidden="true">NO<br />QUIET<br />FOOD</div>
        <PosterImage image={district88Site.gallery[3]} className="d88-flash__two" />
        <PosterImage image={district88Site.gallery[6]} className="d88-flash__three" />
      </section>

      <UtilityPanel />
    </>
  );
}
