"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import type { PortfolioSite } from "@/src/portfolio/types";

type CarouselSite = PortfolioSite & { preview: NonNullable<PortfolioSite["preview"]> };

type PortfolioHeroCarouselProps = {
  sites: PortfolioSite[];
};

export function PortfolioHeroCarousel({ sites }: PortfolioHeroCarouselProps) {
  const slides = sites.filter(
    (site): site is CarouselSite => site.status === "available" && Boolean(site.preview),
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const current = slides[index] ?? slides[0];
  if (!current) return null;

  return (
    <figure
      className="portfolio-hero__frame"
      data-hero-carousel="true"
      data-hero-carousel-current={current.id}
    >
      <div className="portfolio-hero__image-wrap">
        <Image
          key={current.id}
          className="portfolio-hero__carousel-image"
          src={current.preview.src}
          alt={current.preview.alt}
          width={current.preview.width}
          height={current.preview.height}
          sizes="(max-width: 760px) 100vw, 46vw"
          priority={index === 0}
          style={{ objectPosition: current.preview.focalPosition ?? "center top" }}
        />
        <span className="portfolio-hero__orbit" aria-hidden="true" />
        <span className="portfolio-corner portfolio-corner--tl" aria-hidden="true" />
        <span className="portfolio-corner portfolio-corner--br" aria-hidden="true" />
      </div>
      <figcaption aria-live="off">
        <span>{current.name} / {current.direction}</span>
        <span>Démo navigable</span>
      </figcaption>
    </figure>
  );
}
