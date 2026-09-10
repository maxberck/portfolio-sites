import { district88Site } from "@/src/templates/restaurant-02/src/data/site";

export function UtilityPanel() {
  return (
    <section className="d88-utility" aria-labelledby="d88-utility-title">
      <div className="d88-utility__lead">
        <p className="d88-kicker">SERVICE INFO</p>
        <h2 id="d88-utility-title">COME HUNGRY.</h2>
      </div>
      <div className="d88-utility__address">
        <span>ADDRESS</span>
        <p>{district88Site.contact.address}</p>
        <p>{district88Site.contact.access}</p>
      </div>
      <div className="d88-utility__hours">
        <span>HOURS</span>
        {district88Site.hours.map((row) => (
          <p key={row.days}><strong>{row.days}</strong><span>{row.hours}</span></p>
        ))}
      </div>
      <div className="d88-utility__contact">
        <span>CONTACT</span>
        <a href={`tel:${district88Site.contact.phone.replace(/\s/g, "")}`}>{district88Site.contact.phone}</a>
        <a href={`mailto:${district88Site.contact.email}`}>{district88Site.contact.email}</a>
      </div>
    </section>
  );
}
