import Image from "next/image";
import Link from "next/link";

import type { PortfolioSite } from "@/src/portfolio/types";

export type SiteCardPlacement = "anchor" | "tall" | "compact" | "wide" | "standard";

type SiteCardProps = {
  site: PortfolioSite;
  placement?: SiteCardPlacement;
};

function categoryLabel(category: PortfolioSite["category"]) {
  if (category === "tatoueur") return "Tattoo";
  return category.charAt(0).toUpperCase() + category.slice(1);
}

export function SiteCard({ site, placement = "standard" }: SiteCardProps) {
  const hasRealPreview = site.status === "available" && Boolean(site.preview);

  const visual = hasRealPreview && site.preview ? (
    <div className="site-card__preview site-card__preview--real" data-preview="real">
      <Image
        src={site.preview.src}
        alt={site.preview.alt}
        width={site.preview.width}
        height={site.preview.height}
        sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 70vw"
        style={{ objectPosition: site.preview.focalPosition ?? "center top" }}
      />
    </div>
  ) : (
    <div className="site-card__preview site-card__preview--planned">
      <span className="site-card__planned-status">En préparation</span>
      <strong>{site.direction}</strong>
      <span className="site-card__signal" aria-hidden="true" />
    </div>
  );

  const details = (
    <div className="site-card__content">
      <div className="site-card__meta">
        <span>{categoryLabel(site.category)}</span>
        <span>{site.direction}</span>
      </div>
      <h3>{site.name}</h3>
      <p>{site.summary}</p>
      <span className="site-card__status">
        {site.status === "available" ? "Ouvrir la démo ↗" : "Aperçu à venir"}
      </span>
    </div>
  );

  return (
    <article
      className={`site-card site-card--${site.status}`}
      data-category={site.category}
      data-placement={placement}
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
