import Link from "next/link";

import { matiereSite } from "../data/site";

export function Colophon({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`matiere-colophon${compact ? " matiere-colophon--compact" : ""}`} aria-label="Studio information">
      <div>
        <p className="matiere-kicker">Colophon / Brussels</p>
        <h2 data-display-heading>{matiereSite.name}</h2>
        <p>{matiereSite.descriptor}</p>
      </div>

      <address>
        {matiereSite.address.map((line) => <span key={line}>{line}</span>)}
      </address>

      <div className="matiere-colophon__hours">
        {matiereSite.hours.map((item) => (
          <p key={item.day}><span>{item.day}</span><span>{item.hours}</span></p>
        ))}
      </div>

      <div className="matiere-colophon__contact">
        <a href={`mailto:${matiereSite.email}`}>{matiereSite.email}</a>
        <a href={`tel:${matiereSite.phone.replace(/\s/g, "")}`}>{matiereSite.phone}</a>
      </div>

      <p className="matiere-colophon__demo">Fictional portfolio studio. No real appointments are handled here.</p>
      <div className="matiere-colophon__links">
        <Link href="/sites/tatoueur-04/visit">Visit chapter →</Link>
        <Link href="/sites/tatoueur-04">Return to index ↑</Link>
      </div>
    </section>
  );
}
