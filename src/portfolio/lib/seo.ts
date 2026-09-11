export const portfolioIndexablePaths = [
  "/",
  "/templates",
  "/contact",
  "/categories/garage",
  "/categories/restaurant",
  "/categories/coiffure",
  "/categories/tatoueur",
] as const;

export function getPublicSiteUrl() {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  return value ? value.replace(/\/$/, "") : null;
}
