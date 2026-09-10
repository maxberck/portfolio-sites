import Image from "next/image";
import Link from "next/link";

import type { PortfolioSite } from "@/src/portfolio/types";

type SiteCardProps = {
  site: PortfolioSite;
};

export function SiteCard({ site }: SiteCardProps) {
  const number = site.id.slice(-2);
  const hasRealPreview = site.status === "available" && Boolean(site.preview);

  const visual = hasRealPreview && site.preview ? (
    <div className="site-card__preview site-card__preview--real" data-preview="real">
      <Image
        src={site.preview.src}
        alt={site.preview.alt}
        width={site.preview.width}
        height={site.preview.height}
        sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 66vw"
        style={{ objectPosition: site.preview.focalPosition ?? "center top" }}
      />
      <span className="site-card__preview-cta" aria-hidden="true">Voir la démo ↗</span>
    </div>
  ) : (
    <div className="site-card__preview site-card__preview--planned">
      <div className="site-card__planned-top">
        <span>{site.category}</span>
        <span>#{number}</span>
      </div>
      <strong>{site.direction}</strong>
      <span className="site-card__planned-status">En préparation</span>
    </div>
  );

  const details = (
    <div className="site-card__content">
      <div className="site-card__meta">
        <span>{site.category}</span>
        <span>{site.direction}</span>
      </div>
      <div className="site-card__title-row">
        <h3>{site.name}</h3>
        <span>{number}</span>
      </div>
      <p>{site.summary}</p>
      <span className="site-card__status">
        {site.status === "available" ? "Voir la démo ↗" : "En préparation"}
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
          aria-label={`${site.name} — voir la démo (nouvel onglet)`}
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
