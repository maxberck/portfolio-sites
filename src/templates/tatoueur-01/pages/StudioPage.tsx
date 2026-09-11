import Link from "next/link";

import { BlackRitualImage } from "../components/BlackRitualImage";
import { blackRitualSite, tattooArtists } from "../data/site";

export function StudioPage() {
  return (
    <div className="ritual-subpage ritual-studio-page">
      <header className="ritual-page-intro ritual-page-intro--studio">
        <p className="ritual-kicker">ROOM / METHOD / CARE</p>
        <h1>STUDIO</h1>
        <p className="ritual-page-intro__lede">{blackRitualSite.manifesto}</p>
      </header>

      <section className="ritual-studio-manifesto" aria-labelledby="studio-manifesto-title">
        <div>
          <p className="ritual-kicker">MANIFESTO / 01</p>
          <h2 id="studio-manifesto-title">DRAW THE PLACEMENT, NOT A RECTANGLE.</h2>
        </div>
        <p>
          Black Ritual is a fictional portfolio studio built around custom work. References are discussed for mood,
          density and intention, but no existing tattoo is copied. Scale and body movement decide the drawing.
        </p>
      </section>

      <section className="ritual-process" aria-labelledby="ritual-process-title">
        <div className="ritual-process__heading">
          <p className="ritual-kicker">CUSTOM PROJECT / 02</p>
          <h2 id="ritual-process-title">PROCESS</h2>
        </div>
        <ol>
          {blackRitualSite.process.map(([number, title, copy]) => (
            <li key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="ritual-studio-images" aria-label="Studio atmosphere">
        <BlackRitualImage image={tattooArtists[1].portrait} sizes="(max-width: 760px) 100vw, 58vw" />
        <BlackRitualImage image={tattooArtists[2].portrait} sizes="(max-width: 760px) 68vw, 28vw" />
      </section>

      <section className="ritual-care" aria-labelledby="ritual-care-title">
        <p className="ritual-kicker">HYGIENE / 03</p>
        <h2 id="ritual-care-title">CLEAN WORK, PLAIN LANGUAGE.</h2>
        <div>
          <p>
            The demo describes a professional studio routine without claiming certifications or medical guarantees:
            single-use consumables where appropriate, disinfected work surfaces and clear preparation instructions.
          </p>
          <p>
            Before a real tattoo appointment, clients should follow the actual artist&apos;s preparation and aftercare
            instructions and seek qualified medical advice for health questions.
          </p>
        </div>
        <Link className="ritual-text-link" href="/sites/tatoueur-01/visit">Practical information ↗</Link>
      </section>
    </div>
  );
}
