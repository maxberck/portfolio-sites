import Link from "next/link";

import { chromaticSite } from "../data/site";

export function ContactPage() {
  return (
    <div className="chrom-page chrom-contact-page">
      <header className="chrom-contact-hero">
        <span>04 / CONTACT</span>
        <h1>CONTACT</h1>
        <div className="chrom-contact-tab">DEMO / INFO</div>
      </header>
      <section className="chrom-contact-board">
        <article className="chrom-contact-address">
          <span>LOCATION / FICTIONAL</span>
          <h2>BRUXELLES<br />1000</h2>
          <p>{chromaticSite.contact.address}</p>
        </article>
        <article className="chrom-contact-direct">
          <span>DIRECT</span>
          <a href={`tel:${chromaticSite.contact.phone.replace(/\s/g, "")}`}>{chromaticSite.contact.phone}</a>
          <a href={`mailto:${chromaticSite.contact.email}`}>{chromaticSite.contact.email}</a>
          <p>{chromaticSite.contact.access}</p>
        </article>
        <article className="chrom-contact-hours">
          <span>HOURS / ILLUSTRATIVE</span>
          {chromaticSite.hours.map((row) => <div key={row.days}><strong>{row.days}</strong><span>{row.hours}</span></div>)}
        </article>
        <article className="chrom-contact-next">
          <span>NEXT</span>
          <Link href="/sites/coiffure-04/color">COLOR →</Link>
          <Link href="/sites/coiffure-04/work">WORK →</Link>
        </article>
      </section>
    </div>
  );
}
