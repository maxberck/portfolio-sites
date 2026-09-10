import { terraSite } from "@/src/templates/restaurant-03/src/data/site";

export function PracticalPanel() {
  return (
    <section className="terra-practical" aria-labelledby="terra-practical-title">
      <div>
        <p className="terra-practical__eyebrow">Bruxelles</p>
        <h2 id="terra-practical-title">VENIR À TABLE.</h2>
      </div>

      <div className="terra-practical__address">
        <p>{terraSite.contact.address}</p>
        <p>{terraSite.contact.access}</p>
      </div>

      <div className="terra-practical__hours">
        {terraSite.hours.map((row) => (
          <p key={row.days}>
            <span>{row.days}</span>
            <span>{row.hours}</span>
          </p>
        ))}
      </div>

      <div className="terra-practical__contact">
        <a href={`tel:${terraSite.contact.phone.replace(/\s/g, "")}`}>{terraSite.contact.phone}</a>
        <a href={`mailto:${terraSite.contact.email}`}>{terraSite.contact.email}</a>
      </div>
    </section>
  );
}
