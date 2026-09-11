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
              Pour adapter un template, partir d'une direction existante ou créer une vitrine différente pour votre activité.
            </p>
          </div>
        </section>

        <section className="portfolio-contact">
          <div className="portfolio-container portfolio-contact__grid">
            <div className="portfolio-contact__intro">
              <p className="portfolio-label">UN PROJET ?</p>
              <h2>Présentez-moi votre besoin.</h2>
            </div>

            <div className="portfolio-contact__details">
              <p>
                Le portfolio ne publie pas encore d'adresse e-mail dédiée. Le point de contact public disponible pour le moment est GitHub.
              </p>
              <a
                className="portfolio-text-link portfolio-contact__link"
                href="https://github.com/maxberck"
                target="_blank"
                rel="noreferrer"
              >
                Voir mon GitHub ↗
              </a>
              <p className="portfolio-contact__note">
                Vous pouvez également garder le lien d'un template qui vous plaît afin de préciser la direction souhaitée.
              </p>
            </div>
          </div>
        </section>
      </main>

      <PortfolioFooter />
    </>
  );
}
