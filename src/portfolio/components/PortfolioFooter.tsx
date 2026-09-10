export function PortfolioFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="portfolio-footer" id="contact">
      <div className="portfolio-footer__inner">
        <div>
          <p className="portfolio-footer__eyebrow">Disponible pour des projets web</p>
          <p className="portfolio-footer__title">Un modèle peut devenir votre prochain site.</p>
        </div>

        <div className="portfolio-footer__meta">
          <a href="https://github.com/maxberck" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span>© {year}</span>
        </div>
      </div>
    </footer>
  );
}
