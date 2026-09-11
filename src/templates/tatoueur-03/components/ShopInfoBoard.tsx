import Link from "next/link";

import { luckyHours, luckySite } from "../data/site";

type ShopInfoBoardProps = {
  compact?: boolean;
};

export function ShopInfoBoard({ compact = false }: ShopInfoBoardProps) {
  return (
    <section className={`lucky-shop-board${compact ? " lucky-shop-board--compact" : ""}`} aria-labelledby="lucky-shop-board-title">
      <div className="lucky-shop-board__crest" aria-hidden="true">★ XIII ★</div>
      <div className="lucky-shop-board__copy">
        <span>Shop information</span>
        <h2 id="lucky-shop-board-title">Visit Lucky XIII</h2>
        <address>{luckySite.contact.address}</address>
        <p>{luckySite.contact.note}</p>
      </div>
      <div className="lucky-shop-board__hours" aria-label="Opening hours">
        {luckyHours.map((row) => (
          <div key={row.days}>
            <span>{row.days}</span>
            <strong>{row.hours}</strong>
          </div>
        ))}
      </div>
      <div className="lucky-shop-board__contact">
        <a href={`tel:${luckySite.contact.phone.replace(/\s/g, "")}`}>{luckySite.contact.phone}</a>
        <a href={`mailto:${luckySite.contact.email}`}>{luckySite.contact.email}</a>
        {!compact ? <Link href="/sites/tatoueur-03/visit">Full shop info →</Link> : null}
      </div>
    </section>
  );
}
