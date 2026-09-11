import Link from "next/link";

import { LuckyImage } from "../components/LuckyImage";
import { luckyFlashSheets, luckySite } from "../data/site";

export function StudioPage() {
  return (
    <>
      <header className="lucky-page-intro lucky-page-intro--studio">
        <span>House notes / XIII</span>
        <h1>SHOP STORY</h1>
        <p className="lucky-page-intro__lede">A fictional old-school shop told like a folded pamphlet: flash on the wall, redraws at the counter and a simple process before the machine starts.</p>
      </header>

      <section className="lucky-story-panel lucky-story-panel--studio">
        <div>
          <span>Origin</span>
          <h2>Built around the wall, not a moodboard.</h2>
        </div>
        <div className="lucky-story-panel__copy">
          <p>{luckySite.shopStory}</p>
          <p>The visual language is traditional, but every fictional piece is still treated as something that has to fit a real body rather than a perfect rectangle.</p>
        </div>
      </section>

      <section className="lucky-process" aria-labelledby="lucky-process-title">
        <div className="lucky-process__mast">
          <span>House process</span>
          <h2 id="lucky-process-title">From reference to stencil.</h2>
        </div>
        <div className="lucky-process__steps">
          {luckySite.process.map(([number, title, text]) => (
            <article key={number}>
              <strong>{number}</strong>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lucky-studio-spread">
        <figure>
          <LuckyImage asset={luckyFlashSheets[2].image} sizes="(max-width: 760px) 100vw, 56vw" />
          <figcaption>Tools and setup shown as part of the working-shop story.</figcaption>
        </figure>
        <div className="lucky-studio-spread__note">
          <span>Hygiene / preparation</span>
          <h2>Clear process, no fake badges.</h2>
          <p>{luckySite.hygiene}</p>
          <p>Clients would normally receive placement-specific preparation and aftercare guidance from the real professional operating the studio.</p>
          <Link href="/sites/tatoueur-03/visit">Read the practical shop info →</Link>
        </div>
      </section>
    </>
  );
}
