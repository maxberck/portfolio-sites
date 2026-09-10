import Link from "next/link";

import type { PortfolioSite } from "@/src/portfolio/types";

type SiteCardProps = {
  site: PortfolioSite;
};

export function SiteCard({ site }: SiteCardProps) {
  const number = site.id.slice(-2);

  const content = (
    <>
      <div className="site-card__preview" aria-hidden="true">
        <span>{site.category}</span>
        <strong>{number}</strong>
      </div>

      <div className="site-card__content">
        <div className="site-card__meta">
          <span>{site.direction}</span>
          <span>{site.status === "available" ? "Voir le site" : "En préparation"}</span>
        </div>
        <h3>{site.name}</h3>
        <p>{site.summary}</p>
      </div>
    </>
  );

  return (
    <article className={`site-card site-card--${site.status}`}>
      {site.status === "available" ? (
        <Link className="site-card__link" href={site.href} prefetch={false}>
          {content}
        </Link>
      ) : (
        <div className="site-card__body">{content}</div>
      )}
    </article>
  );
}
