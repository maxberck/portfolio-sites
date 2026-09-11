import Link from "next/link";

import { ArtistRoster } from "../components/ArtistRoster";
import { FlashSheet } from "../components/FlashSheet";
import { LuckyImage } from "../components/LuckyImage";
import { ShopInfoBoard } from "../components/ShopInfoBoard";
import { luckyFlashSheets, luckySite } from "../data/site";

const storefrontImage = {
  src: "https://images.unsplash.com/photo-1774249447467-b9bbecffc7a2?auto=format&fit=crop&w=1600&q=85",
  alt: "Tattoo shop storefront with a large tattoo sign",
  width: 1600,
  height: 1200,
};

export function HomePage() {
  return (
    <>
      <section className="lucky-opening">
        <div className="lucky-opening__sign">
          <span className="lucky-opening__kicker">{luckySite.opening.kicker}</span>
          <h1 className="lucky-opening__title">LUCKY XIII</h1>
          <p className="lucky-opening__descriptor">TRADITIONAL TATTOO &amp; FLASH SHOP</p>
          <p className="lucky-opening__copy">{luckySite.opening.statement}</p>
          <div className="lucky-opening__actions">
            <Link href="/sites/tatoueur-03/work">Open the flash book</Link>
            <span>BRUSSELS · XIII</span>
          </div>
        </div>
        <figure className="lucky-opening__photo">
          <LuckyImage asset={storefrontImage} priority sizes="(max-width: 760px) 100vw, 46vw" />
          <figcaption>Neighborhood shop energy, built as a fictional portfolio demo.</figcaption>
        </figure>
      </section>

      <section className="lucky-flash-wall" aria-labelledby="flash-wall-title">
        <div className="lucky-flash-wall__mast">
          <span>Fresh from the wall</span>
          <h2 id="flash-wall-title">FLASH / XIII</h2>
          <p>Traditional references, shop notes and process fragments arranged like printed sheets rather than product cards.</p>
        </div>
        <FlashSheet sheet={luckyFlashSheets[0]} variant="portrait" />
        <FlashSheet sheet={luckyFlashSheets[1]} variant="landscape" />
        <div className="lucky-flash-wall__ticket">
          <span>SHOP NOTE · 013</span>
          <strong>Pick a direction. We redraw for placement.</strong>
          <p>{luckySite.opening.note}</p>
        </div>
        <FlashSheet sheet={luckyFlashSheets[2]} variant="spread" />
      </section>

      <ArtistRoster />

      <section className="lucky-story-panel">
        <div>
          <span>From the wall</span>
          <h2>A shop that starts with flash, not funnels.</h2>
        </div>
        <div className="lucky-story-panel__copy">
          <p>{luckySite.shopStory}</p>
          <Link href="/sites/tatoueur-03/studio">Read the shop story →</Link>
        </div>
      </section>

      <ShopInfoBoard />
    </>
  );
}
