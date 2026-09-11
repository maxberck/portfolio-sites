import { Colophon } from "../components/Colophon";
import { MatiereImage } from "../components/MatiereImage";
import { matiereSite } from "../data/site";

export function VisitPage() {
  const image = matiereSite.works[4].image;

  return (
    <main className="matiere-main matiere-visit-page">
      <header className="matiere-page-intro matiere-page-intro--visit" data-overlap-group="visit-intro">
        <p className="matiere-kicker">Practical colophon / 05</p>
        <h1 data-display-heading data-overlap-check>VISIT</h1>
        <p className="matiere-page-intro__lede" data-overlap-check>Practical information for a fictional Brussels studio. No appointment is created from this portfolio demo.</p>
      </header>

      <section className="matiere-visit-spread">
        <div className="matiere-visit-spread__image"><MatiereImage image={image} sizes="(max-width: 760px) 100vw, 38vw" /></div>
        <div className="matiere-visit-spread__info">
          <div>
            <p className="matiere-folio">Address</p>
            <address>{matiereSite.address.map((line) => <span key={line}>{line}</span>)}</address>
          </div>
          <div>
            <p className="matiere-folio">Hours</p>
            {matiereSite.hours.map((item) => <p className="matiere-visit-row" key={item.day}><span>{item.day}</span><span>{item.hours}</span></p>)}
          </div>
          <div>
            <p className="matiere-folio">Contact</p>
            <p><a href={`mailto:${matiereSite.email}`}>{matiereSite.email}</a></p>
            <p><a href={`tel:${matiereSite.phone.replace(/\s/g, "")}`}>{matiereSite.phone}</a></p>
          </div>
          <div>
            <p className="matiere-folio">Access</p>
            <p>Central Brussels demo location. Exact access information would be replaced with the real client details.</p>
          </div>
          <div>
            <p className="matiere-folio">Inquiry</p>
            <p>For a real studio version, the email link can start a project conversation. This template intentionally includes no booking form, calendar or embedded map.</p>
          </div>
        </div>
      </section>

      <Colophon />
    </main>
  );
}
