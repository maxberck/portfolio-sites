import Link from "next/link";

import { DistrictImage } from "../components/DistrictImage";
import { PageIntro } from "../components/PageIntro";
import { districtCutSite } from "../src/data/site";

export function ShopPage() {
  const { images, shop } = districtCutSite;

  return (
    <div className="district-page district-shop-page">
      <PageIntro index="02 / SHOP" title="The Shop" copy="Un lieu fonctionnel, pensé pour voir la coupe, travailler les détails et garder le rythme d’un barber de quartier." />
      <section className="district-shop-grid">
        <DistrictImage image={images.shop} className="district-shop-lead" sizes="(max-width: 900px) 100vw, 64vw" priority />
        <div className="district-shop-text-block">
          <span>WORK / 01</span>
          <h2>FADE. BARBE. CONSULTATION.</h2>
          <p>{shop.intro}</p>
          <ul>{shop.expectations.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <DistrictImage image={images.craft} className="district-shop-detail" sizes="(max-width: 900px) 100vw, 35vw" />
        <div className="district-shop-hours">
          <span>HOURS / 02</span>
          {districtCutSite.hours.map(([day, hours]) => (
            <div key={day}><strong>{day}</strong><span>{hours}</span></div>
          ))}
          <Link className="district-text-link" href="/sites/coiffure-02/contact">CONTACT ↗</Link>
        </div>
      </section>
    </div>
  );
}
