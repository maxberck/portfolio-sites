import Image from "next/image";
import Link from "next/link";

import type { PortfolioSite } from "@/src/portfolio/types";

type SiteCardProps = {
  site: PortfolioSite;
};

function categoryLabel(category: PortfolioSite["category"]) {
  if (category === "tatoueur") return "Tattoo";
  return category.charAt(0).toUpperCase() + category.slice(1);
}

export function SiteCard({ site }: SiteCardProps) {
  const hasRealPreview = site.status === "available" && Boolean(site.preview);

  const visual = hasRealPreview && site.preview ? (
    <div className="site-card__preview site-card__preview--real" data-preview="real">
      <Image
        src={site.preview.src}
        alt={site.preview.alt}
        width={site.preview.width}
        height={site.preview.height}
        sizes="(max-width: 560px) 100vw, (max-width: 820px) 50vw, (max-width: 1100px) 58vw, 66vw"
        style={{ objectPosition: site.preview.focalPosition ?? "center top" }}
      />
    </div>
  ) : (
    <div className="site-card__preview site-card__preview--planned">
      <span className="site-card__planned-status">En préparation</span>
      <strong>{site.direction}</strong>
    </div>
  );

  const details = (
    <div className="site-card__content">
      <p className="site-card__meta">
        <span>{categoryLabel(site.category)}</span>
        <span aria-hidden="true"> / </span>
        <span>{site.direction}</span>
      </p>
      <h3>{site.name}</h3>
      <p className="site-card__summary">{site.summary}</p>
      <span className="site-card__status">
        {site.status === "available" ? "Ouvrir la démo ↗" : "En préparation"}
      </span>
    </div>
  );

  return (
    <article
      className={`site-card site-card--${site.status}`}
      data-category={site.category}
      data-site-card={site.id}
    >
      {site.status === "available" ? (
        <Link
          className="site-card__link"
          href={site.href}
          prefetch={false}
          target="_blank"
          rel="noreferrer"
          data-demo-link="true"
          aria-label={`${site.name} — ouvrir la démo dans un nouvel onglet`}
        >
          {visual}
          {details}
        </Link>
      ) : (
        <div className="site-card__body">
          {visual}
          {details}
        </div>
      )}
    </article>
  );
}
