type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
};

export function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <header className="an-page-hero">
      <div className="an-shell an-page-hero__inner">
        <div className="an-page-hero__rail" aria-hidden="true"><span>AN / SERVICE</span><strong>01</strong></div>
        <div className="an-page-hero__content">
          <p className="an-kicker">{eyebrow}</p>
          <div className="an-page-hero__grid">
            <h1>{title}</h1>
            <p>{intro}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
