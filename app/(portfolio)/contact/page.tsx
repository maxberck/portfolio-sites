import type { Metadata } from "next";

import { PortfolioFooter } from "@/src/portfolio/components/PortfolioFooter";
import { PortfolioHeader } from "@/src/portfolio/components/PortfolioHeader";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact pour discuter d'un site vitrine, d'une adaptation de template ou d'une nouvelle direction visuelle.",
};

export default function ContactPage() {
  return (
    <>
      <PortfolioHeader />

      <main data-contact-page="true">
        <section className="category-hero contact-hero" aria-labelledby="contact-title">
          <div className="portfolio-container category-hero__grid">
            <div>
              <p className="portfolio-label">CONTACT</p>
              <h1 id="contact-title">PARLONS DU SITE.</h1>
            </div>
            <p className="category-hero__description">
              Pour adapter un template, partir d&apos;une direction existante ou créer une vitrine différente pour votre activité.
              <br />
              <a className="portfolio-text-link portfolio-contact__link" href="mailto:maxence@ipn.be">
                Me contacter
              </a>
            </p>
          </div>
        </section>
      </main>

      <PortfolioFooter />
    </>
  );
}
